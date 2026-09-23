import { useEffect } from 'react';
import { PageId } from '../types';
import { PAGE_PATHS, PAGE_SEO, SITE_URL } from '../seo';

const setMeta = (selector: string, attribute: 'name' | 'property', key: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
};

export function SeoManager({ page }: { page: PageId }) {
  useEffect(() => {
    const seo = PAGE_SEO[page];
    const path = PAGE_PATHS[page];
    const canonicalUrl = `${SITE_URL}${path === '/' ? '/' : path}`;
    const imageUrl = seo.image.startsWith('http') ? seo.image : `${SITE_URL}${seo.image}`;

    document.title = seo.title;
    setMeta('meta[name="description"]', 'name', 'description', seo.description);
    setMeta('meta[name="robots"]', 'name', 'robots', 'index, follow, max-image-preview:large');
    setMeta('meta[property="og:type"]', 'property', 'og:type', page === 'ceo' ? 'profile' : 'website');
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMeta('meta[property="og:title"]', 'property', 'og:title', seo.title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', seo.description);
    setMeta('meta[property="og:image"]', 'property', 'og:image', imageUrl);
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', seo.title);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', seo.description);
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', imageUrl);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    document.head.querySelectorAll('script[data-page-schema]').forEach((node) => node.remove());
    const schemas: object[] = [];

    if (page !== 'home') {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: seo.title.split('|')[0].trim(), item: canonicalUrl },
        ],
      });
    }

    if (seo.schemaType === 'Service') {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: seo.serviceType,
        serviceType: seo.serviceType,
        description: seo.description,
        url: canonicalUrl,
        areaServed: { '@type': 'Country', name: 'Uganda' },
        provider: {
          '@type': 'ProfessionalService',
          '@id': `${SITE_URL}/#organization`,
          name: "D'E Chosen Events Consultants Limited",
          url: `${SITE_URL}/`,
        },
      });
    }

    if (seo.schemaType === 'EducationalOrganization') {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'EducationalOrganization',
        name: 'Dechosen Culinary School',
        url: canonicalUrl,
        description: seo.description,
        parentOrganization: { '@id': `${SITE_URL}/#organization` },
      });
    }

    if (seo.schemaType === 'ProfilePage') {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        url: canonicalUrl,
        mainEntity: {
          '@type': 'Person',
          '@id': `${SITE_URL}/chef-peter-the-teacher#person`,
          name: 'Yiga Edward Peter Kirigwajjo Zimwanguyizza Mulindwa',
          alternateName: 'Chef Peter the Teacher',
          jobTitle: 'Founder, Consultant Chef and Culinary Trainer',
          image: imageUrl,
          worksFor: { '@id': `${SITE_URL}/#organization` },
          sameAs: [
            'https://www.chefpetertheteacher.com/',
            'https://www.linkedin.com/in/yiga-edward-peter-49b09b433/',
          ],
        },
      });
    }

    if (seo.schemaType === 'ContactPage') {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: seo.title,
        description: seo.description,
        url: canonicalUrl,
      });
    }

    if (schemas.length) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.pageSchema = 'true';
      script.text = JSON.stringify(schemas);
      document.head.appendChild(script);
    }
  }, [page]);

  return null;
}

