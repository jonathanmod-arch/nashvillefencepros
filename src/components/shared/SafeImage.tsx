import { useState, ImgHTMLAttributes } from 'react'

const FALLBACK = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1B4332"/>
      <stop offset="100%" stop-color="#0D261D"/>
    </linearGradient>
  </defs>
  <rect width="600" height="450" fill="url(#g)"/>
  <g stroke="#D4A373" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.85">
    <path d="M120 360 V200 l30 -30 30 30 V360 M180 360 V200 l30 -30 30 30 V360 M240 360 V200 l30 -30 30 30 V360 M300 360 V200 l30 -30 30 30 V360 M360 360 V200 l30 -30 30 30 V360 M420 360 V200 l30 -30 30 30 V360 M100 240 H480 M100 320 H480"/>
  </g>
  <text x="300" y="410" text-anchor="middle" fill="#D4A373" font-family="system-ui,sans-serif" font-size="18" font-weight="700" letter-spacing="0.18em">NASHVILLE FENCE PROS</text>
</svg>
`)}`

const CONSISTENCY_FILTER = 'saturate(0.95) contrast(1.03)'

const DEFAULT_WIDTHS = [320, 480, 768, 1024, 1280]
const DEFAULT_SIZES = '(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw'

const isUnsplash = (s: string): boolean =>
  s.includes('images.unsplash.com') || /unsplash\.com\/photos\/[^/]+\/download/.test(s)

const isPexels = (s: string): boolean => s.includes('images.pexels.com')

function normalize(src: string): string {
  if (isUnsplash(src) && !/[?&]auto=/.test(src)) {
    return src.includes('?') ? `${src}&auto=format` : `${src}?auto=format`
  }
  return src
}

function withWidth(src: string, w: number): string {
  if (/[?&]w=\d+/.test(src)) {
    return src.replace(/([?&])w=\d+/, `$1w=${w}`)
  }
  if (isUnsplash(src) || isPexels(src)) {
    return src.includes('?') ? `${src}&w=${w}` : `${src}?w=${w}`
  }
  return src
}

function buildSrcSet(src: string, widths: number[]): string | undefined {
  if (!isUnsplash(src) && !isPexels(src)) return undefined
  return widths.map((w) => `${withWidth(src, w)} ${w}w`).join(', ')
}

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  src: string
  raw?: boolean
  priority?: boolean
  sizes?: string
  widths?: number[]
}

export default function SafeImage({
  src,
  alt = '',
  className,
  style,
  raw,
  priority,
  sizes,
  widths,
  ...rest
}: Props) {
  const [errored, setErrored] = useState(false)
  const showFallback = errored
  const finalSrc = showFallback ? FALLBACK : normalize(src)
  const srcSet = showFallback ? undefined : buildSrcSet(finalSrc, widths ?? DEFAULT_WIDTHS)
  return (
    <img
      src={finalSrc}
      srcSet={srcSet}
      sizes={srcSet ? (sizes ?? DEFAULT_SIZES) : sizes}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      onError={() => setErrored(true)}
      className={className}
      style={{
        ...(showFallback || raw ? {} : { filter: CONSISTENCY_FILTER }),
        ...style,
      }}
      {...rest}
    />
  )
}
