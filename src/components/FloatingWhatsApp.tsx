import React from 'react';
import { COMPANY_INFO } from '../data/siteData';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappCleanNumber = COMPANY_INFO.whatsappPlaceholder.replace(/[^0-9]/g, '');

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-40">
      <a
        href={`https://wa.me/${whatsappCleanNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with D'E Chosen Events on WhatsApp"
        className="group relative flex items-center bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 active:translate-y-0"
      >
        <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 fill-current" />
        <span className="hidden sm:inline-block font-bold text-xs uppercase tracking-wider ml-2.5 max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out">
          WhatsApp Us
        </span>
        {/* Active Online Indicator Dot */}
        <span className="absolute top-0 right-0 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
      </a>
    </aside>
  );
};
