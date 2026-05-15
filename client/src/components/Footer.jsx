import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import { company, whatsappHref } from '../config/site'
import BrandLogo from './BrandLogo'

const footerNav = [
  { to: '/services', label: 'Services' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/blog', label: 'Blog' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

const legal = [
  { to: '/privacy', label: 'Privacy Policy' },
  { to: '/terms', label: 'Terms & Conditions' },
]

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="w-fit rounded-xl bg-white p-3">
              <BrandLogo imgClassName="h-8 sm:h-9" />
            </div>
            <p className="mt-4 font-display text-lg font-semibold text-white">{company.shortName}</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Premium business registration, taxation, and compliance support for companies across India—with
              strong experience in{' '}
              <Link to="/services" className="text-brand-300 hover:text-white">
                Maharashtra and Pune engagements
              </Link>
              .
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Explore</p>
            <ul className="mt-3 space-y-2 text-sm">
              {footerNav.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-slate-400 hover:text-white">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Contact</p>
            <ul className="mt-3 space-y-3 text-sm">
              <li className="flex items-start gap-2 text-slate-400">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" aria-hidden />
                <a className="hover:text-white" href={`mailto:${company.email}`}>
                  {company.email}
                </a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-white" href={company.website}>
                  {company.website.replace(/^https?:\/\//, '')}
                </a>
              </li>
              <li>
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-lg bg-brand-600 px-3 py-2 font-semibold text-white hover:bg-brand-500"
                >
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-slate-800 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-4 text-xs">
            {legal.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-slate-400 hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
