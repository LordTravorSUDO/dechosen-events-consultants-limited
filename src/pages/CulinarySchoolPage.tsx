import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes';
import { TRAINING_COURSES, UNSPLASH_IMAGES } from '../data/siteData';
import { Calendar, CheckCircle2, Award, GraduationCap, Utensils, ArrowRight, ShieldCheck } from 'lucide-react';

const CANONICAL = 'https://www.dechosenevents.com/culinary-school';
const SEO_TITLE = 'Culinary Training Uganda | Dechosen Culinary School — D\'E Chosen';
const SEO_DESC = 'Dechosen Culinary School offers training in culinary arts, confectionery, baking, domestic science and waste management in Uganda.';

interface CulinarySchoolPageProps {
  onOpenBooking: () => void;
}

export const CulinarySchoolPage: React.FC<CulinarySchoolPageProps> = ({ onOpenBooking }) => {
  return (
    <>
      {/* Per-route SEO — React 19 native document metadata */}
      <title>{SEO_TITLE}</title>
      <meta name="description" content={SEO_DESC} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={CANONICAL} />
      <meta property="og:title" content={SEO_TITLE} />
      <meta property="og:description" content={SEO_DESC} />
      <meta property="og:url" content={CANONICAL} />
      <meta property="og:image" content="https://www.dechosenevents.com/logo.png" />
      <meta name="twitter:title" content={SEO_TITLE} />
      <meta name="twitter:description" content={SEO_DESC} />

      <div className="font-sans">
        {/* HERO SECTION */}
        <section className="relative bg-[#0F172A] text-white py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={UNSPLASH_IMAGES.culinaryHero}
              alt="Dechosen Culinary School — professional culinary arts training in Uganda"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/90 to-transparent"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <span className="inline-flex items-center space-x-2 bg-[#D99B26]/20 border border-[#D99B26]/40 text-[#D99B26] text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded">
                <GraduationCap className="w-4 h-4" />
                <span>CRAFT & PROFESSIONAL DEVELOPMENT</span>
              </span>

              <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
                Dechosen Culinary School
              </h1>

              <p className="font-serif italic text-xl text-[#D99B26] font-medium">
                "Learn the craft. Master the kitchen. Build your future."
              </p>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Professional culinary, confectionery, domestic staff, and kitchen hygiene training designed to transform passionate students into industry-ready hospitality professionals and estate leaders.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={onOpenBooking}
                  className="bg-[#D99B26] hover:bg-[#B8801C] text-slate-950 font-bold text-xs uppercase tracking-wider px-8 py-4 rounded shadow-xl flex items-center space-x-2 transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>ENQUIRE ABOUT TRAINING</span>
                </button>

                <Link
                  to={ROUTES.chefPeter}
                  className="bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider px-6 py-4 rounded flex items-center space-x-2 transition-all"
                >
                  <span>MEET HEAD INSTRUCTOR (CHEF PETER)</span>
                  <ArrowRight className="w-4 h-4 text-[#D99B26]" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* OVERVIEW INTRO */}
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <span className="text-xs font-bold text-[#D99B26] uppercase tracking-widest">
                Institutional Excellence
              </span>
              <h2 className="font-serif font-bold text-3xl text-[#1B365D]">
                Rigorous Kitchen Discipline & Practical Science
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                At Dechosen Culinary School, training goes beyond basic recipes. We teach the chemistry of food, commercial kitchen management, food safety standards (HACCP), waste reduction, and the refined presentation required in top-tier hotels, private estates, and commercial bakeries.
              </p>
            </div>
          </div>
        </section>

        {/* FIVE DETAILED TRAINING CARDS */}
        <section className="py-20 bg-[#F4F6F8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-[#D99B26] tracking-widest uppercase">
                Curriculum Catalog
              </span>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1B365D] mt-1">
                Five Core Training Programs
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                Structured modules for aspiring commercial chefs, bakers, housekeepers, and estate staff.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {TRAINING_COURSES.map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-xl p-8 border border-slate-200 shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#4A777A] bg-[#4A777A]/10 px-3 py-1 rounded">
                        {course.category}
                      </span>
                      {course.badge && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#D99B26] bg-[#D99B26]/10 border border-[#D99B26]/30 px-2.5 py-0.5 rounded">
                          {course.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="font-serif font-bold text-2xl text-[#1B365D] mb-2">{course.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-6 font-medium">{course.description}</p>
                    <div className="space-y-2.5 pt-4 border-t border-slate-100">
                      <p className="text-xs font-bold text-[#1B365D] uppercase tracking-wider mb-2">Core Syllabus Modules:</p>
                      {course.modules.map((mod, idx) => (
                        <div key={idx} className="flex items-start space-x-2.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-[#D99B26] shrink-0 mt-0.5" />
                          <span>{mod}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="pt-8 mt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">Certification Awarded upon Completion</span>
                    <button
                      onClick={onOpenBooking}
                      className="bg-[#1B365D] hover:bg-[#0F172A] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded transition-colors cursor-pointer"
                    >
                      ENROLL NOW
                    </button>
                  </div>
                </div>
              ))}

              {/* Banner Card */}
              <div className="bg-[#1B365D] text-white rounded-xl p-8 border-2 border-[#D99B26]/50 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-[#D99B26] text-slate-950 rounded flex items-center justify-center font-bold mb-4">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-white mb-2">Institutional & On-Site Group Training</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    Are you a hotel owner, lodge operator, or diplomatic estate manager requiring customized staff retraining or kitchen efficiency audits? Dechosen Culinary School deploys senior instructors directly to your facility.
                  </p>
                </div>
                <div>
                  <button
                    onClick={onOpenBooking}
                    className="w-full bg-[#D99B26] hover:bg-[#B8801C] text-slate-950 font-bold text-xs uppercase tracking-wider py-3.5 rounded shadow-md transition-colors cursor-pointer"
                  >
                    REQUEST ON-SITE STAFF AUDIT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY TRAIN WITH US */}
        <section className="py-16 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6 bg-[#F4F6F8] rounded-lg border border-slate-200">
                <Utensils className="w-8 h-8 text-[#D99B26] mx-auto mb-3" />
                <h4 className="font-serif font-bold text-lg text-[#1B365D]">80% Practical Kitchen Time</h4>
                <p className="text-xs text-slate-600 mt-2">Hands-on cooking stations, live ingredient handling, and real commercial kitchen practice.</p>
              </div>
              <div className="p-6 bg-[#F4F6F8] rounded-lg border border-slate-200">
                <ShieldCheck className="w-8 h-8 text-[#D99B26] mx-auto mb-3" />
                <h4 className="font-serif font-bold text-lg text-[#1B365D]">Modern Waste & Hygiene SOPs</h4>
                <p className="text-xs text-slate-600 mt-2">Embedded waste management and sanitation protocols following international food safety rules.</p>
              </div>
              <div className="p-6 bg-[#F4F6F8] rounded-lg border border-slate-200">
                <GraduationCap className="w-8 h-8 text-[#D99B26] mx-auto mb-3" />
                <h4 className="font-serif font-bold text-lg text-[#1B365D]">Led by Chef Peter</h4>
                <p className="text-xs text-slate-600 mt-2">Direct mentorship from a chef with experience across Dubai, Congo, Somalia, and Uganda.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
