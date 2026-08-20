import React, { useState } from 'react';
import { BookingFormData } from '../types';
import { COMPANY_INFO } from '../data/siteData';
import { X, Calendar, Clock, Users, Mail, Phone, User, CheckCircle2, MessageSquare, Send } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

/**
 * =========================================================================================
 * STEP-BY-STEP GUIDELINES TO MAKE BOOKING APPOINTMENT FORMS WORK & RECEIVE EMAILS
 * =========================================================================================
 * 
 * Option 1: Web3Forms Integration (Free, No Backend Required, 1-Minute Setup)
 * -----------------------------------------------------------------------------------------
 * 1. Go to https://web3forms.com and enter target company email: info@dechosenevents.com
 * 2. Web3Forms will instantly email you a free Access Key (e.g. "a1b2c3d4-e5f6-7890-...").
 * 3. Replace `YOUR_WEB3FORMS_ACCESS_KEY` below or set VITE_WEB3FORMS_KEY in .env file.
 * 4. All appointment form submissions will automatically send an email to info@dechosenevents.com!
 * 
 * Option 2: Formspree Integration (Alternative Free Email Service)
 * -----------------------------------------------------------------------------------------
 * 1. Go to https://formspree.io and create a free form for info@dechosenevents.com
 * 2. Get your form ID (e.g. "xqyzyz12") and update the submit URL:
 *    `https://formspree.io/f/YOUR_FORM_ID`
 * 
 * Option 3: Instant "Send Email to Company" Button (Built-In Mailto Fallback)
 * -----------------------------------------------------------------------------------------
 * On form submission, the user sees a direct "Send Email to info@dechosenevents.com" button
 * that opens their email client (Gmail, Outlook, Apple Mail) prepopulated with all details!
 * 
 * Option 4: Direct WhatsApp Dispatch Button (Instant Instant Message)
 * -----------------------------------------------------------------------------------------
 * On form submission, the user can click "Dispatch via WhatsApp" which opens WhatsApp chat
 * directed to +256700000000 prepopulated with the booking details.
 * =========================================================================================
 */

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Hospitality Consultancy'
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    service: defaultService,
    preferredDate: '',
    preferredTime: '10:00 AM',
    guestCount: '1 - 10',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // Check if Web3Forms key is configured via ENV or site config
    const web3Key = import.meta.env.VITE_WEB3FORMS_KEY || '';

    if (web3Key) {
      try {
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            access_key: web3Key,
            subject: `New Appointment Booking: ${formData.service} - ${formData.fullName}`,
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

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  // Helper to open client's mail app addressed to info@dechosenevents.com
  const handleSendEmailDirect = () => {
    const subject = encodeURIComponent(`Appointment Booking Request: ${formData.service} - ${formData.fullName}`);
    const body = encodeURIComponent(
      `DE CHOSEN EVENTS CONSULTANTS - APPOINTMENT BOOKING REQUEST\n` +
      `=======================================================\n\n` +
      `Full Name: ${formData.fullName}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email}\n` +
      `Service Required: ${formData.service}\n` +
      `Preferred Date: ${formData.preferredDate || 'Flexible'}\n` +
      `Preferred Time: ${formData.preferredTime}\n` +
      `Guests / Scale: ${formData.guestCount}\n\n` +
      `Requirements / Message:\n${formData.message || 'N/A'}\n\n` +
      `-------------------------------------------------------\n` +
      `Sent from website appointment booking form.`
    );
    window.open(`mailto:${COMPANY_INFO.emailPlaceholder}?subject=${subject}&body=${body}`, '_blank');
  };

  // Helper to send booking summary to WhatsApp
  const handleSendWhatsAppDirect = () => {
    const cleanPhone = COMPANY_INFO.whatsappPlaceholder.replace(/[^0-9]/g, '');
    const message = encodeURIComponent(
      `Hello D'E Chosen Events Consultants,\n\n` +
      `I would like to book an appointment:\n` +
      `• Name: ${formData.fullName}\n` +
      `• Phone: ${formData.phone}\n` +
      `• Service: ${formData.service}\n` +
      `• Date/Time: ${formData.preferredDate || 'TBD'} @ ${formData.preferredTime}\n` +
      `• Guests: ${formData.guestCount}\n\n` +
      `Message: ${formData.message || 'N/A'}`
    );
    window.open(`https://wa.me/${cleanPhone}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200 my-8">
        
        {/* Header */}
        <div className="bg-[#1B365D] text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-[#D99B26] hover:text-slate-950 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="text-xs font-semibold text-[#D99B26] tracking-widest uppercase">
            Direct Engagement
          </span>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl mt-1 text-white">
            Book an Appointment
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            D'E Chosen Events Consultants Limited — Operational Excellence Guaranteed
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 font-sans">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              
              <h3 className="font-serif font-bold text-2xl text-[#1B365D]">
                Appointment Request Logged
              </h3>
              
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Your request for <strong className="text-[#1B365D]">{formData.service}</strong> has been received by our office.
              </p>

              <div className="bg-[#F4F6F8] p-4 rounded-lg text-left text-xs space-y-1.5 max-w-md mx-auto border border-slate-200">
                <p className="font-semibold text-slate-800">Appointment Details:</p>
                <p><span className="text-slate-500">Service:</span> {formData.service}</p>
                <p><span className="text-slate-500">Date/Time:</span> {formData.preferredDate || 'To be confirmed'} at {formData.preferredTime}</p>
                <p><span className="text-slate-500">Contact Phone:</span> {formData.phone}</p>
                <p><span className="text-slate-500">Email:</span> {formData.email}</p>
              </div>

              {/* Instant Direct Send Buttons */}
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
                  onClick={handleReset}
                  className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded transition-colors cursor-pointer"
                >
                  Close & Return
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Honorable Member / Director"
                      className="w-full pl-9 pr-3 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded focus:ring-2 focus:ring-[#1B365D] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +256 700 000 000"
                      className="w-full pl-9 pr-3 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded focus:ring-2 focus:ring-[#1B365D] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. client@organization.com"
                      className="w-full pl-9 pr-3 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded focus:ring-2 focus:ring-[#1B365D] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                {/* Service Dropdown */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Service Required *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full py-2.5 px-3 text-xs bg-slate-50 border border-slate-300 rounded focus:ring-2 focus:ring-[#1B365D] focus:bg-white focus:outline-none font-semibold text-[#1B365D]"
                  >
                    <option value="Culinary Training">Culinary Training (Dechosen School)</option>
                    <option value="Catering">On-Call & Event Catering</option>
                    <option value="Private Chef">Private On-Call Chef Deployment</option>
                    <option value="Event Management">Event Management & Advisory</option>
                    <option value="Facility Cleaning">Facility Cleaning Services</option>
                    <option value="Hospitality Consultancy">Hospitality Business Consultancy</option>
                    <option value="Other">Other / Multi-Division Package</option>
                  </select>
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded focus:ring-2 focus:ring-[#1B365D] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                {/* Preferred Time */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Preferred Time
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded focus:ring-2 focus:ring-[#1B365D] focus:bg-white focus:outline-none"
                    >
                      <option value="09:00 AM">09:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:30 AM">11:30 AM</option>
                      <option value="02:00 PM">02:00 PM</option>
                      <option value="04:00 PM">04:00 PM</option>
                    </select>
                  </div>
                </div>

              </div>

              {/* Guests Count */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Number of Guests / Participants
                </label>
                <div className="relative">
                  <Users className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <select
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleChange}
                    className="w-full pl-9 pr-3 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded focus:ring-2 focus:ring-[#1B365D] focus:bg-white focus:outline-none"
                  >
                    <option value="1 - 10">1 - 10 (Private Dining / Individual Student / Small Audit)</option>
                    <option value="11 - 50">11 - 50 (Executive Luncheon / Small Seminar)</option>
                    <option value="51 - 200">51 - 200 (Medium Corporate Event / Wedding)</option>
                    <option value="200+">200+ (Large Convention / Major Gala)</option>
                  </select>
                </div>
              </div>

              {/* Message / Requirements */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Specific Message / Requirements
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide additional details regarding location, dietary preferences, event goals or hospitality business scope..."
                    className="w-full pl-9 pr-3 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded focus:ring-2 focus:ring-[#1B365D] focus:bg-white focus:outline-none"
                  ></textarea>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center justify-between border-t border-slate-200">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSending}
                  className="bg-[#D99B26] hover:bg-[#B8801C] disabled:opacity-50 text-slate-950 font-bold text-xs uppercase tracking-wider px-8 py-3 rounded shadow-lg transition-all cursor-pointer flex items-center space-x-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSending ? 'PROCESSING...' : 'SUBMIT ENQUIRY'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
