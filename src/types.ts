export type PageId =
  | 'home'
  | 'culinary-school'
  | 'catering'
  | 'event-management'
  | 'cleaning'
  | 'consultancy'
  | 'ceo'
  | 'contact';

export interface ServiceDivision {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  pageId: PageId;
  image: string;
  highlights: string[];
}

export interface MatrixRow {
  division: string;
  targetAudience: string;
  strategicDeliverable: string;
  details: string;
}

export interface TrainingCourse {
  id: string;
  title: string;
  category: string;
  badge?: string;
  description: string;
  modules: string[];
}

export interface CateringService {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
}

export interface EventService {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  iconName: string;
}

export interface CleaningService {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  suitableFor: string[];
  image: string;
}

export interface ConsultancyArea {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  comment: string;
  rating: number;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Culinary Training' | 'Catering' | 'Events' | 'Chef Peter' | 'Cleaning' | 'Hospitality Consultancy';
  imageUrl: string;
  caption: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  guestCount: string;
  message: string;
}
