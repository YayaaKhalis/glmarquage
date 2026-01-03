import type { Metadata } from 'next';

const baseUrl = 'https://glmarquage.fr';

// Shared metadata configuration for SEO
export const siteConfig = {
  name: 'GL Marquage',
  url: baseUrl,
  phone: '06 98 74 11 99',
  email: 'glmarquage@gmail.com',
  siret: '937 558 476 00019',
};

// Helper to generate page metadata
export function generatePageMetadata({
  title,
  description,
  path = '',
  image = '/og-image.jpg',
  keywords = [],
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
}): Metadata {
  const url = `${baseUrl}${path}`;
  
  return {
    title,
    description,
    keywords: [
      'GL Marquage',
      'signalisation',
      'Savoie',
      'Rhône-Alpes',
      ...keywords,
    ],
    alternates: {
      canonical: path || '/',
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: 'fr_FR',
      type: 'website',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

// Service page structured data
export function generateServiceSchema({
  serviceName,
  serviceDescription,
  serviceUrl,
}: {
  serviceName: string;
  serviceDescription: string;
  serviceUrl: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: serviceDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.name,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      url: siteConfig.url,
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Savoie' },
      { '@type': 'AdministrativeArea', name: 'Haute-Savoie' },
      { '@type': 'AdministrativeArea', name: 'Ain' },
      { '@type': 'AdministrativeArea', name: 'Isère' },
      { '@type': 'AdministrativeArea', name: 'Canton de Genève' },
    ],
    url: serviceUrl,
  };
}

// Breadcrumb structured data
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  };
}
