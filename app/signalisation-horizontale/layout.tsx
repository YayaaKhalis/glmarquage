import type { Metadata } from 'next';
import { generatePageMetadata, generateServiceSchema, generateBreadcrumbSchema, siteConfig } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Signalisation Horizontale | Marquage au Sol Savoie',
  description: 'Expert en marquage au sol en Savoie et Haute-Savoie. Marquage parking, voirie, industriel, passages piétons. Peinture routière certifiée NF EN 1436. Devis gratuit sous 24h.',
  path: '/signalisation-horizontale',
  keywords: [
    'marquage au sol',
    'marquage parking',
    'peinture routière',
    'passage piéton',
    'marquage voirie',
    'marquage industriel',
    'signalisation horizontale',
    'NF EN 1436',
    'Chambéry',
    'Annecy',
    'places PMR',
    'lignes de stationnement',
  ],
});

// Structured data for this service page
const structuredData = [
  generateServiceSchema({
    serviceName: 'Signalisation Horizontale - Marquage au Sol',
    serviceDescription: 'Marquage au sol professionnel : parkings, voirie, zones industrielles, passages piétons. Peintures certifiées NF, intervention en Savoie et Rhône-Alpes.',
    serviceUrl: `${siteConfig.url}/signalisation-horizontale`,
  }),
  generateBreadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: 'Signalisation Horizontale', url: '/signalisation-horizontale' },
  ]),
];

export default function SignalisationHorizontaleLayout({
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
