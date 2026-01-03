import type { Metadata } from 'next';
import { generatePageMetadata, generateBreadcrumbSchema, siteConfig } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact | Devis Gratuit Signalisation Savoie',
  description: 'Contactez GL Marquage pour un devis gratuit sous 24h. Expert en marquage au sol et signalisation en Savoie, Haute-Savoie, Ain, Isère. Tél: 06 98 74 11 99.',
  path: '/contact',
  keywords: [
    'contact GL Marquage',
    'devis marquage sol',
    'devis signalisation',
    'demande devis',
    'contact Savoie',
    'devis gratuit',
    'signalisation Chambéry',
    'marquage Annecy',
  ],
});

// Structured data for contact page
const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact GL Marquage',
    description: 'Page de contact pour demandes de devis en signalisation et marquage',
    url: `${siteConfig.url}/contact`,
    mainEntity: {
      '@type': 'LocalBusiness',
      name: siteConfig.name,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      url: siteConfig.url,
      areaServed: ['Savoie', 'Haute-Savoie', 'Ain', 'Isère', 'Genève'],
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    },
  },
  generateBreadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: 'Contact', url: '/contact' },
  ]),
];

export default function ContactLayout({
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
