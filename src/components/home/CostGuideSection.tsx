import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, Info } from 'lucide-react'

const MATERIALS = [
  { id: 'wood', name: 'Wood Privacy', low: 22, high: 35, color: '#D4A373' },
  { id: 'vinyl', name: 'Premium Vinyl', low: 32, high: 48, color: '#76A88F' },
  { id: 'aluminum', name: 'Ornamental Aluminum', low: 38, high: 62, color: '#1B4332' },
  { id: 'chain', name: 'Chain Link', low: 12, high: 22, color: '#A87340' },
  { id: 'iron', name: 'Wrought Iron', low: 48, high: 78, color: '#0D261D' },
]

export default function CostGuideSection() {
  const [materialId, setMaterialId] = useState(MATERIALS[0].id)
  const [feet, setFeet] = useState(180)

  const material = useMemo(
    () => MATERIALS.find((m) => m.id === materialId)!,
    [materialId],
  )
  const lowTotal = material.low * feet
  const highTotal = material.high * feet
  const midTotal = Math.round((lowTotal + highTotal) / 2)

  return (
    <section className="bg-warmgray section-padding">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="label-eyebrow">Pricing Transparency</span>
          <h2 className="mt-3 heading-section">Nashville Fence Cost Guide</h2>
          <div className="heading-accent mx-auto" />
          <p className="mt-4 text-body-lead">
            Real Middle Tennessee install prices. Move the slider, pick a material, and see
            your range update live.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-medium overflow-hidden"
        >
          <div className="p-6 md:p-10">
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <Calculator className="w-5 h-5 text-forest-500" />
              <h3 className="heading-label text-lg md:text-xl">
                Interactive Cost Calculator
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-8">
              {MATERIALS.map((m) => {
                const active = m.id === materialId
                return (
                  <button
                    key={m.id}
                    onClick={() => setMaterialId(m.id)}
                    className={`px-3 py-3 rounded-xl border-2 text-left transition-all ${
                      active
                        ? 'border-forest-500 bg-forest-50 shadow-soft'
                        : 'border-warmgray bg-white hover:border-forest-100'
                    }`}
                  >
                    <div
                      className={`text-xs font-bold uppercase tracking-wider ${
                        active ? 'text-forest-500' : 'text-onyx-400'
                      }`}
                    >
                      {m.name}
                    </div>
                    <div className="text-xs text-onyx-400 mt-1">
                      ${m.low}–${m.high}/ft
                    </div>
                  </button>
                )
              })}
            </div>

            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-semibold text-onyx-700">
                  Linear Footage
                </label>
                <div className="text-2xl font-display font-bold text-forest-500 tracking-tightest">
                  {feet} ft
                </div>
              </div>
              <input
                type="range"
                min={50}
                max={500}
                step={5}
                value={feet}
                onChange={(e) => setFeet(Number(e.target.value))}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-forest-500 bg-warmgray"
              />
              <div className="flex justify-between text-xs text-onyx-400 mt-2">
                <span>50 ft</span>
                <span>275 ft</span>
                <span>500 ft</span>
              </div>
            </div>

            <div className="bg-forest-50 rounded-2xl p-6 md:p-8">
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.15em] text-oak-500 mb-1">
                    Low Estimate
                  </div>
                  <div className="text-3xl font-display font-bold text-forest-500 tracking-tightest">
                    ${lowTotal.toLocaleString()}
                  </div>
                  <div className="text-xs text-onyx-400 mt-1">
                    ${material.low}/linear ft
                  </div>
                </div>
                <div className="sm:border-x sm:border-forest-100 sm:px-6">
                  <div className="text-xs font-bold uppercase tracking-[0.15em] text-oak-500 mb-1">
                    Most Likely
                  </div>
                  <div className="text-3xl font-display font-bold text-forest-500 tracking-tightest">
                    ${midTotal.toLocaleString()}
                  </div>
                  <div className="text-xs text-onyx-400 mt-1">
                    Mid-range install
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.15em] text-oak-500 mb-1">
                    High Estimate
                  </div>
                  <div className="text-3xl font-display font-bold text-forest-500 tracking-tightest">
                    ${highTotal.toLocaleString()}
                  </div>
                  <div className="text-xs text-onyx-400 mt-1">
                    ${material.high}/linear ft
                  </div>
                </div>
              </div>

              <div className="mt-6 h-3 bg-white rounded-full overflow-hidden relative">
                <div
                  className="absolute inset-y-0 left-0 rounded-full transition-all duration-300"
                  style={{
                    width: '100%',
                    background: `linear-gradient(90deg, ${material.color}80 0%, ${material.color} 100%)`,
                  }}
                />
                <div
                  className="absolute inset-y-0 w-1 bg-white shadow-md rounded-full"
                  style={{ left: 'calc(50% - 2px)' }}
                />
              </div>

              <div className="mt-5 flex items-start gap-2 text-xs text-onyx-700/70">
                <Info className="w-4 h-4 text-forest-500 flex-shrink-0 mt-0.5" />
                <p>
                  Range covers materials + labor for a standard residential install in
                  Davidson, Williamson, and Sumner counties. Gates, demo, and difficult
                  terrain are billed separately.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            { label: 'Permit Fee', value: '$0–$75', note: 'when required' },
            { label: 'Avg. Gate Add-on', value: '$280–$650', note: 'per gate' },
            { label: 'Old Fence Removal', value: '$3–$8/ft', note: 'haul-off' },
            { label: 'Stain & Seal', value: '$2–$4/ft', note: 'optional' },
          ].map((c) => (
            <div key={c.label} className="bg-white rounded-2xl p-5 shadow-soft">
              <div className="text-xs font-bold uppercase tracking-[0.15em] text-oak-500">
                {c.label}
              </div>
              <div className="text-xl font-display font-bold text-forest-500 mt-1">
                {c.value}
              </div>
              <div className="text-xs text-onyx-400">{c.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
