import { Helmet } from 'react-helmet-async'
import { company, defaultOgImage, siteUrl } from '../config/site'

export default function SEO({
  title,
  description,
  canonicalPath = '/',
  keywords = [],
  ogType = 'website',
  jsonLd = [],
  noindex = false,
}) {
  const canonical = `${siteUrl}${canonicalPath === '/' ? '' : canonicalPath}`
  const fullTitle =
    title?.includes(company.shortName) || title?.includes('AASHA')
      ? title
      : `${title} | ${company.shortName}`

  const schemas = Array.isArray(jsonLd) ? jsonLd.filter(Boolean) : []

  return (
    <Helmet prioritizeSeoTags>
      <html lang="en-IN" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={company.shortName} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:image" content={defaultOgImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={defaultOgImage} />

      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}
