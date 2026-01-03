import type { Metadata } from 'next';
import { generatePageMetadata, generateBreadcrumbSchema, siteConfig } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Nos Réalisations | Projets Signalisation Savoie',
  description: 'Découvrez nos réalisations en marquage au sol, signalisation routière et mobilier urbain en Savoie et Haute-Savoie. Photos de projets terminés.',
  path: '/realisations',
  keywords: [
    'réalisations marquage',
    'projets signalisation',
    'photos chantier',
    'exemples marquage sol',
    'travaux signalisation',
    'portfolio',
    'Savoie',
    'Haute-Savoie',
  ],
});

// Structured data for gallery page
const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'Réalisations GL Marquage',
    description: 'Galerie de nos projets de marquage au sol, signalisation et mobilier urbain en Savoie et Rhône-Alpes',
    url: `${siteConfig.url}/realisations`,
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.name,
    },
  },
  generateBreadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: 'Réalisations', url: '/realisations' },
  ]),
];

export default function RealisationsLayout({
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
