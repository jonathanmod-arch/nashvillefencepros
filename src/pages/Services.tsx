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
import { ArrowRight, ArrowLeft, Check, Wrench, Calendar, Ruler } from 'lucide-react'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { useStructuredData } from '../hooks/useStructuredData'
import {
  organization,
  breadcrumbList,
  collectionPageSchema,
  itemListSchema,
  serviceSchema,
} from '../lib/schema'
import { CITY } from '../config/city'

export default function Services() {
  const { slug, area } = useParams<{ slug?: string; area?: string }>()

  // ----- Route 4: Service detail (or service x area when wired in Phase 3) -----
  if (slug) {
    const bucket = findBucket(slug)
    if (bucket) return <BucketLanding bucketSlug={slug} />
    const service = findService(slug)
    if (!service) return <NotFound />
    return <ServiceDetail service={service} areaSlug={area} />
  }

  // ----- Route 1: Service hub -----
  return <ServiceHub />
}

// ===================================================================
// Service Hub — /services
// ===================================================================
function ServiceHub() {
  useDocumentMeta({
    title: `${CITY.name} Fence Services | Installation, Repair, Gates & More`,
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
    title: `${bucket.name} ${CITY.name} ${CITY.stateAbbr} | Vetted Local Pros`,
    description: `${bucket.summary} Compare vetted ${CITY.name} contractors for every service in the ${bucket.name.toLowerCase()} bucket.`,
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
  // areaSlug is reserved for Phase 3 — the city overlay branch. For Phase 1
  // we render the same detail page regardless, so we silence unused-var.
  void areaSlug

  const bucket = findBucket(s.bucket)!
  const related = SERVICES.filter((x) => x.bucket === s.bucket && x.slug !== s.slug).slice(0, 3)

  useDocumentMeta({
    title: `${s.name} ${CITY.name} ${CITY.stateAbbr} | Vetted Local Installers`,
    description: `${s.description.slice(0, 180)}`,
    canonical: `/services/${s.slug}`,
  })

  useStructuredData([
    organization(),
    breadcrumbList([
      { label: 'Services', to: '/services' },
      { label: bucket.name, to: `/services/${bucket.slug}` },
      { label: s.name },
    ]),
    serviceSchema({
      slug: `/services/${s.slug}`,
      name: `${s.name} in ${CITY.name} ${CITY.stateAbbr}`,
      description: s.description,
      priceLow: s.priceLow,
      priceHigh: s.priceHigh,
      unitCode: s.unitCode,
    }),
  ])

  return (
    <>
      <PageHero
        eyebrow={bucket.eyebrow}
        title={s.pageTitle ?? `${s.name} in ${CITY.name}`}
        description={s.description}
        crumbs={[
          { label: 'Services', to: '/services' },
          { label: bucket.name, to: `/services/${bucket.slug}` },
          { label: s.name },
        ]}
        right={<CallbackForm />}
      />
      <SponsorStrip />

      <section className="bg-white section-padding">
        <div className="container-wide grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="aspect-[16/9] rounded-3xl overflow-hidden shadow-medium mb-8">
              <SafeImage
                src={s.img}
                alt={`${s.name} in ${CITY.name}, ${CITY.stateAbbr}`}
                className="w-full h-full object-cover"
                sizes="(min-width: 1024px) 66vw, 100vw"
                widths={[480, 768, 1024, 1280, 1600]}
                priority
              />
            </div>

            <h2 className="heading-section !text-3xl mb-2">The Service, the Cost, the Fit</h2>
            <div className="heading-accent mb-4" />
            <p className="text-body-lead mb-5">{s.description}</p>
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
              Get {s.name} Quotes <ArrowRight className="w-4 h-4" />
            </Link>
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
                Most {CITY.name} installs land in the 2–5 day range, weather permitting. Custom
                fabrication and automation add 2–6 weeks to the lead time.
              </p>
            </div>

            <div className="bg-warmgray rounded-2xl p-6">
              <Ruler className="w-5 h-5 text-forest-500 mb-2" />
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-oak-500 mb-1">
                Counties Served
              </div>
              <p className="text-sm text-onyx-700">
                {CITY.counties.slice(0, 5).join(', ')} and surrounding {CITY.metroLabel}.
              </p>
            </div>
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
