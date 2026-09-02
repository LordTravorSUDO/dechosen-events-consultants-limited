import React, { useState } from 'react';
import { PageId } from '../types';
import { CORE_DIVISIONS, OPERATIONS_MATRIX, COMPANY_INFO, PAGE_HERO_IMAGES, UNSPLASH_IMAGES } from '../data/siteData';
import { TestimonialCarousel } from '../components/TestimonialCarousel';
import {
  Calendar,
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Award,
  Layers,
  Sparkles
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenBooking }) => {
  const [expandedMatrixRow, setExpandedMatrixRow] = useState<number | null>(0);

  return (
    <div className="font-sans">
      
      {/* 
        ========================================================================
        ✏️ HOME PAGE CUSTOMIZATION NOTICE:
        - Hero Image: Modify UNSPLASH_IMAGES.homeHero or PAGE_HERO_IMAGES.home in /src/data/siteData.ts
        - Text & Slogans: Edit COMPANY_INFO in /src/data/siteData.ts
        ========================================================================
      */}
      {/* ==========================================
          1. BENTO GRID HERO & ECOSYSTEM SHOWCASE
          ========================================== */}
      <section className="py-8 sm:py-12 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Bento Grid Container */}
          <div className="grid grid-cols-12 gap-4 lg:gap-6">
            
            {/* BENTO ITEM 1: HERO FEATURED (8 Cols) */}
            <div className="col-span-12 lg:col-span-8 relative overflow-hidden bg-[#1B365D] rounded-2xl border border-slate-700 shadow-xl min-h-[440px] flex flex-col justify-between p-6 sm:p-10 group">
              <img
                src={UNSPLASH_IMAGES.homeHero}
                alt="D'E Chosen Events Consultants — professional events, catering and hospitality services in Uganda"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#1B365D]/60 to-transparent"></div>

              <div className="relative z-10">
                <span className="inline-flex items-center space-x-2 bg-[#D99B26]/20 border border-[#D99B26]/40 text-[#D99B26] text-[10px] sm:text-xs font-bold uppercase tracking-widest px-3 py-1 rounded">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>INTEGRATED HOSPITALITY ECOSYSTEM</span>
                </span>
              </div>

              <div className="relative z-10 max-w-2xl mt-8">
                <h1 className="text-white font-serif text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-2">
                  D'E Chosen Events Consultants
                </h1>
                <p className="text-[#D99B26] font-serif text-xl sm:text-2xl font-semibold mb-4">
                  Excellence Beyond the Event — Uganda
                </p>

                <p className="text-slate-200 text-xs sm:text-sm leading-relaxed mb-6 max-w-xl">
                  Professional event management, catering, culinary training, facility cleaning and hospitality consultancy — serving corporate organisations, private clients and hospitality businesses across Uganda, from our base on Entebbe Road.
                </p>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={onOpenBooking}
                    className="bg-[#D99B26] hover:bg-[#B8801C] text-slate-950 font-bold text-xs uppercase tracking-wider px-6 py-3 rounded shadow-lg flex items-center space-x-2 transition-colors cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>BOOK APPOINTMENT</span>
                  </button>

                  <button
                    onClick={() => onNavigate('consultancy')}
                    className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs uppercase tracking-wider px-6 py-3 rounded flex items-center space-x-2 transition-colors cursor-pointer"
                  >
                    <span>EXPLORE SOLUTIONS</span>
                    <ArrowRight className="w-4 h-4 text-[#D99B26]" />
                  </button>
                </div>
              </div>
            </div>

            {/* BENTO ITEM 2: HOSPITALITY CONSULTANCY (4 Cols) */}
            <div className="col-span-12 lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-md hover:shadow-xl transition-all">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-[#1B365D] text-white px-2.5 py-1 rounded">
                    DIVISION 05
                  </span>
                  <Award className="w-5 h-5 text-[#D99B26]" />
                </div>

                <h3 className="font-serif font-bold text-2xl text-[#1B365D] mb-2 underline decoration-[#D99B26] decoration-2 underline-offset-8">
                  Hospitality Consultancy
                </h3>

                <p className="text-[#4A777A] font-medium text-xs mb-4 italic">
                  "{COMPANY_INFO.consultancySlogan}"
                </p>

                <ul className="space-y-2.5 text-xs text-slate-600 mb-6">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#D99B26] rounded-full mr-2.5 shrink-0"></span>
                    <span>Startup Blueprinting & Concept Launch</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#D99B26] rounded-full mr-2.5 shrink-0"></span>
                    <span>Menu Engineering & Cost Control</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#D99B26] rounded-full mr-2.5 shrink-0"></span>
                    <span>Staffing & SOP Operational Audits</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#D99B26] rounded-full mr-2.5 shrink-0"></span>
                    <span>Turnaround Management Solutions</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => onNavigate('consultancy')}
                className="text-[#1B365D] hover:text-[#D99B26] font-bold text-[11px] uppercase tracking-widest border-b-2 border-[#1B365D] hover:border-[#D99B26] w-max pb-1 transition-colors cursor-pointer flex items-center space-x-1"
              >
                <span>EXPLORE CONSULTANCY</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* BENTO ITEM 3: CHEF PETER / FOUNDER (4 Cols) */}
            <div className="col-span-12 lg:col-span-4 bg-[#4A777A] text-white rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-md flex flex-col justify-between group">
              <img
                src={UNSPLASH_IMAGES.corporateIntro}
                alt="Chef Peter, Founder and CEO of D'E Chosen Events Consultants"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
                <div>
                  <p className="text-[#D99B26] text-[10px] uppercase font-bold tracking-widest mb-1">
                    FOUNDER & CEO
                  </p>
                  <h3 className="font-serif font-bold text-2xl text-white">
                    Meet Chef Peter
                  </h3>
                  <p className="text-slate-100 text-xs italic leading-relaxed mt-2">
                    Global expertise spanning Dubai, Congo, Somalia, and Uganda, serving foreign ambassadors and dignitaries with absolute discretion.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white/20 text-white text-[10px] font-bold px-2.5 py-1 rounded border border-white/20">
                      VIP Experience
                    </span>
                    <span className="bg-white/20 text-white text-[10px] font-bold px-2.5 py-1 rounded border border-white/20">
                      Master Chef
                    </span>
                    <span className="bg-white/20 text-white text-[10px] font-bold px-2.5 py-1 rounded border border-white/20">
                      International
                    </span>
                  </div>

                  <button
                    onClick={() => onNavigate('ceo')}
                    className="w-full bg-[#1B365D] hover:bg-[#0F172A] text-white text-xs font-bold uppercase tracking-wider py-2.5 rounded transition-colors cursor-pointer"
                  >
                    READ CEO PROFILE
                  </button>
                </div>
              </div>
            </div>

            {/* BENTO ITEM 4: CULINARY SCHOOL (4 Cols) */}
            <div
              onClick={() => onNavigate('culinary-school')}
              className="col-span-12 sm:col-span-6 lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-md hover:shadow-xl transition-all cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded bg-[#D99B26]/10 border border-[#D99B26]/30 text-[#D99B26] flex items-center justify-center font-bold">
                    <Layers className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">
                    DIVISION 01
                  </span>
                </div>

                <h4 className="font-serif font-bold text-xl text-[#1B365D] group-hover:text-[#D99B26] transition-colors mb-2">
                  Dechosen Culinary School
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Professional training in culinary arts, confectionery, baking, domestic science, and organic waste management.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#1B365D] group-hover:text-[#D99B26]">
                <span>VIEW ACADEMY COURSES</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* BENTO ITEM 5: EVENT CATERING (4 Cols) */}
            <div
              onClick={() => onNavigate('catering')}
              className="col-span-12 sm:col-span-6 lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-md hover:shadow-xl transition-all cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded bg-[#D99B26]/10 border border-[#D99B26]/30 text-[#D99B26] flex items-center justify-center font-bold">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">
                    DIVISION 02
                  </span>
                </div>

                <h4 className="font-serif font-bold text-xl text-[#1B365D] group-hover:text-[#D99B26] transition-colors mb-2">
                  On-Call & Event Catering
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Bespoke private chefs, corporate galas, family meal prep, and live interactive cooking showcases.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#1B365D] group-hover:text-[#D99B26]">
                <span>BOOK CATERING</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* BENTO ITEM 6: EVENT MANAGEMENT (6 Cols) */}
            <div
              onClick={() => onNavigate('event-management')}
              className="col-span-12 sm:col-span-6 lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-md hover:shadow-xl transition-all cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded bg-[#D99B26]/10 border border-[#D99B26]/30 text-[#D99B26] flex items-center justify-center font-bold">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">
                    DIVISION 03
                  </span>
                </div>

                <h4 className="font-serif font-bold text-xl text-[#1B365D] group-hover:text-[#D99B26] transition-colors mb-2">
                  Event Management & Advisory
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Turnkey production for Kwanjula traditional introductions, luxury weddings, summits, sound, staging, and technical logistics.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#1B365D] group-hover:text-[#D99B26]">
                <span>EXPLORE EVENT MANAGEMENT</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* BENTO ITEM 7: FACILITY CLEANING (6 Cols) */}
            <div
              onClick={() => onNavigate('cleaning')}
              className="col-span-12 sm:col-span-6 lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-md hover:shadow-xl transition-all cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded bg-[#D99B26]/10 border border-[#D99B26]/30 text-[#D99B26] flex items-center justify-center font-bold">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">
                    DIVISION 04
                  </span>
                </div>

                <h4 className="font-serif font-bold text-xl text-[#1B365D] group-hover:text-[#D99B26] transition-colors mb-2">
                  Facility Cleaning Services
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Office janitorial, post-construction residential deep cleaning, and rapid pre/post-event venue sanitization.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#1B365D] group-hover:text-[#D99B26]">
                <span>SCHEDULE CLEANING</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ==========================================
          2. CORPORATE INTRODUCTION SECTION
          ========================================== */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border-2 border-[#D99B26]/30">
                <img
                  src={UNSPLASH_IMAGES.corporateIntro}
                  alt="D'E Chosen Events Consultants — integrated hospitality operations in Uganda"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B365D]/60 via-transparent to-transparent"></div>
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -bottom-6 -right-6 hidden sm:block bg-[#1B365D] text-white p-6 rounded-lg shadow-2xl border-l-4 border-[#D99B26] max-w-xs">
                <p className="font-serif font-bold text-2xl text-[#D99B26]">Integrated</p>
                <p className="text-xs text-slate-300 mt-1">
                  Culinary Education • Catering • Events • Facility Cleaning • Business Consultancy
                </p>
              </div>
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-[#D99B26] tracking-widest uppercase">
                Corporate Capabilities
              </span>

              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1B365D] leading-tight">
                Excellence Beyond the Event
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                D'E Chosen Events Consultants Limited operates as an integrated multi-sector hospitality, culinary training, event execution, facility sanitation, and business consultancy enterprise.
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                By combining culinary education, bespoke catering, event management, facility hygiene, and management consultancy under one parent organization, we eliminate third-party friction and maintain strict operational standards across every touchpoint.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start space-x-3 bg-[#F4F6F8] p-4 rounded border border-slate-200">
                  <ShieldCheck className="w-5 h-5 text-[#D99B26] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#1B365D]">Zero Third-Party Friction</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Direct execution across food, staff, setup & cleanup.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-[#F4F6F8] p-4 rounded border border-slate-200">
                  <Award className="w-5 h-5 text-[#D99B26] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#1B365D]">Institutional Rigor</h4>
                    <p className="text-xs text-slate-500 mt-0.5">SOPs derived from international luxury standards.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('ceo')}
                  className="bg-[#1B365D] hover:bg-[#0F172A] text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded shadow-md inline-flex items-center space-x-2 transition-colors cursor-pointer"
                >
                  <span>DISCOVER D'E CHOSEN</span>
                  <ArrowRight className="w-4 h-4 text-[#D99B26]" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          3. FIVE CORE DIVISIONS SECTION
          ========================================== */}
      <section id="core-divisions" className="py-20 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#D99B26] tracking-widest uppercase">
              The Five Operational Pillars
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1B365D] mt-2">
              Our Integrated Hospitality Ecosystem
            </h2>
            <p className="text-sm text-slate-600 mt-3">
              Five specialized divisions seamlessly connected to support individuals, corporations, high-net-worth clients, and hospitality investors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CORE_DIVISIONS.map((div) => (
              <div
                key={div.id}
                onClick={() => onNavigate(div.pageId)}
                className="group bg-white rounded-xl overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1"
              >
                <div>
                  {/* Division Image */}
                  <div className="h-48 overflow-hidden relative bg-slate-200">
                    <img
                      src={div.image}
                      alt={div.title}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-[#1B365D] text-[#D99B26] font-serif font-bold text-xs px-3 py-1 rounded shadow-md">
                      DIVISION {div.number}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <h3 className="font-serif font-bold text-xl text-[#1B365D] group-hover:text-[#D99B26] transition-colors">
                      {div.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      {div.shortDesc}
                    </p>
                    
                    {/* Highlights */}
                    <div className="pt-2 border-t border-slate-100 space-y-1.5">
                      {div.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-[11px] text-slate-500">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#4A777A] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-6 py-4 bg-[#F4F6F8] border-t border-slate-200 flex items-center justify-between text-xs font-bold text-[#1B365D] group-hover:bg-[#1B365D] group-hover:text-white transition-colors">
                  <span>EXPLORE DIVISION</span>
                  <ArrowRight className="w-4 h-4 text-[#D99B26]" />
                </div>
              </div>
            ))}

            {/* CTA Box in Ecosystem Grid */}
            <div className="bg-[#1B365D] text-white rounded-xl p-8 flex flex-col justify-between border-2 border-[#D99B26]/50 shadow-xl">
              <div>
                <span className="text-xs font-bold text-[#D99B26] uppercase tracking-widest">
                  Tailored Operations
                </span>
                <h3 className="font-serif font-bold text-2xl text-white mt-2">
                  Need an Integrated Package?
                </h3>
                <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                  Combine Culinary Training, Catering, Event Production, Cleaning, and Business Consultancy into one custom service-level agreement.
                </p>
              </div>

              <div className="pt-6">
                <button
                  onClick={onOpenBooking}
                  className="w-full bg-[#D99B26] hover:bg-[#B8801C] text-slate-950 font-bold text-xs uppercase tracking-wider py-3.5 rounded shadow-md transition-colors cursor-pointer"
                >
                  REQUEST ENTERPRISE PROPOSAL
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ==========================================
          4. STRATEGIC OPERATIONS MATRIX
          ========================================== */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#D99B26] tracking-widest uppercase">
              Operational Framework
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1B365D] mt-1">
              Strategic Operations Matrix
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Cross-divisional targeting and deliverables mapped directly to organizational capabilities.
            </p>
          </div>

          {/* Desktop Matrix Table */}
          <div className="hidden lg:block overflow-hidden rounded-xl border border-slate-200 shadow-xl bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#1B365D] text-white font-serif text-sm">
                  <th className="py-4 px-6 border-b border-slate-700">Division</th>
                  <th className="py-4 px-6 border-b border-slate-700">Target Audience</th>
                  <th className="py-4 px-6 border-b border-slate-700">Strategic Deliverable</th>
                  <th className="py-4 px-6 border-b border-slate-700 text-right">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs text-slate-700">
                {OPERATIONS_MATRIX.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-[#F4F6F8] hover:border-l-4 hover:border-l-[#D99B26] transition-all duration-200 group"
                  >
                    <td className="py-5 px-6 font-serif font-bold text-sm text-[#1B365D] group-hover:text-[#D99B26]">
                      {row.division}
                    </td>
                    <td className="py-5 px-6 font-semibold text-slate-800">
                      {row.targetAudience}
                    </td>
                    <td className="py-5 px-6 font-medium text-[#4A777A]">
                      {row.strategicDeliverable}
                    </td>
                    <td className="py-5 px-6 text-slate-500 text-right max-w-xs">
                      {row.details}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Matrix Expandable Cards */}
          <div className="lg:hidden space-y-4">
            {OPERATIONS_MATRIX.map((row, idx) => {
              const isExpanded = expandedMatrixRow === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#F4F6F8] rounded-lg border border-slate-200 overflow-hidden shadow-xs"
                >
                  <button
                    onClick={() => setExpandedMatrixRow(isExpanded ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between bg-white border-b border-slate-200"
                  >
                    <div>
                      <span className="text-[10px] font-bold text-[#D99B26] uppercase">
                        DIVISION
                      </span>
                      <h4 className="font-serif font-bold text-base text-[#1B365D]">
                        {row.division}
                      </h4>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-[#D99B26]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    )}
                  </button>

                  {isExpanded && (
                    <div className="p-4 space-y-3 text-xs text-slate-700 animate-in fade-in duration-200">
                      <div>
                        <span className="font-bold text-[#1B365D] block mb-0.5">Target Audience:</span>
                        <p className="bg-white p-2 rounded border border-slate-200">{row.targetAudience}</p>
                      </div>
                      <div>
                        <span className="font-bold text-[#1B365D] block mb-0.5">Strategic Deliverable:</span>
                        <p className="bg-white p-2 rounded border border-slate-200 text-[#4A777A] font-semibold">{row.strategicDeliverable}</p>
                      </div>
                      <div>
                        <span className="font-bold text-[#1B365D] block mb-0.5">Capabilities:</span>
                        <p className="text-slate-600 leading-relaxed">{row.details}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ==========================================
          5. WHY D'E CHOSEN? PILLARS
          ========================================== */}
      <section className="py-20 bg-[#1B365D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#D99B26] tracking-widest uppercase">
              Corporate Value Proposition
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-white mt-1">
              Why D'E Chosen?
            </h2>
            <p className="text-sm text-slate-300 mt-2">
              Built on institutional discipline, international exposure, and standardized operational rigor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Pillar 1 */}
            <div className="bg-[#0F172A] p-8 rounded-xl border border-slate-700 shadow-xl space-y-4 hover:border-[#D99B26] transition-colors group">
              <div className="w-12 h-12 rounded bg-[#D99B26]/20 border border-[#D99B26] text-[#D99B26] flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-white">
                Integrated Operational Ecosystem
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Culinary education, catering, facility sanitation and business consultancy under one enterprise. Eliminating multi-vendor fragmentation and delivering single-point accountability.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-[#0F172A] p-8 rounded-xl border border-slate-700 shadow-xl space-y-4 hover:border-[#D99B26] transition-colors group">
              <div className="w-12 h-12 rounded bg-[#D99B26]/20 border border-[#D99B26] text-[#D99B26] flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-white">
                Scalable Capabilities
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Ability to support both multi-hundred guest corporate conventions and highly confidential private chef deployments in luxury estates with equal precision.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-[#0F172A] p-8 rounded-xl border border-slate-700 shadow-xl space-y-4 hover:border-[#D99B26] transition-colors group">
              <div className="w-12 h-12 rounded bg-[#D99B26]/20 border border-[#D99B26] text-[#D99B26] flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-white">
                Standardized Quality & Safety
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Strong sanitation standards, modern organic waste management protocols, food chemistry precision, and institutionalized Standard Operating Procedures (SOPs).
              </p>
            </div>

          </div>

          <div className="mt-12 text-center">
            <button
              onClick={onOpenBooking}
              className="bg-[#D99B26] hover:bg-[#B8801C] text-slate-950 font-bold text-xs uppercase tracking-wider px-8 py-4 rounded shadow-xl inline-flex items-center space-x-2 transition-all cursor-pointer"
            >
              <span>PARTNER WITH D'E CHOSEN</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* ==========================================
          6. TESTIMONIALS CAROUSEL
          ========================================== */}
      <TestimonialCarousel />

    </div>
  );
};
