import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-[#D1E9EE] text-blue-900 py-6 border-t-2 border-blue-200">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-2 md:mb-0 text-center md:text-left">
          <span className="font-bold">© {new Date().getFullYear()} Vacation Vibes LLP</span>
        </div>
        <div className="flex gap-6 text-sm flex-wrap justify-center md:justify-end">
          <Link to="/testimonials" className="hover:underline">Testimonials</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/terms" className="hover:underline">Terms of Use</Link>
          <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
