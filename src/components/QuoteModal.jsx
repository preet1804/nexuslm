import React, { useState, useEffect } from 'react';
import { X, Check, MessageSquare, Send, ArrowRight, ShieldCheck } from 'lucide-react';
import { pricingPlans } from '../data/pricing';
import { companyData } from '../data/company';

export default function QuoteModal({ isOpen, onClose, initialPlan = null }) {
  const [selectedPlan, setSelectedPlan] = useState(initialPlan || 'booking');
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [timeline, setTimeline] = useState('Standard (2-4 weeks)');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (initialPlan) setSelectedPlan(initialPlan);
  }, [initialPlan]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentPlanObj = pricingPlans.find((p) => p.id === selectedPlan) || pricingPlans[1];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError('Please provide your name and phone/WhatsApp number.');
      return;
    }
    setError('');

    // Prepare WhatsApp message
    const message = `*NEW PROJECT ESTIMATE REQUEST — NEXUS LM*
----------------------------------------
*Name:* ${name.trim()}
*Business Name:* ${businessName.trim() || 'N/A'}
*Contact:* ${phone.trim()}
*Email:* ${email.trim() || 'N/A'}
*Selected Package:* ${currentPlanObj.name} (${currentPlanObj.price})
*Preferred Timeline:* ${timeline}
*Project Notes:* ${notes.trim() || 'Ready to discuss requirements.'}
----------------------------------------
Sent via NEXUS LM Website`;

    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/${companyData.contact.whatsappClean}?text=${encoded}`;

    // Open WhatsApp
    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#FFFFFF] border border-[#DCDAD4] rounded-nexus-lg shadow-elevated p-6 sm:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#66686A] hover:text-[#17191B] hover:bg-[#F7F5F0] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="eyebrow">Project Inquiry</span>
              <h3 className="font-heading font-bold text-2xl text-[#17191B] mt-1">
                Get a Direct Project Estimate
              </h3>
              <p className="text-xs text-[#66686A] mt-1">
                Select your package, provide your details, and connect directly with our engineering team in Surat.
              </p>
            </div>

            {/* Plan Selector */}
            <div className="mb-6">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#17191B] mb-2">
                Select Base Package
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {pricingPlans.map((plan) => (
                  <button
                    key={plan.id}
                    type="button"
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`p-3 rounded-nexus-sm border text-left transition-all relative ${
                      selectedPlan === plan.id
                        ? 'border-[#17191B] bg-[#F7F5F0] ring-1 ring-[#17191B]'
                        : 'border-[#DCDAD4] bg-white hover:border-[#66686A]'
                    }`}
                  >
                    {plan.popular && (
                      <span className="text-[9px] font-bold text-white bg-[#17191B] px-1.5 py-0.5 rounded uppercase tracking-wider block w-fit mb-1">
                        Popular
                      </span>
                    )}
                    <div className="text-xs font-bold text-[#17191B] leading-tight">
                      {plan.name}
                    </div>
                    <div className="text-sm font-extrabold text-[#17191B] mt-1">
                      {plan.price}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 rounded bg-red-50 border border-red-200 text-red-700 text-xs">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#17191B] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rahul Patel"
                    className="w-full px-3.5 py-2 rounded-nexus-sm border border-[#DCDAD4] bg-[#FAF9F6] text-xs text-[#17191B] focus:border-[#17191B] focus:bg-white focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#17191B] mb-1">
                    Business / Company Name
                  </label>
                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="e.g. Patel Silk Mills"
                    className="w-full px-3.5 py-2 rounded-nexus-sm border border-[#DCDAD4] bg-[#FAF9F6] text-xs text-[#17191B] focus:border-[#17191B] focus:bg-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#17191B] mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-3.5 py-2 rounded-nexus-sm border border-[#DCDAD4] bg-[#FAF9F6] text-xs text-[#17191B] focus:border-[#17191B] focus:bg-white focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#17191B] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. rahul@example.com"
                    className="w-full px-3.5 py-2 rounded-nexus-sm border border-[#DCDAD4] bg-[#FAF9F6] text-xs text-[#17191B] focus:border-[#17191B] focus:bg-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#17191B] mb-1">
                  Project Notes & Requirements
                </label>
                <textarea
                  rows="3"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Tell us about your industry, desired features, reference websites, or specific goals..."
                  className="w-full px-3.5 py-2 rounded-nexus-sm border border-[#DCDAD4] bg-[#FAF9F6] text-xs text-[#17191B] focus:border-[#17191B] focus:bg-white focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-1.5 text-[11px] text-[#66686A]">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Direct team response within 4 business hours</span>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-nexus-sm bg-[#17191B] text-[#F7F5F0] text-xs font-semibold uppercase tracking-wider hover:bg-black transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Send via WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-2xl text-[#17191B]">
              Inquiry Dispatched!
            </h3>
            <p className="text-xs text-[#66686A] max-w-md mx-auto">
              Your inquiry for <strong>{currentPlanObj.name}</strong> has been prepared for WhatsApp handoff to our senior web development team.
            </p>
            <div className="pt-4 flex justify-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 rounded-nexus-sm bg-[#17191B] text-[#F7F5F0] text-xs font-semibold uppercase tracking-wider hover:bg-black transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

