import SEO from '../components/SEO'
import { buildBreadcrumbSchema, buildOrganizationSchema } from '../lib/schema'
import { company } from '../config/site'

export default function Terms() {
  const title = 'Terms of use'
  const description = `Terms governing use of ${company.shortName} website and general engagement expectations for professional services.`

  const jsonLd = [
    buildOrganizationSchema(),
    buildBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Terms', path: '/terms' },
    ]),
  ]

  return (
    <>
      <SEO title={title} description={description} canonicalPath="/terms" jsonLd={jsonLd} />

      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-semibold text-slate-900">Terms of use</h1>
        <p className="mt-4 text-slate-600">Last updated: 11 May 2026</p>

        <div className="mt-10 max-w-none space-y-8 text-slate-700">
          <p className="leading-relaxed">
            These terms apply to your use of <strong>{company.website}</strong> operated by{' '}
            <strong>{company.name}</strong>. By using the site, you agree to these terms.
          </p>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-semibold text-slate-900">Not legal or tax advice</h2>
            <p className="leading-relaxed">
            Website content is for general information. It is not a substitute for professional advice tailored to your
            facts.             Engagements are governed by separate engagement letters or statements of work where applicable.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-semibold text-slate-900">Professional fees and government charges</h2>
            <p className="leading-relaxed">
            Published pricing indicates typical professional fees. Statutory, portal, or third-party fees are separate
            unless explicitly included in a written quote.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-semibold text-slate-900">Accuracy of information</h2>
            <p className="leading-relaxed">
            We aim to keep information accurate but do not warrant completeness or that content is free of errors. Laws
            and portal rules change; confirm critical requirements before acting.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-semibold text-slate-900">Limitation of liability</h2>
            <p className="leading-relaxed">
            To the fullest extent permitted by law, we are not liable for indirect or consequential loss arising from use
            of the website.             Nothing herein limits liability that cannot be limited under applicable law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-semibold text-slate-900">Contact</h2>
            <p className="leading-relaxed">
              Questions about these terms:{' '}
              <a className="text-brand-800" href={`mailto:${company.email}`}>
                {company.email}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </>
  )
}
