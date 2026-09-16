import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Nav from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import NewArrivals from './pages/NewArrivals'
import Collections from './pages/Collections'
import Tailoring from './pages/Tailoring'
import Lookbook from './pages/Lookbook'
import OurStory from './pages/OurStory'
import BookAppointment from './pages/BookAppointment'
import Services from './pages/Services'
import CollectionPage from './pages/CollectionPage'
import { collections } from './data/collections'
import FAQ from './pages/FAQ'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import NotFound from './pages/NotFound'

function PageTitle() {
  const location = useLocation()
  const titles = {
    '/': 'Outfit Amman | Modern Elegance & Bespoke Tailoring',
    '/new-arrivals': 'New Arrivals — Outfit Amman',
    '/collections': 'Collections — Outfit Amman',
    '/tailoring': 'Bespoke Tailoring — Outfit Amman',
    '/lookbook': 'Lookbook 2026 — Outfit Amman',
    '/our-story': 'Our Story — Outfit Amman',
    '/book-appointment': 'Book an Appointment — Outfit Amman',
    '/services': 'Client Care — Outfit Amman',
    '/faq': 'Frequently Asked Questions — Outfit Amman',
    '/cart': 'Shopping Bag — Outfit Amman',
    '/login': 'Sign In — Outfit Amman',
    '/privacy-policy': 'Privacy Policy — Outfit Amman',
    '/terms': 'Terms of Service — Outfit Amman',
  }
  const col = location.pathname.match(/^\/collections\/(.+)$/) ? collections.find((c) => c.slug === location.pathname.split('/')[2]) : null
  const title = col ? `${col.title} — Outfit Amman` : (titles[location.pathname] || 'Page not found — Outfit Amman')
  const htmlTitle = document.getElementById('page-title')
  if (htmlTitle) htmlTitle.textContent = title
  return null
}

function App() {
  return (
    <>
      <Nav />
      <ScrollToTop />
      <PageTitle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/collections/:slug" element={<CollectionPage />} />
        <Route path="/tailoring" element={<Tailoring />} />
        <Route path="/lookbook" element={<Lookbook />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/services" element={<Services />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App