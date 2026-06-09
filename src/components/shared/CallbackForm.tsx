import { useState } from 'react'
import { Phone, CheckCircle2 } from 'lucide-react'
import { CITY } from '../../config/city'

export default function CallbackForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [zip, setZip] = useState('')
  const [hp, setHp] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

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
          data: { name, email, phone, zip },
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
      <div className="bg-white rounded-2xl shadow-strong p-7 text-center text-onyx-700">
        <div className="w-12 h-12 rounded-full bg-forest-500 mx-auto flex items-center justify-center mb-4">
          <CheckCircle2 className="w-6 h-6 text-white" />
        </div>
        <h3 className="font-heading font-bold text-xl mb-2">We'll call you back</h3>
        <p className="text-sm text-onyx-700/70 leading-relaxed">
          Expect a call within one business day from a vetted {CITY.name} fence pro to walk through your project.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white rounded-2xl shadow-strong p-6 md:p-7 text-onyx-700 space-y-4"
    >
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-50 text-forest-500 text-[11px] font-bold uppercase tracking-[0.18em] mb-3">
          <Phone className="w-3 h-3" /> Free Callback
        </div>
        <h3 className="font-heading font-bold text-xl tracking-tightest text-onyx-700">
          Request a Call Back
        </h3>
        <p className="text-xs text-onyx-700/60 mt-1">
          We'll call you within one business day, no obligation.
        </p>
      </div>

      <div>
        <label className="block text-[10px] font-bold uppercase tracking-[0.18em] text-onyx-500 mb-1.5">
          Full Name
        </label>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jane Homeowner"
          className="cf-input"
        />
      </div>

      <div>
        <label className="block text-[10px] font-bold uppercase tracking-[0.18em] text-onyx-500 mb-1.5">
          Email
        </label>
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="jane@email.com"
          className="cf-input"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-[0.18em] text-onyx-500 mb-1.5">
            Phone
          </label>
          <input
            required
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={`(${CITY.company.areaCode}) 555-0123`}
            className="cf-input"
          />
        </div>
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-[0.18em] text-onyx-500 mb-1.5">
            ZIP Code
          </label>
          <input
            required
            inputMode="numeric"
            pattern="\d{5}"
            maxLength={5}
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            placeholder={`e.g. ${CITY.primaryZip}`}
            className="cf-input"
          />
        </div>
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
        {submitting ? (
          'Sending…'
        ) : (
          <>
            <Phone className="w-4 h-4" /> Call Me
          </>
        )}
      </button>
      <p className="text-[10px] text-onyx-700/50 text-center leading-relaxed">
        We share your info only with up to 3 vetted {CITY.name} contractors. No spam.
      </p>

      <style>{`
        .cf-input {
          width: 100%;
          padding: 0.625rem 0.875rem;
          border-radius: 0.5rem;
          border: 1px solid #E2E8F0;
          background: #F8F9FA;
          font-size: 14px;
          color: #1A1D1E;
          outline: none;
          transition: all .15s ease;
          font-family: inherit;
        }
        .cf-input:focus {
          border-color: #1B4332;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(27,67,50,.08);
        }
      `}</style>
    </form>
  )
}
