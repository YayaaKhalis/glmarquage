'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function SignalisationHorizontale() {
  const services = [
    {
      title: 'Marquage Parking',
      description: 'Délimitation des places de stationnement, zones PMR, flèches directionnelles, passages piétons, zones de livraison pour parkings publics et privés.',
      details: [
        'Places de stationnement standard et PMR',
        'Zones de livraison et arrêt minute',
        'Numérotation des emplacements',
        'Marquage des voies de circulation',
        'Signalisation entrées/sorties'
      ],
      image: '/IMG_0134.jpeg',
      icon: '🅿️'
    },
    {
      title: 'Marquage Voirie',
      description: 'Signalisation routière conforme aux normes NF EN 1436 pour collectivités et aménageurs. Expertise en marquage urbain et rural.',
      details: [
        'Lignes continues et discontinues',
        'Passages piétons réglementaires',
        'Cédez-le-passage et STOP',
        'Flèches directionnelles',
        'Zébras et îlots directionnels',
        'Pistes cyclables'
      ],
      image: '/IMG_2327.jpeg',
      icon: '🛣️'
    },
    {
      title: 'Marquage Industriel',
      description: 'Organisation et sécurisation de vos espaces industriels et logistiques. Solutions adaptées aux entrepôts et sites de production.',
      details: [
        'Zones de stockage et picking',
        'Allées de circulation piétons/engins',
        'Zones dangereuses et interdites',
        'Marquage 5S et Lean Management',
        'Zones de chargement/déchargement'
      ],
      image: '/IMG_5564.jpg',
      icon: '🏭'
    },
    {
      title: 'Marquage Décoratif',
      description: 'Marquages créatifs et ludiques pour embellir vos espaces. Jeux pour enfants, terrains de sport et signalétique personnalisée.',
      details: [
        'Jeux pour cours d\'école (marelles, échelles)',
        'Terrains multisports',
        'Design actif et mobilité douce',
        'Logos et personnalisations',
        'Fresques au sol'
      ],
      image: '/IMG_8591.jpeg',
      icon: '🎨'
    }
  ];

  const zones = [
    { code: '73', name: 'Savoie', primary: true, ville: 'Chambéry, Aix-les-Bains, Albertville' },
    { code: '74', name: 'Haute-Savoie', primary: true, ville: 'Annecy, Annemasse, Thonon' },
    { code: '01', name: 'Ain', primary: false, ville: 'Bourg-en-Bresse, Oyonnax' },
    { code: '38', name: 'Isère', primary: false, ville: 'Grenoble, Voiron' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-black overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/IMG_0134.jpeg"
            alt="Marquage au sol - GL Marquage Savoie"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 backdrop-blur-xl mb-8">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
              <span className="text-yellow-400 font-bold text-sm tracking-wide uppercase">
                Nos Services
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight leading-[1.1]">
              Signalisation
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500">
                Horizontale
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Expert en <strong className="text-yellow-400">marquage au sol</strong> en Savoie, Haute-Savoie et Rhône-Alpes.
              Solutions professionnelles pour <strong className="text-yellow-400">parkings, voirie, industrie</strong> et espaces publics.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-2xl font-black text-base hover:from-yellow-300 hover:to-yellow-400 transition-all shadow-2xl shadow-yellow-400/30"
              >
                Demander un devis gratuit
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a
                href="tel:0698741199"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-2xl border-2 border-white/20 text-white rounded-2xl font-black text-base hover:bg-white/10 hover:border-yellow-400/50 transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                06 98 74 11 99
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-black text-black mb-6">
              Nos Solutions de Marquage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des prestations complètes et conformes aux normes pour tous vos projets de marquage au sol
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-6xl">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-3xl font-black text-black mb-4 group-hover:text-yellow-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <svg className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Normes & Certifications */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-black mb-8">
                Qualité & Conformité
              </h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Tous nos travaux de marquage au sol respectent les <strong className="text-yellow-400">normes françaises et européennes</strong> en vigueur.
                </p>
                <p>
                  Nous utilisons exclusivement des <strong className="text-yellow-400">peintures et produits certifiés</strong> :
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                    NF EN 1436 - Marquages routiers
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                    NF P91-100 - Parkings publics
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                    Peintures à base d'eau certifiées
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                    Thermoplastiques longue durée
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                    Résines époxy haute résistance
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: '✓', title: 'Certifié NF', desc: 'Conformité garantie' },
                { icon: '🛡️', title: 'Garantie', desc: 'Sur tous nos travaux' },
                { icon: '🌍', title: 'Éco-responsable', desc: 'Produits respectueux' },
                { icon: '⚡', title: 'Réactivité', desc: 'Devis sous 24h' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center"
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <div className="text-lg font-bold text-yellow-400 mb-1">{item.title}</div>
                  <div className="text-sm text-gray-400">{item.desc}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-black text-black mb-6">
              Zone d'Intervention
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              GL Marquage intervient dans toute la région <strong>Auvergne-Rhône-Alpes</strong> et en <strong>Suisse romande</strong>
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {zones.map((zone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-8 rounded-3xl text-center transition-all ${
                  zone.primary
                    ? 'bg-gradient-to-br from-yellow-400 to-yellow-500 text-black shadow-2xl'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className={`text-6xl font-black mb-2 ${zone.primary ? 'text-black' : 'text-gray-800'}`}>
                  {zone.code}
                </div>
                <div className={`text-xl font-bold mb-2 ${zone.primary ? 'text-black' : 'text-gray-900'}`}>
                  {zone.name}
                </div>
                <div className={`text-sm ${zone.primary ? 'text-black/70' : 'text-gray-600'}`}>
                  {zone.ville}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-gray-50 rounded-full">
              <span className="text-3xl">🇨🇭</span>
              <div className="text-left">
                <div className="text-lg font-bold text-gray-900">Suisse - Genève</div>
                <div className="text-sm text-gray-600">Intervention transfrontalière</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-8">
              Un projet de
              <span className="block text-yellow-400">marquage au sol ?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Devis gratuit sous 24h · Intervention rapide · Qualité garantie
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-full font-black text-lg hover:from-yellow-300 hover:to-yellow-400 transition-all shadow-2xl shadow-yellow-400/30"
              >
                Demander un devis
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a
                href="tel:0698741199"
                className="inline-flex items-center gap-3 px-12 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white rounded-full font-black text-lg hover:bg-white/20 transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                06 98 74 11 99
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
