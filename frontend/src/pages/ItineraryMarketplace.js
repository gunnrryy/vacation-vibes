import React from 'react';


import { motion } from 'framer-motion';
import ItineraryCard from '../components/ItineraryCard';

const itineraries = [
  {
    id: 1,
    title: 'Swiss Alpine Escape',
    location: 'Switzerland',
    duration: '7 Days',
    price: '2,499',
    rating: '4.9',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Bali Wellness Retreat',
    location: 'Indonesia',
    duration: '10 Days',
    price: '1,899',
    rating: '4.8',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Santorini Sunset Dreams',
    location: 'Greece',
    duration: '5 Days',
    price: '3,200',
    rating: '5.0',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    title: 'Kyoto Cultural Immersion',
    location: 'Japan',
    duration: '9 Days',
    price: '2,150',
    rating: '4.9',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

export default function ItineraryMarketplace() {
  return (
    <div className="min-h-screen bg-rich-black pt-20">

      {/* Header */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-b from-gray-900 to-rich-black border-b border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">Curated Collections</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Handpicked itineraries designed for the discerning traveler.
          </p>
        </motion.div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {itineraries.map((item, index) => (
            <ItineraryCard
              key={item.id}
              {...item}
              delay={index * 0.1}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
