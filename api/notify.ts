import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

type QuoteRequest = {
  name?: string
  email?: string
  phone?: string
  zip?: string
  fenceType?: string
  feet?: string
  timeline?: string
  budget?: string
  fileNames?: string[]
}

type SubmitListing = {
  businessName?: string
  category?: string
  projectType?: string
  tagline?: string
  about?: string
  phone?: string
  email?: string
  website?: string
  address?: string
  googleMapsUrl?: string
  countiesServed?: string
  cities?: string[]
  otherCity?: string
  yearsInBusiness?: string
  projectsCompleted?: string
  license?: string
  specialties?: string
  responseTime?: string
  pricing?: { label?: string; sub?: string; price?: string }[]
  ownerName?: string
  ownerRole?: string
  ownerEmail?: string
  fileNames?: string[]
}

type AdvertiseInquiry = {
  name?: string
  company?: string
  email?: string
  phone?: string
  interest?: string
  message?: string
}

type Payload =
  | { formType: 'quote-request'; data: QuoteRequest; _hp?: string }
  | { formType: 'submit-listing'; data: SubmitListing; _hp?: string }
  | { formType: 'advertise-inquiry'; data: AdvertiseInquiry; _hp?: string }

const esc = (v: unknown): string =>
  String(v ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')

const row = (label: string, value: unknown): string => {
  const v = value === undefined || value === null || value === '' ? '—' : esc(value)
  return `<tr><td style="padding:8px 14px;background:#F8F9FA;border-bottom:1px solid #E2E8F0;font-weight:600;color:#1A1D1E;width:200px;vertical-align:top;">${esc(label)}</td><td style="padding:8px 14px;border-bottom:1px solid #E2E8F0;color:#1A1D1E;">${v}</td></tr>`
}

const shell = (title: string, inner: string, footer?: string): string => `
<div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;max-width:640px;margin:0 auto;padding:24px;color:#1A1D1E;">
  <div style="border-left:4px solid #1B4332;padding:8px 0 8px 14px;margin-bottom:18px;">
    <div style="font-size:11px;letter-spacing:.15em;text-transform:uppercase;color:#1B4332;font-weight:700;">Nashville Fence Guide</div>
    <h1 style="margin:4px 0 0 0;font-size:20px;color:#1A1D1E;">${esc(title)}</h1>
  </div>
  <table style="width:100%;border-collapse:collapse;border:1px solid #E2E8F0;border-radius:8px;overflow:hidden;font-size:14px;">${inner}</table>
  ${footer ? `<div style="margin-top:18px;font-size:12px;color:#6b7280;">${footer}</div>` : ''}
</div>`

function buildQuote(d: QuoteRequest): { subject: string; html: string; replyTo?: string } {
  const subject = `[Quote] ${d.name || 'New lead'}${d.zip ? ` — ${d.zip}` : ''}${d.fenceType ? ` — ${d.fenceType}` : ''}`
  const photos =
    d.fileNames && d.fileNames.length > 0
      ? `Attached ${d.fileNames.length}: ${d.fileNames.join(', ')}`
      : 'None'
  const inner = [
    row('Name', d.name),
    row('Email', d.email),
    row('Phone', d.phone),
    row('ZIP', d.zip),
    row('Fence type', d.fenceType),
    row('Linear footage', d.feet),
    row('Timeline', d.timeline),
    row('Budget', d.budget),
    row('Photos', photos),
  ].join('')
  return {
    subject,
    html: shell('New Quote Request', inner, 'Reply to this email to respond directly to the homeowner.'),
    replyTo: d.email,
  }
}

function buildListing(d: SubmitListing): { subject: string; html: string; replyTo?: string } {
  const subject = `[Listing] ${d.businessName || 'New business'}${d.category ? ` — ${d.category}` : ''}`
  const cities = [...(d.cities || []), ...(d.otherCity ? [d.otherCity] : [])].filter(Boolean).join(', ')
  const pricing =
    (d.pricing || [])
      .filter((p) => p.label || p.sub || p.price)
      .map((p) => `${esc(p.label || '')}${p.sub ? ` (${esc(p.sub)})` : ''}: ${esc(p.price || '—')}`)
      .join('<br>') || '—'
  const photos =
    d.fileNames && d.fileNames.length > 0
      ? `Attached ${d.fileNames.length}: ${d.fileNames.join(', ')}`
      : 'None'
  const inner = [
    row('Business', d.businessName),
    row('Category', d.category),
    row('Customer type', d.projectType),
    row('Tagline', d.tagline),
    row('About', d.about),
    row('Phone', d.phone),
    row('Business email', d.email),
    row('Website', d.website),
    row('Address', d.address),
    row('Google Maps', d.googleMapsUrl),
    row('Counties served', d.countiesServed),
    row('Cities served', cities),
    row('Years in business', d.yearsInBusiness),
    row('Projects completed', d.projectsCompleted),
    row('License', d.license),
    row('Specialties', d.specialties),
    row('Response time', d.responseTime),
    `<tr><td style="padding:8px 14px;background:#F8F9FA;border-bottom:1px solid #E2E8F0;font-weight:600;color:#1A1D1E;width:200px;vertical-align:top;">Pricing</td><td style="padding:8px 14px;border-bottom:1px solid #E2E8F0;color:#1A1D1E;">${pricing}</td></tr>`,
    row('Submitted by', d.ownerName),
    row('Role', d.ownerRole),
    row('Contact email', d.ownerEmail),
    row('Photos', photos),
  ].join('')
  return {
    subject,
    html: shell('New Listing Submission', inner, 'Reply to this email to respond directly to the submitter.'),
    replyTo: d.ownerEmail || d.email,
  }
}

function buildAdvertise(d: AdvertiseInquiry): { subject: string; html: string; replyTo?: string } {
  const subject = `[Advertise] ${d.company || 'New inquiry'}${d.interest ? ` — ${d.interest}` : ''}`
  const inner = [
    row('Name', d.name),
    row('Company', d.company),
    row('Email', d.email),
    row('Phone', d.phone),
    row('Interest', d.interest),
    row('Message', d.message),
  ].join('')
  return {
    subject,
    html: shell('New Advertising Inquiry', inner, 'Reply to this email to respond directly to the inquirer.'),
    replyTo: d.email,
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ ok: false, error: 'Method not allowed' })
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.NOTIFY_TO_EMAIL
  const from = process.env.NOTIFY_FROM_EMAIL
  if (!apiKey || !to || !from) {
    return res.status(500).json({ ok: false, error: 'Email is not configured' })
  }

  const body = (typeof req.body === 'string' ? safeParse(req.body) : req.body) as Payload | null
  if (!body || typeof body !== 'object') {
    return res.status(400).json({ ok: false, error: 'Invalid payload' })
  }

  if (typeof body._hp === 'string' && body._hp.trim() !== '') {
    return res.status(200).json({ ok: true })
  }

  let built: { subject: string; html: string; replyTo?: string }
  switch (body.formType) {
    case 'quote-request':
      built = buildQuote(body.data || {})
      break
    case 'submit-listing':
      built = buildListing(body.data || {})
      break
    case 'advertise-inquiry':
      built = buildAdvertise(body.data || {})
      break
    default:
      return res.status(400).json({ ok: false, error: 'Unknown form type' })
  }

  const resend = new Resend(apiKey)
  const send = await resend.emails.send({
    from,
    to,
    subject: built.subject,
    html: built.html,
    replyTo: built.replyTo,
  })

  if (send.error) {
    return res.status(502).json({ ok: false, error: send.error.message || 'Send failed' })
  }
  return res.status(200).json({ ok: true })
}

function safeParse(s: string): unknown {
  try {
    return JSON.parse(s)
  } catch {
    return null
  }
}
