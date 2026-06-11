# Contractor Profile Knowledge Panel — Design + Data Model

## Context

The contractor system today is a flat 23-entry TypeScript array (`src/data/contractors.ts`) rendered through a fairly minimal profile page (`src/pages/ContractorProfile.tsx`): Header → About → Project Gallery → Pricing Guide → Google Reviews → sidebar (At a Glance, Service Areas, Quote CTA, Location, Claim CTA). Every contractor is sourced as `'google-maps'`, but no claim state, no plan tier, no last-updated metadata, no portfolio, no credentials, no FAQ, no review summary, no online-presence badges, no editorial assessment.

The goal: turn each profile from a business card into a **business knowledge panel** — useful even before the company claims it, and significantly enriched once they do. Profiles become a living, AI-indexable record of every fence company in Middle Tennessee, with `Last Updated` as a trust signal that ranking systems can see.

This plan covers **design + data model only** (no code yet). It defines the visual layout, the complete data model expansion, the Free / Free-Claim / Pro feature matrix, the MCP tools we'll use to gather data for unclaimed profiles, and the JSON-LD additions. Self-serve claim auth, payment integration, and storage migration are explicitly deferred.

## Visual layout

**One page, four bands:**

```
┌────────────────────────────────────────────────────────────┐
│  HEADER (full-width, sticky-eligible)                       │
│  ├─ Logo / monogram         ├─ CTA stack (right-aligned)    │
│  ├─ Name + badge + license  │   • Request Quote (primary)   │
│  ├─ Specialty pills         │   • Phone                     │
│  ├─ Stars + Google link     │   • Website                   │
│  ├─ Area list               │   • Claim Profile (link)      │
│  └─ Last Updated · Verified └─ Contact summary               │
├────────────────────────────────────────────────────────────┤
│  MAIN CONTENT (2/3)                  │  SIDEBAR (1/3)        │
│                                       │                       │
│  1. Company Snapshot                  │  Business Information │
│  2. Trust & Verification              │  (founded, ownership, │
│  3. Services Offered (pill grid)      │   employees, projects)│
│  4. Areas Served (pill grid + map)    │                       │
│  5. Project Portfolio  [Pro]          │  Online Presence      │
│  6. Company Credentials [Pro]         │  (badge grid)         │
│  7. Customer Review Summary           │                       │
│  8. Pricing Information [Pro]         │  Service Area Map     │
│  9. FAQs [Pro]                        │                       │
│ 10. Fence Guide Assessment            │  Claim Profile CTA    │
│ 11. Compare With Similar Companies    │  (only if unclaimed)  │
├────────────────────────────────────────────────────────────┤
│  LEAD GEN SECTION (existing component, reused)              │
└────────────────────────────────────────────────────────────┘
```

**Treatment of gated [Pro] sections in the unclaimed / free-claim view:** show the section heading + a soft placeholder card that reads *"This section unlocks when {Company} claims their profile. Are you the owner? Claim this listing →"*. Keeps the H2 in the page (good for SEO / topical breadth) without faking content. No blurred-preview tricks.

**Verification status block** (section 2) renders as a checklist with check / dash icons. Every contractor gets a checklist; items the verification routine couldn't confirm show as dashes, not red X's — the framing is "what we've confirmed" not "what's missing."

**Last Updated date** lives in three spots:
- Right under the name in the header (small, e.g. "Updated Jun 11, 2026")
- As a `dateModified` field in the LocalBusiness JSON-LD
- As a small pill on directory cards (`/contractors`) so the list itself signals freshness

## Data model expansion (the `Contractor` type)

Keep every current field. Add the following, all optional unless noted:

```ts
// Lifecycle / claim state
claimStatus: 'unclaimed' | 'free' | 'pro'    // required, defaults to 'unclaimed'
claimedAt?: string                            // ISO date when owner first claimed
planTier?: 'pro'                              // only when claimStatus === 'pro'
planRenewsAt?: string                         // ISO date
lastUpdated: string                           // required, ISO — auto-updated on any edit
lastVerifiedAt?: string                       // ISO — set when verification routine re-runs

// Business information (sidebar)
founded?: number                              // year, e.g. 2009
ownership?: 'Local' | 'Regional' | 'National' | 'Franchise'
employees?: number
isCommercialProjects?: boolean
isResidentialProjects?: boolean

// Editorial copy
snapshot?: string                             // 150–200 word overview (AI-generated, editor-approved)
editorialAssessment?: string                  // Fence Guide Assessment paragraph (always editorial)

// Coverage
servicesOffered?: string[]                    // slugs matching SERVICE_BUCKETS / SERVICES in services.ts
areasServedDetail?: { slug: string; name: string }[]  // slugs matching NEIGHBORHOODS

// Verification checklist
verification: {
  websiteVerified: boolean
  addressVerified: boolean
  phoneVerified: boolean
  googleBusinessFound: boolean
  bbbFound?: boolean
  bbbAccreditation?: 'A+' | 'A' | 'B' | 'C' | 'D' | 'F' | 'NR'
  chamberMember?: boolean
  licensedInsured?: boolean       // 'owner-submitted' when via claim, 'verified' when via state lookup
  employeeCountConfirmed?: boolean
}

// Pro-only data (locked sections)
portfolio?: {
  id: string
  title: string
  location: string                            // e.g. "Brentwood, TN"
  fenceType: string                           // e.g. "Horizontal cedar privacy"
  projectSize: string                         // e.g. "240 linear feet"
  completionDate: string                      // ISO
  photos: string[]                            // URLs
  videos?: string[]
  beforePhoto?: string
  afterPhoto?: string
}[]
credentials?: {
  certifications: { name: string; issuer: string; year?: number }[]
  memberships: { name: string; since?: number }[]
  awards: { name: string; year?: number }[]
  manufacturerPartnerships: { name: string }[]
}
pricing?: {
  privacy?: { lo: number; hi: number; unit: 'ft' | 'project' }
  pool?:    { lo: number; hi: number; unit: 'ft' | 'project' }
  aluminum?:{ lo: number; hi: number; unit: 'ft' | 'project' }
  gate?:    { lo: number; hi: number; unit: 'ft' | 'project' }
}
faqs?: { q: string; a: string }[]
financing?: { available: boolean; partners?: string[]; notes?: string }
warranty?: { material?: string; workmanship?: string; notes?: string }
team?: { name: string; role: string; bio?: string; photo?: string }[]
leadCaptureFormUrl?: string                   // Pro: owner-configured destination

// AI-derived (regenerated on a schedule)
reviewSummary?: {
  commonPraise: string[]                      // 3–5 short phrases
  commonConcerns: string[]                    // 0–3 short phrases
  summarizedAt: string                        // ISO
  reviewsAnalyzed: number
}

// Online presence (citation badges)
onlinePresence?: {
  googleBusiness?: string                     // URL
  facebook?: string
  bbb?: string
  yelp?: string
  buildzoom?: string
  houzz?: string
  angi?: string
  linkedin?: string
  chamber?: string
}
```

`servicesOffered` and `areasServedDetail` reference existing taxonomies (`SERVICES` in `src/data/services.ts`, `NEIGHBORHOODS` in `src/data/siteData.ts`) so service pills link to `/services/<slug>` and area pills link to `/service-areas/<slug>` — every profile becomes an internal-linking hub.

## Free / Free-Claim / Pro feature matrix

| Section | Unclaimed | Free Claim | Pro ($199/mo) |
|---|---|---|---|
| Header | ✅ researched data | ✅ owner edits contact info + hours | ✅ + logo upload |
| Snapshot | ✅ AI-generated + editorial review | ✅ same | ✅ owner can rewrite |
| Trust & Verification | ✅ researched | ✅ owner attests to license/insurance | ✅ same |
| Business Information sidebar | ✅ researched best-effort | ✅ owner confirms founded / ownership / employees | ✅ same |
| Services Offered | ✅ derived from `specialties` | ✅ owner edits | ✅ same |
| Areas Served | ✅ derived from `areas[]` | ✅ owner edits | ✅ same |
| Project Portfolio | placeholder | placeholder | ✅ up to 12 projects w/ photos+videos |
| Company Credentials | placeholder | placeholder | ✅ owner adds |
| Customer Review Summary | ✅ AI-summarized from public reviews | ✅ same | ✅ same |
| Online Presence badges | ✅ researched URLs | ✅ owner can add more | ✅ same |
| Service Area Map | ✅ | ✅ | ✅ |
| Pricing Information | placeholder | placeholder | ✅ owner-set ranges |
| FAQs | placeholder | placeholder | ✅ owner-set |
| Fence Guide Assessment | ✅ editorial (always) | ✅ editorial (owner can't edit) | ✅ same |
| Compare With Similar | ✅ algorithmic | ✅ same | ✅ same |
| Lead Capture Form | "Request Quote" → site form | same | ✅ owner-configured destination |
| Directory placement | normal | normal | priority sort + badge |
| Profile analytics dashboard | — | — | ✅ owner-only (deferred to claim flow plan) |

Free Claim is the entry point. It's free forever, lets the owner fix contact-info accuracy, and seeds the relationship. Pro at $199/mo unlocks the rich sections plus directory priority. No bundling with the existing Advertise plans — those remain separate ad products.

## MCP data-sourcing tools

Mirror the image MCP server pattern (`scripts/mcp-image-server.mjs` + `.mcp.json`). New server: `scripts/mcp-contractor-server.mjs`. Tools surface to Claude as `mcp__contractors__<name>`:

1. **`lookup_google_places(name, area)`** — Google Places Text Search + Details. Returns `{ place_id, name, address, phone, website, rating, reviews_count, hours, types, photos[] }`. Needs `GOOGLE_PLACES_API_KEY`.
2. **`fetch_google_reviews(place_id, max=20)`** — Google Place Details with reviews field. Returns review text + author + rating.
3. **`lookup_bbb(name, state)`** — WebFetch `bbb.org/search?find_text={name}&find_loc={state}`, parse accreditation + URL. No API key.
4. **`lookup_chamber(name, city)`** — WebFetch the Nashville Chamber member directory. Returns membership boolean + URL.
5. **`lookup_state_license(name, state)`** — WebFetch the Tennessee Department of Commerce & Insurance Contractor Licensing Board search. Returns license number + status + expiration.
6. **`summarize_reviews(reviews[])`** — Calls Claude (Sonnet 4.6 or Haiku 4.5 for cost) to extract `commonPraise[]` and `commonConcerns[]` from raw review text. Returns the `reviewSummary` shape above.
7. **`generate_snapshot(facts)`** — Calls Claude to write the 150–200 word snapshot from researched facts. Editor reviews before merging.
8. **`set_contractor_field(slug, path, value)`** — Targeted edit to `src/data/contractors.ts`. Sets `lastUpdated = now()` automatically on every write. Same regex-based edit pattern as the image MCP's `set_image`.
9. **`list_contractor_gaps(slug?)`** — Returns which fields are still unfilled per contractor (or across all). Lets Claude inventory work before starting a session.

API spend is metered. Typical enrichment for one profile: 2 Places API calls ($0.04), 1 review fetch ($0), 1 BBB scrape (free), 1 Chamber scrape (free), 1 license scrape (free), 1 Claude review-summary call (~$0.01), 1 Claude snapshot call (~$0.01). Roughly **$0.06 per profile** for first-pass enrichment.

## Last-Updated trust signal mechanics

- `lastUpdated` is **required** on every Contractor entry.
- Auto-set by `set_contractor_field` on every write.
- Auto-set by the verification routine when `lastVerifiedAt` is bumped.
- Surfaced as:
  - "Updated {Month} {Year}" pill in the profile header, right under the name.
  - `dateModified` field on the `LocalBusiness` JSON-LD via `contractorLocalBusiness()` in `src/lib/schema.ts`.
  - "Updated {Month} {Year}" sub-line on directory cards (`Contractors.tsx` + `ContractorDirectory.tsx`).
  - A small "Recently updated" badge on the directory card if `lastUpdated` is within 90 days.

This is one of the strongest editorial signals to Google and AI search — profiles that change get re-crawled and re-trusted faster than static ones.

## JSON-LD additions

Extend `contractorLocalBusiness()` in `src/lib/schema.ts`. New fields to emit when the data is present:

- `dateModified` — from `lastUpdated`
- `foundingDate` — from `founded` (year string)
- `numberOfEmployees` — from `employees`
- `knowsAbout` — from `servicesOffered[]`, mapped to service slug labels
- `areaServed` — already emitted, but expand from `areasServedDetail[]` to include each area as a `City` with ZIP if available
- `sameAs` — extended from `onlinePresence` (every populated URL: googleBusiness, facebook, bbb, yelp, etc.)
- `aggregateRating` — only emit when `source === 'google-maps'` and `rating` + `reviews_count` are present (avoid fabrication on placeholders)
- `award` — from `credentials.awards[]` when present
- `memberOf` — from `credentials.memberships[]` when present
- New `FAQPage` schema sibling on profiles where `faqs` is populated, using `faqPageSchema()`

These additions are AI-search rich. A claimed-and-enriched Pro profile carries 10+ structured fields that Google, Bing, and LLM crawlers can extract directly.

## What this plan does NOT cover

- **Self-serve claim flow** — magic-link auth, owner edit dashboard. Deferred to a follow-up plan once we've shipped the new profile structure and started running enrichment manually.
- **Stripe / payment integration** — same deferral. Pro upgrade is invoiced manually until claim self-serve lands.
- **Database migration** — `src/data/contractors.ts` stays as a flat TypeScript array for v1. Move to DB when self-serve claim is built.
- **Profile analytics dashboard** — Pro feature listed but deferred to the claim-flow plan.
- **Building the MCP server itself** — this plan documents the tool surface; the implementation is a follow-up scoped against this spec.

## Verification (when this plan is approved and code starts)

1. **Type system**: extend `Contractor` type in `src/data/contractors.ts` per the data-model spec. `tsc -b` clean.
2. **Backfill existing 23 contractors** with `claimStatus: 'unclaimed'`, `lastUpdated: '2026-06-11'`, and `verification: { websiteVerified: true, addressVerified: true, phoneVerified: true, googleBusinessFound: true }` (all Google-Maps-sourced so these are true by default).
3. **Build profile page**: rebuild `src/pages/ContractorProfile.tsx` with the new section order + Pro-gating placeholders + Last-Updated pill.
4. **Build directory updates**: add Last-Updated pill to `Contractors.tsx` cards, add priority-sort for Pro tier.
5. **Build MCP server**: `scripts/mcp-contractor-server.mjs` exposing the 9 tools above. `.mcp.json` registers it. `.env.local.example` adds `GOOGLE_PLACES_API_KEY` + reuses `ANTHROPIC_API_KEY` for Claude calls.
6. **Schema regression**: paste the rendered HTML of a Pro-enriched profile into Google's Rich Results Test — `LocalBusiness` + `FAQPage` + `BreadcrumbList` all parse cleanly with the new fields.
7. **Pick one anchor contractor** to fully enrich end-to-end as a reference (e.g., K & C Fence Company or Volunteer Fence). Use it as the template for what every other profile should look like once filled.

## Critical files to touch when implementing

- `src/data/contractors.ts` — type expansion + backfill
- `src/pages/ContractorProfile.tsx` — full rewrite of the section structure
- `src/pages/Contractors.tsx`, `src/components/home/ContractorDirectory.tsx` — Last-Updated pill, Pro priority sort
- `src/lib/schema.ts` — `contractorLocalBusiness()` extension + new FAQ schema attachment
- `scripts/mcp-contractor-server.mjs` (NEW) — the 9-tool MCP server
- `.mcp.json` — register the new server
- `.env.local.example` — add `GOOGLE_PLACES_API_KEY`
- `src/data/contractorAttribution.json` (NEW, sidecar) — per-contractor source provenance + when each field was last refreshed
