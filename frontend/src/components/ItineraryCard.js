import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaClock, FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import ImageSkeleton from './ImageSkeleton';

export default function ItineraryCard({ title, location, duration, price, rating, image, delay = 0 }) {
    const [isLoaded, setIsLoaded] = React.useState(false);

    return (
        <motion.div
            className="group relative h-[450px] w-full rounded-2xl overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay, ease: 'easeOut' }}
        >
            {/* Background Image with Zoom Effect */}
            {/* Background Image with Zoom Effect */}
            <div className="absolute inset-0 bg-gray-900">
                <AnimatePresence mode="wait">
                    {!isLoaded && (
                        <ImageSkeleton className="w-full h-full" />
                    )}
                </AnimatePresence>
                <img
                    src={image || "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}
                    alt={title}
                    onLoad={() => setIsLoaded(true)}
                    className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out ${!isLoaded ? 'opacity-0' : 'opacity-80'}`}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-300 ${!isLoaded ? 'opacity-0' : 'opacity-90'}`} />
            </div>

            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end">

                {/* Top Badge */}
                <div className="absolute top-6 right-6 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center gap-1">
                    <FaStar className="text-luxury-gold text-xs" />
                    <span className="text-xs font-bold text-white">{rating}</span>
                </div>

                {/* Location & Duration */}
                <div className="flex items-center gap-4 text-luxury-gold text-sm font-medium tracking-wide mb-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    <span className="flex items-center gap-1"><FaMapMarkerAlt /> {location}</span>
                    <span className="flex items-center gap-1"><FaClock /> {duration}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-serif font-bold text-white mb-2 leading-tight group-hover:text-luxury-gold transition-colors duration-300">
                    {title}
                </h3>

                {/* Price & CTA */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                    <div className="flex flex-col">
                        <span className="text-xs text-gray-400 uppercase tracking-widest">Starting from</span>
                        <span className="text-lg font-bold text-white">${price}</span>
                    </div>
                    <button className="px-6 py-2 bg-luxury-gold text-rich-black font-bold text-sm uppercase tracking-wider rounded-none hover:bg-white transition-colors duration-300 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                        View Details
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
