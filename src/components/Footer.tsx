import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes';
import { COMPANY_INFO } from '../data/siteData';
import { Phone, MapPin, ChevronRight, Instagram, Linkedin } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { EmailIcon } from './icons/EmailIcon';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-[#0F172A] text-slate-300 font-sans border-t-4 border-[#D99B26] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">

          {/* Column 1: Brand */}
          <div className="space-y-4">
            <Link to={ROUTES.home} className="flex items-center space-x-3">
              {COMPANY_INFO.logoUrl ? (
                <img
                  src={COMPANY_INFO.logoUrl}
                  alt={COMPANY_INFO.name}
                  loading="lazy"
                  className="h-10 w-auto object-contain max-w-[160px]"
                />
              ) : (
                <div className="w-10 h-10 rounded bg-[#D99B26] text-[#1B365D] font-serif font-bold text-xl flex items-center justify-center">
                  D'E
                </div>
              )}
              <div>
                <h3 className="font-serif font-bold text-lg text-white tracking-tight leading-tight">
                  {COMPANY_INFO.shortName}
                </h3>
                <p className="text-[10px] uppercase text-slate-400 font-semibold tracking-wider">
                  EVENTS CONSULTANTS LIMITED
                </p>
              </div>
            </Link>

            <p className="text-sm text-slate-400 italic font-serif leading-relaxed">
              "{COMPANY_INFO.slogan}"
            </p>

            <p className="text-xs text-slate-400 leading-relaxed">
              Integrated hospitality, culinary training, event management, facility cleaning and operational consultancy enterprise.
            </p>

            <div className="pt-2">
              <p className="text-xs font-semibold text-[#D99B26] uppercase tracking-wider mb-2">
                Consultancy Division
              </p>
              <p className="text-xs text-slate-300 italic font-serif">
                "{COMPANY_INFO.consultancySlogan}"
              </p>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-serif font-bold text-white text-base mb-4 pb-2 border-b border-slate-800 flex items-center justify-between">
              <span>Our Services</span>
              <span className="w-8 h-0.5 bg-[#D99B26]"></span>
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {[
                { to: ROUTES.culinarySchool,   label: 'Dechosen Culinary School' },
                { to: ROUTES.catering,          label: 'On-Call & Event Catering' },
                { to: ROUTES.eventManagement,   label: 'Event Management & Advisory' },
                { to: ROUTES.facilityCleaning,  label: 'Facility Cleaning Services' },
                { to: ROUTES.consultancy,       label: 'Hospitality Business Consultancy' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="hover:text-[#D99B26] flex items-center space-x-2 transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#D99B26]" />
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="font-serif font-bold text-white text-base mb-4 pb-2 border-b border-slate-800 flex items-center justify-between">
              <span>Company</span>
              <span className="w-8 h-0.5 bg-[#D99B26]"></span>
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link
                  to={ROUTES.home}
                  className="hover:text-[#D99B26] flex items-center space-x-2 transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#D99B26]" />
                  <span>About D'E Chosen</span>
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.chefPeter}
                  className="hover:text-[#D99B26] flex items-center space-x-2 transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#D99B26]" />
                  <span>Meet Chef Peter (CEO)</span>
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.contact}
                  className="hover:text-[#D99B26] flex items-center space-x-2 transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#D99B26]" />
                  <span>Contact & Location</span>
                </Link>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="text-[#D99B26] hover:underline font-semibold flex items-center space-x-2 transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#D99B26]" />
                  <span>Book an Appointment</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-white text-base mb-4 pb-2 border-b border-slate-800 flex items-center justify-between">
              <span>Contact Us</span>
              <span className="w-8 h-0.5 bg-[#D99B26]"></span>
            </h4>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#D99B26] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.addressPlaceholder}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#D99B26] shrink-0" />
                <a href={`tel:${COMPANY_INFO.phonePlaceholder.split('/')[0].trim()}`} className="hover:text-[#D99B26] transition-colors">
                  {COMPANY_INFO.phonePlaceholder}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0 fill-current" />
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappPlaceholder.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D99B26] transition-colors"
                >
                  WhatsApp: {COMPANY_INFO.whatsappPlaceholder}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <EmailIcon className="w-4 h-4 text-[#D99B26] shrink-0 fill-current" />
                <a
                  href={`mailto:${COMPANY_INFO.emailPlaceholder}`}
                  className="hover:text-[#D99B26] transition-colors"
                >
                  {COMPANY_INFO.emailPlaceholder}
                </a>
              </div>
            </div>

            {/* Social links */}
            <div className="pt-3">
              <p className="text-[11px] text-slate-400 uppercase font-semibold mb-2">
                Connect With Us
              </p>
              <div className="flex items-center space-x-2">
                <a
                  href={COMPANY_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded bg-slate-800 hover:bg-[#D99B26] hover:text-slate-950 flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded bg-slate-800 hover:bg-[#D99B26] hover:text-slate-950 flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400">
          <p>© 2026 D'E Chosen Events Consultants Limited. All Rights Reserved.</p>
          <div className="mt-2 sm:mt-0 flex items-center space-x-4">
            <span className="text-slate-400">Built with Excellence</span>
            <span>•</span>
            <span className="text-[#D99B26] font-medium">Kampala & Entebbe, Uganda</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
