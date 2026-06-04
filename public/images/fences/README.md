# Local Image Library

This folder is where curated fence images live once you've graduated from
remote stock. Two reasons to localize:

1. **Performance** — same-origin images bypass the third-party CDN, ship
   over HTTP/2 with your other assets, and never block on remote latency.
2. **Reliability** — the image set is frozen at deploy time. No risk of a
   third-party photo being taken down or rate-limited.

## Workflow

1. Run `npm run fetch-images` once with a Pexels key to get topical
   candidates surfaced in `src/data/imageUrls.ts`.
2. Open each URL in a browser, save the ones you like to this folder
   using the naming convention below.
3. Edit `src/data/imageUrls.ts` and swap the remote URL for a local path:

   ```ts
   // before
   'wood-privacy': 'https://images.pexels.com/photos/123/...jpeg',
   // after
   'wood-privacy': '/images/fences/wood-privacy.jpg',
   ```

Vite serves files in `public/` from the site root, so the leading slash
path is the public URL.

## Naming convention

| Slot | Filename pattern |
|---|---|
| Hero | `hero.jpg` |
| Fence type | `fence-types/{slug}.jpg` (e.g. `fence-types/wood-privacy.jpg`) |
| Neighborhood | `neighborhoods/{slug}.jpg` (e.g. `neighborhoods/belle-meade.jpg`) |
| Resource | `resources/{slug}.jpg` |
| Gallery | `gallery/01.jpg` through `gallery/09.jpg` |

## Image specs

- **Format**: JPEG, quality 80–85
- **Hero**: 1600 × 1920 (5:6 portrait crop area)
- **Cards**: 1200 × 900 (4:3) or 1600 × 1000 (16:10) depending on slot
- **Gallery**: 900 × 900 (1:1) — masonry handles odd ratios but square
  loads cleanest
- **File size**: target under 200 KB after compression. Use
  [Squoosh](https://squoosh.app) or `sharp` for batch processing.

## Consistency

`SafeImage` applies `saturate(0.95) contrast(1.03)` to every image so
photos from different photographers blend into one visual family.
If you commission custom photos that are already color-graded, pass
`<SafeImage … raw />` to skip the filter.
