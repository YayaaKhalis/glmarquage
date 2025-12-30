import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Signalisation Horizontale | Marquage au Sol Professionnel - GL Marquage',
  description: 'Expert en marquage au sol : parkings, voirie, zones industrielles et marquage décoratif. Intervention en Savoie, Haute-Savoie et Rhône-Alpes. Normes NF EN 1436.',
  keywords: ['marquage au sol', 'marquage parking', 'marquage voirie', 'signalisation horizontale', 'Savoie', 'Chambéry', 'Annecy'],
  openGraph: {
    title: 'Signalisation Horizontale - Marquage au Sol Professionnel',
    description: 'Solutions complètes de marquage au sol pour parkings, voirie et zones industrielles',
    locale: 'fr_FR',
  },
};

export default function SignalisationHorizontale() {
  const services = [
    {
      title: 'Marquage Parking',
      description: 'Délimitation des places de stationnement, zones PMR, flèches directionnelles, passages piétons et zones de livraison.',
      features: [
        'Places de stationnement standard et PMR',
        'Zones de livraison et arrêt minute',
        'Numérotation des emplacements',
        'Marquage des voies de circulation',
        'Signalisation entrées/sorties'
      ],
      applications: ['Parkings publics', 'Centres commerciaux', 'Copropriétés', 'Entreprises'],
      image: '/IMG_0133.jpeg',
      icon: '🅿️'
    },
    {
      title: 'Marquage Voirie',
      description: 'Signalisation routière conforme aux normes en vigueur pour collectivités et aménageurs.',
      features: [
        'Lignes continues et discontinues',
        'Passages piétons réglementaires',
        'Cédez-le-passage et STOP',
        'Flèches directionnelles',
        'Zébras et îlots directionnels',
        'Pistes cyclables'
      ],
      applications: ['Communes', 'Départements', 'Aménageurs', 'Promoteurs'],
      image: '/IMG_0134.jpeg',
      icon: '🛣️'
    },
    {
      title: 'Marquage Industriel',
      description: 'Organisation et sécurisation de vos espaces industriels et logistiques.',
      features: [
        'Zones de stockage et picking',
        'Allées de circulation piétons/engins',
        'Zones dangereuses et interdites',
        'Marquage 5S et Lean Management',
        'Zones de chargement/déchargement'
      ],
      applications: ['Entrepôts logistiques', 'Usines', 'Sites industriels', 'Plateformes'],
      image: '/IMG_2451.jpeg',
      icon: '🏭'
    },
    {
      title: 'Marquage Décoratif & Ludique',
      description: 'Marquages créatifs pour embellir et animer vos espaces publics et scolaires.',
      features: [
        'Jeux pour cours d\'école (marelles, échelles...)',
        'Terrains multisports',
        'Design actif et mobilité douce',
        'Logos et personnalisations',
        'Fresques au sol'
      ],
      applications: ['Écoles', 'Mairies', 'Espaces publics', 'Complexes sportifs'],
      image: '/IMG_8591.jpeg',
      icon: '🎨'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Étude & Devis',
      description: 'Analyse de votre projet et établissement d\'un devis gratuit et personnalisé'
    },
    {
      step: '02',
      title: 'Préparation',
      description: 'Nettoyage et préparation des surfaces pour garantir une adhérence optimale'
    },
    {
      step: '03',
      title: 'Réalisation',
      description: 'Application professionnelle avec matériel de pointe et produits certifiés'
    },
    {
      step: '04',
      title: 'Contrôle Qualité',
      description: 'Vérification de la conformité et garantie de durabilité'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/IMG_0133.jpeg"
            alt="Signalisation Horizontale GL Marquage"
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
              <li className="text-[#d4a32b] font-semibold">Signalisation Horizontale</li>
            </ol>
          </nav>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6">
            Signalisation
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#d4a32b] to-[#e5b93a]">
              Horizontale
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Marquage au sol professionnel pour tous vos besoins :
            parkings, voirie, zones industrielles et espaces ludiques
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
            <span className="text-[#d4a32b] font-bold text-sm uppercase tracking-wider">Nos Prestations</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] mt-4 mb-6">
              Solutions de Marquage au Sol
            </h2>
            <p className="text-xl text-gray-600">
              Des solutions adaptées à chaque type de projet
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
                  <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
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
                      Nos Services
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
                      Applications
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

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#d4a32b] font-bold text-sm uppercase tracking-wider">Notre Méthode</span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6">
              Processus d&apos;Intervention
            </h2>
            <p className="text-xl text-gray-400">
              Une démarche professionnelle pour des résultats durables
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all h-full">
                  <div className="text-6xl font-black text-[#d4a32b]/20 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#d4a32b]/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Normes & Quality */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#d4a32b] font-bold text-sm uppercase tracking-wider">Qualité & Conformité</span>
              <h2 className="text-4xl font-black text-[#1a1a1a] mt-4 mb-6">
                Respect des Normes en Vigueur
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Tous nos travaux de marquage sont réalisés dans le respect strict des normes françaises
                et européennes en matière de signalisation routière et de sécurité.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#d4a32b]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#d4a32b]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a1a1a] mb-2">Normes NF EN 1436</h3>
                    <p className="text-gray-600">Caractéristiques des marquages routiers et performance</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#d4a32b]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#d4a32b]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a1a1a] mb-2">Produits Certifiés</h3>
                    <p className="text-gray-600">Peintures, résines époxy et thermoplastiques homologués</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#d4a32b]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#d4a32b]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a1a1a] mb-2">Garantie Durabilité</h3>
                    <p className="text-gray-600">Garantie sur tous nos travaux de marquage</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/IMG_2327.jpeg"
                alt="Qualité marquage GL Marquage"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-[#d4a32b] to-[#e5b93a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] mb-6">
            Prêt à Démarrer Votre Projet ?
          </h2>
          <p className="text-xl text-[#1a1a1a]/80 mb-8">
            Contactez-nous dès maintenant pour un devis gratuit et personnalisé
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
