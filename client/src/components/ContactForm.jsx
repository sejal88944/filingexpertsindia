import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Loader2, Send } from 'lucide-react'
import { apiUrl, company } from '../config/site'

const empty = { name: '', email: '', phone: '', service: '', message: '' }

export default function ContactForm({
  id = 'contact-form',
  heading = 'Request a callback',
  sub = 'Share your requirement—we respond with next steps and a clear document checklist.',
  source = 'website',
  defaultService = '',
}) {
  const [form, setForm] = useState(() => ({ ...empty, service: defaultService || '' }))
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  useEffect(() => {
    if (defaultService) setForm((f) => ({ ...f, service: defaultService }))
  }, [defaultService])

  async function onSubmit(e) {
    e.preventDefault()
    setError('')
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill name, email, and message.')
      return
    }
    setStatus('loading')
    try {
      const leadsUrl = apiUrl
        ? `${apiUrl.replace(/\/$/, '')}/api/leads`
        : import.meta.env.DEV
          ? '/api/leads'
          : null

      if (!leadsUrl) {
        window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
          `Lead: ${form.service || 'General'} — ${form.name}`,
        )}&body=${encodeURIComponent(
          `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\n${form.message}`,
        )}`
        setStatus('success')
        setForm({ ...empty, service: defaultService || '' })
        return
      }
      const res = await fetch(leadsUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source }),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      setForm({ ...empty, service: defaultService || '' })
    } catch {
      setError('Could not submit. Email us directly or use WhatsApp.')
      setStatus('idle')
    }
  }

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8" aria-labelledby={`${id}-title`}>
      <div className="max-w-xl">
        <h2 id={`${id}-title`} className="font-display text-xl font-semibold text-slate-900 sm:text-2xl">
          {heading}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{sub}</p>
      </div>
      <form className="mt-6 grid gap-4 sm:grid-cols-2" onSubmit={onSubmit} noValidate>
        <label className="sm:col-span-1">
          <span className="text-xs font-semibold text-slate-700">Full name</span>
          <input
            className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none ring-brand-500/30 focus:ring-4"
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            required
          />
        </label>
        <label className="sm:col-span-1">
          <span className="text-xs font-semibold text-slate-700">Email</span>
          <input
            type="email"
            className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none ring-brand-500/30 focus:ring-4"
            name="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            required
          />
        </label>
        <label className="sm:col-span-1">
          <span className="text-xs font-semibold text-slate-700">Phone (optional)</span>
          <input
            className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none ring-brand-500/30 focus:ring-4"
            name="phone"
            autoComplete="tel"
            inputMode="tel"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
          />
        </label>
        <label className="sm:col-span-1">
          <span className="text-xs font-semibold text-slate-700">Service interest</span>
          <input
            className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none ring-brand-500/30 focus:ring-4"
            name="service"
            placeholder="e.g., GST registration, Pvt Ltd"
            value={form.service}
            onChange={(e) => setForm((f) => ({ ...f, service: e.target.value }))}
          />
        </label>
        <label className="sm:col-span-2">
          <span className="text-xs font-semibold text-slate-700">How can we help?</span>
          <textarea
            className="mt-1 min-h-[120px] w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none ring-brand-500/30 focus:ring-4"
            name="message"
            value={form.message}
            onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
            required
          />
        </label>
        {error && (
          <p className="sm:col-span-2 text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
        {status === 'success' && (
          <p className="sm:col-span-2 text-sm font-medium text-emerald-700">
            Thanks—your message is on the way. Our team will respond shortly.
          </p>
        )}
        <div className="sm:col-span-2">
          <motion.button
            type="submit"
            disabled={status === 'loading'}
            className="inline-flex items-center gap-2 rounded-xl bg-brand-800 px-5 py-3 text-sm font-semibold text-white shadow-sm disabled:opacity-60"
            whileTap={{ scale: 0.99 }}
          >
            {status === 'loading' ? (
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            ) : (
              <Send className="h-4 w-4" aria-hidden />
            )}
            Submit inquiry
          </motion.button>
        </div>
      </form>
    </section>
  )
}
