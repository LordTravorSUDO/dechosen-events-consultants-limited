import React from 'react';
import { PageId } from '../types';
import { CATERING_SERVICES, PAGE_HERO_IMAGES, UNSPLASH_IMAGES } from '../data/siteData';
import { Calendar, CheckCircle2, Utensils, Sparkles, Shield, Users, ArrowRight } from 'lucide-react';

interface CateringPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const CateringPage: React.FC<CateringPageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="font-sans">
      
      {/* 
        IMAGE PLACEHOLDER:
        Replace this image with a professional photograph showing an elegant
        corporate gala dinner with D'E Chosen chefs and catering personnel in action.
        Recommended dimensions: 1800 x 900 or larger.
      */}
      {/* HERO SECTION */}
      <section className="relative bg-[#0F172A] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={UNSPLASH_IMAGES.cateringHero}
            alt="D'E Chosen on-call and event catering services in Uganda"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/90 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center space-x-2 bg-[#D99B26]/20 border border-[#D99B26]/40 text-[#D99B26] text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded">
              <Utensils className="w-4 h-4" />
              <span>BESPOKE CULINARY OPERATIONS</span>
            </span>

            <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
              On-Call & Event Catering
            </h1>

            <p className="font-serif italic text-xl text-[#D99B26] font-medium">
              "Exceptional food. Seamless service. Memorable experiences."
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              From high-stakes corporate galas and diplomatic luncheons to private residence chefs and interactive live cooking showcases. Executed under uncompromising culinary standards.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={onOpenBooking}
                className="bg-[#D99B26] hover:bg-[#B8801C] text-slate-950 font-bold text-xs uppercase tracking-wider px-8 py-4 rounded shadow-xl flex items-center space-x-2 transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK OUR CATERING TEAM</span>
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider px-6 py-4 rounded flex items-center space-x-2 transition-all cursor-pointer"
              >
                <span>REQUEST CUSTOM MENU QUOTE</span>
                <ArrowRight className="w-4 h-4 text-[#D99B26]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOUR DETAILED CATERING SERVICES */}
      <section className="py-20 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#D99B26] tracking-widest uppercase">
              Catering Scope
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1B365D] mt-1">
              Four Specialized Catering Divisions
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Precision-designed culinary solutions tailored to corporate organizations, private estates, and high-net-worth individuals.
            </p>
          </div>

          <div className="space-y-12">
            {CATERING_SERVICES.map((cat, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={cat.id}
                  className={`bg-white rounded-xl overflow-hidden border border-slate-200 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-0 items-center transition-all duration-300 hover:shadow-2xl`}
                >
                  {/* Image Column */}
                  <div className={`lg:col-span-5 h-72 lg:h-full relative overflow-hidden bg-slate-200 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <img
                      src={cat.image}
                      alt={cat.title}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-[#1B365D] text-[#D99B26] font-bold text-xs px-3 py-1 rounded shadow-md uppercase tracking-wider">
                      SERVICE 0{idx + 1}
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-7 p-8 sm:p-10 space-y-4 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <span className="text-xs font-bold text-[#4A777A] uppercase tracking-wider">
                      {cat.subtitle}
                    </span>

                    <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#1B365D]">
                      {cat.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {cat.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-3 border-t border-slate-100">
                      {cat.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center space-x-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-[#D99B26] shrink-0" />
                          <span className="font-medium">{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 flex items-center justify-between">
                      <button
                        onClick={onOpenBooking}
                        className="bg-[#1B365D] hover:bg-[#0F172A] text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded shadow-md transition-colors cursor-pointer"
                      >
                        RESERVE THIS CATERING SERVICE
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* DIPLOMATIC & VIP PRIVACY */}
      <section className="py-16 bg-[#1B365D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0F172A] rounded-xl p-8 sm:p-12 border border-slate-700 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center space-x-2 text-[#D99B26] text-xs font-bold uppercase tracking-wider">
                <Shield className="w-4 h-4" />
                <span>Confidentiality & Protocol</span>
              </div>
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white">
                VIP, Diplomatic & High-Net-Worth Protocol
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Our catering teams and private chefs are rigorously trained in non-disclosure, security protocol, diplomatic table etiquette, and specialized dietary management (Halal, Kosher-style, allergy-safe).
              </p>
            </div>

            <div className="shrink-0 w-full lg:w-auto">
              <button
                onClick={onOpenBooking}
                className="w-full lg:w-auto bg-[#D99B26] hover:bg-[#B8801C] text-slate-950 font-bold text-xs uppercase tracking-wider px-8 py-4 rounded shadow-lg transition-colors cursor-pointer"
              >
                SCHEDULE PRIVATE CONSULTATION
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
