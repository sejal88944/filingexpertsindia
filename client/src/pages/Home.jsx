import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  FileCheck2,
  LineChart,
  Shield,
  Sparkles,
} from 'lucide-react'
import SEO from '../components/SEO'
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildLocalBusinessSchema,
  buildOrganizationSchema,
} from '../lib/schema'
import ContactForm from '../components/ContactForm'
import FaqSection from '../components/FaqSection'
import TestimonialCarousel from '../components/TestimonialCarousel'
import GoogleReviewsSection from '../components/GoogleReviewsSection'
import { company, phoneDisplay, whatsappHref } from '../config/site'
import { serviceCategories, formatInr } from '../data/services'
import { homeFaqs } from '../data/faq'
import { testimonials } from '../data/testimonials'
import { blogPosts } from '../data/blog'

const fade = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.45 },
}

export default function Home() {
  const title = 'Professional Business Registration & Taxation Services in India'
  const description =
    'Affordable company registration, GST filing, trademark, Startup India certification, accounting, and compliance services with expert support. GST registration in Maharashtra, company registration in Pune, and India-wide filings.'

  const keywords = [
    'GST Registration Services',
    'Company Registration India',
    'LLP Registration',
    'Private Limited Company Registration',
    'FSSAI Registration',
    'Trademark Registration',
    'Startup India Registration',
    'Tax Consultant India',
    'Online GST Filing',
    'Compliance Services India',
    'IEC Registration',
    'Accounting Services',
    'Business Registration Services',
    'Income Tax Filing Services',
    'Shop Act Registration',
    'Udyam Registration',
    'GST Registration in Maharashtra',
    'Company Registration in Pune',
    'Tax Filing Services in Maharashtra',
    'GST Consultant in Pune',
    'Online Company Registration Maharashtra',
  ]

  const jsonLd = [
    buildOrganizationSchema(),
    buildLocalBusinessSchema(),
    buildFaqSchema(homeFaqs),
    buildBreadcrumbSchema([{ name: 'Home', path: '/' }]),
  ]

  const featured = serviceCategories.flatMap((c) => c.items.slice(0, 2)).slice(0, 6)

  return (
    <>
      <SEO title={title} description={description} canonicalPath="/" keywords={keywords} jsonLd={jsonLd} />

      <section className="relative overflow-hidden bg-slate-950">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, rgba(59,130,246,0.35), transparent 45%), radial-gradient(circle at 80% 0%, rgba(37,99,235,0.25), transparent 40%)',
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-14 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-brand-200">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              Compliance • Registration • Taxation
            </p>
            <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Professional Business Registration &amp; Taxation Services in India
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-300 sm:text-xl">
              Affordable company registration, GST filing, trademark, Startup India certification, accounting, and
              compliance services with expert support.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-brand-900/30"
              >
                Get started
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Talk to expert
              </Link>
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-400"
              >
                WhatsApp now
              </a>
            </div>
            <dl className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { k: 'India-wide support', v: 'Registration & filings' },
                { k: 'Maharashtra & Pune', v: 'Local expertise' },
                { k: 'Transparent pricing', v: 'Professional fees listed' },
              ].map((x) => (
                <div key={x.k} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-brand-200">{x.k}</dt>
                  <dd className="mt-1 text-sm font-medium text-white">{x.v}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-4 text-sm text-slate-600 sm:px-6 lg:px-8">
          {[
            { icon: Shield, t: 'Compliance-first workflows' },
            { icon: BadgeCheck, t: 'Document checklists' },
            { icon: LineChart, t: 'Scalable accounting options' },
          ].map((x) => (
            <div key={x.t} className="flex items-center gap-2">
              <x.icon className="h-5 w-5 text-brand-700" aria-hidden />
              <span className="font-medium text-slate-800">{x.t}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16" aria-labelledby="services-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 id="services-heading" className="font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
                Premium services with market pricing
              </h2>
              <h3 className="mt-3 text-lg font-medium text-slate-800">
                Business registration services designed for speed, clarity, and statutory alignment
              </h3>
              <p className="mt-3 text-slate-600">
                From{' '}
                <Link className="font-semibold text-brand-800 hover:underline" to="/services">
                  GST registration services
                </Link>{' '}
                to{' '}
                <Link className="font-semibold text-brand-800 hover:underline" to="/pricing">
                  LLP registration and private limited company registration
                </Link>
                , we keep your engagement structured and measurable.
              </p>
            </div>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 self-start rounded-xl bg-brand-800 px-4 py-2.5 text-sm font-semibold text-white"
            >
              View full pricing
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((cat) => (
              <motion.article
                key={cat.id}
                {...fade}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-800">
                    <Building2 className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-slate-900">{cat.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{cat.description}</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {cat.items.slice(0, 3).map((it) => (
                    <li key={it.slug} className="flex items-center justify-between gap-3">
                      <span>{it.name}</span>
                      <span className="shrink-0 font-semibold text-slate-900">{formatInr(it.price)}</span>
                    </li>
                  ))}
                </ul>
                <Link className="mt-4 inline-flex text-sm font-semibold text-brand-800 hover:underline" to="/services">
                  Explore {cat.title.toLowerCase()}
                </Link>
              </motion.article>
            ))}
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((f) => (
              <div
                key={f.slug}
                className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm"
              >
                <span className="text-slate-700">{f.name}</span>
                <span className="font-semibold text-slate-900">{formatInr(f.price)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16" aria-labelledby="process-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 id="process-heading" className="font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
            A step-by-step registration process
          </h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            Built like leading legal-tech platforms: a single owner for your case, milestone tracking, and proactive
            reminders for filings.
          </p>
          <ol className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              {
                step: '01',
                title: 'Discovery call',
                body: 'We confirm entity type, timelines, and statutory needs (GST, labour, IP).',
              },
              {
                step: '02',
                title: 'Document pack',
                body: 'You receive a tailored checklist—no guesswork, no missing proofs.',
              },
              {
                step: '03',
                title: 'Filing & tracking',
                body: 'Portal submissions with validation checks and status updates.',
              },
              {
                step: '04',
                title: 'Handover',
                body: 'Certificates, credentials, and a compliance calendar for the next 90 days.',
              },
            ].map((s) => (
              <li key={s.step} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs font-bold text-brand-700">{s.step}</p>
                <h3 className="mt-2 font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <TestimonialCarousel testimonials={testimonials} />
      <GoogleReviewsSection />

      <section className="bg-slate-50 py-16" aria-labelledby="blog-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 id="blog-heading" className="font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
                Compliance insights for growth
              </h2>
              <p className="mt-3 max-w-2xl text-slate-600">
                SEO-friendly guides covering{' '}
                <span className="font-medium text-slate-800">online GST filing</span>, incorporation choices, and IP
                strategy.
              </p>
            </div>
            <Link
              to="/blog"
              className="hidden rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 sm:inline-flex"
            >
              View blog
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {blogPosts.slice(0, 2).map((post) => (
              <article key={post.slug} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold text-brand-700">{new Date(post.date).toLocaleDateString('en-IN')}</p>
                <h3 className="mt-2 font-display text-xl font-semibold text-slate-900">
                  <Link className="hover:text-brand-800" to={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{post.excerpt}</p>
                <Link className="mt-4 inline-flex text-sm font-semibold text-brand-800" to={`/blog/${post.slug}`}>
                  Read article
                  <ArrowRight className="ml-1 inline h-4 w-4" aria-hidden />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FaqSection
        title="Frequently asked questions"
        subtitle="Straight answers on timelines, coverage, and how we support Maharashtra and Pune clients."
        faqs={homeFaqs}
      />

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-display text-3xl font-semibold text-slate-900">Visit &amp; contact</h2>
            <p className="mt-3 text-slate-600">
              For the fastest response, use WhatsApp or email{' '}
              <a className="font-semibold text-brand-800" href={`mailto:${company.email}`}>
                {company.email}
              </a>
              . If you need{' '}
              <span className="font-medium text-slate-800">tax filing services in Maharashtra</span>, tell us your entity
              type and GSTIN status—we will route you to the right specialist.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white"
              >
                WhatsApp
              </a>
              <Link to="/contact" className="inline-flex rounded-xl bg-brand-800 px-4 py-2.5 text-sm font-semibold text-white">
                Contact page
              </Link>
            </div>
            <p className="mt-6 text-sm text-slate-600">
              Call{' '}
              <a className="font-semibold text-brand-800 hover:underline" href={`tel:+91${phoneDisplay}`}>
                +91 {phoneDisplay}
              </a>{' '}
              for urgent queries.
            </p>
          </div>
          <ContactForm source="home" />
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <FileCheck2 className="h-8 w-8 text-brand-800" aria-hidden />
            <div>
              <p className="font-display text-lg font-semibold text-slate-900">Ready to file smarter?</p>
              <p className="text-sm text-slate-600">Talk to a compliance specialist today.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link className="rounded-xl bg-brand-800 px-4 py-2.5 text-sm font-semibold text-white" to="/contact">
              Schedule consultation
            </Link>
            <Link className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold" to="/services">
              Browse services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
