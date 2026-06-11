/**
 * One-off icon generator.
 *
 * Renders public/favicon.svg into the raster favicon set Google's SERP
 * crawler actually reads:
 *
 *   favicon-48.png         48×48   — Google SERP minimum
 *   favicon-96.png         96×96   — Google SERP / Android
 *   favicon-192.png       192×192  — manifest icon
 *   favicon-512.png       512×512  — manifest icon / PWA install
 *   apple-touch-icon.png  180×180  — Apple + Google mobile SERP
 *
 * Re-run after changing favicon.svg:
 *   node scripts/generate-favicons.mjs
 */
import sharp from 'sharp'
import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const SRC = join(ROOT, 'public', 'favicon.svg')
const OUT = join(ROOT, 'public')

const TARGETS = [
  { size: 48,  name: 'favicon-48.png' },
  { size: 96,  name: 'favicon-96.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 192, name: 'favicon-192.png' },
  { size: 512, name: 'favicon-512.png' },
]

const svg = await readFile(SRC)

let png48 = null
for (const { size, name } of TARGETS) {
  const out = join(OUT, name)
  const buf = await sharp(svg, { density: 384 })
    .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toBuffer()
  await writeFile(out, buf)
  if (size === 48) png48 = buf
  console.log(`✓ ${name}  (${size}×${size})`)
}

// favicon.ico — single 48×48 PNG wrapped in an ICO container. Browsers and
// Google's crawler still hit /favicon.ico directly even when link tags
// point elsewhere, so we ship a real ICO at the root rather than relying
// on the .ico extension on a plain PNG.
//
// ICO layout for a single PNG entry:
//   [6 bytes ICONDIR]       reserved(2)=0, type(2)=1, count(2)=1
//   [16 bytes ICONDIRENTRY] w(1), h(1), colors(1)=0, reserved(1)=0,
//                            planes(2)=1, bpp(2)=32, size(4), offset(4)
//   [PNG bytes]
const header = Buffer.alloc(6)
header.writeUInt16LE(0, 0)
header.writeUInt16LE(1, 2)
header.writeUInt16LE(1, 4)

const entry = Buffer.alloc(16)
entry.writeUInt8(48, 0)                // width
entry.writeUInt8(48, 1)                // height
entry.writeUInt8(0, 2)                 // color count (0 = truecolor)
entry.writeUInt8(0, 3)                 // reserved
entry.writeUInt16LE(1, 4)              // color planes
entry.writeUInt16LE(32, 6)             // bits per pixel
entry.writeUInt32LE(png48.length, 8)   // png data size
entry.writeUInt32LE(22, 12)            // offset to png data (6 + 16)

await writeFile(join(OUT, 'favicon.ico'), Buffer.concat([header, entry, png48]))
console.log(`✓ favicon.ico  (48×48 PNG-in-ICO)`)

console.log('\nDone. Re-run after changing favicon.svg.')
