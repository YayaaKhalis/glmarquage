'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function MobilierUrbain() {
  const services = [
    {
      title: 'Poubelles & Corbeilles',
      description: 'Poubelles de ville, corbeilles de propreté urbaine et solutions de tri sélectif pour espaces publics et privés.',
      details: [
        'Corbeilles de propreté urbaine',
        'Poubelles tri sélectif 2-3 bacs',
        'Cendriers publics muraux et sur pied',
        'Corbeilles anti-vandalisme',
        'Conteneurs à déchets grand volume'
      ],
      image: '/mobilierUrbain.png',
      icon: '🗑️'
    },
    {
      title: 'Bancs & Assises',
      description: 'Mobilier d\'assise design et résistant pour aménager vos espaces de détente. Solutions adaptées aux espaces publics.',
      details: [
        'Bancs publics bois et métal',
        'Banquettes urbaines modulaires',
        'Tables de pique-nique',
        'Assis-debout design',
        'Mobilier accessible PMR'
      ],
      image: '/mobilierUrbain.png',
      icon: '🪑'
    },
    {
      title: 'Potelets & Bornes',
      description: 'Délimitation et protection des espaces urbains. Potelets fixes pour contrôler l\'accès véhicules.',
      details: [
        'Potelets anti-stationnement',
        'Bornes de voirie en fonte',
        'Potelets décoratifs',
        'Barrières de ville',
        'Arceaux vélos sécurisés'
      ],
      image: '/mobilierUrbain.png',
      icon: '⚫'
    },
    {
      title: 'Abris & Équipements',
      description: 'Aménagement complet d\'espaces publics avec abris-bus, abris vélos et équipements urbains.',
      details: [
        'Abris-bus et arrêts de transport',
        'Abris vélos sécurisés',
        'Panneaux d\'affichage municipaux',
        'Range-vélos et racks',
        'Jardinières et bacs à fleurs'
      ],
      image: '/mobilierUrbain.png',
      icon: '🏘️'
    }
  ];

  const zones = [
    { code: '73', name: 'Savoie', ville: 'Chambéry, Aix-les-Bains, Albertville...' },
    { code: '74', name: 'Haute-Savoie', ville: 'Annecy, Annemasse, Thonon...' },
    { code: '01', name: 'Ain', ville: 'Bourg-en-Bresse, Oyonnax, Belley...' },
    { code: '38', name: 'Isère', ville: 'Grenoble, Voiron, Bourgoin...' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/mobilierUrbain.png"
            alt="Mobilier urbain - GL Marquage"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >


            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight leading-[1.1]">
              Mobilier
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500">
                Urbain
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Expert en <strong className="text-yellow-400">aménagement urbain</strong> en Savoie et Rhône-Alpes.
              <strong className="text-yellow-400"> Bancs, poubelles, potelets</strong> et équipements pour collectivités et entreprises.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-xl sm:rounded-2xl font-bold sm:font-black text-sm sm:text-base hover:from-yellow-300 hover:to-yellow-400 transition-all shadow-2xl shadow-yellow-400/30"
              >
                Demander un devis gratuit
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a
                href="tel:0698741199"
                className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-2xl border-2 border-white/20 text-white rounded-xl sm:rounded-2xl font-bold sm:font-black text-sm sm:text-base hover:bg-white/10 hover:border-yellow-400/50 transition-all"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                06 98 74 11 99
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid - Modern Bento Design */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-yellow-500/5 rounded-full blur-[100px]" />
        </div>

        {/* Dotted Pattern Overlay */}
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `radial-gradient(circle, #d1d5db 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }} />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-black rounded-full mb-6"
            >
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
              <span className="text-yellow-400 text-sm font-semibold tracking-wide">Nos Expertises</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl font-black text-black mb-6">
              Notre <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-400">Gamme</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Solutions complètes de mobilier urbain design et résistant pour tous vos espaces
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:auto-rows-[200px]">
            {services.map((service, index) => {
              const gridClasses = [
                'lg:col-span-2 lg:row-span-2',
                'lg:col-span-2 lg:row-span-1',
                'lg:col-span-2 lg:row-span-1',  
                'lg:col-span-2 lg:row-span-2',
              ];
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    delay: index * 0.1,
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  whileHover={{ scale: 1.02 }}
                  className={`group relative ${gridClasses[index]}`}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 rounded-3xl opacity-0 group-hover:opacity-75 blur-xl transition-all duration-700" />
                  
                  <div className="relative h-full bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 rounded-3xl overflow-hidden border border-gray-800 group-hover:border-yellow-400/50 transition-all duration-500">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>
                    
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-bl-[100px] opacity-50 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="relative h-full p-8 flex flex-col">
                      <motion.div 
                        className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-yellow-400/20 mb-6"
                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        {service.icon}
                      </motion.div>
                      
                      <h3 className="text-2xl font-black text-white mb-3 group-hover:text-yellow-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-auto">
                        {service.description}
                      </p>
                      
                      <div className={`mt-6 ${index === 0 || index === 3 ? 'block' : 'hidden lg:hidden'}`}>
                        <div className="flex flex-wrap gap-2">
                          {service.details.slice(0, 3).map((detail, i) => (
                            <span 
                              key={i}
                              className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 group-hover:border-yellow-400/30 group-hover:text-yellow-100 transition-all"
                            >
                              {detail}
                            </span>
                          ))}
                          {service.details.length > 3 && (
                            <span className="px-3 py-1.5 bg-yellow-400/10 border border-yellow-400/20 rounded-full text-xs text-yellow-400">
                              +{service.details.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="absolute bottom-6 right-6 w-10 h-10 bg-white/5 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Autre demande Card */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02 }}
              className="group relative lg:col-span-2 lg:row-span-2 min-h-[350px] md:min-h-[400px]"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 rounded-3xl opacity-0 group-hover:opacity-75 blur-xl transition-all duration-700" />
              
              <div className="relative h-full bg-gradient-to-r from-yellow-400 via-yellow-400 to-yellow-500 rounded-3xl border border-yellow-300 transition-all duration-500">
                <div className="absolute inset-0 opacity-10 rounded-3xl" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
                }} />
                
                <div className="relative h-full p-8 flex flex-col items-center justify-center text-center gap-6">
                  <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center text-4xl shadow-lg">
                    💬
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-black mb-2">Autre demande ?</h3>
                    <p className="text-black/70 text-sm max-w-xs mx-auto">Contactez-nous pour tout projet spécifique ou demande personnalisée</p>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-black text-yellow-400 rounded-full font-bold hover:bg-white hover:text-black hover:scale-105 transition-all text-sm shadow-lg"
                  >
                    Nous contacter
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Matériaux & Durabilité */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-black mb-8">
                Qualité & Durabilité
              </h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Notre mobilier urbain est sélectionné pour sa <strong className="text-yellow-400">résistance exceptionnelle</strong> aux intempéries et au vandalisme.
                </p>
                <p>
                  Des <strong className="text-yellow-400">matériaux premium</strong> pour un investissement durable :
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                    Acier galvanisé et thermolaqué
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                    Fonte ductile haute résistance
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                    Bois traité autoclave classe 4
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                    Plastique recyclé anti-UV
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                    Béton fibré haute performance
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
                { icon: '💪', title: 'Résistant', desc: 'Intempéries & vandalisme' },
                { icon: '🌍', title: 'Écologique', desc: 'Matériaux recyclés' },
                { icon: '🛡️', title: 'Garanti', desc: 'Jusqu\'à 10 ans' },
                { icon: '⚡', title: 'Installation', desc: 'Rapide & propre' }
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
              Fourniture et installation de mobilier urbain en <strong>Auvergne-Rhône-Alpes</strong> et <strong>Suisse</strong>
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {zones.map((zone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative p-8 rounded-3xl overflow-hidden transition-all duration-500 bg-gradient-to-br from-yellow-400 via-yellow-400 to-amber-500 text-black shadow-xl"
              >
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
                }} />
                <div className="text-6xl font-black mb-3 text-black">
                  {zone.code}
                </div>
                <div className="text-xl font-bold mb-2 text-black">
                  {zone.name}
                </div>
                <div className="text-sm text-black/70">
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

      {/* SEO Content Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg prose-gray max-w-none"
          >
            {/* Main H2 for SEO */}
            <h2 className="text-4xl md:text-5xl font-black text-black mb-8 !leading-tight">
              Guide Complet du <span className="text-yellow-500">Mobilier Urbain</span> pour l'Aménagement des Espaces Publics
            </h2>

            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Découvrez notre expertise complète en <strong className="text-black">mobilier urbain</strong> avec des solutions pour collectivités et entreprises. Du <strong className="text-black">mobilier d'assise</strong> aux <strong className="text-black">poubelles de tri sélectif</strong>, potelets et abris, nous créons des espaces publics confortables, sûrs et durables en Auvergne-Rhône-Alpes.
            </p>

            {/* Section: Définition */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-10">
              <h3 className="text-2xl font-black text-black mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center text-black text-lg">🏙️</span>
                Qu'est-ce que le mobilier urbain ?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Le <strong>mobilier urbain</strong> regroupe l'ensemble des équipements et installations implantés dans les <strong>espaces publics</strong> pour améliorer le <strong>confort</strong>, la <strong>sécurité</strong> et l'<strong>accessibilité</strong> des citadins. C'est un élément fondamental du paysage urbain qui façonne la qualité de vie des habitants et visiteurs.
              </p>
              <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">✓</span>
                  <span><strong>Améliorer le confort</strong> - Bancs, tables, zones d'attente</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">✓</span>
                  <span><strong>Assurer la sécurité</strong> - Barrières, potelets, bornes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">✓</span>
                  <span><strong>Faciliter la propreté</strong> - Poubelles et corbeilles de tri</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">✓</span>
                  <span><strong>Valoriser l'image urbaine</strong> - Design harmonieux</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">✓</span>
                  <span><strong>Garantir l'accessibilité</strong> - PMR, mobilité réduite</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">✓</span>
                  <span><strong>Encourager la durabilité</strong> - Matériaux écologiques</span>
                </li>
              </ul>
            </div>

            {/* Section: Loi AGEC */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200 mb-10">
              <h3 className="text-2xl font-black text-black mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center text-white text-lg">♻️</span>
                Loi AGEC et Tri Sélectif Obligatoire
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                La <strong>loi AGEC (Anti-Gaspillage pour une Économie Circulaire)</strong> impose à partir du <strong className="text-green-700">1er janvier 2025</strong> de nouvelles obligations pour les espaces publics :
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Installation obligatoire de poubelles de tri</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Code couleur harmonisé national</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Pictogrammes "Tri Man" clairs</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Accessibilité PMR obligatoire</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Zones concernées : parcs, rues, places, gares</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Responsabilité des collectivités</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section: Types de mobilier */}
            <h3 className="text-2xl font-black text-black mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center text-black text-lg">🪑</span>
              Types de Mobilier Urbain
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <h4 className="font-bold text-black mb-2 flex items-center gap-2">
                  <span className="text-2xl">🗑️</span>
                  Poubelles & Corbeilles
                </h4>
                <p className="text-gray-600 text-sm">Corbeilles de propreté, poubelles tri sélectif 2-3 bacs, cendriers muraux et sur pied, conteneurs grande capacité.</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <h4 className="font-bold text-black mb-2 flex items-center gap-2">
                  <span className="text-2xl">🪑</span>
                  Bancs & Assises
                </h4>
                <p className="text-gray-600 text-sm">Bancs bois et métal, banquettes modulaires, tables pique-nique, assis-debout design, mobilier PMR accessible.</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <h4 className="font-bold text-black mb-2 flex items-center gap-2">
                  <span className="text-2xl">⚫</span>
                  Potelets & Bornes
                </h4>
                <p className="text-gray-600 text-sm">Potelets anti-stationnement, bornes fonte, barrières de ville, arceaux vélos sécurisés.</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <h4 className="font-bold text-black mb-2 flex items-center gap-2">
                  <span className="text-2xl">🏘️</span>
                  Abris & Équipements
                </h4>
                <p className="text-gray-600 text-sm">Abris-bus, abris vélos sécurisés, panneaux d'affichage, jardinières et bacs à fleurs.</p>
              </div>
            </div>

            {/* Section: Normes et réglementation */}
            <div className="bg-black text-white rounded-3xl p-8 md:p-10 mb-10">
              <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center text-black text-lg">📋</span>
                Cadre Réglementaire du Mobilier Urbain
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Le mobilier urbain est soumis à un <strong className="text-white">cadre réglementaire strict</strong> en France pour garantir la sécurité et l'accessibilité.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-yellow-400 font-bold mb-3">Lois et décrets :</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">→</span>
                      <span><strong className="text-white">Loi handicap 2005</strong> — Accessibilité obligatoire</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">→</span>
                      <span><strong className="text-white">Décret n° 2006-1658</strong> — Normes d'accessibilité</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">→</span>
                      <span><strong className="text-white">Loi AGEC (2020)</strong> — Tri sélectif obligatoire</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-yellow-400 font-bold mb-3">Normes techniques :</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">→</span>
                      <span><strong className="text-white">NF EN 1317</strong> — Dispositifs de retenue</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">→</span>
                      <span><strong className="text-white">NF P 99-610</strong> — Mobilier d'ambiance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">→</span>
                      <span><strong className="text-white">NF EN 581</strong> — Sièges et tables extérieur</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section: Processus */}
            <h3 className="text-2xl font-black text-black mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center text-black text-lg">📌</span>
              Processus d'Aménagement
            </h3>
            <div className="space-y-4 mb-10">
              {[
                { step: '1', title: 'Diagnostic et audit', desc: 'Analyse de l\'espace existant, évaluation des besoins usagers, audit conformité PMR et normes.' },
                { step: '2', title: 'Conception', desc: 'Plans détaillés, choix du mobilier adapté au contexte, validation avec collectivités et devis transparent.' },
                { step: '3', title: 'Approvisionnement', desc: 'Sourcing fournisseurs qualifiés, contrôle qualité réception, préparation transport et livraison.' },
                { step: '4', title: 'Installation', desc: 'Préparation des sites, ancrage sécurisé respectant les normes, vérification alignements.' },
                { step: '5', title: 'Réception et suivi', desc: 'Vérification conformité complète, documentation, plan de maintenance préventive.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-black">{item.step}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-black mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.article>
        </div>
      </section>

      {/* FAQ Section - Semantic HTML, Visible by Default */}
      <section className="py-24 bg-white" id="faq">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black text-black mb-4">
              Questions <span className="text-yellow-500">Fréquentes</span>
            </h2>
            <p className="text-xl text-gray-600">
              Tout ce que vous devez savoir sur le mobilier urbain
            </p>
          </motion.div>

          {/* FAQ Items using details/summary with open attribute */}
          <div className="space-y-4">
            {[
              {
                question: 'Qu\'oblige la loi AGEC pour les poubelles ?',
                answer: 'À partir du 1er janvier 2025, la loi AGEC impose l\'installation obligatoire de poubelles de tri sélectif dans tous les espaces publics, avec un code couleur harmonisé et des pictogrammes "Tri Man" pour faciliter le tri par les usagers.'
              },
              {
                question: 'Quelle est la hauteur standard des bancs publics ?',
                answer: 'La hauteur d\'assise doit être de 40-45cm pour conformité PMR (accessibilité personnes à mobilité réduite). La profondeur d\'assise recommandée est de 35-40cm, avec un dossier de 30-35cm de hauteur pour le confort.'
              },
              {
                question: 'Combien d\'années dure le bois traité autoclave ?',
                answer: '10 à 15 ans généralement avec un entretien régulier. Une lasure annuelle est recommandée pour prolonger la durée de vie. Le pin traité classe 4 et le robinier naturel sont les essences les plus résistantes.'
              },
              {
                question: 'Les potelets doivent-ils tous avoir une tête blanche ?',
                answer: 'Oui, pour l\'accessibilité des personnes malvoyantes (arrêté 2012). La tête boule blanche doit avoir un diamètre de 100-150mm pour assurer un contraste visuel suffisant avec l\'environnement.'
              },
              {
                question: 'Peut-on installer des corbeilles tri-sélectif partout ?',
                answer: 'Oui, si l\'accès est approprié et le vidage possible. Il faut vérifier l\'ancrage stable, le dégagement suffisant, et la proximité des habitations. Les zones piétonnes, parcs et places publiques sont prioritaires.'
              },
              {
                question: 'Quel est le délai de conformité pour le tri sélectif ?',
                answer: 'Le 1er janvier 2025 est la date limite selon la loi AGEC. Il est recommandé de planifier la transition dès maintenant pour assurer une mise en conformité progressive et sereine.'
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <details 
                  open 
                  className="group bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-gray-100 transition-colors">
                    <h3 className="text-lg font-bold text-black pr-4">
                      {faq.question}
                    </h3>
                    <span className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 group-open:rotate-180 transition-transform">
                      <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 pt-2 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              </motion.div>
            ))}
          </div>

          {/* Additional CTA in FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 mb-6">
              Vous avez d'autres questions sur nos solutions de mobilier urbain ?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-yellow-400 hover:text-black transition-all"
            >
              Nous contacter
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
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
              Un projet d'
              <span className="block text-yellow-400">aménagement urbain ?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Devis gratuit sous 24h · Large choix de mobilier · Installation professionnelle
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
