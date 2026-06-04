import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/layout/ScrollToTop'
import Home from './pages/Home'
import GetQuotes from './pages/GetQuotes'
import CostGuide from './pages/CostGuide'
import Permits from './pages/Permits'
import Neighborhoods from './pages/Neighborhoods'
import Contractors from './pages/Contractors'
import Resources from './pages/Resources'
import FenceTypes from './pages/FenceTypes'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
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
      </main>
      <Footer />
    </div>
  )
}

export default App
