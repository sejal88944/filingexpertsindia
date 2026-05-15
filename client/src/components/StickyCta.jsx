import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'
import { telHref, whatsappHref } from '../config/site'

export default function StickyCta() {
  const phone = telHref()

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-slate-200/80 bg-white/95 px-3 py-3 backdrop-blur md:hidden">
      <motion.div
        className="mx-auto flex max-w-lg items-center gap-2"
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35 }}
      >
        <Link
          to="/contact"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand-800 px-3 py-3 text-sm font-semibold text-white"
        >
          Get started
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
        <a
          href={whatsappHref()}
          target="_blank"
          rel="noreferrer"
          className="inline-flex flex-1 items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm font-semibold text-slate-900"
        >
          WhatsApp
        </a>
        {phone && (
          <a
            href={phone}
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm font-semibold text-slate-900"
            aria-label="Call us"
          >
            <Phone className="h-4 w-4" />
          </a>
        )}
      </motion.div>
    </div>
  )
}
