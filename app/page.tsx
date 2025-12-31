'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Grid3D from '@/components/3d/Grid3D';
import RoadElements3D from '@/components/3d/RoadElements3D';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const services = [
    {
      title: 'Signalisation Horizontale',
      description: 'Expert en marquage au sol depuis plus de 15 ans. Nous réalisons tous types de marquages routiers : lignes continues et discontinues, passages piétons, zébras, places de stationnement, marquage de zones industrielles et logistiques. Matériaux certifiés NF et conformes aux normes EN 1436.',
      image: '/IMG_0134.jpeg',
      href: '/signalisation-horizontale',
      number: '01'
    },
    {
      title: 'Signalisation Verticale',
      description: 'Installation complète de panneaux de signalisation routière, totems de ville, potelets de sécurité et mobilier de signalisation. Fourniture et pose de panneaux conformes au code de la route. Expertise en signalisation permanente et temporaire pour chantiers.',
      image: '/singalisationverticale.jpg',
      href: '/signalisation-verticale',
      number: '02'
    },
    {
      title: 'Mobilier Urbain',
      description: 'Solutions complètes d\'aménagement urbain : poubelles publiques, bancs, abris-bus, barrières, arceaux vélos. Installation de mobilier urbain durable et design pour collectivités et entreprises. Matériaux résistants aux intempéries et au vandalisme.',
      image: '/mobilierUrbain.png',
      href: '/mobilier-urbain',
      number: '03'
    }
  ];

  const stats = [
    { value: '500+', label: 'Projets réalisés', description: 'Chantiers menés à bien' },
    { value: '15+', label: 'Années d\'expérience', description: 'Expertise reconnue' },
    { value: '5', label: 'Départements couverts', description: 'Zone d\'intervention' },
    { value: '100%', label: 'Satisfaction client', description: 'Clients satisfaits' }
  ];

  const realisations = [
    '/IMG_0133.jpeg',
    '/IMG_0134.jpeg',
    '/IMG_2327.jpeg',
    '/IMG_2363.jpeg',
    '/IMG_2451.jpeg',
    '/IMG_5564.jpg',
    '/IMG_5576.jpg',
    '/IMG_8591.jpeg'
  ];

  const avantages = [
    {
      icon: '✓',
      title: 'Certifications & Normes',
      description: 'Tous nos produits et prestations respectent les normes françaises et européennes en vigueur. Certifications NF, marquage CE, conformité EN 1436 pour le marquage routier.'
    },
    {
      icon: '⚡',
      title: 'Réactivité Garantie',
      description: 'Devis sous 24h, intervention rapide sur toute la Savoie et Haute-Savoie. Équipe disponible pour urgences et chantiers en dehors des heures ouvrées.'
    },
    {
      icon: '🛡️',
      title: 'Garantie Qualité',
      description: 'Matériaux premium longue durée. Garantie sur tous nos travaux. Suivi post-chantier et maintenance préventive disponible.'
    },
    {
      icon: '🌍',
      title: 'Éco-responsable',
      description: 'Utilisation de peintures et matériaux respectueux de l\'environnement. Gestion responsable des déchets de chantier et conformité environnementale.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Bold Yellow & Black */}
      <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Background Elements - Très subtils */}
        <motion.div
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute top-20 right-0 w-[800px] h-[800px] bg-gradient-to-br from-white/5 to-white/2 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-white/3 to-transparent rounded-full blur-3xl"></div>
        </motion.div>

        {/* Grille 3D et éléments routiers */}
        <Grid3D />
        <RoadElements3D />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 py-32">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            style={{ opacity }}
            className="text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-2 px-5 py-2 bg-yellow-400 rounded-full mb-12"
            >
              <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
              <span className="text-black text-sm font-bold tracking-wide">Expert en signalisation depuis 2010</span>
            </motion.div>

            {/* Main Title - Very Large & Bold */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-[5rem] md:text-[8rem] lg:text-[12rem] font-black leading-[0.85] tracking-tighter mb-8"
            >
              <span className="block text-white">GL</span>
              <span className="block text-yellow-400">
                Marquage
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-3xl text-gray-300 font-light max-w-4xl mx-auto mb-8 leading-relaxed"
            >
              Spécialiste de la signalisation routière horizontale et verticale en Savoie, Haute-Savoie et Rhône-Alpes
              <span className="block mt-4 text-lg text-yellow-400 font-medium">
                Marquage au sol · Panneaux de signalisation · Mobilier urbain
              </span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-12 py-6 bg-yellow-400 text-black rounded-full text-lg font-bold hover:bg-yellow-300 transition-all duration-300 flex items-center gap-3 shadow-xl hover:shadow-2xl"
              >
                Devis gratuit sous 24h
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.a>

              <motion.a
                href="tel:0698741199"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 bg-white/10 backdrop-blur border-2 border-yellow-400 text-yellow-400 rounded-full text-lg font-bold hover:bg-yellow-400 hover:text-black transition-all duration-300 shadow-lg"
              >
                06 98 74 11 99
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-32 pt-16 border-t border-gray-800"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl md:text-6xl font-black text-yellow-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white font-bold mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-400">
                    {stat.description}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-yellow-400 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-yellow-400 rounded-full"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Introduction / À propos */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-1 w-16 bg-yellow-400"></div>
                <span className="text-sm text-gray-600 uppercase tracking-wider font-bold">GL Marquage</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-black mb-6 tracking-tight leading-tight">
                Votre partenaire de confiance en signalisation
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-black">GL Marquage</strong> est une entreprise spécialisée dans la <strong>signalisation routière</strong>, le <strong>marquage au sol</strong> et l'<strong>aménagement urbain</strong> en Savoie et Rhône-Alpes. Forte de plus de 15 ans d'expérience, notre équipe intervient auprès des collectivités, entreprises et particuliers.
                </p>
                <p>
                  Nous proposons des solutions complètes de <strong>marquage horizontal</strong> (lignes, passages piétons, places de parking), de <strong>signalisation verticale</strong> (panneaux, potelets) et de <strong>mobilier urbain</strong> (bancs, poubelles, abris).
                </p>
                <p>
                  Notre expertise technique et notre connaissance approfondie des normes en vigueur garantissent des prestations conformes et durables. Nous utilisons exclusivement des matériaux certifiés et respectueux de l'environnement.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-yellow-400 hover:text-black transition-all"
                >
                  Contactez-nous
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/vehicule glm.png"
                  alt="Véhicule GL Marquage - Flotte professionnelle"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-black rounded-2xl p-6 shadow-xl">
                <div className="text-4xl font-black mb-2">15+</div>
                <div className="text-sm font-bold">Ans d'expertise</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services - Clean Grid */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-1 w-16 bg-yellow-400"></div>
              <span className="text-sm text-gray-600 uppercase tracking-wider font-bold">Nos Services</span>
              <div className="h-1 w-16 bg-yellow-400"></div>
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-black mb-6 tracking-tight">
              Notre Expertise
            </h2>
            <p className="text-2xl text-gray-600 font-light max-w-3xl mx-auto">
              Des solutions professionnelles et durables pour tous vos besoins en signalisation routière et aménagement urbain
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Link href={service.href} className="group block">
                  <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                    {/* Image */}
                    <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="relative h-[600px] rounded-3xl overflow-hidden bg-gray-200 shadow-xl">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>

                      {/* Floating Number */}
                      <motion.div
                        className="absolute -top-8 -right-8 w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center shadow-2xl border-4 border-black"
                        whileHover={{ scale: 1.1, rotate: 10 }}
                      >
                        <span className="text-black text-5xl font-black">{service.number}</span>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                      <h3 className="text-5xl md:text-7xl font-black text-black mb-8 leading-none group-hover:text-yellow-600 transition-colors duration-300">
                        {service.title}
                      </h3>

                      <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed mb-12">
                        {service.description}
                      </p>

                      <div className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full group-hover:bg-yellow-400 group-hover:text-black transition-all duration-300 font-bold">
                        <span className="text-lg">Découvrir le service</span>
                        <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-black text-black mb-6">
              Pourquoi choisir GL Marquage ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une expertise reconnue, des prestations de qualité et un service client irréprochable
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {avantages.map((avantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 bg-gray-50 rounded-3xl hover:bg-yellow-400 transition-all duration-300 hover:shadow-xl"
              >
                <div className="w-16 h-16 bg-black group-hover:bg-white rounded-2xl flex items-center justify-center mb-6 transition-colors">
                  <span className="text-3xl text-yellow-400 group-hover:text-black transition-colors">{avantage.icon}</span>
                </div>
                <h3 className="text-2xl font-black text-black mb-4">
                  {avantage.title}
                </h3>
                <p className="text-gray-600 group-hover:text-black leading-relaxed">
                  {avantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Zone d'Intervention - Dark Section */}
      <section className="py-32 bg-black text-white relative overflow-hidden" style={{ perspective: '1000px' }}>
        {/* Grille 3D en perspective */}
        <div className="absolute inset-0" style={{ transformStyle: 'preserve-3d' }}>
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 214, 0, 0.15) 2px, transparent 2px),
                linear-gradient(to bottom, rgba(255, 214, 0, 0.15) 2px, transparent 2px)
              `,
              backgroundSize: '80px 80px',
              transform: 'rotateX(75deg) translateZ(-300px)',
              transformOrigin: 'center center',
            }}
            animate={{
              backgroundPosition: ['0px 0px', '80px 80px'],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Lignes de route en perspective */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-yellow-400/20"
              style={{
                left: `${12.5 * (i + 1)}%`,
                width: '3px',
                height: '100%',
                transformOrigin: 'bottom center',
                transform: `rotateX(75deg) scaleY(${1 + i * 0.2})`,
              }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>

        {/* Particules 3D flottantes */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-yellow-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -150, 0],
              x: [0, Math.random() * 100 - 50, 0],
              scale: [0, 1.5, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: 'easeInOut',
            }}
          />
        ))}

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tight">
              Zone d&apos;Intervention
            </h2>
            <p className="text-2xl text-gray-400 font-light max-w-3xl mx-auto">
              GL Marquage intervient dans toute la région Auvergne-Rhône-Alpes et en Suisse pour tous vos projets de signalisation et d'aménagement urbain
            </p>
          </motion.div>

          {/* Departments Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { code: '73', name: 'Savoie', primary: true, description: 'Zone prioritaire' },
              { code: '74', name: 'Haute-Savoie', primary: true, description: 'Zone prioritaire' },
              { code: '01', name: 'Ain', primary: false, description: 'Intervention régulière' },
              { code: '38', name: 'Isère', primary: false, description: 'Intervention régulière' }
            ].map((zone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`relative p-12 rounded-3xl text-center transition-all duration-300 ${
                  zone.primary
                    ? 'bg-gradient-to-br from-yellow-400 to-yellow-500 text-black shadow-2xl'
                    : 'bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="text-7xl font-black mb-3">{zone.code}</div>
                <div className="text-xl font-bold mb-2">{zone.name}</div>
                <div className={`text-sm ${zone.primary ? 'text-black/70' : 'text-gray-400'}`}>
                  {zone.description}
                </div>
                {zone.primary && (
                  <div className="absolute top-4 right-4 w-3 h-3 bg-black rounded-full"></div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Switzerland */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-4 px-12 py-6 bg-white/5 backdrop-blur-sm border border-yellow-400/30 rounded-full hover:bg-yellow-400/10 transition-all">
              <span className="text-4xl">🇨🇭</span>
              <div className="text-left">
                <div className="text-2xl font-bold text-yellow-400">Suisse - Genève</div>
                <div className="text-sm text-gray-400">Intervention transfrontalière</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Réalisations - Minimal Gallery */}
      <section id="realisations" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-1 w-16 bg-yellow-400"></div>
              <span className="text-sm text-gray-600 uppercase tracking-wider font-bold">Portfolio</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-black mb-6 tracking-tight">
              Nos Réalisations
            </h2>
            <p className="text-2xl text-gray-600 font-light max-w-3xl">
              Découvrez un aperçu de nos derniers chantiers : marquage routier, signalisation et aménagement urbain en Savoie et Haute-Savoie
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {realisations.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className={`relative overflow-hidden rounded-2xl cursor-pointer bg-gray-100 group ${
                  index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <div className={`relative ${index % 5 === 0 ? 'h-96' : 'h-48'}`}>
                  <Image
                    src={image}
                    alt={`Réalisation GL Marquage ${index + 1}`}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-yellow-400/20 transition-colors duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA to full portfolio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              href="/realisations"
              className="inline-block px-12 py-5 bg-linear-to-r from-yellow-400 to-yellow-500 text-black text-xl font-bold rounded-full hover:from-yellow-300 hover:to-yellow-400 transition-all shadow-2xl shadow-yellow-400/30 hover:shadow-yellow-400/50 hover:scale-105"
            >
              Voir Toutes Nos Réalisations
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact - Minimal Form */}
      <section id="contact" className="py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <h2 className="text-6xl md:text-8xl font-black text-black mb-8 tracking-tight">
              Demandez votre
              <span className="block text-yellow-400">
                devis gratuit
              </span>
            </h2>
            <p className="text-2xl text-gray-600 font-light">
              Réponse sous 24h · Déplacement gratuit · Étude personnalisée
            </p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            {[
              { icon: '📞', title: 'Téléphone', value: '06 98 74 11 99', href: 'tel:0698741199', description: 'Lun-Ven 8h-18h' },
              { icon: '📧', title: 'Email', value: 'glmarquage@gmail.com', href: 'mailto:glmarquage@gmail.com', description: 'Réponse rapide' },
              { icon: '📸', title: 'Instagram', value: '@glmarquage', href: 'https://instagram.com/glmarquage', description: 'Nos réalisations' }
            ].map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ y: -5 }}
                className="group p-8 bg-white rounded-2xl hover:bg-yellow-400 transition-all duration-300 text-center border-2 border-transparent hover:border-black shadow-lg"
              >
                <div className="text-5xl mb-4">{contact.icon}</div>
                <div className="text-sm text-gray-500 group-hover:text-black font-semibold mb-1">{contact.title}</div>
                <div className="text-lg font-black text-black mb-1">{contact.value}</div>
                <div className="text-xs text-gray-400 group-hover:text-black">{contact.description}</div>
              </motion.a>
            ))}
          </motion.div>

          {/* CTA to Contact Page */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              href="/contact"
              className="inline-block px-12 py-5 bg-linear-to-r from-yellow-400 to-yellow-500 text-black text-xl font-bold rounded-full hover:from-yellow-300 hover:to-yellow-400 transition-all shadow-2xl shadow-yellow-400/30 hover:shadow-yellow-400/50 hover:scale-105"
            >
              Contactez-Nous
            </Link>
          </motion.div>

          {/* Hidden Form - Keep for structure */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="hidden bg-white rounded-3xl p-12 shadow-xl border-2 border-gray-100"
          >
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-black mb-3">Prénom *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 outline-none transition-all text-lg"
                    placeholder="Jean"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-black mb-3">Nom *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 outline-none transition-all text-lg"
                    placeholder="Dupont"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-black mb-3">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 outline-none transition-all text-lg"
                    placeholder="jean.dupont@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-black mb-3">Téléphone *</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 outline-none transition-all text-lg"
                    placeholder="06 12 34 56 78"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-black mb-3">Service concerné *</label>
                <select
                  required
                  className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 outline-none transition-all text-lg"
                >
                  <option value="">Sélectionnez un service</option>
                  <option>Signalisation Horizontale (Marquage au sol)</option>
                  <option>Signalisation Verticale (Panneaux)</option>
                  <option>Mobilier Urbain</option>
                  <option>Autre / Renseignement</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-black mb-3">Décrivez votre projet *</label>
                <textarea
                  required
                  rows={6}
                  className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 outline-none transition-all resize-none text-lg"
                  placeholder="Décrivez votre besoin : type de marquage, surface, localisation, délais..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-12 py-6 bg-black text-white rounded-full text-lg font-bold hover:bg-yellow-400 hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-black"
              >
                Envoyer ma demande de devis
              </motion.button>

              <p className="text-sm text-gray-500 text-center">
                En soumettant ce formulaire, vous acceptez d'être contacté par GL Marquage concernant votre demande.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
