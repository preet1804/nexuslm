import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  ShoppingBag, 
  LayoutDashboard, 
  Target, 
  Palette, 
  Search, 
  ShieldCheck, 
  Cpu, 
  ArrowRight, 
  ArrowUpRight, 
  Check, 
  Sparkles,
  HelpCircle,
  FileCheck2,
  Clock
} from 'lucide-react';
import { servicesData } from '../data/services';
import { companyData } from '../data/company';

export default function Services({ onOpenQuote }) {
  const iconMap = {
    Building2,
    ShoppingBag,
    LayoutDashboard,
    Target,
    Palette,
    Search,
    ShieldCheck,
    Cpu,
  };

  return (
    <div className="py-12 sm:py-20 space-y-24">
      {/* Services Header */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#DCDAD4] bg-[#FFFFFF] shadow-subtle">
          <span className="eyebrow">Comprehensive Capabilities</span>
        </div>

        <h1 className="heading-display max-w-4xl">
          Engineered Web Services <br />
          <span className="text-[#66686A]">for Measurable Commercial Impact.</span>
        </h1>

        <p className="text-base sm:text-lg text-[#66686A] max-w-2xl leading-relaxed">
          We build robust, high-performance websites and bespoke digital tools for companies in Surat, across India, and worldwide. Every engagement is led with direct technical oversight.
        </p>

        {/* Core vs Advanced Service Legend */}
        <div className="pt-4 flex flex-wrap gap-4 text-xs">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-nexus-sm bg-white border border-[#DCDAD4]">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span className="font-semibold text-[#17191B]">Core Ready Services</span>
            <span className="text-[#66686A]">(Fast onboarding &amp; fixed milestone delivery)</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-nexus-sm bg-white border border-[#DCDAD4]">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
            <span className="font-semibold text-[#17191B]">Advanced Custom Assessment</span>
            <span className="text-[#66686A]">(Bespoke scoping, database design &amp; API architecture)</span>
          </div>
        </div>
      </section>

      {/* Services List Breakdown */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        {servicesData.map((srv, idx) => {
          const Icon = iconMap[srv.icon] || Building2;
          const isAdvanced = srv.category.includes('Advanced');

          return (
            <div
              key={srv.id}
              id={srv.slug}
              className={`rounded-nexus-lg border transition-all p-8 sm:p-12 lg:p-14 ${
                isAdvanced
                  ? 'bg-[#FAF9F6] border-[#DCDAD4] shadow-card'
                  : 'bg-[#FFFFFF] border-[#DCDAD4] shadow-subtle'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                {/* Left Header Info (5 cols) */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-[#929292]">
                      SERVICE {srv.number}
                    </span>
                    <span className="text-[#DCDAD4]">•</span>
                    <span
                      className={`text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded ${
                        isAdvanced
                          ? 'bg-amber-100 text-amber-900 border border-amber-200'
                          : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      }`}
                    >
                      {srv.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-nexus-sm bg-[#F7F5F0] border border-[#DCDAD4] flex items-center justify-center text-[#17191B]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#17191B] tracking-tight">
                      {srv.title}
                    </h2>
                  </div>

                  <p className="text-sm text-[#66686A] leading-relaxed">
                    {srv.fullDescription}
                  </p>

                  <div className="pt-2 space-y-2 text-xs">
                    <div className="flex items-center gap-2 text-[#66686A]">
                      <Clock className="w-4 h-4 text-[#17191B]" />
                      <span>Estimated Timeline: <strong className="text-[#17191B]">{srv.timeline}</strong></span>
                    </div>
                    <div className="p-3 rounded-nexus-sm bg-[#F7F5F0] border border-[#DCDAD4] text-xs text-[#66686A]">
                      <strong className="text-[#17191B] block mb-1 uppercase font-mono text-[10px]">
                        Ideal Business Fit:
                      </strong>
                      {srv.idealFor}
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap gap-3">
                    <button
                      onClick={onOpenQuote}
                      className="px-5 py-2.5 rounded-nexus-sm bg-[#17191B] text-[#F7F5F0] text-xs font-semibold uppercase tracking-wider hover:bg-black transition-colors"
                    >
                      Inquire About This Service
                    </button>
                    {srv.relatedDemo && (
                      <Link
                        to={srv.relatedDemo}
                        className="px-4 py-2.5 rounded-nexus-sm border border-[#DCDAD4] text-[#17191B] text-xs font-semibold hover:bg-white transition-colors flex items-center gap-1.5"
                      >
                        <span>View Live Concept Demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                </div>

                {/* Right Deliverables & Architecture (7 cols) */}
                <div className="lg:col-span-7 bg-[#F7F5F0]/80 border border-[#DCDAD4] rounded-nexus-md p-6 sm:p-8 space-y-6">
                  <div>
                    <h3 className="font-heading font-bold text-base text-[#17191B] flex items-center gap-2">
                      <FileCheck2 className="w-4 h-4 text-[#17191B]" />
                      <span>Key Engineering Deliverables &amp; Features</span>
                    </h3>
                    <p className="text-xs text-[#66686A] mt-1">
                      What is specifically scoped and delivered in this workstream:
                    </p>
                  </div>

                  <ul className="space-y-3.5">
                    {srv.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-3 text-xs text-[#17191B]">
                        <span className="w-4 h-4 rounded-full bg-[#17191B] text-[#F7F5F0] flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-[#DCDAD4] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#66686A]">
                    <span>Need customized technical scoping?</span>
                    <a
                      href={companyData.contact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#17191B] font-semibold hover:underline inline-flex items-center gap-1"
                    >
                      <span>Discuss on WhatsApp ({companyData.contact.whatsapp})</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Services FAQ / Quality Assurance */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#FFFFFF] border border-[#DCDAD4] rounded-nexus-lg p-8 sm:p-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="eyebrow">Standards of Practice</span>
            <h2 className="heading-section">How We Guarantee Project Quality</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#66686A]">
            <div className="p-5 rounded-nexus-sm border border-[#DCDAD4] bg-[#F7F5F0] space-y-2">
              <h4 className="font-heading font-bold text-sm text-[#17191B]">Direct Source Code Ownership</h4>
              <p className="leading-relaxed">
                You retain complete, unencumbered ownership of your source code, design files, and repository upon final project handover.
              </p>
            </div>
            <div className="p-5 rounded-nexus-sm border border-[#DCDAD4] bg-[#F7F5F0] space-y-2">
              <h4 className="font-heading font-bold text-sm text-[#17191B]">No Vendor Lock-In</h4>
              <p className="leading-relaxed">
                We write standard, clean HTML5, CSS, and modern React/JavaScript adhering to global conventions, deployable on any host.
              </p>
            </div>
            <div className="p-5 rounded-nexus-sm border border-[#DCDAD4] bg-[#F7F5F0] space-y-2">
              <h4 className="font-heading font-bold text-sm text-[#17191B]">Transparent Milestone Sprints</h4>
              <p className="leading-relaxed">
                Review working staging previews at each phase: Wireframe approval → Design approval → Functional prototype → Launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services CTA */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#171A1D] text-[#F7F5F0] rounded-nexus-lg p-10 sm:p-14 text-center space-y-4">
          <h2 className="font-heading font-bold text-2xl sm:text-4xl text-white">
            Ready to Scope Your Digital Solution?
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-400 max-w-lg mx-auto">
            Book an introductory requirements call or request a detailed written proposal tailored to your commercial objectives.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <Link
              to="/contact"
              className="px-7 py-3 rounded-nexus-sm bg-[#F7F5F0] text-[#17191B] font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors"
            >
              Start Project Inquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
