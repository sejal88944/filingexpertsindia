import SEO from '../components/SEO'
import { buildBreadcrumbSchema, buildOrganizationSchema } from '../lib/schema'
import { company } from '../config/site'

export default function Privacy() {
  const title = 'Privacy policy'
  const description = `How ${company.shortName} collects, uses, and protects information you share via this website and enquiry forms.`

  const jsonLd = [
    buildOrganizationSchema(),
    buildBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Privacy', path: '/privacy' },
    ]),
  ]

  return (
    <>
      <SEO title={title} description={description} canonicalPath="/privacy" jsonLd={jsonLd} />

      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-semibold text-slate-900">Privacy policy</h1>
        <p className="mt-4 text-slate-600">Last updated: 11 May 2026</p>

        <div className="mt-10 max-w-none space-y-8 text-slate-700">
          <p className="leading-relaxed">
            This policy describes how <strong>{company.name}</strong> (“we”, “us”) handles personal information when you
            use <strong>{company.website}</strong> or contact us for services.
          </p>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-semibold text-slate-900">Information we collect</h2>
            <p className="leading-relaxed">
            We may collect your name, email address, phone number, organisation details, and messages you submit through
            contact forms, email, WhatsApp, or phone. If you use our API-connected forms, submissions may be stored in our
            systems for follow-up.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-semibold text-slate-900">How we use information</h2>
            <p className="leading-relaxed">
              We use contact details to respond to enquiries, provide quotations, deliver agreed services, and comply with
              legal or regulatory obligations. We do not sell your personal information.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-semibold text-slate-900">Retention</h2>
            <p className="leading-relaxed">
            We retain enquiry and client-related records as needed for service delivery, accounting, and applicable law.
            Retention periods vary by record type.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-semibold text-slate-900">Security</h2>
            <p className="leading-relaxed">
            We apply reasonable technical and organisational measures to protect information. No method of transmission
            over the internet is completely secure.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-semibold text-slate-900">Your choices</h2>
            <p className="leading-relaxed">
            You may request access, correction, or deletion of certain personal data subject to legal requirements. Contact
            us at{' '}
            <a className="text-brand-800" href={`mailto:${company.email}`}>
              {company.email}
            </a>
            .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-semibold text-slate-900">Changes</h2>
            <p className="leading-relaxed">
              We may update this policy from time to time. The “Last updated” date will reflect the latest revision.
            </p>
          </section>
        </div>
      </div>
    </>
  )
}
