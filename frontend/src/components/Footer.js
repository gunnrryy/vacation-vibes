import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-rich-black text-gray-300 py-12 border-t border-white/10 font-sans">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

        {/* Brand */}
        <div className="text-center md:text-left">
          <h4 className="font-serif text-xl text-luxury-gold font-bold mb-2">Vacation Vibes</h4>
          <p className="text-xs text-gray-500 uppercase tracking-widest">© {new Date().getFullYear()} All Rights Reserved</p>
        </div>

        {/* Links */}
        <div className="flex justify-center gap-6 text-sm font-medium tracking-wide uppercase">
          <Link to="/testimonials" className="hover:text-luxury-gold transition-colors">Testimonials</Link>
          <Link to="/contact" className="hover:text-luxury-gold transition-colors">Contact</Link>
          <Link to="/terms" className="hover:text-luxury-gold transition-colors">Terms</Link>
          <Link to="/privacy" className="hover:text-luxury-gold transition-colors">Privacy</Link>
        </div>

        {/* Socials */}
        <div className="flex justify-center md:justify-end gap-6">
          <a href="#" className="text-gray-400 hover:text-luxury-gold transition-colors text-xl"><FaWhatsapp /></a>
          <a href="#" className="text-gray-400 hover:text-luxury-gold transition-colors text-xl"><FaInstagram /></a>
          <a href="#" className="text-gray-400 hover:text-luxury-gold transition-colors text-xl"><FaFacebook /></a>
        </div>

      </div>
    </footer>
  );
}
