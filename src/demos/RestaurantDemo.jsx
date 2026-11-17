import React, { useState } from 'react';
import DemoTopBanner from '../components/DemoTopBanner';
import { 
  Utensils, 
  Calendar, 
  Clock, 
  Users, 
  Check, 
  Sparkles, 
  MapPin, 
  Phone, 
  Wine, 
  Coffee, 
  HeartHandshake,
  ChevronDown
} from 'lucide-react';

export default function RestaurantDemo() {
  const [activeMenuTab, setActiveMenuTab] = useState('mains');
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [reservation, setReservation] = useState({
    name: '',
    phone: '',
    email: '',
    date: '2026-11-20',
    time: '20:00',
    guests: '2 Guests',
    seating: 'Main Dining Room',
    notes: ''
  });

  const menuCategories = [
    { id: 'starters', label: 'Small Plates' },
    { id: 'woodfired', label: 'Woodfired & Hearth' },
    { id: 'mains', label: 'Main Courses' },
    { id: 'desserts', label: 'Pastry & Desserts' },
    { id: 'drinks', label: 'Artisanal Cocktails' },
  ];

  const menuItems = [
    {
      id: 'm-01',
      category: 'starters',
      name: 'Smoked Burrata & Charred Figs',
      price: '₹680',
      dietary: ['Vegetarian', 'Chef Signature'],
      desc: 'Local artisanal burrata, wild honeycomb glaze, toasted pine nuts, crushed zaatar, and warm sourdough crisps.',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'm-02',
      category: 'starters',
      name: 'Charred Saffron King Oyster Mushrooms',
      price: '₹590',
      dietary: ['Vegan', 'Gluten-Free'],
      desc: 'Glazed with Kashmiri saffron garlic butter, crispy capers, and silken parsnip puree.',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'm-03',
      category: 'woodfired',
      name: 'Hearth-Baked Truffle Flatbread',
      price: '₹750',
      dietary: ['Vegetarian'],
      desc: 'Slow-fermented 48-hour sourdough base, wild forest mushrooms, fontina cheese, shaved black summer truffle.',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'm-04',
      category: 'woodfired',
      name: 'Charcoal Smoked Paneer Tikka Noir',
      price: '₹620',
      dietary: ['Vegetarian', 'Gluten-Free'],
      desc: 'Organic buffalo paneer marinated in black garlic, Kashmiri chili emulsion, and house-pickled shallots.',
      image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'm-05',
      category: 'mains',
      name: 'Slow-Braised Morel Risotto',
      price: '₹890',
      dietary: ['Vegetarian', 'Chef Signature'],
      desc: 'Aquarello carnaroli rice, Himalayan morel mushrooms, aged 24-month Parmigiano-Reggiano, and sage brown butter.',
      image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'm-06',
      category: 'mains',
      name: 'Pan-Roasted Sea Bass in Lemongrass Broth',
      price: '₹1,250',
      dietary: ['Gluten-Free'],
      desc: 'Crispy-skin coastal sea bass, baby bok choy, infused coconut ginger fumet, and fragrant lotus chips.',
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'm-07',
      category: 'desserts',
      name: 'Smoked Valrhona Chocolate Tart',
      price: '₹520',
      dietary: ['Vegetarian', 'Chef Signature'],
      desc: '70% dark Guanaja ganache, salted hazelnut praline crunch, roasted espresso ice cream.',
      image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'm-08',
      category: 'drinks',
      name: 'Smoked Sage & Cardamom Old Fashioned',
      price: '₹680',
      dietary: ['Artisanal Blend'],
      desc: 'Bourbon infused with toasted green cardamom, charred organic sage, Angostura bitters, hand-carved ice sphere.',
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const filteredItems = menuItems.filter(item => item.category === activeMenuTab);

  const handleBooking = (e) => {
    e.preventDefault();
    setBookingSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#111213] text-[#E8E6E3] font-sans antialiased selection:bg-[#C28E58] selection:text-black">
      {/* Top Banner */}
      <DemoTopBanner demoTitle="Saffron & Sage Dining (Hospitality)" category="Hospitality & Dining" />

      {/* Restaurant Header */}
      <header className="border-b border-neutral-800 bg-[#111213]/90 sticky top-9 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-[#C28E58] flex items-center justify-center text-[#C28E58]">
              <Utensils className="w-4 h-4" />
            </div>
            <div>
              <div className="font-serif text-2xl tracking-widest text-[#E8E6E3] uppercase">
                Saffron &amp; Sage
              </div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-[#C28E58]">
                Contemporary Dining · Lounge
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-widest text-neutral-400">
            <a href="#story" className="hover:text-white transition-colors">Philosophy</a>
            <a href="#menu" className="hover:text-white transition-colors">Tasting Menu</a>
            <a href="#gallery" className="hover:text-white transition-colors">Atmosphere</a>
            <a href="#reservations" className="hover:text-white transition-colors">Reservations</a>
          </nav>

          <a
            href="#reservations"
            className="px-5 py-2.5 rounded bg-[#C28E58] text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#d59e66] transition-colors"
          >
            Book a Table
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden text-center">
        {/* Background Atmosphere Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80"
            alt="Saffron and Sage Restaurant Dining Room"
            className="w-full h-full object-cover opacity-25 filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111213] via-[#111213]/60 to-[#111213]/40"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-6 pt-12">
          <span className="inline-block text-xs uppercase tracking-[0.35em] text-[#C28E58] font-mono">
            Seasonal Hearth Gastronomy
          </span>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#F5F3EF] tracking-wide leading-tight">
            Where Fire, Forage &amp; <br />
            Spices Converge.
          </h1>

          <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            A celebration of regional micro-seasons, heirloom botanical spices, and open woodfire technique. Located in Dumas Road, Surat.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <a
              href="#reservations"
              className="px-8 py-3.5 rounded bg-[#C28E58] text-black font-bold text-xs uppercase tracking-widest hover:bg-[#d59e66] transition-colors"
            >
              Reserve an Evening
            </a>
            <a
              href="#menu"
              className="px-8 py-3.5 rounded border border-neutral-700 text-[#E8E6E3] font-semibold text-xs uppercase tracking-widest hover:bg-neutral-800 transition-colors"
            >
              Explore Course Menu
            </a>
          </div>

          <div className="pt-10 flex items-center justify-center gap-8 text-xs text-neutral-400 font-mono">
            <div>DINNER: 7:00 PM – 11:30 PM</div>
            <span>•</span>
            <div>WEEKEND BRUNCH: 12:00 PM – 3:30 PM</div>
          </div>
        </div>
      </section>

      {/* Story / Philosophy Section */}
      <section id="story" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-neutral-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C28E58] font-mono">
              Our Culinary Discipline
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white">
              No shortcuts. Wood embers. Heritage botanicals.
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Every dish at Saffron &amp; Sage is an ode to patience. We source cold-pressed oils from organic Saurashtra groves, saffron directly from Pampore farmers, and stoneground grains from ancient cultivars.
            </p>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Our hearth burns seasoned applewood and charcoal, producing gentle caramelization and depth that modern electric cooking can never replicate.
            </p>
            <div className="pt-2 flex items-center gap-4">
              <div className="w-12 h-[1px] bg-[#C28E58]"></div>
              <span className="font-serif italic text-sm text-[#C28E58]">Chef Aanand Vardhan · Executive Culinary Director</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80"
              alt="Hearth Kitchen"
              className="rounded-lg object-cover h-64 w-full border border-neutral-800"
            />
            <img
              src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
              alt="Plated Dish"
              className="rounded-lg object-cover h-64 w-full mt-8 border border-neutral-800"
            />
          </div>
        </div>
      </section>

      {/* Interactive Menu Section */}
      <section id="menu" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#161718] border-y border-neutral-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C28E58] font-mono">
              À La Carte &amp; Chef's Table
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white">
              The Seasonal Tasting Menu
            </h2>
            <p className="text-xs text-neutral-400 max-w-md mx-auto">
              Prepared fresh to order. Dietary accommodations happily arranged with 24-hour advance notice.
            </p>
          </div>

          {/* Menu Category Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveMenuTab(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                  activeMenuTab === cat.id
                    ? 'bg-[#C28E58] text-black shadow-lg shadow-[#C28E58]/20'
                    : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-lg bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-all flex gap-5 group"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 rounded object-cover border border-neutral-800 shrink-0 group-hover:scale-105 transition-transform"
                />
                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-serif text-lg text-white font-medium group-hover:text-[#C28E58] transition-colors">
                      {item.name}
                    </h3>
                    <span className="font-mono text-sm font-bold text-[#C28E58] shrink-0">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.dietary.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 border border-neutral-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Table Reservation Engine */}
      <section id="reservations" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 md:p-12 shadow-elevated">
          <div className="text-center space-y-3 mb-10">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C28E58] font-mono">
              Online Table Service
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white">
              Reserve Your Table
            </h2>
            <p className="text-xs text-neutral-400 max-w-md mx-auto">
              Tables are held for 15 minutes past scheduled seating. For parties larger than 8, please contact our concierge directly.
            </p>
          </div>

          {!bookingSubmitted ? (
            <form onSubmit={handleBooking} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                    Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      value={reservation.date}
                      onChange={(e) => setReservation({ ...reservation, date: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded bg-neutral-800 border border-neutral-700 text-xs text-white focus:outline-none focus:border-[#C28E58]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                    Time Seating
                  </label>
                  <select
                    value={reservation.time}
                    onChange={(e) => setReservation({ ...reservation, time: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded bg-neutral-800 border border-neutral-700 text-xs text-white focus:outline-none focus:border-[#C28E58]"
                  >
                    <option value="19:00">7:00 PM (Dinner)</option>
                    <option value="19:30">7:30 PM (Dinner)</option>
                    <option value="20:00">8:00 PM (Prime Dinner)</option>
                    <option value="20:30">8:30 PM (Prime Dinner)</option>
                    <option value="21:00">9:00 PM (Late Dinner)</option>
                    <option value="21:30">9:30 PM (Late Dinner)</option>
                    <option value="12:30">12:30 PM (Lunch)</option>
                    <option value="13:30">1:30 PM (Lunch)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                    Number of Guests
                  </label>
                  <select
                    value={reservation.guests}
                    onChange={(e) => setReservation({ ...reservation, guests: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded bg-neutral-800 border border-neutral-700 text-xs text-white focus:outline-none focus:border-[#C28E58]"
                  >
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4 Guests</option>
                    <option>5 Guests</option>
                    <option>6 Guests</option>
                    <option>7-8 Guests (Lounge Seating)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                    Guest Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ananya Shah"
                    value={reservation.name}
                    onChange={(e) => setReservation({ ...reservation, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded bg-neutral-800 border border-neutral-700 text-xs text-white focus:outline-none focus:border-[#C28E58]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                    Contact Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={reservation.phone}
                    onChange={(e) => setReservation({ ...reservation, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded bg-neutral-800 border border-neutral-700 text-xs text-white focus:outline-none focus:border-[#C28E58]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                    Seating Area
                  </label>
                  <select
                    value={reservation.seating}
                    onChange={(e) => setReservation({ ...reservation, seating: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded bg-neutral-800 border border-neutral-700 text-xs text-white focus:outline-none focus:border-[#C28E58]"
                  >
                    <option>Main Dining Room</option>
                    <option>Garden Courtyard</option>
                    <option>Chef's Hearth Counter</option>
                    <option>Private Wine Cellar</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                  Special Notes / Dietary Celebrations
                </label>
                <input
                  type="text"
                  placeholder="e.g. Celebrating 10th anniversary, nut allergy, quiet corner table preferred"
                  value={reservation.notes}
                  onChange={(e) => setReservation({ ...reservation, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded bg-neutral-800 border border-neutral-700 text-xs text-white focus:outline-none focus:border-[#C28E58]"
                />
              </div>

              <div className="pt-2 text-center">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-3.5 rounded bg-[#C28E58] text-black font-bold text-xs uppercase tracking-widest hover:bg-[#d59e66] transition-colors"
                >
                  Confirm Reservation Request
                </button>
              </div>
            </form>
          ) : (
            <div className="p-8 text-center bg-neutral-800/80 rounded-lg space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#C28E58] text-black flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-white">
                Table Reserved, {reservation.name}
              </h3>
              <p className="text-xs text-neutral-300 max-w-md mx-auto leading-relaxed">
                Your reservation for <strong>{reservation.guests}</strong> on <strong>{reservation.date}</strong> at <strong>{reservation.time}</strong> in our <strong>{reservation.seating}</strong> has been received. Our maître d' will confirm via WhatsApp at {reservation.phone}.
              </p>
              <button
                onClick={() => setBookingSubmitted(false)}
                className="text-xs text-[#C28E58] underline tracking-wider pt-2 block mx-auto"
              >
                Modify or Make Another Reservation
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Location & Hours */}
      <footer className="border-t border-neutral-800 py-12 px-4 sm:px-6 lg:px-8 bg-black text-center text-xs text-neutral-400">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="font-serif text-xl text-white">Saffron &amp; Sage Dining</div>
          <p>The Promenade, Dumas Road, Surat, Gujarat 395007</p>
          <p>Reservations Desk: +91 63550 49071 · concierge@saffronsage-surat.example</p>
          <div className="pt-4 text-neutral-500 text-[11px] border-t border-neutral-900">
            Concept demonstration created by NEXUS LM Web Development Services · Surat
          </div>
        </div>
      </footer>
    </div>
  );
}
