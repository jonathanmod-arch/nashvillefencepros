import { Link } from 'react-router-dom'
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  Landmark,
  MapPin,
  XCircle,
} from 'lucide-react'
import PageHero from '../components/shared/PageHero'
import LeadGenSection from '../components/home/LeadGenSection'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { useStructuredData } from '../hooks/useStructuredData'
import {
  organization,
  breadcrumbList,
  articleSchema,
  serviceSchema,
} from '../lib/schema'
import { RESOURCE_PUBLISHED_AT } from '../data/siteData'

const OVERLAY_DISTRICTS = [
  {
    name: 'Germantown',
    type: 'Historic Preservation Zoning Overlay',
    note: 'Strictest review — wrought iron and woven-wire ornamental favored in front yards. No vinyl, no chain link in front.',
  },
  {
    name: 'Edgefield (East Nashville)',
    type: 'Historic Preservation Zoning Overlay',
    note: 'Wood picket and ornamental iron preferred. Side and rear cedar privacy generally approved at 6 ft.',
  },
  {
    name: 'Lockeland Springs',
    type: 'Historic Conservation Zoning Overlay',
    note: 'Conservation overlay is less strict than preservation. Most reasonable fences pass with minor design feedback.',
  },
  {
    name: 'Richland–West End',
    type: 'Historic Conservation Zoning Overlay',
    note: 'Front yards limited to 3.5 ft solid or 4 ft open. Wood, iron, and aluminum the safest material picks.',
  },
  {
    name: 'Hillsboro–West End',
    type: 'Historic Conservation Zoning Overlay',
    note: 'HZC reviews fences over 3.5 ft in the front yard. Rear yard privacy typically waved through.',
  },
  {
    name: 'Belle Meade Conservation',
    type: 'City of Belle Meade — separate review',
    note: 'Belle Meade is its own city, not Metro. ARB review for any new fence regardless of historic status.',
  },
]

const COMMON_REJECTIONS = [
  'Vinyl privacy fence proposed for a front-yard run in a Preservation overlay',
  'Chain link visible from the public right-of-way in any overlay district',
  '6 ft solid wood privacy fence in the front yard of a corner lot',
  'Modern horizontal slat design in a Preservation overlay (Conservation overlays are usually OK)',
  'Pressure-treated pine without a stain or paint plan — left to weather gray',
  'Submission without a site plan, material spec sheet, and elevation drawing',
]

const SAFER_BETS = [
  {
    title: 'Wrought iron / aluminum (4 ft, open)',
    body: 'The default front-yard choice for Germantown and Edgefield. Reads as historically appropriate even in modern overlays.',
  },
  {
    title: 'Wood picket (cedar, painted)',
    body: 'Classic 3.5 ft front yard. Specify "to be painted matching trim color" in your submission and approval rate goes up dramatically.',
  },
  {
    title: 'Cedar privacy 6 ft (side/rear only)',
    body: 'Almost always approved when not visible from the front street. Include a site plan showing setback from the front building line.',
  },
  {
    title: 'Custom horizontal cedar (Conservation only)',
    body: 'Conservation overlays in East Nashville accept modern designs; Preservation overlays (Germantown, Edgefield) typically do not.',
  },
]

export default function HistoricOverlays() {
  useDocumentMeta({
    title: 'Historic Overlay Fence Rules Nashville | HZC Approval Guide',
    description:
      'Nashville historic overlay fence requirements for Germantown, Edgefield, Lockeland Springs, Belle Meade, Richland-West End, and Hillsboro-West End. HZC submission steps, approved materials, and how to get a fence approved on the first try.',
    canonical: '/historic-overlays',
  })

  useStructuredData([
    organization(),
    breadcrumbList([{ label: 'Historic Overlays' }]),
    articleSchema({
      slug: '/historic-overlays',
      title: 'Nashville Historic Overlay Fence Rules & HZC Approval Guide',
      description:
        'Fence approval requirements for Nashville historic overlay districts: Germantown, Edgefield, Lockeland Springs, Belle Meade, Richland-West End, and Hillsboro-West End.',
      category: 'Compliance',
      image: 'https://nashvillefenceguide.com/og.jpg',
      publishedAt: RESOURCE_PUBLISHED_AT,
    }),
    serviceSchema({
      slug: '/historic-overlays',
      name: 'Historic-Overlay-Approved Fence Installation in Nashville',
      description:
        'Fence installation that passes Metro Historic Zoning Commission review on the first submission — for Germantown, Edgefield, and Conservation overlay districts.',
    }),
  ])

  return (
    <>
      <PageHero
        eyebrow="Historic Zoning"
        title="Historic Overlay Fence Rules Nashville"
        description="If your Nashville home is in a historic overlay district, your fence needs HZC approval before installation — and the wrong design can mean a removal order at your expense. Here's how each overlay actually reviews fence applications."
        crumbs={[{ label: 'Historic Overlays' }]}
      />

      <section className="bg-white section-padding">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="label-eyebrow">By District</span>
            <h2 className="mt-3 heading-section">Nashville's Six Active Overlay Districts</h2>
            <div className="heading-accent mx-auto" />
            <p className="mt-4 text-body-lead">
              Nashville's{' '}
              <a
                href="https://www.nashville.gov/departments/historical-commission"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest-500 underline underline-offset-4 hover:text-forest-600"
              >
                Historic Zoning Commission
              </a>{' '}
              reviews every fence application in these districts. Preservation overlays
              apply the strictest standards; Conservation overlays are more flexible but
              still require approval.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
            {OVERLAY_DISTRICTS.map((d) => (
              <div key={d.name} className="bg-warmgray rounded-2xl p-6">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <Landmark className="w-4 h-4 text-forest-500" />
                    <h3 className="heading-card !text-lg">{d.name}</h3>
                  </div>
                </div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-oak-500 mb-2">
                  {d.type}
                </div>
                <p className="text-sm text-onyx-700/75 leading-relaxed">{d.note}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-14">
            <div className="rounded-2xl border border-red-100 bg-red-50/40 p-6">
              <div className="flex items-center gap-2 mb-3">
                <XCircle className="w-5 h-5 text-red-600" />
                <h3 className="heading-card !text-lg">Why Nashville HZC Rejects Applications</h3>
              </div>
              <p className="text-sm text-onyx-700/70 mb-4 leading-relaxed">
                The most common reasons fence applications get rejected on the first review.
              </p>
              <ul className="space-y-2">
                {COMMON_REJECTIONS.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-sm text-onyx-700/85">
                    <span className="text-red-600 mt-0.5">×</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-forest-100 bg-forest-50/40 p-6">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-forest-500" />
                <h3 className="heading-card !text-lg">Designs HZC Approves</h3>
              </div>
              <p className="text-sm text-onyx-700/70 mb-4 leading-relaxed">
                Materials + heights that consistently clear HZC review.
              </p>
              <ul className="space-y-3">
                {SAFER_BETS.map((s) => (
                  <li key={s.title}>
                    <div className="text-sm font-semibold text-onyx-700">{s.title}</div>
                    <div className="text-xs text-onyx-700/70 mt-0.5">{s.body}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-warmgray rounded-2xl p-6 md:p-8 mb-12">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="w-5 h-5 text-forest-500" />
              <h3 className="heading-card !text-xl">HZC Submission Process</h3>
            </div>
            <ol className="space-y-3 text-sm text-onyx-700/85">
              {[
                'Confirm your address is in an overlay (Metro Codes parcel viewer). If not, you can skip HZC entirely.',
                'Submit a Preservation Permit application through Metro Historic Zoning before applying for any building permit.',
                'Application packet: site plan with setbacks, elevation drawings, material spec sheet, paint/stain color sample, and photos of the existing yard.',
                'Staff review (2–3 weeks) — Conservation overlays often get approved at staff level without a commission hearing.',
                'Commission hearing (if required) — held monthly. Preservation overlays almost always require a hearing.',
                'Once approved, the Preservation Permit attaches to your standard Metro Codes building permit.',
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-forest-500 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
            <div className="mt-5 pt-5 border-t border-[#E2E8F0] flex items-start gap-3 text-sm text-onyx-700/75">
              <Clock className="w-4 h-4 text-forest-500 mt-0.5 flex-shrink-0" />
              <span>
                <strong className="text-onyx-700">Typical timeline:</strong> 2–6 weeks from
                submission to approval. Add 2–3 weeks if your application requires a
                commission hearing. Plan the full HZC cycle before promising your fence
                installer a start date.
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-oak-200 bg-oak-50/40 p-6 mb-12">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5 text-oak-700" />
              <h3 className="heading-card !text-lg">Consequences of skipping HZC review</h3>
            </div>
            <p className="text-sm text-onyx-700/80 leading-relaxed">
              Installing a non-compliant fence in a historic overlay can trigger a
              removal order from Metro Historic Zoning at your expense — including
              demolition, haul-off, and replacement cost. The Codes inspector won't
              catch it before install, but a neighbor or HZC staff visit usually does.
              Always confirm overlay status at the address before signing a fence contract.
            </p>
          </div>

          <div className="rounded-2xl bg-forest-500 text-white p-6 md:p-8 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-oak-400/15 blur-3xl pointer-events-none" />
            <div className="relative grid md:grid-cols-[1fr_auto] gap-5 items-center">
              <div>
                <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-oak-400 mb-2">
                  <MapPin className="w-3.5 h-3.5" /> Overlay specialists
                </div>
                <h3 className="font-heading font-black text-white text-xl sm:text-2xl tracking-tightest leading-tight mb-2">
                  Hire a Nashville installer who's been through HZC before
                </h3>
                <p className="text-sm text-white/75 leading-relaxed max-w-xl">
                  We match you with Nashville fence contractors who have a track record
                  of HZC-approved installs in Germantown, Edgefield, Belle Meade
                  Conservation, and the Richland/Hillsboro overlays.
                </p>
              </div>
              <Link
                to="/contractors"
                className="inline-flex items-center justify-center gap-2 bg-oak-400 hover:bg-oak-300 text-forest-500 text-sm font-semibold px-5 py-3 rounded-lg transition-colors whitespace-nowrap"
              >
                Find Overlay Pros <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 gap-4 text-sm">
            <Link
              to="/permits"
              className="block bg-white border border-[#E2E8F0] rounded-xl p-5 hover:border-forest-500 transition-colors"
            >
              <div className="font-heading font-bold text-forest-500 mb-1">
                Nashville fence permits & rules →
              </div>
              <div className="text-onyx-700/70 text-xs">
                Metro height limits, dig-safe 811, and pool fence code.
              </div>
            </Link>
            <Link
              to="/neighborhoods/germantown"
              className="block bg-white border border-[#E2E8F0] rounded-xl p-5 hover:border-forest-500 transition-colors"
            >
              <div className="font-heading font-bold text-forest-500 mb-1">
                Germantown fence guide →
              </div>
              <div className="text-onyx-700/70 text-xs">
                Local pricing and popular fence styles for Germantown homeowners.
              </div>
            </Link>
          </div>
        </div>
      </section>

      <LeadGenSection />
    </>
  )
}
