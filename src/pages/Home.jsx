import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Code2, 
  Layers, 
  Sparkles,
  Building2,
  ShoppingBag,
  LayoutDashboard,
  Target,
  Palette,
  Search,
  Cpu,
  MonitorSmartphone,
  Headphones,
  FileCheck
} from 'lucide-react';
import BrowserMockup from '../components/BrowserMockup';
import { servicesData } from '../data/services';
import { projectsData } from '../data/projects';
import { pricingPlans } from '../data/pricing';
import { companyData } from '../data/company';

export default function Home({ onOpenQuote }) {
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

  const processSteps = [
    {
      step: '01',
      title: 'Discovery',
      desc: 'Understand the business model, target audience, competitive landscape, and functional project requirements.'
    },
    {
      step: '02',
      title: 'Strategy & Design',
      desc: 'Plan the information architecture, wireframe customer journeys, and design refined, accessible UI systems.'
    },
    {
      step: '03',
      title: 'Development',
      desc: 'Build clean, maintainable frontend and backend systems with high-performance responsive engineering.'
    },
    {
      step: '04',
      title: 'Testing & Launch',
      desc: 'Rigorously test across mobile viewports, browser engines, SEO foundations, and page speed prior to deployment.'
    },
    {
      step: '05',
      title: 'Support',
      desc: 'Provide agreed post-launch operational assistance, security monitoring, and continuous technical refinement.'
    }
  ];

  const whyFeatures = [
    {
      icon: MonitorSmartphone,
      title: 'Responsive Design',
      desc: 'Pixel-perfect fluid layouts that render flawlessly across 360px mobile viewports up to expansive 4K desktop screens.'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      desc: 'Agile milestone-based sprints with structured checkpoints, ensuring on-time deployment without compromising code quality.'
    },
    {
      icon: ShieldCheck,
      title: 'Secure & Reliable',
      desc: 'Built on modern web architectures with SSL encryption, semantic accessibility, zero bloat, and automated backups.'
    },
    {
      icon: Headphones,
      title: 'Dedicated Support',
      desc: 'Direct communication with the engineers building your website via WhatsApp, phone, and scheduled working sessions.'
    }
  ];

  return (
    <div className="space-y-24 sm:space-y-32 pb-20">
      {/* Hero Section */}
      <section className="pt-12 sm:pt-20 lg:pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#DCDAD4] bg-[#FFFFFF] shadow-subtle">
              <span className="w-2 h-2 rounded-full bg-[#17191B]"></span>
              <span className="eyebrow">
                WEB DEVELOPMENT SERVICES · SURAT, INDIA
              </span>
            </div>

            <h1 className="heading-display">
              Modern Websites. <br />
              <span className="text-[#66686A]">Real Results.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#66686A] max-w-xl leading-relaxed">
              We design and develop modern websites, e-commerce platforms and custom digital solutions that help businesses build their online presence and grow.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <Link
                to="/work"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-nexus-sm bg-[#17191B] text-[#F7F5F0] text-xs font-semibold uppercase tracking-wider hover:bg-black transition-colors shadow-subtle"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={onOpenQuote}
                type="button"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-nexus-sm bg-[#FFFFFF] border border-[#DCDAD4] text-[#17191B] text-xs font-semibold uppercase tracking-wider hover:bg-[#F7F5F0] transition-colors"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 text-[#66686A]" />
              </button>
            </div>

            <div className="pt-6 flex flex-wrap items-center gap-6 text-xs text-[#66686A] border-t border-[#DCDAD4]/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#17191B]" />
                <span>Custom Coded — No Generic Templates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#17191B]" />
                <span>Direct Surat Team Access</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Area: Browser Mockup */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Subtle background frame */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#DCDAD4]/40 to-transparent rounded-2xl transform rotate-1 -z-10"></div>
              <BrowserMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#FFFFFF] border border-[#DCDAD4] rounded-nexus-lg p-8 sm:p-12 lg:p-16 shadow-card">
          <div className="max-w-3xl space-y-6">
            <span className="eyebrow">
              Agency Philosophy
            </span>
            <h2 className="heading-section">
              Digital Experiences Built for Business.
            </h2>
            <p className="text-base text-[#66686A] leading-relaxed">
              At NEXUS LM, we believe a website should be more than an aesthetic ornament. It is your business’s hardest-working commercial asset. We combine thoughtful, restrained design, rigorous modern development standards, and business-focused architecture to create digital tools that generate genuine commercial impact.
            </p>
            <p className="text-sm text-[#66686A] leading-relaxed">
              Based in the industrial powerhouse of Surat, Gujarat, we bridge traditional craftsmanship with modern software engineering—serving local manufacturers, healthcare providers, hospitality brands, and corporate clients across India and abroad.
            </p>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#DCDAD4] pb-6">
          <div>
            <span className="eyebrow">What We Build</span>
            <h2 className="heading-section mt-1">Core Capabilities &amp; Services</h2>
            <p className="text-sm text-[#66686A] mt-2 max-w-xl">
              From foundational business web presence to complex transaction systems and custom operational portals.
            </p>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#17191B] hover:text-[#66686A] transition-colors"
          >
            <span>View All Detailed Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Varied Grid: 8 services with distinct card layouts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((srv, index) => {
            const IconComponent = iconMap[srv.icon] || Code2;
            const isFeatured = index === 0 || index === 2;
            return (
              <div
                key={srv.id}
                className={`p-6 rounded-nexus-md border transition-all flex flex-col justify-between group ${
                  isFeatured
                    ? 'bg-[#FFFFFF] border-[#17191B]/30 shadow-card'
                    : 'bg-[#FFFFFF]/70 border-[#DCDAD4] hover:bg-white hover:border-[#17191B]/20 shadow-subtle'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-nexus-sm bg-[#F7F5F0] border border-[#DCDAD4] flex items-center justify-center text-[#17191B] group-hover:bg-[#17191B] group-hover:text-[#F7F5F0] transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-[#929292] font-semibold">
                      {srv.number}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-heading font-bold text-lg text-[#17191B] group-hover:text-[#66686A] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-[#66686A] mt-2 leading-relaxed">
                      {srv.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#DCDAD4]/50 mt-6">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#17191B] hover:underline"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Selected Work Preview Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#DCDAD4] pb-6">
          <div>
            <span className="eyebrow">Project Studio</span>
            <h2 className="heading-section mt-1">Selected Work &amp; Live Demos</h2>
            <p className="text-sm text-[#66686A] mt-2 max-w-xl">
              Explore fully functional concept websites engineered directly within our studio.
            </p>
          </div>
          <Link
            to="/work"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#17191B] hover:text-[#66686A] transition-colors"
          >
            <span>Explore All 6 Interactive Demos</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.slice(0, 3).map((proj) => (
            <div
              key={proj.id}
              className="bg-[#FFFFFF] border border-[#DCDAD4] rounded-nexus-md overflow-hidden shadow-card hover:shadow-elevated transition-all flex flex-col group"
            >
              <div className="relative h-60 overflow-hidden bg-[#EFECE4]">
                <img
                  src={proj.coverImage}
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-[#17191B]/80 backdrop-blur text-white text-[10px] font-mono px-2.5 py-1 rounded">
                  {proj.industry}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-heading font-bold text-xl text-[#17191B]">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-[#66686A] mt-2 line-clamp-2 leading-relaxed">
                    {proj.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#DCDAD4] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#929292]">
                    Interactive Sandbox
                  </span>
                  <Link
                    to={proj.route}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-nexus-sm bg-[#17191B] text-[#F7F5F0] text-xs font-semibold hover:bg-black transition-colors"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-[#FFFFFF] border-y border-[#DCDAD4] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="eyebrow">Our Methodology</span>
            <h2 className="heading-section">The Engineering Process</h2>
            <p className="text-sm text-[#66686A]">
              A disciplined, five-stage framework that guarantees technical clarity, design fidelity, and predictable execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-nexus-sm border border-[#DCDAD4] bg-[#F7F5F0] flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="font-mono text-2xl font-extrabold text-[#17191B]">
                    {step.step}
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#17191B] mt-2">
                    {step.title}
                  </h3>
                </div>
                <p className="text-xs text-[#66686A] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why NEXUS LM Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="eyebrow">Why NEXUS LM</span>
          <h2 className="heading-section">Engineered for Reliability</h2>
          <p className="text-sm text-[#66686A]">
            Four core principles define every line of code and interface decision we make.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyFeatures.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-nexus-md bg-[#FFFFFF] border border-[#DCDAD4] shadow-subtle space-y-4"
              >
                <div className="w-10 h-10 rounded-nexus-sm bg-[#F7F5F0] border border-[#DCDAD4] flex items-center justify-center text-[#17191B]">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-base text-[#17191B]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#66686A] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#DCDAD4] pb-6">
          <div>
            <span className="eyebrow">Transparent Investment</span>
            <h2 className="heading-section mt-1">Website Packages</h2>
            <p className="text-sm text-[#66686A] mt-2 max-w-xl">
              Clear, upfront pricing with no hidden surprises. Custom quotes available for enterprise systems.
            </p>
          </div>
          <Link
            to="/pricing"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#17191B] hover:text-[#66686A] transition-colors"
          >
            <span>View Full Pricing &amp; Comparison</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`p-8 rounded-nexus-md border flex flex-col justify-between transition-all ${
                plan.popular
                  ? 'bg-[#FFFFFF] border-[#17191B] shadow-elevated ring-1 ring-[#17191B]'
                  : 'bg-[#FFFFFF] border-[#DCDAD4] shadow-subtle'
              }`}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="eyebrow">{plan.code}</span>
                  {plan.popular && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#17191B] text-white">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="font-heading font-extrabold text-xl text-[#17191B]">
                    {plan.name}
                  </h3>
                  <div className="font-heading font-extrabold text-3xl text-[#17191B] mt-2">
                    {plan.price}
                  </div>
                  <div className="text-[11px] text-[#929292] font-mono mt-0.5">
                    {plan.period}
                  </div>
                </div>

                <p className="text-xs text-[#66686A] leading-relaxed">
                  {plan.description}
                </p>

                <ul className="space-y-2.5 pt-4 border-t border-[#DCDAD4] text-xs text-[#17191B]">
                  {plan.features.slice(0, 5).map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#17191B] font-bold">✓</span>
                      <span className="text-[#66686A]">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <button
                  onClick={onOpenQuote}
                  className={`w-full py-3 rounded-nexus-sm text-xs font-semibold uppercase tracking-wider transition-colors ${
                    plan.popular
                      ? 'bg-[#17191B] text-[#F7F5F0] hover:bg-black'
                      : 'border border-[#17191B] text-[#17191B] hover:bg-[#17191B] hover:text-[#F7F5F0]'
                  }`}
                >
                  {plan.ctaText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Big CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#171A1D] text-[#F7F5F0] rounded-nexus-lg p-10 sm:p-16 lg:p-20 text-center space-y-6 relative overflow-hidden">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A9A99F]">
            Let’s Collaborate
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#F7F5F0] tracking-tight max-w-3xl mx-auto leading-tight">
            Have a Project in Mind? <br />
            Let's Build Something That Works.
          </h2>
          <p className="text-sm sm:text-base text-[#A9A99F] max-w-xl mx-auto leading-relaxed">
            Discuss your requirements with our web engineering team in Surat. We provide clear technical scopes and direct estimates.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-nexus-sm bg-[#F7F5F0] text-[#17191B] font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors"
            >
              <span>Discuss Your Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href={companyData.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-nexus-sm border border-charcoal-700 text-[#F7F5F0] font-semibold text-xs uppercase tracking-wider hover:bg-charcoal-800 transition-colors"
            >
              <span>Quick WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

