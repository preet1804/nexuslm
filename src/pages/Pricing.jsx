import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Check, 
  Minus, 
  HelpCircle, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Calculator,
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import { pricingPlans, pricingNotice } from '../data/pricing';
import { companyData } from '../data/company';

export default function Pricing({ onOpenQuote }) {
  const [selectedPlanForQuote, setSelectedPlanForQuote] = useState('booking');

  // Detailed comparison matrix
  const comparisonMatrix = [
    { feature: 'Custom Bespoke UI/UX Design', basic: true, booking: true, enterprise: true },
    { feature: 'Responsive Mobile, Tablet & Desktop Layouts', basic: true, booking: true, enterprise: true },
    { feature: 'Page Scope', basic: 'Up to 3–5 Pages', booking: 'Up to 6–10 Pages', enterprise: 'Unlimited Custom Scope' },
    { feature: 'Interactive Contact & Lead Capture Forms', basic: true, booking: true, enterprise: true },
    { feature: 'Foundational Google SEO Setup', basic: true, booking: true, enterprise: true },
    { feature: 'Deployment & Production Hosting Setup', basic: true, booking: true, enterprise: true },
    { feature: 'Online Booking & Appointment Scheduler', basic: false, booking: true, enterprise: true },
    { feature: 'Time Slot & Specialist Selection Flow', basic: false, booking: true, enterprise: true },
    { feature: 'WhatsApp Booking Confirmation Flow', basic: false, booking: true, enterprise: true },
    { feature: 'Generative Engine Optimization (GEO / AI Overviews)', basic: false, booking: true, enterprise: true },
    { feature: 'E-commerce Shopping Bag & Checkout Flow', basic: false, booking: false, enterprise: true },
    { feature: 'Product & Service Inventory Management', basic: false, booking: false, enterprise: true },
    { feature: 'Payment Gateway Integration (Razorpay, UPI, Cards)', basic: false, booking: false, enterprise: true },
    { feature: 'Order Management Dashboard', basic: false, booking: false, enterprise: true },
    { feature: 'Multi-Role User Authentication & Portals', basic: false, booking: false, enterprise: true },
  ];

  return (
    <div className="py-12 sm:py-20 space-y-24">
      {/* Pricing Header */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#DCDAD4] bg-[#FFFFFF] shadow-subtle mx-auto">
          <span className="eyebrow">Fixed Investment Packages</span>
        </div>

        <h1 className="heading-display max-w-3xl mx-auto">
          Transparent Website Packages. <br />
          <span className="text-[#66686A]">Zero Hidden Fees.</span>
        </h1>

        <p className="text-base sm:text-lg text-[#66686A] max-w-2xl mx-auto leading-relaxed">
          Predictable agency investments designed for businesses at different growth stages. All plans include custom engineering, mobile responsiveness, and direct support.
        </p>
      </section>

      {/* Pricing Cards Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-nexus-lg border flex flex-col justify-between transition-all relative ${
                plan.popular
                  ? 'bg-[#FFFFFF] border-[#17191B] shadow-elevated ring-2 ring-[#17191B] md:-translate-y-2'
                  : 'bg-[#FFFFFF] border-[#DCDAD4] shadow-card'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#17191B] text-[#F7F5F0] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-subtle">
                  {plan.badge}
                </div>
              )}

              <div className="p-8 sm:p-10 space-y-6">
                <div>
                  <span className="eyebrow">{plan.code}</span>
                  <h3 className="font-heading font-extrabold text-2xl text-[#17191B] mt-1">
                    {plan.name}
                  </h3>
                  <div className="font-heading font-extrabold text-4xl sm:text-5xl text-[#17191B] mt-4 tracking-tight">
                    {plan.price}
                  </div>
                  <div className="text-xs text-[#929292] font-mono mt-1">
                    {plan.period}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#66686A] leading-relaxed">
                  {plan.description}
                </p>

                <div className="pt-6 border-t border-[#DCDAD4] space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#17191B]">
                    Features Included:
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-[#17191B]">
                        <span className="w-4 h-4 rounded-full bg-[#17191B] text-[#F7F5F0] flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span className="text-[#66686A] leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-8 sm:p-10 pt-0">
                <button
                  onClick={() => onOpenQuote(plan.id)}
                  className={`w-full py-3.5 rounded-nexus-sm text-xs font-bold uppercase tracking-wider transition-colors ${
                    plan.popular
                      ? 'bg-[#17191B] text-[#F7F5F0] hover:bg-black shadow-subtle'
                      : 'border border-[#17191B] text-[#17191B] hover:bg-[#17191B] hover:text-[#F7F5F0]'
                  }`}
                >
                  {plan.ctaText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Transparent Pricing Disclaimer Box */}
        <div className="mt-12 p-6 rounded-nexus-md border border-[#DCDAD4] bg-[#FFFFFF] shadow-subtle flex items-start gap-4 text-xs text-[#66686A] leading-relaxed">
          <AlertCircle className="w-5 h-5 text-[#17191B] shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#17191B] block mb-1">
              Transparent Scope &amp; Third-Party Fees Notice:
            </strong>
            {pricingNotice}
          </div>
        </div>
      </section>

      {/* Feature Comparison Matrix */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="eyebrow">Side-by-Side</span>
          <h2 className="heading-section">Package Feature Comparison</h2>
          <p className="text-xs text-[#66686A]">
            Compare capabilities across Essential, Online Booking, and Complete System plans.
          </p>
        </div>

        <div className="bg-[#FFFFFF] border border-[#DCDAD4] rounded-nexus-lg overflow-x-auto shadow-subtle">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-[#DCDAD4] bg-[#FAF9F6]">
                <th className="py-4 px-6 font-bold text-[#17191B] uppercase tracking-wider text-[11px] w-1/3">
                  Capability / Deliverable
                </th>
                <th className="py-4 px-6 font-bold text-[#17191B] text-center w-1/5">
                  <div className="uppercase tracking-wider">Plan 01</div>
                  <div className="text-sm font-extrabold mt-0.5">Basic (₹20,000)</div>
                </th>
                <th className="py-4 px-6 font-bold text-[#17191B] text-center w-1/5 bg-[#F7F5F0] border-x border-[#DCDAD4]">
                  <div className="uppercase tracking-wider text-[#17191B]">Plan 02 (Popular)</div>
                  <div className="text-sm font-extrabold mt-0.5">Booking (₹34,500)</div>
                </th>
                <th className="py-4 px-6 font-bold text-[#17191B] text-center w-1/5">
                  <div className="uppercase tracking-wider">Plan 03</div>
                  <div className="text-sm font-extrabold mt-0.5">Enterprise (₹89,999)</div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#DCDAD4]/60">
              {comparisonMatrix.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#FAF9F6] transition-colors">
                  <td className="py-3.5 px-6 font-medium text-[#17191B]">
                    {row.feature}
                  </td>
                  <td className="py-3.5 px-6 text-center text-[#66686A]">
                    {typeof row.basic === 'boolean' ? (
                      row.basic ? (
                        <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                      ) : (
                        <Minus className="w-4 h-4 text-[#929292] mx-auto" />
                      )
                    ) : (
                      <span>{row.basic}</span>
                    )}
                  </td>
                  <td className="py-3.5 px-6 text-center text-[#17191B] font-semibold bg-[#F7F5F0] border-x border-[#DCDAD4]">
                    {typeof row.booking === 'boolean' ? (
                      row.booking ? (
                        <Check className="w-4 h-4 text-emerald-600 mx-auto font-bold" />
                      ) : (
                        <Minus className="w-4 h-4 text-[#929292] mx-auto" />
                      )
                    ) : (
                      <span>{row.booking}</span>
                    )}
                  </td>
                  <td className="py-3.5 px-6 text-center text-[#66686A]">
                    {typeof row.enterprise === 'boolean' ? (
                      row.enterprise ? (
                        <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                      ) : (
                        <Minus className="w-4 h-4 text-[#929292] mx-auto" />
                      )
                    ) : (
                      <span>{row.enterprise}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Custom Quote Option */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#171A1D] text-[#F7F5F0] rounded-nexus-lg p-8 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#A9A99F]">
              Need a Custom Architecture?
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
              Request a Bespoke Technical Quotation
            </h2>
            <p className="text-xs sm:text-sm text-[#A9A99F] leading-relaxed">
              If your requirements exceed standard packages—such as complex enterprise databases, internal multi-branch portals, or SaaS products—we provide custom milestone scoping.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={() => onOpenQuote('enterprise')}
              className="px-6 py-3.5 rounded-nexus-sm bg-[#F7F5F0] text-[#17191B] font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors"
            >
              Request Custom Estimate
            </button>
            <a
              href={companyData.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-nexus-sm border border-charcoal-700 text-[#F7F5F0] font-semibold text-xs uppercase tracking-wider hover:bg-charcoal-800 transition-colors text-center"
            >
              Direct WhatsApp Scoping
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

