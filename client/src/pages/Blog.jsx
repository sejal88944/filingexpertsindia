import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { buildBreadcrumbSchema, buildOrganizationSchema } from '../lib/schema'
import { blogPosts } from '../data/blog'

export default function Blog() {
  const title = 'Blog — compliance & registration insights'
  const description =
    'Practical articles on GST registration, company incorporation, Startup India, trademarks, and ongoing compliance for Indian businesses.'

  const jsonLd = [
    buildOrganizationSchema(),
    buildBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
    ]),
  ]

  return (
    <>
      <SEO title={title} description={description} canonicalPath="/blog" jsonLd={jsonLd} />

      <div className="bg-slate-950 py-14 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">Blog</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">{description}</p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <ul className="grid gap-8 md:grid-cols-2">
          {blogPosts.map((post) => (
            <li key={post.slug}>
              <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <time className="text-xs font-semibold text-brand-700" dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-IN', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <h2 className="mt-2 font-display text-xl font-semibold text-slate-900">
                  <Link className="hover:text-brand-800" to={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{post.excerpt}</p>
                <p className="mt-4 text-xs text-slate-500">{post.readMinutes} min read</p>
                <Link
                  className="mt-3 inline-flex text-sm font-semibold text-brand-800"
                  to={`/blog/${post.slug}`}
                >
                  Read more →
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
