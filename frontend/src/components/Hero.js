import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// You can swap this image URL with a local asset if available
const HERO_IMAGE_URL = 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80';

export default function Hero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-rich-black flex items-center justify-center">
            {/* Parallax Background */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-rich-black z-20" />
                <img
                    src={HERO_IMAGE_URL}
                    alt="Luxury Travel"
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* Content */}
            <div className="relative z-30 text-center px-4 max-w-4xl mx-auto">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="inline-block text-luxury-gold uppercase tracking-[0.3em] text-sm md:text-base mb-4 font-bold"
                >
                    Discover the Extraordinary
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight"
                >
                    Experience the <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 italic">World</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-gray-300 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto mb-10"
                >
                    Curated journeys for the modern connoisseur. We craft moments that linger long after the return flight.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <a
                        href="/itineraries"
                        className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold text-rich-black transition-all duration-300 bg-luxury-gold rounded-none hover:bg-white hover:text-rich-black"
                    >
                        <span className="relative z-10 tracking-widest uppercase text-sm">Explore Collections</span>
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-white transition-transform duration-300 ease-out" />
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
            >
                <span className="text-[10px] uppercase tracking-widest text-gray-400">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-luxury-gold to-transparent" />
            </motion.div>
        </section>
    );
}
