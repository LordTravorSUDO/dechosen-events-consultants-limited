import React from 'react';
import { UNSPLASH_IMAGES } from '../data/siteData';
import { Calendar, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

const CANONICAL = 'https://www.dechosenevents.com/facility-cleaning';
const SEO_TITLE = 'Facility Cleaning Services Uganda | D\'E Chosen';
const SEO_DESC = 'Professional facility cleaning services in Uganda for corporate offices, residential properties and pre- and post-event venue cleaning.';

interface FacilityCleaningPageProps {
  onOpenBooking: () => void;
}

export const FacilityCleaningPage: React.FC<FacilityCleaningPageProps> = ({ onOpenBooking }) => {
  const cleaningServices = [
    {
      title: 'Office & Corporate Janitorial',
      subtitle: 'Corporate HQs, Banks, Embassies & Commercial Real Estate',
      desc: 'Institutional janitorial solutions designed for high-traffic corporate headquarters, financial institutions, diplomatic missions, and commercial towers.',
      bullets: [
        'Daily & Nightly Corporate Workspace Janitorial',
        'High-Grade Disinfection & Touchpoint Sanitization',
        'Executive Boardroom & Washroom Hygiene',
        'Glass, Window & Floor Buffing Maintenance'
      ],
      suitableFor: ['Corporate HQs', 'Embassies & Missions', 'Banking Halls', 'Commercial Towers'],
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Residential Deep Cleaning',
      subtitle: 'Post-Construction, Move-In/Move-Out & Estate Sanitization',
      desc: 'Deep cleaning solutions for luxury private estates, newly constructed residences, and high-end apartments requiring thorough dust elimination and surface restoration.',
      bullets: [
        'Post-Construction Dust & Debris Removal',
        'Move-In / Move-Out Deep Estate Sanitization',
        'Upholstery, Carpet & Curtain Steam Cleaning',
        'Grout, Tile & Kitchen Degreasing'
      ],
      suitableFor: ['Private Estates', 'Luxury Villas', 'Newly Built Properties', 'Diplomatic Residences'],
      image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Hospitality Pre/Post-Event Cleaning',
      subtitle: 'Event Halls, Venues, Outdoor Grounds & Corporate Festivals',
      desc: 'Rapid-turnaround cleaning crews that prepare event spaces prior to guest arrival and execute complete site restoration immediately following function completion.',
      bullets: [
        'Pre-Event Floor & Seating Sanitization',
        'Continuous During-Event Washroom Maintenance',
        'Post-Event Waste Removal & Hall Restoration',
        'Outdoor Grounds Litter & Debris Management'
      ],
      suitableFor: ['Event Halls & Venues', 'Hotel Ballrooms', 'Festival Grounds', 'Private Party Estates'],
      image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <>
      {/* Per-route SEO */}
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
              src={UNSPLASH_IMAGES.cleaningHero}
              alt="D'E Chosen professional facility cleaning services — corporate and residential sanitation in Uganda"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/90 to-transparent"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <span className="inline-flex items-center space-x-2 bg-[#D99B26]/20 border border-[#D99B26]/40 text-[#D99B26] text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded">
                <Sparkles className="w-4 h-4" />
                <span>COMMERCIAL HYGIENE & SANITATION</span>
              </span>

              <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
                Professional Facility Cleaning Services
              </h1>

              <p className="font-serif italic text-xl text-[#D99B26] font-medium">
                "Cleaner spaces. Better environments. Professional standards."
              </p>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Hospitality-grade sanitization for corporate headquarters, embassies, luxury residential estates, and rapid-turnaround venue restorations.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={onOpenBooking}
                  className="bg-[#D99B26] hover:bg-[#B8801C] text-slate-950 font-bold text-xs uppercase tracking-wider px-8 py-4 rounded shadow-xl flex items-center space-x-2 transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>BOOK CLEANING SERVICES</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* THREE MAJOR SERVICE SECTIONS */}
        <section className="py-20 bg-[#F4F6F8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-[#D99B26] tracking-widest uppercase">Sanitation Divisions</span>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1B365D] mt-1">
                Three Major Cleaning Solutions
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                Executed by uniformed, background-checked staff using eco-certified chemicals and specialized heavy equipment.
              </p>
            </div>

            <div className="space-y-12">
              {cleaningServices.map((cs, idx) => (
                <div key={idx} className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
                  <div className="lg:col-span-5 h-72 lg:h-full relative overflow-hidden bg-slate-200">
                    <img
                      src={cs.image}
                      alt={cs.title}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-[#1B365D] text-[#D99B26] font-bold text-xs px-3 py-1 rounded shadow-md uppercase">
                      DIVISION 0{idx + 1}
                    </div>
                  </div>
                  <div className="lg:col-span-7 p-8 sm:p-10 space-y-4">
                    <span className="text-xs font-bold text-[#4A777A] uppercase tracking-wider">{cs.subtitle}</span>
                    <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#1B365D]">{cs.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{cs.desc}</p>
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <p className="text-xs font-bold text-[#1B365D] uppercase tracking-wider">Scope of Work:</p>
                      {cs.bullets.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-center space-x-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-[#D99B26] shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-2">
                      <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Recommended For:</p>
                      <div className="flex flex-wrap gap-2">
                        {cs.suitableFor.map((sf, sfIdx) => (
                          <span key={sfIdx} className="bg-[#F4F6F8] text-slate-700 text-[11px] font-semibold px-2.5 py-1 rounded border border-slate-200">
                            {sf}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="pt-4">
                      <button
                        onClick={onOpenBooking}
                        className="bg-[#1B365D] hover:bg-[#0F172A] text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded shadow-md transition-colors cursor-pointer"
                      >
                        REQUEST SANITATION QUOTE
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#1B365D] text-white">
          <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
            <h3 className="font-serif font-bold text-3xl text-white">
              Need Immediate Post-Event Restoration or Scheduled HQ Janitorial?
            </h3>
            <p className="text-sm text-slate-300 max-w-2xl mx-auto">
              Our teams operate 24/7 to ensure your commercial environment or private residence remains spotless.
            </p>
            <button
              onClick={onOpenBooking}
              className="bg-[#D99B26] hover:bg-[#B8801C] text-slate-950 font-bold text-xs uppercase tracking-wider px-8 py-4 rounded shadow-xl inline-flex items-center space-x-2 transition-colors cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>SCHEDULE CLEANING INSPECTION</span>
            </button>
          </div>
        </section>
      </div>
    </>
  );
};
