import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Signalisation Verticale | Panneaux & Totems - GL Marquage Savoie',
  description: 'Installation de panneaux de signalisation, totems de ville et potelets auto-relevants. Solutions complètes en Savoie, Haute-Savoie et Rhône-Alpes. Devis gratuit.',
  keywords: ['signalisation verticale', 'panneaux routiers', 'totems de ville', 'potelets', 'Savoie', 'Chambéry', 'Annecy'],
  openGraph: {
    title: 'Signalisation Verticale - Panneaux & Totems de Ville',
    description: 'Installation professionnelle de panneaux de signalisation et totems en Rhône-Alpes',
    locale: 'fr_FR',
  },
};

export default function SignalisationVerticale() {
  const services = [
    {
      title: 'Panneaux de Signalisation',
      description: 'Installation complète de panneaux routiers et signalisation directionnelle conforme aux réglementations.',
      features: [
        'Panneaux de police (interdiction, obligation, danger)',
        'Panneaux directionnels et d\'information',
        'Signalisation temporaire de chantier',
        'Panneaux personnalisés sur-mesure',
        'Poteaux et supports adaptés'
      ],
      applications: ['Communes', 'Routes départementales', 'Zones d\'activité', 'Sites privés'],
      image: '/IMG_2363.jpeg',
      icon: '🚸'
    },
    {
      title: 'Totems de Ville',
      description: 'Signalétique urbaine élégante et fonctionnelle pour valoriser votre territoire.',
      features: [
        'Totems d\'entrée de ville',
        'Totems directionnels piétons',
        'Signalétique patrimoniale',
        'Jalonnement touristique',
        'Panneaux d\'information municipale'
      ],
      applications: ['Mairies', 'Offices de tourisme', 'Zones piétonnes', 'Centres-villes'],
      image: '/IMG_5576.jpg',
      icon: '🏛️'
    },
    {
      title: 'Potelets Auto-relevants',
      description: 'Solutions souples et résistantes pour la protection des espaces piétons sans dommages.',
      features: [
        'Potelets flexibles anti-chocs',
        'Potelets à mémoire de forme',
        'Résistance aux impacts véhicules',
        'Installation rapide et facile',
        'Maintenance minimale'
      ],
      applications: ['Zones piétonnes', 'Centres-villes', 'Parkings', 'Espaces publics'],
      image: '/IMG_8601.jpeg',
      icon: '⚡'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/IMG_2363.jpeg"
            alt="Signalisation Verticale GL Marquage"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/90 to-[#1a1a1a]/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="mb-6 flex justify-center">
            <ol className="flex items-center space-x-2 text-sm text-gray-300">
              <li><Link href="/" className="hover:text-[#d4a32b]">Accueil</Link></li>
              <li><span>/</span></li>
              <li className="text-[#d4a32b] font-semibold">Signalisation Verticale</li>
            </ol>
          </nav>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6">
            Signalisation
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#d4a32b] to-[#e5b93a]">
              Verticale
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Installation de panneaux, totems de ville et potelets
            pour la sécurité et l&apos;orientation de vos espaces
          </p>

          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#d4a32b] to-[#e5b93a] text-[#1a1a1a] rounded-full font-bold text-lg shadow-2xl hover:scale-105 transition-all"
          >
            Demander un Devis Gratuit
          </a>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#d4a32b] font-bold text-sm uppercase tracking-wider">Nos Solutions</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] mt-4 mb-6">
              Gamme Complète de Signalisation
            </h2>
            <p className="text-xl text-gray-600">
              Des solutions professionnelles pour tous vos besoins
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl group">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#d4a32b] to-[#e5b93a] rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                      {service.icon}
                    </div>
                    <h3 className="text-3xl font-black text-[#1a1a1a]">{service.title}</h3>
                  </div>

                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wider mb-4">
                      Nos Prestations
                    </h4>
                    <ul className="grid gap-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg className="w-6 h-6 text-[#d4a32b] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h4 className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wider mb-3">
                      Clients Types
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.applications.map((app, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-white border border-[#d4a32b]/20 text-[#1a1a1a] rounded-full text-sm font-semibold"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#d4a32b] font-bold text-sm uppercase tracking-wider">Nos Atouts</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] mt-4 mb-6">
              Pourquoi Nous Choisir ?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100">
              <div className="w-16 h-16 bg-[#d4a32b]/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#d4a32b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">Conformité Garantie</h3>
              <p className="text-gray-600">
                Tous nos produits et installations respectent les normes en vigueur
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100">
              <div className="w-16 h-16 bg-[#d4a32b]/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#d4a32b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">Installation Rapide</h3>
              <p className="text-gray-600">
                Intervention rapide avec un minimum de gêne pour la circulation
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100">
              <div className="w-16 h-16 bg-[#d4a32b]/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#d4a32b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">Prix Compétitifs</h3>
              <p className="text-gray-600">
                Des tarifs justes et transparents sans compromis sur la qualité
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 bg-gradient-to-br from-[#d4a32b] to-[#e5b93a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] mb-6">
            Besoin de Signalisation Verticale ?
          </h2>
          <p className="text-xl text-[#1a1a1a]/80 mb-8">
            Contactez GL Marquage pour un devis gratuit et sans engagement
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0698741199"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#1a1a1a] text-white rounded-full font-bold text-lg hover:bg-[#2d2d2d] transition-all shadow-xl"
            >
              <span className="mr-2">📞</span>
              06 98 74 11 99
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1a1a1a] rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl"
            >
              Formulaire de Contact
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
