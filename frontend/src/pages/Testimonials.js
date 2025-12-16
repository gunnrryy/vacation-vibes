import React, { useState } from 'react';
import TestimonialMarquee from '../components/TestimonialMarquee';

export default function Testimonials() {
  const [formData, setFormData] = useState({ name: '', role: '', content: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    try {
      const res = await fetch('http://localhost:5000/api/testimonials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setStatus('Thank you! Your testimonial has been submitted for review.');
        setFormData({ name: '', role: '', content: '' });
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('Error connecting to server.');
    }
  };

  return (
    <div className="min-h-screen bg-rich-black pt-20 text-white">
      <section className="py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-luxury-gold mb-6">Client Stories</h1>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Read about the journeys we've curated and share your own experience.
        </p>
      </section>

      {/* Marquee Section */}
      <section className="mb-20 pointer-events-none">
        <TestimonialMarquee />
      </section>

      {/* Submission Form */}
      <section className="max-w-2xl mx-auto px-4 pb-20">
        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
          <h3 className="text-2xl font-serif font-bold mb-6 text-center">Share Your Experience</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-black/40 border border-white/20 rounded p-3 text-white focus:border-luxury-gold focus:outline-none transition"
                placeholder="e.g. Sarah J."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Trip Type / Role</label>
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                className="w-full bg-black/40 border border-white/20 rounded p-3 text-white focus:border-luxury-gold focus:outline-none transition"
                placeholder="e.g. Honeymoon, Family Vacation"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Your Testimonial</label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                required
                rows="4"
                className="w-full bg-black/40 border border-white/20 rounded p-3 text-white focus:border-luxury-gold focus:outline-none transition"
                placeholder="Tell us about your trip..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-luxury-gold text-rich-black font-bold uppercase tracking-widest hover:bg-white transition-colors"
            >
              Submit Review
            </button>
            {status && <p className="text-center text-luxury-gold text-sm mt-4">{status}</p>}
          </form>
        </div>
      </section>
    </div>
  );
}
