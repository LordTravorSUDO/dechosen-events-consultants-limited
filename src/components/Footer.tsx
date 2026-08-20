import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/siteData';
import { Phone, MapPin, ChevronRight, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { EmailIcon } from './icons/EmailIcon';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  const handleLinkClick = (pageId: PageId) => {
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F172A] text-slate-300 font-sans border-t-4 border-[#D99B26] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Slogans */}
          <div className="space-y-4">
            {/* 
              ====================================================================
              ✏️ FOOTER LOGO CUSTOMIZATION:
              Renders custom logo if COMPANY_INFO.logoUrl is set in siteData.ts
              ====================================================================
            */}
            <div className="flex items-center space-x-3">
              {COMPANY_INFO.logoUrl ? (
                <img
                  src={COMPANY_INFO.logoUrl}
                  alt={COMPANY_INFO.name}
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
            </div>
            
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

          {/* Column 2: Our Services */}
          <div>
            <h4 className="font-serif font-bold text-white text-base mb-4 pb-2 border-b border-slate-800 flex items-center justify-between">
              <span>Our Services</span>
              <span className="w-8 h-0.5 bg-[#D99B26]"></span>
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button
                  onClick={() => handleLinkClick('culinary-school')}
                  className="hover:text-[#D99B26] flex items-center space-x-2 transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#D99B26]" />
                  <span>Dechosen Culinary School</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('catering')}
                  className="hover:text-[#D99B26] flex items-center space-x-2 transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#D99B26]" />
                  <span>On-Call & Event Catering</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('event-management')}
                  className="hover:text-[#D99B26] flex items-center space-x-2 transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#D99B26]" />
                  <span>Event Management & Advisory</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('cleaning')}
                  className="hover:text-[#D99B26] flex items-center space-x-2 transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#D99B26]" />
                  <span>Facility Cleaning Services</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('consultancy')}
                  className="hover:text-[#D99B26] flex items-center space-x-2 transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#D99B26]" />
                  <span>Hospitality Business Consultancy</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Company Links */}
          <div>
            <h4 className="font-serif font-bold text-white text-base mb-4 pb-2 border-b border-slate-800 flex items-center justify-between">
              <span>Company</span>
              <span className="w-8 h-0.5 bg-[#D99B26]"></span>
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button
                  onClick={() => handleLinkClick('home')}
                  className="hover:text-[#D99B26] flex items-center space-x-2 transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#D99B26]" />
                  <span>About D'E Chosen</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('ceo')}
                  className="hover:text-[#D99B26] flex items-center space-x-2 transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#D99B26]" />
                  <span>Meet Chef Peter (CEO)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="hover:text-[#D99B26] flex items-center space-x-2 transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#D99B26]" />
                  <span>Contact & Location</span>
                </button>
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

          {/* Column 4: Contact & Placeholders */}
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
                <span>{COMPANY_INFO.phonePlaceholder}</span>
              </div>
              <div className="flex items-center space-x-3">
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0 fill-current" />
                <span>WhatsApp: {COMPANY_INFO.whatsappPlaceholder}</span>
              </div>
              <div className="flex items-center space-x-3">
                <EmailIcon className="w-4 h-4 text-[#D99B26] shrink-0 fill-current" />
                <span>{COMPANY_INFO.emailPlaceholder}</span>
              </div>
            </div>

            {/* Social Links Placeholders */}
            <div className="pt-3">
              <p className="text-[11px] text-slate-400 uppercase font-semibold mb-2">
                Connect With Us
              </p>
              <div className="flex items-center space-x-2">
                <a
                  href={COMPANY_INFO.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded bg-slate-800 hover:bg-[#D99B26] hover:text-slate-950 flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
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
                <a
                  href={COMPANY_INFO.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded bg-slate-800 hover:bg-[#D99B26] hover:text-slate-950 flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
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
