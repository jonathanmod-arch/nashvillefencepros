import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { AlertTriangle, Ruler, Phone, ScrollText, ArrowRight } from 'lucide-react'

const RULES = [
  {
    icon: Ruler,
    title: 'Rear & Side Yards',
    detail: 'Up to 8 ft tall — no permit required for standard residential fencing under that height.',
  },
  {
    icon: Ruler,
    title: 'Front Yards',
    detail: 'Limited to 3.5 ft for solid privacy fences and 4 ft for open-style (picket, aluminum, ornamental).',
  },
  {
    icon: ScrollText,
    title: 'Historic Overlays',
    detail: 'Germantown, Edgefield, and parts of East Nashville require Historic Zoning Commission review.',
  },
  {
    icon: AlertTriangle,
    title: 'Corner Lots',
    detail: 'Sight-distance triangles apply at intersections — clear-view zones are typically 30 ft.',
  },
]

export default function PermitsSection() {
  return (
    <section className="bg-white section-padding">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <span className="label-eyebrow">Metro Compliance</span>
            <h2 className="mt-3 heading-section">Nashville Fence Permits & Rules</h2>
            <p className="mt-4 text-body-lead">
              Metro Nashville keeps fence rules relatively homeowner-friendly — but the wrong
              height or a missed historic overlay can mean removal at your expense. Here's the
              straightforward breakdown.
            </p>

            <div className="mt-7 space-y-4">
              {RULES.map((r) => {
                const Icon = r.icon
                return (
                  <div key={r.title} className="flex items-start gap-4 p-4 rounded-xl bg-warmgray">
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-forest-500" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-forest-500 mb-0.5">
                        {r.title}
                      </div>
                      <div className="text-sm text-onyx-500 leading-relaxed">{r.detail}</div>
                    </div>
                  </div>
                )
              })}
            </div>

            <Link to="/permits" className="btn-primary mt-7">
              Full Permit Guide <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:sticky lg:top-32"
          >
            <div className="bg-forest-500 text-white rounded-3xl p-8 shadow-strong relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-oak-400/20 blur-3xl" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-oak-400 text-forest-500 text-xs font-bold uppercase tracking-[0.15em] mb-5">
                  <AlertTriangle className="w-3.5 h-3.5" /> Call Before You Dig
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold tracking-tightest mb-3">
                  Always Call Tennessee 811
                </h3>
                <p className="text-white/80 leading-relaxed mb-5 text-sm">
                  Tennessee state law requires a minimum 3 business-day notice before digging
                  post holes. Tennessee 811 marks public utilities for free — hitting a gas or
                  fiber line can mean thousands in damages and fines.
                </p>
                <a
                  href="tel:811"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white text-forest-500 font-bold text-sm hover:bg-oak-100 transition-colors"
                >
                  <Phone className="w-4 h-4" /> Dial 811 — Free Service
                </a>
              </div>
            </div>

            <div className="bg-oak-50 border border-oak-100 rounded-2xl p-6 mt-5">
              <div className="text-xs font-bold uppercase tracking-[0.15em] text-oak-700 mb-2">
                HOA Reminder
              </div>
              <p className="text-sm text-onyx-700 leading-relaxed">
                Williamson County HOAs (Brentwood, Franklin, Nolensville) typically require
                Architectural Review approval before installation — submit material samples
                and a site plan first.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
