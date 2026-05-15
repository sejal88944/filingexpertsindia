import { Link, Navigate, useParams } from 'react-router-dom'
import SEO from '../components/SEO'
import { buildArticleSchema, buildBreadcrumbSchema, buildOrganizationSchema } from '../lib/schema'
import { blogPosts } from '../data/blog'
import { siteUrl } from '../config/site'

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  const canonicalPath = `/blog/${post.slug}`
  const title = post.title
  const description = post.excerpt

  const jsonLd = [
    buildOrganizationSchema(),
    buildBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
      { name: post.title, path: canonicalPath },
    ]),
    buildArticleSchema({
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      urlPath: canonicalPath,
    }),
  ]

  return (
    <>
      <SEO
        title={title}
        description={description}
        canonicalPath={canonicalPath}
        keywords={post.keywords}
        ogType="article"
        jsonLd={jsonLd}
      />

      <article className="pb-16">
        <header className="border-b border-slate-200 bg-slate-50 py-12 sm:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <nav className="text-sm text-slate-600" aria-label="Breadcrumb">
              <Link className="hover:text-brand-800" to="/blog">
                Blog
              </Link>
              <span className="mx-2 text-slate-400">/</span>
              <span className="text-slate-900">{post.title}</span>
            </nav>
            <h1 className="mt-6 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 flex flex-wrap gap-3 text-sm text-slate-600">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-IN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span aria-hidden>·</span>
              <span>{post.readMinutes} min read</span>
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-4 pt-10 sm:px-6 lg:px-8">
          <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
            <img
              src={`https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&h=600&q=80`}
              alt={post.heroAlt}
              className="h-56 w-full object-cover sm:h-72"
              width={1200}
              height={600}
              loading="eager"
            />
          </figure>

          <div className="mt-10 space-y-10 text-slate-700">
            <p className="text-lg leading-relaxed text-slate-600">{post.excerpt}</p>
            {post.sections.map((sec) => (
              <section key={sec.h2} className="space-y-4">
                <h2 className="font-display text-2xl font-semibold text-slate-900">{sec.h2}</h2>
                {sec.p.map((para, i) => (
                  <p key={i} className="leading-relaxed">
                    {para}
                  </p>
                ))}
              </section>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="font-medium text-slate-900">Need help with compliance?</p>
            <p className="mt-2 text-sm text-slate-600">
              Share your requirement on the contact page—we will route you to the right specialist.
            </p>
            <Link className="mt-4 inline-flex text-sm font-semibold text-brand-800" to="/contact">
              Contact us →
            </Link>
          </div>

          <p className="mt-8 text-xs text-slate-500">
            Canonical URL:{' '}
            <a className="text-brand-800" href={`${siteUrl}${canonicalPath}`}>
              {siteUrl}
              {canonicalPath}
            </a>
          </p>
        </div>
      </article>
    </>
  )
}
