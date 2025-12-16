module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'luxury-gold': '#fbbf24', // Amber-400 as base
        'luxury-gold-hover': '#f59e0b', // Amber-500
        'midnight-blue': '#111827', // Gray-900
        'rich-black': '#000000',
        'deep-emerald': '#022c22', // Emerald-950
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};
