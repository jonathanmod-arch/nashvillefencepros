import { useState, ChangeEvent } from 'react'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { FENCE_TYPES } from '../../data/siteData'
import { CITY } from '../../config/city'

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

const empty: FormState = {
  name: '',
  email: '',
  phone: '',
  zip: '',
  fenceType: '',
  feet: '',
  timeline: '',
  budget: '',
}

export default function HeroQuoteForm() {
  const [form, setForm] = useState<FormState>(empty)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [hp, setHp] = useState('')

  const handle = (k: keyof FormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((s) => ({ ...s, [k]: e.target.value }))

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (submitting) return
    setSubmitting(true)
    setError(null)
    try {
      const res = await fetch('/api/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'quote-request',
          data: { ...form },
          _hp: hp,
        }),
      })
      if (!res.ok) throw new Error('Submission failed')
      setSubmitted(true)
    } catch {
      setError('Sorry, something went wrong. Please try again or call us directly.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-strong p-7 md:p-9 text-onyx-700 text-center">
        <div className="w-14 h-14 rounded-full bg-forest-500 mx-auto flex items-center justify-center mb-4">
          <CheckCircle2 className="w-7 h-7 text-white" />
        </div>
        <h3 className="font-heading font-bold text-2xl mb-2 tracking-tightest">
          Request received
        </h3>
        <p className="text-sm text-onyx-700/70 leading-relaxed max-w-sm mx-auto">
          We're matching you with up to 3 vetted {CITY.name} fence pros. Expect calls and
          detailed quotes by email within 24–48 hours.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white rounded-2xl shadow-strong p-5 md:p-6 text-onyx-700 space-y-3.5"
    >
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-50 text-forest-500 text-[10px] font-bold uppercase tracking-[0.18em] mb-2.5">
          Free Quote · No Obligation
        </div>
        <h3 className="font-heading font-black text-xl md:text-2xl tracking-tightest text-onyx-700 leading-tight">
          Get Up to 3 {CITY.name} Quotes
        </h3>
        <p className="text-[12px] text-onyx-700/60 mt-1">
          One form, vetted local pros, replies within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        <Field label="Name" required>
          <input
            required
            value={form.name}
            onChange={handle('name')}
            placeholder="Jane Homeowner"
            className="hq-input"
          />
        </Field>
        <Field label="Email" required>
          <input
            required
            type="email"
            value={form.email}
            onChange={handle('email')}
            placeholder="jane@email.com"
            className="hq-input"
          />
        </Field>
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        <Field label="Phone" required>
          <input
            required
            type="tel"
            value={form.phone}
            onChange={handle('phone')}
            placeholder={`(${CITY.company.areaCode}) 555-0123`}
            className="hq-input"
          />
        </Field>
        <Field label="ZIP" required>
          <input
            required
            inputMode="numeric"
            pattern="\d{5}"
            maxLength={5}
            value={form.zip}
            onChange={handle('zip')}
            placeholder={CITY.primaryZip}
            className="hq-input"
          />
        </Field>
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        <Field label="Fence Type" required>
          <select
            required
            value={form.fenceType}
            onChange={handle('fenceType')}
            className="hq-input"
          >
            <option value="">Select</option>
            {FENCE_TYPES.map((t) => (
              <option key={t.slug} value={t.slug}>
                {t.short ?? t.name}
              </option>
            ))}
            <option value="undecided">Not sure yet</option>
          </select>
        </Field>
        <Field label="Linear Feet">
          <input
            type="number"
            value={form.feet}
            onChange={handle('feet')}
            placeholder="e.g. 180"
            className="hq-input"
          />
        </Field>
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        <Field label="Timeline">
          <select value={form.timeline} onChange={handle('timeline')} className="hq-input">
            <option value="">Select</option>
            {TIMELINES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Budget">
          <select value={form.budget} onChange={handle('budget')} className="hq-input">
            <option value="">Select</option>
            {BUDGETS.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <input
        type="text"
        name="_hp"
        tabIndex={-1}
        autoComplete="off"
        value={hp}
        onChange={(e) => setHp(e.target.value)}
        className="hidden"
        aria-hidden="true"
      />

      {error && (
        <div className="rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs px-3 py-2.5">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full inline-flex items-center justify-center gap-2 bg-forest-500 hover:bg-forest-600 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-semibold px-5 py-3 rounded-lg transition-colors"
      >
        {submitting ? 'Sending…' : (
          <>
            Match Me With Pros <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
      <p className="text-[10px] text-onyx-700/50 text-center leading-relaxed">
        Shared only with up to 3 vetted {CITY.name} contractors. No spam.
      </p>

      <style>{`
        .hq-input {
          width: 100%;
          padding: 0.55rem 0.75rem;
          border-radius: 0.5rem;
          border: 1px solid #E2E8F0;
          background: #F8F9FA;
          font-size: 13.5px;
          color: #1A1D1E;
          outline: none;
          transition: all .15s ease;
          font-family: inherit;
        }
        .hq-input:focus {
          border-color: #1B4332;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(27,67,50,.08);
        }
      `}</style>
    </form>
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
      <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-onyx-500 mb-1">
        {label}
        {required && <span className="text-oak-500 ml-0.5">*</span>}
      </span>
      {children}
    </label>
  )
}
