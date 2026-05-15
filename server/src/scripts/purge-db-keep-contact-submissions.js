/**
 * Drops every collection in the database from MONGO_URI except `contact_submissions`
 * (callback / lead form documents stay in that collection).
 *
 * Requires CONFIRM_PURGE_KEEP_CONTACT_SUBMISSIONS to equal the database name in the URI
 * (e.g. carbook).
 *
 * Run: CONFIRM_PURGE_KEEP_CONTACT_SUBMISSIONS=carbook npm run db:purge-keep-contact
 */
import '../loadDotenv.js'
import mongoose from 'mongoose'

const uri = (process.env.MONGODB_URI || process.env.MONGO_URI || '').trim()
if (!uri) {
  console.error('Set MONGO_URI or MONGODB_URI in server/.env')
  process.exit(1)
}

function dbNameFromUri(connectionString) {
  const noQuery = connectionString.split('?')[0]
  const last = noQuery.lastIndexOf('/')
  if (last === -1 || last === noQuery.length - 1) return ''
  return noQuery.slice(last + 1).trim()
}

const actual = dbNameFromUri(uri)
const confirm = (process.env.CONFIRM_PURGE_KEEP_CONTACT_SUBMISSIONS || '').trim()

if (!actual) {
  console.error('Could not parse database name from URI.')
  process.exit(1)
}

if (confirm !== actual) {
  console.error(`Set in server/.env (must match URI database name "${actual}"):`)
  console.error(`  CONFIRM_PURGE_KEEP_CONTACT_SUBMISSIONS=${actual}`)
  process.exit(1)
}

const blocked = ['admin', 'local', 'config']
if (blocked.includes(actual)) {
  console.error(`Refusing to run on system database: ${actual}`)
  process.exit(1)
}

const KEEP = 'contact_submissions'

try {
  await mongoose.connect(uri)
  const db = mongoose.connection.db
  const cols = await db.listCollections().toArray()
  const names = cols.map((c) => c.name).sort()

  for (const name of names) {
    if (name.startsWith('system.')) {
      console.log(`(skip) ${name}`)
      continue
    }
    if (name === KEEP) {
      console.log(`(keep) ${name}`)
      continue
    }
    await db.dropCollection(name)
    console.log(`dropped: ${name}`)
  }

  const n = await db.collection(KEEP).countDocuments().catch(() => -1)
  if (n >= 0) console.log(`\nDone. "${KEEP}" document count: ${n}`)
  else console.log(`\nDone. Collection "${KEEP}" will be created on first form submit.`)

  await mongoose.disconnect()
} catch (e) {
  console.error(e.message || e)
  try {
    await mongoose.disconnect()
  } catch {
    /* ignore */
  }
  process.exit(1)
}
