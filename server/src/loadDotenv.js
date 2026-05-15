/**
 * Load server/.env — tries several locations (Cursor vs E: drive, npm --prefix).
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import dotenv from 'dotenv'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const candidates = [
  path.join(__dirname, '..', '.env'),
  path.join(process.cwd(), '.env'),
  path.join(process.cwd(), 'server', '.env'),
]

let loaded = null
for (const p of candidates) {
  if (fs.existsSync(p)) {
    dotenv.config({ path: p, override: false })
    loaded = p
    break
  }
}

if (!loaded) {
  console.warn('[env] No .env file found. Tried:\n  ' + candidates.join('\n  '))
} else if (process.env.DEBUG_DOTENV === '1') {
  console.warn('[env] Loaded:', loaded)
}
