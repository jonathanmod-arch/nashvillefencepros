import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check, ArrowRight, Calculator, ShieldCheck, Star } from 'lucide-react'

const trustPoints = [
  'Local vetted pros — licensed, insured, background-checked',
  'Detailed line-item quotes from up to 3 contractors',
  'Metro permit & HOA compliance built into every match',
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-warmgray">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-forest-50 opacity-50 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-oak-50 opacity-40 blur-3xl" />
      </div>

      <div className="container-wide relative section-padding grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="label-eyebrow">Nashville · Davidson · Williamson · Sumner</span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tightest text-forest-500 leading-[1.05] text-balance">
            Nashville Fence Installation, Done Right
          </h1>
          <p className="mt-5 text-body-lead max-w-xl">
            Compare quotes from Nashville's top-rated fence contractors, calculate your install
            cost in real time, and navigate Metro permits — all in one place.
          </p>

          <ul className="mt-7 space-y-3">
            {trustPoints.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm md:text-base text-onyx-700">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-forest-500 text-white flex items-center justify-center">
                  <Check className="w-3 h-3" strokeWidth={3} />
                </span>
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link to="/get-quotes" className="btn-primary">
              Get Free Quotes <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/cost-guide" className="btn-secondary">
              <Calculator className="w-4 h-4" /> Cost Calculator
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-6">
            <div className="flex items-center gap-1.5">
              <div className="flex">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-oak-400 text-oak-400" />
                ))}
              </div>
              <span className="text-sm font-semibold text-onyx-700">4.9 / 5</span>
              <span className="text-sm text-onyx-400">(1,386 reviews)</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-sm text-onyx-500">
              <ShieldCheck className="w-4 h-4 text-forest-500" />
              <span>100% Licensed & Insured Pros</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-strong aspect-[4/5]">
            <img
              src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1200&q=80"
              alt="Modern horizontal cedar fence installation in Nashville"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-forest-500/30 via-transparent to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute -bottom-6 -left-4 sm:-left-10 bg-white rounded-2xl shadow-strong p-5 max-w-[260px]"
          >
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-oak-500 mb-1">
              Average Local Install
            </div>
            <div className="text-3xl font-display font-bold text-forest-500 tracking-tightest">
              $3,300 – $7,200
            </div>
            <div className="text-xs text-onyx-400 mt-1">
              150–200 linear ft · standard residential
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="absolute -top-4 -right-2 sm:-right-6 bg-forest-500 text-white rounded-2xl shadow-strong p-4 hidden sm:block"
          >
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-oak-400 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-forest-500" />
              </div>
              <div>
                <div className="text-xs text-oak-200">Vetted Network</div>
                <div className="text-sm font-bold">42 Active Pros</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
