import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Shield, Zap, Sparkles, Smartphone, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BrowserMockup() {
  const [activeTab, setActiveTab] = useState('textile');

  const previews = {
    textile: {
      tag: "B2B MANUFACTURING",
      title: "Aura Weaves & Jacquards",
      desc: "Surat heritage textile mill with live fabric swatch catalogue and export inquiry system.",
      route: "/work/textile-demo",
      metric: "40+ Jacquard Designs",
      badge: "Textile & Export",
      bgClass: "bg-stone-50 border-stone-200",
      accent: "#8C7355",
      img: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80"
    },
    restaurant: {
      tag: "HOSPITALITY & DINING",
      title: "Saffron & Sage Dining",
      desc: "Artisanal culinary experience with online table reservations and seasonal course menus.",
      route: "/work/restaurant-demo",
      metric: "Online Table Booking",
      badge: "Fine Dining",
      bgClass: "bg-neutral-900 text-white border-neutral-800",
      accent: "#C28E58",
      img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
    },
    healthcare: {
      tag: "HEALTHCARE & CLINIC",
      title: "PulseCare Multi-Speciality",
      desc: "Compassionate clinical portal with verified doctor profiles and appointment scheduling.",
      route: "/work/healthcare-demo",
      metric: "Doctor Slot Selector",
      badge: "Clinical Care",
      bgClass: "bg-teal-50 border-teal-100",
      accent: "#0D9488",
      img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
    }
  };

  const current = previews[activeTab];

  return (
    <div className="w-full rounded-nexus-lg bg-[#FFFFFF] border border-[#DCDAD4] shadow-elevated overflow-hidden">
      {/* Browser Chrome Header */}
      <div className="bg-[#EFECE4] border-b border-[#DCDAD4] px-4 py-3 flex items-center justify-between">
        {/* Window Controls */}
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#E57373] inline-block border border-[#D32F2F]/20"></span>
          <span className="w-3 h-3 rounded-full bg-[#FFD54F] inline-block border border-[#FFA000]/20"></span>
          <span className="w-3 h-3 rounded-full bg-[#81C784] inline-block border border-[#388E3C]/20"></span>
        </div>

        {/* Address Bar */}
        <div className="flex-1 max-w-md mx-4">
          <div className="bg-[#FFFFFF] border border-[#DCDAD4] rounded-md px-3 py-1 flex items-center justify-between text-xs text-[#66686A]">
            <div className="flex items-center gap-1.5 truncate">
              <span className="text-emerald-600 font-mono text-[10px]">https://</span>
              <span className="font-medium text-[#17191B] font-mono text-[11px]">nexuslm.in/studio</span>
              <span className="text-[#929292] font-mono text-[10px]">/preview</span>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-[#929292] uppercase font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>LIVE</span>
            </div>
          </div>
        </div>

        {/* Device Switcher simulation */}
        <div className="flex items-center gap-1.5 text-[#66686A]">
          <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-white border border-[#DCDAD4] hidden sm:inline">
            RESPONSIVE 1440px
          </span>
        </div>
      </div>

      {/* Interactive Tabs within Mockup */}
      <div className="border-b border-[#DCDAD4] bg-[#FAF9F6] px-4 py-2 flex items-center gap-2 overflow-x-auto text-xs">
        <span className="text-[11px] font-semibold text-[#929292] uppercase tracking-wider mr-2 hidden sm:inline">
          Showcase Demos:
        </span>
        <button
          onClick={() => setActiveTab('textile')}
          className={`px-3 py-1 rounded text-xs font-medium transition-all ${
            activeTab === 'textile'
              ? 'bg-[#17191B] text-[#F7F5F0]'
              : 'text-[#66686A] hover:bg-[#EFECE4]'
          }`}
        >
          01 Textile B2B
        </button>
        <button
          onClick={() => setActiveTab('restaurant')}
          className={`px-3 py-1 rounded text-xs font-medium transition-all ${
            activeTab === 'restaurant'
              ? 'bg-[#17191B] text-[#F7F5F0]'
              : 'text-[#66686A] hover:bg-[#EFECE4]'
          }`}
        >
          02 Dining & Booking
        </button>
        <button
          onClick={() => setActiveTab('healthcare')}
          className={`px-3 py-1 rounded text-xs font-medium transition-all ${
            activeTab === 'healthcare'
              ? 'bg-[#17191B] text-[#F7F5F0]'
              : 'text-[#66686A] hover:bg-[#EFECE4]'
          }`}
        >
          03 Clinical Portal
        </button>
      </div>

      {/* Browser Viewport Content */}
      <div className="p-6 md:p-8 bg-[#FFFFFF]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Content Spec */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded border border-[#DCDAD4] bg-[#F7F5F0] text-[10px] font-mono uppercase tracking-wider text-[#17191B]">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: current.accent }}></span>
              {current.tag}
            </div>

            <h4 className="font-heading font-bold text-2xl md:text-3xl text-[#17191B] tracking-tight">
              {current.title}
            </h4>

            <p className="text-[#66686A] text-sm leading-relaxed">
              {current.desc} Built with responsive grids, interactive client inquiry flows, and custom typography systems.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-nexus-sm border border-[#DCDAD4] bg-[#FAF9F6]">
                <div className="text-[10px] uppercase font-mono text-[#929292]">Engineered Feature</div>
                <div className="text-xs font-bold text-[#17191B] mt-0.5">{current.metric}</div>
              </div>
              <div className="p-3 rounded-nexus-sm border border-[#DCDAD4] bg-[#FAF9F6]">
                <div className="text-[10px] uppercase font-mono text-[#929292]">Production Target</div>
                <div className="text-xs font-bold text-[#17191B] mt-0.5">Mobile + Desktop Ready</div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <Link
                to={current.route}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-nexus-sm bg-[#17191B] text-[#F7F5F0] text-xs font-semibold uppercase tracking-wider hover:bg-black transition-colors"
              >
                <span>Launch Interactive Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/work"
                className="text-xs font-medium text-[#66686A] hover:text-[#17191B] underline underline-offset-4"
              >
                View all 6 demos
              </Link>
            </div>
          </div>

          {/* Right: Live Preview Screen inside Mockup */}
          <div className="lg:col-span-6">
            <div className="relative rounded-nexus-sm overflow-hidden border border-[#DCDAD4] shadow-card group">
              <img
                src={current.img}
                alt={current.title}
                className="w-full h-56 sm:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-5 flex flex-col justify-end text-white">
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/80">
                  Internal Sandbox Concept
                </span>
                <span className="font-heading font-bold text-lg text-white">
                  {current.title}
                </span>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[10px] bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded font-medium">
                    100% Functional Code
                  </span>
                  <span className="text-[10px] text-white/70">
                    No Static Screenshots
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

