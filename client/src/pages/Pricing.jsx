import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { buildBreadcrumbSchema, buildOrganizationSchema } from '../lib/schema'
import { serviceCategories, formatInr } from '../data/services'
import { company } from '../config/site'

export default function Pricing() {
  const title = 'Pricing'
  const description = `Professional fees for registration, certification, taxation, and accounting at ${company.shortName}. Government/statutory fees may apply separately.`

  const jsonLd = [
    buildOrganizationSchema(),
    buildBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Pricing', path: '/pricing' },
    ]),
  ]

  return (
    <>
      <SEO title={title} description={description} canonicalPath="/pricing" jsonLd={jsonLd} />

      <div className="bg-slate-950 py-14 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">Pricing</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">{description}</p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950">
          Listed amounts are indicative professional fees. Final quotes depend on scope, urgency, and government or portal
          charges at the time of filing.
        </p>

        <div className="mt-12 space-y-14">
          {serviceCategories.map((cat) => (
            <section key={cat.id}>
              <h2 className="font-display text-2xl font-semibold text-slate-900">{cat.title}</h2>
              <p className="mt-2 text-slate-600">{cat.description}</p>
              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-600">
                    <tr>
                      <th className="px-4 py-3">Service</th>
                      <th className="px-4 py-3 text-right">From</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {cat.items.map((item) => (
                      <tr key={item.slug}>
                        <td className="px-4 py-3 font-medium text-slate-900">{item.name}</td>
                        <td className="px-4 py-3 text-right font-semibold text-slate-900">{formatInr(item.price)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center">
          <p className="font-display text-lg font-semibold text-slate-900">Need a tailored package?</p>
          <p className="mt-2 text-sm text-slate-600">Share your entity type and compliance stack—we will respond with a clear quote.</p>
          <Link className="mt-6 inline-flex rounded-xl bg-brand-800 px-5 py-3 text-sm font-semibold text-white" to="/contact">
            Get a quote
          </Link>
        </div>
      </div>
    </>
  )
}
