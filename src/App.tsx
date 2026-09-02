import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from './routes';
import { ScrollToTop } from './components/ScrollToTop';
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
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [bookingDefaultService, setBookingDefaultService] = useState<string>(
    'Hospitality Business Consultancy'
  );

  const handleOpenBooking = (defaultService?: string) => {
    if (defaultService) setBookingDefaultService(defaultService);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F6F8] font-sans antialiased selection:bg-[#D99B26] selection:text-slate-950">

      {/* Scroll to top on every route change */}
      <ScrollToTop />

      {/* Sticky Global Header */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Page Routes */}
      <main className="flex-1">
        <Routes>
          <Route
            path={ROUTES.home}
            element={
              <HomePage
                onOpenBooking={() => handleOpenBooking('Hospitality Business Consultancy')}
              />
            }
          />
          <Route
            path={ROUTES.culinarySchool}
            element={
              <CulinarySchoolPage
                onOpenBooking={() => handleOpenBooking('Culinary Training')}
              />
            }
          />
          <Route
            path={ROUTES.catering}
            element={
              <CateringPage
                onOpenBooking={() => handleOpenBooking('Catering')}
              />
            }
          />
          <Route
            path={ROUTES.eventManagement}
            element={
              <EventManagementPage
                onOpenBooking={() => handleOpenBooking('Event Management')}
              />
            }
          />
          <Route
            path={ROUTES.facilityCleaning}
            element={
              <FacilityCleaningPage
                onOpenBooking={() => handleOpenBooking('Facility Cleaning')}
              />
            }
          />
          <Route
            path={ROUTES.consultancy}
            element={
              <ConsultancyPage
                onOpenBooking={() => handleOpenBooking('Hospitality Business Consultancy')}
              />
            }
          />
          <Route
            path={ROUTES.chefPeter}
            element={
              <CEOPage
                onOpenBooking={() => handleOpenBooking('Hospitality Business Consultancy')}
              />
            }
          />
          <Route
            path={ROUTES.contact}
            element={<ContactPage />}
          />
          {/* Catch-all 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Global Corporate Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

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
