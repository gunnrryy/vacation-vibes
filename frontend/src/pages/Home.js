import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaPassport, FaIdCard, FaPlane, FaHotel, FaMapMarkedAlt, FaCar, FaMoneyBillWave } from 'react-icons/fa';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import TestimonialMarquee from '../components/TestimonialMarquee';

const services = [
  {
    title: 'Accommodations',
    icon: <FaHotel />,
    desc: 'Luxury hotels, boutique stays, and handpicked properties for every traveler.',
  },
  {
    title: 'Visa Assistance',
    icon: <FaIdCard />,
    desc: 'Expert guidance and hassle-free paperwork for all your visa needs.',
  },
  {
    title: 'Flight Bookings',
    icon: <FaPlane />,
    desc: 'Best flight options tailored to your budget, preferences, and schedule.',
  },
  {
    title: 'Passport Services',
    icon: <FaPassport />,
    desc: 'Smooth new or renewal passport assistance, paperwork made easy.',
  },
  {
    title: 'Excursions',
    icon: <FaMapMarkedAlt />,
    desc: 'Iconic destinations, hidden gems, and curated local experiences.',
  },
  {
    title: 'Transfers',
    icon: <FaCar />,
    desc: 'Premium airport transfers, car rentals, and point-to-point convenience.',
  },
  {
    title: 'Forex',
    icon: <FaMoneyBillWave />,
    desc: 'Competitive rates and easy foreign currency procurement.',
  },
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const yearsTraveling = new Date().getFullYear() - 2013;

  return (
    <div className="bg-rich-black text-white selection:bg-luxury-gold selection:text-black">
      <Hero />

      {/* Intro / Journey Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-luxury-gold font-serif text-4xl md:text-5xl font-bold mb-6">
              A Journey of <br /> Discovery
            </h2>
            <div className="h-1 w-24 bg-white/20 mb-8" />
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
              At Vacation Vibes, we believe travel has the power to change lives.
              Our founder, <span className="text-white font-medium">Zarna</span>, has spent over {yearsTraveling} years
              exploring the globe. Her passion for culture and connection is the heartbeat of our agency.
            </p>
            <p className="text-gray-400 font-serif italic text-xl border-l-2 border-luxury-gold pl-6 py-2">
              "Our goal is to create unforgettable journeys that inspire and transform."
            </p>
          </motion.div>

          <motion.div
            className="relative"
            style={{ y }}
          >
            <div className="absolute -inset-4 bg-luxury-gold/10 rounded-full blur-3xl" />
            <img
              src={process.env.PUBLIC_URL + '/vv_logo.png'}
              alt="Vacation Vibes Journey"
              className="relative z-10 w-full max-w-sm mx-auto drop-shadow-2xl opacity-90"
            />
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gradient-to-b from-rich-black to-gray-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-luxury-gold uppercase tracking-[0.2em] text-sm font-bold">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-3 mb-6">Excellence in Every Detail</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From the moment you start planning to your safe return, we handle every nuance of your journey with precision and care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                icon={service.icon}
                desc={service.desc}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Marquee */}
      <section className="py-24 bg-rich-black overflow-hidden pointer-events-none">
        <div className="text-center mb-12">
          <span className="text-luxury-gold uppercase tracking-[0.2em] text-sm font-bold">Client Stories</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-3">Moments We Curated</h2>
        </div>

        <div className="relative flex overflow-x-hidden">
          {/* Fetching Logic handled by separate component or parent usually, but for now we'll keep it simple static or add fetch if needed. 
                 User requested backend integration, so I should update this to fetch.
             */}
          <TestimonialMarquee />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-luxury-gold/5 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">
            Ready for your next <span className="text-luxury-gold">Adventure?</span>
          </h2>
          <a
            href="/contact"
            className="inline-block px-10 py-4 border border-luxury-gold text-luxury-gold font-bold uppercase tracking-widest hover:bg-luxury-gold hover:text-rich-black transition-all duration-300"
          >
            Start Planning
          </a>
        </div>
      </section>
    </div>
  );
}
