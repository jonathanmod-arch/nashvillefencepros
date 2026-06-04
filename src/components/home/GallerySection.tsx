import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GALLERY } from '../../data/siteData'
import SafeImage from '../shared/SafeImage'

const FILTERS = ['All', 'Wood Privacy', 'Vinyl', 'Aluminum', 'Gates']

export default function GallerySection() {
  const [filter, setFilter] = useState('All')
  const items = filter === 'All' ? GALLERY : GALLERY.filter((g) => g.category === filter)

  return (
    <section className="bg-warmgray section-padding">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="label-eyebrow">Project Gallery</span>
          <h2 className="mt-3 heading-section">Fence Style Gallery</h2>
          <p className="mt-4 text-body-lead">
            Real installs from Davidson, Williamson, and Sumner counties — filter by style.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {FILTERS.map((f) => {
            const active = filter === f
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  active
                    ? 'bg-forest-500 text-white shadow-soft'
                    : 'bg-white text-onyx-700 hover:bg-forest-50'
                }`}
              >
                {f}
              </button>
            )
          })}
        </div>

        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          <AnimatePresence mode="popLayout">
            {items.map((item, i) => {
              const tall = i % 5 === 0 || i % 5 === 3
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className={`relative rounded-2xl overflow-hidden group ${
                    tall ? 'row-span-2 aspect-[3/5]' : 'aspect-square'
                  }`}
                >
                  <SafeImage
                    src={item.img}
                    alt={`${item.category} fence project`}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-onyx-700/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-3 left-3 right-3 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                    <div className="text-xs font-bold uppercase tracking-[0.18em] text-oak-300">
                      {item.category}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
