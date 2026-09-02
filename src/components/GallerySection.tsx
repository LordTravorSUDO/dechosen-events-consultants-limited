import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/siteData';
import { GalleryItem } from '../types';
import { X, ZoomIn, Image as ImageIcon } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = [
    'All',
    'Culinary Training',
    'Catering',
    'Events',
    'Chef Peter',
    'Cleaning',
    'Hospitality Consultancy'
  ];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section className="py-16 bg-white font-sans border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-semibold text-[#D99B26] tracking-widest uppercase">
            Visual Showcase
          </span>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1B365D] mt-1">
            Operational Excellence in Action
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Explore our integrated ecosystem across culinary training, corporate catering, event production, sanitization, and hospitality consultancy.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded text-xs font-semibold tracking-wide transition-all ${
                  isActive
                    ? 'bg-[#1B365D] text-[#D99B26] shadow-md'
                    : 'bg-[#F4F6F8] text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative bg-[#F4F6F8] rounded-lg overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-4/3 relative overflow-hidden bg-slate-200">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B365D]/80 via-[#1B365D]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-[#D99B26] text-slate-950 px-2 py-0.5 rounded mb-2">
                      {item.category}
                    </span>
                    <h3 className="font-serif font-bold text-base leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-200 line-clamp-2 mt-1">
                      {item.caption}
                    </p>
                  </div>
                </div>

                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 text-slate-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                  <ZoomIn className="w-4 h-4 text-[#1B365D]" />
                </div>
              </div>

              <div className="p-4 bg-white border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#4A777A] uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="text-[10px] text-slate-400">Click to expand</span>
                </div>
                <h4 className="font-serif font-semibold text-sm text-[#1B365D] mt-1">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeItem && (
          <div
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setActiveItem(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-[#1B365D] rounded-xl overflow-hidden shadow-2xl border border-slate-700 text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-[#D99B26] hover:text-slate-950 text-white flex items-center justify-center transition-colors"
                aria-label="Close lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="aspect-16/9 bg-black relative flex items-center justify-center">
                <img
                  src={activeItem.imageUrl}
                  alt={activeItem.title}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6 bg-[#0F172A]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-[#D99B26] text-slate-950 text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded">
                    {activeItem.category}
                  </span>
                  <span className="text-xs text-slate-400">D'E Chosen Gallery Archive</span>
                </div>
                <h3 className="font-serif font-bold text-xl text-white">
                  {activeItem.title}
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  {activeItem.caption}
                </p>
                <div className="mt-4 pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-end">
                  <button
                    onClick={() => setActiveItem(null)}
                    className="text-[#D99B26] font-semibold hover:underline"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
