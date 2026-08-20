import React, { useState } from 'react';
import { PageId, BookingFormData } from '../types';
import { COMPANY_INFO, PAGE_HERO_IMAGES } from '../data/siteData';
import { GallerySection } from '../components/GallerySection';
import { Phone, MapPin, Clock, CheckCircle2, Send, Map, Globe, Mail } from 'lucide-react';
import { WhatsAppIcon } from '../components/icons/WhatsAppIcon';
import { EmailIcon } from '../components/icons/EmailIcon';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    service: 'Hospitality Consultancy',
    preferredDate: '',
    preferredTime: '10:00 AM',
    guestCount: '1 - 10',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const web3Key = import.meta.env.VITE_WEB3FORMS_KEY || '';

    if (web3Key) {
      try {
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            access_key: web3Key,
            subject: `Website Contact Request: ${formData.service} - ${formData.fullName}`,
            from_name: formData.fullName,
            replyto: formData.email,
            to_email: COMPANY_INFO.emailPlaceholder,
            ...formData
          })
        });
      } catch (err) {
        console.error('Email dispatch error:', err);
      }
    }

    setIsSending(false);
    setSubmitted(true);
  };

  const handleSendEmailDirect = () => {
    const subject = encodeURIComponent(`Appointment Request: ${formData.service} - ${formData.fullName}`);
    const body = encodeURIComponent(
      `D'E CHOSEN EVENTS CONSULTANTS - CONTACT REQUEST\n` +
      `=============================================\n\n` +
      `Full Name: ${formData.fullName}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email}\n` +
      `Service: ${formData.service}\n` +
      `Preferred Date/Time: ${formData.preferredDate || 'Flexible'} @ ${formData.preferredTime}\n` +
      `Guests / Scale: ${formData.guestCount}\n\n` +
      `Message / Details:\n${formData.message || 'N/A'}`
    );
    window.open(`mailto:${COMPANY_INFO.emailPlaceholder}?subject=${subject}&body=${body}`, '_blank');
  };

  const handleSendWhatsAppDirect = () => {
    const cleanPhone = COMPANY_INFO.whatsappPlaceholder.replace(/[^0-9]/g, '');
    const message = encodeURIComponent(
      `Hello D'E Chosen Events Consultants,\n\n` +
      `I am requesting a booking/consultation:\n` +
      `• Name: ${formData.fullName}\n` +
      `• Phone: ${formData.phone}\n` +
      `• Service: ${formData.service}\n` +
      `• Date/Time: ${formData.preferredDate || 'TBD'} @ ${formData.preferredTime}\n` +
      `• Message: ${formData.message || 'N/A'}`
    );
    window.open(`https://wa.me/${cleanPhone}?text=${message}`, '_blank');
  };

  return (
    <div className="font-sans">
      
      {/* HERO SECTION */}
      <section className="bg-[#1B365D] text-white py-16 border-b-4 border-[#D99B26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold text-[#D99B26] tracking-widest uppercase">
            Get In Touch
          </span>
          <h1 className="font-serif font-bold text-3xl sm:text-5xl text-white mt-2">
            Let's Bring Your Vision to Life
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mt-3 leading-relaxed">
            Whether you need culinary training, catering, event management, cleaning services or hospitality consultancy, our team is ready to help.
          </p>
        </div>
      </section>

      {/* THREE ACTION CARDS */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* WhatsApp */}
            <div className="bg-[#F4F6F8] p-6 rounded-xl border border-slate-200 text-center space-y-3 hover:border-emerald-500 transition-all hover:shadow-md">
              <div className="w-14 h-14 bg-emerald-100 text-[#25D366] rounded-full flex items-center justify-center mx-auto shadow-sm">
                <WhatsAppIcon className="w-7 h-7 fill-current" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#1B365D]">WHATSAPP DIRECT</h3>
              <p className="text-xs text-slate-500">Fast Chat & Immediate Service Inquiries</p>
              <p className="text-xs font-mono font-bold text-slate-800 bg-white py-1.5 px-3 rounded border border-slate-200 inline-block shadow-2xs">
                {COMPANY_INFO.whatsappPlaceholder}
              </p>
              <div>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappPlaceholder.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded transition-all shadow-md transform hover:-translate-y-0.5"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>Chat On WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="bg-[#F4F6F8] p-6 rounded-xl border border-slate-200 text-center space-y-3 hover:border-[#D99B26] transition-all hover:shadow-md">
              <div className="w-14 h-14 bg-amber-100 text-[#D99B26] rounded-full flex items-center justify-center mx-auto shadow-sm">
                <EmailIcon className="w-7 h-7 fill-current" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#1B365D]">OFFICIAL EMAIL</h3>
              <p className="text-xs text-slate-500">Corporate Contracts, Training & SLA Proposals</p>
              <p className="text-xs font-mono font-bold text-slate-800 bg-white py-1.5 px-3 rounded border border-slate-200 inline-block shadow-2xs">
                {COMPANY_INFO.emailPlaceholder}
              </p>
              <div>
                <a
                  href={`mailto:${COMPANY_INFO.emailPlaceholder}`}
                  className="inline-flex items-center space-x-2 bg-[#1B365D] hover:bg-[#0F172A] text-white font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded transition-all shadow-md transform hover:-translate-y-0.5"
                >
                  <EmailIcon className="w-4 h-4 fill-current" />
                  <span>Send An Email</span>
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-[#F4F6F8] p-6 rounded-xl border border-slate-200 text-center space-y-3 hover:border-[#1B365D] transition-colors">
              <div className="w-12 h-12 bg-blue-100 text-[#1B365D] rounded-full flex items-center justify-center mx-auto shadow-xs">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#1B365D]">PHONE</h3>
              <p className="text-xs text-slate-500">Direct Executive Phone Line</p>
              <p className="text-xs font-mono font-bold text-slate-800 bg-white py-1.5 px-3 rounded border border-slate-200 inline-block">
                {COMPANY_INFO.phonePlaceholder}
              </p>
              <div>
                <a
                  href={`tel:${COMPANY_INFO.phonePlaceholder}`}
                  className="inline-block bg-[#D99B26] hover:bg-[#B8801C] text-slate-950 font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded transition-colors"
                >
                  Call Us
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FORM & MAP SECTION */}
      <section className="py-20 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Booking Form Column */}
            <div className="lg:col-span-7 bg-white rounded-xl p-8 sm:p-10 border border-slate-200 shadow-xl">
              <span className="text-xs font-bold text-[#D99B26] tracking-widest uppercase">
                Direct Booking Form
              </span>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1B365D] mt-1 mb-6">
                Request an Appointment
              </h2>

              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-[#1B365D]">
                    Enquiry Logged Successfully
                  </h3>
                  <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Your enquiry for <strong className="text-[#1B365D]">{formData.service}</strong> has been logged.
                  </p>

                  <div className="pt-2 max-w-md mx-auto space-y-2">
                    <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Instant Dispatch Options:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <button
                        onClick={handleSendEmailDirect}
                        className="w-full bg-[#1B365D] hover:bg-[#0F172A] text-white font-bold text-xs uppercase tracking-wider py-3 px-4 rounded shadow flex items-center justify-center space-x-2 transition-colors cursor-pointer"
                      >
                        <Mail className="w-4 h-4 text-[#D99B26]" />
                        <span>Send via Email App</span>
                      </button>

                      <button
                        onClick={handleSendWhatsAppDirect}
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider py-3 px-4 rounded shadow flex items-center justify-center space-x-2 transition-colors cursor-pointer"
                      >
                        <WhatsAppIcon className="w-4 h-4 fill-current" />
                        <span>Send via WhatsApp</span>
                      </button>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded transition-colors cursor-pointer"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Honorable Guest / CEO"
                        className="w-full p-3 text-xs bg-slate-50 border border-slate-300 rounded focus:ring-2 focus:ring-[#1B365D] focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +256 700 000 000"
                        className="w-full p-3 text-xs bg-slate-50 border border-slate-300 rounded focus:ring-2 focus:ring-[#1B365D] focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. client@organization.com"
                        className="w-full p-3 text-xs bg-slate-50 border border-slate-300 rounded focus:ring-2 focus:ring-[#1B365D] focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Service Required *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full p-3 text-xs bg-slate-50 border border-slate-300 rounded focus:ring-2 focus:ring-[#1B365D] focus:bg-white font-semibold text-[#1B365D]"
                      >
                        <option value="Culinary Training">Culinary Training (Dechosen School)</option>
                        <option value="Catering">On-Call & Event Catering</option>
                        <option value="Private Chef">Private On-Call Chef Deployment</option>
                        <option value="Event Management">Event Management & Advisory</option>
                        <option value="Facility Cleaning">Facility Cleaning Services</option>
                        <option value="Hospitality Consultancy">Hospitality Business Consultancy</option>
                        <option value="Other">Other / Multi-Division SLA</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full p-3 text-xs bg-slate-50 border border-slate-300 rounded focus:ring-2 focus:ring-[#1B365D] focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Preferred Time
                      </label>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full p-3 text-xs bg-slate-50 border border-slate-300 rounded focus:ring-2 focus:ring-[#1B365D] focus:bg-white"
                      >
                        <option value="09:00 AM">09:00 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:30 AM">11:30 AM</option>
                        <option value="02:00 PM">02:00 PM</option>
                        <option value="04:00 PM">04:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Guest / Student Count
                    </label>
                    <select
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleChange}
                      className="w-full p-3 text-xs bg-slate-50 border border-slate-300 rounded focus:ring-2 focus:ring-[#1B365D] focus:bg-white"
                    >
                      <option value="1 - 10">1 - 10 (Individual / Small Group / Initial Audit)</option>
                      <option value="11 - 50">11 - 50 (Executive Event / Boardroom Catering)</option>
                      <option value="51 - 200">51 - 200 (Wedding / Corporate Gala)</option>
                      <option value="200+">200+ (Major Convention / Multi-Day Festival)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Requirements / Notes
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Specify event venue, location details, dietary preferences, or hospitality business scope..."
                      className="w-full p-3 text-xs bg-slate-50 border border-slate-300 rounded focus:ring-2 focus:ring-[#1B365D] focus:bg-white focus:outline-none"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#D99B26] hover:bg-[#B8801C] text-slate-950 font-bold text-xs uppercase tracking-wider py-4 rounded shadow-lg transition-colors cursor-pointer flex items-center justify-center space-x-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>SUBMIT ENQUIRY</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Location & Map Column */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-xl space-y-4">
                <span className="text-xs font-bold text-[#D99B26] tracking-widest uppercase">
                  Physical Headquarters
                </span>
                <h3 className="font-serif font-bold text-2xl text-[#1B365D]">
                  Visit D'E Chosen
                </h3>

                <div className="space-y-4 text-xs text-slate-600 pt-2 border-t border-slate-100">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-[#D99B26] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900 text-sm">Headquarters Location:</p>
                      <p className="text-slate-800 font-semibold">{COMPANY_INFO.addressPlaceholder}</p>
                      <p className="text-slate-500 text-[11px] mt-0.5">Situated in Mpala along Entebbe Road, accessible from both Kampala and Entebbe International Airport.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Globe className="w-5 h-5 text-[#4A777A] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900 text-sm">International Track Record:</p>
                      <p className="text-slate-700">Executive culinary, eco-lodge, and diplomatic event experience across <strong className="text-[#1B365D]">Uganda, Dubai, Congo & Somalia</strong>.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-[#D99B26] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900 text-sm">Office Hours:</p>
                      <p className="text-slate-700">{COMPANY_INFO.officeHours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Temporary Location Map Placeholder */}
              <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 shadow-xl relative group">
                <img
                  src={PAGE_HERO_IMAGES.contact}
                  alt="D'E Chosen Office Location Map Placeholder"
                  referrerPolicy="no-referrer"
                  className="w-full h-64 object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <div className="inline-flex items-center space-x-1.5 bg-[#D99B26] text-slate-950 text-[10px] font-bold px-2.5 py-0.5 rounded uppercase mb-1">
                      <Map className="w-3 h-3" />
                      <span>Map Placeholder</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      Editable map container — replace with Google Maps iframe embed or custom geo-map in production.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* GALLERY SHOWCASE */}
      <GallerySection />

    </div>
  );
};
