import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import QuoteModal from './components/QuoteModal';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// 6 Dedicated Internal Demos
import TextileDemo from './demos/TextileDemo';
import RestaurantDemo from './demos/RestaurantDemo';
import HealthcareDemo from './demos/HealthcareDemo';
import RealEstateDemo from './demos/RealEstateDemo';
import PhysioDemo from './demos/PhysioDemo';
import HousekeepingDemo from './demos/HousekeepingDemo';

function AppLayout() {
  const location = useLocation();
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedPlanForQuote, setSelectedPlanForQuote] = useState('booking');

  // Check if current route is an internal demo page
  const isDemoRoute = location.pathname.startsWith('/work/') && location.pathname !== '/work';

  const handleOpenQuote = (planId = 'booking') => {
    setSelectedPlanForQuote(typeof planId === 'string' ? planId : 'booking');
    setIsQuoteOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5F0] text-[#17191B]">
      <ScrollToTop />

      {/* Show Agency Navbar only on main agency pages (demos have their own dedicated navigation) */}
      {!isDemoRoute && <Navbar onOpenQuote={() => handleOpenQuote('booking')} />}

      {/* Main Content Area */}
      <main className="flex-1">
        <Routes>
          {/* Main Agency Routes */}
          <Route path="/" element={<Home onOpenQuote={handleOpenQuote} />} />
          <Route path="/services" element={<Services onOpenQuote={handleOpenQuote} />} />
          <Route path="/pricing" element={<Pricing onOpenQuote={handleOpenQuote} />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* 6 Dedicated Internal Demo Websites */}
          <Route path="/work/textile-demo" element={<TextileDemo />} />
          <Route path="/work/restaurant-demo" element={<RestaurantDemo />} />
          <Route path="/work/healthcare-demo" element={<HealthcareDemo />} />
          <Route path="/work/real-estate-demo" element={<RealEstateDemo />} />
          <Route path="/work/physiocare-demo" element={<PhysioDemo />} />
          <Route path="/work/housekeeping-demo" element={<HousekeepingDemo />} />

          {/* 404 Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Show Agency Footer only on main agency pages (demos have their own dedicated footers) */}
      {!isDemoRoute && <Footer />}

      {/* Global Interactive Quote Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialPlan={selectedPlanForQuote}
      />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

