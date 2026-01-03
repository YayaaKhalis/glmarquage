import type { Metadata } from 'next';
import { generatePageMetadata, generateBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Mentions Légales | GL Marquage',
  description: 'Mentions légales du site GL Marquage. Informations sur l\'entreprise, politique de confidentialité et conditions d\'utilisation.',
  path: '/mentions-legales',
  keywords: ['mentions légales', 'conditions utilisation', 'politique confidentialité'],
});

const structuredData = generateBreadcrumbSchema([
  { name: 'Accueil', url: '/' },
  { name: 'Mentions Légales', url: '/mentions-legales' },
]);

export default function MentionsLegalesLayout({
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
