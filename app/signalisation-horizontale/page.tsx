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
      image: '/passages-pietons-glm-marquage-au-sol.png',
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
              Solutions de <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-400">Marquage</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des prestations complètes et conformes aux normes pour tous vos projets de marquage au sol
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
              Guide Complet du <span className="text-yellow-500">Marquage au Sol</span> en Auvergne-Rhône-Alpes
            </h2>

            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Chaque jour, des milliers d'usagers circulent sur nos routes, parkings et espaces industriels sans y penser. Pourtant, c'est la <strong className="text-black">signalisation horizontale</strong> qui les guide, les protège et organise leurs déplacements. Lignes blanches, passages piétons, flèches directionnelles : ces marquages au sol sont bien plus qu'une simple peinture sur bitume.
            </p>

            {/* Section: Qu'est-ce que la signalisation horizontale */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-10">
              <h3 className="text-2xl font-black text-black mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center text-black text-lg">❓</span>
                Qu'est-ce que la signalisation horizontale ?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                La <strong>signalisation horizontale</strong> désigne l'ensemble des <strong>marquages peints ou appliqués directement sur la chaussée</strong>. Contrairement aux panneaux (signalisation verticale), elle offre une lecture immédiate et intuitive pour tous les usagers de la route.
              </p>
              <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span>Lignes de délimitation des voies (continues, discontinues, mixtes)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span>Passages piétons et traversées sécurisées</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span>Flèches directionnelles orientant la circulation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span>Pictogrammes réglementaires (vélo, PMR, STOP)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span>Zébras et îlots canalisant les trajectoires</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span>Délimitation des zones spécifiques (stationnement, livraison)</span>
                </li>
              </ul>
            </div>

            {/* Section: Fonctions essentielles */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {[
                { title: 'Guider', icon: '🧭', text: 'Elle oriente conducteurs, cyclistes et piétons dans leurs déplacements quotidiens. Sans elle, chaque intersection deviendrait un casse-tête.' },
                { title: 'Réglementer', icon: '📋', text: 'Elle matérialise les règles du Code de la route directement sur la chaussée. Une ligne continue n\'est pas une suggestion, c\'est une obligation.' },
                { title: 'Sécuriser', icon: '🛡️', text: 'Elle réduit les risques d\'accidents en clarifiant les zones de circulation, les priorités et les dangers potentiels.' },
                { title: 'Optimiser', icon: '⚡', text: 'Elle fluidifie le trafic en organisant les flux de manière logique et prévisible.' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{item.icon}</span>
                    <h4 className="text-xl font-bold text-black">{item.title}</h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Section: Normes et réglementation */}
            <div className="bg-black text-white rounded-3xl p-8 md:p-10 mb-10">
              <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center text-black text-lg">📐</span>
                Normes et Réglementation du Marquage au Sol
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                La signalisation horizontale obéit à des normes strictes garantissant sa lisibilité et sa durabilité. Nous appliquons rigoureusement ces exigences sur chaque chantier.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-yellow-400 font-bold mb-3">Pour le marquage routier :</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">→</span>
                      <span><strong className="text-white">NF EN 1436</strong> — Norme européenne définissant les performances de rétroréflexion et de visibilité nocturne</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">→</span>
                      <span><strong className="text-white">Arrêté du 24 novembre 1967</strong> — Cadre réglementaire français de la signalisation routière</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">→</span>
                      <span><strong className="text-white">Instructions Interministérielles (IISR)</strong> — Règles techniques détaillées</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-yellow-400 font-bold mb-3">Pour les parkings :</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">→</span>
                      <span><strong className="text-white">NF P91-100</strong> — Parkings ouverts au public</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">→</span>
                      <span><strong className="text-white">NF P91-120</strong> — Parcs de stationnement privés</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">→</span>
                      <span>Dimensions minimales : places de 2,30 m × 5 m, places PMR élargies à 3,30 m</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section: Déroulement d'un projet */}
            <h3 className="text-2xl font-black text-black mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center text-black text-lg">📌</span>
              Déroulement d'un Projet de Marquage au Sol
            </h3>
            <div className="space-y-4 mb-10">
              {[
                { step: '1', title: 'Étude préalable', desc: 'Nous visitons votre site pour comprendre vos besoins, analyser les contraintes (trafic, revêtement, météo) et définir le plan de marquage.' },
                { step: '2', title: 'Proposition technique et financière', desc: 'Vous recevez un devis détaillé avec le descriptif des travaux, les matériaux utilisés et le planning d\'intervention.' },
                { step: '3', title: 'Préparation du chantier', desc: 'Nettoyage des surfaces, traçage des repères, mise en place des protections et de la signalisation temporaire.' },
                { step: '4', title: 'Réalisation', desc: 'Application des marquages par nos équipes qualifiées, avec contrôle qualité à chaque étape.' },
                { step: '5', title: 'Réception et documentation', desc: 'Vérification de conformité, nettoyage du site et remise des documents techniques.' },
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
              Tout ce que vous devez savoir sur la signalisation horizontale
            </p>
          </motion.div>

          {/* FAQ Items using details/summary with open attribute */}
          <div className="space-y-4">
            {[
              {
                question: 'Quelle est la durée de vie d\'un marquage au sol ?',
                answer: 'Cela dépend du matériau et de l\'intensité du trafic. Une peinture routière classique tient 1 à 2 ans. Un revêtement thermoplastique peut durer 5 à 7 ans sur un parking peu sollicité. Nous vous conseillons sur le meilleur choix selon votre usage.'
              },
              {
                question: 'Peut-on intervenir par tous les temps ?',
                answer: 'Non. L\'application nécessite une chaussée sèche et une température supérieure à 5°C. Nous planifions nos chantiers en fonction des prévisions météo pour garantir une application optimale et durable.'
              },
              {
                question: 'Quelles sont les dimensions réglementaires d\'une place PMR ?',
                answer: 'Une place PMR doit mesurer au minimum 3,30 m de large (place de 2,30 m + bande de circulation de 0,80 m) sur 5 m de long. Le marquage bleu et le pictogramme international d\'accessibilité sont obligatoires.'
              },
              {
                question: 'Intervenez-vous pour des petits chantiers ?',
                answer: 'Oui, absolument. Nous traitons aussi bien les grands projets de voirie que le marquage d\'un petit parking de quelques places. Chaque projet reçoit la même attention et qualité de service.'
              },
              {
                question: 'Quelles couleurs sont utilisées pour le marquage routier ?',
                answer: 'Les couleurs sont réglementées : blanc pour le marquage permanent, jaune pour le marquage temporaire (chantiers), bleu pour les emplacements PMR. D\'autres couleurs peuvent être utilisées pour le marquage décoratif ou industriel.'
              },
              {
                question: 'Quel est le délai pour obtenir un devis ?',
                answer: 'Nous nous engageons à vous fournir un devis détaillé sous 24 à 48 heures après étude de votre demande. Pour les projets complexes nécessitant une visite sur site, le délai peut être légèrement plus long.'
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
              Vous avez d'autres questions ? Notre équipe est à votre écoute.
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
