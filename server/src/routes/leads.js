import { Router } from 'express'
import mongoose from 'mongoose'
import ContactSubmission from '../models/ContactSubmission.js'

const router = Router()

router.post('/', async (req, res) => {
  if (mongoose.connection.readyState !== 1) {
    return res.status(503).json({ error: 'Database not configured or unavailable' })
  }

  const { name, email, phone, service, message, source } = req.body || {}
  if (!String(name || '').trim() || !String(email || '').trim() || !String(message || '').trim()) {
    return res.status(400).json({ error: 'name, email, and message are required' })
  }

  try {
    const doc = await ContactSubmission.create({
      name: String(name).trim(),
      email: String(email).trim(),
      phone: String(phone || '').trim(),
      service: String(service || '').trim(),
      message: String(message).trim(),
      source: String(source || 'website').trim(),
    })
    res.status(201).json({ id: String(doc._id) })
  } catch (err) {
    console.error('[leads]', err)
    res.status(500).json({ error: 'Could not save submission' })
  }
})

export default router
