import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Sparkles, 
  ExternalLink, 
  AlertCircle, 
  Filter, 
  Layers, 
  Laptop, 
  Check, 
  ShieldAlert,
  ChevronRight
} from 'lucide-react';
import { projectsData, demoNotice } from '../data/projects';
import BrowserMockup from '../components/BrowserMockup';

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'Business', label: 'Business & B2B' },
    { id: 'Hospitality', label: 'Hospitality' },
    { id: 'Healthcare', label: 'Healthcare' },
    { id: 'Real Estate', label: 'Real Estate' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <div className="py-12 sm:py-20 space-y-20">
      {/* Page Header */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#DCDAD4] bg-[#FFFFFF] shadow-subtle">
          <span className="eyebrow">Project Studio &amp; Architecture Lab</span>
        </div>

        <h1 className="heading-display max-w-4xl">
          Selected Work &amp; <br />
          <span className="text-[#66686A]">Digital Experiences.</span>
        </h1>

        <p className="text-base sm:text-lg text-[#66686A] max-w-2xl leading-relaxed">
          Explore how we design and develop digital experiences for different industries. Every demonstration below is an authentic, internally coded, fully functioning website running inside the NEXUS LM environment.
        </p>

        {/* Portfolio Demonstration Notice Banner */}
        <div className="p-4 sm:p-5 rounded-nexus-md border border-amber-200 bg-amber-50/70 text-xs text-amber-950 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="block font-semibold mb-0.5">
              Portfolio Integrity Notice:
            </strong>
            {demoNotice} To respect commercial non-disclosure agreements and demonstrate our technical breadth transparently, these industry solutions were authored entirely by NEXUS LM as production-grade reference implementations.
          </div>
        </div>
      </section>

      {/* Featured Browser Mockup Showcase */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-4 mb-6">
          <span className="eyebrow">Interactive Environment</span>
          <h2 className="heading-section">Live Sandbox Studio Preview</h2>
        </div>
        <BrowserMockup />
      </section>

      {/* Filter Tabs & Projects Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#DCDAD4] pb-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#17191B]">
            Filter by Industry:
          </div>

          <div className="flex flex-wrap gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-nexus-sm text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeFilter === tab.id
                    ? 'bg-[#17191B] text-[#F7F5F0] shadow-subtle'
                    : 'bg-[#FFFFFF] border border-[#DCDAD4] text-[#66686A] hover:bg-[#F7F5F0]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-[#FFFFFF] border border-[#DCDAD4] rounded-nexus-md overflow-hidden shadow-card hover:shadow-elevated transition-all flex flex-col group"
            >
              {/* Cover Image */}
              <div className="relative h-64 overflow-hidden bg-[#EFECE4]">
                <img
                  src={proj.coverImage}
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-[#17191B]/80 backdrop-blur text-white text-[10px] font-mono px-2.5 py-1 rounded">
                  {proj.industry}
                </div>
                <div className="absolute top-3 right-3 bg-white/95 text-[#17191B] text-[10px] font-bold px-2.5 py-1 rounded border border-[#DCDAD4]">
                  Interactive Demo
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-heading font-extrabold text-xl text-[#17191B] group-hover:text-[#66686A] transition-colors">
                    {proj.title}
                  </h3>
                  <div className="text-xs font-medium text-[#66686A] mt-0.5">
                    {proj.subtitle}
                  </div>
                  <p className="text-xs text-[#66686A] mt-3 leading-relaxed">
                    {proj.summary}
                  </p>
                </div>

                {/* Key Features List */}
                <div className="pt-3 border-t border-[#DCDAD4]/60 space-y-1.5 text-xs text-[#17191B]">
                  {proj.highlights.slice(0, 3).map((item, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-[11px] text-[#66686A]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#17191B]"></span>
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Card CTA */}
                <div className="pt-4 border-t border-[#DCDAD4] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#929292]">
                    Full Demo Site
                  </span>
                  <Link
                    to={proj.route}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-nexus-sm bg-[#17191B] text-[#F7F5F0] text-xs font-semibold uppercase tracking-wider hover:bg-black transition-colors"
                  >
                    <span>View Live Demo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#171A1D] text-[#F7F5F0] rounded-nexus-lg p-10 sm:p-14 text-center space-y-4">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white">
            Need a Specialized Website for Your Industry?
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-400 max-w-lg mx-auto">
            We architect tailored solutions for manufacturing, retail, professional services, and high-growth startups.
          </p>
          <div className="pt-4 flex justify-center">
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-nexus-sm bg-[#F7F5F0] text-[#17191B] font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors"
            >
              Discuss Your Industry Solution
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
