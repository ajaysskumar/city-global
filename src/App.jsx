import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ServiceDetail from './pages/ServiceDetail'
import GalleryDetail from './pages/GalleryDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
        <Route path="/gallery/:id" element={<GalleryDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <Team />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
