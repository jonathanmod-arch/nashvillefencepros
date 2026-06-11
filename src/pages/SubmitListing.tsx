import { useRef, useState, ChangeEvent, DragEvent } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Mail,
  Phone,
  Upload,
  X,
} from 'lucide-react'
import PageHero from '../components/shared/PageHero'
import { COMPANY } from '../data/siteData'
import { AREAS, SERVICE_CATEGORIES } from '../data/contractors'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { useStructuredData } from '../hooks/useStructuredData'
import {
  organization,
  breadcrumbList,
  webPageSchema,
  registerListingAction,
} from '../lib/schema'
import { CITY } from '../config/city'

const SUGGESTED_LICENSES = [
  'Licensed & Insured',
  'RLS Certified',
  'Gate/Access Lic.',
  'Electrical Lic.',
  'Licensed Designer',
]

const RESPONSE_TIMES = [
  'Within 4 hrs',
  'Within 24 hrs',
  'Within 48 hrs',
  '2–3 business days',
]

const CITY_OPTIONS = AREAS.filter((a) => a !== 'All Areas')

type Pricing = { label: string; sub: string; price: string }

const OWNERSHIP_OPTIONS = ['Local', 'Regional', 'National', 'Franchise'] as const
type OwnershipType = typeof OWNERSHIP_OPTIONS[number]

type FormState = {
  businessName: string
  category: string
  projectType: 'residential' | 'commercial' | 'both' | ''
  tagline: string
  about: string
  founded: string
  ownership: '' | OwnershipType
  phone: string
  email: string
  website: string
  address: string
  googleMapsUrl: string
  countiesServed: string
  cities: string[]
  otherCity: string
  yearsInBusiness: string
  employees: string
  projectsCompleted: string
  license: string
  detailedLicenses: string
  memberships: string
  certifications: string
  awards: string
  manufacturerPartnerships: string
  specialties: string
  responseTime: string
  pricing: Pricing[]
  ownerName: string
  ownerRole: string
  ownerEmail: string
  managerSameAsOwner: boolean
  managerName: string
  managerRole: string
  managerLinkedinUrl: string
  // Online presence URLs — surfaced on the listing's OnlinePresenceCard.
  facebookUrl: string
  bbbUrl: string
  yelpUrl: string
  linkedinBusinessUrl: string
  houzzUrl: string
  angiUrl: string
  chamberUrl: string
  authorized: boolean
  agreedToTerms: boolean
}

const EMPTY_PRICING: Pricing = { label: '', sub: '', price: '' }

const initialForm: FormState = {
  businessName: '',
  category: '',
  projectType: '',
  tagline: '',
  about: '',
  founded: '',
  ownership: '',
  phone: '',
  email: '',
  website: '',
  address: '',
  googleMapsUrl: '',
  countiesServed: '',
  cities: [],
  otherCity: '',
  yearsInBusiness: '',
  employees: '',
  projectsCompleted: '',
  license: '',
  detailedLicenses: '',
  memberships: '',
  certifications: '',
  awards: '',
  manufacturerPartnerships: '',
  specialties: '',
  responseTime: '',
  pricing: [EMPTY_PRICING, EMPTY_PRICING, EMPTY_PRICING, EMPTY_PRICING],
  ownerName: '',
  ownerRole: '',
  ownerEmail: '',
  managerSameAsOwner: true,
  managerName: '',
  managerRole: '',
  managerLinkedinUrl: '',
  facebookUrl: '',
  bbbUrl: '',
  yelpUrl: '',
  linkedinBusinessUrl: '',
  houzzUrl: '',
  angiUrl: '',
  chamberUrl: '',
  authorized: false,
  agreedToTerms: false,
}

export default function SubmitListing() {
  useDocumentMeta({
    title: `Submit Your ${CITY.name} Fence Business | Free Listing`,
    description: `Get listed on the ${CITY.siteName} directory for free. Submit your fence installation, repair, gate, surveying, or staining business in under 5 minutes and start receiving ${CITY.name} fence leads.`,
    canonical: '/submit-listing',
  })

  useStructuredData([
    organization(),
    breadcrumbList([
      { label: 'Find a Pro', to: '/contractors' },
      { label: 'Submit Your Business' },
    ]),
    webPageSchema({
      slug: '/submit-listing',
      title: `Submit Your ${CITY.name} Fence Business`,
      description: `Free listing submission for ${CITY.name} fence installation, repair, gate, surveying, staining, and outdoor design pros.`,
      potentialAction: registerListingAction(),
    }),
  ])
  const [form, setForm] = useState<FormState>(initialForm)
  const [files, setFiles] = useState<File[]>([])
  // Manager headshot is a single image kept separate from the project-photo
  // gallery so submitters can drop a portrait without it ending up in the
  // public reference-photo set.
  const [managerHeadshot, setManagerHeadshot] = useState<File | null>(null)
  const [dragOver, setDragOver] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [hp, setHp] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const headshotInputRef = useRef<HTMLInputElement>(null)

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((s) => ({ ...s, [key]: value }))

  const toggleCity = (city: string) =>
    setForm((s) => ({
      ...s,
      cities: s.cities.includes(city)
        ? s.cities.filter((c) => c !== city)
        : [...s.cities, city],
    }))

  const updatePricing = (idx: number, key: keyof Pricing, value: string) =>
    setForm((s) => ({
      ...s,
      pricing: s.pricing.map((p, i) => (i === idx ? { ...p, [key]: value } : p)),
    }))

  const addFiles = (incoming: FileList | File[]) => {
    const next = Array.from(incoming).filter((f) => f.type.startsWith('image/'))
    setFiles((prev) => [...prev, ...next].slice(0, 5))
  }

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragOver(false)
    addFiles(e.dataTransfer.files)
  }

  const onFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    addFiles(e.target.files)
  }

  const removeFile = (idx: number) =>
    setFiles((prev) => prev.filter((_, i) => i !== idx))

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (submitting) return
    setSubmitting(true)
    setError(null)
    try {
      // Resolve the manager fields the editor will land in the Contractor
      // entry. When "use my info as the listing manager" is checked, copy
      // from the owner block so the editor doesn't have to dedupe.
      const resolvedManager = form.managerSameAsOwner
        ? { name: form.ownerName, role: form.ownerRole }
        : { name: form.managerName, role: form.managerRole }
      const res = await fetch('/api/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'submit-listing',
          data: {
            ...form,
            resolvedManager,
            fileNames: files.map((f) => f.name),
            managerHeadshotName: managerHeadshot?.name ?? null,
          },
          _hp: hp,
        }),
      })
      if (!res.ok) throw new Error('Submission failed')
      setSubmitted(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch {
      setError('Sorry, something went wrong. Please try again or email us directly.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <>
        <PageHero
          eyebrow="Submission Received"
          title="Thanks, we'll be in touch"
          description="Your listing is in review. We typically respond within two business days."
          crumbs={[
            { label: 'Find a Pro', to: '/contractors' },
            { label: 'Submit Your Business' },
          ]}
        />
        <section className="bg-warmgray section-padding">
          <div className="container-wide max-w-2xl">
            <div className="bg-white rounded-2xl border border-[#E2E8F0] p-8 md:p-10 text-center">
              <div className="w-14 h-14 rounded-full bg-forest-500 mx-auto flex items-center justify-center mb-5">
                <CheckCircle2 className="w-7 h-7 text-white" />
              </div>
              <h2 className="heading-card !text-2xl mb-3">What happens next</h2>
              <ol className="text-left max-w-md mx-auto space-y-3 text-sm text-onyx-700/80">
                {[
                  `A ${CITY.siteName} editor verifies your license and business details.`,
                  'We confirm the photos and pricing match the work shown.',
                  'You receive an email when your free listing goes live, usually within 2 business days.',
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-forest-50 text-forest-500 text-xs font-bold flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/contractors" className="btn-secondary">
                  Browse Directory
                </Link>
                <Link to="/" className="btn-primary">
                  Back Home <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <PageHero
        eyebrow="List Your Business, Free"
        title="Submit Your Business"
        description={`Join the ${CITY.siteName} directory in under 5 minutes. Free for verified ${CITY.state} fence contractors, surveyors, gate installers, and outdoor design pros.`}
        crumbs={[
          { label: 'Find a Pro', to: '/contractors' },
          { label: 'Submit Your Business' },
        ]}
      />

      <section className="bg-warmgray section-padding">
        <div className="container-wide grid lg:grid-cols-[1fr_320px] gap-8 items-start">
          <form
            onSubmit={onSubmit}
            className="bg-white rounded-2xl border border-[#E2E8F0] p-6 md:p-10 space-y-10"
          >
            <FormSection
              eyebrow="01"
              title="About your business"
              hint="The basics that appear at the top of your listing card."
            >
              <Field label="Business name" required>
                <input
                  required
                  value={form.businessName}
                  onChange={(e) => set('businessName', e.target.value)}
                  placeholder="e.g. Music City Fence Co."
                  className="ad-input"
                />
              </Field>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Service category" required>
                  <select
                    required
                    value={form.category}
                    onChange={(e) => set('category', e.target.value)}
                    className="ad-input"
                  >
                    <option value="">Choose a category</option>
                    {SERVICE_CATEGORIES.filter((c) => c.id !== 'all').map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Customer type" required>
                  <div className="grid grid-cols-3 gap-1.5 mt-1">
                    {(['residential', 'commercial', 'both'] as const).map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => set('projectType', t)}
                        className={`h-11 rounded-lg text-sm font-semibold capitalize border transition-colors ${
                          form.projectType === t
                            ? 'bg-forest-500 text-white border-forest-500'
                            : 'bg-white text-onyx-700/70 border-[#E2E8F0] hover:text-onyx-700'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </Field>
              </div>

              <Field label="One-line tagline" required hint="Shown on directory cards.">
                <input
                  required
                  maxLength={140}
                  value={form.tagline}
                  onChange={(e) => set('tagline', e.target.value)}
                  placeholder={`e.g. ${CITY.name}'s largest residential cedar privacy installer.`}
                  className="ad-input"
                />
              </Field>

              <Field label="About your business" required hint="Appears in the About card on your listing page.">
                <textarea
                  required
                  rows={5}
                  value={form.about}
                  onChange={(e) => set('about', e.target.value)}
                  placeholder="What makes you different? Who do you serve? What's your install process?"
                  className="ad-input resize-y"
                />
              </Field>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Year founded" required hint="Shown in the Business Information card.">
                  <input
                    required
                    type="number"
                    min={1900}
                    max={new Date().getFullYear()}
                    value={form.founded}
                    onChange={(e) => set('founded', e.target.value)}
                    placeholder="2008"
                    className="ad-input"
                  />
                </Field>
                <Field label="Ownership type" required>
                  <select
                    required
                    value={form.ownership}
                    onChange={(e) => set('ownership', e.target.value as FormState['ownership'])}
                    className="ad-input"
                  >
                    <option value="">Choose ownership type</option>
                    {OWNERSHIP_OPTIONS.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>
            </FormSection>

            <FormSection
              eyebrow="02"
              title="How customers reach you"
              hint="At least phone + email are required to receive lead emails."
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Business phone" required>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => set('phone', e.target.value)}
                    placeholder="(615) 555-0101"
                    className="ad-input"
                  />
                </Field>
                <Field label="Business email" required>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => set('email', e.target.value)}
                    placeholder="quotes@yourbiz.com"
                    className="ad-input"
                  />
                </Field>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Website">
                  <input
                    type="url"
                    value={form.website}
                    onChange={(e) => set('website', e.target.value)}
                    placeholder="https://yourbiz.com"
                    className="ad-input"
                  />
                </Field>
                <Field label="Business address" required>
                  <input
                    required
                    value={form.address}
                    onChange={(e) => set('address', e.target.value)}
                    placeholder={`1420 Broadway, ${CITY.name}, ${CITY.stateAbbr} ${CITY.primaryZip}`}
                    className="ad-input"
                  />
                </Field>
              </div>
              <Field
                label="Google Maps URL"
                hint="Optional. Paste your Google Maps listing URL and we'll auto-fill the map and link."
              >
                <input
                  type="url"
                  value={form.googleMapsUrl}
                  onChange={(e) => set('googleMapsUrl', e.target.value)}
                  placeholder="https://www.google.com/maps/place/…"
                  className="ad-input"
                />
              </Field>
            </FormSection>

            <FormSection
              eyebrow="03"
              title="Service area"
              hint="Where you actively take jobs. Customers filter by area on the directory page."
            >
              <Field label="Counties served" required>
                <input
                  required
                  value={form.countiesServed}
                  onChange={(e) => set('countiesServed', e.target.value)}
                  placeholder={CITY.counties.slice(0, 3).join(', ')}
                  className="ad-input"
                />
              </Field>
              <Field label="Cities served" required hint="Pick every city/area you cover.">
                <div className="flex flex-wrap gap-2 mt-1">
                  {CITY_OPTIONS.map((c) => {
                    const active = form.cities.includes(c)
                    return (
                      <button
                        key={c}
                        type="button"
                        onClick={() => toggleCity(c)}
                        className={`px-3.5 py-1.5 rounded-full border text-sm font-medium transition-colors ${
                          active
                            ? 'bg-forest-500 text-white border-forest-500'
                            : 'bg-white text-onyx-700/70 border-[#E2E8F0] hover:text-onyx-700'
                        }`}
                      >
                        {c}
                      </button>
                    )
                  })}
                </div>
              </Field>
              <Field label="Other cities or regions (comma-separated)">
                <input
                  value={form.otherCity}
                  onChange={(e) => set('otherCity', e.target.value)}
                  placeholder="Mt. Juliet, Hermitage, Antioch"
                  className="ad-input"
                />
              </Field>
            </FormSection>

            <FormSection
              eyebrow="04"
              title="Credentials & specialties"
              hint="These power the At a Glance card and the search filters."
            >
              <div className="grid sm:grid-cols-3 gap-4">
                <Field label="Years in business" required>
                  <input
                    required
                    type="number"
                    min={0}
                    value={form.yearsInBusiness}
                    onChange={(e) => set('yearsInBusiness', e.target.value)}
                    placeholder="15"
                    className="ad-input"
                  />
                </Field>
                <Field label="Projects completed" required hint="Rough total is fine.">
                  <input
                    required
                    value={form.projectsCompleted}
                    onChange={(e) => set('projectsCompleted', e.target.value)}
                    placeholder="1,800+"
                    className="ad-input"
                  />
                </Field>
                <Field label="Employees" hint="Approximate is fine.">
                  <input
                    type="number"
                    min={0}
                    value={form.employees}
                    onChange={(e) => set('employees', e.target.value)}
                    placeholder="12"
                    className="ad-input"
                  />
                </Field>
              </div>

              <Field
                label="License & insurance status"
                required
                hint="A few common values:"
                hintRight={
                  <div className="flex flex-wrap gap-1.5">
                    {SUGGESTED_LICENSES.map((l) => (
                      <button
                        key={l}
                        type="button"
                        onClick={() => set('license', l)}
                        className="px-2 py-0.5 rounded-md bg-warmgray text-[11px] font-semibold text-onyx-700/70 hover:bg-[#E2E8F0]"
                      >
                        {l}
                      </button>
                    ))}
                  </div>
                }
              >
                <input
                  required
                  value={form.license}
                  onChange={(e) => set('license', e.target.value)}
                  placeholder="Licensed & Insured"
                  className="ad-input"
                />
              </Field>

              <Field
                label="Licenses (one per line)"
                hint="Specific licenses you hold. State GC license number, municipal business license, electrical license, etc."
              >
                <textarea
                  rows={3}
                  value={form.detailedLicenses}
                  onChange={(e) => set('detailedLicenses', e.target.value)}
                  placeholder={`TN General Contractor License #00012345\nDavidson County Business License`}
                  className="ad-input resize-y"
                />
              </Field>

              <Field
                label="Memberships & associations (one per line)"
                hint="Trade associations and industry bodies. AFA, BBB, chamber of commerce, etc."
              >
                <textarea
                  rows={3}
                  value={form.memberships}
                  onChange={(e) => set('memberships', e.target.value)}
                  placeholder={`American Fence Association (AFA) Member\nBBB Accredited Business\nNashville Chamber of Commerce`}
                  className="ad-input resize-y"
                />
              </Field>

              <Field
                label="Certifications (one per line)"
                hint="Trade certifications or manufacturer-certified installer programs."
              >
                <textarea
                  rows={3}
                  value={form.certifications}
                  onChange={(e) => set('certifications', e.target.value)}
                  placeholder={`Certified Fence Professional (CFP)\nTrex Pro Installer\nLiftMaster Certified Dealer`}
                  className="ad-input resize-y"
                />
              </Field>

              <Field
                label="Awards & recognition (one per line)"
                hint="Industry awards, 'Best of' lists, Angi Super Service Awards, etc."
              >
                <textarea
                  rows={3}
                  value={form.awards}
                  onChange={(e) => set('awards', e.target.value)}
                  placeholder={`Angi Super Service Award 2024\nNashville Scene Best of 2023`}
                  className="ad-input resize-y"
                />
              </Field>

              <Field
                label="Manufacturer partnerships (one per line)"
                hint="Products you're a certified installer or authorized dealer for."
              >
                <textarea
                  rows={3}
                  value={form.manufacturerPartnerships}
                  onChange={(e) => set('manufacturerPartnerships', e.target.value)}
                  placeholder={`Trex Authorized Dealer\nSimTek Preferred Installer`}
                  className="ad-input resize-y"
                />
              </Field>

              <Field
                label="Specialties"
                required
                hint="Comma-separated. These render as pills on your card."
              >
                <input
                  required
                  value={form.specialties}
                  onChange={(e) => set('specialties', e.target.value)}
                  placeholder="Wood Privacy, Vinyl Fence, Cedar"
                  className="ad-input"
                />
              </Field>

              <Field label="Typical response time" required>
                <select
                  required
                  value={form.responseTime}
                  onChange={(e) => set('responseTime', e.target.value)}
                  className="ad-input"
                >
                  <option value="">Select a response time</option>
                  {RESPONSE_TIMES.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </Field>
            </FormSection>

            <FormSection
              eyebrow="05"
              title="Project photos"
              hint="Up to 5 photos for your gallery. JPG / PNG, 10 MB max each."
            >
              <div
                onDragOver={(e) => {
                  e.preventDefault()
                  setDragOver(true)
                }}
                onDragLeave={() => setDragOver(false)}
                onDrop={onDrop}
                onClick={() => inputRef.current?.click()}
                className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors ${
                  dragOver
                    ? 'border-forest-500 bg-forest-50'
                    : 'border-[#E2E8F0] hover:border-forest-200 hover:bg-warmgray'
                }`}
              >
                <Upload className="w-7 h-7 mx-auto text-forest-500 mb-2" />
                <p className="text-sm font-semibold text-onyx-700">
                  Drop photos or click to upload
                </p>
                <p className="text-xs text-onyx-700/60 mt-1">
                  5 photos max · 10 MB each
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
                        onClick={(e) => {
                          e.stopPropagation()
                          removeFile(i)
                        }}
                        className="text-onyx-400 hover:text-forest-500"
                        aria-label="Remove photo"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </FormSection>

            <FormSection
              eyebrow="06"
              title="Pricing guide"
              hint="Optional but encouraged, shows typical price ranges so leads come in pre-qualified."
            >
              <div className="space-y-3">
                {form.pricing.map((p, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_140px] gap-2 items-start"
                  >
                    <input
                      value={p.label}
                      onChange={(e) => updatePricing(i, 'label', e.target.value)}
                      placeholder="Wood Privacy Fence"
                      className="ad-input"
                    />
                    <input
                      value={p.sub}
                      onChange={(e) => updatePricing(i, 'sub', e.target.value)}
                      placeholder="Western red cedar, 6 ft tall"
                      className="ad-input"
                    />
                    <input
                      value={p.price}
                      onChange={(e) => updatePricing(i, 'price', e.target.value)}
                      placeholder="$28–$38 / ft"
                      className="ad-input"
                    />
                  </div>
                ))}
              </div>
            </FormSection>

            <FormSection
              eyebrow="07"
              title="About you"
              hint="So we know who to follow up with."
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Your name" required>
                  <input
                    required
                    value={form.ownerName}
                    onChange={(e) => set('ownerName', e.target.value)}
                    placeholder="Jane Smith"
                    className="ad-input"
                  />
                </Field>
                <Field label="Your role" required>
                  <input
                    required
                    value={form.ownerRole}
                    onChange={(e) => set('ownerRole', e.target.value)}
                    placeholder="Owner"
                    className="ad-input"
                  />
                </Field>
              </div>
              <Field label="Your email" required>
                <input
                  required
                  type="email"
                  value={form.ownerEmail}
                  onChange={(e) => set('ownerEmail', e.target.value)}
                  placeholder="jane@yourbiz.com"
                  className="ad-input"
                />
              </Field>
            </FormSection>

            <FormSection
              eyebrow="08"
              title="Listing manager (Managed by)"
              hint="The primary contact we surface on your listing — name, role, headshot, and LinkedIn appear in the Business Information card."
            >
              <CheckboxRow
                checked={form.managerSameAsOwner}
                onChange={(v) => set('managerSameAsOwner', v)}
                label="Show me as the listing manager (uses the name and role above)."
              />

              {!form.managerSameAsOwner && (
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Manager name" required>
                    <input
                      required
                      value={form.managerName}
                      onChange={(e) => set('managerName', e.target.value)}
                      placeholder="Alex Carter"
                      className="ad-input"
                    />
                  </Field>
                  <Field label="Manager role" required>
                    <input
                      required
                      value={form.managerRole}
                      onChange={(e) => set('managerRole', e.target.value)}
                      placeholder="General Manager"
                      className="ad-input"
                    />
                  </Field>
                </div>
              )}

              <Field
                label="LinkedIn URL"
                hint="Optional. Links from the Managed-by chip on your listing."
              >
                <input
                  type="url"
                  value={form.managerLinkedinUrl}
                  onChange={(e) => set('managerLinkedinUrl', e.target.value)}
                  placeholder="https://www.linkedin.com/in/yourname"
                  className="ad-input"
                />
              </Field>

              <Field label="Headshot" hint="Square JPG/PNG, 5 MB max. Falls back to your initial if omitted.">
                <div
                  onClick={() => headshotInputRef.current?.click()}
                  className="border-2 border-dashed border-[#E2E8F0] hover:border-forest-200 hover:bg-warmgray rounded-xl p-5 text-center cursor-pointer transition-colors flex items-center justify-center gap-3"
                >
                  <Upload className="w-5 h-5 text-forest-500" />
                  <span className="text-sm font-semibold text-onyx-700">
                    {managerHeadshot ? managerHeadshot.name : 'Upload a headshot'}
                  </span>
                  {managerHeadshot && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        setManagerHeadshot(null)
                      }}
                      className="text-onyx-400 hover:text-forest-500"
                      aria-label="Remove headshot"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                  <input
                    ref={headshotInputRef}
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const f = e.target.files?.[0]
                      if (f && f.type.startsWith('image/')) setManagerHeadshot(f)
                    }}
                    className="hidden"
                  />
                </div>
              </Field>
            </FormSection>

            <FormSection
              eyebrow="09"
              title="Online presence"
              hint="Verified profile URLs render as citation chips on your listing. All optional — paste any that apply."
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Facebook page">
                  <input
                    type="url"
                    value={form.facebookUrl}
                    onChange={(e) => set('facebookUrl', e.target.value)}
                    placeholder="https://www.facebook.com/yourbiz"
                    className="ad-input"
                  />
                </Field>
                <Field label="BBB profile">
                  <input
                    type="url"
                    value={form.bbbUrl}
                    onChange={(e) => set('bbbUrl', e.target.value)}
                    placeholder="https://www.bbb.org/us/tn/.../profile/..."
                    className="ad-input"
                  />
                </Field>
                <Field label="Yelp profile">
                  <input
                    type="url"
                    value={form.yelpUrl}
                    onChange={(e) => set('yelpUrl', e.target.value)}
                    placeholder="https://www.yelp.com/biz/yourbiz"
                    className="ad-input"
                  />
                </Field>
                <Field label="Business LinkedIn">
                  <input
                    type="url"
                    value={form.linkedinBusinessUrl}
                    onChange={(e) => set('linkedinBusinessUrl', e.target.value)}
                    placeholder="https://www.linkedin.com/company/yourbiz"
                    className="ad-input"
                  />
                </Field>
                <Field label="Houzz profile">
                  <input
                    type="url"
                    value={form.houzzUrl}
                    onChange={(e) => set('houzzUrl', e.target.value)}
                    placeholder="https://www.houzz.com/pro/yourbiz"
                    className="ad-input"
                  />
                </Field>
                <Field label="Angi profile">
                  <input
                    type="url"
                    value={form.angiUrl}
                    onChange={(e) => set('angiUrl', e.target.value)}
                    placeholder="https://www.angi.com/companylist/.../yourbiz"
                    className="ad-input"
                  />
                </Field>
              </div>
              <Field label="Chamber of Commerce profile">
                <input
                  type="url"
                  value={form.chamberUrl}
                  onChange={(e) => set('chamberUrl', e.target.value)}
                  placeholder="https://web.nashvillechamber.com/list/member/..."
                  className="ad-input"
                />
              </Field>
            </FormSection>

            <FormSection
              eyebrow="10"
              title="Confirm & submit"
              hint="Quick double-check before we get your listing in the review queue."
            >
              <div className="space-y-3">
                <CheckboxRow
                  checked={form.authorized}
                  onChange={(v) => set('authorized', v)}
                  label="I confirm I'm authorized to submit this business and that all information is accurate."
                />
                <CheckboxRow
                  checked={form.agreedToTerms}
                  onChange={(v) => set('agreedToTerms', v)}
                  label={
                    <>
                      I agree to be listed in the {CITY.siteName} directory and
                      consent to be contacted for lead opportunities.
                    </>
                  }
                />
              </div>
            </FormSection>

            <div className="pt-4 border-t border-[#E2E8F0]">
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
                <div className="mb-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3">
                  {error}
                </div>
              )}
              <button
                type="submit"
                disabled={!form.authorized || !form.agreedToTerms || submitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-forest-500 hover:bg-forest-600 disabled:bg-onyx-700/30 disabled:cursor-not-allowed text-white text-base font-semibold px-5 py-3.5 rounded-lg transition-colors"
              >
                {submitting ? 'Sending…' : (<>Submit Listing <ArrowRight className="w-4 h-4" /></>)}
              </button>
              <p className="text-xs text-onyx-700/60 text-center mt-3">
                We review every submission. Listings typically go live within 2 business
                days.
              </p>
            </div>
          </form>

          <aside className="space-y-5 lg:sticky lg:top-24">
            <div className="bg-forest-500 text-white rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-oak-400/15 blur-3xl" />
              <div className="relative">
                <h3 className="font-heading font-bold text-white text-lg mb-3">
                  Why list with us?
                </h3>
                <ul className="space-y-2.5 text-sm text-white/85">
                  {[
                    'Free, no contracts, no card on file',
                    'Direct lead emails when homeowners request quotes',
                    'Verified Pro badge widget for your website',
                    `${CITY.name}-only audience actively shopping for fence work`,
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-oak-400 mt-0.5 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6">
              <h3 className="font-heading font-bold text-onyx-700 text-sm mb-3">
                Need help?
              </h3>
              <p className="text-sm text-onyx-700/70 leading-relaxed mb-4">
                Prefer to talk it through? We can fill the listing out with you.
              </p>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-2 text-sm text-onyx-700 hover:text-forest-500 transition-colors mb-2"
              >
                <Mail className="w-4 h-4 text-forest-500" /> {COMPANY.email}
              </a>
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="flex items-center gap-2 text-sm text-onyx-700 hover:text-forest-500 transition-colors"
              >
                <Phone className="w-4 h-4 text-forest-500" /> {COMPANY.phone}
              </a>
            </div>

            <div className="text-xs text-onyx-700/60 leading-relaxed px-1">
              Already have a Google listing? Paste your Google Maps URL in step 02 and
              we'll auto-fill your map placement and "View on Google" link.
            </div>
          </aside>
        </div>
      </section>

      <style>{`
        .ad-input {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          border: 1px solid #E2E8F0;
          background: #F8F9FA;
          font-size: 16px;
          color: #1A1D1E;
          outline: none;
          transition: all .15s ease;
          font-family: inherit;
        }
        .ad-input:focus {
          border-color: #1B4332;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(27,67,50,.08);
        }
      `}</style>
    </>
  )
}

function FormSection({
  eyebrow,
  title,
  hint,
  children,
}: {
  eyebrow: string
  title: string
  hint?: string
  children: React.ReactNode
}) {
  return (
    <section className="space-y-4">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-forest-50 text-forest-500 font-heading font-bold text-xs">
            {eyebrow}
          </span>
          <h2 className="font-heading font-bold text-onyx-700 text-lg tracking-tightest">
            {title}
          </h2>
        </div>
        {hint && <p className="text-xs text-onyx-700/60 ml-9">{hint}</p>}
      </div>
      <div className="space-y-4">{children}</div>
    </section>
  )
}

function Field({
  label,
  required,
  hint,
  hintRight,
  children,
}: {
  label: string
  required?: boolean
  hint?: string
  hintRight?: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="flex items-end justify-between gap-2 mb-1.5">
        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-onyx-700/60">
          {label}
          {required && <span className="text-oak-500 ml-1">*</span>}
        </span>
        {hint && !hintRight && (
          <span className="text-[10px] text-onyx-700/50 font-medium normal-case tracking-normal">
            {hint}
          </span>
        )}
      </span>
      {children}
      {hint && hintRight && (
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <span className="text-[11px] text-onyx-700/55">{hint}</span>
          {hintRight}
        </div>
      )}
    </label>
  )
}

function CheckboxRow({
  checked,
  onChange,
  label,
}: {
  checked: boolean
  onChange: (v: boolean) => void
  label: React.ReactNode
}) {
  return (
    <label className="flex items-start gap-3 cursor-pointer">
      <span
        className={`mt-0.5 w-5 h-5 rounded border flex items-center justify-center flex-shrink-0 transition-colors ${
          checked
            ? 'bg-forest-500 border-forest-500'
            : 'bg-white border-[#E2E8F0]'
        }`}
      >
        {checked && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
      </span>
      <span className="text-sm text-onyx-700/80 leading-relaxed">{label}</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only"
      />
    </label>
  )
}
