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

// Unified color grading — pulls multi-photographer stock into one visual family.
// Slight saturation drop + slight contrast lift = warmer, more editorial feel.
const CONSISTENCY_FILTER = 'saturate(0.95) contrast(1.03)'

type Props = ImgHTMLAttributes<HTMLImageElement> & { src: string; raw?: boolean }

export default function SafeImage({ src, alt = '', className, style, raw, ...rest }: Props) {
  const [errored, setErrored] = useState(false)
  const showFallback = errored
  return (
    <img
      src={showFallback ? FALLBACK : src}
      alt={alt}
      loading="lazy"
      decoding="async"
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

