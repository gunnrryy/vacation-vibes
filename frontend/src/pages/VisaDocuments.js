import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const docRequirements = [
    {
        country: 'United States (B1/B2)',
        items: [
            'Original Passport with 6 months validity',
            'DS-160 Confirmation Page',
            'Appointment Confirmation',
            'Recent 5cm x 5cm Photograph (White Background)',
            'Bank Statements (Last 6 months)',
            'Employment Proof / Business Registration',
            'ITR Acknowledgements (Last 3 years)'
        ]
    },
    {
        country: 'Schengen Area',
        items: [
            'Passport (valid 3 months beyond return)',
            'Schengen Visa Application Form',
            'Travel Insurance (€30,000 coverage)',
            'Flight Itinerary (Reserved)',
            'Hotel Proof / Invitation Letter',
            'Bank Statements & ITRs',
            'Leave Letter from Employer'
        ]
    },
    {
        country: 'United Kingdom',
        items: [
            'Valid Passport',
            'Employment Evidence (Salary Slips + NOC)',
            'Bank Statements (6 months)',
            'Accommodation Proof',
            'Travel History (Old Passports)'
        ]
    },
    {
        country: 'Canada',
        items: [
            'Passport',
            'Digital Photo',
            'Proof of Funds',
            'Purpose of Travel Letter',
            'Family Information Form (IMM 5645)'
        ]
    }
];

const AccordionItem = ({ country, items }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border border-white/10 rounded-lg bg-white/5 mb-4 overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors"
            >
                <span className="font-serif font-bold text-white">{country}</span>
                {isOpen ? <FaChevronUp className="text-luxury-gold" /> : <FaChevronDown className="text-gray-500" />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="p-4 pt-0 border-t border-white/10 text-gray-400 text-sm">
                            <ul className="list-disc pl-5 space-y-1">
                                {items.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function VisaDocuments() {
    return (
        <div className="min-h-screen bg-rich-black pt-32 pb-20 px-4">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-serif font-bold text-luxury-gold mb-2">Document Checklists (General list - not exhaustive)</h1>
                <p className="text-gray-400 mb-8">Identify the documents required for your specific destination.</p>

                {docRequirements.map((req, i) => (
                    <AccordionItem key={i} {...req} />
                ))}

                <div className="mt-8 p-4 bg-luxury-gold/10 border border-luxury-gold/30 rounded text-center">
                    <p className="text-sm text-luxury-gold">
                        Note: This list is indicative. Specific requirements may vary based on your profile and consulate regulations.
                    </p>
                </div>
            </div>
        </div>
    );
}
