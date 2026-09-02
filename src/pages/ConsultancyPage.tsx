import React from 'react';
import { PageId } from '../types';
import { CONSULTANCY_AREAS, COMPANY_INFO, PAGE_HERO_IMAGES, UNSPLASH_IMAGES } from '../data/siteData';
import { Calendar, CheckCircle2, TrendingUp, DollarSign, Award, Target, ArrowRight, ShieldCheck } from 'lucide-react';

interface ConsultancyPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const ConsultancyPage: React.FC<ConsultancyPageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="font-sans">
      
      {/* 
        IMAGE PLACEHOLDER:
        Replace this image with a professional photograph showing Chef Peter and senior consultants
        advising hotel, resort, or restaurant investors in a modern boardroom.
        Recommended dimensions: 1800 x 900 or larger.
      */}
      {/* HERO SECTION */}
      <section className="relative bg-[#0F172A] text-white py-24 overflow-hidden border-b-4 border-[#D99B26]">
        <div className="absolute inset-0 z-0">
          <img
            src={UNSPLASH_IMAGES.consultancyHero}
            alt="D'E Chosen hospitality business consultancy — hotel and restaurant advisory services in Uganda"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/90 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center space-x-2 bg-[#D99B26]/20 border border-[#D99B26]/40 text-[#D99B26] text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded">
              <TrendingUp className="w-4 h-4" />
              <span>HOSPITALITY ADVISORY DIVISION</span>
            </span>

            <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
              Hospitality Business Consultancy
            </h1>

            {/* Prominent Division Slogan */}
            <div className="bg-[#1B365D]/80 border-l-4 border-[#D99B26] p-4 rounded-r-lg max-w-xl my-3">
              <p className="font-serif italic text-xl sm:text-2xl text-[#D99B26] font-semibold">
                "{COMPANY_INFO.consultancySlogan}"
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              From initial architectural kitchen floor plans and menu yield engineering to Mystery Audits and financial Turnaround Management. We partner with hotel owners, lodge operators, and restaurant entrepreneurs to eliminate cost leaks and build scalable profit centers.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={onOpenBooking}
                className="bg-[#D99B26] hover:bg-[#B8801C] text-slate-950 font-bold text-xs uppercase tracking-wider px-8 py-4 rounded shadow-xl flex items-center space-x-2 transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK A CONSULTATION</span>
              </button>

              <button
                onClick={() => onNavigate('ceo')}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider px-6 py-4 rounded flex items-center space-x-2 transition-all cursor-pointer"
              >
                <span>LEAD CONSULTANT (CHEF PETER)</span>
                <ArrowRight className="w-4 h-4 text-[#D99B26]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC OBJECTIVES */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#F4F6F8] rounded-xl border border-slate-200 space-y-2">
              <div className="w-10 h-10 rounded bg-[#1B365D] text-[#D99B26] flex items-center justify-center font-bold">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#1B365D]">OPERATE SMARTER</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Streamline kitchen workflows, eliminate food waste, enforce Standard Operating Procedures (SOPs), and optimize labor schedules.
              </p>
            </div>

            <div className="p-6 bg-[#F4F6F8] rounded-xl border border-slate-200 space-y-2">
              <div className="w-10 h-10 rounded bg-[#1B365D] text-[#D99B26] flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#1B365D]">SERVE BETTER</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Elevate front-of-house table service, refine dish presentation, retrain waitstaff, and systematically boost guest review scores.
              </p>
            </div>

            <div className="p-6 bg-[#F4F6F8] rounded-xl border border-slate-200 space-y-2">
              <div className="w-10 h-10 rounded bg-[#1B365D] text-[#D99B26] flex items-center justify-center font-bold">
                <DollarSign className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#1B365D]">PROFIT BIGGER</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Engineer high-margin menu items, control food cost percentages, stop cash/inventory leakage, and maximize net operating profit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOUR MAJOR CONSULTANCY SERVICE AREAS */}
      <section className="py-20 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#D99B26] tracking-widest uppercase">
              Advisory Scope
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1B365D] mt-1">
              Four Specialized Consultancy Practice Areas
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Proven operational frameworks backed by Chef Peter's international experience across Uganda, Dubai, Congo, and Somalia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CONSULTANCY_AREAS.map((area) => (
              <div
                key={area.number}
                className="bg-white rounded-xl p-8 border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-serif font-bold text-[#D99B26]">
                      {area.number}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#1B365D] text-white px-3 py-1 rounded">
                      PRACTICE AREA
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-2xl text-[#1B365D] mb-1">
                    {area.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#4A777A] uppercase tracking-wider mb-3">
                    {area.subtitle}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6 font-medium">
                    {area.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-slate-100">
                    <p className="text-[11px] font-bold text-[#1B365D] uppercase tracking-wider mb-2">
                      Key Interventions:
                    </p>
                    {area.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#D99B26] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-slate-100">
                  <button
                    onClick={onOpenBooking}
                    className="w-full bg-[#1B365D] hover:bg-[#0F172A] text-white text-xs font-bold uppercase tracking-wider py-3 rounded transition-colors cursor-pointer"
                  >
                    REQUEST AUDIT & PROPOSAL
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 bg-[#1B365D] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="text-xs font-bold text-[#D99B26] tracking-widest uppercase">
            Transform Your Hospitality Business
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-white">
            Ready to Elevate Your Hospitality Operation?
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Whether you are launching a new hotel or eco-lodge, restructuring a struggling restaurant, or seeking to retrain your kitchen staff to international standards, D'E Chosen Consultants is ready.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenBooking}
              className="bg-[#D99B26] hover:bg-[#B8801C] text-slate-950 font-bold text-xs uppercase tracking-wider px-8 py-4 rounded shadow-xl inline-flex items-center space-x-2 transition-colors cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK A CONSULTATION</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
