import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Sparkles, PhoneCall } from 'lucide-react';
import { companyData } from '../data/company';

export default function DemoTopBanner({ demoTitle, category }) {
  return (
    <div className="bg-[#171A1D] text-[#F7F5F0] border-b border-charcoal-800 text-xs py-2.5 px-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <Link
            to="/work"
            className="inline-flex items-center gap-1.5 font-medium text-charcoal-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to NEXUS LM Portfolio</span>
          </Link>
          <span className="text-charcoal-600 hidden sm:inline">|</span>
          <div className="flex items-center gap-1.5 hidden md:flex">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-charcoal-300">Live Client Concept:</span>
            <span className="font-semibold text-white">{demoTitle}</span>
            <span className="text-charcoal-400">({category})</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden lg:inline text-[11px] text-charcoal-400">
            Portfolio Showcase by NEXUS LM
          </span>
          <Link
            to="/contact"
            state={{ message: `Inquiring about a project similar to ${demoTitle}` }}
            className="inline-flex items-center gap-1.5 bg-[#F7F5F0] text-[#17191B] px-3 py-1 rounded text-[11px] font-semibold hover:bg-white transition-colors"
          >
            Build a Website Like This
          </Link>
          <a
            href={companyData.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-charcoal-300 hover:text-white transition-colors text-[11px]"
          >
            <PhoneCall className="w-3 h-3" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}

