# Daily Content Plan — Nashville Fence Guide

## Context

The site has 10 long-form resource articles, all in a consistent contractor voice and all written around fence topics (compliance, repair, cost, hiring, property law). To capture more homeowner traffic upstream of a fence project, this plan adds articles in 8 adjacent service categories that homeowners typically research **before** or **alongside** a gate or fence — deck, patio, pergola, outdoor kitchen, driveway gates, landscaping, sod/irrigation, and pool installation.

End state: a publishing queue of roughly 60 articles across 8 new adjacent categories plus the 3 fence-adjacent topics already on deck. Cadence is one article per day, executed against this plan in order. Each article ships as a single commit in the same contractor voice, internal-linked to existing fence content where natural, and indexed via the existing sitemap auto-regeneration.

Why these categories: every one corresponds to a service homeowners commonly buy in the same 3-6 month window as a new fence. Catching the "I'm planning a new deck" search before the homeowner has thought about the fence is upstream lead capture — the article ranks, they bookmark the site, they come back when fence time arrives.

## Categories & Article Inventory

Total: **63 articles** across **9 buckets**. All publish under `/resources/<slug>` using the existing `RESOURCES` array in `src/data/siteData.ts` and the `ResourceSection` renderer in `src/pages/Resources.tsx`.

### 0. Fence-Adjacent (Carryover)

Three slugs I previously suggested but haven't written.

1. Shared fence laws in Tennessee (neighbor-dispute focus, high search volume)
2. Should I automate my driveway gate? A Nashville decision tree
3. When to break your HOA's fence rule (and the three times it actually works)

### 1. Deck Builders (7 articles)

1. Should You Build a Fence Before or After a New Deck?
2. How to Create More Privacy Around Your Deck
3. Composite vs Wood Decking: Which Works Better With Privacy Fencing?
4. Backyard Layout Mistakes to Avoid When Combining Decks and Fences
5. **How Much Does a New Deck Cost in Nashville?** *(commercial)*
6. **Best Deck Builders in Nashville** *(commercial)*
7. **Deck Permit Requirements in Metro Nashville** *(commercial — added for CI)*

### 2. Patio Contractors (7 articles)

1. Planning a Patio? What Homeowners Should Know Before Building a Fence
2. Concrete Patios, Walkways, and Fences: The Best Order of Construction
3. Patio Design Ideas That Pair Well With Privacy Fencing
4. Backyard Renovation Checklist: Patio, Fence, Landscaping, and Lighting
5. **How Much Does a Patio Cost in Nashville?** *(commercial)*
6. **Best Patio Contractors in Nashville** *(commercial)*
7. **Stamped Concrete vs Pavers vs Flagstone: Which Pays Off in Nashville?** *(commercial — added for CI)*

### 3. Pergola Builders (7 articles)

1. How to Create a Private Outdoor Living Space With a Pergola
2. Pergola vs Covered Patio: Which Is Right for Your Backyard?
3. Backyard Design Ideas Combining Pergolas, Fencing, and Landscaping
4. How to Add Shade and Privacy to Your Backyard
5. **How Much Does a Pergola Cost in Nashville?** *(commercial)*
6. **Best Pergola Builders in Nashville** *(commercial)*
7. **Pergola Permits in Metro Nashville** *(commercial — added for CI)*

### 4. Outdoor Kitchens (7 articles)

1. Outdoor Kitchen Planning Guide for Nashville Homeowners
2. The Best Backyard Layouts for Outdoor Kitchens and Entertaining
3. Privacy Ideas for Outdoor Dining Spaces
4. Outdoor Kitchen Features That Add the Most Value
5. **How Much Does an Outdoor Kitchen Cost in Nashville?** *(commercial)*
6. **Best Outdoor Kitchen Contractors in Nashville** *(commercial)*
7. **Gas vs Electric Outdoor Kitchen Setup Cost in Nashville** *(commercial — added for CI)*

### 5. Driveway Gates & Automatic Gates (8 articles)

This bucket overlaps with the existing `gates` SERVICE_CATEGORY in the directory, so internal links are richest here.

1. **How Much Does a Driveway Gate Cost in Nashville?** *(commercial)*
2. Automatic Gates vs Traditional Gates: Pros and Cons
3. What Homeowners Should Know Before Installing an Electric Gate
4. Does a Driveway Gate Increase Property Value?
5. Best Driveway Gate Designs for Nashville Homes
6. **Best Gate Installation Companies in Nashville** *(commercial)*
7. **Driveway Gate Permits in Nashville** *(commercial — added for CI)*
8. **Solar vs Hardwired Gate Operators in Nashville: Cost & Reliability** *(commercial — added for CI)*

### 6. Landscaping (7 articles)

1. Landscaping Projects That Pair Well With a New Fence
2. The Best Plants to Grow Along a Privacy Fence
3. Landscaping Around a Fence Without Creating Maintenance Problems
4. Backyard Upgrades That Improve Curb Appeal
5. **How Much Does Landscaping Cost in Nashville?** *(commercial)*
6. **Best Landscaping Companies in Nashville** *(commercial)*
7. **Hardscape vs Softscape Cost in Nashville** *(commercial — added for CI)*

### 7. Sod Installation & Irrigation (7 articles)

1. Should You Install Sod Before or After a Fence?
2. How Fence Construction Can Affect Existing Irrigation Systems
3. Irrigation Planning Tips for Backyard Renovation Projects
4. Avoiding Drainage Problems Along Fence Lines
5. **How Much Does Sod Installation Cost in Nashville?** *(commercial)*
6. **Best Sod and Irrigation Companies in Nashville** *(commercial)*
7. **Bermuda vs Fescue vs Zoysia in Nashville: Cost, Care, & Curb Appeal** *(commercial — added for CI)*

### 8. Pool Installation (7 articles)

1. Best Fence Types for Homes With Pools
2. Pool Safety Barrier Requirements Every Homeowner Should Know
3. How to Create Privacy Around a Backyard Pool
4. Common Mistakes When Planning a Pool and Fence Together
5. **How Much Does a Pool Cost in Nashville?** *(commercial)*
6. **Best Pool Builders in Nashville** *(commercial)*
7. **Above-Ground vs In-Ground Pool Cost in Nashville** *(commercial — added for CI)*

---

**Bucket totals:** 3 carryover + 7 + 7 + 7 + 7 + 8 + 7 + 7 + 7 = **60 articles**.

## Publishing Schedule

One article per day, ~60 days end-to-end.

The order interleaves categories rather than silo-publishing one bucket at a time. Reasoning: Google rewards topical breadth-with-depth, and interleaving spreads the internal-linking opportunities across the queue.

**Each calendar week publishes 7 articles in this pattern:**

- Mon — commercial intent ("How much does X cost" or "Best X in Nashville")
- Tue — informational comparison ("X vs Y")
- Wed — informational how-to
- Thu — Nashville-specific compliance/permit
- Fri — commercial intent again (rotating to a different category from Mon)
- Sat — comparison or planning checklist
- Sun — high-CI article from a new category

**Week 1 specifically** focuses on the highest-revenue queries first to start SEO accumulation immediately:

1. How Much Does a Driveway Gate Cost in Nashville?
2. Pool Safety Barrier Requirements Every Homeowner Should Know
3. Should You Build a Fence Before or After a New Deck?
4. Driveway Gate Permits in Nashville
5. How Much Does a New Deck Cost in Nashville?
6. Composite vs Wood Decking: Which Works Better With Privacy Fencing?
7. Best Gate Installation Companies in Nashville

**Weeks 2-9** rotate through the remaining 53 articles, balancing 2 "Best/Cost" CI articles per week against 4 informational + 1 comparison.

## Implementation Pattern Per Article

Each article ships in a single commit and is identical in mechanics to the existing 10 articles. No new components, no schema changes.

### Per-article checklist

1. **Add slug to `IMAGES.resources`** in `src/data/imageUrls.ts` — pick a verified Unsplash photo from the existing pool, or use a new `unsplash.com/photos/<id>/download` URL if you send a new image
2. **Append a new entry to `RESOURCES`** in `src/data/siteData.ts` with: `slug`, `title`, `category`, `readTime`, `excerpt`, `img`, `imageAlt`, `body`
3. **Write the `body`** as a `ResourceSection[]` using `p` / `h2` / `h3` / `ul` / `ol` / `table` / `callout` — same pipeline rendered by `Resources.tsx` line ~28 (`ArticleBody`)
4. **Voice:** contractor, dry humor, specific numbers, Nashville-specific references (Davidson, Williamson, Sumner, Wilson, Rutherford, named neighborhoods, real cost ranges)
5. **Length:** 1,200-1,500 words. Read time formula: word count ÷ 220 = minutes
6. **Internal links:** use the new `[text](/path)` markdown syntax already supported by the `p` renderer — every article should link to at least 2 other resources or pages on the site
7. **Build, commit, push** — the sitemap auto-regenerates on `prebuild` so each new slug appears in `public/sitemap.xml` automatically

### Voice consistency examples (already shipped, use as anchors)

- `src/data/siteData.ts` — `best-fences-for-dogs` body (most representative)
- `src/data/siteData.ts` — `fence-cost-breakdown` body (best for the "Cost in Nashville" articles)
- `src/data/siteData.ts` — `hire-nashville-fence-installer-questions` body (best template for the "Best X Contractors" articles)

## Human Voice Editor — Run Before Every Commit

Before returning any article, page, email, social post, or marketing copy, run an internal editing pass using these rules. This pass is non-optional. Apply it to drafts after the body is written; revise until every paragraph passes.

Write like a person who actually lived it, not a content writer describing it.

### Remove AI Writing Patterns
- Eliminate phrases that sound rehearsed, corporate, overly polished, or written to impress.
- Replace generic observations with specific ones.
- Cut filler, throat-clearing, and unnecessary transitions.
- Avoid sounding like a neutral observer trying to satisfy everyone.

### Fix Thought Flow
- Writing should move like real thinking.
- Not every paragraph should be the same length.
- Not every sentence should be perfectly structured.
- Allow occasional abrupt transitions when they feel natural.
- Mix short punchy statements with longer explanations.

### Break Predictable Structure
- Avoid repetitive sentence openings.
- Avoid list-heavy writing unless necessary.
- Vary paragraph length dramatically.
- Do not follow the same rhythm for every section.

### Banned phrases (rewrite on sight)
- "Whether you're..."
- "In today's world..."
- "It's important to note..."
- "By understanding..."
- "When it comes to..."
- "At the end of the day..."
- "More than ever..."
- "In the realm of..."
- "Look no further..."
- "Game-changer / game-changing"
- "Unlock the secrets..."
- "Dive into / Dive deep into..."
- "Navigate the world of..."
- "It's no secret..."

### Apply the Credibility Test
Read the content as a skeptical reader. For every sentence ask: Would a real person actually say this out loud?
If not:
- Simplify it.
- Make it more direct.
- Remove unnecessary precision.
- Remove marketing language.

### Strengthen Point of View
The writing should feel like it came from one person. Allow:
- Opinions
- Preferences
- Small contradictions
- Imperfect observations
- Personality

Do not force false neutrality.

### Be Very Opinionated (mandatory)
Every article must take a clear position and defend it. No hedging, no "it depends" cop-outs, no listing five equal-weight options and refusing to recommend one.

- **Lead with the recommendation.** The direct-answer paragraph at the top should pick a side. The rest of the article is the reasoning behind that pick, plus the exceptions.
- **Name the bad option as bad.** If the polycarbonate-roof pergola looks like a Home Depot awning, write that. If pressure-treated decking marketed as "composite" is misleading, write that. Specific criticism beats safe both-sides framing every time.
- **Use direct phrasing.** "Sorry. It's not even close." "Stop kidding yourself." "Three situations. That's it. Three." These land better than "There are many factors to consider."
- **Humour is part of the voice.** Dry humour, observed-on-the-jobsite humour, mild self-deprecation about the trade. NOT corporate cleverness or punny headlines. The bourbon-and-the-cedar-deck line works; "Fence-tastic Findings!" does not.
- **Have a take on the brand-named middle ground.** Polycarbonate-roof pergolas, mid-grade Trex, $99 "Premium Listings" on directory sites — these are the half-measures customers ask about, and a strong article tells them whether the half-measure is honest or a compromise.

The five Final Pass rules below still apply. Opinionation is what makes them survive the editor — without a point of view, the article reads as competent but forgettable.

### Final Pass — every article must meet all five
- Sound spoken, not constructed.
- Feel experienced, not researched.
- Be clear, not polished.
- Be useful, not impressive.
- Read like a knowledgeable local operator explaining something to another person.

If any sentence feels like AI wrote it, rewrite it until it doesn't.

## Local Expert Rule

Specific to the local-resource sites (Fence, Fire Protection, Compliance, Flooring, etc.) — this is where AI content most often gets caught and ranked poorly.

Write like someone who has spent 10 years talking to customers in this industry.

**Prefer:**
- Observations.
- Stories.
- Practical advice.
- Trade-offs.
- Things customers commonly misunderstand.

**Avoid:**
- Textbook explanations.
- Dictionary definitions.
- Generic introductions.
- SEO filler paragraphs.

**Start with the most useful information first. Don't make the reader work to find the answer.** If the article title is a question, the first paragraph should answer it directly. Reasoning, exceptions, and edge cases come after — never before.

### Image strategy

Pull from the verified working pool (`D9kfezvATOY`, `gmRXcuYNV6Q`, `bzqc09sK_D0`, `hJtoxKXnCyo`, `nNBU-9VxSWs`, `Jl5wx2QVrSs`, `7U1q8b4hinQ`, `XFLY0Yp3Gow`, `oVueqggYsbU`, `KNBDHM8XZG0`, `rCHO0tFxLlk`). Reuse is acceptable — the existing 10 articles already reuse heavily. Send new Unsplash URLs when you want category-specific photos (e.g., a pergola photo for the pergola bucket).

## Decision Required Before Day 1

The "Best X Contractors in Nashville" articles (8 total across the categories) work in one of two modes:

- **Mode A — Editorial roundup:** the article lists 5-8 real Nashville deck/patio/pergola/etc. builders pulled from public Google Maps results, with no fabricated data, same `source: 'google-maps'` pattern we used on the contractor directory. Honest and useful. Requires per-article research time (~30 min each).
- **Mode B — Buyer's guide:** no specific contractor names. The article reads as "what to look for when hiring a Nashville X contractor — 8 questions, 4 red flags, 3 questions to ask before signing." High commercial intent, fast to write, no research dependency.

I recommend **A for Gate Installation Companies** (we already have gate contractors in the directory, easy to anchor against), and **B for the other 7** until the directory has been expanded to list deck/patio/pergola/etc. contractors. Approve or override at start of execution.

## Strategic Upgrade Paths (Optional, Not Required)

These aren't part of the daily-article cadence but are worth noting:

1. **Expand `SERVICE_CATEGORIES` in `src/data/contractors.ts`** to add `deck`, `patio`, `pergola`, `outdoor-kitchen`, `landscaping`, `sod`, `pool` so the directory itself can list those local businesses. Pairs with Mode A roundup articles.
2. **Add a `/outdoor-living` hub page** that lists all 8 adjacent service categories as cards, each linking to its top article. Separates fence-core content from adjacent-service content while keeping everything on one domain.
3. **Promote the highest-traffic articles to dedicated landing pages** with their own callback forms (we already have `CallbackForm` for this).

Mention these in conversation if/when traffic data justifies them.

## Verification

- **Build:** `npm run build` after each article — TypeScript catches missing fields in the `RESOURCES` shape.
- **Sitemap:** confirm the new slug appears in `public/sitemap.xml` after `npm run build` (the prebuild script regenerates it).
- **Render:** load `/resources/<slug>` locally with `npm run dev` and verify the body sections render, internal links route correctly via React Router, and `imageAlt` is present.
- **Indexing:** after deploy, submit the new URL in Google Search Console → URL Inspection → Request Indexing. The sitemap will eventually pick it up, but manual submission speeds initial crawl.
- **Voice spot-check:** read each article alongside `best-fences-for-dogs` and `fence-cost-breakdown` to confirm voice consistency before commit.

## What This Plan Does NOT Cover

- Expanding the directory itself with new SERVICE_CATEGORIES — separate task if/when the user wants directory monetization across adjacent services
- Building a separate domain for outdoor-living content — currently assumed all on `nashvillefenceguide.com`
- Lead-routing or callback-form integration for the new article categories — assumed to use existing `CallbackForm` and `/api/notify` pipeline as-is

---

## Publishing Status

Tracked here so the next article in the queue is always one grep away. Update on each commit.

### Already shipped (out of plan order — earlier sessions / approved jumps ahead)

- **Driveway Gates #1 — How Much Does a Driveway Gate Cost in Nashville?** → `/resources/driveway-gate-cost-nashville`
- **Driveway Gates #6 — Best Driveway Gate Companies in Nashville** → `/resources/best-gate-installation-companies-nashville` (Sunday Week 1 — Editorial Roundup Mode A; rebranded "Best Driveway Gate Companies")
- **Deck Builders #6 — Best Deck Builders in Nashville** → `/resources/best-deck-builders-nashville` (Mode A — 3 ranked picks)

### Week 1 progress

| Day | Planned title | Status | Notes |
|-----|---------------|--------|-------|
| 1 | How Much Does a Driveway Gate Cost in Nashville? | ✅ shipped | `/resources/driveway-gate-cost-nashville` |
| 2 | Pool Safety Barrier Requirements Every Homeowner Should Know | ⚠ shipped under alt title | Published as `/resources/pool-safety-barriers-nashville` titled "Pool Safety Barriers in Nashville: Mesh, Aluminum, Glass, or Vinyl?" — angle is buyer's-guide comparison, not requirements deep-dive (existing `/resources/pool-fence-safety-tn` already covers the laws). If you want a separate requirements article, ask. |
| 3 | Should You Build a Fence Before or After a New Deck? | ✅ shipped | `/resources/fence-before-or-after-deck-nashville` — Deck Builders #1, first article written under the new Human Voice Editor + Local Expert Rule pass |
| 4 | Driveway Gate Permits in Nashville | ✅ shipped | `/resources/driveway-gate-permits-nashville` — Driveway Gates #7, voice-edit pass on the permit angle (electrical permit + ROW setback as the two cost-traps most homeowners miss) |
| 5 | How Much Does a New Deck Cost in Nashville? | ✅ shipped | `/resources/deck-cost-nashville` — Deck Builders #5, anchored to the driveway-gate-cost article structure (four tiers + per-sqft table + line items + drivers + hidden costs + maintenance + property value + how to read a quote + red flags + close) |
| 6 | Composite vs Wood Decking: Which Works Better With Privacy Fencing? | ✅ shipped | `/resources/composite-vs-wood-decking-privacy-fence` — Deck Builders #3, comparison angle (color drift, heat, clearance, 10-yr maintenance bill). First article with the all-questions H2 format the user requested. |
| 7 | Best Gate Installation Companies in Nashville | ✅ shipped | `/resources/best-gate-installation-companies-nashville` |

### Week 2 progress

| Day | Planned title | Status | Notes |
|-----|---------------|--------|-------|
| 8 | Pergola vs Covered Patio: Which Actually Keeps You Dry in Nashville? | ✅ shipped | `/resources/pergola-vs-covered-patio-nashville` — Pergola Builders #2, first article under the "Be Very Opinionated" rule added to the voice section. Strong take: bare pergola is a sculpture, covered patio is the boring right answer 80% of the time, polycarbonate retrofit is duct tape, motorized louvered pergola is the only middle ground that works. |
| 9 | Best Plants to Grow Along a Privacy Fence in Nashville | ✅ shipped | `/resources/best-plants-privacy-fence-nashville` — Landscaping #2, opens the Landscaping category cluster. Wednesday how-to slot. Hard takes: Leyland cypress dies on Williamson County schedule, running bamboo is a lawsuit waiting to happen, English ivy + wisteria kill cedar fences, climbing hydrangea is the right answer if you can wait four years. Real botanical names + price ranges per linear foot. |
| 10 | Pergola Permits in Metro Nashville: The 200 Sqft Trap | ✅ shipped | `/resources/pergola-permits-nashville` — Pergola Builders #7, Thursday compliance/permit slot. Direct sequel to Tuesday's Pergola vs Covered Patio. Strong takes on the 200 sqft loophole, HOA approval being the real long pole, motorized louvered pergolas getting rejected outright in 2025-2026 Williamson ARC reviews, and the 60%/5%/0% pattern for skipping permits across Metro Davidson / Belle Meade / Williamson HOAs. |
| 11 | How Much Does Landscaping Cost in Nashville? | ✅ shipped | `/resources/landscaping-cost-nashville` — Landscaping #5, Friday commercial-intent slot. Tightens the Landscaping cluster started with the plants article on Day 9. Parallel to deck-cost-nashville in shape (4 tiers + per-element table + line items + drivers + hidden costs + maintenance + property value + how to read a quote + red flags + close). Hard takes on plant size class, design fee as the highest-ROI line, and the annual maintenance math homeowners forget. |
