import React, { useState } from 'react';
import DemoTopBanner from '../components/DemoTopBanner';
import { 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Calculator, 
  MapPin, 
  Clock, 
  PhoneCall, 
  Check, 
  Zap,
  Home,
  Building2,
  Calendar
} from 'lucide-react';

export default function HousekeepingDemo() {
  const [bhkSize, setBhkSize] = useState('2bhk');
  const [cleaningTier, setCleaningTier] = useState('deep');
  const [addons, setAddons] = useState({
    sofa: false,
    fridge: false,
    balcony: false,
  });
  const [postalCheck, setPostalCheck] = useState('');
  const [zoneStatus, setZoneStatus] = useState(null);
  const [bookingDone, setBookingDone] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    date: '2026-11-24',
    time: '09:00 AM (Morning Batch)',
    notes: ''
  });

  // Dynamic pricing calculation
  const basePrices = {
    '1bhk': { standard: 1799, deep: 2899, movein: 3499 },
    '2bhk': { standard: 2499, deep: 3999, movein: 4899 },
    '3bhk': { standard: 3299, deep: 5299, movein: 6499 },
    '4bhk': { standard: 4299, deep: 6899, movein: 8499 },
    'villa': { standard: 6999, deep: 10999, movein: 13499 },
  };

  const addonPrices = {
    sofa: 800,
    fridge: 450,
    balcony: 500,
  };

  const calculatedTotal = 
    basePrices[bhkSize][cleaningTier] + 
    (addons.sofa ? addonPrices.sofa : 0) + 
    (addons.fridge ? addonPrices.fridge : 0) + 
    (addons.balcony ? addonPrices.balcony : 0);

  const coveredSuratAreas = [
    'vesu', 'adajan', 'pal', 'piplod', 'city light', 'althan', 
    'dumas road', 'varachha', 'katargam', 'bhatar', 'rander'
  ];

  const handleCheckArea = (e) => {
    e.preventDefault();
    if (!postalCheck.trim()) return;
    const clean = postalCheck.toLowerCase().trim();
    const isCovered = coveredSuratAreas.some(area => clean.includes(area)) || clean === '395007' || clean === '395009' || clean === '395001' || clean === '394230';
    setZoneStatus(isCovered ? 'covered' : 'custom');
  };

  const handleBooking = (e) => {
    e.preventDefault();
    setBookingDone(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans antialiased">
      {/* Top Banner */}
      <DemoTopBanner demoTitle="SparkleClean Facility Care (Housekeeping)" category="Facility & Home Services" />

      {/* Header */}
      <header className="border-b border-sky-100 bg-white/95 sticky top-9 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#0284C7] text-white flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="font-heading font-extrabold text-lg text-[#0369A1] tracking-tight">
                SPARKLECLEAN
              </div>
              <div className="text-[10px] tracking-widest uppercase text-sky-600 font-semibold">
                Facility &amp; Home Care · Surat
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-slate-600">
            <a href="#services" className="hover:text-sky-600 transition-colors">Services</a>
            <a href="#calculator" className="hover:text-sky-600 transition-colors">Instant Estimator</a>
            <a href="#service-area" className="hover:text-sky-600 transition-colors">Coverage Areas</a>
            <a href="#book-clean" className="hover:text-sky-600 transition-colors">Book Now</a>
          </nav>

          <a
            href="#calculator"
            className="px-4 py-2 rounded-md bg-[#0284C7] text-white font-semibold text-xs hover:bg-[#0369A1] transition-colors"
          >
            Calculate Cost
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-sky-100 bg-gradient-to-b from-white to-[#F0F9FF]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-sky-600" />
              Verified Background-Checked Staff · Hospital-Grade Disinfectants
            </div>

            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-[#0F172A] tracking-tight leading-tight">
              Immaculate Spaces. <br />
              <span className="text-[#0284C7]">Guaranteed Peace of Mind.</span>
            </h1>

            <p className="text-slate-600 text-base leading-relaxed max-w-xl">
              From full deep house scrubbing before festivals to corporate office sanitization in Surat, we provide professional motorized cleaning with certified non-toxic detergents.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#calculator"
                className="px-6 py-3 rounded-md bg-[#0284C7] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0369A1] transition-colors shadow-sm"
              >
                Instant Price Calculator
              </a>
              <a
                href="#book-clean"
                className="px-6 py-3 rounded-md border border-sky-300 text-sky-900 text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors"
              >
                Book Dispatch Slot
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-sky-100 text-xs">
              <div>
                <div className="text-2xl font-bold text-[#0F172A]">5,000+</div>
                <div className="text-slate-500">Homes Cleaned in Surat</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#0F172A]">100%</div>
                <div className="text-slate-500">Eco-Friendly Solutions</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#0F172A]">4.9★</div>
                <div className="text-slate-500">Service Rating</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white rounded-xl p-4 border border-sky-100 shadow-card">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"
                alt="Housekeeping Cleaning Service Team"
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="mt-4 p-4 rounded-lg bg-sky-50 text-xs text-sky-900 font-medium flex items-center justify-between">
                <span>Motorized floor scrubbing &amp; high-pressure steam sanitization</span>
                <Sparkles className="w-5 h-5 text-sky-600 shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Price Estimator Engine */}
      <section id="calculator" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl border border-sky-200 p-8 md:p-12 shadow-card">
          <div className="text-center space-y-2 mb-10">
            <span className="text-xs font-bold text-[#0284C7] uppercase tracking-widest">
              Live Estimator
            </span>
            <h2 className="font-heading font-extrabold text-3xl text-[#0F172A]">
              Interactive Home Cleaning Estimator
            </h2>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Select your layout and intensity for instant, transparent pricing. No surprise hidden charges on site.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Options (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Step 1: Layout Size */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  1. Select Property Size
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {[
                    { id: '1bhk', label: '1 BHK' },
                    { id: '2bhk', label: '2 BHK' },
                    { id: '3bhk', label: '3 BHK' },
                    { id: '4bhk', label: '4 BHK' },
                    { id: 'villa', label: 'Villa / Row' },
                  ].map((size) => (
                    <button
                      key={size.id}
                      type="button"
                      onClick={() => setBhkSize(size.id)}
                      className={`py-2 px-3 rounded text-xs font-semibold border transition-all ${
                        bhkSize === size.id
                          ? 'bg-[#0284C7] text-white border-[#0284C7] shadow-sm'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {size.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Cleaning Intensity */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  2. Select Cleaning Intensity
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'standard', name: 'Standard Wipe', desc: 'Mopping, dusting, bathrooms' },
                    { id: 'deep', name: 'Deep Intensive', desc: 'Degreasing, tile scrubbing, acid-free' },
                    { id: 'movein', name: 'Move-In / Post-Paint', desc: 'Paint stain scraping, full sanitization' },
                  ].map((tier) => (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setCleaningTier(tier.id)}
                      className={`p-3 rounded text-left border transition-all ${
                        cleaningTier === tier.id
                          ? 'border-[#0284C7] bg-sky-50/70 ring-1 ring-[#0284C7]'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <div className="text-xs font-bold text-slate-800">{tier.name}</div>
                      <div className="text-[10px] text-slate-500 mt-1">{tier.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Add-on Services */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  3. Add-on Treatments (Optional)
                </label>
                <div className="space-y-2">
                  <label className="flex items-center justify-between p-2.5 rounded border border-slate-200 bg-slate-50/50 cursor-pointer">
                    <span className="text-xs text-slate-700">Deep Sofa &amp; Upholstery Shampoo (+₹800)</span>
                    <input
                      type="checkbox"
                      checked={addons.sofa}
                      onChange={(e) => setAddons({ ...addons, sofa: e.target.checked })}
                      className="w-4 h-4 text-sky-600 rounded"
                    />
                  </label>
                  <label className="flex items-center justify-between p-2.5 rounded border border-slate-200 bg-slate-50/50 cursor-pointer">
                    <span className="text-xs text-slate-700">Internal Fridge &amp; Microwave Steam Clean (+₹450)</span>
                    <input
                      type="checkbox"
                      checked={addons.fridge}
                      onChange={(e) => setAddons({ ...addons, fridge: e.target.checked })}
                      className="w-4 h-4 text-sky-600 rounded"
                    />
                  </label>
                  <label className="flex items-center justify-between p-2.5 rounded border border-slate-200 bg-slate-50/50 cursor-pointer">
                    <span className="text-xs text-slate-700">Balcony High-Pressure Water Jet Wash (+₹500)</span>
                    <input
                      type="checkbox"
                      checked={addons.balcony}
                      onChange={(e) => setAddons({ ...addons, balcony: e.target.checked })}
                      className="w-4 h-4 text-sky-600 rounded"
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* Price Output Summary (5 cols) */}
            <div className="lg:col-span-5 bg-sky-50 rounded-xl p-6 border border-sky-200 space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-sky-700">
                Calculated Estimate
              </span>

              <div className="border-b border-sky-200/80 pb-4">
                <div className="text-xs text-slate-500">Estimated Total Cost</div>
                <div className="text-3xl font-extrabold text-[#0369A1] font-heading mt-1">
                  ₹{calculatedTotal.toLocaleString('en-IN')}
                </div>
                <div className="text-[11px] text-slate-500 mt-1">Includes all taxes, chemicals, and machine gear.</div>
              </div>

              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>Configuration:</span>
                  <span className="font-semibold text-slate-800 uppercase">{bhkSize} · {cleaningTier}</span>
                </div>
                <div className="flex justify-between">
                  <span>Crew Size:</span>
                  <span className="font-semibold text-slate-800">2–4 Professional Cleaners</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Duration:</span>
                  <span className="font-semibold text-slate-800">3.5 to 5 Hours</span>
                </div>
              </div>

              <a
                href="#book-clean"
                className="w-full py-3 rounded bg-[#0284C7] text-white font-bold text-xs uppercase tracking-wider text-center block hover:bg-[#0369A1] transition-colors"
              >
                Lock In This Rate &amp; Book
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Surat Area Check */}
      <section id="service-area" className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl border border-sky-100 p-8 shadow-subtle text-center space-y-4">
          <span className="text-xs font-bold text-[#0284C7] uppercase tracking-widest">
            Coverage Check
          </span>
          <h2 className="font-heading font-bold text-2xl text-[#0F172A]">
            Does SparkleClean Serve Your Surat Locality?
          </h2>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            We provide same-day and scheduled dispatch across all primary Surat residential &amp; commercial zones.
          </p>

          <form onSubmit={handleCheckArea} className="max-w-md mx-auto flex gap-2 pt-2">
            <input
              type="text"
              placeholder="Enter your area (e.g. Vesu, Adajan, Pal, 395007)..."
              value={postalCheck}
              onChange={(e) => setPostalCheck(e.target.value)}
              className="flex-1 px-3.5 py-2 rounded border border-slate-300 text-xs focus:outline-none focus:border-sky-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#0284C7] text-white text-xs font-semibold rounded hover:bg-[#0369A1] transition-colors"
            >
              Check Zone
            </button>
          </form>

          {zoneStatus === 'covered' && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-md max-w-md mx-auto flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Great news! Immediate daily dispatch available in your area.</span>
            </div>
          )}

          {zoneStatus === 'custom' && (
            <div className="p-3 bg-sky-50 border border-sky-200 text-sky-800 text-xs rounded-md max-w-md mx-auto">
              We cover surrounding Surat areas with nominal transit allowance. Please confirm via booking form.
            </div>
          )}
        </div>
      </section>

      {/* Booking Form */}
      <section id="book-clean" className="py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <div className="bg-white rounded-xl border border-sky-200 p-8 md:p-10 shadow-card">
          <div className="text-center space-y-2 mb-8">
            <span className="text-xs font-bold text-[#0284C7] uppercase tracking-widest">
              Direct Service Dispatch
            </span>
            <h2 className="font-heading font-extrabold text-3xl text-[#0F172A]">
              Confirm Cleaning Booking
            </h2>
          </div>

          {!bookingDone ? (
            <form onSubmit={handleBooking} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Bhavik Parmar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded border border-slate-300 text-xs focus:outline-none focus:border-[#0284C7]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98254 78901"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded border border-slate-300 text-xs focus:outline-none focus:border-[#0284C7]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Apartment / Society Address in Surat *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Flat 602, Royal Residency, VIP Road, Vesu, Surat"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded border border-slate-300 text-xs focus:outline-none focus:border-[#0284C7]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Service Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded border border-slate-300 text-xs focus:outline-none focus:border-[#0284C7]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Arrival Slot
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded border border-slate-300 text-xs focus:outline-none focus:border-[#0284C7]"
                  >
                    <option>09:00 AM (Morning Batch)</option>
                    <option>11:30 AM</option>
                    <option>02:00 PM (Afternoon Batch)</option>
                    <option>04:30 PM (Evening Quick Clean)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Additional Notes (Key handoff, parking instructions, pet at home)
                </label>
                <textarea
                  rows="2"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Tell our cleaning supervisors about any specific focus areas..."
                  className="w-full px-3.5 py-2 rounded border border-slate-300 text-xs focus:outline-none focus:border-[#0284C7] resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded bg-[#0284C7] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#0369A1] transition-colors"
              >
                Confirm Dispatch Reservation
              </button>
            </form>
          ) : (
            <div className="p-8 text-center bg-sky-50 rounded-lg space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#0284C7] text-white flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-[#0369A1]">
                Booking Confirmed!
              </h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, {formData.name}. Our housekeeping team will arrive at {formData.address} on <strong>{formData.date}</strong> at <strong>{formData.time}</strong> for <strong>{bhkSize.toUpperCase()} ({cleaningTier})</strong>. Dispatch confirmation sent to {formData.phone}.
              </p>
              <button
                onClick={() => setBookingDone(false)}
                className="text-xs text-[#0284C7] underline font-semibold pt-2 block mx-auto"
              >
                Make Another Booking
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Housekeeping Footer */}
      <footer className="border-t border-sky-100 bg-white py-8 px-4 text-center text-xs text-slate-500">
        <p className="font-semibold text-slate-700">SparkleClean Facility Care · Surat, Gujarat</p>
        <p className="mt-1">Concept demonstration created by NEXUS LM Web Development Services · Surat</p>
      </footer>
    </div>
  );
}
