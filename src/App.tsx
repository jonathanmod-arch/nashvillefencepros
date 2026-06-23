import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate, useParams } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/layout/ScrollToTop'
import StickyMobileCTA from './components/layout/StickyMobileCTA'
import Home from './pages/Home'
import { fenceTypeServiceUrl } from './data/siteData'

const GetQuotes = lazy(() => import('./pages/GetQuotes'))
const CostGuide = lazy(() => import('./pages/CostGuide'))
const Permits = lazy(() => import('./pages/Permits'))
const Neighborhoods = lazy(() => import('./pages/Neighborhoods'))
const Contractors = lazy(() => import('./pages/Contractors'))
const ContractorProfile = lazy(() => import('./pages/ContractorProfile'))
const Resources = lazy(() => import('./pages/Resources'))
const Services = lazy(() => import('./pages/Services'))
const Advertise = lazy(() => import('./pages/Advertise'))
const SubmitListing = lazy(() => import('./pages/SubmitListing'))
const PoolFenceCode = lazy(() => import('./pages/PoolFenceCode'))
const HistoricOverlays = lazy(() => import('./pages/HistoricOverlays'))
const About = lazy(() => import('./pages/About'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Terms = lazy(() => import('./pages/Terms'))

// Legacy /fence-types/<slug> SPA fallback. Server-side 301s in vercel.json
// handle external backlinks before React loads; this in-app Navigate is
// only the safety net for the rare case someone reaches an old URL via
// SPA navigation. Removed FenceTypes page itself in this commit because
// every fence-type slug maps cleanly to a /services/<slug> URL.
function FenceTypeRedirect() {
  const { slug } = useParams<{ slug: string }>()
  return <Navigate to={slug ? fenceTypeServiceUrl(slug) : '/services/fence-installation'} replace />
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
