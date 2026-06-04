import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Calculator, Star } from 'lucide-react'
import SafeImage from '../shared/SafeImage'
import { IMAGES } from '../../data/imageUrls'

const bullets = [
  'Wood, vinyl, aluminum, chain link and custom fencing',
  'Residential and commercial projects',
  'Nashville permit and HOA guidance',
  'Fast local fence estimates',
]

const heroUrl = (w: number) => IMAGES.hero.replace(/([?&])w=\d+/, `$1w=${w}`)

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white min-h-screen">
      <div className="absolute inset-0">
        <SafeImage
          src={heroUrl(1800)}
          alt=""
          className="w-full h-full object-cover opacity-20"
          raw
        />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-forest-50/40 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-oak-50/40 blur-3xl" />
      </div>

      <div className="container-wide relative pt-10 pb-14 md:pt-14 md:pb-20 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest-50 text-forest-500 text-[13px] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-forest-500" />
            Nashville's Most Trusted Fence Resource
          </span>

          <h1 className="mt-7 text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tightest leading-none">
            <span className="text-onyx-700">Nashville Fence</span>
            <br />
            <span className="text-forest-500">Installation</span>
            <br />
            <span className="text-onyx-700">Done Right</span>
          </h1>

          <div className="mt-6 h-[3px] w-16 bg-oak-400 rounded-full" />

          <p className="mt-6 font-body font-normal text-lg text-onyx-700/70 leading-relaxed max-w-xl">
            Compare fence options, understand local regulations, estimate costs, and connect
            with trusted Nashville fence professionals.
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
            <Link to="/get-quotes" className="btn-primary">
              Get Fence Quotes <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/cost-guide" className="btn-secondary">
              <Calculator className="w-4 h-4" /> Fence Cost Calculator
            </Link>
          </div>

          <div className="mt-7 flex items-center gap-2.5 text-[13.5px]">
            <div className="flex">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="w-4 h-4 fill-oak-400 text-oak-400" />
              ))}
            </div>
            <span className="font-semibold text-onyx-700">4.9/5</span>
            <span className="text-onyx-400">from 380+ Nashville homeowners</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="hidden lg:block relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-strong w-full h-[550px] bg-warmgray">
            <SafeImage
              src={heroUrl(900)}
              alt="Cedar privacy fence installation in a Nashville backyard"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-forest-500/15 via-transparent to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute -bottom-5 left-4 sm:left-8 bg-white rounded-2xl shadow-strong px-6 py-5 max-w-[260px]"
          >
            <div className="text-[11px] font-semibold text-onyx-400 mb-1">
              Average Project Cost
            </div>
            <div className="text-[38px] font-heading font-black text-forest-500 tracking-tightest leading-none">
              $4,800
            </div>
            <div className="text-[12px] text-onyx-500 mt-1.5">
              for 150 linear ft in Nashville
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
