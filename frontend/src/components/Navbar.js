import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Itineraries', path: '/itineraries' },
  { name: 'Visa Services', path: '/visa-services' },
  { name: 'Luxury Packages', path: '/luxury-packages' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navbar background variants
  const navVariants = {
    hidden: { backgroundColor: 'rgba(0, 0, 0, 0)', backdropFilter: 'blur(0px)' },
    visible: {
      backgroundColor: 'rgba(17, 24, 39, 0.7)',
      backdropFilter: 'blur(12px)',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
    }
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 w-full z-50 border-b border-white/10 transition-all duration-300"
        initial="hidden"
        animate={scrolled || open ? "visible" : "hidden"}
        variants={navVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src={process.env.PUBLIC_URL + '/vv_logo.png'}
                alt="Vacation Vibes"
                className="h-12 w-12 object-contain transition-transform group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-luxury-gold tracking-wider group-hover:text-luxury-gold-hover transition-colors">
                  Vacation Vibes
                </span>
                <span className="text-[10px] text-gray-400 font-sans uppercase tracking-[0.2em]">
                  Private Travel Curators
                </span>
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex gap-8 items-center">
              {navLinks.map(link => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="relative group py-2"
                >
                  <span className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300
                    ${location.pathname === link.path ? 'text-luxury-gold' : 'text-gray-300 group-hover:text-white'}`}>
                    {link.name}
                  </span>
                  <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-luxury-gold transform origin-left transition-transform duration-300
                    ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                  />
                </Link>
              ))}
              <Link to="/contact" className="ml-4 px-6 py-2 bg-luxury-gold text-rich-black text-sm font-bold uppercase tracking-wider rounded-none hover:bg-white transition-colors duration-300">
                Plan My Trip
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-luxury-gold hover:text-white transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation"
            >
              <div className="space-y-1.5">
                <motion.span animate={{ rotateZ: open ? 45 : 0, y: open ? 8 : 0 }} className="block w-8 h-0.5 bg-current"></motion.span>
                <motion.span animate={{ opacity: open ? 0 : 1 }} className="block w-8 h-0.5 bg-current"></motion.span>
                <motion.span animate={{ rotateZ: open ? -45 : 0, y: open ? -8 : 0 }} className="block w-8 h-0.5 bg-current"></motion.span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-rich-black/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
            >
              <div className="px-4 py-6 flex flex-col gap-4">
                {navLinks.map(link => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-lg font-serif text-gray-200 hover:text-luxury-gold transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="h-px bg-white/10 my-2" />
                <Link
                  to="/contact"
                  className="text-center w-full py-3 bg-luxury-gold text-rich-black font-bold uppercase tracking-widest"
                  onClick={() => setOpen(false)}
                >
                  Start Planning
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
