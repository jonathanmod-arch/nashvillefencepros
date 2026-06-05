import PageHero from '../components/shared/PageHero'
import PermitsSection from '../components/home/PermitsSection'
import LeadGenSection from '../components/home/LeadGenSection'
import { Phone, AlertTriangle, MapPin, FileText, Ruler, Droplets } from 'lucide-react'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { useStructuredData } from '../hooks/useStructuredData'
import {
  organization,
  breadcrumbList,
  articleSchema,
} from '../lib/schema'
import { RESOURCE_PUBLISHED_AT } from '../data/siteData'

const HEIGHT_RULES = [
  { yard: 'Front Yard — Solid', max: '3.5 ft', detail: 'Privacy panels, vinyl, solid wood' },
  { yard: 'Front Yard — Open', max: '4 ft', detail: 'Picket, aluminum, ornamental iron' },
  { yard: 'Side Yard', max: '8 ft', detail: 'Most residential lots — no permit needed' },
  { yard: 'Rear Yard', max: '8 ft', detail: 'Tallest allowed without special review' },
  { yard: 'Corner Lot Sight Triangle', max: '3 ft', detail: 'Within 30 ft of intersections' },
  { yard: 'Pool Barrier', max: '4 ft min', detail: 'Per 2018 ISPSC + self-latching gate' },
]

const HISTORIC_AREAS = [
  'Germantown',
  'Edgefield (East Nashville)',
  'Lockeland Springs',
  'Richland-West End',
  'Hillsboro–West End',
  'Belle Meade Conservation',
]

export default function Permits() {
  useDocumentMeta({
    title: 'Nashville Fence Permit Rules & Height Limits | Metro Code Guide',
    description:
      'Nashville fence permit requirements, Metro height limits, HOA rules, dig-safe 811, and historic overlay districts. Plain-English fence installation rules for Davidson and Williamson County homeowners.',
    canonical: '/permits',
  })

  useStructuredData([
    organization(),
    breadcrumbList([{ label: 'Permits & Rules' }]),
    articleSchema({
      slug: '/permits',
      title: 'Nashville Fence Permits, Rules & Regulations',
      description:
        'Metro Nashville fence permit rules, yard height limits, Tennessee 811 dig-safe protocol, pool fence code, and historic overlay districts.',
      category: 'Permits',
      image: 'https://nashvillefenceguide.com/og.jpg',
      publishedAt: RESOURCE_PUBLISHED_AT,
    }),
  ])
  return (
    <>
      <PageHero
        eyebrow="Metro Compliance"
        title="Nashville Fence Permits, Rules & Regulations"
        description="Everything Davidson and Williamson County homeowners need before fence installation in Nashville TN — heights, permits, HOA approvals, dig-safe 811, and historic overlays."
        crumbs={[{ label: 'Permits & Rules' }]}
      />

      <PermitsSection />

      <section className="bg-white section-padding">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="label-eyebrow">Height Limits</span>
            <h2 className="mt-3 heading-section">Nashville Fence Height by Yard</h2>
            <div className="heading-accent mx-auto" />
            <p className="mt-4 text-body-lead">
              Metro Nashville's{' '}
              <a
                href="https://www.nashville.gov/departments/codes/construction-and-permits/building-permits-central/fence"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest-500 underline underline-offset-4 hover:text-forest-600"
              >
                residential fence code
              </a>{' '}
              keeps it simple — but corner lots, pool barriers, and overlay districts add
              layers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {HEIGHT_RULES.map((r) => (
              <div key={r.yard} className="bg-warmgray rounded-2xl p-6">
                <Ruler className="w-5 h-5 text-forest-500 mb-3" />
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-oak-500">
                  {r.yard}
                </div>
                <div className="mt-1 text-3xl font-heading font-bold text-forest-500 tracking-tightest">
                  {r.max}
                </div>
                <p className="text-sm text-onyx-700/70 mt-2 leading-relaxed">{r.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-warmgray section-padding">
        <div className="container-wide grid lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-3xl p-8 shadow-soft">
            <FileText className="w-7 h-7 text-forest-500 mb-4" />
            <h3 className="heading-card !text-2xl mb-3">
              When You Need a Permit
            </h3>
            <ul className="space-y-3 text-sm text-onyx-700">
              <li className="flex items-start gap-2">
                <span className="text-forest-500 font-bold">→</span>
                Any fence over 8 ft tall, regardless of location.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-forest-500 font-bold">→</span>
                Any fence in a flood zone — additional FEMA review applies.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-forest-500 font-bold">→</span>
                Any fence in a historic overlay district (see list at right).
              </li>
              <li className="flex items-start gap-2">
                <span className="text-forest-500 font-bold">→</span>
                Commercial property fencing of any height.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-forest-500 font-bold">→</span>
                Pool barrier fences require an inspection sign-off.
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-soft">
            <MapPin className="w-7 h-7 text-forest-500 mb-4" />
            <h3 className="heading-card !text-2xl mb-3">
              Historic Overlay Districts
            </h3>
            <p className="text-sm text-onyx-700/70 leading-relaxed mb-4">
              Fences in these neighborhoods require{' '}
              <a
                href="https://www.nashville.gov/departments/historical-commission"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest-500 underline underline-offset-4 hover:text-forest-600"
              >
                Historic Zoning Commission
              </a>{' '}
              review before installation — even for replacements.
            </p>
            <div className="flex flex-wrap gap-2">
              {HISTORIC_AREAS.map((a) => (
                <span
                  key={a}
                  className="px-3 py-1.5 rounded-md bg-oak-50 text-xs font-semibold text-oak-700"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-wide grid md:grid-cols-2 gap-6">
          <div className="bg-forest-500 text-white rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-oak-400/20 blur-3xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-oak-400 text-forest-500 text-xs font-bold uppercase tracking-[0.15em] mb-4">
                <AlertTriangle className="w-3.5 h-3.5" /> Required
              </div>
              <h3 className="text-2xl font-heading font-bold tracking-tightest mb-3">
                Tennessee 811 — Call Before You Dig
              </h3>
              <p className="text-white/80 text-sm leading-relaxed mb-5">
                Tennessee law requires at least 3 business days notice before any digging.
                Free utility marking for gas, electric, water, fiber, and telecom.
              </p>
              <a
                href="tel:811"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white text-forest-500 font-bold text-sm hover:bg-oak-100 transition-colors"
              >
                <Phone className="w-4 h-4" /> Dial 811
              </a>
            </div>
          </div>

          <div className="bg-oak-400 text-forest-500 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-white/20 blur-3xl" />
            <div className="relative">
              <Droplets className="w-7 h-7 mb-4" />
              <h3 className="text-2xl font-heading font-bold tracking-tightest mb-3">
                Pool Barrier Code
              </h3>
              <p className="text-forest-700 text-sm leading-relaxed mb-5">
                Tennessee adopts the 2018 ISPSC: a minimum 4 ft barrier, openings no greater
                than 4 inches, and a self-closing, self-latching gate that swings outward
                from the pool.
              </p>
              <ul className="space-y-1.5 text-xs font-semibold">
                <li>· Latch release 54 inches above grade</li>
                <li>· Climb-resistant vertical members</li>
                <li>· Inspection required after install</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <LeadGenSection />
    </>
  )
}
