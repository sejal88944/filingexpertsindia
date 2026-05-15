import { useLocation } from 'react-router-dom'
import SEO from '../components/SEO'
import ContactForm from '../components/ContactForm'
import { buildBreadcrumbSchema, buildOrganizationSchema } from '../lib/schema'
import { company, phoneDisplay, whatsappHref, telHref } from '../config/site'

export default function Contact() {
  const { state } = useLocation()
  const defaultService = typeof state?.service === 'string' ? state.service : ''

  const title = 'Contact us'
  const description = `Reach ${company.shortName} for business registration, GST, taxation, and compliance. Email, phone, WhatsApp, or use the form below.`

  const jsonLd = [
    buildOrganizationSchema(),
    buildBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Contact', path: '/contact' },
    ]),
  ]

  const tel = telHref()

  return (
    <>
      <SEO title={title} description={description} canonicalPath="/contact" jsonLd={jsonLd} />

      <div className="bg-slate-950 py-14 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">Contact</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">{description}</p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="font-display text-xl font-semibold text-slate-900">Direct channels</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>
                <span className="font-semibold text-slate-800">Email: </span>
                <a className="text-brand-800 hover:underline" href={`mailto:${company.email}`}>
                  {company.email}
                </a>
              </li>
              {tel && (
                <li>
                  <span className="font-semibold text-slate-800">Phone: </span>
                  <a className="text-brand-800 hover:underline" href={tel}>
                    +91 {phoneDisplay}
                  </a>
                </li>
              )}
              <li>
                <span className="font-semibold text-slate-800">WhatsApp: </span>
                <a className="text-brand-800 hover:underline" href={whatsappHref()} target="_blank" rel="noreferrer">
                  Chat with us
                </a>
              </li>
            </ul>
            <p className="mt-6 text-sm text-slate-600">
              For urgent filings, mention your entity type, state, and whether you already have a GSTIN—we will prioritise
              accordingly.
            </p>
          </div>
          <ContactForm source="contact" defaultService={defaultService} />
        </div>
      </div>
    </>
  )
}
