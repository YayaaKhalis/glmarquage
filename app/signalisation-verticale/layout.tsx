import type { Metadata } from 'next';
import { generatePageMetadata, generateServiceSchema, generateBreadcrumbSchema, siteConfig } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Signalisation Verticale | Panneaux Routiers Savoie',
  description: 'Installation de panneaux de signalisation, totems, potelets en Savoie et Haute-Savoie. Signalisation routière conforme au code de la route. Devis gratuit sous 24h.',
  path: '/signalisation-verticale',
  keywords: [
    'panneaux signalisation',
    'signalisation verticale',
    'totems de ville',
    'potelets',
    'panneaux routiers',
    'signalisation routière',
    'panneaux direction',
    'pose panneaux',
    'Chambéry',
    'Annecy',
    'signalétique urbaine',
  ],
});

// Structured data for this service page
const structuredData = [
  generateServiceSchema({
    serviceName: 'Signalisation Verticale - Panneaux et Totems',
    serviceDescription: 'Installation de panneaux de signalisation routière, totems de ville, potelets. Conformité code de la route, intervention en Savoie et Rhône-Alpes.',
    serviceUrl: `${siteConfig.url}/signalisation-verticale`,
  }),
  generateBreadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: 'Signalisation Verticale', url: '/signalisation-verticale' },
  ]),
];

export default function SignalisationVerticaleLayout({
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
