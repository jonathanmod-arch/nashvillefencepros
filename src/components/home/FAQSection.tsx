import { useState } from 'react'
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
            The 8 most-searched fence questions in Nashville, answered by local pros.
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
                  aria-expanded={isOpen}
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
                <div
                  className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-200 ease-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                  aria-hidden={!isOpen}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm md:text-base text-onyx-700/70 leading-relaxed pb-5 pr-12">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
