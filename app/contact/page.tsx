'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Contact() {
  const contactInfo = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Téléphone',
      value: '06 98 74 11 99',
      href: 'tel:0698741199',
      description: 'Lun-Ven 8h-18h'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      value: 'glmarquage@gmail.com',
      href: 'mailto:glmarquage@gmail.com',
      description: 'Réponse rapide'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Zone d\'intervention',
      value: 'Savoie & Rhône-Alpes',
      href: null,
      description: 'Déplacement gratuit'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      title: 'Instagram',
      value: '@glmarquage',
      href: 'https://instagram.com/glmarquage',
      description: 'Nos réalisations'
    }
  ];

  const zones = [
    { code: '73', name: 'Savoie', primary: true },
    { code: '74', name: 'Haute-Savoie', primary: true },
    { code: '01', name: 'Ain', primary: false },
    { code: '38', name: 'Isère', primary: false }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight leading-[1.1]">
              Contactez
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500">
                Nous
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Une question ? Un projet ? Contactez GL Marquage pour un <strong className="text-yellow-400">devis gratuit sous 24h</strong>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {contact.href ? (
                  <a
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group block p-8 bg-white rounded-3xl hover:bg-yellow-400 transition-all duration-300 shadow-xl hover:shadow-2xl h-full"
                  >
                    <div className="text-yellow-400 group-hover:text-black transition-colors mb-4">
                      {contact.icon}
                    </div>
                    <div className="text-sm text-gray-500 group-hover:text-black font-semibold mb-1 uppercase tracking-wide">
                      {contact.title}
                    </div>
                    <div className="text-xl font-black text-black mb-1">{contact.value}</div>
                    <div className="text-sm text-gray-400 group-hover:text-black/70">{contact.description}</div>
                  </a>
                ) : (
                  <div className="p-8 bg-white rounded-3xl shadow-xl h-full">
                    <div className="text-yellow-400 mb-4">{contact.icon}</div>
                    <div className="text-sm text-gray-500 font-semibold mb-1 uppercase tracking-wide">
                      {contact.title}
                    </div>
                    <div className="text-xl font-black text-black mb-1">{contact.value}</div>
                    <div className="text-sm text-gray-400">{contact.description}</div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-black mb-6">
              Demandez votre Devis
            </h2>
            <p className="text-xl text-gray-600">
              Remplissez le formulaire ci-dessous et nous vous répondrons sous 24h
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-3xl p-8 lg:p-12 shadow-xl"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-bold text-black mb-3">Prénom *</label>
                <input
                  type="text"
                  required
                  className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 outline-none transition-all text-lg"
                  placeholder="Jean"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-black mb-3">Nom *</label>
                <input
                  type="text"
                  required
                  className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 outline-none transition-all text-lg"
                  placeholder="Dupont"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-bold text-black mb-3">Email *</label>
                <input
                  type="email"
                  required
                  className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 outline-none transition-all text-lg"
                  placeholder="jean.dupont@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-black mb-3">Téléphone *</label>
                <input
                  type="tel"
                  required
                  className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 outline-none transition-all text-lg"
                  placeholder="06 12 34 56 78"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-bold text-black mb-3">Service concerné *</label>
              <select
                required
                className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 outline-none transition-all text-lg"
              >
                <option value="">Sélectionnez un service</option>
                <option>Signalisation Horizontale (Marquage au sol)</option>
                <option>Signalisation Verticale (Panneaux)</option>
                <option>Mobilier Urbain</option>
                <option>Autre / Renseignement</option>
              </select>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-bold text-black mb-3">Décrivez votre projet *</label>
              <textarea
                required
                rows={6}
                className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 outline-none transition-all resize-none text-lg"
                placeholder="Décrivez votre besoin : type de marquage, surface, localisation, délais..."
              ></textarea>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-12 py-6 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-full text-lg font-black hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 shadow-2xl hover:shadow-3xl"
            >
              Envoyer ma demande de devis
            </motion.button>

            <p className="text-sm text-gray-500 text-center mt-6">
              En soumettant ce formulaire, vous acceptez d'être contacté par GL Marquage concernant votre demande.
            </p>
          </motion.form>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              Nos Zones d'Intervention
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              GL Marquage intervient dans toute la région Auvergne-Rhône-Alpes et en Suisse
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
                className={`p-12 rounded-3xl text-center transition-all ${
                  zone.primary
                    ? 'bg-gradient-to-br from-yellow-400 to-yellow-500 text-black shadow-2xl'
                    : 'bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10'
                }`}
              >
                <div className={`text-7xl font-black mb-2 ${zone.primary ? 'text-black' : 'text-yellow-400'}`}>
                  {zone.code}
                </div>
                <div className={`text-2xl font-bold ${zone.primary ? 'text-black' : 'text-white'}`}>
                  {zone.name}
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

      <Footer />
    </div>
  );
}
