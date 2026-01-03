import type { Metadata } from 'next';
import { generatePageMetadata, generateServiceSchema, generateBreadcrumbSchema, siteConfig } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Mobilier Urbain | Bancs, Poubelles, Potelets Savoie',
  description: 'Fourniture et installation de mobilier urbain en Savoie : bancs publics, poubelles, potelets, abris-bus, arceaux vélos. Matériaux durables. Devis gratuit sous 24h.',
  path: '/mobilier-urbain',
  keywords: [
    'mobilier urbain',
    'bancs publics',
    'poubelles ville',
    'potelets urbains',
    'arceaux vélos',
    'abris bus',
    'aménagement urbain',
    'collectivités',
    'Chambéry',
    'Annecy',
    'corbeilles propreté',
  ],
});

// Structured data for this service page
const structuredData = [
  generateServiceSchema({
    serviceName: 'Mobilier Urbain - Aménagement Espaces Publics',
    serviceDescription: 'Fourniture et installation de mobilier urbain : bancs, poubelles, potelets, abris, arceaux vélos. Matériaux durables, intervention en Savoie et Rhône-Alpes.',
    serviceUrl: `${siteConfig.url}/mobilier-urbain`,
  }),
  generateBreadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: 'Mobilier Urbain', url: '/mobilier-urbain' },
  ]),
];

export default function MobilierUrbainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {children}
    </>
  );
}
