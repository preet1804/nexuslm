import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Phone, MessageSquare, MapPin, Globe, Mail } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { companyData } from '../data/company';
import { servicesData } from '../data/services';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#171A1D] text-[#F7F5F0] border-t border-charcoal-800">
      {/* Upper Brand Statement Bar */}
      <div className="border-b border-charcoal-800/80 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-charcoal-400">
              Agency Tagline
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#F7F5F0] tracking-tight mt-1 uppercase">
              {companyData.secondaryTagline}
            </h3>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-nexus-sm bg-[#F7F5F0] text-[#17191B] font-semibold text-xs uppercase tracking-wider hover:bg-white transition-colors"
          >
            <span>Start a Project With Us</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Column 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-block">
              <img
                src="./images/logo-horizontal-light.png"
                alt="NEXUS LM"
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-charcoal-400 text-sm leading-relaxed max-w-sm">
              NEXUS LM is an independent web development services agency based in Surat, Gujarat. We build purposeful digital experiences, high-conversion e-commerce systems, and custom web applications for growth-minded businesses.
            </p>
            <div className="flex flex-col gap-2 pt-2 text-xs text-charcoal-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-charcoal-400 shrink-0" />
                <span>Surat, Gujarat, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-charcoal-400 shrink-0" />
                <span>Serving businesses across India & international clients</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-charcoal-400">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-charcoal-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-charcoal-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-charcoal-300 hover:text-white transition-colors">
                  Our Work & Demos
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-charcoal-300 hover:text-white transition-colors">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-charcoal-300 hover:text-white transition-colors">
                  About NEXUS LM
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-charcoal-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-charcoal-400">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              {servicesData.slice(0, 7).map((srv) => (
                <li key={srv.id}>
                  <Link
                    to="/services"
                    className="text-charcoal-400 hover:text-white transition-colors block py-0.5"
                  >
                    {srv.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Direct Channels (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-charcoal-400">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href={companyData.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-nexus-sm bg-charcoal-800/60 border border-charcoal-700 hover:border-charcoal-500 transition-colors group"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-[11px] text-charcoal-400">Direct WhatsApp</div>
                  <div className="font-medium text-white">{companyData.contact.whatsapp}</div>
                </div>
              </a>

              <a
                href={`tel:${companyData.contact.phoneClean}`}
                className="flex items-center gap-3 p-3 rounded-nexus-sm bg-charcoal-800/60 border border-charcoal-700 hover:border-charcoal-500 transition-colors group"
              >
                <Phone className="w-4 h-4 text-charcoal-300 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-[11px] text-charcoal-400">Telephone</div>
                  <div className="font-medium text-white">{companyData.contact.phone}</div>
                </div>
              </a>

              <a
                href={companyData.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-nexus-sm bg-charcoal-800/60 border border-charcoal-700 hover:border-charcoal-500 transition-colors group"
              >
                <InstagramIcon className="w-4 h-4 text-rose-400 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-[11px] text-charcoal-400">Instagram</div>
                  <div className="font-medium text-white">{companyData.contact.instagram}</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-charcoal-800/90 mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-400">
          <p>© {currentYear} NEXUS LM. Web Development Services. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Surat, Gujarat, India</span>
            <span>•</span>
            <Link to="/contact" className="hover:text-white transition-colors">
              Request Project Estimate
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
