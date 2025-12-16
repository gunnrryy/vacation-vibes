import React from 'react';
import { motion } from 'framer-motion';

export default function ServiceCard({ title, icon, desc, delay = 0 }) {
    return (
        <motion.div
            className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay, ease: 'easeOut' }}
            whileHover={{ y: -5 }}
        >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-luxury-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-4 text-4xl md:text-5xl text-luxury-gold drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-luxury-gold transition-colors">
                    {title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed font-sans">
                    {desc}
                </p>
            </div>
        </motion.div>
    );
}
