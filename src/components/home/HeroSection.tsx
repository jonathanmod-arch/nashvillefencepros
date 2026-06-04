import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check, ArrowRight, Calculator, Star } from 'lucide-react'

const trustPoints = [
  'Local vetted pros — licensed, insured, background-checked',
  'Detailed line-item quotes from up to 3 contractors',
  'Metro permit & HOA compliance built into every match',
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-warmgray">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-forest-50 opacity-50 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-oak-50 opacity-40 blur-3xl" />
      </div>

      <div className="container-wide relative pt-14 pb-12 md:pt-20 md:pb-16 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="label-eyebrow">Nashville · Davidson · Williamson · Sumner</span>
          <h1 className="mt-4 text-[40px] sm:text-[52px] lg:text-[64px] font-display font-bold tracking-tightest text-forest-500 leading-[0.98] text-balance">
            Nashville Fence<br />Installation Done Right
          </h1>
          <p className="mt-5 text-body-lead max-w-xl">
            Compare quotes from Nashville's top-rated fence contractors, calculate your install
            cost in real time, and navigate Metro permits — all in one place.
          </p>

          <ul className="mt-6 space-y-2.5">
            {trustPoints.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-[14px] md:text-[15px] text-onyx-700">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-forest-500 text-white flex items-center justify-center">
                  <Check className="w-3 h-3" strokeWidth={3} />
                </span>
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-col sm:flex-row gap-2.5">
            <Link to="/get-quotes" className="btn-primary">
              Get Free Quotes <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/cost-guide" className="btn-secondary">
              <Calculator className="w-4 h-4" /> Cost Calculator
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-5 text-[13px]">
            <div className="flex items-center gap-1.5">
              <div className="flex">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-oak-400 text-oak-400" />
                ))}
              </div>
              <span className="font-semibold text-onyx-700">4.9 / 5</span>
              <span className="text-onyx-400">(1,386 reviews)</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-strong aspect-[5/6]">
            <img
              src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1200&q=80"
              alt="Modern horizontal cedar fence installation in Nashville"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-forest-500/25 via-transparent to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute -bottom-4 -right-2 sm:-right-6 bg-white rounded-xl shadow-strong px-5 py-4 max-w-[200px]"
          >
            <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-oak-500">
              Avg. Install Cost
            </div>
            <div className="text-[34px] font-display font-bold text-forest-500 tracking-tightest leading-none mt-1">
              $6,000
            </div>
            <div className="text-[11px] text-onyx-400 mt-1.5 leading-snug">
              150–200 linear ft · standard residential
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
