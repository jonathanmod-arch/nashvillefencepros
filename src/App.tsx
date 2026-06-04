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
const Resources = lazy(() => import('./pages/Resources'))
const FenceTypes = lazy(() => import('./pages/FenceTypes'))

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
            <Route path="/neighborhoods" element={<Neighborhoods />} />
            <Route path="/neighborhoods/:slug" element={<Neighborhoods />} />
            <Route path="/contractors" element={<Contractors />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/:slug" element={<Resources />} />
            <Route path="/fence-types" element={<FenceTypes />} />
            <Route path="/fence-types/:slug" element={<FenceTypes />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  )
}

export default App
