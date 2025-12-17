import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ImageSkeleton from './ImageSkeleton';

export default function VisaCard({ country, image, isUrgent, onEnquire, delay = 0 }) {
    const [isLoaded, setIsLoaded] = React.useState(false);

    return (
        <motion.div
            className="group relative h-64 rounded-xl overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
        >
            <AnimatePresence mode="wait">
                {!isLoaded && (
                    <ImageSkeleton className="absolute inset-0 w-full h-full" />
                )}
            </AnimatePresence>
            <img
                src={image}
                alt={country}
                onLoad={() => setIsLoaded(true)}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${!isLoaded ? 'opacity-0' : 'opacity-100'}`}
            />
            <div className={`absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors ${!isLoaded ? 'opacity-0' : 'opacity-100'}`} />

            <div className="absolute inset-0 p-6 flex flex-col justify-end items-start">
                {isUrgent && (
                    <span className="mb-2 px-2 py-1 bg-red-600/90 text-white text-[10px] uppercase font-bold tracking-wider rounded">
                        Urgent Slots Available
                    </span>
                )}
                <h3 className="text-2xl font-serif font-bold text-white mb-2">{country}</h3>

                <button
                    onClick={() => onEnquire(country)}
                    className="px-4 py-2 border border-white/30 text-white text-xs uppercase tracking-widest hover:bg-luxury-gold hover:border-luxury-gold hover:text-rich-black transition-colors"
                >
                    Enquire Now
                </button>
            </div>
        </motion.div>
    );
}
