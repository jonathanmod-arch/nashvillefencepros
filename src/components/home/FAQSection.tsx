import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { FAQS } from '../../data/siteData'

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-white section-padding">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="label-eyebrow">Your Questions, Answered</span>
          <h2 className="mt-3 heading-section">Frequently Asked Questions</h2>
          <div className="heading-accent mx-auto" />
          <p className="mt-4 text-body-lead">
            The 8 most-searched fence questions in Nashville — answered by local pros.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {FAQS.map((f, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                className="border-b border-warmgray last:border-b-0"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-4 py-5 text-left group"
                >
                  <span className="heading-label !text-base md:!text-lg pr-2">
                    {f.q}
                  </span>
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-forest-50 flex items-center justify-center group-hover:bg-forest-500 transition-colors">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-forest-500 group-hover:text-white" />
                    ) : (
                      <Plus className="w-4 h-4 text-forest-500 group-hover:text-white" />
                    )}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm md:text-base text-onyx-700/70 leading-relaxed pb-5 pr-12">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
