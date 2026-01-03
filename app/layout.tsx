import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AOSProvider from "@/components/AOSProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteConfig = {
  name: "GL Marquage",
  url: "https://glmarquage.fr",
  description: "Expert en marquage au sol, signalisation routière et mobilier urbain en Savoie, Haute-Savoie, Ain, Isère et Genève. 15+ ans d'expérience. Devis gratuit sous 24h.",
  phone: "06 98 74 11 99",
  email: "glmarquage@gmail.com",
  siret: "937 558 476 00019",
  address: {
    region: "Auvergne-Rhône-Alpes",
    country: "France",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "GL Marquage | Expert Signalisation Routière & Marquage au Sol | Savoie",
    template: "%s | GL Marquage",
  },
  description: siteConfig.description,
  keywords: [
    "marquage au sol",
    "signalisation routière",
    "mobilier urbain",
    "marquage parking",
    "signalisation horizontale",
    "signalisation verticale",
    "peinture routière",
    "passage piéton",
    "Savoie",
    "Haute-Savoie",
    "Chambéry",
    "Annecy",
    "Grenoble",
    "Genève",
    "Rhône-Alpes",
    "panneaux signalisation",
    "potelets",
    "barrières ville",
    "marquage industriel",
    "marquage voirie",
  ],
  authors: [{ name: "GL Marquage", url: siteConfig.url }],
  creator: "GL Marquage",
  publisher: "GL Marquage",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
    languages: {
      "fr-FR": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "GL Marquage | Expert Signalisation Routière & Marquage au Sol",
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GL Marquage - Expert en signalisation routière et marquage au sol en Savoie",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GL Marquage | Expert Signalisation Routière",
    description: siteConfig.description,
    images: ["/og-image.jpg"],
    creator: "@glmarquage",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  category: "business",
  classification: "Signalisation routière, Marquage au sol, Mobilier urbain",
};

// Schema.org Structured Data - LocalBusiness
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      alternateName: "GL Marquage Savoie",
      description: siteConfig.description,
      url: siteConfig.url,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
        width: 180,
        height: 60,
      },
      image: `${siteConfig.url}/og-image.jpg`,
      priceRange: "€€",
      currenciesAccepted: "EUR, CHF",
      paymentAccepted: "Cash, Credit Card, Bank Transfer",
      areaServed: [
        {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: 45.5646,
            longitude: 5.9178,
          },
          geoRadius: "100000",
        },
        { "@type": "AdministrativeArea", name: "Savoie" },
        { "@type": "AdministrativeArea", name: "Haute-Savoie" },
        { "@type": "AdministrativeArea", name: "Ain" },
        { "@type": "AdministrativeArea", name: "Isère" },
        { "@type": "AdministrativeArea", name: "Canton de Genève" },
      ],
      address: {
        "@type": "PostalAddress",
        addressRegion: siteConfig.address.region,
        addressCountry: siteConfig.address.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 45.5646,
        longitude: 5.9178,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
      ],
      sameAs: ["https://instagram.com/glmarquage"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services de signalisation",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Signalisation Horizontale",
              description: "Marquage au sol, lignes routières, passages piétons, parkings",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Signalisation Verticale",
              description: "Panneaux de signalisation, totems, potelets",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Mobilier Urbain",
              description: "Poubelles, bancs publics, barrières, arceaux vélos",
            },
          },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "47",
        bestRating: "5",
        worstRating: "1",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      publisher: { "@id": `${siteConfig.url}/#organization` },
      inLanguage: "fr-FR",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteConfig.url}/recherche?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/#webpage`,
      url: siteConfig.url,
      name: "GL Marquage - Expert Signalisation Routière",
      isPartOf: { "@id": `${siteConfig.url}/#website` },
      about: { "@id": `${siteConfig.url}/#organization` },
      description: siteConfig.description,
      inLanguage: "fr-FR",
      datePublished: "2024-01-01T00:00:00+01:00",
      dateModified: new Date().toISOString(),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AOSProvider>
          {children}
        </AOSProvider>
      </body>
    </html>
  );
}
