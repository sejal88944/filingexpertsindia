/**
 * या प्रोजेक्टचा MongoDB Atlas डेटा पुसणे.
 *
 * A) Dedicated database (शिफारस: URI मध्ये .../aasha_sm?...)
 *    → पूर्ण database drop.
 *
 * B) carbook मध्ये चुकून AASHA collections असतील (cab चे users/leads इ. नको हात)
 *    → फक्त AASHA-only collection names drop.
 *
 * चालवा: npm run db:purge   (root किंवा server)
 */
import '../loadDotenv.js'
import mongoose from 'mongoose'

const uri = (process.env.MONGODB_URI || process.env.MONGO_URI || '').trim()
if (!uri) {
  console.error('\nMONGODB_URI किंवा MONGO_URI रिकामी आहे.')
  console.error('1) `server/.env` फाइल उघडा (प्रोजेक्टमधील server फोल्डर — जिथे package.json आहे).')
  console.error('2) एका ओळीत लिहा (उदा.):')
  console.error('   MONGO_URI=mongodb+srv://USER:PASS@cluster.../carbook?retryWrites=true&w=majority')
  console.error('3) `MONGO_URI=` नंतर काहीही नसावं — URI पूर्ण असावा.\n')
  process.exit(1)
}

function dbNameFromUri(connectionString) {
  const noQuery = connectionString.split('?')[0]
  const last = noQuery.lastIndexOf('/')
  if (last === -1 || last === noQuery.length - 1) return ''
  return noQuery.slice(last + 1).trim()
}

/** हे collections आपल्या AASHA stack ने तयार केलेले — cab चे users/leads/blogposts इ. नाहीत */
const AASHA_ONLY_ON_SHARED_DB = [
  'services',
  'blogs',
  'pricing',
  'contact_submissions',
  'testimonials',
  'faqs',
  'seo_pages',
  'admin_settings',
]

const actual = dbNameFromUri(uri)
const confirm = (process.env.CONFIRM_RESET_DB || '').trim()
const partialCarbook =
  process.env.DELETE_AASHA_COLLECTIONS_ON_CARBOOK === 'true' ||
  process.env.DELETE_AASHA_COLLECTIONS_ON_CARBOOK === '1'

if (!actual) {
  console.error('URI मधून database नाव काढता आलं नाही. उदा: ...mongodb.net/aasha_sm?...')
  process.exit(1)
}

if (confirm !== actual) {
  console.error('\nserver/.env मध्ये URI मधल्या database सारखं नाव टाका (एकदाच):')
  console.error(`  CONFIRM_RESET_DB=${actual}`)
  console.error('काम झाल्यावर ही लाइन काढून टाका.\n')
  process.exit(1)
}

const blockedFullDrop = ['admin', 'local', 'config']

try {
  await mongoose.connect(uri)
  const db = mongoose.connection.db

  if (actual === 'carbook') {
    if (!partialCarbook) {
      console.error(
        '\nURI "carbook" आहे — पूर्ण DB drop करणार नाही (cab इतर app).',
        '\nफक्त AASHA collections पुसायचे असतील तर .env मध्ये हे जोडा:',
        '\n  DELETE_AASHA_COLLECTIONS_ON_CARBOOK=true',
        '\nआणि CONFIRM_RESET_DB=carbook',
        '\n\nकिंवा URI बदलून dedicated DB वापरा: .../aasha_sm?... आणि CONFIRM_RESET_DB=aasha_sm\n',
      )
      await mongoose.disconnect()
      process.exit(1)
    }
    console.log(`carbook: फक्त AASHA-only collections drop (${AASHA_ONLY_ON_SHARED_DB.length} नावे)…`)
    for (const name of AASHA_ONLY_ON_SHARED_DB) {
      try {
        const cols = await db.listCollections({ name }).toArray()
        if (cols.length === 0) {
          console.log(`  (skip) ${name} — नाही`)
          continue
        }
        await db.dropCollection(name)
        console.log(`  ✓ dropped: ${name}`)
      } catch (e) {
        console.warn(`  ! ${name}: ${e.message}`)
      }
    }
    console.log('\nझालं. users / leads / blogposts इ. cab वाले स्पर्श केले नाहीत.')
    await mongoose.disconnect()
    process.exit(0)
  }

  if (blockedFullDrop.includes(actual)) {
    console.error(`हा system database drop करणार नाही: "${actual}"`)
    await mongoose.disconnect()
    process.exit(1)
  }

  console.log(`पूर्ण database drop: ${db.databaseName}`)
  await db.dropDatabase()
  console.log('झालं — या DB मधला सर्व डेटा Atlas वरून गेला.')
  await mongoose.disconnect()
} catch (e) {
  console.error(e.message)
  process.exit(1)
}
