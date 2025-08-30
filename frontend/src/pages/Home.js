import React from 'react';

export default function Home() {
  // --- Our Story and Our Services content ---
  const ourStory = `At Vacation Vibes LLP, we are passionate about travel and believe it has the power to change lives. Our founder, Zarna, has been an avid traveler for over 9 years, exploring the globe and experiencing different cultures and lifestyles. Her love for travel and desire to share these experiences led to the creation of Vacation Vibes. From the very beginning, our goal has been to create unforgettable journeys that inspire and transform our clients. We strive to provide a one-stop shop for all your travel needs, with a focus on luxury, personalization, and seamless service.`;

  const ourServices = [
    {
      title: 'Accommodations',
      icon: '🏨',
      desc: 'Luxury hotels, boutique stays, and handpicked properties for every traveler.',
    },
    {
      title: 'Visa Process Assistance',
      icon: '�', // passport/visa document icon
      desc: 'Expert guidance and hassle-free paperwork for all your visa needs.',
    },
    {
      title: 'Flights',
      icon: '✈️',
      desc: 'Best flight options tailored to your budget, preferences, and schedule.',
    },
    {
      title: 'Passport Application',
      icon: '�', // passport control icon
      desc: 'Smooth new or renewal passport assistance, paperwork made easy.',
    },
    {
      title: 'Sightseeings & Excursions',
      icon: '🌄',
      desc: 'Iconic destinations, hidden gems, and curated local experiences.',
    },
    {
      title: 'Transfers & Rentals',
      icon: '🚗',
      desc: 'Airport transfers, car rentals, and point-to-point convenience.',
    },
    {
      title: 'Forex Assistance',
      icon: '💱',
      desc: 'Competitive rates and easy foreign currency procurement.',
    },
  ];
  return (
    <main className="min-h-screen bg-[#D1E9EE] flex flex-col items-center">
      {/* Our Story Section - creative card with quote and founder highlight */}
      <section className="w-full flex justify-center mt-16 px-4">
        <div className="bg-white rounded-2xl shadow-xl p-10 max-w-3xl w-full flex flex-col items-center relative overflow-hidden">
          <span className="absolute left-0 top-0 text-[8rem] text-blue-100 opacity-20 select-none">“</span>
          <h2 className="text-3xl font-extrabold text-blue-900 mb-4 z-10">Our Story</h2>
          <p className="text-lg text-blue-800 mb-6 leading-relaxed z-10">{ourStory}</p>
          <div className="flex items-center gap-4 z-10">
            <img src="/vv_logo.png" alt="Founder" className="h-12 w-12 object-contain" />
            <div className="text-left">
              <span className="block font-bold text-blue-900">Zarna</span>
              <span className="block text-xs text-blue-700">Founder & Chief Travel Curator</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section - creative icon cards */}
      <section className="w-full max-w-6xl mt-16 px-4">
        <h2 className="text-3xl font-extrabold text-blue-900 mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ourServices.map((service, idx) => (
            <div key={service.title} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition">
              <span className="text-5xl mb-4">{service.icon}</span>
              <h3 className="text-xl font-bold text-blue-800 mb-2">{service.title}</h3>
              <p className="text-blue-900 text-center text-base">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Bold Hero Section */}
      <section className="w-full flex flex-col items-center justify-center py-16 px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-blue-900 mb-4 tracking-tight drop-shadow-lg">Luxury Travel, Redefined</h1>
        <p className="text-xl md:text-2xl text-blue-800 mb-8 max-w-2xl mx-auto font-medium">
          Curated journeys, seamless visa services, and exclusive experiences for discerning travelers.
        </p>
        <a href="/itineraries" className="inline-block bg-blue-700 hover:bg-blue-900 text-white font-semibold px-8 py-3 rounded-full text-lg shadow transition">Explore Itineraries</a>
      </section>

      {/* Services Section */}
      <section className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 px-4">
        {/* Luxury Packages */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Luxury Resort" className="rounded-lg mb-4 h-40 w-full object-cover" />
          <h2 className="text-xl font-bold text-blue-800 mb-2">Luxury Packages</h2>
          <p className="text-blue-900 mb-4 text-center">Handpicked, premium travel experiences—private islands, 5-star resorts, and more. For those who demand the best.</p>
          <a href="/luxury-packages" className="text-blue-700 font-semibold hover:underline">View Luxury Packages</a>
        </div>
        {/* Visa Services */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="Visa Services" className="rounded-lg mb-4 h-40 w-full object-cover" />
          <h2 className="text-xl font-bold text-blue-800 mb-2">Visa Services</h2>
          <p className="text-blue-900 mb-4 text-center">Expert visa assistance for global destinations. Concierge support for stress-free travel documentation and approvals.</p>
          <a href="/visa-services" className="text-blue-700 font-semibold hover:underline">Learn More</a>
        </div>
        {/* Itinerary Marketplace */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <img src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80" alt="Itinerary Marketplace" className="rounded-lg mb-4 h-40 w-full object-cover" />
          <h2 className="text-xl font-bold text-blue-800 mb-2">Itinerary Marketplace</h2>
          <p className="text-blue-900 mb-4 text-center">Browse, purchase, and manage curated itineraries for destinations worldwide. Download instantly after purchase.</p>
          <a href="/itineraries" className="text-blue-700 font-semibold hover:underline">Browse Itineraries</a>
        </div>
        {/* Personalized Service */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Personalized Service" className="rounded-lg mb-4 h-40 w-full object-cover" />
          <h2 className="text-xl font-bold text-blue-800 mb-2">Personalized Service</h2>
          <p className="text-blue-900 mb-4 text-center">Dedicated travel curators to assist you at every step, from planning to booking and beyond.</p>
          <a href="/contact" className="text-blue-700 font-semibold hover:underline">Contact Us</a>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full max-w-4xl mt-20 mb-16 px-4 text-center">
        <h3 className="text-2xl font-bold text-blue-900 mb-4">Ready for your next adventure?</h3>
        <a href="/contact" className="inline-block bg-gradient-to-r from-blue-700 to-blue-400 hover:from-blue-900 hover:to-blue-600 text-white font-semibold px-8 py-3 rounded-full text-lg shadow transition">Contact Our Travel Experts</a>
      </section>
    </main>
  );
}
