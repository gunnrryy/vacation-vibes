import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Itineraries', path: '/itineraries' },
  { name: 'Visa Services', path: '/visa-services' },
  { name: 'Luxury Packages', path: '/luxury-packages' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
  <nav className="bg-[#D1E9EE] shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2">
            <img src="/vv_logo.png" alt="Vacation Vibes Logo" className="h-16 w-16 object-contain" />
            <span className="flex flex-col">
              <span className="font-bold text-xl text-blue-900 tracking-wide">Vacation Vibes</span>
              <span className="text-xs text-blue-700 font-medium -mt-1">Travel Curators</span>
            </span>
          </Link>
          <div className="hidden md:flex gap-6">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-lg font-medium transition-colors 
                  ${location.pathname === link.path ? 'text-blue-900 underline' : 'text-blue-900 hover:text-blue-700'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <button
            className="md:hidden flex items-center px-3 py-2 border rounded text-blue-900 border-blue-900 hover:bg-blue-50"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden flex flex-col gap-2 mt-2 pb-4">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-lg font-medium transition-colors 
                  ${location.pathname === link.path ? 'text-blue-900 underline' : 'text-blue-900 hover:text-blue-700'}`}
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
