import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  Eye,
  Mail,
  MapPin,
  Phone,
  Shield,
  TrendingUp,
  Users,
} from 'lucide-react'
import PageHero from '../components/shared/PageHero'
import CallbackForm from '../components/shared/CallbackForm'
import LeadGenSection from '../components/home/LeadGenSection'
import { COMPANY } from '../data/siteData'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { useStructuredData } from '../hooks/useStructuredData'
import {
  organization,
  breadcrumbList,
  webPageSchema,
} from '../lib/schema'
import { CITY } from '../config/city'

const VALUES = [
  {
    icon: Shield,
    title: 'Vetted, never sold',
    body: `Every contractor listing in our directory clears the same seven-question vetting checklist, ${CITY.state} insurance, 811 protocol, post-depth spec, warranty in writing. We don't accept pay-to-play listings.`,
  },
  {
    icon: Eye,
    title: 'Transparent pricing',
    body: `We publish real ${CITY.name}-area cost ranges by material, neighborhood, and project size. No "starting at $99" gimmicks, no contractor-fed inflation.`,
  },
  {
    icon: Users,
    title: 'Homeowner-first',
    body: 'Our editorial team is independent of the contractors we list. Resource guides are written for the person about to spend $5,000 on a fence, not the company selling it.',
  },
  {
    icon: TrendingUp,
    title: 'Continuously updated',
    body: 'Pricing, permit rules, and HZC requirements change every year. We re-audit every guide and listing on a rolling 90-day cycle.',
  },
]

const HOW_WE_MAKE_MONEY = [
  'Lead referral fees from contractors when a homeowner requests a quote through our platform',
  'Optional premium directory listings for contractors who want enhanced placement',
  'Sponsored homepage banners (clearly labeled as advertising)',
]

const WHAT_WE_DONT_DO = [
  'We are not a licensed fence contractor, we do not install fences ourselves',
  'We do not accept payment from contractors to suppress negative reviews',
  'We do not pad our directory with companies we have not personally verified',
  'We do not sell your contact information to third-party data brokers',
]

export default function About() {
  useDocumentMeta({
    title: `About ${CITY.siteName} | Independent Local Directory`,
    description: `${CITY.siteName} is the independent ${CITY.name} fence directory. Vetted contractors, transparent pricing, and homeowner-first editorial guides for fence installation, repair, and permits across ${CITY.primaryCounty} and ${CITY.secondaryCounty} counties.`,
    canonical: '/about',
  })

  useStructuredData([
    organization(),
    breadcrumbList([{ label: 'About' }]),
    webPageSchema({
      slug: '/about',
      title: `About ${CITY.siteName}`,
      description: `How ${CITY.siteName} vets contractors, what we publish, and how we make money. Independent local fence directory for ${CITY.name} ${CITY.stateAbbr}.`,
    }),
  ])

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={`The Independent ${CITY.name} Fence Directory`}
        description={`${CITY.siteName} is built for homeowners who want one place to compare vetted local fence pros, real installed prices, and ${CITY.permitOffice.shortName} permit rules, without sifting through Yelp listings, contractor sales calls, or padded directory sites.`}
        crumbs={[{ label: 'About' }]}
        right={<CallbackForm />}
      />

      <section className="bg-white section-padding">
        <div className="container-wide max-w-4xl">
          <div className="mb-14">
            <span className="label-eyebrow">Our Mission</span>
            <h2 className="mt-3 heading-section">Make the {CITY.name} fence-buying decision honest</h2>
            <div className="heading-accent" />
            <div className="mt-6 space-y-4 text-[15.5px] text-onyx-700/80 leading-relaxed">
              <p>
                Most {CITY.name} homeowners get a fence quote once every 10–20 years, which
                means they walk into the process with no benchmark for what's normal, what
                a fair price is, what questions to ask, which contractors actually show up
                on time, which permits apply, and what their HOA or historic overlay will
                accept.
              </p>
              <p>
                We built {COMPANY.name} to be the resource we wished existed when we
                started our own fence projects. Vetted contractor profiles, real price
                ranges from {CITY.primaryCounty} and {CITY.secondaryCounty} County installs, plain-English guides
                to {CITY.permitOffice.shortName} permit rules, and an honest take on which materials hold up in
                {' '}{CITY.metroLabel} humidity.
              </p>
            </div>
          </div>

          <div className="mb-14">
            <span className="label-eyebrow">Our Values</span>
            <h2 className="mt-3 heading-section">What we stand for</h2>
            <div className="heading-accent" />
            <div className="grid sm:grid-cols-2 gap-5 mt-8">
              {VALUES.map((v) => {
                const Icon = v.icon
                return (
                  <div key={v.title} className="rounded-2xl bg-warmgray p-6">
                    <div className="w-11 h-11 rounded-lg bg-forest-500 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-oak-300" />
                    </div>
                    <h3 className="heading-label !text-base mb-1.5">{v.title}</h3>
                    <p className="text-sm text-onyx-700/70 leading-relaxed">{v.body}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-14">
            <div className="rounded-2xl border border-[#E2E8F0] p-6">
              <h3 className="heading-card !text-lg mb-3">How we make money</h3>
              <p className="text-sm text-onyx-700/70 mb-4 leading-relaxed">
                Transparency matters. Here's how the platform pays its bills.
              </p>
              <ul className="space-y-2.5">
                {HOW_WE_MAKE_MONEY.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-onyx-700/85"
                  >
                    <CheckCircle2 className="w-4 h-4 text-forest-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-[#E2E8F0] p-6">
              <h3 className="heading-card !text-lg mb-3">What we don't do</h3>
              <p className="text-sm text-onyx-700/70 mb-4 leading-relaxed">
                Some explicit commitments worth putting in writing.
              </p>
              <ul className="space-y-2.5">
                {WHAT_WE_DONT_DO.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-onyx-700/85"
                  >
                    <span className="text-red-600 mt-0.5">×</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-14">
            <span className="label-eyebrow">How We Vet</span>
            <h2 className="mt-3 heading-section">Our 7-step contractor screen</h2>
            <div className="heading-accent" />
            <p className="mt-4 text-[15.5px] text-onyx-700/80 leading-relaxed">
              Every contractor before being added to the directory must clear the same
              checklist we wrote for homeowners hiring on their own:
            </p>
            <ol className="mt-6 space-y-3 text-sm text-onyx-700/85">
              {[
                `${CITY.state} general liability + workers' comp insurance verified directly with the broker`,
                `${CITY.dig811.name} dig-safe protocol confirmed in writing`,
                'Post-depth specification of at least 24" set in concrete with gravel base',
                'Material and labor warranties documented separately, in writing',
                `HOA + ${CITY.historicCommission.abbr} experience confirmed where applicable`,
                'Payment schedule capped at 50% deposit, balance on completion',
                'Three recent local installs verified with addresses or photos',
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-forest-500 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
            <Link
              to="/resources/hire-nashville-fence-installer-questions"
              className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-forest-500 hover:text-forest-600"
            >
              Read the full vetting checklist <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="rounded-2xl bg-warmgray p-6 md:p-8">
            <h3 className="heading-card !text-xl mb-3">Get in touch</h3>
            <p className="text-sm text-onyx-700/70 mb-5 leading-relaxed">
              Questions about a contractor on our directory, a guide we've published, or
              listing your fence business? Reach the editorial team directly.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 text-sm">
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-2.5 text-onyx-700 hover:text-forest-500 transition-colors"
              >
                <span className="w-9 h-9 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center">
                  <Mail className="w-4 h-4 text-forest-500" />
                </span>
                {COMPANY.email}
              </a>
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="flex items-center gap-2.5 text-onyx-700 hover:text-forest-500 transition-colors"
              >
                <span className="w-9 h-9 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center">
                  <Phone className="w-4 h-4 text-forest-500" />
                </span>
                {COMPANY.phone}
              </a>
              <div className="flex items-center gap-2.5 text-onyx-700/70">
                <span className="w-9 h-9 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-forest-500" />
                </span>
                {COMPANY.address}
              </div>
            </div>
          </div>
        </div>
      </section>

      <LeadGenSection />
    </>
  )
}
