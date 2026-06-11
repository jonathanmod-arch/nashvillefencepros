import { useMemo, useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Award,
  BadgeCheck,
  Briefcase,
  Building2,
  Calendar,
  Check,
  CheckCircle2,
  Clock,
  ExternalLink,
  Globe,
  HelpCircle,
  MapPin,
  Minus,
  Phone,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  ThumbsDown,
  ThumbsUp,
  Wallet,
  Users,
  Wrench,
} from 'lucide-react'
import LeadGenSection from '../components/home/LeadGenSection'
import SafeImage from '../components/shared/SafeImage'
import {
  CONTRACTORS,
  BADGE_COLORS,
  PRICING_GUIDE_BY_CATEGORY,
  categoryLabel,
  galleryFor,
  type Contractor,
} from '../data/contractors'
import { SERVICES, findService } from '../data/services'
import { NEIGHBORHOODS } from '../data/siteData'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { useStructuredData } from '../hooks/useStructuredData'
import {
  organization,
  breadcrumbList,
  contractorLocalBusiness,
  faqPageSchema,
} from '../lib/schema'
import { CITY } from '../config/city'

const PRESENCE_LABELS: Record<string, string> = {
  googleBusiness: 'Google Business',
  facebook: 'Facebook',
  bbb: 'BBB',
  yelp: 'Yelp',
  buildzoom: 'BuildZoom',
  houzz: 'Houzz',
  angi: 'Angi',
  linkedin: 'LinkedIn',
  chamber: 'Chamber',
}

function formatUpdated(iso: string): string {
  const d = new Date(iso)
  return d.toLocaleString('en-US', { month: 'short', year: 'numeric' })
}

function isRecentlyUpdated(iso: string): boolean {
  const days = (Date.now() - new Date(iso).getTime()) / (1000 * 60 * 60 * 24)
  return days <= 90
}

function deriveSnapshot(c: Contractor): string {
  if (c.snapshot) return c.snapshot
  const years = c.yearsInBusiness ? ` since ${new Date().getFullYear() - c.yearsInBusiness}` : ''
  const specialties = c.specialties.slice(0, 4).join(', ')
  return `${c.name} provides ${c.projectType} ${categoryLabel(c.category).toLowerCase()} services throughout ${c.areas.join(', ')}, and the surrounding ${c.countiesServed} counties${years}. Specialties include ${specialties}.`
}

function findCompareCandidates(c: Contractor): Contractor[] {
  return CONTRACTORS
    .filter((x) => x.slug !== c.slug && x.category === c.category)
    .sort((a, b) => {
      const areaOverlap = (x: Contractor) => x.areas.filter((a) => c.areas.includes(a)).length
      const overlapDiff = areaOverlap(b) - areaOverlap(a)
      if (overlapDiff !== 0) return overlapDiff
      return (b.rating || 0) - (a.rating || 0)
    })
    .slice(0, 3)
}

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
          ...(c.faqs && c.faqs.length
            ? [faqPageSchema(c.faqs.map((f) => ({ q: f.q, a: f.a })))]
            : []),
        ]
      : [],
  )

  if (!c) return <Navigate to="/contractors" replace />

  const gallery = galleryFor(c.category)
  const [activeGallery, setActiveGallery] = useState(0)
  const pricing = PRICING_GUIDE_BY_CATEGORY[c.category] ?? PRICING_GUIDE_BY_CATEGORY['fencing']
  const isLiveGoogle = c.source === 'google-maps'
  const isClaimed = c.claimStatus === 'free' || c.claimStatus === 'pro'
  const isPro = c.claimStatus === 'pro'
  const mapsHref =
    c.googleMapsUrl ??
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(c.address)}`
  const reviewBadge = BADGE_COLORS[c.badge] ?? BADGE_COLORS['Verified Pro']
  const updatedLabel = formatUpdated(c.lastUpdated)
  const recentlyUpdated = isRecentlyUpdated(c.lastUpdated)
  const similar = findCompareCandidates(c)

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
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider whitespace-nowrap ${reviewBadge}`}>
                    {c.badge}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white text-onyx-700/80 border border-[#E2E8F0] text-[10px] font-bold uppercase tracking-wider">
                    <Shield className="w-3 h-3" /> {c.license}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-[#D4A373]/15 text-[#92400e] border border-[#D4A373]/30 text-[10px] font-bold uppercase tracking-wider">
                    {categoryLabel(c.category)}
                  </span>
                  {isPro && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-forest-500 text-white text-[10px] font-bold uppercase tracking-wider">
                      <BadgeCheck className="w-3 h-3" /> Pro Profile
                    </span>
                  )}
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
                        style={{ background: 'conic-gradient(from 0deg, #4285F4, #34A853, #FBBC05, #EA4335, #4285F4)' }}
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
                          <Star key={i} className={`w-4 h-4 ${i < Math.round(c.rating) ? 'fill-oak-400 text-oak-400' : 'text-onyx-200'}`} />
                        ))}
                      </div>
                      <span className="font-bold text-onyx-700">{c.rating}</span>
                      <a href="#reviews" className="text-onyx-700/70 hover:text-forest-500 inline-flex items-center gap-0.5">
                        {c.reviews} Google reviews <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                  <div className="flex items-center gap-1.5 text-onyx-700/70">
                    <MapPin className="w-3.5 h-3.5 text-forest-500" />
                    {c.areas.join(' · ')}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 lg:items-end">
              <Link to="/get-quotes#quote-form" className="w-full lg:w-auto inline-flex items-center justify-center gap-2 bg-forest-500 hover:bg-forest-600 text-white text-sm font-semibold px-5 py-3 rounded-lg transition-colors">
                Request a Quote <ArrowRight className="w-4 h-4" />
              </Link>
              {c.phoneRaw ? (
                <a href={`tel:${c.phoneRaw}`} className="w-full lg:w-auto inline-flex items-center justify-center gap-2 bg-white text-onyx-700 hover:text-forest-500 border border-[#E2E8F0] text-sm font-semibold px-5 py-3 rounded-lg transition-colors">
                  <Phone className="w-4 h-4" /> {c.phone}
                </a>
              ) : isLiveGoogle ? (
                <a href={mapsHref} target="_blank" rel="noopener noreferrer nofollow" className="w-full lg:w-auto inline-flex items-center justify-center gap-2 bg-white text-onyx-700 hover:text-forest-500 border border-[#E2E8F0] text-sm font-semibold px-5 py-3 rounded-lg transition-colors">
                  <Phone className="w-4 h-4" /> Contact via Google <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : null}
              {c.website && (
                <a href={c.website} target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-1.5 text-xs font-semibold text-onyx-700/70 hover:text-forest-500 transition-colors lg:justify-end">
                  <Globe className="w-3.5 h-3.5" /> Visit Website <ExternalLink className="w-3 h-3" />
                </a>
              )}
              {!isClaimed && (
                <Link to="/submit-listing" className="inline-flex items-center gap-1 text-xs font-semibold text-forest-500 hover:text-forest-600 lg:justify-end mt-1">
                  Is this your business? Claim listing <ArrowRight className="w-3 h-3" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-warmgray py-10">
        <div className="container-wide grid lg:grid-cols-[1fr_360px] gap-8 items-start">
          <div className="space-y-6">

            <div className="flex flex-wrap items-center gap-2.5 text-xs">
              <span className="inline-flex items-center gap-1 text-onyx-700/60">
                <Clock className="w-3 h-3" /> Updated {updatedLabel}
              </span>
              {recentlyUpdated && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-forest-50 text-forest-500 font-semibold border border-forest-100">
                  <Sparkles className="w-3 h-3" /> Recently updated
                </span>
              )}
              {isClaimed && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-forest-50 text-forest-500 font-semibold border border-forest-100">
                  <BadgeCheck className="w-3 h-3" /> Claimed by owner
                </span>
              )}
            </div>

            <Section eyebrow="Overview" title={`About ${c.name}`}>
              <p className="text-sm text-onyx-700/85 leading-relaxed">
                {deriveSnapshot(c)}
              </p>
              {isLiveGoogle && !c.snapshot && (
                <p className="mt-3 text-xs text-onyx-700/55 leading-relaxed">
                  Snapshot drawn from the public Google Maps listing. Owner-edited
                  overview replaces this once the profile is claimed.
                </p>
              )}
            </Section>

            {!isClaimed && (
              <Link to="/submit-listing" className="flex items-center justify-between gap-3 p-4 rounded-xl bg-oak-50 border border-oak-100 hover:bg-oak-100 hover:border-oak-200 transition-colors">
                <div className="text-sm">
                  <div className="font-bold text-onyx-700">Is this your business?</div>
                  <div className="text-xs text-onyx-700/70">
                    Claim or update this listing to keep contact info, hours, and services current.
                  </div>
                </div>
                <div className="inline-flex items-center gap-1 text-sm font-semibold text-forest-500 whitespace-nowrap">
                  Claim listing <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            )}

            {/* Sample Visuals — only renders when there's no Pro portfolio yet.
                Sits above Trust & Verification so the page leads with imagery. */}
            {(!c.portfolio || c.portfolio.length === 0) && (
              <Section eyebrow="Sample Visuals" title="Reference project photos">
                <p className="text-xs text-onyx-700/60 mb-4">
                  Stock visuals representative of the {categoryLabel(c.category).toLowerCase()} category. Replaced with the owner's own portfolio after claim.
                </p>
                <div className="relative rounded-xl overflow-hidden bg-warmgray aspect-[16/9] mb-3">
                  <SafeImage
                    src={gallery[activeGallery]}
                    alt={`${c.name} reference project ${activeGallery + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {gallery.slice(0, 5).map((img, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveGallery(i)}
                      className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${activeGallery === i ? 'border-forest-500' : 'border-transparent opacity-75 hover:opacity-100'}`}
                    >
                      <SafeImage src={img} alt="" className="absolute inset-0 w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </Section>
            )}

            <Section eyebrow="Trust & Verification" title="What we've confirmed">
              <VerificationChecklist c={c} />
            </Section>

            <Section eyebrow="Services Offered" title={`${categoryLabel(c.category)} services`}>
              <ServicesGrid c={c} />
            </Section>

            <Section eyebrow="Areas Served" title="Coverage area">
              <AreasGrid c={c} />
              <p className="mt-4 text-xs text-onyx-700/60">
                Serving {c.countiesServed} Counties.
              </p>
            </Section>

            {c.portfolio && c.portfolio.length > 0 ? (
              <Section eyebrow="Project Portfolio" title="Featured projects">
                <PortfolioGrid items={c.portfolio} />
              </Section>
            ) : (
              <ProGate
                eyebrow="Project Portfolio"
                title="Featured projects"
                blurb="Photos, project sizes, and completion dates for recent installations. Owners add their portfolio after claiming the listing."
                company={c.name}
              />
            )}

            {c.credentials && (c.credentials.certifications?.length || c.credentials.memberships?.length || c.credentials.awards?.length || c.credentials.manufacturerPartnerships?.length || c.credentials.licenses?.length) ? (
              <Section eyebrow="Company Credentials" title="Certifications, memberships & partnerships">
                <CredentialsBlock credentials={c.credentials} />
              </Section>
            ) : (
              <ProGate
                eyebrow="Company Credentials"
                title="Certifications, memberships & partnerships"
                blurb="Manufacturer partnerships, industry certifications, association memberships, and any awards or recognitions. Added by the owner."
                company={c.name}
              />
            )}

            <Section eyebrow="Customer Reviews" title="What customers say">
              {c.reviewSummary ? (
                <ReviewSummary summary={c.reviewSummary} />
              ) : (
                <PublicReviewsCallout c={c} mapsHref={mapsHref} isLiveGoogle={isLiveGoogle} />
              )}
            </Section>

            {c.pricing && Object.keys(c.pricing).length > 0 ? (
              <Section eyebrow="Pricing Information" title="Typical project pricing">
                <PricingTable pricing={c.pricing} />
              </Section>
            ) : (
              <Section eyebrow="Pricing Guide" title="Typical Nashville-area pricing">
                <p className="text-xs text-onyx-700/60 mb-5">
                  General ranges across the {categoryLabel(c.category).toLowerCase()} category in
                  {' '}{CITY.name}. Owner-confirmed pricing appears here once the profile is claimed and upgraded.
                </p>
                <div className="divide-y divide-[#E2E8F0]">
                  {pricing.items.map((item) => (
                    <div key={item.label} className="py-3.5 flex items-start justify-between gap-4">
                      <div>
                        <div className="text-sm font-semibold text-onyx-700">{item.label}</div>
                        <div className="text-xs text-onyx-700/60 mt-0.5">{item.sub}</div>
                      </div>
                      <div className="text-sm font-bold text-forest-500 whitespace-nowrap">{item.price}</div>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {c.faqs && c.faqs.length > 0 ? (
              <Section eyebrow="Frequently Asked Questions" title={`${c.name} FAQs`}>
                <FAQList faqs={c.faqs} />
              </Section>
            ) : (
              <ProGate
                eyebrow="Frequently Asked Questions"
                title="Common questions, answered"
                blurb="Financing, warranty, scheduling, permits — the things customers ask before signing. Added by the owner."
                company={c.name}
              />
            )}

            {c.editorialAssessment && (
              <Section eyebrow="Fence Guide Assessment" title="Our notes">
                <p className="text-sm text-onyx-700/85 leading-relaxed whitespace-pre-line">
                  {c.editorialAssessment}
                </p>
                <p className="mt-3 text-xs text-onyx-700/55">
                  Independent editorial assessment by {CITY.siteName}. Not influenced by advertising or claim status.
                </p>
              </Section>
            )}

            {similar.length > 0 && (
              <Section eyebrow="Compare" title={`Similar ${CITY.name} ${categoryLabel(c.category).toLowerCase()} pros`}>
                <SimilarGrid contractors={similar} />
              </Section>
            )}

          </div>

          <aside className="space-y-5">
            <BusinessInfoCard c={c} />
            <OnlinePresenceCard c={c} mapsHref={mapsHref} isLiveGoogle={isLiveGoogle} />
            <Card>
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-forest-500" />
                <h3 className="heading-card !text-lg">Service Area Map</h3>
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
              <a href={mapsHref} target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest-500 hover:text-forest-600">
                View on Google Maps <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </Card>

            <div className="bg-forest-500 text-white rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-oak-400/15 blur-3xl" />
              <div className="relative">
                <h3 className="font-heading font-black text-white text-lg mb-2">Ready for a Quote?</h3>
                <p className="text-sm text-white/80 leading-relaxed mb-5">
                  Get competitive estimates from {c.name} and other top {CITY.name} contractors.
                </p>
                <Link to="/get-quotes#quote-form" className="block text-center bg-oak-400 hover:bg-oak-500 text-forest-500 font-semibold text-sm px-5 py-3 rounded-lg transition-colors">
                  Get Free Estimates
                </Link>
              </div>
            </div>

            {!isClaimed && (
              <div className="px-1 text-center">
                <div className="text-[11px] text-onyx-700/55 mb-1">Is this your business?</div>
                <Link to="/submit-listing" className="inline-flex items-center gap-1 text-xs font-semibold text-forest-500 hover:text-forest-600 underline underline-offset-2">
                  Claim or update this listing <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            )}
          </aside>
        </div>
      </section>

      <LeadGenSection />
    </>
  )
}

/* ===== Helper components ===== */

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string
  title: string
  children: React.ReactNode
}) {
  return (
    <Card>
      <span className="label-eyebrow">{eyebrow}</span>
      <h2 className="mt-1.5 heading-card !text-xl mb-4">{title}</h2>
      {children}
    </Card>
  )
}

function ProGate({
  eyebrow,
  title,
  blurb,
  company,
}: {
  eyebrow: string
  title: string
  blurb: string
  company: string
}) {
  return (
    <Card className="border-dashed">
      <span className="label-eyebrow">{eyebrow}</span>
      <h2 className="mt-1.5 heading-card !text-xl mb-2">{title}</h2>
      <p className="text-sm text-onyx-700/70 leading-relaxed mb-4">{blurb}</p>
      <div className="flex items-center justify-between gap-3 p-4 rounded-xl bg-warmgray border border-[#E2E8F0]">
        <div className="text-sm">
          <div className="font-bold text-onyx-700">This section unlocks when {company} claims the profile.</div>
          <div className="text-xs text-onyx-700/60 mt-0.5">Are you the owner? Claim and upgrade to add this content.</div>
        </div>
        <Link to="/submit-listing" className="inline-flex items-center gap-1 text-sm font-semibold text-forest-500 hover:text-forest-600 whitespace-nowrap">
          Claim listing <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </Card>
  )
}

function VerificationChecklist({ c }: { c: Contractor }) {
  const v = c.verification
  const rows: { label: string; done: boolean; note?: string }[] = [
    { label: 'Business website verified', done: !!v?.websiteVerified },
    { label: 'Business address verified', done: !!v?.addressVerified },
    { label: 'Phone number verified', done: !!v?.phoneVerified },
    { label: 'Google Business Profile found', done: !!v?.googleBusinessFound },
    {
      label: 'BBB profile found',
      done: !!v?.bbbFound,
      note: v?.bbbAccreditation ? `BBB ${v.bbbAccreditation} accreditation` : undefined,
    },
    { label: `${CITY.name} Chamber member`, done: !!v?.chamberMember },
    { label: 'Licensed & insured', done: !!v?.licensedInsured },
    { label: 'Employee count confirmed', done: !!v?.employeeCountConfirmed },
  ]
  return (
    <ul className="grid sm:grid-cols-2 gap-2">
      {rows.map((r) => (
        <li key={r.label} className="flex items-start gap-2.5 text-sm">
          {r.done ? (
            <span className="w-5 h-5 rounded-full bg-forest-50 text-forest-500 inline-flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-3 h-3" />
            </span>
          ) : (
            <span className="w-5 h-5 rounded-full bg-warmgray text-onyx-400 inline-flex items-center justify-center flex-shrink-0 mt-0.5">
              <Minus className="w-3 h-3" />
            </span>
          )}
          <div className="min-w-0">
            <div className={r.done ? 'text-onyx-700' : 'text-onyx-400'}>{r.label}</div>
            {r.note && r.done && (
              <div className="text-[11px] text-onyx-700/60 mt-0.5">{r.note}</div>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}

function ServicesGrid({ c }: { c: Contractor }) {
  const fromCatalog = (c.servicesOffered ?? [])
    .map((slug) => {
      const s = findService(slug)
      return s ? { slug: s.slug, label: s.name } : null
    })
    .filter((x): x is { slug: string; label: string } => !!x)

  if (fromCatalog.length > 0) {
    return (
      <div className="flex flex-wrap gap-2">
        {fromCatalog.map((s) => (
          <Link
            key={s.slug}
            to={`/services/${s.slug}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-forest-50 text-forest-500 border border-forest-100 text-xs font-semibold hover:bg-forest-100 transition-colors"
          >
            {s.label} <ArrowUpRight className="w-3 h-3" />
          </Link>
        ))}
      </div>
    )
  }
  // Fallback: derive from specialties as plain pills
  return (
    <div className="flex flex-wrap gap-2">
      {c.specialties.map((s) => (
        <span key={s} className="inline-flex items-center px-3 py-1.5 rounded-full bg-warmgray text-onyx-700 border border-[#E2E8F0] text-xs font-semibold">
          {s}
        </span>
      ))}
      <p className="basis-full text-[11px] text-onyx-700/55 mt-1">
        Linked service pages appear once the owner claims and confirms their full service list.
      </p>
    </div>
  )
}

function AreasGrid({ c }: { c: Contractor }) {
  const detail = (c.areasServedDetail ?? []).filter(
    (a) => !!NEIGHBORHOODS.find((n) => n.slug === a.slug),
  )
  if (detail.length > 0) {
    return (
      <div className="flex flex-wrap gap-2">
        {detail.map((a) => (
          <Link
            key={a.slug}
            to={`/service-areas/${a.slug}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-forest-50 text-forest-500 border border-forest-100 text-xs font-semibold hover:bg-forest-100 transition-colors"
          >
            {a.name} <ArrowUpRight className="w-3 h-3" />
          </Link>
        ))}
      </div>
    )
  }
  return (
    <div className="flex flex-wrap gap-2">
      {c.areas.map((a) => (
        <span key={a} className="inline-flex items-center px-3 py-1.5 rounded-full bg-warmgray text-onyx-700 border border-[#E2E8F0] text-xs font-semibold">
          {a}
        </span>
      ))}
    </div>
  )
}

function PortfolioGrid({ items }: { items: NonNullable<Contractor['portfolio']> }) {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {items.map((p) => (
        <div key={p.id} className="rounded-xl border border-[#E2E8F0] overflow-hidden bg-white">
          {p.photos[0] && (
            <div className="aspect-[16/10] bg-warmgray">
              <SafeImage src={p.photos[0]} alt={p.title} className="w-full h-full object-cover" />
            </div>
          )}
          <div className="p-4">
            <div className="font-heading font-bold text-onyx-700 text-sm mb-1">{p.title}</div>
            <div className="text-xs text-onyx-700/60 space-y-0.5">
              <div>{p.location}</div>
              <div>{p.fenceType} · {p.projectSize}</div>
              <div>Completed {formatUpdated(p.completionDate)}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function CredentialsBlock({ credentials }: { credentials: NonNullable<Contractor['credentials']> }) {
  const groups: { label: string; icon: typeof Award; items?: string[] }[] = [
    { label: 'Licenses', icon: ShieldCheck, items: credentials.licenses },
    { label: 'Certifications', icon: BadgeCheck, items: credentials.certifications },
    { label: 'Memberships', icon: Users, items: credentials.memberships },
    { label: 'Awards', icon: Award, items: credentials.awards },
    { label: 'Manufacturer partnerships', icon: Wrench, items: credentials.manufacturerPartnerships },
  ].filter((g) => g.items && g.items.length > 0)
  return (
    <div className="space-y-5">
      {groups.map((g) => {
        const Icon = g.icon
        return (
          <div key={g.label}>
            <div className="flex items-center gap-2 mb-2">
              <Icon className="w-4 h-4 text-forest-500" />
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-oak-500">{g.label}</div>
            </div>
            <ul className="space-y-1.5">
              {g.items!.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-onyx-700/85">
                  <CheckCircle2 className="w-3.5 h-3.5 text-forest-500 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )
      })}
    </div>
  )
}

function ReviewSummary({ summary }: { summary: NonNullable<Contractor['reviewSummary']> }) {
  return (
    <div className="space-y-5">
      <p className="text-xs text-onyx-700/55">
        Synthesized themes from {summary.reviewsAnalyzed} public Google reviews. Not copied
        verbatim. Refreshed {formatUpdated(summary.summarizedAt)}.
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="rounded-xl bg-forest-50 border border-forest-100 p-4">
          <div className="flex items-center gap-2 mb-2">
            <ThumbsUp className="w-4 h-4 text-forest-500" />
            <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-forest-500">Common praise</div>
          </div>
          <ul className="space-y-1.5 text-sm text-onyx-700/85">
            {summary.commonPraise.map((p) => (
              <li key={p} className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-forest-500 mt-0.5 flex-shrink-0" /> {p}
              </li>
            ))}
          </ul>
        </div>
        {summary.commonConcerns.length > 0 && (
          <div className="rounded-xl bg-oak-50 border border-oak-100 p-4">
            <div className="flex items-center gap-2 mb-2">
              <ThumbsDown className="w-4 h-4 text-oak-700" />
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-oak-700">Common concerns</div>
            </div>
            <ul className="space-y-1.5 text-sm text-onyx-700/85">
              {summary.commonConcerns.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <Minus className="w-3.5 h-3.5 text-oak-700 mt-0.5 flex-shrink-0" /> {p}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

function PublicReviewsCallout({ c, mapsHref, isLiveGoogle }: { c: Contractor; mapsHref: string; isLiveGoogle: boolean }) {
  if (isLiveGoogle) {
    return (
      <div className="rounded-xl bg-warmgray border border-[#E2E8F0] p-5 text-center">
        <div
          className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-white text-sm font-bold mx-auto mb-3"
          style={{ background: 'conic-gradient(from 0deg, #4285F4, #34A853, #FBBC05, #EA4335, #4285F4)' }}
        >
          G
        </div>
        <p className="text-sm text-onyx-700/80 leading-relaxed max-w-md mx-auto mb-4">
          Live star rating and individual reviews are maintained on the Google Maps page. A summarized themes block lands here on the next editorial pass.
        </p>
        <a href={mapsHref} target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center justify-center gap-2 bg-forest-500 hover:bg-forest-600 text-white text-sm font-semibold px-5 py-3 rounded-lg transition-colors">
          View Reviews on Google Maps <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    )
  }
  return (
    <p className="text-sm text-onyx-700/70">
      No public reviews indexed for {c.name} yet. Check back as the listing is refreshed.
    </p>
  )
}

function PricingTable({ pricing }: { pricing: NonNullable<Contractor['pricing']> }) {
  const rows = [
    ['Privacy Fence', pricing.privacy],
    ['Pool Fence', pricing.pool],
    ['Aluminum Fence', pricing.aluminum],
    ['Gate Installation', pricing.gate],
  ] as const
  return (
    <div className="divide-y divide-[#E2E8F0]">
      {rows.map(([label, range]) =>
        range ? (
          <div key={label} className="py-3.5 flex items-center justify-between gap-4">
            <div className="text-sm font-semibold text-onyx-700">{label}</div>
            <div className="text-sm font-bold text-forest-500 whitespace-nowrap">
              ${range.lo.toLocaleString()}–${range.hi.toLocaleString()}/{range.unit === 'project' ? 'project' : 'linear ft'}
            </div>
          </div>
        ) : null,
      )}
    </div>
  )
}

function FAQList({ faqs }: { faqs: NonNullable<Contractor['faqs']> }) {
  return (
    <div className="space-y-4">
      {faqs.map((f) => (
        <div key={f.q}>
          <div className="font-semibold text-onyx-700 mb-1 flex items-start gap-2">
            <HelpCircle className="w-4 h-4 text-forest-500 mt-0.5 flex-shrink-0" /> {f.q}
          </div>
          <p className="text-sm text-onyx-700/80 leading-relaxed pl-6">{f.a}</p>
        </div>
      ))}
    </div>
  )
}

function SimilarGrid({ contractors }: { contractors: Contractor[] }) {
  return (
    <div className="grid sm:grid-cols-3 gap-3">
      {contractors.map((s) => (
        <Link
          key={s.slug}
          to={`/contractors/${s.slug}`}
          className="block rounded-xl border border-[#E2E8F0] p-4 hover:border-forest-500 hover:bg-forest-50/30 transition-colors"
        >
          <div className="font-heading font-bold text-onyx-700 text-sm mb-1 leading-tight">{s.name}</div>
          <div className="text-[11px] text-onyx-700/60 mb-2">{s.areas.slice(0, 2).join(', ')}</div>
          <div className="text-[11px] text-forest-500 font-semibold inline-flex items-center gap-0.5">
            View profile <ArrowRight className="w-3 h-3" />
          </div>
        </Link>
      ))}
    </div>
  )
}

function BusinessInfoCard({ c }: { c: Contractor }) {
  const rows: { label: string; value: string }[] = []
  if (c.founded) rows.push({ label: 'Founded', value: String(c.founded) })
  if (c.ownership) rows.push({ label: 'Ownership', value: c.ownership })
  if (c.employees) rows.push({ label: 'Employees', value: String(c.employees) })
  if (c.yearsInBusiness > 0) rows.push({ label: 'Years in business', value: String(c.yearsInBusiness) })
  if (c.isCommercialProjects) rows.push({ label: 'Commercial projects', value: 'Yes' })
  if (c.isResidentialProjects) rows.push({ label: 'Residential projects', value: 'Yes' })
  if (c.responseTime) rows.push({ label: 'Response time', value: c.responseTime })
  // Service area lives last because the value wraps to two lines and gets more
  // breathing room at the bottom of the card.
  rows.push({ label: 'Service area', value: `${c.countiesServed} Counties` })

  return (
    <Card>
      <div className="flex items-center gap-2 mb-4">
        <Briefcase className="w-4 h-4 text-forest-500" />
        <h3 className="heading-card !text-lg">Business Information</h3>
      </div>
      <dl className="divide-y divide-[#E2E8F0]">
        {rows.map((r) => (
          <div key={r.label} className="py-2.5 flex items-center justify-between gap-3 text-sm">
            <dt className="text-onyx-700/65">{r.label}</dt>
            <dd className="font-semibold text-onyx-700 text-right">{r.value}</dd>
          </div>
        ))}
      </dl>
      {c.manager && (
        <div className="mt-4 pt-4 border-t border-[#E2E8F0] flex items-start gap-3">
          {c.manager.headshot ? (
            <SafeImage
              src={c.manager.headshot}
              alt={c.manager.name}
              className="w-11 h-11 rounded-full object-cover border border-[#E2E8F0] flex-shrink-0"
            />
          ) : (
            <div className="w-11 h-11 rounded-full bg-forest-50 text-forest-500 flex items-center justify-center font-bold border border-[#E2E8F0] flex-shrink-0">
              {c.manager.name.charAt(0)}
            </div>
          )}
          <div className="min-w-0 flex-1">
            <div className="text-[10px] uppercase tracking-wider font-semibold text-onyx-700/55">
              Managed by
            </div>
            <div className="text-sm font-semibold text-onyx-700 truncate">{c.manager.name}</div>
            <div className="text-xs text-onyx-700/60 mt-0.5 flex flex-wrap items-center gap-x-1.5">
              <span>{c.manager.role}</span>
              {c.manager.linkedinUrl && (
                <>
                  <span aria-hidden>·</span>
                  <a
                    href={c.manager.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-0.5 text-forest-500 hover:text-forest-600 hover:underline font-semibold"
                  >
                    LinkedIn <ArrowUpRight className="w-3 h-3" />
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </Card>
  )
}

function OnlinePresenceCard({ c, mapsHref, isLiveGoogle }: { c: Contractor; mapsHref: string; isLiveGoogle: boolean }) {
  const presence = c.onlinePresence ?? {}
  const entries: { key: string; label: string; url: string }[] = []
  Object.entries(PRESENCE_LABELS).forEach(([key, label]) => {
    const url = presence[key as keyof typeof presence]
    if (typeof url === 'string' && url) entries.push({ key, label, url })
  })
  // Always inject Google Maps if applicable and not already added
  if (isLiveGoogle && !entries.find((e) => e.key === 'googleBusiness')) {
    entries.unshift({ key: 'googleBusiness', label: 'Google Business', url: mapsHref })
  }
  if (c.website && !entries.find((e) => e.url === c.website)) {
    entries.push({ key: 'website', label: 'Website', url: c.website })
  }

  if (entries.length === 0) {
    return (
      <Card>
        <div className="flex items-center gap-2 mb-3">
          <Globe className="w-4 h-4 text-forest-500" />
          <h3 className="heading-card !text-lg">Online Presence</h3>
        </div>
        <p className="text-xs text-onyx-700/55">
          External citations populate as the listing is refreshed.
        </p>
      </Card>
    )
  }

  return (
    <Card>
      <div className="flex items-center gap-2 mb-3">
        <Globe className="w-4 h-4 text-forest-500" />
        <h3 className="heading-card !text-lg">Online Presence</h3>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {entries.map((e) => (
          <a
            key={e.key}
            href={e.url}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-warmgray border border-[#E2E8F0] text-[11px] font-semibold text-onyx-700 hover:border-forest-500 hover:text-forest-500 transition-colors"
          >
            {e.label} <ExternalLink className="w-2.5 h-2.5" />
          </a>
        ))}
      </div>
    </Card>
  )
}

function Card({ children, className = '', id }: { children: React.ReactNode; className?: string; id?: string }) {
  return (
    <div id={id} className={`bg-white rounded-2xl border border-[#E2E8F0] p-6 ${className}`}>
      {children}
    </div>
  )
}
