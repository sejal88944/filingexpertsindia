import '../loadDotenv.js'
import mongoose from 'mongoose'

const uri = (process.env.MONGODB_URI || process.env.MONGO_URI || '').trim()
if (!uri) {
  console.error('server/.env मध्ये MONGO_URI किंवा MONGODB_URI पूर्ण URI टाका (रिकामी नसावी).')
  process.exit(1)
}

function dbNameFromUri(s) {
  const noQuery = s.split('?')[0]
  const last = noQuery.lastIndexOf('/')
  return last >= 0 ? noQuery.slice(last + 1).trim() : ''
}

try {
  await mongoose.connect(uri)
  const dbName = mongoose.connection.db.databaseName
  console.log('Database:', dbName)
  const cols = await mongoose.connection.db.listCollections().toArray()
  for (const c of cols.sort((a, b) => a.name.localeCompare(b.name))) {
    const n = await mongoose.connection.db.collection(c.name).countDocuments()
    console.log(`  ${c.name}: ${n}`)
  }
  await mongoose.disconnect()
} catch (e) {
  console.error(e.message)
  process.exit(1)
}
