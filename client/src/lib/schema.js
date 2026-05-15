import { company, phoneDisplay, siteUrl } from '../config/site'

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.name,
    url: siteUrl,
    email: company.email,
    telephone: `+91-${phoneDisplay}`,
    description: company.description,
    areaServed: company.areaServed.map((name) => ({ '@type': 'AdministrativeArea', name })),
    sameAs: company.sameAs,
  }
}

export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: company.name,
    url: siteUrl,
    email: company.email,
    telephone: `+91-${phoneDisplay}`,
    priceRange: '₹₹',
    areaServed: [
      { '@type': 'State', name: 'Maharashtra' },
      { '@type': 'City', name: 'Pune' },
      { '@type': 'Country', name: 'India' },
    ],
    knowsAbout: [
      'GST Registration Services',
      'Company Registration India',
      'LLP Registration',
      'Private Limited Company Registration',
      'Trademark Registration',
      'Startup India Registration',
      'Tax Consultant India',
      'Compliance Services India',
    ],
  }
}

export function buildFaqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

export function buildBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: it.name,
      item: `${siteUrl}${it.path === '/' ? '' : it.path}`,
    })),
  }
}

export function buildArticleSchema({ headline, description, datePublished, urlPath }) {
  const url = `${siteUrl}${urlPath === '/' ? '' : urlPath}`
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    datePublished,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  }
}
