import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../routes';
import { COMPANY_INFO } from '../data/siteData';
import { Menu, X, Calendar, ChevronRight } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { to: string; label: string }[] = [
    { to: ROUTES.home,            label: 'Home' },
    { to: ROUTES.culinarySchool,  label: 'Culinary School' },
    { to: ROUTES.catering,        label: 'Catering' },
    { to: ROUTES.eventManagement, label: 'Event Management' },
    { to: ROUTES.facilityCleaning,label: 'Cleaning' },
    { to: ROUTES.consultancy,     label: 'Consultancy' },
    { to: ROUTES.chefPeter,       label: 'CEO & Founder' },
    { to: ROUTES.contact,         label: 'Contact' },
  ];

  const closeMobile = () => setMobileMenuOpen(false);
  const whatsappCleanNumber = COMPANY_INFO.whatsappPlaceholder.replace(/[^0-9]/g, '');

  return (
    <header className="sticky top-0 z-50 w-full font-sans transition-all duration-300">

      {/* Top Utility Bar */}
      <div className="bg-[#0F172A] text-slate-300 text-xs py-1.5 px-4 sm:px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-end items-center">
          <a
            href={`https://wa.me/${whatsappCleanNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] sm:text-xs px-3.5 py-1 rounded-full shadow-md transition-all transform hover:scale-105"
            title="Chat directly on WhatsApp"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 fill-current text-white" />
            <span>WhatsApp Us: {COMPANY_INFO.whatsappPlaceholder}</span>
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`bg-[#1B365D] text-white border-b-4 border-[#D99B26] shadow-xl transition-all duration-300 ${
          isScrolled ? 'py-2.5' : 'py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Logo / Home link */}
          <NavLink
            to={ROUTES.home}
            onClick={closeMobile}
            className="group flex items-center space-x-3.5"
          >
            {COMPANY_INFO.logoUrl ? (
              <img
                src={COMPANY_INFO.logoUrl}
                alt={COMPANY_INFO.name}
                className="h-10 w-auto object-contain max-w-[160px]"
              />
            ) : (
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded bg-gradient-to-br from-[#D99B26] to-amber-700 p-0.5 shadow-md group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-[#1B365D] rounded-xs flex items-center justify-center text-[#D99B26] font-serif font-bold text-lg">
                  D'E
                </div>
              </div>
            )}
            <div>
              <div className="font-serif font-bold text-base sm:text-lg lg:text-xl tracking-tight leading-none text-white group-hover:text-amber-200 transition-colors">
                {COMPANY_INFO.shortName}
              </div>
              <div className="text-[10px] sm:text-xs tracking-wider uppercase text-slate-300 font-medium leading-tight mt-0.5">
                EVENTS CONSULTANTS LIMITED
              </div>
              <div className="hidden sm:block text-[9px] text-[#D99B26] italic font-serif">
                "{COMPANY_INFO.slogan}"
              </div>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === ROUTES.home}
                className={({ isActive }) =>
                  `px-3 py-2 text-xs font-semibold tracking-wide rounded transition-all duration-200 ${
                    isActive
                      ? 'text-[#D99B26] bg-white/10 shadow-xs'
                      : 'text-slate-200 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Right: CTA + Mobile toggle */}
          <div className="flex items-center space-x-3">
            <button
              onClick={onOpenBooking}
              className="hidden sm:inline-flex items-center space-x-2 bg-[#D99B26] hover:bg-[#B8801C] text-slate-950 font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>BOOK AN APPOINTMENT</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded text-slate-200 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0F172A] text-white border-b border-slate-800 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-3 pb-6 space-y-1">
            <div className="text-xs text-[#D99B26] font-medium italic mb-2 px-3">
              "{COMPANY_INFO.slogan}"
            </div>
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === ROUTES.home}
                onClick={closeMobile}
                className={({ isActive }) =>
                  `w-full block px-4 py-3 rounded text-sm font-medium flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-[#1B365D] text-[#D99B26] font-bold border-l-4 border-[#D99B26]'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`
                }
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </NavLink>
            ))}
            <div className="pt-4 px-2 space-y-2">
              <button
                onClick={() => { closeMobile(); onOpenBooking(); }}
                className="w-full bg-[#D99B26] hover:bg-[#B8801C] text-slate-950 font-bold text-xs uppercase tracking-wider py-3 rounded shadow-md text-center flex items-center justify-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK AN APPOINTMENT</span>
              </button>
              <div className="text-xs text-slate-400 text-center pt-2">
                Call Us: {COMPANY_INFO.phonePlaceholder}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
