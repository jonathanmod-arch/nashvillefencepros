import { useMemo, useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Clock,
  ExternalLink,
  Globe,
  MapPin,
  Phone,
  Shield,
  ShieldCheck,
  Star,
  Wallet,
} from 'lucide-react'
import LeadGenSection from '../components/home/LeadGenSection'
import SafeImage from '../components/shared/SafeImage'
import {
  CONTRACTORS,
  BADGE_COLORS,
  PRICING_GUIDE_BY_CATEGORY,
  SAMPLE_REVIEWS,
  categoryLabel,
  galleryFor,
} from '../data/contractors'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { useStructuredData } from '../hooks/useStructuredData'
import {
  organization,
  breadcrumbList,
  contractorLocalBusiness,
} from '../lib/schema'
import { CITY } from '../config/city'

const REVIEW_DISTRIBUTION = [
  { stars: 5, ratio: 0.83 },
  { stars: 4, ratio: 0.13 },
  { stars: 3, ratio: 0.028 },
  { stars: 2, ratio: 0.005 },
  { stars: 1, ratio: 0.007 },
]

export default function ContractorProfile() {
  const { slug } = useParams<{ slug: string }>()
  const c = useMemo(() => CONTRACTORS.find((x) => x.slug === slug), [slug])

  useDocumentMeta({
    title: c
      ? `${c.name}, ${categoryLabel(c.category)} in ${CITY.name} ${CITY.stateAbbr}`
      : `${CITY.name} Fence Pro Not Found`,
    description: c
      ? `${c.name} is a ${CITY.name}-area ${categoryLabel(c.category).toLowerCase()} serving ${c.areas.join(', ')}. ${c.description.slice(0, 110)}…`
      : `This ${CITY.name} fence contractor listing is no longer available. Browse the full ${CITY.name} fence installers directory instead.`,
    canonical: c ? `/contractors/${c.slug}` : '/contractors',
    noindex: !c,
  })

  useStructuredData(
    c
      ? [
          organization(),
          breadcrumbList([
            { label: 'Find a Pro', to: '/contractors' },
            { label: c.name },
          ]),
          contractorLocalBusiness(c),
        ]
      : [],
  )

  if (!c) {
    return <Navigate to="/contractors" replace />
  }

  const gallery = galleryFor(c.category)
  const [activeGallery, setActiveGallery] = useState(0)
  const pricing = PRICING_GUIDE_BY_CATEGORY[c.category] ?? PRICING_GUIDE_BY_CATEGORY['fencing']
  const isLiveGoogle = c.source === 'google-maps'
  const mapsHref =
    c.googleMapsUrl ??
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(c.address)}`
  const reviewBadge =
    BADGE_COLORS[c.badge] ?? BADGE_COLORS['Verified Pro']

  return (
    <>
      <section className="bg-warmgray border-b border-[#E2E8F0]">
        <div className="container-wide py-6">
          <Link
            to="/contractors"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest-500 hover:text-forest-600 transition-colors mb-5"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Directory
          </Link>

          <div className="grid lg:grid-cols-[1fr_280px] gap-8 items-start">
            <div className="flex items-start gap-5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-forest-500 text-white font-heading font-black text-2xl sm:text-3xl flex items-center justify-center flex-shrink-0">
                {c.name.charAt(0)}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span
                    className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider whitespace-nowrap ${reviewBadge}`}
                  >
                    {c.badge}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white text-onyx-700/80 border border-[#E2E8F0] text-[10px] font-bold uppercase tracking-wider">
                    <Shield className="w-3 h-3" /> {c.license}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-[#D4A373]/15 text-[#92400e] border border-[#D4A373]/30 text-[10px] font-bold uppercase tracking-wider">
                    {categoryLabel(c.category)}
                  </span>
                </div>

                <h1 className="font-heading font-black text-onyx-700 text-3xl sm:text-4xl tracking-tightest leading-tight mb-3">
                  {c.name}
                </h1>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm mb-3">
                  {isLiveGoogle ? (
                    <a
                      href={mapsHref}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="inline-flex items-center gap-1.5 text-blue-700 hover:text-blue-800 font-semibold"
                    >
                      <span
                        className="inline-flex items-center justify-center w-4 h-4 rounded text-white text-[9px] font-bold"
                        style={{
                          background:
                            'conic-gradient(from 0deg, #4285F4, #34A853, #FBBC05, #EA4335, #4285F4)',
                        }}
                      >
                        G
                      </span>
                      Live ratings on Google
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <div className="flex items-center gap-1.5">
                      <div className="flex">
                        {[0, 1, 2, 3, 4].map((i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.round(c.rating)
                                ? 'fill-oak-400 text-oak-400'
                                : 'text-onyx-200'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="font-bold text-onyx-700">{c.rating}</span>
                      <a
                        href="#reviews"
                        className="text-onyx-700/70 hover:text-forest-500 inline-flex items-center gap-0.5"
                      >
                        {c.reviews} Google reviews <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                  <div className="flex items-center gap-1.5 text-onyx-700/70">
                    <MapPin className="w-3.5 h-3.5 text-forest-500" />
                    {c.areas.join(' · ')}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {c.specialties.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded-full bg-[#D4A373]/10 text-[#92400e] border border-[#D4A373]/20 text-[11px] font-semibold"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 lg:items-end">
              <Link
                to="/get-quotes#quote-form"
                className="w-full lg:w-auto inline-flex items-center justify-center gap-2 bg-forest-500 hover:bg-forest-600 text-white text-sm font-semibold px-5 py-3 rounded-lg transition-colors"
              >
                Request a Quote <ArrowRight className="w-4 h-4" />
              </Link>
              {c.phoneRaw ? (
                <a
                  href={`tel:${c.phoneRaw}`}
                  className="w-full lg:w-auto inline-flex items-center justify-center gap-2 bg-white text-onyx-700 hover:text-forest-500 border border-[#E2E8F0] text-sm font-semibold px-5 py-3 rounded-lg transition-colors"
                >
                  <Phone className="w-4 h-4" /> {c.phone}
                </a>
              ) : isLiveGoogle ? (
                <a
                  href={mapsHref}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="w-full lg:w-auto inline-flex items-center justify-center gap-2 bg-white text-onyx-700 hover:text-forest-500 border border-[#E2E8F0] text-sm font-semibold px-5 py-3 rounded-lg transition-colors"
                >
                  <Phone className="w-4 h-4" /> Contact via Google
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : null}
              {c.website && (
                <a
                  href={c.website}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-onyx-700/70 hover:text-forest-500 transition-colors lg:justify-end"
                >
                  <Globe className="w-3.5 h-3.5" /> Visit Website
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-warmgray py-10">
        <div className="container-wide grid lg:grid-cols-[1fr_360px] gap-8 items-start">
          <div className="space-y-6">
            <Card>
              <h2 className="heading-card !text-xl mb-3">About</h2>
              {isLiveGoogle ? (
                <>
                  <p className="text-sm text-onyx-700/80 leading-relaxed mb-3">
                    {c.description}
                  </p>
                  <p className="text-xs text-onyx-700/60 leading-relaxed">
                    Sourced from a public Google Maps listing. Specialties shown are typical of the{' '}
                    {categoryLabel(c.category).toLowerCase()} category. The current business
                    description, hours, and full service area are maintained directly by the
                    owner on Google.
                  </p>
                </>
              ) : (
                <p className="text-sm text-onyx-700/80 leading-relaxed">
                  {c.name} has been {CITY.name}'s go-to{' '}
                  {categoryLabel(c.category).toLowerCase()} for over {c.yearsInBusiness} years.
                  Our team of certified installers specializes in{' '}
                  {c.specialties.slice(0, 3).join(', ')}. We serve homeowners throughout{' '}
                  {c.countiesServed} Counties and take pride in clean installations,
                  transparent pricing, and exceptional customer service. {c.description}
                </p>
              )}
            </Card>

            <Card>
              <h2 className="heading-card !text-xl mb-4">Project Gallery</h2>
              <div className="relative rounded-xl overflow-hidden bg-warmgray aspect-[16/9] mb-3">
                <SafeImage
                  src={gallery[activeGallery]}
                  alt={`${c.name} project ${activeGallery + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="text-center text-xs text-onyx-700/60 mb-4">
                {isLiveGoogle
                  ? `Sample ${categoryLabel(c.category).toLowerCase()} project visuals`
                  : `${pricing.items[0]?.label} – ${c.areas[0]}`}
              </div>
              <div className="grid grid-cols-5 gap-2">
                {gallery.slice(0, 5).map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveGallery(i)}
                    className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      activeGallery === i
                        ? 'border-forest-500'
                        : 'border-transparent opacity-75 hover:opacity-100'
                    }`}
                  >
                    <SafeImage
                      src={img}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </Card>

            <Card>
              <div className="flex items-center gap-2 mb-1">
                <Wallet className="w-4 h-4 text-forest-500" />
                <h2 className="heading-card !text-xl">Pricing Guide</h2>
              </div>
              <p className="text-xs text-onyx-700/60 mb-5">
                Typical price ranges for {CITY.name}-area projects. Final cost depends on materials,
                site conditions, and project scope. Request a free quote for an exact estimate.
              </p>
              <div className="divide-y divide-[#E2E8F0]">
                {pricing.items.map((item) => (
                  <div
                    key={item.label}
                    className="py-3.5 flex items-start justify-between gap-4"
                  >
                    <div>
                      <div className="text-sm font-semibold text-onyx-700">
                        {item.label}
                      </div>
                      <div className="text-xs text-onyx-700/60 mt-0.5">
                        {item.sub}
                      </div>
                    </div>
                    <div className="text-sm font-bold text-forest-500 whitespace-nowrap">
                      {item.price}
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/get-quotes#quote-form"
                className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-forest-500 hover:text-forest-600"
              >
                Get a free personalized estimate <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </Card>

            <Card id="reviews">
              <div className="flex items-end justify-between mb-5 flex-wrap gap-2">
                <h2 className="heading-card !text-xl flex items-center gap-2">
                  <span
                    className="inline-flex items-center justify-center w-6 h-6 rounded-md text-white text-[11px] font-bold"
                    style={{
                      background:
                        'conic-gradient(from 0deg, #4285F4, #34A853, #FBBC05, #EA4335, #4285F4)',
                    }}
                  >
                    G
                  </span>
                  Google Reviews
                </h2>
                <a
                  href={mapsHref}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-xs font-semibold text-forest-500 hover:text-forest-600 inline-flex items-center gap-1"
                >
                  View all on Google <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {isLiveGoogle ? (
                <div className="rounded-xl bg-warmgray border border-[#E2E8F0] p-6 text-center">
                  <div
                    className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-white text-base font-bold mx-auto mb-3"
                    style={{
                      background:
                        'conic-gradient(from 0deg, #4285F4, #34A853, #FBBC05, #EA4335, #4285F4)',
                    }}
                  >
                    G
                  </div>
                  <h3 className="font-heading font-bold text-onyx-700 text-lg mb-1">
                    Reviews live on Google Maps
                  </h3>
                  <p className="text-sm text-onyx-700/70 leading-relaxed max-w-md mx-auto mb-5">
                    This is a public business listing. Current star rating, review count,
                    and individual customer reviews are maintained directly on Google. View
                    the live page for the most up-to-date feedback.
                  </p>
                  <a
                    href={mapsHref}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center justify-center gap-2 bg-forest-500 hover:bg-forest-600 text-white text-sm font-semibold px-5 py-3 rounded-lg transition-colors"
                  >
                    View Reviews on Google Maps
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-[140px_1fr] gap-6 items-center mb-6 pb-6 border-b border-[#E2E8F0]">
                    <div>
                      <div className="font-heading font-black text-onyx-700 text-5xl tracking-tightest leading-none">
                        {c.rating}
                      </div>
                      <div className="flex mt-2">
                        {[0, 1, 2, 3, 4].map((i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.round(c.rating)
                                ? 'fill-oak-400 text-oak-400'
                                : 'text-onyx-200'
                            }`}
                          />
                        ))}
                      </div>
                      <div className="text-xs text-onyx-700/60 mt-1">
                        {c.reviews} Google reviews
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      {REVIEW_DISTRIBUTION.map((row) => (
                        <div key={row.stars} className="flex items-center gap-3 text-xs">
                          <span className="w-3 text-onyx-700/70 font-semibold">
                            {row.stars}
                          </span>
                          <Star className="w-3 h-3 fill-oak-400 text-oak-400 -ml-1" />
                          <div className="flex-1 h-2 rounded-full bg-[#E2E8F0] overflow-hidden">
                            <div
                              className="h-full bg-oak-400"
                              style={{ width: `${row.ratio * 100}%` }}
                            />
                          </div>
                          <span className="w-10 text-right text-onyx-700/70">
                            {Math.round(c.reviews * row.ratio)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="text-[10px] font-bold uppercase tracking-wider text-onyx-700/50 mb-3">
                    Most Recent Reviews
                  </div>
                  <div className="space-y-5">
                    {SAMPLE_REVIEWS.map((r) => (
                      <div
                        key={r.name}
                        className="pb-5 border-b border-[#E2E8F0] last:border-b-0 last:pb-0"
                      >
                        <div className="flex items-start justify-between gap-3 mb-1">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-full bg-warmgray flex items-center justify-center text-sm font-bold text-onyx-700/70">
                              {r.initial}
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-onyx-700">
                                {r.name}
                              </div>
                              <div className="text-[11px] text-onyx-700/60">
                                {r.date} · via {r.source}
                              </div>
                            </div>
                          </div>
                          <div className="flex">
                            {[0, 1, 2, 3, 4].map((i) => (
                              <Star
                                key={i}
                                className={`w-3.5 h-3.5 ${
                                  i < r.rating
                                    ? 'fill-oak-400 text-oak-400'
                                    : 'text-onyx-200'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-onyx-700/80 leading-relaxed">
                          {r.text}
                        </p>
                      </div>
                    ))}
                  </div>
                  <a
                    href={mapsHref}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-warmgray hover:bg-[#E2E8F0] text-onyx-700 text-sm font-semibold px-4 py-3 rounded-xl transition-colors"
                  >
                    <span
                      className="inline-flex items-center justify-center w-5 h-5 rounded text-white text-[10px] font-bold"
                      style={{
                        background:
                          'conic-gradient(from 0deg, #4285F4, #34A853, #FBBC05, #EA4335, #4285F4)',
                      }}
                    >
                      G
                    </span>
                    See all {c.reviews} reviews on Google Maps
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </>
              )}
            </Card>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-24">
            <Card>
              <h3 className="heading-card !text-lg mb-4">At a Glance</h3>
              <div className="space-y-3.5">
                {c.yearsInBusiness > 0 && (
                  <Glance
                    icon={Building2}
                    label="Years in business"
                    value={`${c.yearsInBusiness}+ years`}
                  />
                )}
                {c.projectsCompleted && (
                  <Glance
                    icon={CheckCircle2}
                    label="Projects completed"
                    value={c.projectsCompleted}
                  />
                )}
                <Glance icon={ShieldCheck} label="License status" value={c.license} />
                {c.responseTime && (
                  <Glance
                    icon={Clock}
                    label="Response time"
                    value={c.responseTime}
                  />
                )}
                {isLiveGoogle && (
                  <Glance
                    icon={Globe}
                    label="Source"
                    value="Google Maps listing"
                  />
                )}
              </div>
            </Card>

            <Card>
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-forest-500" />
                <h3 className="heading-card !text-lg">Service Areas</h3>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {c.areas.map((a) => (
                  <span
                    key={a}
                    className="px-2.5 py-1 rounded-full bg-forest-50 text-forest-500 border border-forest-100 text-[11px] font-semibold"
                  >
                    {a}
                  </span>
                ))}
              </div>
              <p className="text-xs text-onyx-700/70 leading-relaxed">
                Serving {c.countiesServed} Counties.
              </p>
            </Card>

            <div className="bg-forest-500 text-white rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-oak-400/15 blur-3xl" />
              <div className="relative">
                <h3 className="font-heading font-black text-white text-lg mb-2">
                  Ready for a Quote?
                </h3>
                <p className="text-sm text-white/80 leading-relaxed mb-5">
                  Get competitive estimates from {c.name} and other top {CITY.name}
                  {' '}contractors.
                </p>
                <Link
                  to="/get-quotes#quote-form"
                  className="block text-center bg-oak-400 hover:bg-oak-500 text-forest-500 font-semibold text-sm px-5 py-3 rounded-lg transition-colors"
                >
                  Get Free Estimates
                </Link>
              </div>
            </div>

            <Card>
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-forest-500" />
                <h3 className="heading-card !text-lg">Location</h3>
              </div>
              <p className="text-sm text-onyx-700/80 mb-4">{c.address}</p>
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-[#E2E8F0] mb-3 bg-gradient-to-br from-warmgray to-forest-50">
                <div className="absolute inset-0 grid place-items-center">
                  <div className="text-center px-4">
                    <MapPin className="w-6 h-6 text-forest-500 mx-auto mb-1.5" />
                    <div className="text-xs text-onyx-700/70">{c.address}</div>
                  </div>
                </div>
              </div>
              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest-500 hover:text-forest-600"
              >
                View on Google Maps <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </Card>

            <div className="px-1 text-center">
              <div className="text-[11px] text-onyx-700/55 mb-1">
                Is this your business?
              </div>
              <Link
                to="/submit-listing"
                className="inline-flex items-center gap-1 text-xs font-semibold text-forest-500 hover:text-forest-600 underline underline-offset-2"
              >
                Claim or update this listing
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <LeadGenSection />
    </>
  )
}

function Card({
  children,
  className = '',
  id,
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) {
  return (
    <div
      id={id}
      className={`bg-white rounded-2xl border border-[#E2E8F0] p-6 ${className}`}
    >
      {children}
    </div>
  )
}

function Glance({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-lg bg-forest-50 flex items-center justify-center flex-shrink-0">
        <Icon className="w-4 h-4 text-forest-500" />
      </div>
      <div className="min-w-0">
        <div className="text-[10px] font-bold uppercase tracking-wider text-onyx-700/50">
          {label}
        </div>
        <div className="text-sm font-semibold text-onyx-700 truncate">{value}</div>
      </div>
    </div>
  )
}
