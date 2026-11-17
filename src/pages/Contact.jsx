import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Phone,
  MessageSquare,
  MapPin,
  Globe,
  Mail,
  Check,
  ShieldCheck,
  Send,
  Clock,
  ArrowUpRight
} from 'lucide-react';
import { InstagramIcon } from '../components/Icons';
import { companyData } from '../data/company';

export default function Contact() {
  const location = useLocation();
  const prefill = location.state?.message || '';

  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    serviceRequired: 'Business Website Development',
    estimatedBudget: '₹20,000 – ₹35,000 (Basic to Booking Plan)',
    description: prefill,
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const servicesList = [
    'Business Website Development',
    'E-commerce Development',
    'Custom Web Applications',
    'Landing Page Development',
    'UI/UX Design',
    'SEO & Generative Search Optimization',
    'Website Maintenance & Support',
    'SaaS Product Development',
    'Custom Project / Other'
  ];

  const budgetTiers = [
    '₹20,000 – ₹35,000 (Basic to Booking Plan)',
    '₹35,000 – ₹60,000 (Advanced Booking / Catalog)',
    '₹60,000 – ₹90,000 (Complete Online System Plan)',
    '₹90,000+ (Custom Enterprise / SaaS Architecture)',
    'Not Sure / Open to Recommendation'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError('Please provide your name and contact phone/WhatsApp number.');
      return;
    }
    setError('');

    // Pre-format WhatsApp handoff message
    const formatted = `*NEW CLIENT INQUIRY — NEXUS LM WEBSITE*
----------------------------------------
*Name:* ${formData.name.trim()}
*Business Name:* ${formData.businessName.trim() || 'N/A'}
*Contact:* ${formData.phone.trim()}
*Email:* ${formData.email.trim() || 'N/A'}
*Service Required:* ${formData.serviceRequired}
*Estimated Budget:* ${formData.estimatedBudget}
*Project Details:* ${formData.description.trim() || 'Ready to discuss requirements.'}
----------------------------------------
Sent via nexuslm.in Contact Form`;

    const waLink = `https://wa.me/${companyData.contact.whatsappClean}?text=${encodeURIComponent(formatted)}`;
    window.open(waLink, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="py-12 sm:py-20 space-y-20">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#DCDAD4] bg-[#FFFFFF] shadow-subtle">
          <span className="eyebrow">Direct Communications</span>
        </div>

        <h1 className="heading-display max-w-4xl">
          Start a Conversation. <br />
          <span className="text-[#66686A]">Let’s Build Together.</span>
        </h1>

        <p className="text-base sm:text-lg text-[#66686A] max-w-2xl leading-relaxed">
          Whether you need a new business website, an online appointment scheduler, or a comprehensive e-commerce system, our Surat team is ready to assist.
        </p>
      </section>

      {/* Main Grid: Info + Form */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FFFFFF] border border-[#DCDAD4] rounded-nexus-lg p-8 shadow-card space-y-6">
              <h2 className="font-heading font-extrabold text-2xl text-[#17191B]">
                Direct Contact Channels
              </h2>
              <p className="text-xs text-[#66686A] leading-relaxed">
                Connect directly through our official channels. We do not use automated bot filters—you speak directly with our team.
              </p>

              <div className="space-y-4 pt-2">
                {/* WhatsApp */}
                <a
                  href={companyData.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-nexus-sm border border-[#DCDAD4] bg-[#FAF9F6] hover:bg-white hover:border-[#17191B] transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-[#929292] font-semibold">
                      WhatsApp Quick Chat
                    </div>
                    <div className="font-heading font-bold text-sm text-[#17191B]">
                      {companyData.contact.whatsapp}
                    </div>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${companyData.contact.phoneClean}`}
                  className="flex items-center gap-4 p-4 rounded-nexus-sm border border-[#DCDAD4] bg-[#FAF9F6] hover:bg-white hover:border-[#17191B] transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-[#929292] font-semibold">
                      Direct Telephone
                    </div>
                    <div className="font-heading font-bold text-sm text-[#17191B]">
                      {companyData.contact.phone}
                    </div>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href={companyData.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-nexus-sm border border-[#DCDAD4] bg-[#FAF9F6] hover:bg-white hover:border-[#17191B] transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-[#929292] font-semibold">
                      Instagram Official
                    </div>
                    <div className="font-heading font-bold text-sm text-[#17191B]">
                      {companyData.contact.instagram}
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${companyData.contact.email}`}
                  className="flex items-center gap-4 p-4 rounded-nexus-sm border border-[#DCDAD4] bg-[#FAF9F6] hover:bg-white hover:border-[#17191B] transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-neutral-200 text-[#17191B] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-[#929292] font-semibold">
                      Official Email
                    </div>
                    <div className="font-heading font-bold text-sm text-[#17191B]">
                      {companyData.contact.email}
                    </div>
                  </div>
                </a>
              </div>

              {/* Location & Hours */}
              <div className="pt-4 border-t border-[#DCDAD4] space-y-3 text-xs text-[#66686A]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#17191B] shrink-0 mt-0.5" />
                  <span>Surat, Gujarat, India (Serving clients across India &amp; international markets)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#17191B] shrink-0 mt-0.5" />
                  <span>{companyData.contact.hours}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#DCDAD4] rounded-nexus-lg p-8 sm:p-12 shadow-card">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="eyebrow">Project Briefing Form</span>
                  <h2 className="font-heading font-bold text-2xl text-[#17191B] mt-1">
                    Tell Us About Your Project
                  </h2>
                  <p className="text-xs text-[#66686A] mt-1">
                    Complete the details below for an upfront scope review and price estimate.
                  </p>
                </div>

                {error && (
                  <div className="p-3.5 rounded-nexus-sm bg-red-50 border border-red-200 text-red-700 text-xs">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#17191B] mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Yashvardhan Mehta"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-nexus-sm border border-[#DCDAD4] bg-[#FAF9F6] text-xs text-[#17191B] focus:border-[#17191B] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#17191B] mb-1">
                      Business / Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Mehta Exports LLP"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-nexus-sm border border-[#DCDAD4] bg-[#FAF9F6] text-xs text-[#17191B] focus:border-[#17191B] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#17191B] mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98250 98765"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-nexus-sm border border-[#DCDAD4] bg-[#FAF9F6] text-xs text-[#17191B] focus:border-[#17191B] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#17191B] mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. yash@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-nexus-sm border border-[#DCDAD4] bg-[#FAF9F6] text-xs text-[#17191B] focus:border-[#17191B] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#17191B] mb-1">
                      Service Required
                    </label>
                    <select
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-nexus-sm border border-[#DCDAD4] bg-[#FAF9F6] text-xs text-[#17191B] focus:border-[#17191B] focus:bg-white focus:outline-none transition-colors"
                    >
                      {servicesList.map((srv, idx) => (
                        <option key={idx} value={srv}>{srv}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#17191B] mb-1">
                      Estimated Budget
                    </label>
                    <select
                      value={formData.estimatedBudget}
                      onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-nexus-sm border border-[#DCDAD4] bg-[#FAF9F6] text-xs text-[#17191B] focus:border-[#17191B] focus:bg-white focus:outline-none transition-colors"
                    >
                      {budgetTiers.map((b, idx) => (
                        <option key={idx} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#17191B] mb-1">
                    Project Description &amp; Objectives
                  </label>
                  <textarea
                    rows="4"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Tell us about your business goals, target audience, any reference websites, or specific features needed..."
                    className="w-full px-3.5 py-2.5 rounded-nexus-sm border border-[#DCDAD4] bg-[#FAF9F6] text-xs text-[#17191B] focus:border-[#17191B] focus:bg-white focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-[#66686A]">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Direct WhatsApp response within 4 hours</span>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-nexus-sm bg-[#17191B] text-[#F7F5F0] text-xs font-bold uppercase tracking-wider hover:bg-black transition-colors shadow-subtle"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="font-heading font-extrabold text-2xl text-[#17191B]">
                  Inquiry Dispatched Successfully
                </h3>
                <p className="text-xs text-[#66686A] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Your project brief has been formatted and opened for direct WhatsApp discussion with our senior web development team.
                </p>
                <div className="pt-4 flex justify-center gap-3">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-nexus-sm border border-[#DCDAD4] text-xs font-semibold text-[#17191B] hover:bg-[#FAF9F6] transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
