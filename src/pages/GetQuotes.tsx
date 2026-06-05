import PageHero from '../components/shared/PageHero'
import LeadGenSection from '../components/home/LeadGenSection'
import TrustBar from '../components/home/TrustBar'
import { ShieldCheck, Users, Clock, Award } from 'lucide-react'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { useStructuredData } from '../hooks/useStructuredData'
import {
  organization,
  breadcrumbList,
  webPageSchema,
  requestQuoteAction,
} from '../lib/schema'

const STEPS = [
  {
    n: '01',
    title: 'Tell Us Your Project',
    body: 'Share your address, fence type, footage, and timeline. Two minutes, one form.',
  },
  {
    n: '02',
    title: 'We Match Vetted Pros',
    body: 'We hand-pick up to 3 licensed Nashville contractors whose specialties fit your project.',
  },
  {
    n: '03',
    title: 'Compare Detailed Quotes',
    body: 'You receive line-item proposals — materials, labor, gates, permits — usually within 48 hours.',
  },
  {
    n: '04',
    title: 'Hire With Confidence',
    body: 'Pick the pro that fits your budget and style. We stay available if you have questions.',
  },
]

const BENEFITS = [
  { icon: ShieldCheck, title: 'Vetted & Licensed', body: 'Every pro in our network is insured, licensed, and background-checked.' },
  { icon: Users, title: 'Multiple Bids', body: 'Compare 2–3 quotes side-by-side — no commitment.' },
  { icon: Clock, title: 'Fast Response', body: 'Average response time is under 24 hours.' },
  { icon: Award, title: 'No Lowballers', body: 'We screen out high-pressure sales tactics and bait-and-switch quotes.' },
]

export default function GetQuotes() {
  useDocumentMeta({
    title: 'Free Nashville Fence Installation Quotes | Compare 3 Pros',
    description:
      'Get free fence installation quotes from up to 3 vetted Nashville fence installers. Wood, vinyl, chain link, aluminum, privacy, pet, pool, and commercial fence quotes near you in Nashville TN.',
    canonical: '/get-quotes',
  })

  useStructuredData([
    organization(),
    breadcrumbList([{ label: 'Get Quotes' }]),
    webPageSchema({
      slug: '/get-quotes',
      title: 'Free Nashville Fence Installation Quotes',
      description:
        'Request free fence installation quotes from up to three vetted Nashville fence installers in under 5 minutes.',
      potentialAction: requestQuoteAction(),
    }),
  ])
  return (
    <>
      <PageHero
        eyebrow="Free Quote Request"
        title="Free Nashville Fence Installation Quotes"
        description="One short form, up to three vetted Nashville fence installers, zero obligation. Most Nashville homeowners hear back within 24 hours — for new installs, fence repair, or commercial work."
        crumbs={[{ label: 'Get Quotes' }]}
      />

      <section className="bg-white section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {BENEFITS.map((b) => {
              const Icon = b.icon
              return (
                <div key={b.title} className="text-center p-6 rounded-2xl bg-warmgray">
                  <div className="w-12 h-12 rounded-xl bg-forest-500 mx-auto flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-oak-300" />
                  </div>
                  <h3 className="heading-label mb-2">
                    {b.title}
                  </h3>
                  <p className="text-sm text-onyx-700/70 leading-relaxed">{b.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="bg-warmgray section-padding">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="label-eyebrow">How It Works</span>
            <h2 className="mt-3 heading-section">From Request to Build, Four Simple Steps</h2>
            <div className="heading-accent mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {STEPS.map((s) => (
              <div key={s.n} className="bg-white rounded-2xl p-6 shadow-soft">
                <div className="text-5xl font-heading font-bold text-oak-300 tracking-tightest leading-none mb-3">
                  {s.n}
                </div>
                <h3 className="heading-label mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-onyx-700/70 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LeadGenSection />
    </>
  )
}
