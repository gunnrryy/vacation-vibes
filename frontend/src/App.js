import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ItineraryMarketplace from './pages/ItineraryMarketplace';
import VisaServices from './pages/VisaServices';
import LuxuryPackages from './pages/LuxuryPackages';
import Testimonials from './pages/Testimonials';
import TermsOfUse from './pages/TermsOfUse';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Contact from './pages/Contact';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Sticky header and separator for desktop */}
        <div className="sticky top-0 z-50 w-full">
          <Navbar />
        </div>
        {/* Main content scrolls internally, footer sticky only on desktop */}
        <div className="flex-1 overflow-y-auto w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/itineraries" element={<ItineraryMarketplace />} />
            <Route path="/visa-services" element={<VisaServices />} />
            <Route path="/luxury-packages" element={<LuxuryPackages />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/terms" element={<TermsOfUse />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <div className="hidden md:block sticky bottom-0 z-40 w-full">
          <Footer />
        </div>
        <div className="block md:hidden w-full">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
