import { Link } from 'react-router-dom'
import { ArrowRight, Calculator, Sparkles } from 'lucide-react'
import CallbackForm from '../shared/CallbackForm'
import { CITY } from '../../config/city'
import { RESOURCES, RESOURCE_PUBLISHED_AT } from '../../data/siteData'
import { monthYearString } from '../../lib/resourceTitle'

const bullets = [
  'Wood, vinyl, aluminum, chain link and custom fencing',
  'Residential and commercial projects',
  `${CITY.name} permit and HOA guidance`,
  'Fast local fence estimates',
]

// Latest article promoted in the hero pill — the last item in RESOURCES is
// the most recently added (single global RESOURCE_PUBLISHED_AT date for all
// articles in v1).
const latestArticle = RESOURCES[RESOURCES.length - 1]
const latestArticleDate = monthYearString(new Date(RESOURCE_PUBLISHED_AT))

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-forest-50/40 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-oak-50/40 blur-3xl" />
      </div>

      <div className="container-wide relative pt-10 pb-14 md:pt-14 md:pb-20 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
        <div className="reveal-up">
          <Link
            to={`/resources/${latestArticle.slug}`}
            className="inline-flex items-center gap-2 max-w-full px-4 py-2 rounded-full bg-forest-50 text-forest-500 text-[13px] font-semibold hover:bg-forest-100 transition-colors group"
          >
            <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="truncate">
              <span className="text-[10px] uppercase tracking-[0.18em] mr-2 opacity-70">
                Just published · {latestArticleDate}
              </span>
              {latestArticle.title}
            </span>
            <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 transition-transform group-hover:translate-x-0.5" />
          </Link>

          <h1 className="mt-7 text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tightest leading-none">
            <span className="text-onyx-700">Fence Installation</span>
            <br />
            <span className="text-forest-500">in {CITY.name} {CITY.stateAbbr}</span>
            <br />
            <span className="text-onyx-700">Done Right</span>
          </h1>

          <div className="mt-6 h-[3px] w-16 bg-oak-400 rounded-full" />

          <p className="mt-6 font-body font-normal text-lg text-onyx-700/70 leading-relaxed max-w-xl">
            Compare fence options, understand local regulations, estimate costs, and connect
            with trusted {CITY.name} fence professionals.
          </p>

          <ul className="mt-7 space-y-3.5">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-[15px] md:text-[16px] text-onyx-700">
                <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-oak-400" />
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link to="/get-quotes#quote-form" className="btn-primary">
              Get Fence Quotes <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/cost-guide" className="btn-secondary">
              <Calculator className="w-4 h-4" /> Fence Cost Calculator
            </Link>
          </div>
        </div>

        <div className="reveal-up" style={{ animationDelay: '0.1s' }}>
          <CallbackForm />
        </div>
      </div>
    </section>
  )
}
