import { useState, useRef, DragEvent, ChangeEvent } from 'react'
import { motion } from 'framer-motion'
import { Upload, CheckCircle2, X, ShieldCheck, Clock, Users } from 'lucide-react'
import { FENCE_TYPES } from '../../data/siteData'

type FormState = {
  name: string
  email: string
  phone: string
  zip: string
  fenceType: string
  feet: string
  timeline: string
  budget: string
}

const TIMELINES = ['ASAP (within 2 weeks)', '1–2 months', '3–6 months', 'Just exploring']
const BUDGETS = ['Under $3,000', '$3,000–$6,000', '$6,000–$10,000', '$10,000–$20,000', '$20,000+']

export default function LeadGenSection() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    zip: '',
    fenceType: '',
    feet: '',
    timeline: '',
    budget: '',
  })
  const [files, setFiles] = useState<File[]>([])
  const [dragOver, setDragOver] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handle = (k: keyof FormState) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((s) => ({ ...s, [k]: e.target.value }))

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragOver(false)
    const dropped = Array.from(e.dataTransfer.files)
    setFiles((prev) => [...prev, ...dropped].slice(0, 5))
  }

  const onFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    const picked = Array.from(e.target.files)
    setFiles((prev) => [...prev, ...picked].slice(0, 5))
  }

  const removeFile = (idx: number) =>
    setFiles((prev) => prev.filter((_, i) => i !== idx))

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="get-quotes" className="bg-onyx-700 section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-forest-500/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-oak-400/10 blur-3xl" />
      </div>

      <div className="container-wide relative">
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-oak-400">
              Free Quotes From Vetted Pros
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-heading font-black text-white tracking-tightest leading-[1.05]">
              Get Fence Quotes From Nashville Professionals
            </h2>
            <div className="heading-accent !bg-oak-400 mt-4" />
            <p className="mt-5 text-onyx-200 leading-relaxed">
              Share your project details once. We match you with up to 3 licensed Nashville
              contractors who'll respond with detailed quotes within 48 hours.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { icon: ShieldCheck, label: 'Licensed, insured, background-checked pros only' },
                { icon: Clock, label: 'Most homeowners hear back within 24 hours' },
                { icon: Users, label: 'Compare apples-to-apples line-item quotes' },
              ].map((b) => {
                const Icon = b.icon
                return (
                  <div key={b.label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-forest-500 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-oak-300" />
                    </div>
                    <p className="text-sm text-onyx-100 leading-relaxed pt-1.5">{b.label}</p>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-3xl font-heading font-bold text-oak-300 tracking-tightest">
                $1,200
              </div>
              <p className="text-xs text-onyx-200 mt-1">
                Average savings from comparing multiple Nashville quotes
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 bg-white rounded-3xl shadow-strong p-6 md:p-10"
          >
            {submitted ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-forest-500 mx-auto flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="heading-card !text-2xl md:!text-3xl mb-3">
                  Request Received — Welcome
                </h3>
                <p className="text-onyx-700/70 max-w-md mx-auto leading-relaxed">
                  We're matching you with up to 3 vetted Nashville fence pros. Expect calls
                  and detailed quotes via email within the next 24–48 hours.
                </p>
                <div className="mt-8 grid grid-cols-3 gap-3 max-w-md mx-auto text-left">
                  {['Match', 'Compare', 'Build'].map((step, i) => (
                    <div key={step} className="bg-warmgray rounded-xl p-3">
                      <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-oak-500">
                        Step {i + 1}
                      </div>
                      <div className="text-sm font-heading font-bold text-forest-500">
                        {step}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Full Name" required>
                    <input
                      required
                      value={form.name}
                      onChange={handle('name')}
                      className="input-base"
                      placeholder="Jane Homeowner"
                    />
                  </Field>
                  <Field label="Email" required>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={handle('email')}
                      className="input-base"
                      placeholder="jane@email.com"
                    />
                  </Field>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Phone" required>
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={handle('phone')}
                      className="input-base"
                      placeholder="(615) 555-0123"
                    />
                  </Field>
                  <Field label="Your ZIP Code" required>
                    <input
                      required
                      inputMode="numeric"
                      pattern="\d{5}"
                      maxLength={5}
                      value={form.zip}
                      onChange={handle('zip')}
                      className="input-base"
                      placeholder="e.g. 37205"
                    />
                  </Field>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Fence Type" required>
                    <select
                      required
                      value={form.fenceType}
                      onChange={handle('fenceType')}
                      className="input-base"
                    >
                      <option value="">Select a material</option>
                      {FENCE_TYPES.map((t) => (
                        <option key={t.slug} value={t.slug}>
                          {t.name}
                        </option>
                      ))}
                      <option value="undecided">I need help deciding</option>
                    </select>
                  </Field>
                  <Field label="Estimated Linear Footage">
                    <input
                      type="number"
                      value={form.feet}
                      onChange={handle('feet')}
                      className="input-base"
                      placeholder="e.g. 180"
                    />
                  </Field>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Project Timeline">
                    <select
                      value={form.timeline}
                      onChange={handle('timeline')}
                      className="input-base"
                    >
                      <option value="">Select timeline</option>
                      {TIMELINES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Budget Range">
                    <select
                      value={form.budget}
                      onChange={handle('budget')}
                      className="input-base"
                    >
                      <option value="">Select budget</option>
                      {BUDGETS.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-[0.15em] text-onyx-500 mb-2">
                    Site Photos (Optional)
                  </label>
                  <div
                    onDragOver={(e) => {
                      e.preventDefault()
                      setDragOver(true)
                    }}
                    onDragLeave={() => setDragOver(false)}
                    onDrop={onDrop}
                    onClick={() => inputRef.current?.click()}
                    className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-colors ${
                      dragOver
                        ? 'border-forest-500 bg-forest-50'
                        : 'border-warmgray hover:border-forest-200 hover:bg-warmgray/50'
                    }`}
                  >
                    <Upload className="w-7 h-7 mx-auto text-forest-500 mb-2" />
                    <p className="text-sm font-semibold text-onyx-700">
                      Drop photos or click to upload
                    </p>
                    <p className="text-xs text-onyx-400 mt-1">
                      JPG, PNG up to 10MB each · 5 photos max
                    </p>
                    <input
                      ref={inputRef}
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={onFileSelect}
                      className="hidden"
                    />
                  </div>
                  {files.length > 0 && (
                    <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {files.map((f, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between gap-2 px-3 py-2 bg-warmgray rounded-lg text-xs"
                        >
                          <span className="truncate text-onyx-700 font-medium">
                            {f.name}
                          </span>
                          <button
                            type="button"
                            onClick={() => removeFile(i)}
                            className="text-onyx-400 hover:text-forest-500"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <button type="submit" className="btn-primary w-full !py-4 !text-base">
                  Match Me With Local Pros
                </button>
                <p className="text-xs text-onyx-400 text-center">
                  We share your info only with up to 3 vetted Nashville contractors. No spam.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        .input-base {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          border: 1px solid #E5E7EB;
          background: #F8F9FA;
          font-size: 0.9rem;
          color: #1A1D1E;
          outline: none;
          transition: all .15s ease;
        }
        .input-base:focus {
          border-color: #1B4332;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(27,67,50,.08);
        }
      `}</style>
    </section>
  )
}

function Field({
  label,
  required,
  children,
}: {
  label: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold uppercase tracking-[0.15em] text-onyx-500 mb-1.5">
        {label}
        {required && <span className="text-oak-500 ml-1">*</span>}
      </span>
      {children}
    </label>
  )
}
