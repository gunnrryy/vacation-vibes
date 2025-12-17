
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronDown } from 'react-icons/fa';

// Simplified list of countries for the dropdown
const countries = [
    "United States", "United Kingdom", "Schengen Area", "Canada", "Australia", "New Zealand",
    "Austria", "Belgium", "Bulgaria", "Croatia", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany",
    "Greece", "Hungary", "Iceland", "Italy", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Netherlands",
    "Norway", "Poland", "Portugal", "Romania", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland",
    "Vietnam", "Indonesia", "Thailand", "Sri Lanka", "Georgia", "UAE", "Singapore", "Turkey", "Japan", "South Korea",
    "China", "Brazil", "South Africa", "Other"
].sort();

const schengenCountries = [
    "Austria", "Belgium", "Bulgaria", "Croatia", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany",
    "Greece", "Hungary", "Iceland", "Italy", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Netherlands",
    "Norway", "Poland", "Portugal", "Romania", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland"
];

export default function VisaInquiryModal({ isOpen, onClose, defaultDestination = '' }) {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        destination: defaultDestination,
        travelDateFrom: '',
        travelDateTo: '',
        passports: '',
        isUrgent: false,
        hasUSVisa: false,
    });
    const [status, setStatus] = useState('');
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    // Searchable Dropdown State
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const dropdownRef = useRef(null);

    useEffect(() => {
        if (defaultDestination === 'Schengen Area') {
            setFormData(prev => ({ ...prev, destination: '' }));
            setSearchTerm('');
            // Dropdown remains closed per user request for Schengen
        } else if (defaultDestination) {
            setFormData(prev => ({ ...prev, destination: defaultDestination }));
            setSearchTerm(defaultDestination);
        }
    }, [defaultDestination]);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Close modal on Escape key press
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            window.addEventListener('keydown', handleEsc);
        }
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isOpen, onClose]);

    const validate = () => {
        const newErrors = {};

        // Email Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            newErrors.email = "Please enter a valid email address.";
        }

        // Phone Validation (Basic International format check: + followed by 7-15 digits)
        const phoneRegex = /^\+?[0-9]{7,15}$/;
        if (!formData.phone || !phoneRegex.test(formData.phone)) {
            newErrors.phone = "Please enter a valid phone number (e.g. +919876543210).";
        }

        if (!formData.destination) {
            newErrors.destination = "Please select a destination.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: null }); // Clear error on change
        }
    };

    const handleDestinationSelect = (country) => {
        setFormData({
            ...formData,
            destination: country,
            isUrgent: false, // Reset US-specific field
            hasUSVisa: false // Reset Turkey-specific field
        });
        setSearchTerm(country);
        setIsDropdownOpen(false);
        setErrors({ ...errors, destination: null });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        setStatus('Submitting...');

        try {
            const res = await fetch('http://localhost:5001/api/visa-inquiry', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                setStatus('Success! Confirmation sent.');
                setSubmitted(true);
            } else {
                setStatus('Something went wrong. Please try again.');
            }
        } catch (err) {
            setStatus('Error connecting to server.');
        }
    };

    const sourceList = defaultDestination === 'Schengen Area' ? schengenCountries : countries;

    const filteredCountries = sourceList.filter(c =>
        c.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        className="bg-rich-black border border-white/10 rounded-2xl w-full max-w-lg p-6 md:p-8 relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                        >
                            <FaTimes />
                        </button>

                        <h2 className="text-2xl font-serif font-bold text-luxury-gold mb-2">Start Your Application</h2>

                        {!submitted ? (
                            <>
                                <p className="text-gray-400 text-sm mb-6">Enter your details and our visa experts will guide you through the process.</p>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-xs text-gray-500 uppercase tracking-widest block mb-1">Name</label>
                                            <input
                                                name="name" type="text" required onChange={handleChange} value={formData.name}
                                                className="w-full bg-white/5 border border-white/10 rounded p-2 text-white focus:border-luxury-gold outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-xs text-gray-500 uppercase tracking-widest block mb-1">Phone (+Code...)</label>
                                            <input
                                                name="phone" type="tel" required onChange={handleChange} value={formData.phone}
                                                placeholder="+91..."
                                                className={`w-full bg-white/5 border ${errors.phone ? 'border-red-500' : 'border-white/10'} rounded p-2 text-white focus:border-luxury-gold outline-none`}
                                            />
                                            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-xs text-gray-500 uppercase tracking-widest block mb-1">Email</label>
                                        <input
                                            name="email" type="email" required onChange={handleChange} value={formData.email}
                                            className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded p-2 text-white focus:border-luxury-gold outline-none`}
                                        />
                                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                    </div>

                                    {/* Searchable Destination Dropdown */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="relative" ref={dropdownRef}>
                                            <label className="text-xs text-gray-500 uppercase tracking-widest block mb-1">Destination</label>
                                            <div
                                                className={`w-full bg-white/5 border ${errors.destination ? 'border-red-500' : 'border-white/10'} rounded p-2 text-white flex items-center justify-between cursor-pointer`}
                                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                            >
                                                <input
                                                    type="text"
                                                    value={searchTerm}
                                                    onChange={(e) => {
                                                        setSearchTerm(e.target.value);
                                                        setIsDropdownOpen(true);
                                                        // Clear selection and special fields if typing
                                                        setFormData(prev => ({
                                                            ...prev,
                                                            destination: '',
                                                            isUrgent: false,
                                                            hasUSVisa: false
                                                        }));
                                                    }}
                                                    placeholder="Select Country"
                                                    className="bg-transparent outline-none w-full text-white placeholder-gray-500"
                                                />
                                                <FaChevronDown className="text-xs text-gray-500 ml-2" />
                                            </div>

                                            {isDropdownOpen && (
                                                <div className="absolute top-full left-0 w-full mt-1 bg-gray-900 border border-white/10 rounded-md shadow-xl max-h-48 overflow-y-auto z-50">
                                                    {filteredCountries.length > 0 ? (
                                                        filteredCountries.map((country) => (
                                                            <div
                                                                key={country}
                                                                className="px-3 py-2 hover:bg-white/10 cursor-pointer text-sm text-gray-300"
                                                                onClick={() => handleDestinationSelect(country)}
                                                            >
                                                                {country}
                                                            </div>
                                                        ))
                                                    ) : (
                                                        <div className="px-3 py-2 text-gray-500 text-sm">No matches found</div>
                                                    )}
                                                </div>
                                            )}
                                            {errors.destination && <p className="text-red-500 text-xs mt-1">{errors.destination}</p>}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-xs text-gray-500 uppercase tracking-widest block mb-1">Travel From</label>
                                            <input
                                                name="travelDateFrom" type="date" required onChange={handleChange} value={formData.travelDateFrom}
                                                className="w-full bg-white/5 border border-white/10 rounded p-2 text-white focus:border-luxury-gold outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-xs text-gray-500 uppercase tracking-widest block mb-1">Return Date</label>
                                            <input
                                                name="travelDateTo" type="date" required onChange={handleChange} value={formData.travelDateTo}
                                                className="w-full bg-white/5 border border-white/10 rounded p-2 text-white focus:border-luxury-gold outline-none"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <div>
                                            <label className="text-xs text-gray-500 uppercase tracking-widest block mb-1">Number of Applicants</label>
                                            <input
                                                name="passports" type="number" min="1" placeholder="1" required onChange={handleChange} value={formData.passports}
                                                className="w-full bg-white/5 border border-white/10 rounded p-2 text-white focus:border-luxury-gold outline-none"
                                            />
                                        </div>

                                        {/* Urgent Appointment Checkbox (Only for US) */}
                                        {formData.destination === 'United States' && (
                                            <div className="flex items-center space-x-2 bg-red-500/10 p-3 rounded border border-red-500/20 mt-4">
                                                <input
                                                    type="checkbox"
                                                    name="isUrgent"
                                                    id="isUrgent"
                                                    checked={formData.isUrgent}
                                                    onChange={(e) => setFormData({ ...formData, isUrgent: e.target.checked })}
                                                    className="w-4 h-4 accent-red-500"
                                                />
                                                <label htmlFor="isUrgent" className="text-sm text-red-200 cursor-pointer select-none">
                                                    I need an <strong>Urgent Appointment</strong> (B1/B2)
                                                </label>
                                            </div>
                                        )}

                                        {/* Valid USA Visa Checkbox (Only for Turkey) */}
                                        {formData.destination === 'Turkey' && (
                                            <div className="flex items-center space-x-2 bg-blue-500/10 p-3 rounded border border-blue-500/20 mt-4">
                                                <input
                                                    type="checkbox"
                                                    name="hasUSVisa"
                                                    id="hasUSVisa"
                                                    checked={formData.hasUSVisa}
                                                    onChange={(e) => setFormData({ ...formData, hasUSVisa: e.target.checked })}
                                                    className="w-4 h-4 accent-blue-500"
                                                />
                                                <label htmlFor="hasUSVisa" className="text-sm text-blue-200 cursor-pointer select-none">
                                                    Do you have a valid <strong>USA Visa</strong>?
                                                </label>
                                            </div>
                                        )}
                                    </div>

                                    <button type="submit" className="w-full py-3 bg-luxury-gold text-rich-black font-bold uppercase tracking-widest hover:bg-white transition-colors mt-4">
                                        Request Consultation
                                    </button>

                                    <p className="text-xs italic text-gray-400 mt-4 text-center">
                                        Please email Passport's 1st page and last page pdf or clear images of all applicants to us at <a href="mailto:vvacationvibes@gmail.com" className="text-luxury-gold hover:underline">vvacationvibes@gmail.com</a>
                                    </p>

                                    {status && <p className="text-center text-sm text-luxury-gold mt-2">{status}</p>}
                                </form>
                            </>
                        ) : (
                            <div className="text-center py-8">
                                <div className="text-5xl mb-4">🎉</div>
                                <h3 className="text-xl font-bold text-white mb-2">Inquiry Received!</h3>
                                <p className="text-gray-400 mb-6">
                                    We have received your details.
                                </p>
                                <div className="bg-white/5 p-4 rounded-lg border border-white/10 mb-6">
                                    <p className="text-m text-gray-300 font-medium mb-2">Next Step:</p>
                                    <p className="text-m italic text-gray-400">
                                        Please email Passport's 1st page and last page pdf or clear images of all applicants to us at <span className="text-luxury-gold select-all">vvacationvibes@gmail.com</span>
                                    </p>
                                </div>
                                <button onClick={onClose} className="text-luxury-gold hover:text-white text-sm font-bold uppercase tracking-widest">
                                    Close Window
                                </button>
                            </div>
                        )}

                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

