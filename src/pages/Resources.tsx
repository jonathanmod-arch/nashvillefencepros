import { useParams, Link } from 'react-router-dom'
import PageHero from '../components/shared/PageHero'
import { displayTitle, isAutoMonthly, monthYearString } from '../lib/resourceTitle'
import LeadGenSection from '../components/home/LeadGenSection'
import SafeImage from '../components/shared/SafeImage'
import { RESOURCES, RESOURCE_PUBLISHED_AT, type ResourceSection } from '../data/siteData'
import { Clock, ArrowRight, ArrowLeft } from 'lucide-react'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { useStructuredData } from '../hooks/useStructuredData'
import {
  organization,
  breadcrumbList,
  collectionPageSchema,
  itemListSchema,
  articleSchema,
} from '../lib/schema'

const CATEGORY_COLORS: Record<string, string> = {
  Comparison: 'bg-forest-50 text-forest-500',
  Pets: 'bg-oak-50 text-oak-700',
  Compliance: 'bg-onyx-700 text-oak-300',
  Permits: 'bg-forest-500 text-white',
  Cost: 'bg-oak-400 text-forest-500',
  Trends: 'bg-warmgray text-onyx-700',
  Repair: 'bg-[#7C2D12] text-white',
  Hiring: 'bg-[#0F766E] text-white',
}

function ArticleBody({ sections }: { sections: ResourceSection[] }) {
  return (
    <div className="space-y-5 text-onyx-700">
      {sections.map((s, i) => {
        switch (s.type) {
          case 'h2':
            return (
              <h2 key={i} className="heading-card !text-2xl mt-8">
                {s.text}
              </h2>
            )
          case 'h3':
            return (
              <h3 key={i} className="heading-label !text-lg mt-6">
                {s.text}
              </h3>
            )
          case 'p': {
            const parts: Array<string | { text: string; to: string }> = []
            const re = /\[([^\]]+)\]\(([^)]+)\)/g
            let last = 0
            let m: RegExpExecArray | null
            while ((m = re.exec(s.text)) !== null) {
              if (m.index > last) parts.push(s.text.slice(last, m.index))
              parts.push({ text: m[1], to: m[2] })
              last = m.index + m[0].length
            }
            if (last < s.text.length) parts.push(s.text.slice(last))
            return (
              <p key={i} className="leading-relaxed text-[15.5px] text-onyx-700/85">
                {parts.map((p, j) => {
                  if (typeof p === 'string') return p
                  return p.to.startsWith('/') ? (
                    <Link
                      key={j}
                      to={p.to}
                      className="text-forest-500 underline underline-offset-4 hover:text-forest-600"
                    >
                      {p.text}
                    </Link>
                  ) : (
                    <a
                      key={j}
                      href={p.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-forest-500 underline underline-offset-4 hover:text-forest-600"
                    >
                      {p.text}
                    </a>
                  )
                })}
              </p>
            )
          }
          case 'ul':
            return (
              <ul key={i} className="space-y-2.5 pl-5 list-disc marker:text-oak-500">
                {s.items.map((item, j) => (
                  <li key={j} className="text-[15px] text-onyx-700/85 leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            )
          case 'ol':
            return (
              <ol key={i} className="space-y-2.5 pl-5 list-decimal marker:text-forest-500 marker:font-bold">
                {s.items.map((item, j) => (
                  <li key={j} className="text-[15px] text-onyx-700/85 leading-relaxed pl-1">
                    {item}
                  </li>
                ))}
              </ol>
            )
          case 'table':
            return (
              <div
                key={i}
                className="overflow-x-auto rounded-xl border border-[#E2E8F0]"
              >
                <table className="w-full text-sm">
                  <thead className="bg-forest-500 text-white">
                    <tr>
                      {s.headers.map((h, j) => (
                        <th
                          key={j}
                          className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {s.rows.map((row, ri) => (
                      <tr
                        key={ri}
                        className={ri % 2 === 0 ? 'bg-white' : 'bg-warmgray/40'}
                      >
                        {row.map((cell, ci) => (
                          <td
                            key={ci}
                            className="px-4 py-3 text-onyx-700/85 align-top"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          case 'callout':
            return (
              <div
                key={i}
                className="bg-forest-50 border-l-4 border-forest-500 rounded-r-xl p-5 mt-8 not-prose"
              >
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-oak-700 mb-1">
                  Next Step
                </div>
                <div className="font-heading font-bold text-forest-500 mb-1">
                  {s.title}
                </div>
                <p className="text-sm text-onyx-700/80 leading-relaxed">
                  {s.text}
                </p>
                <Link to={s.ctaHref} className="btn-primary mt-4 !py-2.5">
                  {s.ctaLabel} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )
        }
      })}
    </div>
  )
}

export default function Resources() {
  const { slug } = useParams<{ slug: string }>()
  const r = slug ? RESOURCES.find((x) => x.slug === slug) : undefined

  useDocumentMeta({
    title: r
      ? `${displayTitle(r.title)} | Nashville Fence Resource`
      : 'Nashville Fence Resource Center | Install, Repair & Permits',
    description: r
      ? `${r.excerpt} ${r.readTime} read on Nashville Fence Guide.`
      : 'Nashville fence installation, repair, and permit guides written by local pros. Wood vs vinyl, fence cost breakdown, pool fence laws, pet fences, and Metro permit how-tos.',
    canonical: slug ? `/resources/${slug}` : '/resources',
  })

  useStructuredData(
    slug && r
      ? [
          organization(),
          breadcrumbList([
            { label: 'Resources', to: '/resources' },
            { label: r.category },
          ]),
          articleSchema({
            slug: `/resources/${r.slug}`,
            title: displayTitle(r.title),
            description: r.excerpt,
            category: r.category,
            image: r.img,
            publishedAt: RESOURCE_PUBLISHED_AT,
          }),
        ]
      : [
          organization(),
          breadcrumbList([{ label: 'Resources' }]),
          collectionPageSchema({
            slug: '/resources',
            title: 'Nashville Fence Resource Center',
            description:
              'In-depth Nashville fence installation, repair, cost, and permit guides written by local pros.',
          }),
          itemListSchema(
            RESOURCES.map((x) => ({
              name: x.title,
              url: `/resources/${x.slug}`,
            })),
            'Nashville Fence Resource Library',
          ),
        ],
  )

  if (slug) {
    if (!r) {
      return (
        <>
          <PageHero
            eyebrow="Not Found"
            title="Guide Not Found"
            crumbs={[{ label: 'Resources', to: '/resources' }]}
          />
          <div className="container-wide py-20 text-center">
            <Link to="/resources" className="btn-primary">
              <ArrowLeft className="w-4 h-4" /> Back to Resources
            </Link>
          </div>
        </>
      )
    }
    const related = RESOURCES.filter((x) => x.slug !== r.slug).slice(0, 3)
    return (
      <>
        <PageHero
          eyebrow={r.category}
          title={displayTitle(r.title)}
          description={r.excerpt}
          crumbs={[{ label: 'Resources', to: '/resources' }, { label: r.category }]}
        />
        <section className="bg-white section-padding">
          <div className="container-wide grid lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2">
              <div className="aspect-[16/9] rounded-3xl overflow-hidden shadow-medium mb-8">
                <SafeImage
                  src={r.img}
                  alt={('imageAlt' in r && r.imageAlt) || r.title}
                  className="w-full h-full object-cover"
                  sizes="(min-width: 1024px) 66vw, 100vw"
                  widths={[480, 768, 1024, 1280, 1600]}
                  priority
                />
              </div>
              {isAutoMonthly(r.title) && (
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-forest-50 text-forest-500 text-[11px] font-semibold mb-3 border border-forest-100">
                  <Clock className="w-3 h-3" />
                  Updated {monthYearString()}
                </div>
              )}
              <div className="flex items-center gap-4 text-xs text-onyx-400 mb-6">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {r.readTime} read
                </span>
                <span>· Nashville-specific guide</span>
              </div>
              {'body' in r && Array.isArray((r as { body?: ResourceSection[] }).body) ? (
                <ArticleBody sections={(r as { body: ResourceSection[] }).body} />
              ) : (
                <div className="prose-content space-y-5 text-onyx-700">
                  <p className="text-lg leading-relaxed">
                    {r.excerpt} This guide walks through what Middle Tennessee homeowners
                    actually run into, not generic national advice.
                  </p>
                  <h2 className="heading-card !text-2xl mt-8">
                    Why This Matters in Nashville
                  </h2>
                  <p className="leading-relaxed">
                    Nashville's mix of historic neighborhoods, fast-growing suburbs, and
                    large-lot acreage means a one-size-fits-all approach rarely works.
                    Climate swings from summer humidity to ice storms also influence which
                    materials hold up over the typical 15–25 year fence lifecycle.
                  </p>
                  <h2 className="heading-card !text-2xl mt-8">Key Things to Know</h2>
                  <ul className="space-y-3 pl-5 list-disc marker:text-oak-500">
                    <li>Local Metro permit rules typically allow up to 8 ft in rear and side yards.</li>
                    <li>Historic overlay districts have stricter approval processes.</li>
                    <li>Tennessee 811 marking is required at least 3 business days before digging.</li>
                    <li>HOA review applies to most Williamson County subdivisions.</li>
                    <li>Pool fences must comply with the 2018 ISPSC barrier code.</li>
                  </ul>
                  <h2 className="heading-card !text-2xl mt-8">Bottom Line</h2>
                  <p className="leading-relaxed">
                    Getting the right fence in Nashville comes down to material fit,
                    contractor experience, and respect for local code. Use this guide as a
                    starting point, then bring in 2–3 vetted quotes to nail down the
                    specifics for your yard.
                  </p>
                  <div className="bg-forest-50 border-l-4 border-forest-500 rounded-r-xl p-5 mt-8">
                    <div className="text-xs font-bold uppercase tracking-[0.18em] text-oak-700 mb-1">
                      Next Step
                    </div>
                    <p className="text-sm text-forest-500 font-semibold">
                      Compare quotes from up to 3 vetted Nashville fence pros, free, no
                      pressure.
                    </p>
                    <Link to="/get-quotes#quote-form" className="btn-primary mt-4 !py-2.5">
                      Get Free Quotes <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              )}
            </article>

            <aside>
              <div className="sticky top-32 space-y-5">
                <div className="bg-warmgray rounded-2xl p-6">
                  <h3 className="heading-label !text-lg mb-4">
                    Related Guides
                  </h3>
                  <ul className="space-y-4">
                    {related.map((x) => (
                      <li key={x.slug}>
                        <Link
                          to={`/resources/${x.slug}`}
                          className="group flex gap-3 items-start"
                        >
                          <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
                            <SafeImage
                              src={x.img}
                              alt={('imageAlt' in x && x.imageAlt) || x.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-onyx-700 group-hover:text-forest-500 leading-tight">
                              {x.title}
                            </div>
                            <div className="text-xs text-onyx-400 mt-1">
                              {x.readTime} read
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </section>
        <LeadGenSection />
      </>
    )
  }

  return (
    <>
      <PageHero
        eyebrow="Resource Center"
        title="Nashville Fence Resource Center"
        description="In-depth, locally-written guides on every part of installing a fence in Middle Tennessee."
        crumbs={[{ label: 'Resources' }]}
      />
      <section className="bg-white section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESOURCES.map((r, i) => (
              <div
                key={r.slug}
                className="reveal-up"
                style={{ animationDelay: `${i * 0.04}s` }}
              >
                <Link
                  to={`/resources/${r.slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-warmgray h-full"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-warmgray">
                    <SafeImage
                      src={r.img}
                      alt={('imageAlt' in r && r.imageAlt) || r.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div
                      className={`absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-[0.15em] ${
                        CATEGORY_COLORS[r.category] ?? 'bg-white text-forest-500'
                      }`}
                    >
                      {r.category}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="heading-card !text-lg leading-tight mb-2">
                      {displayTitle(r.title)}
                    </h3>
                    <p className="text-sm text-onyx-700/70 leading-relaxed line-clamp-3 mb-4">
                      {r.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-onyx-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {r.readTime} read
                      </span>
                      <span className="flex items-center gap-1 font-semibold text-forest-500 group-hover:translate-x-1 transition-transform">
                        Read Guide <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <LeadGenSection />
    </>
  )
}
