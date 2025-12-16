import React, { useEffect, useState } from 'react';

export default function TestimonialMarquee() {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/testimonials')
            .then(res => res.json())
            .then(data => {
                // Validation: ensure data is an array
                if (Array.isArray(data) && data.length > 0) {
                    setTestimonials(data);
                } else {
                    // Fallback content
                    setTestimonials([
                        { id: 1, name: 'Sarah Johnson', role: 'Luxury Escape', content: 'The trip to Bali was absolutely magical. Every detail was taken care of.' },
                        { id: 2, name: 'Michael Chen', role: 'Business Travel', content: 'Seamless visa process and excellent hotel recommendations.' },
                        { id: 3, name: 'Emma Davis', role: 'Honeymoon', content: 'Our honeymoon in Santorini was a dream come true. Thank you!' }
                    ]);
                }
            })
            .catch((err) => {
                console.error("Failed to fetch testimonials:", err);
                // Fallback on error
                setTestimonials([
                    { id: 1, name: 'Sarah Johnson', role: 'Luxury Escape', content: 'The trip to Bali was absolutely magical. Every detail was taken care of.' },
                    { id: 2, name: 'Michael Chen', role: 'Business Travel', content: 'Seamless visa process and excellent hotel recommendations.' },
                    { id: 3, name: 'Emma Davis', role: 'Honeymoon', content: 'Our honeymoon in Santorini was a dream come true. Thank you!' }
                ]);
            });
    }, []);

    return (
        <div className="animate-marquee whitespace-nowrap flex gap-8">
            {[...testimonials, ...testimonials].map((t, i) => (
                <div key={`${t.id}-${i}`} className="inline-block w-[400px] p-6 bg-white/5 border border-white/10 rounded-xl whitespace-normal">
                    <p className="text-gray-300 italic mb-4 font-serif">"{t.content}"</p>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-luxury-gold/20 flex items-center justify-center text-luxury-gold font-bold">
                            {t.name.charAt(0)}
                        </div>
                        <div>
                            <span className="block text-white font-bold text-sm">{t.name}</span>
                            <span className="block text-gray-500 text-xs">{t.role}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
