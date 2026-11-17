import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Code2, 
  Compass, 
  ShieldCheck, 
  Target, 
  Users, 
  MapPin, 
  Globe2, 
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Layers
} from 'lucide-react';
import { companyData } from '../data/company';

export default function About() {
  const capabilities = [
    { title: 'Frontend Architecture', tech: 'React, HTML5, CSS3/Tailwind, JavaScript, Vite, Next.js' },
    { title: 'Backend & Data', tech: 'Node.js, REST APIs, GraphQL, PostgreSQL, MongoDB, Supabase' },
    { title: 'E-commerce & Payments', tech: 'Razorpay, Stripe, UPI Integration, Custom Cart Checkout Flows' },
    { title: 'Performance & SEO', tech: 'Core Web Vitals, Schema.org Markup, Generative Engine Optimization (GEO)' },
    { title: 'DevOps & Deployment', tech: 'Git, GitHub Actions, Vercel, Netlify, Cloudflare CDN, AWS' },
    { title: 'Design & Prototyping', tech: 'Figma, Design Systems, Information Architecture, Wireframing' }
  ];

  const teamRoles = [
    {
      role: 'Lead Architect & Technical Director',
      unit: 'Engineering & Systems',
      description: 'Oversees software architecture, technical feasibility, code reviews, and production deployment pipelines for complex web applications.',
      status: 'Active Leadership · Surat'
    },
    {
      role: 'Senior UI/UX & Visual Designer',
      unit: 'Design Systems',
      description: 'Leads visual design direction, brand typography systems, responsive interface hierarchy, and design tokens.',
      status: 'Active Practice · Surat'
    },
    {
      role: 'Full-Stack Web Developer',
      unit: 'Frontend & Integrations',
      description: 'Engineers responsive client interfaces, interactive state management, third-party API connections, and database schemas.',
      status: 'Active Practice · Surat'
    },
    {
      role: 'QA & Search Optimization Lead',
      unit: 'Quality & Growth',
      description: 'Directs cross-browser compatibility testing, mobile viewport verification, performance profiling, and Generative Engine Optimization.',
      status: 'Active Practice · Surat'
    }
  ];

  return (
    <div className="py-12 sm:py-20 space-y-24">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#DCDAD4] bg-[#FFFFFF] shadow-subtle">
          <span className="eyebrow">About NEXUS LM</span>
        </div>

        <h1 className="heading-display max-w-4xl">
          Technology Meets <br />
          <span className="text-[#66686A]">Thoughtful Design.</span>
        </h1>

        <p className="text-base sm:text-lg text-[#66686A] max-w-2xl leading-relaxed">
          NEXUS LM is an independent web development services agency based in Surat, Gujarat. We build purposeful digital experiences, high-conversion e-commerce systems, and custom web applications for growth-minded businesses across India and global markets.
        </p>

        <div className="flex flex-wrap gap-6 pt-4 text-xs text-[#66686A] border-t border-[#DCDAD4] pt-6">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#17191B]" />
            <span>Headquartered in Surat, Gujarat</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe2 className="w-4 h-4 text-[#17191B]" />
            <span>Serving Clients in India &amp; Worldwide</span>
          </div>
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4 text-[#17191B]" />
            <span>100% Bespoke Code Standards</span>
          </div>
        </div>
      </section>

      {/* Agency Introduction & Mission */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#FFFFFF] border border-[#DCDAD4] rounded-nexus-lg p-8 sm:p-14 lg:p-16 shadow-card space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-5">
              <span className="eyebrow">Our Mission</span>
              <h2 className="heading-section">
                Building Websites That Work. Grow. Inspire.
              </h2>
              <p className="text-sm text-[#66686A] leading-relaxed">
                Too many websites look adequate on the surface but fail the fundamentals: slow mobile rendering, clunky inquiry flows, fragile code, and zero commercial utility.
              </p>
              <p className="text-sm text-[#66686A] leading-relaxed">
                Our mission at NEXUS LM is to engineer digital tools that directly assist business growth. We combine the disciplined precision of modern software engineering with authentic, human-centred graphic design.
              </p>
            </div>

            <div className="lg:col-span-6 space-y-5 bg-[#FAF9F6] border border-[#DCDAD4] rounded-nexus-md p-6 sm:p-8">
              <span className="eyebrow">Our Working Approach</span>
              <h3 className="font-heading font-bold text-xl text-[#17191B]">
                Direct Collaboration, Zero Agency Jargon
              </h3>
              <p className="text-xs text-[#66686A] leading-relaxed">
                When you partner with NEXUS LM, you communicate directly with the individuals writing your code and designing your layout. We do not pass you off to unaccountable account reps or offshore sub-contractors.
              </p>
              <ul className="space-y-2.5 pt-2 text-xs text-[#17191B]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Honest project scoping without speculative upselling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Staging environments with live progress reviews.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Transparent timeline commitments backed by milestones.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack & Capabilities */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="eyebrow">Technical Breadth</span>
          <h2 className="heading-section">Tools &amp; Capabilities</h2>
          <p className="text-xs text-[#66686A]">
            Modern, battle-tested technologies selected for longevity, security, and developer ergonomics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="p-6 rounded-nexus-md bg-[#FFFFFF] border border-[#DCDAD4] shadow-subtle space-y-3"
            >
              <h3 className="font-heading font-bold text-base text-[#17191B]">
                {cap.title}
              </h3>
              <p className="text-xs text-[#66686A] font-mono leading-relaxed bg-[#FAF9F6] p-3 rounded border border-[#DCDAD4]/60">
                {cap.tech}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Structure (Authentic, editable placeholders - no fabricated bios) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="eyebrow">Agency Organization</span>
          <h2 className="heading-section">The Core Technical Team</h2>
          <p className="text-xs text-[#66686A]">
            Structured functional roles delivering design, frontend engineering, backend integrations, and quality assurance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamRoles.map((member, idx) => (
            <div
              key={idx}
              className="p-6 rounded-nexus-md bg-[#FFFFFF] border border-[#DCDAD4] shadow-subtle flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#EFECE4] border border-[#DCDAD4] flex items-center justify-center text-[#17191B] font-bold text-sm">
                  {member.role.split(' ')[0][0]}{member.role.split(' ')[1] ? member.role.split(' ')[1][0] : 'T'}
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#929292] font-semibold">
                    {member.unit}
                  </span>
                  <h3 className="font-heading font-bold text-base text-[#17191B] mt-1">
                    {member.role}
                  </h3>
                </div>
                <p className="text-xs text-[#66686A] leading-relaxed">
                  {member.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#DCDAD4] text-[11px] font-mono text-emerald-700 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>{member.status}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Surat Heritage Statement */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#171A1D] text-[#F7F5F0] rounded-nexus-lg p-10 sm:p-14 lg:p-16 space-y-6">
          <div className="max-w-3xl space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#A9A99F]">
              Rooted in Surat, Gujarat
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#F7F5F0]">
              The Industrial Spirit of Surat Meets Modern Software Craft
            </h2>
            <p className="text-xs sm:text-sm text-[#A9A99F] leading-relaxed">
              Surat is celebrated internationally for work ethic, manufacturing excellence, and commercial dynamism. We channel this same relentless drive into web development: building high-speed websites that work reliably, load instantly, and elevate the digital footprint of Indian enterprise on the world stage.
            </p>
          </div>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-nexus-sm bg-[#F7F5F0] text-[#17191B] font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors"
            >
              <span>Connect with NEXUS LM</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

