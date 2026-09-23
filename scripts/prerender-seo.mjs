import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const siteUrl = 'https://www.dechosenevents.com';
const pages = [
  {
    path: '/culinary-school',
    title: "Culinary School & Catering Courses Uganda | D'E Chosen",
    description: 'Practical culinary arts, baking, domestic science, food safety and hospitality training at Dechosen Culinary School in Uganda.',
    image: '/images/culinaryschool.jfif',
  },
  {
    path: '/catering-services',
    title: "Professional Catering Services in Uganda | D'E Chosen",
    description: 'Professional catering for weddings, corporate functions, conferences, private dining and special occasions in Kampala, Entebbe and across Uganda.',
    image: '/images/livecooking.jfif',
  },
  {
    path: '/event-management',
    title: "Event Management Company in Uganda | D'E Chosen",
    description: 'Event planning and management for weddings, Kwanjula ceremonies, corporate events, conferences and private celebrations across Uganda.',
    image: '/images/private.jfif',
  },
  {
    path: '/facility-cleaning',
    title: "Professional Facility Cleaning Uganda | D'E Chosen",
    description: 'Corporate, residential, post-construction and event venue cleaning services delivered to professional hospitality standards in Uganda.',
    image: '/images/domestic.jfif',
  },
  {
    path: '/hospitality-consultancy',
    title: "Hospitality Consultancy in Uganda | D'E Chosen",
    description: 'Hospitality consultancy for hotels, restaurants and lodges, including menu engineering, operational systems, staff training and business improvement.',
    image: '/images/hospitality.jfif',
  },
  {
    path: '/chef-peter-the-teacher',
    title: "Chef Peter the Teacher | Founder of D'E Chosen",
    description: "Meet Chef Peter the Teacher, consultant chef, culinary trainer and founder of D'E Chosen Events Consultants Limited in Uganda.",
    image: '/images/Uncle Eddy.jpeg',
  },
  {
    path: '/contact',
    title: "Contact D'E Chosen Events Consultants Uganda",
    description: "Contact D'E Chosen for catering, event management, culinary training, cleaning and hospitality consultancy services in Uganda.",
    image: '/logo.png',
  },
];

const escapeAttribute = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;');
const template = await readFile(resolve('dist/index.html'), 'utf8');

for (const page of pages) {
  const canonical = `${siteUrl}${page.path}`;
  const image = `${siteUrl}${page.image}`;
  let html = template
    .replace(/<title>.*?<\/title>/, `<title>${page.title}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${escapeAttribute(page.description)}" />`)
    .replace(/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${canonical}" />`)
    .replace(/<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${escapeAttribute(page.title)}" />`)
    .replace(/<meta property="og:description" content="[^"]*"\s*\/>/, `<meta property="og:description" content="${escapeAttribute(page.description)}" />`)
    .replace(/<meta property="og:image" content="[^"]*"\s*\/>/, `<meta property="og:image" content="${image}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*"\s*\/>/, `<meta name="twitter:title" content="${escapeAttribute(page.title)}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*"\s*\/>/, `<meta name="twitter:description" content="${escapeAttribute(page.description)}" />`)
    .replace(/<meta name="twitter:image" content="[^"]*"\s*\/>/, `<meta name="twitter:image" content="${image}" />`);

  const destination = resolve(`dist${page.path}.html`);
  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, html);
}

console.log(`Generated ${pages.length} SEO route entries.`);
