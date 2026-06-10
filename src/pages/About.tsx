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
import SponsorStrip from '../components/shared/SponsorStrip'
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

const HOW_COMPANIES_LISTED = [
  'Customer reviews and reputation',
  'Years in business',
  'Project portfolio quality',
  'Responsiveness to inquiries',
  'Local experience',
  'Service area coverage',
  'Overall reputation within the community',
]

const ADVERTISING_POLICY = [
  'Advertising, sponsored placements, and featured directory profiles support the site',
  'Referral partnerships and lead generation programs with vetted providers',
  'Sponsored placements are disclosed when appropriate',
  'Rankings and editorial content stay independent of advertising relationships',
]

const LEAD_GEN_POLICY = [
  `Quote requests may be shared with one or more providers serving the requested ${CITY.name} area`,
  'Providers may contact you about your project',
  'No obligation to hire any company we recommend',
  'We do not sell your contact information to third-party data brokers',
  'Do your own due diligence before selecting a contractor',
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
      <SponsorStrip />

      <section className="bg-white section-padding">
        <div className="container-wide max-w-4xl">
          <div className="mb-14">
            <span className="label-eyebrow">Our Mission</span>
            <h2 className="mt-3 heading-section">Make {CITY.name} fence decisions easier</h2>
            <div className="heading-accent" />
            <div className="mt-6 space-y-4 text-[15.5px] text-onyx-700/80 leading-relaxed">
              <p>
                {CITY.siteName} is a local resource built for homeowners, property managers,
                and commercial property owners making decisions about fence installation in{' '}
                {CITY.name} and the surrounding {CITY.metroLabel}. The goal is practical,
                locally-grounded information that helps you understand your options before
                starting a project — comparing materials, working through local regulations,
                planning a privacy fence, securing a commercial property, or finding a
                contractor.
              </p>
              <p>
                We publish local guides on installation costs, permits, property line
                considerations, contractor research, project inspiration, maintenance, and
                other topics relevant to {CITY.name} property owners. Coverage spans the{' '}
                {CITY.primaryCounty} and {CITY.secondaryCounty} County market and the
                surrounding {CITY.metroLabel} suburbs.
              </p>
              <p>
                {CITY.siteName} is part of a broader network of local fence installation
                resources and industry publications focused on helping property owners
                and commercial business owners better understand their options.
              </p>
              <p>
                Our mission is straightforward: publish the most useful fence installation
                information in {CITY.name} while helping homeowners and commercial business
                owners understand their options, compare providers, and make better
                decisions before investing in a project.
              </p>
            </div>
          </div>

          <div className="mb-14 rounded-2xl bg-warmgray border-l-4 border-forest-500 p-6 md:p-7">
            <h3 className="heading-card !text-lg mb-2">Who publishes this site</h3>
            <p className="text-sm text-onyx-700/80 leading-relaxed">
              {CITY.siteName} is independently published as an informational resource for
              the {CITY.name} market.
            </p>
            <p className="text-sm font-bold text-forest-500 leading-relaxed my-3">
              We are not a fence installation company.
            </p>
            <p className="text-sm text-onyx-700/80 leading-relaxed">
              Our role is to research local providers, publish educational content, maintain
              local directories, and help connect property owners with companies that may
              be a good fit for their projects.
            </p>
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
              <h3 className="heading-card !text-lg mb-3">Advertising Policy</h3>
              <p className="text-sm text-onyx-700/70 mb-4 leading-relaxed">
                Where revenue comes from and how it's labeled.
              </p>
              <ul className="space-y-2.5">
                {ADVERTISING_POLICY.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-onyx-700/85"
                  >
                    <CheckCircle2 className="w-4 h-4 text-forest-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-onyx-700/60 leading-relaxed">
                Advertising helps support the ongoing operation of the site and keeps the
                resources free for {CITY.name} property owners.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E2E8F0] p-6">
              <h3 className="heading-card !text-lg mb-3">Lead Generation Policy</h3>
              <p className="text-sm text-onyx-700/70 mb-4 leading-relaxed">
                What happens when you submit a quote request through the site.
              </p>
              <ul className="space-y-2.5">
                {LEAD_GEN_POLICY.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-onyx-700/85"
                  >
                    <CheckCircle2 className="w-4 h-4 text-forest-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-onyx-700/60 leading-relaxed">
                Our goal is to connect property owners with companies that may be a good
                fit for the project at hand.
              </p>
            </div>
          </div>

          <div className="mb-14">
            <span className="label-eyebrow">How Companies Are Listed</span>
            <h2 className="mt-3 heading-section">How we evaluate {CITY.name} fence pros</h2>
            <div className="heading-accent" />
            <p className="mt-4 text-[15.5px] text-onyx-700/80 leading-relaxed">
              We maintain company profiles and local directories to help visitors find fence
              installation companies serving the {CITY.name} area. Businesses get included
              through public research, direct submissions, customer recommendations, or
              editorial review. When we evaluate and rank providers, we look at:
            </p>
            <ol className="mt-6 space-y-3 text-sm text-onyx-700/85">
              {HOW_COMPANIES_LISTED.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-forest-500 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
            <p className="mt-5 text-sm text-onyx-700/70 leading-relaxed">
              Some companies participate in advertising or promotional programs. Rankings
              and editorial content are based on our evaluation criteria and not
              automatically influenced by advertising relationships. The full homeowner-
              facing vetting checklist below is the same standard we apply to every listing.
            </p>
            <Link
              to="/resources/hire-nashville-fence-installer-questions"
              className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-forest-500 hover:text-forest-600"
            >
              Read the full vetting checklist <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="rounded-2xl bg-warmgray p-6 md:p-8">
            <h3 className="heading-card !text-xl mb-2">Contact Information</h3>
            <p className="text-sm text-onyx-700/70 mb-5 leading-relaxed">
              Questions, corrections, company submissions, advertising inquiries, and
              partnership opportunities are always welcome.
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
