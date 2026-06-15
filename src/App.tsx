import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate, useParams } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/layout/ScrollToTop'
import StickyMobileCTA from './components/layout/StickyMobileCTA'
import Home from './pages/Home'

const GetQuotes = lazy(() => import('./pages/GetQuotes'))
const CostGuide = lazy(() => import('./pages/CostGuide'))
const Permits = lazy(() => import('./pages/Permits'))
const Neighborhoods = lazy(() => import('./pages/Neighborhoods'))
const Contractors = lazy(() => import('./pages/Contractors'))
const ContractorProfile = lazy(() => import('./pages/ContractorProfile'))
const CompaniesCategory = lazy(() => import('./pages/CompaniesCategory'))
const Resources = lazy(() => import('./pages/Resources'))
const FenceTypes = lazy(() => import('./pages/FenceTypes'))
const Services = lazy(() => import('./pages/Services'))
const Advertise = lazy(() => import('./pages/Advertise'))
const SubmitListing = lazy(() => import('./pages/SubmitListing'))
const PoolFenceCode = lazy(() => import('./pages/PoolFenceCode'))
const HistoricOverlays = lazy(() => import('./pages/HistoricOverlays'))
const About = lazy(() => import('./pages/About'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Terms = lazy(() => import('./pages/Terms'))

/**
 * Phase 1 migration: old /fence-types/<slug> URLs redirect to the new
 * /services/<service-slug> shape. Server-side 301s live in vercel.json;
 * this client-side <Navigate> is the second layer so SPA navigation
 * resolves to the same place.
 */
const FENCE_TYPE_TO_SERVICE: Record<string, string> = {
  'wood-privacy': 'wood-fence',
  vinyl: 'vinyl-fence',
  aluminum: 'aluminum-fence',
  'chain-link': 'chain-link-fence',
  'horizontal-privacy': 'horizontal-cedar-fence',
  'farm-ranch': 'farm-ranch-fence',
  'wrought-iron': 'wrought-iron-fence',
  'pet-fence': 'pet-fence',
  'hidden-pet-fence': 'hidden-pet-fence',
  'pool-safety': 'pool-fence',
}

function FenceTypeRedirect() {
  const { slug } = useParams<{ slug: string }>()
  const target = slug ? FENCE_TYPE_TO_SERVICE[slug] : undefined
  if (target) return <Navigate to={`/services/${target}`} replace />
  // Slugs without a mapping (farm-ranch, wrought-iron — Phase 2 backfill)
  // fall through to the existing FenceTypes page for now.
  return <FenceTypes />
}

function RouteLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-forest-500 border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 pb-20 lg:pb-0">
        <Suspense fallback={<RouteLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/get-quotes" element={<GetQuotes />} />
            <Route path="/cost-guide" element={<CostGuide />} />
            <Route path="/permits" element={<Permits />} />
            <Route path="/service-areas" element={<Neighborhoods />} />
            <Route path="/service-areas/:slug" element={<Neighborhoods />} />
            <Route path="/contractors" element={<Contractors />} />
            <Route path="/contractors/:slug" element={<ContractorProfile />} />
            <Route path="/companies" element={<Navigate to="/contractors" replace />} />
            <Route path="/companies/:category" element={<CompaniesCategory />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/:slug" element={<Resources />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<Services />} />
            <Route path="/services/:slug/:area" element={<Services />} />
            <Route path="/fence-types" element={<Navigate to="/services/fence-installation" replace />} />
            <Route path="/fence-types/:slug" element={<FenceTypeRedirect />} />
            <Route path="/advertise" element={<Advertise />} />
            <Route path="/submit-listing" element={<SubmitListing />} />
            <Route path="/repair" element={<Navigate to="/services/fence-repair" replace />} />
            <Route path="/commercial-fencing" element={<Navigate to="/services/commercial-fencing" replace />} />
            <Route path="/pool-fence-code" element={<PoolFenceCode />} />
            <Route path="/historic-overlays" element={<HistoricOverlays />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  )
}

export default App
