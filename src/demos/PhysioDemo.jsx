import React, { useState } from 'react';
import DemoTopBanner from '../components/DemoTopBanner';
import { 
  Activity, 
  Heart, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  User, 
  PhoneCall, 
  ShieldCheck, 
  Check, 
  ArrowRight, 
  Sparkles,
  Zap,
  Award
} from 'lucide-react';

export default function PhysioDemo() {
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: 'Sports Injury Rehabilitation',
    consultType: 'In-Clinic (Adajan Centre)',
    therapist: 'Dr. Rohan Bhatt, MPT (Sports)',
    date: '2026-11-23',
    timeSlot: '09:00 AM – 10:00 AM',
    notes: ''
  });

  const services = [
    {
      id: 's-01',
      title: 'Sports Injury & Athletic Return',
      tag: 'Athletes & Runners',
      desc: 'ACL recovery, rotator cuff rehabilitation, ankle sprains, and kinetic chain bio-mechanical gait retraining.',
      duration: '45-60 Mins',
      price: '₹750 / session',
      icon: Activity
    },
    {
      id: 's-02',
      title: 'Spine, Sciatica & Disc Care',
      tag: 'Back & Neck Pain',
      desc: 'Non-surgical spinal decompression, McKenzie mechanical diagnosis, and deep core postural stabilizer strengthening.',
      duration: '45 Mins',
      price: '₹700 / session',
      icon: Zap
    },
    {
      id: 's-03',
      title: 'Post-Operative Orthopedic Rehab',
      tag: 'Joint Replacements & Fractures',
      desc: 'Structured progressive protocol following total knee replacement, hip arthroplasty, and fracture fixations.',
      duration: '60 Mins',
      price: '₹850 / session',
      icon: ShieldCheck
    },
    {
      id: 's-04',
      title: 'Workplace Ergonomics & Tech Neck',
      tag: 'Corporate & Remote Workers',
      desc: 'Thoracic mobilization, cervical nerve glides, and customized desk ergonomic assessments.',
      duration: '40 Mins',
      price: '₹650 / session',
      icon: Heart
    }
  ];

  const therapists = [
    {
      name: 'Dr. Rohan Bhatt',
      qualification: 'MPT (Sports Rehab), Certified Dry Needling Practitioner (Australia)',
      experience: '12 Years Clinical Experience',
      focus: 'Elite athlete recovery, tendonopathies, and shoulder biomechanics.',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Dr. Priyal Shah',
      qualification: 'BPT, MPT (Neurological & Ortho), Mulligan Certified',
      experience: '9 Years Clinical Experience',
      focus: 'Spine mobilization, chronic pain management, and balance rehabilitation.',
      image: 'https://images.unsplash.com/photo-1594824813583-71861036814c?auto=format&fit=crop&w=400&q=80'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookingConfirmed(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAF9] text-[#1B2A26] font-sans antialiased">
      {/* Top Banner */}
      <DemoTopBanner demoTitle="Kinetic Sports Physio & Rehab (Rehabilitation)" category="Healthcare & Rehabilitation" />

      {/* Header */}
      <header className="border-b border-emerald-100 bg-white/95 sticky top-9 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#059669] text-white flex items-center justify-center font-bold">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <div className="font-heading font-extrabold text-lg text-[#064E3B] tracking-tight">
                KINETIC PHYSIO
              </div>
              <div className="text-[10px] tracking-widest uppercase text-emerald-600 font-semibold">
                Sports &amp; Spine Rehabilitation · Surat
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-emerald-900">
            <a href="#services" className="hover:text-emerald-600 transition-colors">Rehab Programs</a>
            <a href="#therapists" className="hover:text-emerald-600 transition-colors">Therapists</a>
            <a href="#sample-stories" className="hover:text-emerald-600 transition-colors">Recovery Outcomes</a>
            <a href="#book-session" className="hover:text-emerald-600 transition-colors">Book Evaluation</a>
          </nav>

          <a
            href="#book-session"
            className="px-4 py-2 rounded-md bg-[#059669] text-white font-semibold text-xs hover:bg-[#047857] transition-colors"
          >
            Book Free Assessment
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-emerald-100 bg-gradient-to-b from-white to-[#F0FDF4]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              Advanced Biomechanical Therapy · Adajan, Surat
            </div>

            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-[#064E3B] tracking-tight leading-tight">
              Move Without Pain. <br />
              <span className="text-[#059669]">Rebuild Peak Strength.</span>
            </h1>

            <p className="text-slate-600 text-base leading-relaxed max-w-xl">
              We combine manual hands-on mobilization, dry needling, and targeted functional movement retraining so you can return to sports, work, and active life faster.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#book-session"
                className="px-6 py-3 rounded-md bg-[#059669] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#047857] transition-colors shadow-sm"
              >
                Schedule Initial Evaluation
              </a>
              <a
                href="#services"
                className="px-6 py-3 rounded-md border border-emerald-300 text-emerald-900 text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors"
              >
                Explore Treatment Plans
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-emerald-100 text-xs">
              <div>
                <div className="text-2xl font-bold text-[#064E3B]">100%</div>
                <div className="text-slate-500">Certified Therapists</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#064E3B]">Zero</div>
                <div className="text-slate-500">Generic Exercise Sheets</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#064E3B]">1-on-1</div>
                <div className="text-slate-500">Dedicated Care</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white rounded-xl p-4 border border-emerald-100 shadow-card">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
                alt="Physiotherapy Exercise Session"
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="mt-4 p-4 rounded-lg bg-emerald-50 text-xs text-emerald-900 font-medium flex items-center justify-between">
                <span>In-Clinic &amp; Home Visit Physiotherapy Available in Surat</span>
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#059669]">
            Therapy Offerings
          </span>
          <h2 className="font-heading font-extrabold text-3xl text-[#064E3B] tracking-tight mt-1">
            Targeted Rehabilitation Programs
          </h2>
          <p className="text-xs text-slate-500 mt-2">
            Every session is personalized with objective range-of-motion metrics and progressive loading.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-xl p-6 border border-emerald-100 shadow-subtle hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 text-[#059669] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      {item.tag}
                    </span>
                    <h3 className="font-heading font-bold text-base text-[#064E3B] mt-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between text-xs">
                  <span className="text-slate-500">{item.duration}</span>
                  <span className="font-bold text-[#059669]">{item.price}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Therapist Section */}
      <section id="therapists" className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-y border-emerald-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#059669]">
              Certified Practitioners
            </span>
            <h2 className="font-heading font-extrabold text-3xl text-[#064E3B] tracking-tight mt-1">
              Experienced Clinical Team
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {therapists.map((doc, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-emerald-100 bg-[#F8FAF9] flex flex-col sm:flex-row gap-5">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-24 h-24 rounded-lg object-cover border border-emerald-200 shrink-0"
                />
                <div className="space-y-2">
                  <h3 className="font-heading font-bold text-lg text-[#064E3B]">{doc.name}</h3>
                  <div className="text-[11px] text-emerald-700 font-medium">{doc.qualification}</div>
                  <div className="text-xs text-slate-500">{doc.experience}</div>
                  <p className="text-xs text-slate-600 pt-1 leading-relaxed">{doc.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Engine */}
      <section id="book-session" className="py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <div className="bg-white rounded-xl border border-emerald-200 p-8 md:p-10 shadow-card">
          <div className="text-center space-y-2 mb-8">
            <span className="text-xs font-bold text-[#059669] uppercase tracking-widest">
              Direct Scheduling
            </span>
            <h2 className="font-heading font-extrabold text-3xl text-[#064E3B]">
              Book Physiotherapy Session
            </h2>
            <p className="text-xs text-slate-500">
              Select in-clinic appointment at our Adajan branch or request a home-visit therapist in Surat.
            </p>
          </div>

          {!bookingConfirmed ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Hardik Dave"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded border border-slate-300 text-xs focus:outline-none focus:border-[#059669]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    WhatsApp / Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98255 12345"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded border border-slate-300 text-xs focus:outline-none focus:border-[#059669]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Consultation Type
                  </label>
                  <select
                    value={formData.consultType}
                    onChange={(e) => setFormData({ ...formData, consultType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded border border-slate-300 text-xs focus:outline-none focus:border-[#059669]"
                  >
                    <option>In-Clinic (Adajan Centre)</option>
                    <option>In-Clinic (Vesu Centre)</option>
                    <option>Home-Visit Physiotherapy (Surat City)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Select Program
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded border border-slate-300 text-xs focus:outline-none focus:border-[#059669]"
                  >
                    {services.map(s => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded border border-slate-300 text-xs focus:outline-none focus:border-[#059669]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Time Slot
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded border border-slate-300 text-xs focus:outline-none focus:border-[#059669]"
                  >
                    <option>09:00 AM – 10:00 AM</option>
                    <option>10:30 AM – 11:30 AM</option>
                    <option>04:00 PM – 05:00 PM</option>
                    <option>05:30 PM – 06:30 PM</option>
                    <option>07:00 PM – 08:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Describe Pain Location / Injury Details
                </label>
                <textarea
                  rows="2"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Knee pain after running, lower back stiffness in the mornings..."
                  className="w-full px-3.5 py-2 rounded border border-slate-300 text-xs focus:outline-none focus:border-[#059669] resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-md bg-[#059669] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#047857] transition-colors"
              >
                Confirm Physio Booking
              </button>
            </form>
          ) : (
            <div className="p-8 text-center bg-emerald-50 rounded-lg space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#059669] text-white flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-[#064E3B]">
                Session Scheduled!
              </h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, {formData.name}. We have reserved slot <strong>{formData.timeSlot}</strong> on <strong>{formData.date}</strong> for <strong>{formData.serviceType}</strong> ({formData.consultType}).
              </p>
              <button
                onClick={() => setBookingConfirmed(false)}
                className="text-xs text-[#059669] underline font-semibold pt-2 block mx-auto"
              >
                Book Another Evaluation
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Notice about sample content */}
      <section id="sample-stories" className="py-8 px-4 text-center border-t border-emerald-100 text-[11px] text-slate-500">
        <p className="font-semibold text-slate-700">Notice on Clinical Testimonials:</p>
        <p className="max-w-xl mx-auto mt-1">
          Patient recovery case summaries on this demonstration platform are illustrative sample content structured to showcase clinical web application architecture by NEXUS LM.
        </p>
      </section>

      {/* Physio Footer */}
      <footer className="border-t border-emerald-100 bg-white py-8 px-4 text-center text-xs text-slate-500">
        <p className="font-semibold text-[#064E3B]">Kinetic Sports Physio &amp; Rehab · Adajan &amp; Vesu, Surat</p>
        <p className="mt-1">Concept demonstration created by NEXUS LM Web Development Services · Surat</p>
      </footer>
    </div>
  );
}

