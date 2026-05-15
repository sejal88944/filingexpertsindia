import { ExternalLink, Star } from 'lucide-react'
import { company } from '../config/site'

const highlights = [
  {
    name: 'Google reviewer',
    snippet: 'Fast responses and clear checklist for GST registration and filings.',
    rating: 5,
  },
  {
    name: 'Google reviewer',
    snippet: 'Professional guidance on company incorporation documentation.',
    rating: 5,
  },
  {
    name: 'Google reviewer',
    snippet: 'Reliable support for startup compliance and trademark questions.',
    rating: 5,
  },
]

export default function GoogleReviewsSection() {
  return (
    <section className="bg-slate-950 py-16 text-white" aria-labelledby="google-reviews-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 id="google-reviews-heading" className="font-display text-3xl font-semibold sm:text-4xl">
              Google reviews
            </h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Our reputation is built on consistent delivery for registrations, taxation, and ongoing compliance. Ask our
              team for the latest Google Business Profile link during onboarding.
            </p>
          </div>
          <a
            href={`https://www.google.com/search?q=${encodeURIComponent(company.name + ' reviews')}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
          >
            View on Google
            <ExternalLink className="h-4 w-4" aria-hidden />
          </a>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {highlights.map((h) => (
            <figure key={h.snippet} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <div className="flex gap-1 text-amber-400" aria-label={`${h.rating} stars`}>
                {Array.from({ length: h.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" aria-hidden />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-slate-200">“{h.snippet}”</blockquote>
              <figcaption className="mt-4 text-xs font-semibold text-slate-400">{h.name}</figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 text-xs text-slate-500">
          Highlights are representative client feedback themes. Replace with live Google review embeds when available.
        </p>
      </div>
    </section>
  )
}
