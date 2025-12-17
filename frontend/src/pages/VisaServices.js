
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPassport, FaFileAlt, FaCreditCard, FaCalendarCheck, FaEdit } from 'react-icons/fa';
import VisaCard from '../components/VisaCard';
import VisaInquiryModal from '../components/VisaInquiryModal';

const popularVisas = [
  { country: 'United States', image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=800&q=80', isUrgent: true },
  { country: 'Schengen Area', image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=400&q=80' },
  { country: 'United Kingdom', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=400&q=80' },
  { country: 'Canada', image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=400&q=80' },
  { country: 'Australia', image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=400&q=80' },
  { country: 'New Zealand', image: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&w=800&q=80' },
];

const eVisas = [
  'Vietnam', 'Indonesia', 'Thailand', 'Sri Lanka', 'Georgia', 'UAE', 'Singapore', 'Turkey'
];

const processSteps = [
  {
    icon: FaFileAlt,
    title: "1. Document Review",
    description: "Share your passport and initial details. We review everything and identify any missing documents."
  },
  {
    icon: FaEdit,
    title: "2. Application Drafting",
    description: "We verify requirements and fill out your application draft (1-2 iterations) for your approval."
  },
  {
    icon: FaCreditCard,
    title: "3. Payment & Submission",
    description: "You make the payment to Vacation Vibes. We then submit your form and pay the official visa fees."
  },
  {
    icon: FaCalendarCheck,
    title: "4. Appointment & Checklist",
    description: "We book your appointment and provide a final, comprehensive checklist of documents to carry."
  }
];

const serviceFees = [
  {
    region: "USA, Canada, UK, Australia, New Zealand",
    fee: "₹4,000",
    note: "per person + Visa Fees"
  },
  {
    region: "Schengen Area",
    fee: "₹2,500",
    note: "per person + Visa Fees (paid at VFS)"
  },
  {
    region: "Vietnam, Indonesia",
    fee: "₹1,500",
    note: "per person + Visa Fees"
  },
  {
    region: "Thailand, Sri Lanka",
    fee: "₹500",
    note: "per person + Visa Fees"
  }
];

export default function VisaServices() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState('');

  const handleEnquire = (destination) => {
    setSelectedDestination(destination);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-rich-black pt-20">

      {/* Hero */}
      <section className="relative py-24 px-4 text-center bg-gradient-to-b from-gray-900 to-rich-black border-b border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-luxury-gold uppercase tracking-[0.2em] text-sm font-bold">Global Access</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 mt-2">Visa Process Made Simple</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Expert assistance for complex visa applications and urgent appointments.
          </p>

          <div className="inline-flex items-center gap-3 px-8 py-4 bg-luxury-gold/10 border border-luxury-gold/30 rounded-full mb-4">
            <span className="text-luxury-gold font-bold text-3xl">99.3%</span>
            <span className="text-gray-200 text-lg font-medium tracking-wide">Track Record of Successful Approvals</span>
          </div>
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-4 py-16 border-b border-white/5">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-white mb-4">How It Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A seamless, transparent process designed to get your visa approved with minimal stress.
            <br />
            <span className="text-sm text-gray-300 italic mt-3 block">* Process steps may vary slightly based on country specific requirements.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-luxury-gold/50 transition-colors text-center group"
            >
              <div className="w-14 h-14 mx-auto bg-luxury-gold/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-luxury-gold/20 transition-colors">
                <step.icon className="text-luxury-gold text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Transparent Pricing */}
      <section className="max-w-7xl mx-auto px-4 py-16 border-b border-white/5 bg-white/[0.02]">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-white mb-4">Transparent Pricing</h2>
          <p className="text-gray-400">Clear service charges with no hidden costs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceFees.map((tier, index) => (
            <div key={index} className="bg-rich-black p-6 rounded-xl border border-white/10 flex flex-col items-center text-center hover:border-luxury-gold/50 hover:bg-white/5 transition-all duration-300 group cursor-default">
              <h3 className="text-white font-bold text-lg mb-4 h-12 flex items-center justify-center group-hover:text-luxury-gold transition-colors">{tier.region}</h3>
              <div className="text-3xl font-bold text-luxury-gold mb-2">{tier.fee}</div>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Service Charge</p>
              <div className="mt-4 pt-4 border-t border-white/10 w-full">
                <p className="text-xs text-gray-400 italic">{tier.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-serif font-bold text-white mb-8 border-l-4 border-luxury-gold pl-4">Premium Processing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularVisas.map((visa, i) => (
            <VisaCard key={i} {...visa} onEnquire={handleEnquire} delay={i * 0.1} />
          ))}
        </div>
      </section>

      {/* E-Visas List */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <h2 className="text-2xl font-serif font-bold text-white mb-8 border-l-4 border-luxury-gold pl-4">E-Visa / On Arrival Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {eVisas.map((country, i) => (
            <button
              key={i}
              onClick={() => handleEnquire(country)}
              className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-left text-gray-300 hover:text-luxury-gold transition-colors font-medium"
            >
              {country}
            </button>
          ))}
        </div>
      </section>

      {/* Footer Link to Docs */}
      <section className="text-center pb-20">
        <Link to="/visa-documents" className="text-sm text-gray-300 hover:text-luxury-gold transition-colors underline">
          Already have an appointment? View Document Checklists
        </Link>
      </section>

      <VisaInquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultDestination={selectedDestination}
      />
    </div>
  );
}
