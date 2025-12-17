import React from 'react';
import { motion } from 'framer-motion';

export default function ImageSkeleton({ className }) {
    return (
        <motion.div
            className={`bg-gray-800 overflow-hidden relative ${className}`}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "linear"
                }}
            />
        </motion.div>
    );
}
