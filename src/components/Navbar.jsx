import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, MessageSquareQuote } from 'lucide-react';
import { companyData } from '../data/company';

export default function Navbar({ onOpenQuote }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Our Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 border-b ${
        isScrolled
          ? 'bg-[#F7F5F0]/95 backdrop-blur-md border-[#DCDAD4] shadow-subtle'
          : 'bg-[#F7F5F0] border-[#DCDAD4]/70'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#17191B] rounded py-1"
            aria-label="NEXUS LM Home"
          >
            <img
              src="./images/logo-horizontal.png"
              alt="NEXUS LM Web Development Services"
              className="h-9 md:h-10 w-auto object-contain transition-transform duration-200 group-hover:opacity-90"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-[13px] font-medium tracking-wide uppercase transition-colors relative py-1 ${
                    isActive
                      ? 'text-[#17191B] font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#17191B]'
                      : 'text-[#66686A] hover:text-[#17191B]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Actions Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenQuote}
              type="button"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-nexus-sm bg-[#17191B] text-[#F7F5F0] text-xs font-semibold tracking-wider uppercase hover:bg-black transition-colors shadow-subtle"
            >
              <span>Get a Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden gap-2">
            <button
              onClick={onOpenQuote}
              type="button"
              className="px-3 py-1.5 rounded-nexus-sm bg-[#17191B] text-[#F7F5F0] text-xs font-semibold uppercase"
            >
              Quote
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-nexus-sm text-[#17191B] hover:bg-[#EFECE4] transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-[#DCDAD4] bg-[#FFFFFF] px-6 py-6 shadow-card animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-semibold tracking-wide uppercase py-2 border-b border-cream-200 transition-colors flex items-center justify-between ${
                    isActive ? 'text-[#17191B] font-bold' : 'text-[#66686A] hover:text-[#17191B]'
                  }`
                }
              >
                <span>{link.name}</span>
                <span className="text-xs text-[#929292]">→</span>
              </NavLink>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setIsOpen(false);
                  if (onOpenQuote) onOpenQuote();
                }}
                className="w-full py-3 rounded-nexus-sm bg-[#17191B] text-[#F7F5F0] text-center text-xs font-semibold uppercase tracking-wider hover:bg-black transition-colors"
              >
                Get a Custom Project Quote
              </button>
              <a
                href={companyData.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-nexus-sm border border-[#DCDAD4] text-center text-xs font-medium text-[#17191B] hover:bg-[#F7F5F0] transition-colors flex items-center justify-center gap-2"
              >
                <span>Chat on WhatsApp: {companyData.contact.whatsapp}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
