import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { PageId } from './types';
import { PAGE_PATHS, PATH_PAGES } from './seo';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { SeoManager } from './components/SeoManager';
import { HomePage } from './pages/HomePage';
import { CulinarySchoolPage } from './pages/CulinarySchoolPage';
import { CateringPage } from './pages/CateringPage';
import { EventManagementPage } from './pages/EventManagementPage';
import { FacilityCleaningPage } from './pages/FacilityCleaningPage';
import { ConsultancyPage } from './pages/ConsultancyPage';
import { CEOPage } from './pages/CEOPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const activePage = PATH_PAGES[location.pathname] || 'home';
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingDefaultService, setBookingDefaultService] = useState('Hospitality Business Consultancy');

  const handleNavigate = (page: PageId) => navigate(PAGE_PATHS[page]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const handleOpenBooking = (defaultService?: string) => {
    if (defaultService) setBookingDefaultService(defaultService);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F6F8] font-sans antialiased selection:bg-[#D99B26] selection:text-slate-950">
      <SeoManager page={activePage} />
      <Header activePage={activePage} onNavigate={handleNavigate} onOpenBooking={() => handleOpenBooking()} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage onNavigate={handleNavigate} onOpenBooking={() => handleOpenBooking('Hospitality Business Consultancy')} />} />
          <Route path="/culinary-school" element={<CulinarySchoolPage onNavigate={handleNavigate} onOpenBooking={() => handleOpenBooking('Culinary Training')} />} />
          <Route path="/catering-services" element={<CateringPage onNavigate={handleNavigate} onOpenBooking={() => handleOpenBooking('Catering')} />} />
          <Route path="/event-management" element={<EventManagementPage onNavigate={handleNavigate} onOpenBooking={() => handleOpenBooking('Event Management')} />} />
          <Route path="/facility-cleaning" element={<FacilityCleaningPage onNavigate={handleNavigate} onOpenBooking={() => handleOpenBooking('Facility Cleaning')} />} />
          <Route path="/hospitality-consultancy" element={<ConsultancyPage onNavigate={handleNavigate} onOpenBooking={() => handleOpenBooking('Hospitality Business Consultancy')} />} />
          <Route path="/chef-peter-the-teacher" element={<CEOPage onNavigate={handleNavigate} onOpenBooking={() => handleOpenBooking('Hospitality Business Consultancy')} />} />
          <Route path="/contact" element={<ContactPage onNavigate={handleNavigate} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer onNavigate={handleNavigate} onOpenBooking={() => handleOpenBooking()} />
      <AppointmentModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} defaultService={bookingDefaultService} />
      <FloatingWhatsApp />
    </div>
  );
}
