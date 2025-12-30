import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Mobilier Urbain | Poubelles, Bancs & Potelets - GL Marquage',
  description: 'Fourniture et pose de mobilier urbain : poubelles de ville, bancs publics, potelets rigides et arceaux vélos. Solutions pour collectivités en Savoie et Rhône-Alpes.',
  keywords: ['mobilier urbain', 'poubelles ville', 'bancs publics', 'potelets', 'Savoie', 'aménagement urbain'],
  openGraph: {
    title: 'Mobilier Urbain - Équipements pour Collectivités',
    description: 'Mobilier urbain de qualité pour aménager vos espaces publics',
    locale: 'fr_FR',
  },
};

export default function MobilierUrbain() {
  const services = [
    {
      title: 'Poubelles de Ville',
      description: 'Corbeilles et poubelles urbaines design et résistantes pour espaces publics et privés.',
      features: [
        'Corbeilles de propreté urbaine',
        'Poubelles tri sélectif',
        'Cendriers publics',
        'Corbeilles anti-vandalisme',
        'Conteneurs à déchets'
      ],
      materials: ['Acier galvanisé', 'Aluminium', 'Plastique recyclé', 'Fonte'],
      applications: ['Communes', 'Parcs', 'Zones commerciales', 'Entreprises'],
      image: '/IMG_5564.jpg',
      icon: '🗑️'
    },
    {
      title: 'Bancs Publics',
      description: 'Mobilier d\'assise confortable et durable pour vos espaces de détente et de convivialité.',
      features: [
        'Bancs publics design',
        'Banquettes urbaines',
        'Tables de pique-nique',
        'Assis-debout',
        'Mobilier accessible PMR'
      ],
      materials: ['Bois traité', 'Acier', 'Béton', 'Matériaux composites'],
      applications: ['Parcs', 'Places publiques', 'Jardins', 'Écoles'],
      image: '/IMG_8614 2.jpeg',
      icon: '🪑'
    },
    {
      title: 'Potelets & Équipements',
      description: 'Délimitation et protection des espaces urbains avec des solutions robustes.',
      features: [
        'Potelets anti-stationnement',
        'Bornes de voirie',
        'Potelets décoratifs',
        'Barrières de ville',
        'Arceaux vélos sécurisés'
      ],
      materials: ['Fonte', 'Acier inoxydable', 'Acier thermolaqué'],
      applications: ['Centres-villes', 'Zones piétonnes', 'Parkings', 'Écoles'],
      image: '/IMG_8591.jpeg',
      icon: '🚧'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/IMG_5564.jpg"
            alt="Mobilier Urbain GL Marquage"
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
              <li className="text-[#d4a32b] font-semibold">Mobilier Urbain</li>
            </ol>
          </nav>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6">
            Mobilier
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#d4a32b] to-[#e5b93a]">
              Urbain
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Équipements urbains de qualité pour aménager
            et embellir vos espaces publics
          </p>

          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#d4a32b] to-[#e5b93a] text-[#1a1a1a] rounded-full font-bold text-lg shadow-2xl hover:scale-105 transition-all"
          >
            Demander un Devis Gratuit
          </a>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#d4a32b] font-bold text-sm uppercase tracking-wider">Notre Gamme</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] mt-4 mb-6">
              Solutions de Mobilier Urbain
            </h2>
            <p className="text-xl text-gray-600">
              Des équipements durables et esthétiques pour vos espaces
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
                      Nos Produits
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

                  <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                    <h4 className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wider mb-3">
                      Matériaux
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.materials.map((material, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-white border border-[#d4a32b]/20 text-[#1a1a1a] rounded-full text-sm font-semibold"
                        >
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[#d4a32b]/5 rounded-2xl p-6">
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

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#d4a32b] font-bold text-sm uppercase tracking-wider">Nos Avantages</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] mt-4 mb-6">
              Qualité & Durabilité
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-[#d4a32b]/10 rounded-2xl flex items-center justify-center">
                <span className="text-4xl">💪</span>
              </div>
              <h3 className="font-bold text-[#1a1a1a] mb-2">Robustesse</h3>
              <p className="text-sm text-gray-600">Équipements résistants au vandalisme et aux intempéries</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-[#d4a32b]/10 rounded-2xl flex items-center justify-center">
                <span className="text-4xl">🎨</span>
              </div>
              <h3 className="font-bold text-[#1a1a1a] mb-2">Design</h3>
              <p className="text-sm text-gray-600">Mobilier esthétique qui valorise vos espaces</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-[#d4a32b]/10 rounded-2xl flex items-center justify-center">
                <span className="text-4xl">♻️</span>
              </div>
              <h3 className="font-bold text-[#1a1a1a] mb-2">Écologique</h3>
              <p className="text-sm text-gray-600">Matériaux recyclés et recyclables disponibles</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-[#d4a32b]/10 rounded-2xl flex items-center justify-center">
                <span className="text-4xl">⚙️</span>
              </div>
              <h3 className="font-bold text-[#1a1a1a] mb-2">Installation</h3>
              <p className="text-sm text-gray-600">Pose professionnelle et garantie</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 bg-gradient-to-br from-[#d4a32b] to-[#e5b93a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] mb-6">
            Projet de Mobilier Urbain ?
          </h2>
          <p className="text-xl text-[#1a1a1a]/80 mb-8">
            Demandez votre devis personnalisé gratuitement
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
