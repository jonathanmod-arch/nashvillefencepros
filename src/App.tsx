import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
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
const Resources = lazy(() => import('./pages/Resources'))
const FenceTypes = lazy(() => import('./pages/FenceTypes'))
const Advertise = lazy(() => import('./pages/Advertise'))
const SubmitListing = lazy(() => import('./pages/SubmitListing'))
const Repair = lazy(() => import('./pages/Repair'))
const CommercialFencing = lazy(() => import('./pages/CommercialFencing'))
const PoolFenceCode = lazy(() => import('./pages/PoolFenceCode'))
const HistoricOverlays = lazy(() => import('./pages/HistoricOverlays'))
const About = lazy(() => import('./pages/About'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Terms = lazy(() => import('./pages/Terms'))

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
            <Route path="/fence-types" element={<FenceTypes />} />
            <Route path="/fence-types/:slug" element={<FenceTypes />} />
            <Route path="/advertise" element={<Advertise />} />
            <Route path="/submit-listing" element={<SubmitListing />} />
            <Route path="/repair" element={<Repair />} />
            <Route path="/commercial-fencing" element={<CommercialFencing />} />
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
