# GLMarquage - Project Documentation

## Project Overview

This is a modern Next.js application for GLMarquage, built with the latest web technologies including Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## Tech Stack

- **Framework**: Next.js 16.1.1 (App Router)
- **UI Library**: React 19.2.3
- **Language**: TypeScript 5+
- **Styling**: Tailwind CSS v4 (via PostCSS)
- **Fonts**: Geist Sans & Geist Mono
- **Linting**: ESLint 9
- **Package Manager**: npm

## Project Structure

```
glmarquage/
├── app/                    # Next.js App Router directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles with Tailwind directives
│   └── favicon.ico        # Site favicon
├── public/                # Static assets
├── .next/                 # Build output (generated)
├── node_modules/          # Dependencies (generated)
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── next.config.ts         # Next.js configuration
├── eslint.config.mjs      # ESLint configuration
├── postcss.config.mjs     # PostCSS configuration
└── CLAUDE.md             # This file
```

## Development Setup

### Prerequisites

- Node.js 20+
- npm

### Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# App runs at http://localhost:3000

# Build for production
npm run build

# Start production server
npm run start

# Run linter
npm run lint
```

## Code Conventions

### TypeScript

- **Strict Mode**: Enabled
- **Path Aliases**: Use `@/` for root imports (e.g., `import { Component } from '@/app/components'`)
- **Target**: ES2017
- **Module Resolution**: bundler

### React Components

- Use TypeScript with React 19
- Prefer function components with hooks
- Use the `app/` directory for routes (App Router)
- Server Components by default (add `'use client'` only when needed)

### Styling

- Use Tailwind CSS utility classes
- Tailwind v4 with PostCSS plugin
- Dark mode supported with `dark:` prefix
- Mobile-first responsive design with `sm:`, `md:`, `lg:`, `xl:` breakpoints
- Global styles in `app/globals.css`

### File Naming

- React components: `PascalCase.tsx` (e.g., `UserProfile.tsx`)
- Pages: `page.tsx` (Next.js convention)
- Layouts: `layout.tsx` (Next.js convention)
- Utilities: `camelCase.ts` (e.g., `formatDate.ts`)

## Next.js App Router Patterns

### Routing

- File-based routing in `app/` directory
- `page.tsx` for route endpoints
- `layout.tsx` for shared layouts
- `loading.tsx` for loading states
- `error.tsx` for error boundaries

### Server vs Client Components

- **Default**: Server Components (better performance)
- **Use `'use client'`** when you need:
  - Interactive event handlers (`onClick`, `onChange`, etc.)
  - React hooks (`useState`, `useEffect`, etc.)
  - Browser APIs

### Data Fetching

- Use async/await directly in Server Components
- Use React hooks for Client Components
- Leverage Next.js caching strategies

## Project-Specific Notes

### Current State

- Fresh Next.js installation (initialized with `create-next-app`)
- Clean slate with minimal boilerplate
- Ready for feature development

### Design System

- Uses Geist font family (Sans & Mono)
- Tailwind CSS v4 utility-first approach
- Dark mode ready

## Common Tasks

### Adding a New Page

1. Create `app/[route]/page.tsx`
2. Export default React component
3. Optionally add `layout.tsx` for route-specific layout

### Adding a New Component

1. Create component file in appropriate directory
2. Use TypeScript for type safety
3. Export component as default or named export

### Styling Components

1. Use Tailwind utility classes in className
2. For custom styles, extend in `globals.css` or use CSS modules
3. Follow mobile-first responsive design

### Adding Dependencies

```bash
npm install [package-name]
# For dev dependencies
npm install -D [package-name]
```

## Git Workflow

- Main branch: `main`
- Clean working directory
- Latest commit: Initial Next.js setup

## Tips for Claude

- This is a TypeScript-first project - always use TypeScript
- Prefer Server Components unless interactivity is needed
- Use Tailwind classes for styling
- Follow Next.js 16 best practices (App Router)
- Keep components simple and focused
- Use path aliases (`@/`) for cleaner imports

# 🚧 GL MARQUAGE - Brief de Projet Site Vitrine

## 📋 Présentation du Projet

### Contexte

**GL Marquage** est une entreprise spécialisée en **signalisation routière, marquage au sol et mobilier urbain** intervenant dans la région Auvergne-Rhône-Alpes et Suisse romande. Ce projet vise à créer un site vitrine moderne, professionnel et performant pour présenter leurs services et générer des leads qualifiés.

### Objectifs Business

- Présenter l'expertise de GL Marquage en signalisation et aménagement urbain
- Générer des demandes de devis qualifiées
- Renforcer la crédibilité et le professionnalisme de l'entreprise
- Améliorer la visibilité locale (SEO)

---

## 🎨 Identité Visuelle & Charte Graphique

### Couleurs Extraites du Logo

```css
:root {
  /* Couleurs Principales */
  --primary-black: #1a1a1a; /* Fond principal du logo */
  --primary-gold: #d4a32b; /* Jaune/Or - Bandeau "MARQUAGE" */
  --pure-white: #ffffff; /* Contour et lettres GL */

  /* Couleurs Secondaires */
  --dark-gray: #2d2d2d; /* Variations sombres */
  --medium-gray: #6b6b6b; /* Lignes de marquage route */
  --light-gray: #f5f5f5; /* Fonds clairs */

  /* Couleurs d'État */
  --gold-hover: #e5b93a; /* Hover boutons */
  --gold-active: #b8922b; /* Active/Click */
  --success-green: #28a745; /* Messages succès */
  --error-red: #dc3545; /* Messages erreur */

  /* Couleurs Route (décoratives) */
  --asphalt-black: #1e1e1e; /* Fond route */
  --road-marking-white: #e8e8e8; /* Lignes discontinues */
  --road-marking-gold: #c9a227; /* Lignes latérales */
}
```

### Codes Hexadécimaux Simplifiés

| Élément        | Couleur                                                  | Hex       | RGB                  |
| -------------- | -------------------------------------------------------- | --------- | -------------------- |
| Noir principal | ![#1A1A1A](https://via.placeholder.com/20/1A1A1A/1A1A1A) | `#1A1A1A` | `rgb(26, 26, 26)`    |
| Jaune/Or       | ![#D4A32B](https://via.placeholder.com/20/D4A32B/D4A32B) | `#D4A32B` | `rgb(212, 163, 43)`  |
| Blanc          | ![#FFFFFF](https://via.placeholder.com/20/FFFFFF/FFFFFF) | `#FFFFFF` | `rgb(255, 255, 255)` |
| Gris moyen     | ![#6B6B6B](https://via.placeholder.com/20/6B6B6B/6B6B6B) | `#6B6B6B` | `rgb(107, 107, 107)` |

### Utilisation des Couleurs

- **Noir (#1A1A1A)** : Headers, footer, textes principaux, sections hero sombres
- **Jaune/Or (#D4A32B)** : CTAs, boutons, accents, titres mis en valeur, éléments interactifs
- **Blanc (#FFFFFF)** : Fonds de section, textes sur fond sombre
- **Gris (#6B6B6B)** : Textes secondaires, bordures subtiles

### Typographie Recommandée

```css
/* Titres - Impact et modernité */
font-family: "Montserrat", "Inter", sans-serif;
font-weight: 700; /* Bold pour H1-H2 */
font-weight: 600; /* Semi-bold pour H3-H4 */

/* Corps de texte - Lisibilité */
font-family: "Inter", "Open Sans", sans-serif;
font-weight: 400; /* Regular */
line-height: 1.6;

/* Accents/CTA */
font-family: "Montserrat", sans-serif;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 0.5px;
```

---

## 🛠️ Stack Technique

### Technologies Obligatoires

```json
{
  "framework": "Next.js 14+",
  "styling": "Tailwind CSS 3.4+",
  "components": "shadcn/ui",
  "animations": "Framer Motion",
  "icons": "Lucide React",
  "forms": "React Hook Form + Zod",
  "deployment": "Vercel"
}
```

### Configuration Tailwind

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1A1A1A",
          dark: "#0D0D0D",
          light: "#2D2D2D",
        },
        accent: {
          DEFAULT: "#D4A32B",
          hover: "#E5B93A",
          active: "#B8922B",
          light: "#F5E6C4",
        },
        gray: {
          road: "#6B6B6B",
          light: "#F5F5F5",
          medium: "#9CA3AF",
        },
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "road-line": "roadLine 2s infinite linear",
      },
    },
  },
};
```

---

## 📄 Structure du Site

### Arborescence des Pages

```
/
├── page.tsx                    # Accueil
├── signalisation-horizontale/
│   └── page.tsx               # Page Signalisation Horizontale
├── signalisation-verticale/
│   └── page.tsx               # Page Signalisation Verticale
├── mobilier-urbain/
│   └── page.tsx               # Page Mobilier Urbain
├── realisations/
│   └── page.tsx               # Galerie des réalisations
├── contact/
│   └── page.tsx               # Formulaire de contact
└── mentions-legales/
    └── page.tsx               # Mentions légales
```

---

## 🏠 Page Accueil

### Hero Section

- **Background** : Image/vidéo de chantier de marquage ou animation stylisée de route
- **Titre principal** : "Spécialiste en Signalisation & Mobilier Urbain"
- **Sous-titre** : "Marquage au sol, signalisation verticale et aménagement urbain en Savoie et Rhône-Alpes"
- **CTAs** :
  - Principal : "Demander un devis" → `/contact`
  - Secondaire : "Nos réalisations" → `/realisations`

### Services Overview (3 cartes)

```typescript
const services = [
  {
    title: "Signalisation Horizontale",
    description: "Marquage parking, voirie, industriel et décoratif",
    icon: "Road",
    link: "/signalisation-horizontale",
    image: "/images/services/horizontale.jpg",
  },
  {
    title: "Signalisation Verticale",
    description: "Panneaux, totems et potelets de signalisation",
    icon: "SignpostBig",
    link: "/signalisation-verticale",
    image: "/images/services/verticale.jpg",
  },
  {
    title: "Mobilier Urbain",
    description: "Poubelles, bancs et potelets pour vos espaces",
    icon: "Building2",
    link: "/mobilier-urbain",
    image: "/images/services/mobilier.jpg",
  },
];
```

### Zone d'Intervention (Map)

```typescript
const zones = [
  { code: "73", name: "Savoie", primary: true },
  { code: "74", name: "Haute-Savoie", primary: true },
  { code: "01", name: "Ain", primary: false },
  { code: "38", name: "Isère", primary: false },
  { special: true, name: "Suisse - Secteur Genève", primary: false },
];
```

- Carte interactive SVG de la région Auvergne-Rhône-Alpes
- Highlight des départements d'intervention
- Mention spéciale pour la Suisse (Genève)

### Galerie Miniature

- Carousel responsive avec 6-8 images de réalisations
- Effet hover avec zoom et overlay
- Lien "Voir toutes nos réalisations"

### Section Confiance

- Compteurs animés : "X+ projets réalisés", "X ans d'expérience", "X% satisfaction"
- Logos certifications si existants
- Témoignages clients (slider)

### CTA Final

- Bandeau jaune avec "Vous avez un projet ? Contactez-nous pour un devis gratuit"
- Bouton "Demander un devis"

---

## 🛣️ Page Signalisation Horizontale

### Header de Page

- Titre : "Signalisation Horizontale"
- Sous-titre : "Marquage au sol professionnel pour tous vos besoins"
- Breadcrumb : Accueil > Signalisation Horizontale

### Services Détaillés

```typescript
const servicesHorizontale = [
  {
    id: "marquage-parking",
    title: "Marquage Parking",
    description:
      "Délimitation des places de stationnement, zones PMR, flèches directionnelles, passages piétons, zones de livraison.",
    details: [
      "Places de stationnement standard et PMR",
      "Zones de livraison et arrêt minute",
      "Numérotation des emplacements",
      "Marquage des voies de circulation",
      "Signalisation entrées/sorties",
    ],
    applications: [
      "Parkings publics",
      "Centres commerciaux",
      "Copropriétés",
      "Entreprises",
    ],
    image: "/images/horizontale/parking.jpg",
  },
  {
    id: "marquage-voirie",
    title: "Marquage Voirie",
    description:
      "Signalisation routière conforme aux normes en vigueur pour collectivités et aménageurs.",
    details: [
      "Lignes continues et discontinues",
      "Passages piétons réglementaires",
      "Cédez-le-passage et STOP",
      "Flèches directionnelles",
      "Zébras et îlots directionnels",
      "Pistes cyclables",
    ],
    applications: ["Communes", "Départements", "Aménageurs", "Promoteurs"],
    image: "/images/horizontale/voirie.jpg",
  },
  {
    id: "marquage-industriel",
    title: "Marquage Industriel",
    description:
      "Organisation et sécurisation de vos espaces industriels et logistiques.",
    details: [
      "Zones de stockage et picking",
      "Allées de circulation piétons/engins",
      "Zones dangereuses et interdites",
      "Marquage 5S et Lean Management",
      "Zones de chargement/déchargement",
    ],
    applications: [
      "Entrepôts logistiques",
      "Usines",
      "Sites industriels",
      "Plateformes",
    ],
    image: "/images/horizontale/industriel.jpg",
  },
  {
    id: "marquage-decoratif",
    title: "Marquage Décoratif & Ludique",
    description: "Marquages créatifs pour embellir et animer vos espaces.",
    details: [
      "Jeux pour cours d'école (marelles, échelles...)",
      "Terrains multisports",
      "Design actif et mobilité douce",
      "Logos et personnalisations",
      "Fresques au sol",
    ],
    applications: [
      "Écoles",
      "Mairies",
      "Espaces publics",
      "Complexes sportifs",
    ],
    image: "/images/horizontale/decoratif.jpg",
  },
];
```

### Normes et Qualité

- Mention des normes : NF EN 1436, NF P91-100, NF P91-120
- Types de produits utilisés : peintures certifiées, résines époxy, thermoplastiques
- Garantie sur les travaux

---

## 📍 Page Signalisation Verticale

### Services Détaillés

```typescript
const servicesVerticale = [
  {
    id: "panneaux-signalisation",
    title: "Pose de Panneaux de Signalisation",
    description:
      "Installation complète de signalisation routière et directionnelle.",
    details: [
      "Panneaux de police (interdiction, obligation, danger)",
      "Panneaux directionnels",
      "Panneaux d'information",
      "Signalisation temporaire de chantier",
      "Panneaux personnalisés",
    ],
    image: "/images/verticale/panneaux.jpg",
  },
  {
    id: "totems",
    title: "Totems de Ville",
    description: "Signalétique urbaine et directionnelle pour collectivités.",
    details: [
      "Totems d'entrée de ville",
      "Totems directionnels piétons",
      "Signalétique patrimoniale",
      "Jalonnement touristique",
      "Panneaux d'information municipale",
    ],
    image: "/images/verticale/totems.jpg",
  },
  {
    id: "potelets-relevants",
    title: "Potelets Auto-relevants",
    description: "Solutions souples pour la protection des espaces piétons.",
    details: [
      "Potelets flexibles anti-chocs",
      "Potelets à mémoire de forme",
      "Résistance aux impacts véhicules",
      "Installation rapide",
      "Maintenance minimale",
    ],
    image: "/images/verticale/potelets-relevants.jpg",
  },
];
```

---

## 🏙️ Page Mobilier Urbain

### Services Détaillés

```typescript
const servicesMobilier = [
  {
    id: "poubelles",
    title: "Poubelles de Ville",
    description:
      "Corbeilles et poubelles urbaines pour espaces publics et privés.",
    details: [
      "Corbeilles de propreté urbaine",
      "Poubelles tri sélectif",
      "Cendriers publics",
      "Corbeilles anti-vandalisme",
      "Conteneurs à déchets",
    ],
    materials: ["Acier galvanisé", "Aluminium", "Plastique recyclé"],
    image: "/images/mobilier/poubelles.jpg",
  },
  {
    id: "bancs",
    title: "Bancs Publics",
    description:
      "Mobilier d'assise pour vos espaces de détente et de convivialité.",
    details: [
      "Bancs publics design",
      "Banquettes urbaines",
      "Tables de pique-nique",
      "Assis-debout",
      "Mobilier accessible PMR",
    ],
    materials: ["Bois traité", "Acier", "Béton", "Matériaux composites"],
    image: "/images/mobilier/bancs.jpg",
  },
  {
    id: "potelets-rigides",
    title: "Potelets Rigides",
    description: "Délimitation et protection des espaces urbains.",
    details: [
      "Potelets anti-stationnement",
      "Bornes de voirie",
      "Potelets décoratifs",
      "Barrières de ville",
      "Arceaux vélos",
    ],
    materials: ["Fonte", "Acier inoxydable", "Acier thermolaqué"],
    image: "/images/mobilier/potelets.jpg",
  },
];
```

---

## 📸 Page Réalisations

### Structure

```typescript
interface Realisation {
  id: string;
  title: string;
  category: "horizontale" | "verticale" | "mobilier";
  location: string;
  description: string;
  images: string[];
  featured: boolean;
}

const categories = [
  { id: "all", label: "Toutes" },
  { id: "horizontale", label: "Signalisation Horizontale" },
  { id: "verticale", label: "Signalisation Verticale" },
  { id: "mobilier", label: "Mobilier Urbain" },
];
```

### Fonctionnalités

- Grille responsive (3 colonnes desktop, 2 tablette, 1 mobile)
- Filtrage par catégorie avec animation
- Lightbox/Modal pour agrandir les images
- Carousel dans la lightbox pour naviguer entre les images d'un projet
- Lazy loading des images
- Effet hover avec overlay et titre

---

## 📞 Page Contact

### Formulaire

```typescript
const contactFormSchema = z.object({
  firstName: z.string().min(2, "Prénom requis"),
  lastName: z.string().min(2, "Nom requis"),
  email: z.string().email("Email invalide"),
  phone: z
    .string()
    .regex(
      /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/,
      "Téléphone invalide"
    ),
  subject: z.enum([
    "devis-horizontale",
    "devis-verticale",
    "devis-mobilier",
    "renseignement",
    "autre",
  ]),
  message: z.string().min(10, "Message trop court"),
});

const subjects = [
  { value: "devis-horizontale", label: "Devis Signalisation Horizontale" },
  { value: "devis-verticale", label: "Devis Signalisation Verticale" },
  { value: "devis-mobilier", label: "Devis Mobilier Urbain" },
  { value: "renseignement", label: "Renseignement général" },
  { value: "autre", label: "Autre" },
];
```

### Informations de Contact

```typescript
const contactInfo = {
  phone: "06 98 74 11 99",
  email: "glmarquage@gmail.com",
  website: "glmarquage.fr",
  instagram: "@glmarquage",
  instagramUrl: "https://instagram.com/glmarquage",
  siret: "937 558 476 00019",
};
```

### Zone d'Intervention

- Carte interactive (Leaflet ou Google Maps)
- Départements : 73, 74, 01, 38
- Région : Auvergne-Rhône-Alpes
- Extension : Suisse (secteur Genève)

---

## 🧩 Composants Réutilisables

### Navigation

```typescript
const navigation = [
  { name: "Accueil", href: "/" },
  {
    name: "Nos Services",
    children: [
      { name: "Signalisation Horizontale", href: "/signalisation-horizontale" },
      { name: "Signalisation Verticale", href: "/signalisation-verticale" },
      { name: "Mobilier Urbain", href: "/mobilier-urbain" },
    ],
  },
  { name: "Réalisations", href: "/realisations" },
  { name: "Contact", href: "/contact" },
];
```

### Header

- Logo à gauche
- Navigation desktop au centre/droite
- CTA "Demander un devis" visible
- Menu hamburger mobile avec slide-in
- Sticky au scroll avec effet de réduction

### Footer

```typescript
const footerSections = {
  services: {
    title: "Nos Services",
    links: [
      { name: "Signalisation Horizontale", href: "/signalisation-horizontale" },
      { name: "Signalisation Verticale", href: "/signalisation-verticale" },
      { name: "Mobilier Urbain", href: "/mobilier-urbain" },
      { name: "Nos Réalisations", href: "/realisations" },
    ],
  },
  contact: {
    title: "Contact",
    phone: "06 98 74 11 99",
    email: "glmarquage@gmail.com",
    address: "Région Savoie - Rhône-Alpes",
  },
  legal: {
    links: [
      { name: "Mentions légales", href: "/mentions-legales" },
      {
        name: "Politique de confidentialité",
        href: "/mentions-legales#confidentialite",
      },
    ],
    siret: "SIRET : 937 558 476 00019",
  },
  social: {
    instagram: "https://instagram.com/glmarquage",
  },
};
```

### Boutons

```tsx
// Variants
const buttonVariants = {
  primary: "bg-accent text-primary hover:bg-accent-hover",
  secondary:
    "bg-primary text-white hover:bg-primary-light border border-accent",
  outline:
    "border-2 border-accent text-accent hover:bg-accent hover:text-primary",
  ghost: "text-accent hover:bg-accent/10",
};
```

---

## 🎬 Animations (Framer Motion)

### Animations au Scroll

```typescript
// Fade in up - pour les sections
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" },
};

// Stagger children - pour les grilles
const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Scale on hover - pour les cartes
const scaleHover = {
  whileHover: { scale: 1.02 },
  transition: { type: "spring", stiffness: 300 },
};
```

### Animation de Route (Hero)

```css
/* Animation décorative de lignes de route */
@keyframes roadLine {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
}

.road-animation {
  background: repeating-linear-gradient(
    to bottom,
    transparent 0px,
    transparent 20px,
    #d4a32b 20px,
    #d4a32b 40px
  );
  animation: roadLine 2s linear infinite;
}
```

---

## 🔍 SEO & Métadonnées

### Métadonnées par Page

```typescript
// Accueil
export const metadata: Metadata = {
  title: "GL Marquage | Signalisation & Mobilier Urbain en Savoie",
  description:
    "Spécialiste en marquage au sol, signalisation routière et mobilier urbain. Intervention en Savoie, Haute-Savoie, Isère, Ain et Suisse. Devis gratuit.",
  keywords: [
    "marquage au sol",
    "signalisation",
    "mobilier urbain",
    "Savoie",
    "Chambéry",
    "Annecy",
  ],
  openGraph: {
    title: "GL Marquage - Expert Signalisation & Mobilier Urbain",
    description:
      "Marquage au sol, panneaux de signalisation et mobilier urbain en Rhône-Alpes",
    images: ["/og-image.jpg"],
    locale: "fr_FR",
  },
};

// Schema.org LocalBusiness
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "GL Marquage",
  description: "Entreprise spécialisée en signalisation et mobilier urbain",
  telephone: "06 98 74 11 99",
  email: "glmarquage@gmail.com",
  url: "https://glmarquage.fr",
  areaServed: ["Savoie", "Haute-Savoie", "Ain", "Isère", "Genève"],
  serviceType: ["Marquage au sol", "Signalisation routière", "Mobilier urbain"],
};
```

---

## ♿ Accessibilité (WCAG 2.1 AA)

### Checklist

- [x] Contraste minimum 4.5:1 pour le texte
- [x] Navigation au clavier complète
- [x] Focus visible sur tous les éléments interactifs
- [x] Textes alternatifs pour toutes les images
- [x] Structure de titres logique (h1 > h2 > h3)
- [x] Formulaires avec labels et messages d'erreur
- [x] Skip links pour navigation rapide
- [x] ARIA labels pour les composants interactifs

### Vérification Contraste

| Combinaison                        | Ratio  | Statut |
| ---------------------------------- | ------ | ------ |
| Blanc (#FFF) sur Noir (#1A1A1A)    | 16.1:1 | ✅ AAA |
| Noir (#1A1A1A) sur Jaune (#D4A32B) | 6.2:1  | ✅ AA  |
| Jaune (#D4A32B) sur Noir (#1A1A1A) | 6.2:1  | ✅ AA  |
| Gris (#6B6B6B) sur Blanc (#FFF)    | 5.4:1  | ✅ AA  |

---

## ⚡ Performance

### Objectifs Core Web Vitals

| Métrique | Objectif | Stratégie                              |
| -------- | -------- | -------------------------------------- |
| LCP      | < 2.5s   | Optimisation images, preload fonts     |
| FID      | < 100ms  | Code splitting, lazy loading           |
| CLS      | < 0.1    | Dimensions images fixées, font-display |

### Optimisations

```typescript
// next.config.js
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 768, 1024, 1280, 1536],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 jours
  },
  experimental: {
    optimizeCss: true,
  },
};
```

---

## 📁 Structure des Dossiers

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── signalisation-horizontale/
│   ├── signalisation-verticale/
│   ├── mobilier-urbain/
│   ├── realisations/
│   ├── contact/
│   └── mentions-legales/
├── components/
│   ├── ui/                    # shadcn/ui components
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   └── MobileMenu.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── ZoneIntervention.tsx
│   │   ├── GalleryPreview.tsx
│   │   ├── Testimonials.tsx
│   │   └── CTABanner.tsx
│   ├── forms/
│   │   └── ContactForm.tsx
│   └── shared/
│       ├── ServiceCard.tsx
│       ├── ProjectCard.tsx
│       ├── Lightbox.tsx
│       └── AnimatedCounter.tsx
├── lib/
│   ├── utils.ts
│   ├── constants.ts
│   └── validations.ts
├── hooks/
│   ├── useScrollAnimation.ts
│   └── useMediaQuery.ts
├── types/
│   └── index.ts
└── public/
    ├── images/
    │   ├── logo.png
    │   ├── og-image.jpg
    │   ├── services/
    │   ├── horizontale/
    │   ├── verticale/
    │   ├── mobilier/
    │   └── realisations/
    └── fonts/
```

---

## 🔗 Ressources & Références

### Sites de Référence (Concurrents/Inspiration)

- [Groupe Hélios](https://www.groupe-helios.com/) - Leader national signalisation
- [Axialis Signal](https://www.axialis-signal.com/) - Concurrent local Savoie (La Ravoire)
- [Separk](https://www.separk.fr/) - Spécialiste parking

### Documentation Technique

- [Next.js 14 Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

### Normes Signalisation

- NF EN 1436 : Caractéristiques des marquages routiers
- NF P91-100 : Parkings publics
- NF P91-120 : Parkings privés
- Arrêté du 24 novembre 1967 : Signalisation routière

---

## ✅ Checklist Avant Livraison

### Fonctionnel

- [ ] Toutes les pages sont accessibles et fonctionnelles
- [ ] Navigation responsive (desktop/mobile)
- [ ] Formulaire de contact fonctionnel avec validation
- [ ] Galerie avec lightbox opérationnelle
- [ ] Toutes les animations fluides

### Technique

- [ ] Build Next.js sans erreurs
- [ ] TypeScript strict mode validé
- [ ] ESLint et Prettier configurés
- [ ] Images optimisées (WebP/AVIF)
- [ ] Meta tags et Open Graph configurés
- [ ] Schema.org implémenté
- [ ] sitemap.xml généré
- [ ] robots.txt configuré

### Performance

- [ ] Lighthouse score > 90 sur toutes les métriques
- [ ] Core Web Vitals dans le vert
- [ ] First load JS < 100kb
- [ ] Images lazy loaded

### Accessibilité

- [ ] WCAG 2.1 AA compliance
- [ ] Navigation clavier testée
- [ ] Screen reader testé
- [ ] Contraste validé

---

## 📝 Notes Importantes

1. **Logo** : Le fichier logo.png fourni doit être utilisé en l'état. Prévoir des versions SVG si possible pour une meilleure qualité.

2. **Images** : Les images de réalisations devront être fournies par le client. Prévoir des placeholders en attendant.

3. **Formulaire** : Configurer l'envoi d'emails (Resend, SendGrid, ou autre) vers glmarquage@gmail.com.

4. **Instagram** : Prévoir une intégration du feed Instagram ou au minimum un lien visible vers @glmarquage.

5. **Analytics** : Configurer Google Analytics 4 et Google Search Console pour le suivi.

6. **SSL** : Certificat SSL obligatoire pour le domaine glmarquage.fr.

---

_Document créé pour le projet GL Marquage - Site Vitrine_
_Version 1.0 - Décembre 2024_
