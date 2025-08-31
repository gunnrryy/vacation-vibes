import React from 'react';
import { FaPassport, FaIdCard } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Home() {
  // --- Our Journey and Our Services content ---
  const yearsTraveling = new Date().getFullYear() - 2013;
  const ourJourney = `At Vacation Vibes LLP, we are passionate about travel and believe it has the power to change lives. Our founder, Zarna, has been an avid traveler for over ${yearsTraveling} years, exploring the globe and experiencing different cultures and lifestyles. Her love for travel and desire to share these experiences led to the creation of Vacation Vibes. From the very beginning, our goal has been to create unforgettable journeys that inspire and transform our clients. We strive to provide a one-stop shop for all your travel needs, with a focus on luxury, personalization, and seamless service.`;

  const ourServices = [
    {
      title: 'Accommodations',
      icon: '🏨',
      desc: 'Luxury hotels, boutique stays, and handpicked properties for every traveler.',
    },
    {
      title: 'Visa Process Assistance',
      icon: <FaIdCard className="text-4xl md:text-5xl text-[#fbbf24]" />, // react-icons
      desc: 'Expert guidance and hassle-free paperwork for all your visa needs.',
    },
    {
      title: 'Flights',
      icon: '✈️',
      desc: 'Best flight options tailored to your budget, preferences, and schedule.',
    },
    {
      title: 'Passport Application',
      icon: <FaPassport className="text-4xl md:text-5xl text-[#fbbf24]" />, // react-icons
      desc: 'Smooth new or renewal passport assistance, paperwork made easy.',
    },
    {
      title: 'Sightseeings & Excursions',
      icon: '🌄',
      desc: 'Iconic destinations, hidden gems, and curated local experiences.',
    },
    {
      title: 'Transfers & Rentals',
      icon: '🚗',
      desc: 'Airport transfers, car rentals, and point-to-point convenience.',
    },
    {
      title: 'Forex Assistance',
      icon: '💱',
      desc: 'Competitive rates and easy foreign currency procurement.',
    },
  ];
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 flex flex-col items-center text-white">
      {/* Our Journey Section - now at the top */}
      <motion.section
        className="w-full bg-gray-900/80 py-16 px-4 flex flex-col md:flex-row items-center justify-center gap-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="w-full max-w-6xl mx-auto">
          <div className="flex-1 flex flex-col items-center">
          <h2 className="text-3xl font-extrabold text-[#fbbf24] mb-4 text-center">Our Journey</h2>
          <blockquote className="italic text-gray-300 text-lg mb-6 border-l-4 border-yellow-400 pl-4 ">{ourJourney}</blockquote>
          <div className="flex items-center gap-4 mt-2">
            <img src="/vv_logo.png" alt="Founder" className="h-12 w-12 object-contain" />
            <div className="text-left">
              <span className="block font-bold text-[#fbbf24]">Zarna</span>
              <span className="block text-xs text-gray-400">Founder & Chief Travel Curator</span>
            </div>
          </div>
          </div>
        </div>
      </motion.section>

      {/* Section Divider */}
      <div className="w-full flex justify-center">
        <div className="h-1 w-32 bg-gradient-to-r from-[#fbbf24]/0 via-[#fbbf24] to-[#fbbf24]/0 rounded-full" />
      </div>

      {/* Our Services Section - now second */}
      <motion.section
        className="w-full bg-gray-900/80 py-16 px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="w-full max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-[#fbbf24] mb-8 text-center">Our Services</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {ourServices.map((service, idx) => (
              <motion.div
                key={service.title}
                className="flex flex-col items-center min-w-[220px] max-w-xs flex-1"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
              >
                <span className="text-4xl md:text-5xl mb-2">{service.icon}</span>
                <h3 className="text-lg font-bold text-white mb-1">{service.title}</h3>
                <p className="text-gray-300 text-center text-base leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Section Divider */}
      <div className="w-full flex justify-center">
  <div className="h-1 w-32 bg-gradient-to-r from-[#fbbf24]/0 via-[#fbbf24] to-[#fbbf24]/0 rounded-full" />
      </div>

      {/* Subtle Headline Section - now after services */}
      <motion.section
        className="w-full bg-gray-900/80 flex flex-col items-center justify-center py-16 px-4 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="w-full max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#fbbf24] mb-4 tracking-tight drop-shadow-lg">Travel, Tailored for You</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto font-medium">
            Curated journeys, seamless visa services, and exclusive experiences for discerning travelers.
          </p>
          <a href="/itineraries" className="inline-block bg-[#fbbf24] hover:bg-yellow-400 text-black font-semibold px-8 py-3 rounded-full text-lg shadow transition">Explore Itineraries</a>
        </div>
      </motion.section>

      {/* Section Divider */}
      <div className="w-full flex justify-center">
  <div className="h-1 w-32 bg-gradient-to-r from-[#fbbf24]/0 via-[#fbbf24] to-[#fbbf24]/0 rounded-full" />
      </div>

      {/* Call to Action Section */}
      <motion.section
        className="w-full bg-gray-900/80 py-16 px-4 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="w-full max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-[#fbbf24] mb-4">Ready for your next adventure?</h3>
          <a href="/contact" className="inline-block bg-[#fbbf24] hover:bg-yellow-400 text-black font-semibold px-8 py-3 rounded-full text-lg shadow transition">Contact Our Travel Experts</a>
        </div>
      </motion.section>
    </main>
  );
}
