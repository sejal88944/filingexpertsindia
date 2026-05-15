import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { buildBreadcrumbSchema, buildOrganizationSchema } from '../lib/schema'
import { company, phoneDisplay, whatsappHref } from '../config/site'

export default function About() {
  const title = 'About us'
  const description = `${company.shortName} helps businesses across India with registration, GST, taxation, trademark, Startup India, and ongoing compliance—with focused support for Maharashtra and Pune.`

  const jsonLd = [
    buildOrganizationSchema(),
    buildBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
    ]),
  ]

  return (
    <>
      <SEO title={title} description={description} canonicalPath="/about" jsonLd={jsonLd} />

      <div className="bg-slate-950 py-14 text-white sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-200">Who we are</p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">About {company.shortName}</h1>
          <p className="mt-5 text-lg text-slate-300">{description}</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="max-w-none space-y-6">
          <h2 className="font-display text-2xl font-semibold text-slate-900">Our approach</h2>
          <p className="text-slate-600">
            We combine structured checklists, clear pricing, and specialist routing so founders and finance teams spend
            less time chasing portals and more time running the business. Whether you need{' '}
            <Link className="font-semibold text-brand-800 hover:underline" to="/services">
              company registration in India
            </Link>
            , periodic GST filings, or a full compliance calendar, we align work to statutory timelines.
          </p>
          <h2 className="font-display text-2xl font-semibold text-slate-900">Maharashtra &amp; Pune</h2>
          <p className="text-slate-600">
            Many of our engagements involve{' '}
            <span className="font-medium text-slate-800">GST registration in Maharashtra</span>, local labour
            registrations, and{' '}
            <span className="font-medium text-slate-800">tax filing support in Pune</span>. Tell us your entity type and
            GSTIN status—we will match you with the right workflow.
          </p>
          <h2 className="font-display text-2xl font-semibold text-slate-900">Contact</h2>
          <p className="text-slate-600">
            Email{' '}
            <a className="font-semibold text-brand-800 hover:underline" href={`mailto:${company.email}`}>
              {company.email}
            </a>
            , call{' '}
            <a className="font-semibold text-brand-800 hover:underline" href={`tel:+91${phoneDisplay}`}>
              +91 {phoneDisplay}
            </a>
            , or{' '}
            <a className="font-semibold text-brand-800 hover:underline" href={whatsappHref()} target="_blank" rel="noreferrer">
              message us on WhatsApp
            </a>
            .
          </p>
        </section>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link className="rounded-xl bg-brand-800 px-5 py-3 text-sm font-semibold text-white" to="/contact">
            Contact us
          </Link>
          <Link className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900" to="/pricing">
            View pricing
          </Link>
        </div>
      </div>
    </>
  )
}
