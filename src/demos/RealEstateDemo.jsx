import React, { useState } from 'react';
import DemoTopBanner from '../components/DemoTopBanner';
import { 
  Building, 
  MapPin, 
  Bed, 
  Bath, 
  Maximize2, 
  ShieldCheck, 
  Search, 
  Filter, 
  Check, 
  X, 
  Calendar, 
  PhoneCall, 
  ArrowUpRight,
  Sparkles,
  Compass
} from 'lucide-react';

export default function RealEstateDemo() {
  const [filterType, setFilterType] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [tourBooked, setTourBooked] = useState(false);
  const [tourForm, setTourForm] = useState({
    name: '',
    phone: '',
    email: '',
    date: '2026-11-22',
    time: '11:00 AM',
    notes: ''
  });

  const properties = [
    {
      id: 'prop-01',
      title: 'The Sky Glass Penthouse',
      type: 'penthouse',
      typeName: 'Duplex Penthouse',
      location: 'Vesu, Surat',
      price: '₹4.85 Cr',
      numericPrice: 48500000,
      beds: 5,
      baths: 6,
      sqft: '6,200 Sq.Ft',
      status: 'Ready for Possession',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      desc: 'Double-height ceiling penthouse overlooking Tapi River with private temperature-controlled plunge pool, imported statuario marble, and dedicated private high-speed elevator.',
      amenities: ['Private Infinity Pool', 'VRV Air Conditioning', '4 Car Parking', 'Biometric Access', 'Concierge Desk']
    },
    {
      id: 'prop-02',
      title: 'Aura Waterfront Villa',
      type: 'villa',
      typeName: 'Independent Luxury Villa',
      location: 'Dumas Road, Surat',
      price: '₹7.20 Cr',
      numericPrice: 72000000,
      beds: 6,
      baths: 7,
      sqft: '8,400 Sq.Ft',
      status: 'Ready for Possession',
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80',
      desc: 'Architectural tropical modernist villa with wrap-around landscaped private lawns, Italian Poggenpohl kitchen, solar micro-grid, and internal home cinema.',
      amenities: ['12,000 Sq.Ft Plot', 'Private Zen Garden', 'Home Automation', 'Italian Kitchen', 'Staff Quarters']
    },
    {
      id: 'prop-03',
      title: 'Horizon Tower Sky Residence',
      type: 'apartment',
      typeName: 'Luxury Sky Residence',
      location: 'Piplod, Surat',
      price: '₹2.95 Cr',
      numericPrice: 29500000,
      beds: 4,
      baths: 4,
      sqft: '3,850 Sq.Ft',
      status: 'Under Construction (Dec 2026)',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
      desc: 'Corner north-east facing luxury residence with 270-degree unhindered skyline views, wide 10-ft cantilevered lifestyle deck, and German soundproof double glazing.',
      amenities: ['Rooftop Clubhouse', 'Olympic Lap Pool', 'Tennis Court', 'High-Speed Elevators', 'EV Charging Bays']
    },
    {
      id: 'prop-04',
      title: 'Pal Promenade Garden Home',
      type: 'apartment',
      typeName: 'Garden Simplex',
      location: 'Pal, Surat',
      price: '₹1.85 Cr',
      numericPrice: 18500000,
      beds: 3,
      baths: 3,
      sqft: '2,650 Sq.Ft',
      status: 'Ready for Possession',
      image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80',
      desc: 'Low-density botanical luxury project designed around central reflexology walkways, clubhouse gymnasium, and children sensory playzones.',
      amenities: ['Private Garden Patio', 'Designer Sanitaryware', 'Clubhouse & Spa', '2 Reserved Basements']
    }
  ];

  const filteredProperties = properties.filter(p => {
    const matchesType = filterType === 'all' || p.type === filterType;
    const matchesLoc = selectedLocation === 'all' || p.location.toLowerCase().includes(selectedLocation.toLowerCase());
    return matchesType && matchesLoc;
  });

  const handleTourBooking = (e) => {
    e.preventDefault();
    setTourBooked(true);
  };

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-[#19191B] font-sans antialiased">
      {/* Top Banner */}
      <DemoTopBanner demoTitle="Apex Horizons Realty (Real Estate)" category="Real Estate & Architecture" />

      {/* Real Estate Header */}
      <header className="border-b border-[#E5E0D8] bg-[#FBFBFA]/95 sticky top-9 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-[#18181B] text-white flex items-center justify-center font-bold">
              <Compass className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <div className="font-heading font-extrabold text-lg tracking-tight text-[#18181B]">
                APEX HORIZONS
              </div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-[#71717A]">
                Luxury Residences · Surat
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-[#52525B]">
            <a href="#properties" className="hover:text-[#18181B] transition-colors">Curated Portfolio</a>
            <a href="#locations" className="hover:text-[#18181B] transition-colors">Prime Locations</a>
            <a href="#schedule-tour" className="hover:text-[#18181B] transition-colors">Private Viewing</a>
          </nav>

          <a
            href="#schedule-tour"
            className="px-4 py-2 rounded bg-[#18181B] text-white font-semibold text-xs uppercase tracking-wider hover:bg-black transition-colors"
          >
            Schedule VIP Tour
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E5E0D8] bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F4F1EA] text-[#524B40] text-xs font-mono uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              Exclusive Architectural Portfolio · Surat Prime
            </div>

            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#18181B] tracking-tight leading-[1.08]">
              Sanctuary Above the City. <br />
              <span className="text-[#8C7A5B]">Bespoke Living Spaces.</span>
            </h1>

            <p className="text-[#52525B] text-base leading-relaxed max-w-xl">
              From landmark penthouses in Vesu to private waterfront estates along Dumas Road, Apex Horizons represents Surat's most distinctive architectural addresses.
            </p>

            {/* Quick Search Bar */}
            <div className="p-4 rounded-xl bg-[#F4F1EA] border border-[#E5E0D8] space-y-3">
              <div className="text-xs font-bold text-[#18181B] uppercase tracking-wider">
                Find Your Residence
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="px-3 py-2 rounded bg-white border border-[#DCD6CA] text-xs text-[#18181B] focus:outline-none"
                >
                  <option value="all">All Typologies</option>
                  <option value="penthouse">Penthouses</option>
                  <option value="villa">Villas</option>
                  <option value="apartment">Sky Residences</option>
                </select>

                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="px-3 py-2 rounded bg-white border border-[#DCD6CA] text-xs text-[#18181B] focus:outline-none"
                >
                  <option value="all">All Surat Locations</option>
                  <option value="vesu">Vesu</option>
                  <option value="dumas">Dumas Road</option>
                  <option value="piplod">Piplod</option>
                  <option value="pal">Pal</option>
                </select>

                <a
                  href="#properties"
                  className="px-4 py-2 rounded bg-[#18181B] text-white text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-1.5"
                >
                  <span>Explore Listings</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-xl overflow-hidden border border-[#E5E0D8] shadow-elevated group">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
                alt="Apex Horizons Real Estate Architecture"
                className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end text-white">
                <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase">Featured Penthouse</span>
                <div className="font-heading font-bold text-xl text-white">The Sky Glass Penthouse, Vesu</div>
                <div className="text-sm font-semibold text-white/90 mt-1">₹4.85 Crore · 6,200 Sq.Ft</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Showcase Grid */}
      <section id="properties" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-bold text-[#8C7A5B] uppercase tracking-widest">
              Available Residences
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#18181B] tracking-tight mt-1">
              Curated Architectural Listings
            </h2>
            <p className="text-xs text-[#71717A] mt-1">
              Showing {filteredProperties.length} hand-picked luxury residences in Surat.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Typologies' },
              { id: 'penthouse', label: 'Penthouses' },
              { id: 'villa', label: 'Villas' },
              { id: 'apartment', label: 'Sky Residences' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterType(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  filterType === tab.id
                    ? 'bg-[#18181B] text-white'
                    : 'bg-[#F4F1EA] text-[#52525B] hover:bg-[#EAE5D9]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Property Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProperties.map((prop) => (
            <div
              key={prop.id}
              className="bg-white border border-[#E5E0D8] rounded-xl overflow-hidden shadow-subtle hover:shadow-card transition-all flex flex-col group"
            >
              <div className="relative h-72 overflow-hidden bg-neutral-100">
                <img
                  src={prop.image}
                  alt={prop.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur text-white text-xs font-mono px-3 py-1 rounded">
                  {prop.typeName}
                </div>
                <div className="absolute top-4 right-4 bg-white text-[#18181B] text-xs font-bold px-3 py-1 rounded border border-[#E5E0D8]">
                  {prop.status}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-heading font-bold text-xl text-[#18181B]">
                        {prop.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-[#71717A] mt-1">
                        <MapPin className="w-3.5 h-3.5 text-[#8C7A5B]" />
                        <span>{prop.location}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-[#71717A]">Price</div>
                      <div className="font-heading font-extrabold text-xl text-[#18181B]">
                        {prop.price}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-[#52525B] mt-3 line-clamp-2 leading-relaxed">
                    {prop.desc}
                  </p>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-[#F4F1EA] text-center text-xs text-[#52525B]">
                  <div className="flex items-center justify-center gap-1.5">
                    <Bed className="w-4 h-4 text-[#8C7A5B]" />
                    <span>{prop.beds} Bedrooms</span>
                  </div>
                  <div className="flex items-center justify-center gap-1.5">
                    <Bath className="w-4 h-4 text-[#8C7A5B]" />
                    <span>{prop.baths} Bathrooms</span>
                  </div>
                  <div className="flex items-center justify-center gap-1.5">
                    <Maximize2 className="w-4 h-4 text-[#8C7A5B]" />
                    <span>{prop.sqft}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedProperty(prop)}
                    className="flex-1 py-2.5 rounded bg-[#18181B] text-white text-xs font-semibold hover:bg-black transition-colors"
                  >
                    View Floor Plan &amp; Specs
                  </button>
                  <a
                    href="#schedule-tour"
                    onClick={() => setTourForm(prev => ({ ...prev, notes: `Tour request for ${prop.title} (${prop.location})` }))}
                    className="py-2.5 px-4 rounded border border-[#E5E0D8] text-[#18181B] text-xs font-semibold hover:bg-[#F4F1EA] transition-colors"
                  >
                    Book Viewing
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Private Tour Engine */}
      <section id="schedule-tour" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-white border border-[#E5E0D8] rounded-xl p-8 md:p-12 shadow-card">
          <div className="text-center space-y-2 mb-8">
            <span className="text-xs font-bold text-[#8C7A5B] uppercase tracking-widest">
              Private Concierge
            </span>
            <h2 className="font-heading font-extrabold text-3xl text-[#18181B]">
              Schedule a Private Property Walkthrough
            </h2>
            <p className="text-xs text-[#71717A] max-w-md mx-auto">
              Our residential partner will coordinate an unhurried, discreet walkthrough at your preferred day and hour.
            </p>
          </div>

          {!tourBooked ? (
            <form onSubmit={handleTourBooking} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#18181B] mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Siddharth Shah"
                    value={tourForm.name}
                    onChange={(e) => setTourForm({ ...tourForm, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded border border-[#E5E0D8] bg-[#FBFBFA] text-xs focus:outline-none focus:border-[#18181B]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#18181B] mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98241 56789"
                    value={tourForm.phone}
                    onChange={(e) => setTourForm({ ...tourForm, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded border border-[#E5E0D8] bg-[#FBFBFA] text-xs focus:outline-none focus:border-[#18181B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#18181B] mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={tourForm.date}
                    onChange={(e) => setTourForm({ ...tourForm, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded border border-[#E5E0D8] bg-[#FBFBFA] text-xs focus:outline-none focus:border-[#18181B]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#18181B] mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={tourForm.time}
                    onChange={(e) => setTourForm({ ...tourForm, time: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded border border-[#E5E0D8] bg-[#FBFBFA] text-xs focus:outline-none focus:border-[#18181B]"
                  >
                    <option>10:00 AM (Morning Natural Light)</option>
                    <option>11:30 AM</option>
                    <option>03:30 PM</option>
                    <option>05:00 PM (Golden Hour Sunset)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#18181B] mb-1">
                  Residences of Interest / Specific Questions
                </label>
                <textarea
                  rows="2"
                  value={tourForm.notes}
                  onChange={(e) => setTourForm({ ...tourForm, notes: e.target.value })}
                  placeholder="Specify particular properties or architectural requirements..."
                  className="w-full px-3.5 py-2 rounded border border-[#E5E0D8] bg-[#FBFBFA] text-xs focus:outline-none focus:border-[#18181B] resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded bg-[#18181B] text-white font-bold text-xs uppercase tracking-wider hover:bg-black transition-colors"
              >
                Confirm Private Viewing Request
              </button>
            </form>
          ) : (
            <div className="p-8 text-center bg-[#F4F1EA] rounded-lg space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#18181B] text-white flex items-center justify-center mx-auto">
                <Check className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-[#18181B]">
                Private Viewing Confirmed
              </h3>
              <p className="text-xs text-[#52525B] max-w-md mx-auto leading-relaxed">
                Thank you, {tourForm.name}. A senior property advisor has reserved {tourForm.time} on {tourForm.date}. Location coordinates and gate clearance pass sent to {tourForm.phone}.
              </p>
              <button
                onClick={() => setTourBooked(false)}
                className="text-xs text-[#8C7A5B] underline font-semibold pt-2 block mx-auto"
              >
                Schedule Another Walkthrough
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Property Details Modal */}
      {selectedProperty && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl bg-white rounded-xl p-6 sm:p-8 border border-[#E5E0D8] shadow-elevated">
            <button
              onClick={() => setSelectedProperty(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-neutral-100 text-neutral-500"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={selectedProperty.image}
              alt={selectedProperty.title}
              className="w-full h-64 object-cover rounded-lg"
            />

            <div className="mt-5 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#8C7A5B]">
                    {selectedProperty.typeName} · {selectedProperty.location}
                  </span>
                  <h3 className="font-heading font-bold text-2xl text-[#18181B]">
                    {selectedProperty.title}
                  </h3>
                </div>
                <div className="font-heading font-extrabold text-2xl text-[#18181B]">
                  {selectedProperty.price}
                </div>
              </div>

              <p className="text-xs text-[#52525B] leading-relaxed">
                {selectedProperty.desc}
              </p>

              <div className="pt-2">
                <div className="text-xs font-bold text-[#18181B] mb-2 uppercase tracking-wider">
                  Signature Amenities Included
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProperty.amenities.map((amenity, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-[#F4F1EA] text-[11px] text-[#524B40] font-medium"
                    >
                      ✓ {amenity}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-3 pt-4 border-t border-[#F4F1EA]">
              <a
                href="#schedule-tour"
                onClick={() => {
                  setTourForm(prev => ({ ...prev, notes: `Tour request for ${selectedProperty.title}` }));
                  setSelectedProperty(null);
                }}
                className="flex-1 py-3 bg-[#18181B] text-white text-xs font-bold uppercase rounded text-center"
              >
                Book VIP Viewing
              </a>
              <button
                onClick={() => setSelectedProperty(null)}
                className="px-5 py-3 border border-[#E5E0D8] text-neutral-700 text-xs font-semibold rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Real Estate Footer */}
      <footer className="border-t border-[#E5E0D8] bg-[#F4F1EA] py-8 px-4 text-center text-xs text-[#71717A]">
        <p className="font-medium text-[#18181B]">Apex Horizons Realty · Vesu &amp; Dumas Road, Surat</p>
        <p className="mt-1">Concept demonstration created by NEXUS LM Web Development Services · Surat</p>
      </footer>
    </div>
  );
}
