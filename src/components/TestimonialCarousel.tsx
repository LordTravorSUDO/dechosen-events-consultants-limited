import React, { useState } from 'react';
import { TESTIMONIALS_PLACEHOLDERS } from '../data/siteData';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_PLACEHOLDERS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? TESTIMONIALS_PLACEHOLDERS.length - 1 : prev - 1
    );
  };

  const current = TESTIMONIALS_PLACEHOLDERS[currentIndex];

  return (
    <section className="py-16 bg-[#1B365D] text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D99B26]/10 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4A777A]/10 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold text-[#D99B26] tracking-widest uppercase">
            Client Feedback & Excellence
          </span>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-white mt-1">
            Voices of Trust & Satisfaction
          </h2>
          <div className="mt-2 inline-block bg-[#D99B26]/20 border border-[#D99B26]/40 text-[#D99B26] text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded">
            CLIENT TESTIMONIAL PLACEHOLDERS
          </div>
        </div>

        {/* Carousel Card */}
        <div className="bg-[#0F172A] border border-slate-700/60 rounded-xl p-8 sm:p-12 shadow-2xl relative">
          <Quote className="absolute top-6 right-6 w-16 h-16 text-[#D99B26]/15 pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Avatar / Placeholder Image */}
            <div className="shrink-0 relative">
              <div className="w-24 h-24 rounded-full border-2 border-[#D99B26] overflow-hidden bg-slate-800 shadow-md">
                <img
                  src={current.image}
                  alt={current.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-[#D99B26] text-slate-950 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                Verified
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              {/* Star Rating */}
              <div className="flex justify-center md:justify-start space-x-1 mb-4 text-[#D99B26]">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <blockquote className="text-base sm:text-lg text-slate-200 italic font-serif leading-relaxed mb-6">
                "{current.comment}"
              </blockquote>

              <div>
                <h4 className="font-bold text-white text-base flex items-center justify-center md:justify-start gap-2">
                  <span>{current.name}</span>
                  <span className="text-xs font-mono text-[#D99B26] font-normal">
                    (Editable Placeholder)
                  </span>
                </h4>
                <p className="text-xs text-[#4A777A] font-semibold mt-0.5">
                  {current.role} — <span className="text-slate-400">{current.company}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-800">
            <div className="flex items-center space-x-2">
              {TESTIMONIALS_PLACEHOLDERS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentIndex
                      ? 'w-8 bg-[#D99B26]'
                      : 'w-2 bg-slate-700 hover:bg-slate-500'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-[#D99B26] hover:text-slate-950 text-white flex items-center justify-center transition-colors shadow-md"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-[#D99B26] hover:text-slate-950 text-white flex items-center justify-center transition-colors shadow-md"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
