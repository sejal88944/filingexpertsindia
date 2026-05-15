import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { buildBreadcrumbSchema, buildOrganizationSchema } from '../lib/schema'
import { serviceCategories, formatInr } from '../data/services'

export default function Services() {
  const title = 'Business registration & compliance services'
  const description =
    'GST registration, company and LLP incorporation, trademark, Startup India, labour registrations, accounting packages, and return filing—transparent professional fees.'

  const jsonLd = [
    buildOrganizationSchema(),
    buildBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
    ]),
  ]

  return (
    <>
      <SEO
        title={title}
        description={description}
        canonicalPath="/services"
        keywords={[
          'GST Registration Services',
          'Company Registration India',
          'LLP Registration',
          'Private Limited Company Registration',
          'Trademark Registration',
          'Startup India Registration',
          'Compliance Services India',
          'Accounting Services',
        ]}
        jsonLd={jsonLd}
      />

      <div className="bg-slate-950 py-14 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">Services</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">{description}</p>
          <Link
            className="mt-8 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900"
            to="/pricing"
          >
            See all prices
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-6xl space-y-16 px-4 py-14 sm:px-6 lg:px-8">
        {serviceCategories.map((cat) => (
          <section key={cat.id} aria-labelledby={`cat-${cat.id}`}>
            <h2 id={`cat-${cat.id}`} className="font-display text-2xl font-semibold text-slate-900 sm:text-3xl">
              {cat.title}
            </h2>
            <p className="mt-2 max-w-3xl text-slate-600">{cat.description}</p>
            <ul className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
              {cat.items.map((item) => (
                <li key={item.slug} className="flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <span className="font-medium text-slate-900">{item.name}</span>
                    <p className="mt-0.5 text-xs text-slate-500">{cat.title}</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-4">
                    <span className="font-semibold text-slate-900">{formatInr(item.price)}</span>
                    <Link
                      className="text-sm font-semibold text-brand-800 hover:underline"
                      to="/contact"
                      state={{ service: item.name }}
                    >
                      Enquire
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  )
}
