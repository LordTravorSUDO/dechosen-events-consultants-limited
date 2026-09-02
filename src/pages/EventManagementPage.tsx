import React from 'react';
import { PageId } from '../types';
import { PAGE_HERO_IMAGES, UNSPLASH_IMAGES } from '../data/siteData';
import { Calendar, CheckCircle2, Award, Sparkles, Layers, Sliders, Shield, ArrowRight } from 'lucide-react';

interface EventManagementPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const EventManagementPage: React.FC = ({ onNavigate, onOpenBooking }) => {
  const eventServices = [
    {
      title: 'Strategic Event Consulting',
      subtitle: 'Concept Design, Budgeting, Risk Assessment & Vendor Optimization',
      desc: 'Feasibility analysis, floorplan ergonomics, structural risk auditing, and financial budget allocation for corporate conventions, summits, and brand activations.',
      deliverables: ['Concept & Layout Blueprints', 'Financial Budget Optimization', 'Risk & Safety Protocols', 'Master Event Schedules']
    },
    {
      title: 'Social Milestones & Cultural Ceremonies',
      subtitle: 'Kwanjula, Luxury Weddings & Family Anniversaries',
      desc: 'Bespoke event production honoring cultural traditions (such as traditional Kwanjula introductions) and high-end luxury weddings with elegant decor, ushering, and protocol.',
      deliverables: ['Cultural Kwanjula Coordination', 'Luxury Wedding Staging & Styling', 'VIP Guest Protocol & Ushering', 'Custom Floral & Aesthetic Production']
    },
    {
      title: 'Technical Logistics & Infrastructure',
      subtitle: 'Audio-Visual, Staging, Lighting, Ushers & Security',
      desc: 'End-to-end technical production ensuring crystal-clear sound, ambient architectural lighting, heavy-duty staging, and trained security personnel.',
      deliverables: ['State-of-the-Art Sound & Lighting', 'Modular Stage & Trussing Setup', 'Trained Corporate Ushers & Security', 'Power Backup & Generator Logistics']
    },
    {
      title: 'Vendor & Supplier Alignment',
      subtitle: 'Venue Contracts, Floral Production & Supplier Audits',
      desc: 'Single-point management of all third-party suppliers, negotiating venue contracts, controlling delivery timelines, and ensuring flawless synchronization.',
      deliverables: ['Venue Negotiation & Contract SLA', 'Third-Party Supplier Audits', 'On-Site Production Supervision', 'Post-Event Restorations']
    }
  ];

  const workflowSteps = [
    { step: '01', name: 'Concept Design', desc: 'Defining vision, spatial layout, budget, and guest flow.' },
    { step: '02', name: 'Strategic Planning', desc: 'Vendor contracts, technical specs, security, and timeline.' },
    { step: '03', name: 'Coordination', desc: 'Rehearsals, usher briefing, protocol checks, and catering alignment.' },
    { step: '04', name: 'Production', desc: 'On-site staging, audio-visual setup, lighting, and floral decor.' },
    { step: '05', name: 'Flawless Execution', desc: 'Live event management, real-time problem solving, and post-event cleanup.' }
  ];

  return (
    <div className="font-sans">
      
      {/* 
        IMAGE PLACEHOLDER:
        Replace this image with a professional photograph showing luxury wedding
        or corporate convention event management by D'E Chosen.
        Recommended dimensions: 1800 x 900 or larger.
      */}
      {/* HERO SECTION */}
      <section className="relative bg-[#0F172A] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={UNSPLASH_IMAGES.eventHero}
            alt="D'E Chosen event management and advisory services — weddings, corporate events and Kwanjula ceremonies in Uganda"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/90 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center space-x-2 bg-[#D99B26]/20 border border-[#D99B26]/40 text-[#D99B26] text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded">
              <Layers className="w-4 h-4" />
              <span>TURNKEY EVENT PRODUCTION</span>
            </span>

            <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
              Event Management & Advisory
            </h1>

            <p className="font-serif italic text-xl text-[#D99B26] font-medium">
              "From concept to execution, we make every event count."
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              Turnkey corporate production, diplomatic summits, Kwanjula traditional introductions, luxury weddings, and technical logistics handled with absolute precision.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={onOpenBooking}
                className="bg-[#D99B26] hover:bg-[#B8801C] text-slate-950 font-bold text-xs uppercase tracking-wider px-8 py-4 rounded shadow-xl flex items-center space-x-2 transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK AN EVENT CONSULTATION</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOUR SERVICES */}
      <section className="py-20 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#D99B26] tracking-widest uppercase">
              Core Deliverables
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1B365D] mt-1">
              Complete Event Execution Architecture
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventServices.map((srv, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#D99B26] bg-[#D99B26]/10 px-3 py-1 rounded">
                      PILLAR 0{idx + 1}
                    </span>
                    <Sparkles className="w-5 h-5 text-[#4A777A]" />
                  </div>

                  <h3 className="font-serif font-bold text-2xl text-[#1B365D] mb-1">
                    {srv.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#4A777A] uppercase tracking-wider mb-3">
                    {srv.subtitle}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {srv.desc}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-slate-100">
                    <p className="text-[11px] font-bold text-[#1B365D] uppercase tracking-wider mb-2">
                      Key Deliverables:
                    </p>
                    {srv.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-center space-x-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#D99B26] shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <button
                    onClick={onOpenBooking}
                    className="w-full bg-[#1B365D] hover:bg-[#0F172A] text-white text-xs font-bold uppercase tracking-wider py-3 rounded transition-colors cursor-pointer"
                  >
                    DISCUSS {srv.title.toUpperCase()}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE-STYLE WORKFLOW SECTION */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#D99B26] tracking-widest uppercase">
              Proven Methodology
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1B365D] mt-1">
              Our 5-Stage Event Execution Workflow
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Concept → Planning → Coordination → Production → Execution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {workflowSteps.map((ws, idx) => (
              <div
                key={idx}
                className="bg-[#F4F6F8] rounded-lg p-6 border-t-4 border-[#1B365D] hover:border-[#D99B26] transition-colors relative space-y-3"
              >
                <div className="text-3xl font-serif font-bold text-[#D99B26]">
                  {ws.step}
                </div>
                <h4 className="font-serif font-bold text-base text-[#1B365D]">
                  {ws.name}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {ws.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={onOpenBooking}
              className="bg-[#D99B26] hover:bg-[#B8801C] text-slate-950 font-bold text-xs uppercase tracking-wider px-8 py-4 rounded shadow-xl inline-flex items-center space-x-2 transition-colors cursor-pointer"
            >
              <span>TALK TO OUR EVENTS TEAM</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
