import { useParams, Link } from 'react-router-dom'
import PageHero from '../components/shared/PageHero'
import SponsorStrip from '../components/shared/SponsorStrip'
import CallbackForm from '../components/shared/CallbackForm'
import LeadGenSection from '../components/home/LeadGenSection'
import SafeImage from '../components/shared/SafeImage'
import {
  SERVICES,
  SERVICE_BUCKETS,
  servicesByBucket,
  findService,
  findBucket,
} from '../data/services'
import { NEIGHBORHOODS } from '../data/siteData'
import { ArrowRight, ArrowLeft, Check, Wrench, Calendar, Ruler, MapPin } from 'lucide-react'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { cleanMetaDescription } from '../lib/meta'
import { useStructuredData } from '../hooks/useStructuredData'
import {
  organization,
  breadcrumbList,
  collectionPageSchema,
  itemListSchema,
  serviceSchema,
  placeSchema,
} from '../lib/schema'
import { CITY } from '../config/city'

export default function Services() {
  const { slug, area } = useParams<{ slug?: string; area?: string }>()

  if (slug) {
    const bucket = findBucket(slug)
    if (bucket) return <BucketLanding bucketSlug={slug} />
    const service = findService(slug)
    if (!service) return <NotFound />
    return <ServiceDetail service={service} areaSlug={area} />
  }

  return <ServiceHub />
}

// ===================================================================
// Service Hub — /services
// ===================================================================
function ServiceHub() {
  useDocumentMeta({
    title: `Fence Services in ${CITY.name} ${CITY.stateAbbr}`,
    description: `Every fence-related service we cover in ${CITY.name} ${CITY.stateAbbr}: installation by material, specialty fencing, gates, repair, outdoor structures, site prep, commercial, and custom work. Compare vetted local pros.`,
    canonical: '/services',
  })

  useStructuredData([
    organization(),
    breadcrumbList([{ label: 'Services' }]),
    collectionPageSchema({
      slug: '/services',
      title: `${CITY.name} Fence Services`,
      description: `Service hub for fence installation, repair, gates, and outdoor structures in the ${CITY.name} metro.`,
    }),
    itemListSchema(
      SERVICE_BUCKETS.map((b) => ({
        name: b.name,
        url: `/services/${b.slug}`,
      })),
      `${CITY.name} Service Buckets`,
    ),
  ])

  return (
    <>
      <PageHero
        eyebrow="All Services"
        title={`${CITY.name} Fence & Outdoor Services`}
        description={`Every service the directory covers across ${CITY.name}, organized into eight buckets. Pick a bucket to drill into the specific service, or jump straight to a service you already have in mind.`}
        crumbs={[{ label: 'Services' }]}
        right={<CallbackForm />}
      />
      <SponsorStrip />

      <section className="bg-white section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_BUCKETS.map((b) => {
              const count = servicesByBucket(b.slug).length
              return (
                <Link
                  key={b.slug}
                  to={`/services/${b.slug}`}
                  className="group block bg-warmgray rounded-2xl p-6 shadow-soft hover:shadow-medium hover:-translate-y-0.5 transition-all duration-300 border border-warmgray hover:border-forest-100"
                >
                  <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-oak-500 mb-2">
                    {b.eyebrow}
                  </div>
                  <h3 className="heading-card !text-xl mb-2 group-hover:text-forest-500">
                    {b.name}
                  </h3>
                  <p className="text-sm text-onyx-700/75 leading-relaxed mb-4">
                    {b.summary}
                  </p>
                  <div className="text-xs font-semibold text-forest-500 flex items-center gap-1">
                    {count} {count === 1 ? 'service' : 'services'} in this bucket{' '}
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <LeadGenSection />
    </>
  )
}

// ===================================================================
// Bucket Landing — /services/<bucket-slug>
// ===================================================================
function BucketLanding({ bucketSlug }: { bucketSlug: string }) {
  const bucket = findBucket(bucketSlug)!
  const services = servicesByBucket(bucket.slug)

  useDocumentMeta({
    title: `${bucket.name} in ${CITY.name} ${CITY.stateAbbr}`,
    description: cleanMetaDescription(
      `${bucket.name} in ${CITY.name}, ${CITY.stateAbbr}. ${bucket.summary} Compare vetted local pros and get free quotes within 24 hours.`,
    ),
    canonical: `/services/${bucket.slug}`,
  })

  useStructuredData([
    organization(),
    breadcrumbList([
      { label: 'Services', to: '/services' },
      { label: bucket.name },
    ]),
    collectionPageSchema({
      slug: `/services/${bucket.slug}`,
      title: `${bucket.name} in ${CITY.name}`,
      description: bucket.summary,
    }),
    itemListSchema(
      services.map((s) => ({ name: s.name, url: `/services/${s.slug}` })),
      `${CITY.name} ${bucket.name} Services`,
    ),
  ])

  return (
    <>
      <PageHero
        eyebrow={bucket.eyebrow}
        title={`${bucket.name} in ${CITY.name}`}
        description={bucket.summary}
        crumbs={[
          { label: 'Services', to: '/services' },
          { label: bucket.name },
        ]}
        right={<CallbackForm />}
      />
      <SponsorStrip />

      <section className="bg-white section-padding">
        <div className="container-wide">
          {services.length === 0 ? (
            <div className="text-center max-w-xl mx-auto">
              <p className="text-body-lead">
                Services in this bucket are being added soon. In the meantime,{' '}
                <Link to="/services" className="text-forest-500 underline">
                  browse the full service hub
                </Link>{' '}
                or{' '}
                <Link to="/get-quotes#quote-form" className="text-forest-500 underline">
                  request a free quote
                </Link>{' '}
                — we'll route your project to a vetted {CITY.name} pro.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-warmgray"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <SafeImage
                      src={s.img}
                      alt={s.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="heading-card !text-lg mb-1 group-hover:text-forest-500">
                      {s.name}
                    </h3>
                    {s.priceLow != null && s.priceHigh != null && (
                      <div className="text-sm text-onyx-400">
                        {s.unitCode === 'PCE'
                          ? `$${s.priceLow.toLocaleString()}–$${s.priceHigh.toLocaleString()} installed`
                          : `$${s.priceLow}–$${s.priceHigh}/${s.unitCode === 'HUR' ? 'hr' : 'ft'} installed`}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <LeadGenSection />
    </>
  )
}

// ===================================================================
// Service Detail — /services/<service-slug>
// (areaSlug param reserved for Phase 3 city overlay)
// ===================================================================
function ServiceDetail({
  service: s,
  areaSlug,
}: {
  service: ReturnType<typeof findService> & object
  areaSlug?: string
}) {
  const bucket = findBucket(s.bucket)!
  const related = SERVICES.filter((x) => x.bucket === s.bucket && x.slug !== s.slug).slice(0, 3)

  // Phase 3: city overlay. If an areaSlug is in the URL, look up the
  // neighborhood and only render if the service is flagged cityPages.
  // Otherwise fall back to the Nashville-wide detail.
  const area = areaSlug ? NEIGHBORHOODS.find((n) => n.slug === areaSlug) : undefined
  const isAreaPage = Boolean(area && s.cityPages)

  const locationLabel = isAreaPage ? area!.name : CITY.name
  const pageH1 = isAreaPage
    ? `${s.name} in ${area!.name}, ${CITY.name}`
    : (s.pageTitle ?? `${s.name} in ${CITY.name}`)
  const canonical = isAreaPage
    ? `/services/${s.slug}/${area!.slug}`
    : `/services/${s.slug}`

  const titleSeo = isAreaPage
    ? `${s.name} in ${area!.name}, ${CITY.stateAbbr}`
    : `${s.name} in ${CITY.name} ${CITY.stateAbbr}`
  const descriptionSeo = isAreaPage
    ? cleanMetaDescription(
        `${s.name} in ${area!.name}, ${CITY.name}. Popular style: ${area!.popularStyle}. Typical project ${area!.avgCost}. Free local quotes within 24 hours.`,
      )
    : cleanMetaDescription(s.description)

  useDocumentMeta({
    title: titleSeo,
    description: descriptionSeo,
    canonical,
  })

  useStructuredData([
    organization(),
    breadcrumbList(
      isAreaPage
        ? [
            { label: 'Services', to: '/services' },
            { label: bucket.name, to: `/services/${bucket.slug}` },
            { label: s.name, to: `/services/${s.slug}` },
            { label: area!.name },
          ]
        : [
            { label: 'Services', to: '/services' },
            { label: bucket.name, to: `/services/${bucket.slug}` },
            { label: s.name },
          ],
    ),
    serviceSchema({
      slug: canonical,
      name: `${s.name} in ${locationLabel}, ${CITY.stateAbbr}`,
      description: isAreaPage
        ? `${s.description} Serving ${area!.name} (ZIP ${area!.zip}) and surrounding ${CITY.metroLabel}.`
        : s.description,
      priceLow: s.priceLow,
      priceHigh: s.priceHigh,
      unitCode: s.unitCode,
    }),
    ...(isAreaPage ? [placeSchema(area!)] : []),
  ])

  return (
    <>
      <PageHero
        eyebrow={isAreaPage ? `${area!.name} · ZIP ${area!.zip}` : bucket.eyebrow}
        title={pageH1}
        description={
          isAreaPage
            ? `${s.description} For ${area!.name} homeowners, the local style favors ${area!.popularStyle.toLowerCase()}, with typical projects landing at ${area!.avgCost}.`
            : s.description
        }
        crumbs={
          isAreaPage
            ? [
                { label: 'Services', to: '/services' },
                { label: bucket.name, to: `/services/${bucket.slug}` },
                { label: s.name, to: `/services/${s.slug}` },
                { label: area!.name },
              ]
            : [
                { label: 'Services', to: '/services' },
                { label: bucket.name, to: `/services/${bucket.slug}` },
                { label: s.name },
              ]
        }
        right={<CallbackForm />}
      />
      <SponsorStrip />

      <section className="bg-white section-padding">
        <div className="container-wide grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="aspect-[16/9] rounded-3xl overflow-hidden shadow-medium mb-8">
              <SafeImage
                src={s.img}
                alt={`${s.name} in ${locationLabel}, ${CITY.stateAbbr}`}
                className="w-full h-full object-cover"
                sizes="(min-width: 1024px) 66vw, 100vw"
                widths={[480, 768, 1024, 1280, 1600]}
                priority
              />
            </div>

            <h2 className="heading-section !text-3xl mb-2">
              {isAreaPage
                ? `${s.name} in ${area!.name}`
                : 'The Service, the Cost, the Fit'}
            </h2>
            <div className="heading-accent mb-4" />
            <p className="text-body-lead mb-5">{s.description}</p>

            {isAreaPage && (
              <p className="text-body-lead mb-5">
                {area!.note} For {s.name.toLowerCase()} specifically in {area!.name}, the
                popular style locally is <strong>{area!.popularStyle.toLowerCase()}</strong>{' '}
                and typical project budgets land at{' '}
                <strong className="text-forest-500">{area!.avgCost}</strong>. Our network's
                crews work {area!.name} routinely and know the lot-size, soil, and HOA
                patterns specific to ZIP {area!.zip}.
              </p>
            )}

            {s.priceLow != null && s.priceHigh != null && (
              <p className="text-body-lead mb-8">
                Across {CITY.primaryCounty} and {CITY.secondaryCounty} counties,{' '}
                {s.name.toLowerCase()} runs{' '}
                <strong className="text-forest-500">
                  {s.unitCode === 'PCE'
                    ? `$${s.priceLow.toLocaleString()}–$${s.priceHigh.toLocaleString()} installed`
                    : `$${s.priceLow}–$${s.priceHigh} per ${s.unitCode === 'HUR' ? 'hour' : 'linear foot'}`}
                </strong>{' '}
                installed, materials and labor included. Exact pricing depends on site
                conditions, project size, and gate count.
              </p>
            )}

            <h3 className="heading-card !text-2xl mb-4">What's Included</h3>
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {s.features.map((f) => (
                <div key={f} className="flex items-start gap-2 p-4 rounded-xl bg-warmgray">
                  <Check className="w-4 h-4 text-forest-500 mt-1 flex-shrink-0" />
                  <span className="text-sm text-onyx-700">{f}</span>
                </div>
              ))}
            </div>

            <h3 className="heading-card !text-2xl mb-4">Best Fit For</h3>
            <p className="text-body-lead mb-8">{s.bestFor}.</p>

            <Link to="/get-quotes#quote-form" className="btn-primary">
              Get {isAreaPage ? `${area!.name} ` : ''}
              {s.name} Quotes <ArrowRight className="w-4 h-4" />
            </Link>

            {!isAreaPage && s.cityPages && (
              <div className="mt-12 pt-10 border-t border-warmgray">
                <h3 className="heading-card !text-2xl mb-2">
                  {s.name} by {CITY.name} Neighborhood
                </h3>
                <p className="text-body-lead mb-6">
                  Tap a neighborhood for local pricing, popular styles, and crews who
                  work that zip code routinely.
                </p>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
                  {NEIGHBORHOODS.map((n) => (
                    <Link
                      key={n.slug}
                      to={`/services/${s.slug}/${n.slug}`}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm text-onyx-700 hover:text-forest-500 hover:bg-warmgray transition-colors"
                    >
                      <MapPin className="w-3.5 h-3.5 text-forest-500" /> {n.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="space-y-5">
            {s.priceLow != null && s.priceHigh != null && (
              <div className="bg-forest-500 text-white rounded-2xl p-6">
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-oak-300 mb-1">
                  Installed Price Range
                </div>
                <div className="text-3xl font-heading font-bold text-white tracking-tightest">
                  {s.unitCode === 'PCE'
                    ? `$${s.priceLow.toLocaleString()}–$${s.priceHigh.toLocaleString()}`
                    : `$${s.priceLow}–$${s.priceHigh}`}
                </div>
                <div className="text-sm text-white/70 mt-1">
                  {s.unitCode === 'PCE' ? 'per project' : `per ${s.unitCode === 'HUR' ? 'hour' : 'linear foot'}`}
                </div>
              </div>
            )}

            {isAreaPage && (
              <>
                <div className="bg-warmgray rounded-2xl p-6">
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-oak-500 mb-1">
                    Popular Style in {area!.name}
                  </div>
                  <div className="text-xl font-heading font-bold text-forest-500 tracking-tightest">
                    {area!.popularStyle}
                  </div>
                </div>
                <div className="bg-warmgray rounded-2xl p-6">
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-oak-500 mb-1">
                    Typical {area!.name} Project
                  </div>
                  <div className="text-xl font-heading font-bold text-forest-500 tracking-tightest">
                    {area!.avgCost}
                  </div>
                </div>
                <Link
                  to={`/service-areas/${area!.slug}`}
                  className="block bg-white border border-warmgray rounded-2xl p-6 hover:border-forest-500 transition-colors"
                >
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-oak-500 mb-1">
                    More about {area!.name}
                  </div>
                  <div className="text-sm font-semibold text-forest-500 inline-flex items-center gap-1">
                    Area guide and permit notes <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              </>
            )}

            <div className="bg-warmgray rounded-2xl p-6">
              <Wrench className="w-5 h-5 text-forest-500 mb-2" />
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-oak-500 mb-1">
                Maintenance
              </div>
              <p className="text-sm text-onyx-700">
                {s.bucket === 'fence-installation' || s.bucket === 'specialty'
                  ? 'Material-dependent. Vinyl and aluminum are virtually maintenance-free; wood needs a stain or seal every 2–3 years.'
                  : 'Periodic inspection and minor part replacement keeps the system reliable for the long haul.'}
              </p>
            </div>

            <div className="bg-warmgray rounded-2xl p-6">
              <Calendar className="w-5 h-5 text-forest-500 mb-2" />
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-oak-500 mb-1">
                Project Timeline
              </div>
              <p className="text-sm text-onyx-700">
                Most {locationLabel} installs land in the 2–5 day range, weather permitting.
                Custom fabrication and automation add 2–6 weeks to the lead time.
              </p>
            </div>

            {!isAreaPage && (
              <div className="bg-warmgray rounded-2xl p-6">
                <Ruler className="w-5 h-5 text-forest-500 mb-2" />
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-oak-500 mb-1">
                  Counties Served
                </div>
                <p className="text-sm text-onyx-700">
                  {CITY.counties.slice(0, 5).join(', ')} and surrounding {CITY.metroLabel}.
                </p>
              </div>
            )}
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-warmgray section-padding">
          <div className="container-wide">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="label-eyebrow">More in {bucket.name}</span>
              <h2 className="mt-3 heading-section">Related Services</h2>
              <div className="heading-accent mx-auto" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/services/${r.slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <SafeImage
                      src={r.img}
                      alt={r.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="heading-card !text-lg mb-1">{r.name}</h3>
                    {r.priceLow != null && r.priceHigh != null && (
                      <div className="text-sm text-onyx-400">
                        {r.unitCode === 'PCE'
                          ? `$${r.priceLow.toLocaleString()}–$${r.priceHigh.toLocaleString()} installed`
                          : `$${r.priceLow}–$${r.priceHigh}/${r.unitCode === 'HUR' ? 'hr' : 'ft'} installed`}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <LeadGenSection />
    </>
  )
}

function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="Not Found"
        title="Service Not Found"
        crumbs={[{ label: 'Services', to: '/services' }]}
      />
      <div className="container-wide py-20 text-center">
        <Link to="/services" className="btn-primary">
          <ArrowLeft className="w-4 h-4" /> Back to All Services
        </Link>
      </div>
    </>
  )
}
