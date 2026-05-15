import './loadDotenv.js'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import mongoose from 'mongoose'
import leadsRouter from './routes/leads.js'

const PORT = Number(process.env.PORT || 5000)
const uri = (process.env.MONGODB_URI || process.env.MONGO_URI || '').trim()

const app = express()
app.set('trust proxy', 1)

app.use(helmet())
app.use(
  cors({
    origin:
      process.env.CORS_ORIGIN === '*'
        ? true
        : process.env.CORS_ORIGIN
          ? process.env.CORS_ORIGIN.split(',').map((s) => s.trim())
          : true,
  }),
)
app.use(express.json({ limit: '128kb' }))

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: Number(process.env.RATE_LIMIT_MAX || 200),
  standardHeaders: true,
  legacyHeaders: false,
})
app.use('/api', apiLimiter)

app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    db: mongoose.connection.readyState === 1,
  })
})

app.use('/api/leads', leadsRouter)

async function start() {
  if (uri) {
    await mongoose.connect(uri)
    console.log('[api] MongoDB connected')
  } else {
    console.warn('[api] MONGO_URI / MONGODB_URI not set — POST /api/leads will return 503 until configured')
  }

  app.listen(PORT, () => {
    console.log(`[api] listening on http://localhost:${PORT}`)
  })
}

start().catch((err) => {
  console.error('[api] failed to start', err)
  process.exit(1)
})
