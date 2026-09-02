import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes';
import { COMPANY_INFO } from '../data/siteData';
import { Home, ArrowRight } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      {/* noindex — this page must not be indexed */}
      <meta name="robots" content="noindex, follow" />
      <title>Page Not Found | D'E Chosen Events Consultants</title>

      <div className="font-sans min-h-[60vh] flex items-center justify-center bg-[#F4F6F8] px-4 py-20">
        <div className="max-w-lg w-full text-center space-y-6">

          {/* Brand badge */}
          <div className="flex justify-center">
            {COMPANY_INFO.logoUrl && (
              <img
                src={COMPANY_INFO.logoUrl}
                alt={COMPANY_INFO.name}
                className="h-14 w-auto object-contain"
              />
            )}
          </div>

          {/* 404 indicator */}
          <div className="inline-block bg-[#1B365D] text-[#D99B26] font-serif font-bold text-5xl sm:text-7xl px-6 py-3 rounded-xl shadow-xl">
            404
          </div>

          <h1 className="font-serif font-bold text-2xl sm:text-3xl text-[#1B365D]">
            Page Not Found
          </h1>

          <p className="text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
            The page you are looking for doesn't exist or may have moved. Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              to={ROUTES.home}
              className="inline-flex items-center space-x-2 bg-[#D99B26] hover:bg-[#B8801C] text-slate-950 font-bold text-xs uppercase tracking-wider px-6 py-3 rounded shadow-lg transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <Link
              to={ROUTES.contact}
              className="inline-flex items-center space-x-2 bg-[#1B365D] hover:bg-[#0F172A] text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded shadow-lg transition-colors"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 text-[#D99B26]" />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};
