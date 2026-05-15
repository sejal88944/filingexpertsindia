import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

export default function TestimonialCarousel({ testimonials }) {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6500)
    return () => clearInterval(t)
  }, [testimonials.length])

  const active = testimonials[i]

  return (
    <section className="border-y border-slate-200 bg-white py-16" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 id="testimonials-heading" className="font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
              Client testimonials
            </h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              Practical compliance support for founders and operators—built around clear communication and predictable
              timelines.
            </p>
          </div>
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Show testimonial ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`h-2.5 w-8 rounded-full transition ${idx === i ? 'bg-brand-700' : 'bg-slate-200'}`}
              />
            ))}
          </div>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-brand-50/60 via-white to-slate-50 p-8 shadow-sm sm:p-10">
          <Quote className="absolute right-8 top-8 h-10 w-10 text-brand-200" aria-hidden />
          <AnimatePresence mode="wait">
            <motion.div
              key={active.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-3xl"
            >
              <div className="flex gap-1 text-amber-500" aria-label={`${active.rating} out of 5 stars`}>
                {Array.from({ length: active.rating }).map((_, si) => (
                  <Star key={si} className="h-4 w-4 fill-current" aria-hidden />
                ))}
              </div>
              <p className="mt-4 text-lg leading-relaxed text-slate-800 sm:text-xl">“{active.quote}”</p>
              <p className="mt-6 text-sm font-semibold text-slate-900">{active.name}</p>
              <p className="text-sm text-slate-600">{active.role}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
