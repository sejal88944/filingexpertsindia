import mongoose from 'mongoose'

const schema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    phone: { type: String, default: '' },
    service: { type: String, default: '' },
    message: { type: String, required: true },
    source: { type: String, default: 'website' },
  },
  { timestamps: true },
)

export default mongoose.model('ContactSubmission', schema, 'contact_submissions')
