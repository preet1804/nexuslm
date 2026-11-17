import React, { useState } from 'react';
import DemoTopBanner from '../components/DemoTopBanner';
import { 
  Heart, 
  Activity, 
  ShieldCheck, 
  Clock, 
  Calendar, 
  User, 
  PhoneCall, 
  MapPin, 
  Check, 
  Stethoscope, 
  AlertCircle,
  Award,
  ChevronRight
} from 'lucide-react';

export default function HealthcareDemo() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [activeDepartment, setActiveDepartment] = useState('all');
  const [appointmentBooked, setAppointmentBooked] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    patientName: '',
    phone: '',
    age: '',
    department: 'General Internal Medicine',
    doctor: 'Dr. Rajesh Sheth (MD)',
    date: '2026-11-21',
    slot: '10:30 AM – 11:00 AM (Morning)',
    symptoms: ''
  });

  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'cardio', name: 'Cardiology' },
    { id: 'peds', name: 'Pediatrics' },
    { id: 'ortho', name: 'Orthopedics' },
    { id: 'derma', name: 'Dermatology' },
    { id: 'medicine', name: 'Internal Medicine' },
  ];

  const doctors = [
    {
      id: 'doc-01',
      name: 'Dr. Rajesh Sheth',
      degrees: 'MBBS, MD (Medicine), FICP',
      department: 'medicine',
      deptName: 'Internal Medicine',
      experience: '18 Years Experience',
      opd: 'Mon – Sat: 9:30 AM – 1:00 PM',
      consultationFee: '₹800',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
      bio: 'Senior physician specializing in chronic lifestyle disease management, hypertension, and metabolic syndrome.'
    },
    {
      id: 'doc-02',
      name: 'Dr. Shalini Deshmukh',
      degrees: 'MBBS, MS (Ortho), Fellowship Arthroscopy (Germany)',
      department: 'ortho',
      deptName: 'Orthopedics & Joint Care',
      experience: '14 Years Experience',
      opd: 'Mon, Wed, Fri: 2:00 PM – 6:00 PM',
      consultationFee: '₹1,000',
      image: 'https://images.unsplash.com/photo-1594824813583-71861036814c?auto=format&fit=crop&w=600&q=80',
      bio: 'Consultant orthopedic surgeon with expertise in minimally invasive knee preservation and athletic sports trauma.'
    },
    {
      id: 'doc-03',
      name: 'Dr. Vivek Varma',
      degrees: 'MBBS, MD, DM (Cardiology), FACC',
      department: 'cardio',
      deptName: 'Interventional Cardiology',
      experience: '16 Years Experience',
      opd: 'Tue, Thu, Sat: 10:00 AM – 3:00 PM',
      consultationFee: '₹1,200',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80',
      bio: 'Consultant cardiologist focusing on preventive cardiac health, echo Doppler analysis, and cardiac risk mitigation.'
    },
    {
      id: 'doc-04',
      name: 'Dr. Neha Kulkarni',
      degrees: 'MBBS, MD (Pediatrics), DNB (Pediatrics)',
      department: 'peds',
      deptName: 'Pediatrics & Neonatology',
      experience: '11 Years Experience',
      opd: 'Mon – Sat: 11:00 AM – 4:00 PM',
      consultationFee: '₹700',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
      bio: 'Dedicated child specialist dedicated to developmental pediatric milestones, childhood immunizations, and asthma care.'
    }
  ];

  const filteredDoctors = activeDepartment === 'all'
    ? doctors
    : doctors.filter(d => d.department === activeDepartment);

  const handleBooking = (e) => {
    e.preventDefault();
    setAppointmentBooked(true);
  };

  return (
    <div className="min-h-screen bg-[#F4F8F8] text-[#1E293B] font-sans antialiased">
      {/* Top Banner */}
      <DemoTopBanner demoTitle="PulseCare Multi-Speciality Clinic (Healthcare)" category="Healthcare & Clinical Care" />

      {/* Emergency Notification Bar */}
      <div className="bg-[#0D9488] text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>24/7 Clinical Emergency Line &amp; Ambulance Support: <strong>+91 87340 09367</strong></span>
          </div>
          <span className="hidden sm:inline text-[11px] text-teal-100">
            OPD Hours: 9:00 AM – 8:00 PM Daily · Ring Road, Surat
          </span>
        </div>
      </div>

      {/* Clinic Header */}
      <header className="bg-white border-b border-teal-100 sticky top-9 z-30 shadow-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#0D9488] text-white flex items-center justify-center font-bold">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div>
              <div className="font-heading font-extrabold text-xl text-[#0F172A] tracking-tight">
                PULSECARE
              </div>
              <div className="text-[10px] font-semibold text-[#0D9488] tracking-widest uppercase">
                Multi-Speciality Clinic · Surat
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-slate-600">
            <a href="#departments" className="hover:text-[#0D9488] transition-colors">Specialities</a>
            <a href="#doctors" className="hover:text-[#0D9488] transition-colors">Our Doctors</a>
            <a href="#facilities" className="hover:text-[#0D9488] transition-colors">Diagnostic Facilities</a>
            <a href="#book-appointment" className="hover:text-[#0D9488] transition-colors">Book OPD</a>
          </nav>

          <a
            href="#book-appointment"
            className="px-4 py-2 rounded-md bg-[#0D9488] text-white font-semibold text-xs hover:bg-[#0b7c72] transition-colors"
          >
            Request Appointment
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-teal-100 bg-gradient-to-b from-white to-[#F4F8F8]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-medium">
              <ShieldCheck className="w-4 h-4 text-[#0D9488]" />
              NABH-Standard Hygiene · Senior Board-Certified Physicians
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#0F172A] tracking-tight leading-tight">
              Evidence-Based Medicine. <br />
              <span className="text-[#0D9488]">Compassionate Clinical Care.</span>
            </h1>

            <p className="text-slate-600 text-base leading-relaxed max-w-xl">
              PulseCare brings together experienced consultants, modern automated diagnostic pathology, and zero-wait appointment scheduling under one roof in Surat.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#book-appointment"
                className="px-6 py-3 rounded-md bg-[#0D9488] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0b7c72] transition-colors shadow-sm"
              >
                Book In-Clinic Consultation
              </a>
              <a
                href="#doctors"
                className="px-6 py-3 rounded-md border border-slate-300 text-slate-700 text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors"
              >
                View Doctor Schedule
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200">
              <div>
                <div className="text-2xl font-bold text-[#0F172A]">18+</div>
                <div className="text-xs text-slate-500">Super-Specialists</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#0F172A]">0 Min</div>
                <div className="text-xs text-slate-500">Digital Queue Booking</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#0F172A]">100%</div>
                <div className="text-xs text-slate-500">Verified Credentials</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white rounded-xl p-4 border border-teal-100 shadow-card">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
                alt="PulseCare Clinic Consultation"
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="mt-4 p-4 rounded-lg bg-teal-50/70 border border-teal-100 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-teal-900">Digital OPD Queueing System</div>
                  <div className="text-[11px] text-teal-700">Track consultation status on WhatsApp</div>
                </div>
                <Check className="w-5 h-5 text-teal-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Showcase */}
      <section id="doctors" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-bold text-[#0D9488] uppercase tracking-widest">
              Clinical Team
            </span>
            <h2 className="font-heading font-extrabold text-3xl text-[#0F172A] tracking-tight mt-1">
              Consulting Specialists
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Select a doctor to review consulting timings and book a direct consultation slot.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setActiveDepartment(dept.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  activeDepartment === dept.id
                    ? 'bg-[#0D9488] text-white'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {dept.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDoctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-lg border border-teal-100 overflow-hidden shadow-subtle hover:shadow-card transition-all flex flex-col group"
            >
              <img
                src={doc.image}
                alt={doc.name}
                className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <span className="text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded bg-teal-50 text-teal-700">
                    {doc.deptName}
                  </span>
                  <h3 className="font-heading font-bold text-base text-[#0F172A] mt-2">
                    {doc.name}
                  </h3>
                  <div className="text-[11px] text-slate-500 mt-0.5">{doc.degrees}</div>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-2">
                    {doc.bio}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 space-y-1">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-teal-600" />
                    <span>{doc.opd}</span>
                  </div>
                  <div className="flex justify-between font-medium text-slate-700 pt-1">
                    <span>Consultation:</span>
                    <span className="font-bold text-[#0D9488]">{doc.consultationFee}</span>
                  </div>
                </div>

                <a
                  href="#book-appointment"
                  onClick={() => setBookingForm(prev => ({ ...prev, doctor: `${doc.name} (${doc.deptName})` }))}
                  className="w-full py-2 rounded bg-[#0D9488] text-white text-xs font-semibold text-center hover:bg-[#0b7c72] transition-colors"
                >
                  Book with {doc.name.split(' ')[1]}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Appointment Request Engine */}
      <section id="book-appointment" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl border border-teal-200 p-8 md:p-10 shadow-card">
          <div className="text-center space-y-2 mb-8">
            <span className="text-xs font-bold text-[#0D9488] uppercase tracking-widest">
              Digital Slot Reservation
            </span>
            <h2 className="font-heading font-extrabold text-3xl text-[#0F172A]">
              Schedule Clinical Consultation
            </h2>
            <p className="text-xs text-slate-500">
              Receive automated SMS &amp; WhatsApp appointment token with zero waiting room delays.
            </p>
          </div>

          {!appointmentBooked ? (
            <form onSubmit={handleBooking} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Patient Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mukesh Joshi"
                    value={bookingForm.patientName}
                    onChange={(e) => setBookingForm({ ...bookingForm, patientName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded border border-slate-300 text-xs focus:outline-none focus:border-[#0D9488]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98251 23456"
                    value={bookingForm.phone}
                    onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded border border-slate-300 text-xs focus:outline-none focus:border-[#0D9488]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Patient Age
                  </label>
                  <input
                    type="number"
                    placeholder="e.g. 42"
                    value={bookingForm.age}
                    onChange={(e) => setBookingForm({ ...bookingForm, age: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded border border-slate-300 text-xs focus:outline-none focus:border-[#0D9488]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Select Doctor / Speciality
                  </label>
                  <select
                    value={bookingForm.doctor}
                    onChange={(e) => setBookingForm({ ...bookingForm, doctor: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded border border-slate-300 text-xs focus:outline-none focus:border-[#0D9488]"
                  >
                    {doctors.map(d => (
                      <option key={d.id} value={`${d.name} (${d.deptName})`}>
                        {d.name} — {d.deptName}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Consultation Date
                  </label>
                  <input
                    type="date"
                    required
                    value={bookingForm.date}
                    onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded border border-slate-300 text-xs focus:outline-none focus:border-[#0D9488]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Preferred Time Slot
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  {[
                    '10:00 AM – 10:30 AM',
                    '11:00 AM – 11:30 AM',
                    '04:30 PM – 05:00 PM',
                    '06:00 PM – 06:30 PM'
                  ].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setBookingForm({ ...bookingForm, slot: s })}
                      className={`p-2 rounded border text-center transition-colors ${
                        bookingForm.slot === s
                          ? 'border-[#0D9488] bg-teal-50 text-teal-800 font-bold'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Primary Symptoms / Health Concern
                </label>
                <textarea
                  rows="2"
                  value={bookingForm.symptoms}
                  onChange={(e) => setBookingForm({ ...bookingForm, symptoms: e.target.value })}
                  placeholder="Briefly describe what you would like to consult the doctor for..."
                  className="w-full px-3.5 py-2 rounded border border-slate-300 text-xs focus:outline-none focus:border-[#0D9488] resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-md bg-[#0D9488] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#0b7c72] transition-colors"
              >
                Confirm Appointment Request
              </button>
            </form>
          ) : (
            <div className="p-8 text-center bg-teal-50/70 border border-teal-200 rounded-lg space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#0D9488] text-white flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-[#0F172A]">
                Appointment Confirmed!
              </h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                Patient <strong>{bookingForm.patientName}</strong> has been allocated slot <strong>{bookingForm.slot}</strong> on <strong>{bookingForm.date}</strong> with <strong>{bookingForm.doctor}</strong>.
              </p>
              <div className="text-[11px] text-teal-700 font-mono">
                Token #PC-2026-88 · Confirmation sent to {bookingForm.phone}
              </div>
              <button
                onClick={() => setAppointmentBooked(false)}
                className="text-xs text-[#0D9488] underline font-semibold pt-2 block mx-auto"
              >
                Book Another Appointment
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Clinic Footer */}
      <footer className="border-t border-teal-100 bg-white py-8 px-4 text-center text-xs text-slate-500">
        <p className="font-semibold text-slate-700">PulseCare Multi-Speciality Clinic · Ring Road, Surat</p>
        <p className="mt-1">Concept demonstration created by NEXUS LM Web Development Services · Surat</p>
      </footer>
    </div>
  );
}
