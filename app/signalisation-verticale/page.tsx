'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function SignalisationVerticale() {
  const services = [
    {
      title: 'Panneaux de Signalisation',
      description: 'Installation complète de panneaux routiers et directionnels conformes au code de la route. Expertise en signalisation permanente et temporaire.',
      details: [
        'Panneaux de police (interdiction, obligation)',
        'Panneaux de danger et priorité',
        'Panneaux directionnels et localisation',
        'Signalisation temporaire de chantier',
        'Panneaux personnalisés sur mesure'
      ],
      image: '/singalisationverticale.jpg',
      icon: '🚦'
    },
    {
      title: 'Totems de Ville',
      description: 'Signalétique urbaine et directionnelle pour collectivités. Solutions modernes pour l\'orientation et l\'information du public.',
      details: [
        'Totems d\'entrée de ville',
        'Totems directionnels piétons',
        'Signalétique patrimoniale',
        'Jalonnement touristique',
        'Panneaux d\'information municipale'
      ],
      image: '/singalisationverticale.jpg',
      icon: '🗼'
    },
    {
      title: 'Potelets Auto-relevants',
      description: 'Solutions souples pour la protection des espaces piétons et cyclistes. Résistance aux impacts véhicules avec retour automatique.',
      details: [
        'Potelets flexibles anti-chocs',
        'Potelets à mémoire de forme',
        'Protection zones piétonnes',
        'Installation rapide sans génie civil',
        'Maintenance minimale'
      ],
      image: '/singalisationverticale.jpg',
      icon: '🚧'
    },
    {
      title: 'Supports & Fixations',
      description: 'Fourniture et pose de supports adaptés pour tous types de panneaux. Installation sur sol, mur ou portique.',
      details: [
        'Poteaux acier et aluminium',
        'Fixations murales',
        'Portiques de signalisation',
        'Scellement chimique et béton',
        'Remplacement poteaux endommagés'
      ],
      image: '/singalisationverticale.jpg',
      icon: '🔧'
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
            src="/singalisationverticale.jpg"
            alt="Signalisation verticale - GL Marquage"
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
              Signalisation
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500">
                Verticale
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Spécialiste de la <strong className="text-yellow-400">pose de panneaux</strong> en Savoie et Rhône-Alpes.
              Installation de <strong className="text-yellow-400">totems, potelets et signalétique</strong> pour collectivités et professionnels.
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
              Solutions <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-400">Verticales</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fourniture et installation complète de signalisation verticale pour tous vos projets
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:auto-rows-[200px]">
            {services.map((service, index) => {
              // Définir les tailles de grille pour chaque carte
              const gridClasses = [
                'lg:col-span-2 lg:row-span-2', // Premier - grand
                'lg:col-span-2 lg:row-span-1', // Deuxième - large
                'lg:col-span-2 lg:row-span-1', // Troisième - large  
                'lg:col-span-2 lg:row-span-2', // Quatrième - grand
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
                  {/* Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 rounded-3xl opacity-0 group-hover:opacity-75 blur-xl transition-all duration-700" />
                  
                  {/* Card */}
                  <div className="relative h-full bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 rounded-3xl overflow-hidden border border-gray-800 group-hover:border-yellow-400/50 transition-all duration-500">
                    {/* Shine Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>
                    
                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-bl-[100px] opacity-50 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Content */}
                    <div className="relative h-full p-8 flex flex-col">
                      {/* Icon */}
                      <motion.div 
                        className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-yellow-400/20 mb-6"
                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        {service.icon}
                      </motion.div>
                      
                      {/* Title & Description */}
                      <h3 className="text-2xl font-black text-white mb-3 group-hover:text-yellow-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-auto">
                        {service.description}
                      </p>
                      
                      {/* Details - Only show on larger cards */}
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
                      
                      {/* Hover Arrow */}
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

            {/* Autre demande Card - Inside Bento Grid */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                delay: 0.5,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ scale: 1.02 }}
              className="group relative lg:col-span-2 lg:row-span-2 min-h-[350px] md:min-h-[400px]"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 rounded-3xl opacity-0 group-hover:opacity-75 blur-xl transition-all duration-700" />
              
              {/* Card */}
              <div className="relative h-full bg-gradient-to-r from-yellow-400 via-yellow-400 to-yellow-500 rounded-3xl border border-yellow-300 transition-all duration-500">
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-10 rounded-3xl" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
                }} />
                
                {/* Content */}
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

      {/* Conformité & Normes */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-black mb-8">
                Conformité Réglementaire
              </h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Tous nos panneaux de signalisation sont <strong className="text-yellow-400">conformes au code de la route</strong> et aux arrêtés en vigueur.
                </p>
                <p>
                  Nous respectons scrupuleusement les <strong className="text-yellow-400">normes et réglementations</strong> :
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                    Arrêté du 24 novembre 1967
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                    Instruction interministérielle
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                    Normes NF et marquage CE
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                    Classe de rétroréflexion adaptée
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                    Garantie anti-UV longue durée
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
                { icon: '✓', title: 'Conforme', desc: 'Code de la route' },
                { icon: '🛡️', title: 'Garantie', desc: 'Matériel certifié' },
                { icon: '💪', title: 'Résistant', desc: 'Intempéries & UV' },
                { icon: '⚡', title: 'Rapide', desc: 'Installation express' }
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
              Pose de signalisation verticale dans toute la région <strong>Auvergne-Rhône-Alpes</strong> et en <strong>Suisse romande</strong>
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
              Guide Complet des <span className="text-yellow-500">Panneaux de Signalisation</span> et Solutions Verticales
            </h2>

            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Découvrez notre expertise complète en <strong className="text-black">signalisation verticale</strong> avec l'installation de panneaux routiers conformes au Code de la Route. Solutions permanentes et temporaires pour collectivités, aménageurs et entreprises en Auvergne-Rhône-Alpes.
            </p>

            {/* Section: Définition */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-10">
              <h3 className="text-2xl font-black text-black mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center text-black text-lg">🚦</span>
                Qu'est-ce que la signalisation verticale ?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                La <strong>signalisation verticale</strong> regroupe l'ensemble des <strong>panneaux de signalisation</strong> installés en position verticale sur le domaine public. Elle se distingue de la signalisation horizontale (marquages au sol) en offrant une <strong>visibilité immédiate</strong> à grande distance et une communication claire aux usagers de la route.
              </p>
              <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span>Panneaux de police (interdiction, obligation)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span>Panneaux de danger et priorité</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span>Panneaux directionnels et localisation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span>Signalisation temporaire de chantier</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span>Panneaux personnalisés sur mesure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span>Totems de ville et signalétique urbaine</span>
                </li>
              </ul>
            </div>

            {/* Section: Rôles essentiels */}
            <div className="grid md:grid-cols-3 gap-4 mb-10">
              {[
                { title: 'Informer', icon: '📢', text: 'Transmet des messages clairs et instantanés aux usagers de la route.' },
                { title: 'Réguler', icon: '🚦', text: 'Impose les règles de circulation et les priorités de passage.' },
                { title: 'Signaler', icon: '⚠️', text: 'Prévient des dangers et risques à venir sur la chaussée.' },
                { title: 'Guider', icon: '🧭', text: 'Oriente vers les destinations avec des panneaux directionnels.' },
                { title: 'Sécuriser', icon: '🛡️', text: 'Réduit les accidents et conflits entre usagers.' },
                { title: 'Organiser', icon: '📐', text: 'Définit les zones et restrictions de l\'espace public.' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{item.icon}</span>
                    <h4 className="text-lg font-bold text-black">{item.title}</h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Section: Normes et réglementation */}
            <div className="bg-black text-white rounded-3xl p-8 md:p-10 mb-10">
              <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center text-black text-lg">📋</span>
                Conformité Réglementaire et Normes
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Notre expertise respecte <strong className="text-white">intégralement la législation française</strong> en signalisation verticale pour garantir la sécurité et la conformité de vos installations.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-yellow-400 font-bold mb-3">Réglementations principales :</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">→</span>
                      <span><strong className="text-white">Arrêté du 24 novembre 1967</strong> — Signalisation routière</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">→</span>
                      <span><strong className="text-white">Instruction Interministérielle (IISR)</strong> — Arrêté du 7 juin 1977 modifié</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">→</span>
                      <span><strong className="text-white">Convention de Vienne (1968)</strong> — Standards internationaux</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-yellow-400 font-bold mb-3">Normes techniques :</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">→</span>
                      <span><strong className="text-white">NF EN 12899-1</strong> — Panneaux permanents et temporaires</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">→</span>
                      <span><strong className="text-white">NF EN 12899-2</strong> — Bornes et éléments de signalisation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400">→</span>
                      <span><strong className="text-white">Marquage CE</strong> — Certification européenne</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section: Types de panneaux */}
            <h3 className="text-2xl font-black text-black mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center text-black text-lg">🚧</span>
              Types de Panneaux de Signalisation
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <h4 className="font-bold text-black mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-600 text-xs">🚫</span>
                  Panneaux d'interdiction
                </h4>
                <p className="text-gray-600 text-sm">Ronds à fond blanc lisérés de rouge : sens interdit, limitations de vitesse, stationnement interdit, restrictions de véhicules.</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <h4 className="font-bold text-black mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xs">➡️</span>
                  Panneaux d'obligation
                </h4>
                <p className="text-gray-600 text-sm">Ronds à fond bleu : direction obligatoire, voies réservées, équipements obligatoires, vitesse minimale.</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <h4 className="font-bold text-black mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 text-xs">⚠️</span>
                  Panneaux de danger
                </h4>
                <p className="text-gray-600 text-sm">Triangulaires : virages, dos d'âne, chaussée glissante, piétons, passage à niveau, travaux.</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <h4 className="font-bold text-black mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xs">🧭</span>
                  Panneaux directionnels
                </h4>
                <p className="text-gray-600 text-sm">Avec flèches et codes couleur : bleu (autoroute), vert (grandes routes), blanc (local), jaune (temporaire).</p>
              </div>
            </div>

            {/* Section: Totems de ville */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 border border-yellow-200 mb-10">
              <h3 className="text-2xl font-black text-black mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center text-black text-lg">🗼</span>
                Totems de Ville et Signalétique Urbaine
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Les <strong>totems de ville</strong> constituent une signalisation verticale majeure pour le paysage urbain, servant à la fois de repère fonctionnel et d'élément identitaire pour les communes.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600">✓</span>
                    <span>Totems d'entrée de ville personnalisés</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600">✓</span>
                    <span>Totems directionnels piétons</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600">✓</span>
                    <span>Signalétique patrimoniale et culturelle</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600">✓</span>
                    <span>Jalonnement touristique</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600">✓</span>
                    <span>Panneaux d'information municipale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600">✓</span>
                    <span>Styles : moderne, traditionnel, bois massif</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section: Processus */}
            <h3 className="text-2xl font-black text-black mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center text-black text-lg">📌</span>
              Processus de Réalisation
            </h3>
            <div className="space-y-4 mb-10">
              {[
                { step: '1', title: 'Diagnostic et conseil', desc: 'Audit complet de vos besoins, analyse du site et recommandations personnalisées en conformité avec la réglementation.' },
                { step: '2', title: 'Conception et validation', desc: 'Plans détaillés, choix des panneaux et matériaux, validation avec les autorités (mairie, DDTM) et devis transparent.' },
                { step: '3', title: 'Fabrication', desc: 'Fabrication des panneaux personnalisés si nécessaire, approvisionnement matériaux premium et contrôle qualité.' },
                { step: '4', title: 'Installation', desc: 'Pose des supports avec ancrage conforme, installation des panneaux avec alignement précis et vérification visibilité.' },
                { step: '5', title: 'Réception et suivi', desc: 'Vérification conformité, documentation photographique, formation du personnel et plan de maintenance.' },
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
              Tout ce que vous devez savoir sur la signalisation verticale
            </p>
          </motion.div>

          {/* FAQ Items using details/summary with open attribute */}
          <div className="space-y-4">
            {[
              {
                question: 'Qui doit installer la signalisation verticale en France ?',
                answer: 'Selon le Code de la Route, les autorités de police (maires, préfets) désignent les responsables de la signalisation. Nous agissons en tant que prestataire qualifié sous leur autorité, garantissant une installation conforme aux normes en vigueur.'
              },
              {
                question: 'Quelles sont les formes des panneaux en signalisation verticale ?',
                answer: 'Les formes sont normalisées : triangulaire pour le danger, rond pour l\'interdiction/obligation, carré pour l\'indication, flèche pour la direction. La forme communique instantanément le type de message aux usagers.'
              },
              {
                question: 'Combien de temps dure la visibilité d\'un panneau ?',
                answer: 'Environ 10 ans avec un film rétroréfléchissant standard. Les totems et supports durables peuvent avoir une durée de vie de 30 à 50 ans. Une maintenance régulière permet de prolonger significativement cette durée.'
              },
              {
                question: 'La signalisation temporaire peut-elle remplacer la permanente ?',
                answer: 'Oui, temporairement. La signalisation jaune (temporaire) prévaut sur la blanche (permanente) pendant sa période de validité. C\'est essentiel pour la sécurité des zones de chantier.'
              },
              {
                question: 'Comment assurer la conformité légale de mes panneaux ?',
                answer: 'Nos experts réalisent un audit réglementaire complet, en respectant le Code de la Route, les normes EN 12899 et l\'arrêté de 1967 modifié. Nous garantissons cette conformité sur toutes nos installations.'
              },
              {
                question: 'Quel est le délai d\'installation d\'un panneau ?',
                answer: 'Les délais varient selon la complexité : panneau simple 1-3 jours, totem de ville 5-10 jours, portique avec travaux de génie civil 15-30 jours. Nous vous fournissons un planning précis dans notre devis.'
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
              Vous avez d'autres questions sur nos solutions de signalisation verticale ?
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
              <span className="block text-yellow-400">signalisation ?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Devis gratuit sous 24h · Installation professionnelle · Conformité garantie
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
