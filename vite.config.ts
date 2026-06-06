import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { CITY } from './src/config/city'

/**
 * Substitutes %CITY_*% tokens in index.html with the active CITY config so
 * a new city deploy gets its own title, description, OG, and GA4 tag
 * without editing index.html. Tokens are expanded at transform time so
 * crawlers see the static HTML without needing JS to hydrate.
 */
function cityHtmlTransform(): Plugin {
  const replacements: Record<string, string> = {
    '%CITY_NAME%': CITY.name,
    '%CITY_STATE%': CITY.state,
    '%CITY_STATE_ABBR%': CITY.stateAbbr,
    '%CITY_PRIMARY_COUNTY%': CITY.primaryCounty,
    '%CITY_SECONDARY_COUNTY%': CITY.secondaryCounty,
    '%CITY_SITE_NAME%': CITY.siteName,
    '%CITY_SITE_URL%': CITY.siteUrl,
    '%CITY_DOMAIN%': CITY.domain,
    '%CITY_GA4_ID%': CITY.ga4PropertyId,
    '%CITY_PRIMARY_KEYWORD%': CITY.primaryKeyword,
  }
  return {
    name: 'city-html-transform',
    transformIndexHtml(html) {
      let out = html
      for (const [token, value] of Object.entries(replacements)) {
        out = out.split(token).join(value)
      }
      return out
    },
  }
}

export default defineConfig({
  plugins: [react(), cityHtmlTransform()],
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'lucide-react': ['lucide-react'],
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
})
