import {
  MatrixRow,
  ServiceDivision,
  TrainingCourse,
  CateringService,
  EventService,
  CleaningService,
  ConsultancyArea,
  Testimonial,
  GalleryItem
} from '../types';

/* ============================================================================
 * ✏️ CUSTOMIZATION GUIDE: COMPANY INFORMATION & CONTACT DETAILS
 * Edit the values below to personalize your website name, logo, phone,
 * email address, physical location, and social media links.
 * ============================================================================ */
export const COMPANY_INFO = {
  name: "D'E CHOSEN EVENTS CONSULTANTS LIMITED",
  shortName: "D'E CHOSEN",
  slogan: "Chosen for excellence, trained to excel.",
  consultancySlogan: "Operate smarter, serve better and profit bigger.",
  tagline: "Integrated Hospitality, Culinary Education, Event Management & Operational Consultancy",
  
  /* 🖼️ CUSTOM LOGO SETUP:
   * To add your own company logo:
   * 1. Place your logo image file (e.g. logo.png or logo.svg) in the '/public' folder of this project.
   * 2. Set logoUrl to "/logo.svg" or "/logo.png" (or provide a full web URL like "https://yourdomain.com/logo.png").
   * 3. Set to "" to fall back to the text typography logo badge.
   */
  logoUrl: "/logo.png", // e.g. "/logo.svg", "/logo.png" or "https://example.com/logo.png"
  
  /* 📞 PERSONALIZED CONTACT INFORMATION (Replace with your actual contact info): */
  phonePlaceholder: "+256 752345858 / +256 767757802", // Your primary phone numbers
  whatsappPlaceholder: "+256 752345858",                 // Your WhatsApp number (country code required)
  emailPlaceholder: "info@dechosenevents.com",              // Your official email address
  addressPlaceholder: "Mpala, Entebbe Road, Uganda",         // Company headquarters physical location
  officeHours: "Monday - Saturday: 8:00 AM - 6:00 PM | Sunday: By Appointment",
  
  /* 🌐 SOCIAL MEDIA LINKS (Replace with your official account URLs): */
  socials: {
    facebook: "https://facebook.com/your-page",
    instagram: "https://instagram.com/your-handle",
    tiktok: "https://tiktok.com/@your-handle",
    linkedin: "https://linkedin.com/company/your-company",
    youtube: "https://youtube.com/@your-channel"
  }
};

/* ============================================================================
 * 🖼️ CUSTOM HERO IMAGES:
 * Replace these URLs with your own high-resolution photography.
 * You can put images in '/public/images/' and link them as '/images/hero-home.jpg',
 * or paste external image URLs from your CDN/cloud storage.
 * ============================================================================ */
export const PAGE_HERO_IMAGES = {
  home: "https://placehold.co/1800x900?text=D%27E+Chosen+Events+Consultants",
  culinarySchool: "https://placehold.co/1800x900?text=Dechosen+Culinary+School",
  catering: "https://placehold.co/1800x900?text=On-Call+%26+Event+Catering",
  eventManagement: "https://placehold.co/1800x900?text=Event+Management+%26+Advisory",
  cleaning: "https://placehold.co/1800x900?text=Facility+Cleaning+Services",
  consultancy: "https://placehold.co/1800x900?text=Hospitality+Business+Consultancy",
  ceo: "https://placehold.co/900x1100?text=Chef+Peter",
  contact: "https://placehold.co/1800x900?text=Location+Map"
};

/* 📸 HIGH-DEFINITION PHOTOGRAPHY URLS (Replace with your own custom media): */
export const UNSPLASH_IMAGES = {
  homeHero: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1800&q=80",
  corporateIntro: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80",
  culinaryHero: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1800&q=80",
  cateringHero: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1800&q=80",
  eventHero: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1800&q=80",
  cleaningHero: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1800&q=80",
  consultancyHero: "https://images.unsplash.com/photo-1542744801-30d071850fbf?auto=format&fit=crop&w=1800&q=80",
  chefPeterPortrait: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=900&q=80"
};

export const CORE_DIVISIONS: ServiceDivision[] = [
  {
    id: 'div-1',
    number: '01',
    title: 'Dechosen Culinary School',
    shortDesc: 'Professional culinary, confectionery, domestic staff and hospitality training.',
    fullDesc: 'Comprehensive, certified skill acquisition designed to build world-class chefs, skilled bakers, and disciplined estate staff.',
    pageId: 'culinary-school',
    image: '/images/culinaryschool.jfif',
    highlights: ['International Cuisines', 'Confectionery & Pastry', 'Home Staff Certification', 'Waste Management']
  },
  {
    id: 'div-2',
    number: '02',
    title: 'On-Call & Event Catering',
    shortDesc: 'Corporate catering, private chefs, family meal preparation and bespoke live cooking.',
    fullDesc: 'Bespoke dining solutions crafted by expert chefs for corporate galas, private estate dinners, and VIP live showcases.',
    pageId: 'catering',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80',
    highlights: ['Corporate Galas & AGMs', 'Private Residence Chefs', 'Family Meal Plans', 'Live Showcase Cooking']
  },
  {
    id: 'div-3',
    number: '03',
    title: 'Event Management & Advisory',
    shortDesc: 'Strategic event planning, weddings, Kwanjula, logistics, staging and vendor coordination.',
    fullDesc: 'Turnkey event production combining protocol, technical infrastructure, venue alignment, and flawless execution.',
    pageId: 'event-management',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80',
    highlights: ['Strategic Consulting', 'Social Milestones & Kwanjula', 'Technical Logistics', 'Vendor Alignment']
  },
  {
    id: 'div-4',
    number: '04',
    title: 'Facility Cleaning Services',
    shortDesc: 'Corporate, residential and hospitality cleaning solutions.',
    fullDesc: 'Commercial hygiene management, deep sanitization, post-construction cleanup, and pre/post-event venue restoration.',
    pageId: 'cleaning',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    highlights: ['Corporate Office Janitorial', 'Residential Deep Cleaning', 'Venue Pre/Post Cleaning', 'Rapid Turnaround']
  },
  {
    id: 'div-5',
    number: '05',
    title: 'Hospitality Business Consultancy',
    shortDesc: 'Startup development, menu engineering, SOPs, staffing audits and turnaround management.',
    fullDesc: 'Strategic advisory empowering hotel, lodge, and restaurant owners to operate smarter, serve better and profit bigger.',
    pageId: 'consultancy',
    image: '/images/hospitality.jfif',
    highlights: ['Startup Blueprinting', 'Menu Costing & Design', 'Staff Audits & SOPs', 'Business Turnarounds']
  }
];

export const OPERATIONS_MATRIX: MatrixRow[] = [
  {
    division: 'Culinary School',
    targetAudience: 'Students, Chefs, Domestic Staff',
    strategicDeliverable: 'Certified skills, food safety, waste reduction',
    details: 'Institutional curriculum covering hot kitchen, pastry, food chemistry, kitchen safety, and modern waste management protocols.'
  },
  {
    division: 'Catering & Private Chefs',
    targetAudience: 'Corporates, Estates, High-Net-Worth Clients',
    strategicDeliverable: 'Bespoke menus, live dining, event scale',
    details: 'Tailored culinary experiences from executive galas to private residence chefs operating under strict confidentiality and culinary rigor.'
  },
  {
    division: 'Event Management',
    targetAudience: 'Corporate Brands, Families',
    strategicDeliverable: 'Turnkey production, logistics, protocol',
    details: 'Comprehensive event engineering including staging, lighting, ushering, diplomatic protocol, and third-party supplier alignment.'
  },
  {
    division: 'Facility Cleaning',
    targetAudience: 'Offices, Venues, Property Owners',
    strategicDeliverable: 'Commercial hygiene, rapid turnaround',
    details: 'Hospitality-grade sanitization for commercial HQs, embassies, residential estates, and post-event hall restorations.'
  },
  {
    division: 'Hospitality Consultancy',
    targetAudience: 'Investors, Hotel & Lodge Owners',
    strategicDeliverable: 'SOPs, menu optimization, turnaround',
    details: 'End-to-end business architecture from architectural floorplan advisory and menu yield optimization to mystery audits and turnaround strategy.'
  }
];

export const TRAINING_COURSES: TrainingCourse[] = [
  {
    id: 'course-1',
    title: 'Professional Culinary Arts',
    category: 'Culinary Mastery',
    badge: 'Flagship Program',
    description: 'An intensive hands-on program preparing aspiring chefs for high-end hotel, resort, and commercial kitchens.',
    modules: [
      'International & Continental Cuisines',
      'Menu Formulation & Food Costing',
      'Precision Knife Skills & Butchery',
      'Food Chemistry & Flavor Profiling',
      'Commercial Kitchen Management & HACCP'
    ]
  },
  {
    id: 'course-2',
    title: 'Professional Confectionery & Baking',
    category: 'Baking & Pastry',
    badge: 'Career Focused',
    description: 'Master the chemistry and art of commercial baking, artisan breads, fine pastry creation, and luxury cake engineering.',
    modules: [
      'Commercial Baking Principles',
      'Fine Pastry & Viennoisserie Arts',
      'Dough Development & Fermentation',
      'Architectural Cake Engineering',
      'Plated Dessert Decoration & Glazes'
    ]
  },
  {
    id: 'course-3',
    title: 'Home Staff Management Certification',
    category: 'Estate Management',
    badge: 'Specialized',
    description: 'Designed for domestic workers, housekeepers, and private estate personnel to elevate service standards to diplomatic levels.',
    modules: [
      'Professional Butlering & Table Etiquette',
      'High-Level Housekeeping Standards',
      'Guest Reception & Diplomatic Protocol',
      'Inventory & Estate Organization',
      'Privacy & Confidentiality Guidelines'
    ]
  },
  {
    id: 'course-4',
    title: 'Domestic Science Core Modules',
    category: 'Home Hygiene & Nutrition',
    description: 'Comprehensive practical training covering essential domestic science skills for residential management.',
    modules: [
      'Kitchen Sanitation & Food Safety',
      'Family Nutrition & Balanced Meal Planning',
      'Hygienic Food Handling & Storage',
      'Professional Laundering & Fabric Care',
      'Deep Home Hygiene Protocols'
    ]
  },
  {
    id: 'course-5',
    title: 'Modern Waste Management',
    category: 'Sustainability',
    badge: 'Eco Certificate',
    description: 'Specialized institutional module teaching commercial and residential waste reduction and environmental compliance.',
    modules: [
      'Organic Waste Separation & Composting',
      'Source Sorting & Materials Recovery',
      'Recycling Logistics & Commercial Reuse',
      'Sanitation & Pest Control Prevention'
    ]
  }
];

export const CATERING_SERVICES: CateringService[] = [
  {
    id: 'cat-1',
    title: 'Corporate Event Catering',
    subtitle: 'AGMs, Brand Launches, Executive Retreats & Gala Dinners',
    description: 'Tailored corporate dining experiences designed to reflect your organization’s prestige. We manage high-volume plated banquets, executive buffets, and diplomatic coffee breaks with precision timing.',
    features: ['AGM & Gala Banquet Operations', 'Executive Boardroom Luncheons', 'High-Volume Plated Dinners', 'Custom Dietary & Halal Options'],
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cat-2',
    title: 'Private On-Call Chefs',
    subtitle: 'Exquisite Culinary Services Deployed to Private Residences',
    description: 'Discreet, highly trained chefs stationed directly in private estates for multi-course dinner parties, weekend family gatherings, or ongoing private residence service.',
    features: ['Bespoke Multi-Course Tasting Menus', 'Complete Kitchen Setup & Cleanup', 'VIP & Diplomatic Privacy', 'Fresh Market Ingredient Sourcing'],
    image: '/images/private.jfif'
  },
  {
    id: 'cat-3',
    title: 'Domestic & Family Meal Prep',
    subtitle: 'Scheduled Healthy Professional Home Cooking',
    description: 'Custom weekly or monthly meal preparation schedules crafted to meet health requirements, dietary preferences, and busy family lifestyles.',
    features: ['Custom Family Dietary Profiles', 'Portioned Portion-Control Packaging', 'Hygiene-Sealed Refrigerated Prep', 'Weekly Menu Rotations'],
    image: '/images/domestic.jfif'
  },
  {
    id: 'cat-4',
    title: 'Bespoke Live Cooking',
    subtitle: 'Interactive Live Food Stations & Chef Showcases',
    description: 'Elevate your gathering with interactive cooking stations including live teppanyaki, wood-fired carving, artisanal pasta bars, and gourmet dessert theaters.',
    features: ['Live Culinary Theatrics', 'Interactive Chef Interactions', 'Custom Grill & Carving Stations', 'Fresh Flambé & Dessert Stations'],
    image: '/images/livecooking.jfif'
  }
];

export const CONSULTANCY_AREAS: ConsultancyArea[] = [
  {
    number: '01',
    title: 'Startup Blueprinting & Launch',
    subtitle: 'Hotels, Eco-Lodges, Boutique Resorts & Restaurants',
    description: 'We turn hospitality concepts into commercially viable operations. From floorplan layout to pre-opening staff recruitment and regulatory compliance.',
    features: [
      'Kitchen Floor Plans & Ergonomic Workflow Design',
      'Pre-Opening Operational Timelines',
      'Licensing & Health Compliance Setup',
      'Corporate Governance & Business Structuring'
    ]
  },
  {
    number: '02',
    title: 'Menu Engineering & Concept Design',
    subtitle: 'High-Yield Menus & Commercial Viability',
    description: 'A scientifically structured approach to menu creation that optimizes ingredient cross-utilization, controls food cost, and maximizes net profitability.',
    features: [
      'Comprehensive Food Costing & Portion Control',
      'Recipe Standardization & Portion Matrix',
      'High-Yield High-Margin Menu Architecture',
      'Seasonal Local Ingredient Integration'
    ]
  },
  {
    number: '03',
    title: 'Staffing & Operational Audits',
    subtitle: 'SOP Development & Quality Assurance',
    description: 'Standard Operating Procedures (SOPs) are the backbone of service quality. We conduct comprehensive audits and retrain front-of-house and kitchen teams.',
    features: [
      'Custom Standard Operating Procedures (SOPs)',
      'Mystery Shopping & Guest Experience Audits',
      'Staff Competency Evaluations',
      'On-Site Team Retraining & Service Refinement'
    ]
  },
  {
    number: '04',
    title: 'Turnaround Management',
    subtitle: 'Restructuring Struggling Hospitality Operations',
    description: 'In-depth diagnostic analysis for underperforming restaurants, hotels, and lodges to eliminate operational leakage, re-align management, and restore profit margins.',
    features: [
      'Operational & Financial Inefficiency Audits',
      'Waste Reduction & Cost Leakage Containment',
      'Leadership & Management Realignment',
      'Brand & Service Positioning Revival'
    ]
  }
];

export const CEO_PROFILE = {
  fullName: "Chef Yiga Edward Peter Kirigwajjo Zimwanguyizza Mulindwa",
  knownAs: "Chef Peter",
  title: "Consultant Chef | Founder & CEO, D'E Chosen Events Consultants Limited",
  professionalBranding: "Consultant Chef, Writer, Recipe Innovator & Menu Developer",
  education: "Hotel Management and Institutional Catering Graduate",
  definingVirtues: ["Excellence", "Punctuality", "Integrity"],
  heroSubtitle: "Consultant Chef, Writer, Recipe Innovator, Menu Developer, Author & Founder of D'E Chosen Events Consultants",
  
  // Image Placeholder
  portraitPlaceholderUrl: "https://placehold.co/900x1100?text=Chef+Peter",
  portraitUnsplashUrl: "/images/Uncle Eddy.jpeg",

  // 📚 Published Books Authored by Chef Peter
  publishedBooks: [
    {
      title: "Secret of a Successful Baker",
      category: "Baking & Commercial Pastry",
      description: "An authoritative guide to baking mechanics, commercial yeast science, oven temperature chemistry, and profitable bakery operations."
    },
    {
      title: "Inter-Continental Recipe Book",
      category: "Global Culinary Arts",
      description: "A comprehensive culinary compilation featuring multi-cultural fine dining recipes, fusion flavor engineering, and executive banquet menus."
    },
    {
      title: "In 1000 Ways and More I Cooked",
      category: "Culinary Anthology & Methods",
      description: "An inspiring culinary masterpiece exploring versatile cooking techniques, secret sauce reductions, and creative food presentation."
    }
  ],

  // 🍳 Culinary Specialties
  culinarySpecialties: [
    "Mongolian Dinner Specialist",
    "Shabati Cuisine Specialist",
    "Passionate Master Baker",
    "Recipe Innovator & Menu Developer",
    "Hospitality Business Consultant",
    "Executive VIP Private Chef"
  ],

  // 🏢 Prestigious Institutions & Key Work Experience
  prestigiousExperience: [
    "UN Base (United Nations Logistics & Delegations)",
    "Newrest Uganda In-Flights (Aviation Catering)",
    "Imperial Group of Hotels",
    "Speke Group of Hotels",
    "Green Castle International (Bosaso, Puntland)",
    "DP World (Bosaso, Puntland)",
    "Calm Waters Ecolodge Entebbe"
  ],

  // 🌍 International Private Family Training Countries
  privateTrainingNations: [
    { country: "Uganda", detail: "Private VIP families & commercial kitchen teams" },
    { country: "Congo", detail: "Resort eco-lodge kitchens & private family chef training" },
    { country: "Kenya", detail: "Executive private dining & hospitality mentorship" },
    { country: "South Sudan", detail: "Private family chef training & banquet logistics" },
    { country: "UAE (Dubai)", detail: "High-volume fine dining & private diplomatic residences" },
    { country: "Cameroon", detail: "Private family culinary instruction & menu development" }
  ],
  
  globalJourney: [
    { country: "Uganda", detail: "Hotel Management & Institutional Catering academic foundation & culinary mastery" },
    { country: "UAE & Dubai", detail: "High-volume luxury hotels, private VIP chef services & fine dining" },
    { country: "Congo", detail: "Resort lodge management & private family culinary training" },
    { country: "Somalia & Puntland", detail: "Green Castle International & DP World Bosaso, diplomatic UN Base operations" },
    { country: "Regional Footprint", detail: "Training private families & teams in Kenya, South Sudan & Cameroon" },
    { country: "Uganda (D'E Chosen)", detail: "Headquartered in Mpala, Entebbe Road as Lead Consultant Chef" }
  ],

  vipDetails: {
    clientCategories: [
      "Foreign Ambassadors & Diplomatic Missions",
      "UN Base Delegations & International Officers",
      "Government Ministers & Cabinet Officials",
      "Prominent Medical Specialists & Private VIP Families"
    ],
    institutionalExperience: [
      "UN Base",
      "Newrest Uganda In-Flights",
      "Imperial Group of Hotels",
      "Speke Group of Hotels",
      "Green Castle International (Bosaso, Puntland)",
      "DP World (Bosaso, Puntland)",
      "Calm Waters Ecolodge Entebbe"
    ],
    privateChefAttributes: [
      "Absolute Discretion & Diplomatic Confidentiality",
      "Excellence, Punctuality & Moral Integrity",
      "Custom Menu Innovation & Recipe Development",
      "Executive Table Etiquette & Banqueting Precision"
    ]
  },

  entrepreneurship: {
    locations: ["Kampala", "Entebbe", "Regional & International"],
    services: [
      "Hospitality Business Consulting & Audits",
      "Recipe Innovation & Menu Development",
      "Staff Competency & Service Retraining",
      "Private Family & VIP Chef Mentorship"
    ]
  },

  quote: "Hospitality is defined by Excellence, Punctuality, and Integrity. Whether crafting a Mongolian feast, baking with precision, or structuring a hotel's operations, true culinary art leaves people feeling valued, nourished, and inspired.",

  /* 📖 CHEF PETER'S FULL BIOGRAPHY STORY:
   * Edit or expand Chef Peter's complete personal biography chapters below.
   */
  fullBiography: {
    introduction: "Chef Yiga Edward Peter Kirigwajjo Zimwanguyizza Mulindwa — known professionally as Chef Peter — is a distinguished Consultant Chef, Hotel Management and Institutional Catering graduate, author, recipe innovator, menu developer, and Founder & CEO of D'E CHOSEN EVENTS CONSULTANTS LIMITED. Built on the core pillars of Excellence, Punctuality, and Integrity, Chef Peter's career spans decades of high-stakes international culinary operations, diplomatic catering, aviation in-flight services, published books, and private family mentorship across Africa and the Middle East.",
    
    chapters: [
      {
        chapterNumber: "01",
        title: "Hotel Management & Institutional Catering Academic Excellence",
        content: "A graduate in Hotel Management and Institutional Catering, Chef Peter combined formal institutional catering discipline with a passionate calling for the culinary arts. Understanding that successful hospitality requires both artistic flare and operational structure, he mastered commercial baking, knife mechanics, sauce reductions, and menu formulation. His academic background in hotel management continues to inform his structured approach to hospitality business consultancy, staff retraining, and food cost engineering."
      },
      {
        chapterNumber: "02",
        title: "Prestigious Institutional & Corporate Hospitality Appointments",
        content: "Chef Peter's professional trajectory includes prestigious appointments with top-tier international and regional hospitality icons. He served with the UN Base managing diplomatic culinary operations, Newrest Uganda In-Flights executing high-precision aviation catering, Imperial Group of Hotels, and Speke Group of Hotels. His leadership extended to Bosaso, Puntland where he directed culinary operations for Green Castle International and DP World, establishing world-class kitchen standards in challenging environments."
      },
      {
        chapterNumber: "03",
        title: "Master Baker, Mongolian Dinner & Shabati Specialist",
        content: "Recognized as a passionate master baker, recipe innovator, and versatile culinary craftsman, Chef Peter specializes in complex international food styles, including authentic Mongolian dinner experiences and Shabati cuisine mastery. His deep research into baking mechanics led him to author published books that guide culinary students and commercial bakeries across the region."
      },
      {
        chapterNumber: "04",
        title: "International Private Family Mentorship Across 6 Nations",
        content: "Renowned for his discretion, warmth, and teaching ability, Chef Peter has personally taught and trained private individuals and VIP families across Uganda, Congo, Kenya, South Sudan, UAE (Dubai), and Cameroon. He empowers private chefs and household teams with executive table etiquette, food safety, and custom family nutrition."
      },
      {
        chapterNumber: "05",
        title: "Published Author, Recipe Innovator & Menu Developer",
        content: "As a published writer, recipe innovator, and menu developer, Chef Peter has authored three influential culinary books: 'Secret of a Successful Baker', 'Inter-Continental Recipe Book', and 'In 1000 Ways and More I Cooked'. Through these literary works, he shares time-tested recipes, baking secrets, and menu development strategies with chefs, entrepreneurs, and food enthusiasts globally."
      },
      {
        chapterNumber: "06",
        title: "Lead Consultant Chef at D'E Chosen Events Consultants",
        content: "Branding himself as a Consultant Chef, Chef Peter established D'E CHOSEN EVENTS CONSULTANTS LIMITED, headquartered in Mpala on Entebbe Road, Uganda. Uniting five divisions — Culinary School, Event Catering, Event Management, Facility Cleaning, and Hospitality Business Consultancy — he helps hotels, restaurants, lodges, and private clients operate smarter, serve better, and maximize profitability."
      }
    ],

    coreValues: [
      { title: "Excellence", description: "Uncompromising precision in every dish prepared, menu engineered, and event executed." },
      { title: "Punctuality", description: "Strict adherence to timing across high-volume aviation, UN delegation, and VIP event operations." },
      { title: "Integrity & Discretion", description: "Absolute confidentiality, moral ethics, and trustworthiness in private residences and diplomatic missions." },
      { title: "Continuous Innovation", description: "Pioneering new recipe formulations, authoring books, and elevating baking and culinary standards." }
    ]
  },

  missionPillars: [
    {
      title: "TRAIN",
      summary: "Develop industry-ready culinary and hospitality professionals capable of competing globally."
    },
    {
      title: "SERVE",
      summary: "Deliver premium culinary, event production, and facility sanitization services with zero compromise."
    },
    {
      title: "TRANSFORM",
      summary: "Empower hospitality enterprises to operate smarter, build robust structures, and maximize profitability."
    }
  ]
};

export const TESTIMONIALS_PLACEHOLDERS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'CLIENT TESTIMONIAL PLACEHOLDER',
    role: 'Corporate Communications Director',
    company: 'International Diplomatic Mission',
    comment: 'D\'E Chosen handled our diplomatic gala dinner flawlessly. The culinary presentation and server etiquette set a standard of corporate sophistication we had not experienced locally before.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'test-2',
    name: 'CLIENT TESTIMONIAL PLACEHOLDER',
    role: 'Boutique Lodge Investor',
    company: 'Entebbe Hospitality Group',
    comment: 'Chef Peter and his consultancy team restructured our kitchen workflow and menu pricing. Within 90 days, our food cost dropped by 18% while guest satisfaction ratings reached record highs.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'test-3',
    name: 'CLIENT TESTIMONIAL PLACEHOLDER',
    role: 'Graduate Student',
    company: 'Dechosen Culinary School Alumna',
    comment: 'The Professional Culinary Arts program gave me real practical confidence. The kitchen discipline, food chemistry lessons, and waste management modules prepared me directly for my current Sous Chef role.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Culinary Masterclass in Session',
    category: 'Culinary Training',
    imageUrl: '/images/culinaryschool.jfif',
    caption: 'Students practicing precision knife work and sauce reduction in Dechosen Culinary School kitchen.'
  },
  {
    id: 'gal-2',
    title: 'Corporate Gala Plated Service',
    category: 'Catering',
    imageUrl: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80',
    caption: 'Fine dining banquet prepared for executive guests and international diplomats.'
  },
  {
    id: 'gal-3',
    title: 'Luxury Event Staging & Setup',
    category: 'Events',
    imageUrl: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80',
    caption: 'Complete venue layout, floral styling, and lighting design for a high-profile reception.'
  },
  {
    id: 'gal-4',
    title: 'Chef Peter Executive Showcase',
    category: 'Chef Peter',
    imageUrl: '/images/chef.jfif',
    caption: 'Chef Peter curating a bespoke multi-course menu for private residence VIP guests.'
  },
  {
    id: 'gal-5',
    title: 'Corporate HQ Facility Sanitation',
    category: 'Cleaning',
    imageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    caption: 'Professional cleaning squad restoring commercial workspace to institutional standards.'
  },
  {
    id: 'gal-6',
    title: 'Hospitality Operations Audit',
    category: 'Hospitality Consultancy',
    imageUrl: '/images/hospitality.jfif',
    caption: 'Chef Peter consulting with lodge management on menu engineering and kitchen SOPs.'
  }
];
