'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

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
      description: 'Marquage au sol pour parkings, voirie et zones industrielles. Lignes, passages piétons, zébras et tous types de marquage routier.',
      image: '/IMG_0133.jpeg',
      href: '/signalisation-horizontale',
      number: '01'
    },
    {
      title: 'Signalisation Verticale',
      description: 'Panneaux de signalisation, totems de ville et potelets de sécurité. Installation et maintenance.',
      image: '/IMG_2363.jpeg',
      href: '/signalisation-verticale',
      number: '02'
    },
    {
      title: 'Mobilier Urbain',
      description: 'Poubelles, bancs publics et équipements urbains. Solutions durables pour l\'aménagement urbain.',
      image: '/IMG_5564.jpg',
      href: '/mobilier-urbain',
      number: '03'
    }
  ];

  const stats = [
    { value: '500+', label: 'Projets' },
    { value: '15+', label: 'Années' },
    { value: '5', label: 'Départements' },
    { value: '100%', label: 'Satisfaction' }
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

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Minimalist & Bold */}
      <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
        {/* Background Elements */}
        <motion.div
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute top-20 right-0 w-[800px] h-[800px] bg-gradient-to-br from-orange-100/40 to-yellow-100/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-orange-50/50 to-transparent rounded-full blur-3xl"></div>
        </motion.div>

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
              className="inline-flex items-center gap-2 px-5 py-2 bg-black rounded-full mb-12"
            >
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-white text-sm font-medium tracking-wide">Expert depuis 2010</span>
            </motion.div>

            {/* Main Title - Very Large & Bold */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-[5rem] md:text-[8rem] lg:text-[12rem] font-black leading-[0.85] tracking-tighter mb-8"
            >
              <span className="block text-black">GL</span>
              <span className="block bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Marquage
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-3xl text-slate-600 font-light max-w-3xl mx-auto mb-16 leading-relaxed"
            >
              Signalisation professionnelle et mobilier urbain
              <span className="block mt-2 text-lg text-slate-400">Savoie · Haute-Savoie · Suisse</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-12 py-6 bg-black text-white rounded-full text-lg font-semibold hover:bg-orange-600 transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-2xl"
              >
                Devis gratuit
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.a>

              <motion.a
                href="tel:0698741199"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 bg-white border-2 border-black text-black rounded-full text-lg font-semibold hover:bg-black hover:text-white transition-all duration-300 shadow-lg"
              >
                06 98 74 11 99
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-32 pt-16 border-t border-slate-200"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl md:text-6xl font-black text-black mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">
                    {stat.label}
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
            className="w-6 h-10 border-2 border-black rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-black rounded-full"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Services - Clean Grid */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-16 bg-orange-500"></div>
              <span className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Services</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-black mb-6 tracking-tight">
              Notre Expertise
            </h2>
            <p className="text-2xl text-slate-600 font-light max-w-2xl">
              Des solutions complètes pour tous vos besoins en signalisation
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
                      <div className="relative h-[600px] rounded-3xl overflow-hidden bg-slate-100">
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
                        className="absolute -top-8 -right-8 w-32 h-32 bg-orange-500 rounded-full flex items-center justify-center shadow-2xl"
                        whileHover={{ scale: 1.1, rotate: 10 }}
                      >
                        <span className="text-white text-5xl font-black">{service.number}</span>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                      <h3 className="text-5xl md:text-7xl font-black text-black mb-8 leading-none group-hover:text-orange-600 transition-colors duration-300">
                        {service.title}
                      </h3>

                      <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-12">
                        {service.description}
                      </p>

                      <div className="inline-flex items-center gap-3 text-black group-hover:gap-5 transition-all duration-300">
                        <span className="text-lg font-semibold">Découvrir</span>
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

      {/* Zone d'Intervention - Dark Section */}
      <section className="py-40 bg-black text-white relative overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}
          ></div>
        </div>

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
            <p className="text-2xl text-slate-400 font-light max-w-2xl mx-auto">
              Nous intervenons en Savoie, Haute-Savoie, Isère, Ain et Suisse
            </p>
          </motion.div>

          {/* Departments Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { code: '73', name: 'Savoie', primary: true },
              { code: '74', name: 'Haute-Savoie', primary: true },
              { code: '01', name: 'Ain', primary: false },
              { code: '38', name: 'Isère', primary: false }
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
                    ? 'bg-gradient-to-br from-orange-600 to-orange-500 shadow-2xl'
                    : 'bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="text-7xl font-black mb-3">{zone.code}</div>
                <div className="text-xl font-semibold">{zone.name}</div>
                {zone.primary && (
                  <div className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full"></div>
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
            <div className="inline-flex items-center gap-4 px-12 py-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white/10 transition-all">
              <span className="text-4xl">🇨🇭</span>
              <span className="text-2xl font-bold">Suisse - Genève</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Réalisations - Minimal Gallery */}
      <section id="realisations" className="py-40 bg-white">
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
              <div className="h-px w-16 bg-orange-500"></div>
              <span className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Portfolio</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-black mb-6 tracking-tight">
              Réalisations
            </h2>
            <p className="text-2xl text-slate-600 font-light max-w-2xl">
              Un aperçu de nos projets récents
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {realisations.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className={`relative overflow-hidden rounded-2xl cursor-pointer bg-slate-100 ${
                  index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <div className={`relative ${index % 5 === 0 ? 'h-96' : 'h-48'}`}>
                  <Image
                    src={image}
                    alt={`Réalisation ${index + 1}`}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact - Minimal Form */}
      <section id="contact" className="py-40 bg-slate-50">
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
              Parlons de
              <span className="block bg-gradient-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent">
                votre projet
              </span>
            </h2>
            <p className="text-2xl text-slate-600 font-light">
              Devis gratuit sous 24h
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
              { icon: '📞', title: 'Téléphone', value: '06 98 74 11 99', href: 'tel:0698741199' },
              { icon: '📧', title: 'Email', value: 'glmarquage@gmail.com', href: 'mailto:glmarquage@gmail.com' },
              { icon: '📸', title: 'Instagram', value: '@glmarquage', href: 'https://instagram.com/glmarquage' }
            ].map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ y: -5 }}
                className="group p-8 bg-white rounded-2xl hover:shadow-xl transition-all duration-300 text-center border border-slate-100"
              >
                <div className="text-5xl mb-4">{contact.icon}</div>
                <div className="text-sm text-slate-500 font-semibold mb-1">{contact.title}</div>
                <div className="text-lg font-bold text-black group-hover:text-orange-600 transition-colors">{contact.value}</div>
              </motion.a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-12 shadow-lg border border-slate-100"
          >
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-black mb-3">Prénom</label>
                  <input
                    type="text"
                    required
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition-all text-lg"
                    placeholder="Jean"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-black mb-3">Nom</label>
                  <input
                    type="text"
                    required
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition-all text-lg"
                    placeholder="Dupont"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-black mb-3">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition-all text-lg"
                    placeholder="jean.dupont@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-black mb-3">Téléphone</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition-all text-lg"
                    placeholder="06 12 34 56 78"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-3">Service</label>
                <select
                  required
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition-all text-lg"
                >
                  <option value="">Sélectionnez un service</option>
                  <option>Signalisation Horizontale</option>
                  <option>Signalisation Verticale</option>
                  <option>Mobilier Urbain</option>
                  <option>Autre</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-3">Message</label>
                <textarea
                  required
                  rows={6}
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition-all resize-none text-lg"
                  placeholder="Décrivez votre projet..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-12 py-6 bg-black text-white rounded-full text-lg font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Envoyer ma demande
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
