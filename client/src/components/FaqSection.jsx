import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function FaqSection({ title, subtitle, faqs, id = 'faq' }) {
  const [open, setOpen] = useState(0)

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8" id={id} aria-labelledby={`${id}-heading`}>
      <div className="mx-auto max-w-2xl text-center">
        <h2 id={`${id}-heading`} className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          {title}
        </h2>
        {subtitle && <p className="mt-3 text-slate-600">{subtitle}</p>}
      </div>
      <div className="mx-auto mt-10 max-w-3xl divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-2 shadow-sm">
        {faqs.map((f, i) => {
          const isOpen = open === i
          return (
            <div key={f.q} className="px-2">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 py-4 text-left"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span className="text-sm font-semibold text-slate-900 sm:text-base">{f.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-slate-500 transition ${isOpen ? 'rotate-180' : ''}`}
                  aria-hidden
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-4 text-sm leading-relaxed text-slate-600">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </section>
  )
}
