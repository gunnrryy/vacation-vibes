import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
  <footer className="w-full bg-gradient-to-t from-black via-gray-900 to-gray-800 text-gray-200 py-6 border-t-2 border-yellow-700" style={{ fontFamily: 'Merriweather, serif' }}>
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row justify-between items-center">
  <div className="mb-2 md:mb-0 text-center md:text-left mt-6 md:mt-0">
          <span className="font-bold text-[#fbbf24]">©{new Date().getFullYear()} Vacation Vibes LLP</span>
        </div>
        <div className="flex gap-6 text-sm flex-wrap justify-center md:justify-end">
          <Link to="/testimonials" className="hover:underline hover:text-[#fbbf24]">Testimonials</Link>
          <Link to="/contact" className="hover:underline hover:text-[#fbbf24]">Contact</Link>
          <Link to="/terms" className="hover:underline hover:text-[#fbbf24]">Terms of Use</Link>
          <Link to="/privacy" className="hover:underline hover:text-[#fbbf24]">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
