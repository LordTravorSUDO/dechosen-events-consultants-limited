import React, { useState } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

import { HomePage } from './pages/HomePage';
import { CulinarySchoolPage } from './pages/CulinarySchoolPage';
import { CateringPage } from './pages/CateringPage';
import { EventManagementPage } from './pages/EventManagementPage';
import { FacilityCleaningPage } from './pages/FacilityCleaningPage';
import { ConsultancyPage } from './pages/ConsultancyPage';
import { CEOPage } from './pages/CEOPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [bookingDefaultService, setBookingDefaultService] = useState<string>('Hospitality Business Consultancy');

  const handleNavigate = (page: PageId) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (defaultService?: string) => {
    if (defaultService) {
      setBookingDefaultService(defaultService);
    }
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F6F8] font-sans antialiased selection:bg-[#D99B26] selection:text-slate-950">
      
      {/* Sticky Global Header */}
      <Header
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Page Body View Routing */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking('Hospitality Business Consultancy')}
          />
        )}

        {activePage === 'culinary-school' && (
          <CulinarySchoolPage
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking('Culinary Training')}
          />
        )}

        {activePage === 'catering' && (
          <CateringPage
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking('Catering')}
          />
        )}

        {activePage === 'event-management' && (
          <EventManagementPage
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking('Event Management')}
          />
        )}

        {activePage === 'cleaning' && (
          <FacilityCleaningPage
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking('Facility Cleaning')}
          />
        )}

        {activePage === 'consultancy' && (
          <ConsultancyPage
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking('Hospitality Business Consultancy')}
          />
        )}

        {activePage === 'ceo' && (
          <CEOPage
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking('Hospitality Business Consultancy')}
          />
        )}

        {activePage === 'contact' && (
          <ContactPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Global Corporate Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Global Booking Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        defaultService={bookingDefaultService}
      />

      {/* Floating Instant WhatsApp Button */}
      <FloatingWhatsApp />

    </div>
  );
}
