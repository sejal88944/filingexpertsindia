import { Link } from 'react-router-dom'
import { company } from '../config/site'

export default function BrandLogo({ className = '', imgClassName = '' }) {
  return (
    <Link
      to="/"
      className={`flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 ${className}`}
    >
      <img
        src="/logo.jpeg"
        alt=""
        className={`h-9 w-auto max-h-10 object-contain object-left sm:h-10 ${imgClassName}`}
        width={200}
        height={48}
        loading="eager"
        decoding="async"
        onError={(e) => {
          e.currentTarget.onerror = null
          e.currentTarget.src = '/favicon.svg'
        }}
      />
      <span className="sr-only">{company.name}</span>
    </Link>
  )
}
