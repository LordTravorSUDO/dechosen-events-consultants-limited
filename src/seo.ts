import { PageId } from './types';

export const SITE_URL = 'https://www.dechosenevents.com';

export const PAGE_PATHS: Record<PageId, string> = {
  home: '/',
  'culinary-school': '/culinary-school',
  catering: '/catering-services',
  'event-management': '/event-management',
  cleaning: '/facility-cleaning',
  consultancy: '/hospitality-consultancy',
  ceo: '/chef-peter-the-teacher',
  contact: '/contact',
};

export const PATH_PAGES: Record<string, PageId> = Object.fromEntries(
  Object.entries(PAGE_PATHS).map(([page, path]) => [path, page as PageId]),
) as Record<string, PageId>;

export interface PageSeo {
  title: string;
  description: string;
  image: string;
  schemaType?: 'Service' | 'ProfilePage' | 'ContactPage' | 'EducationalOrganization';
  serviceType?: string;
}

export const PAGE_SEO: Record<PageId, PageSeo> = {
  home: {
    title: "D'E Chosen Events Consultants | Events & Catering Uganda",
    description:
      "D'E Chosen Events Consultants provides professional event management, catering, culinary training, facility cleaning and hospitality consultancy services in Uganda.",
    image: '/images/livecooking.jfif',
  },
  'culinary-school': {
    title: "Culinary School & Catering Courses Uganda | D'E Chosen",
    description:
      'Practical culinary arts, baking, domestic science, food safety and hospitality training at Dechosen Culinary School in Uganda.',
    image: '/images/culinaryschool.jfif',
    schemaType: 'EducationalOrganization',
  },
  catering: {
    title: "Professional Catering Services in Uganda | D'E Chosen",
    description:
      'Professional catering for weddings, corporate functions, conferences, private dining and special occasions in Kampala, Entebbe and across Uganda.',
    image: '/images/livecooking.jfif',
    schemaType: 'Service',
    serviceType: 'Professional catering services',
  },
  'event-management': {
    title: "Event Management Company in Uganda | D'E Chosen",
    description:
      'Event planning and management for weddings, Kwanjula ceremonies, corporate events, conferences and private celebrations across Uganda.',
    image: '/images/private.jfif',
    schemaType: 'Service',
    serviceType: 'Event planning and management',
  },
  cleaning: {
    title: "Professional Facility Cleaning Uganda | D'E Chosen",
    description:
      'Corporate, residential, post-construction and event venue cleaning services delivered to professional hospitality standards in Uganda.',
    image: '/images/domestic.jfif',
    schemaType: 'Service',
    serviceType: 'Professional facility cleaning',
  },
  consultancy: {
    title: "Hospitality Consultancy in Uganda | D'E Chosen",
    description:
      'Hospitality consultancy for hotels, restaurants and lodges, including menu engineering, operational systems, staff training and business improvement.',
    image: '/images/hospitality.jfif',
    schemaType: 'Service',
    serviceType: 'Hospitality business consultancy',
  },
  ceo: {
    title: "Chef Peter the Teacher | Founder of D'E Chosen",
    description:
      "Meet Chef Peter the Teacher, consultant chef, culinary trainer and founder of D'E Chosen Events Consultants Limited in Uganda.",
    image: '/images/Uncle Eddy.jpeg',
    schemaType: 'ProfilePage',
  },
  contact: {
    title: "Contact D'E Chosen Events Consultants Uganda",
    description:
      "Contact D'E Chosen for catering, event management, culinary training, cleaning and hospitality consultancy services in Uganda.",
    image: '/logo.png',
    schemaType: 'ContactPage',
  },
};

