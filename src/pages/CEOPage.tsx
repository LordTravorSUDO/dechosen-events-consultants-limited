import React from 'react';
import { PageId } from '../types';
import { CEO_PROFILE, COMPANY_INFO } from '../data/siteData';
import { Calendar, Globe, Award, Shield, User, Sparkles, Heart, Compass, ArrowRight, BookOpen, GraduationCap, Building2, Utensils, CheckCircle2 } from 'lucide-react';

interface CEOPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const CEOPage: React.FC<CEOPageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="font-sans">
      
      {/* HERO SECTION */}
      <section className="bg-[#1B365D] text-white py-20 border-b-4 border-[#D99B26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Portrait Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#D99B26]/40 bg-slate-900">
                <img
                  src={CEO_PROFILE.portraitUnsplashUrl}
                  alt={CEO_PROFILE.fullName}
                  referrerPolicy="no-referrer"
                  className="w-full h-[520px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#0F172A]/90 backdrop-blur-xs rounded-xl border border-slate-700">
                  <span className="text-[#D99B26] font-bold text-xs uppercase tracking-wider block">
                    FOUNDER & LEAD CONSULTANT CHEF
                  </span>
                  <p className="font-serif font-bold text-lg text-white mt-0.5">
                    Chef Peter
                  </p>
                  <p className="text-[11px] text-slate-300 italic">
                    D'E Chosen Events Consultants Limited
                  </p>
                </div>
              </div>
            </div>

            {/* Right Biography Intro */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center space-x-1.5 bg-[#D99B26]/20 border border-[#D99B26]/40 text-[#D99B26] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>CONSULTANT CHEF</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 bg-sky-500/20 border border-sky-400/40 text-sky-300 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>HOTEL MANAGEMENT & CATERING GRADUATE</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>PUBLISHED AUTHOR</span>
                </span>
              </div>

              <div>
                <h1 className="font-serif font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                  Meet Chef Peter
                </h1>
                <p className="font-serif text-lg text-[#D99B26] font-medium mt-1">
                  {CEO_PROFILE.heroSubtitle}
                </p>
              </div>

              <div className="p-4 bg-[#0F172A] rounded-lg border-l-4 border-[#D99B26] text-xs sm:text-sm text-slate-200 space-y-2">
                <div>
                  <p className="font-bold text-white uppercase text-[11px] tracking-wider text-slate-400">
                    Full Name & Title
                  </p>
                  <p className="font-serif font-bold text-base text-[#D99B26]">
                    {CEO_PROFILE.fullName}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-800 flex flex-wrap items-center gap-2 text-xs">
                  <span className="text-slate-400">Defining Pillars:</span>
                  {CEO_PROFILE.definingVirtues.map((v, i) => (
                    <span key={i} className="bg-[#1B365D] text-white font-bold px-2.5 py-0.5 rounded border border-slate-700">
                      {v}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Chef Peter is a distinguished Consultant Chef, Hotel Management and Institutional Catering graduate, published writer, recipe innovator, menu developer, and master baker. His career spans prestigious appointments with UN Base, Newrest Uganda In-Flights, Speke Group of Hotels, Imperial Group of Hotels, and international private chef mentorship across 6 countries.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={onOpenBooking}
                  className="bg-[#D99B26] hover:bg-[#B8801C] text-slate-950 font-bold text-xs uppercase tracking-wider px-8 py-4 rounded shadow-xl flex items-center space-x-2 transition-colors cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>BOOK A CONSULTATION WITH CHEF PETER</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 📚 PUBLISHED BOOKS SHOWCASE SECTION */}
      <section className="py-20 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-flex items-center space-x-2 text-xs font-bold text-[#D99B26] tracking-widest uppercase bg-[#D99B26]/10 px-3.5 py-1.5 rounded border border-[#D99B26]/30">
              <BookOpen className="w-4 h-4" />
              <span>CULINARY LITERATURE & AUTHORSHIP</span>
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-white">
              Books Authored by Chef Peter
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              As a writer and menu innovator, Chef Peter has authored three foundational books sharing commercial baking chemistry, global recipe collections, and culinary techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CEO_PROFILE.publishedBooks.map((book, idx) => (
              <div
                key={idx}
                className="bg-slate-800/90 rounded-2xl p-8 border border-slate-700 hover:border-[#D99B26] transition-all shadow-xl space-y-4 relative group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#D99B26]/20 text-[#D99B26] flex items-center justify-center font-bold text-lg">
                  0{idx + 1}
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#D99B26] bg-[#D99B26]/10 px-2.5 py-1 rounded">
                    {book.category}
                  </span>
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-white mt-3 group-hover:text-[#D99B26] transition-colors">
                    "{book.title}"
                  </h3>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {book.description}
                </p>
                <div className="pt-2 flex items-center space-x-2 text-xs font-bold text-slate-400 group-hover:text-white transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#D99B26]" />
                  <span>Published Author Signature Work</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 🏛️ PRESTIGIOUS INSTITUTIONAL EXPERIENCE & SPECIALTIES */}
      <section className="py-20 bg-[#F4F6F8] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Prestigious Organizations */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-[#D99B26] tracking-widest uppercase">
                INSTITUTIONAL TRACK RECORD
              </span>

              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1B365D]">
                Worked With Industry Leaders & Diplomatic Missions
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                Chef Peter's extensive consultation and operational background includes leading culinary operations for international aviation, diplomatic missions, and premier luxury hotel groups.
              </p>

              <div className="space-y-3 pt-2">
                {CEO_PROFILE.prestigiousExperience.map((inst, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 text-xs font-bold text-[#1B365D] flex items-center space-x-3 shadow-2xs hover:border-[#D99B26] transition-colors">
                    <Building2 className="w-5 h-5 text-[#D99B26] shrink-0" />
                    <span className="text-sm">{inst}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Culinary Specialties & Disciplines */}
            <div className="lg:col-span-6 bg-white p-8 rounded-2xl border border-slate-200 shadow-xl space-y-6">
              <div className="flex items-center space-x-3 pb-3 border-b border-slate-100">
                <Utensils className="w-6 h-6 text-[#D99B26]" />
                <h3 className="font-serif font-bold text-2xl text-[#1B365D]">
                  Signature Culinary Specialties
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CEO_PROFILE.culinarySpecialties.map((spec, idx) => (
                  <div key={idx} className="bg-[#F4F6F8] p-4 rounded-xl border border-slate-200 space-y-1">
                    <div className="flex items-center space-x-2 text-[#D99B26]">
                      <Sparkles className="w-4 h-4" />
                      <span className="font-serif font-bold text-sm text-[#1B365D]">{spec}</span>
                    </div>
                    <p className="text-[11px] text-slate-500">Mastery & Expert Demonstration</p>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-[#1B365D] text-white rounded-xl text-xs space-y-2">
                <p className="font-bold text-[#D99B26] uppercase tracking-wider text-[11px]">
                  Academic Business Foundation
                </p>
                <p className="text-slate-200">
                  <strong className="text-white">{CEO_PROFILE.education}</strong> — Fusing business strategy, cost control, and organizational structures with world-class gastronomy.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 🌍 INTERNATIONAL PRIVATE FAMILY TRAINING ACROSS 6 NATIONS */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-[#D99B26] tracking-widest uppercase">
              INTERNATIONAL MENTORSHIP
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1B365D]">
              Taught & Trained Private Families Across 6 Nations
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              In addition to commercial hotels and resorts, Chef Peter has personally trained private chefs and household teams in VIP family residences across Africa and the Middle East.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CEO_PROFILE.privateTrainingNations.map((nat, idx) => (
              <div key={idx} className="bg-[#F4F6F8] p-6 rounded-2xl border border-slate-200 hover:border-[#D99B26] transition-all space-y-3 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-full bg-[#1B365D] text-[#D99B26] font-bold text-xs flex items-center justify-center">
                    0{idx + 1}
                  </span>
                  <Globe className="w-5 h-5 text-[#4A777A]" />
                </div>
                <h3 className="font-serif font-bold text-xl text-[#1B365D]">
                  {nat.country}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {nat.detail}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 1. CHEF PETER'S FULL STORY — CHAPTER BY CHAPTER */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-[#D99B26] tracking-widest uppercase bg-[#D99B26]/10 px-3 py-1 rounded border border-[#D99B26]/30">
              OFFICIAL BIOGRAPHY
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-5xl text-[#1B365D]">
              The Full Story of Chef Peter
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-sans">
              From foundational kitchen discipline in Uganda to executive fine dining in Dubai, regional eco-lodges in Congo, and diplomatic missions in Somalia.
            </p>
          </div>

          {/* Introductory Narrative Card */}
          <div className="bg-[#F4F6F8] p-8 sm:p-10 rounded-2xl border-l-8 border-[#D99B26] shadow-md mb-16 space-y-4">
            <h3 className="font-serif font-bold text-2xl text-[#1B365D]">
              A Legacy Built on Mastery, Faith & Uncompromising Standards
            </h3>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-sans">
              {CEO_PROFILE.fullBiography.introduction}
            </p>
          </div>

          {/* Chapter Timeline / Narrative Cards */}
          <div className="space-y-12">
            {CEO_PROFILE.fullBiography.chapters.map((chapter, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 mb-6 border-b border-slate-100 gap-4">
                  <div className="flex items-center space-x-3">
                    <span className="w-10 h-10 rounded-full bg-[#1B365D] text-[#D99B26] font-serif font-bold text-lg flex items-center justify-center shrink-0">
                      {chapter.chapterNumber}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#4A777A]">
                      CHAPTER {chapter.chapterNumber}
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#1B365D] group-hover:text-[#D99B26] transition-colors">
                    {chapter.title}
                  </h3>
                </div>

                <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-sans">
                  {chapter.content}
                </p>
              </div>
            ))}
          </div>

          {/* Core Leadership Values Grid */}
          <div className="mt-20 pt-12 border-t border-slate-200">
            <div className="text-center mb-10">
              <span className="text-xs font-bold text-[#D99B26] tracking-widest uppercase">
                PHILOSOPHICAL ANCHORS
              </span>
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#1B365D] mt-1">
                Chef Peter's Core Values
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {CEO_PROFILE.fullBiography.coreValues.map((val, idx) => (
                <div key={idx} className="bg-[#F4F6F8] p-6 rounded-xl border border-slate-200 space-y-2">
                  <div className="flex items-center space-x-2 text-[#D99B26]">
                    <Sparkles className="w-4 h-4" />
                    <h4 className="font-serif font-bold text-lg text-[#1B365D]">
                      {val.title}
                    </h4>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 2. GLOBAL JOURNEY OF EXCELLENCE */}
      <section className="py-20 bg-[#F4F6F8] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#D99B26] tracking-widest uppercase">
              International Exposure
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1B365D] mt-1">
              A Journey of Global Excellence
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Chef Peter's professional experience spans international luxury hubs, regional resort lodges, and high-security diplomatic environments.
            </p>
          </div>

          {/* Visual Map / Route */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {CEO_PROFILE.globalJourney.map((loc, idx) => (
              <div
                key={idx}
                className="bg-[#F4F6F8] rounded-xl p-6 border-t-4 border-[#1B365D] hover:border-[#D99B26] transition-all space-y-3 relative group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D99B26]">
                    STEP 0{idx + 1}
                  </span>
                  <Globe className="w-5 h-5 text-[#4A777A] group-hover:rotate-12 transition-transform" />
                </div>

                <h3 className="font-serif font-bold text-2xl text-[#1B365D]">
                  {loc.country}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {loc.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Connected Flow Banner */}
          <div className="mt-8 p-4 bg-[#1B365D] text-white rounded-lg text-center text-xs font-semibold flex items-center justify-center space-x-2">
            <span className="text-[#D99B26]">GLOBAL ROUTE:</span>
            <span>Uganda</span>
            <span>→</span>
            <span>Dubai</span>
            <span>→</span>
            <span>Congo</span>
            <span>→</span>
            <span>Somalia</span>
            <span>→</span>
            <span className="text-[#D99B26] font-bold">Uganda (D'E Chosen)</span>
          </div>
        </div>
      </section>

      {/* 2. VIP EXPERIENCE SECTION */}
      <section className="py-20 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-[#D99B26] tracking-widest uppercase">
                High-Profile & Institutional Service
              </span>

              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1B365D]">
                Serving VIPs. Crafting Elite Experiences.
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                Chef Peter has prepared bespoke culinary experiences for high-profile clients requiring absolute discretion, creativity, professionalism, and culinary mastery.
              </p>

              <div className="space-y-3 pt-2">
                <p className="text-xs font-bold text-[#1B365D] uppercase tracking-wider">
                  Distinguished VIP Clientele:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {CEO_PROFILE.vipDetails.clientCategories.map((cat, idx) => (
                    <div key={idx} className="bg-white p-3 rounded border border-slate-200 text-xs font-semibold text-slate-800 flex items-center space-x-2">
                      <Award className="w-4 h-4 text-[#D99B26] shrink-0" />
                      <span>{cat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 space-y-2">
                <p className="text-xs font-bold text-[#1B365D] uppercase tracking-wider">
                  Local Institutional Leadership:
                </p>
                <div className="flex flex-wrap gap-2">
                  {CEO_PROFILE.vipDetails.institutionalExperience.map((inst, idx) => (
                    <span key={idx} className="bg-[#1B365D] text-white text-xs font-bold px-3 py-1.5 rounded">
                      {inst}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            <div className="lg:col-span-6 bg-white p-8 rounded-2xl border border-slate-200 shadow-xl space-y-6">
              <h3 className="font-serif font-bold text-2xl text-[#1B365D] pb-3 border-b border-slate-100">
                Private Chef Standards
              </h3>

              <div className="space-y-4 text-xs text-slate-700">
                {CEO_PROFILE.vipDetails.privateChefAttributes.map((attr, idx) => (
                  <div key={idx} className="flex items-start space-x-3 bg-[#F4F6F8] p-3.5 rounded border border-slate-200">
                    <Shield className="w-5 h-5 text-[#D99B26] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-serif font-bold text-sm text-[#1B365D]">{attr}</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">Built on international diplomatic standards.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. BEYOND THE KITCHEN — ENTREPRENEUR & CONSULTANT */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold text-[#D99B26] tracking-widest uppercase">
              Entrepreneurship & Advisory
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1B365D]">
              Beyond the Kitchen
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Chef Peter is an active hospitality entrepreneur and business consultant. His work includes supporting startup and existing restaurants around <strong className="text-[#1B365D]">Kampala</strong> and <strong className="text-[#1B365D]">Entebbe</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {CEO_PROFILE.entrepreneurship.services.map((srv, idx) => (
              <div key={idx} className="p-6 bg-[#F4F6F8] rounded-xl border border-slate-200 space-y-2 text-center">
                <span className="w-8 h-8 rounded-full bg-[#1B365D] text-[#D99B26] text-xs font-bold flex items-center justify-center mx-auto">
                  0{idx + 1}
                </span>
                <h4 className="font-serif font-bold text-base text-[#1B365D] mt-2">
                  {srv}
                </h4>
                <p className="text-xs text-slate-500">
                  Kampala & Entebbe Hospitality Support
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CHEF PETER — VISION QUOTE */}
      <section className="py-20 bg-[#1B365D] text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="text-xs font-bold text-[#D99B26] tracking-widest uppercase">
            Founder's Philosophy
          </span>

          <blockquote className="font-serif italic text-xl sm:text-3xl text-white leading-relaxed">
            "{CEO_PROFILE.quote}"
          </blockquote>

          <div className="pt-2">
            <p className="font-serif font-bold text-lg text-[#D99B26]">
              — Chef Peter
            </p>
            <p className="text-xs text-slate-300">
              Founder & CEO, D'E Chosen Events Consultants Limited
            </p>
          </div>
        </div>
      </section>

      {/* 5. FOUNDER'S MISSION (TRAIN, SERVE, TRANSFORM) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#D99B26] tracking-widest uppercase">
              Purpose-Driven Vision
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1B365D] mt-1">
              The Three Mission Pillars
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Established to contribute directly to the transformation of the regional hospitality industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CEO_PROFILE.missionPillars.map((mp, idx) => (
              <div
                key={idx}
                className="bg-[#F4F6F8] p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-xl transition-shadow space-y-4 text-center border-t-4 border-t-[#1B365D]"
              >
                <div className="w-12 h-12 bg-[#1B365D] text-[#D99B26] font-serif font-bold text-xl rounded-full flex items-center justify-center mx-auto">
                  0{idx + 1}
                </div>
                <h3 className="font-serif font-bold text-2xl text-[#1B365D]">
                  {mp.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {mp.summary}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={onOpenBooking}
              className="bg-[#D99B26] hover:bg-[#B8801C] text-slate-950 font-bold text-xs uppercase tracking-wider px-8 py-4 rounded shadow-xl inline-flex items-center space-x-2 transition-colors cursor-pointer"
            >
              <span>CONNECT WITH CHEF PETER & TEAM</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
