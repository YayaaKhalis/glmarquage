'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionDivider from '@/components/SectionDivider';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [activeField, setActiveField] = useState<string | null>(null);

  const contactMethods = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Téléphone',
      value: '06 98 74 11 99',
      href: 'tel:0698741199',
      description: 'Lun-Ven 8h-18h',
      color: 'from-emerald-400 to-teal-500',
      hoverBg: 'group-hover:bg-emerald-500/10'
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      value: 'glmarquage@gmail.com',
      href: 'mailto:glmarquage@gmail.com',
      description: 'Réponse sous 24h',
      color: 'from-blue-400 to-indigo-500',
      hoverBg: 'group-hover:bg-blue-500/10'
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Zone d\'intervention',
      value: 'Savoie & Rhône-Alpes',
      href: null,
      description: 'Déplacement gratuit',
      color: 'from-amber-400 to-orange-500',
      hoverBg: 'group-hover:bg-amber-500/10'
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      title: 'Instagram',
      value: '@glmarquage',
      href: 'https://instagram.com/glmarquage',
      description: 'Nos réalisations',
      color: 'from-pink-400 to-rose-500',
      hoverBg: 'group-hover:bg-pink-500/10'
    }
  ];

  const zones = [
    { code: '73', name: 'Savoie', cities: 'Chambéry, Aix-les-Bains, Albertville...' },
    { code: '74', name: 'Haute-Savoie', cities: 'Annecy, Annemasse, Thonon...' },
    { code: '01', name: 'Ain', cities: 'Bourg-en-Bresse, Oyonnax, Belley...' },
    { code: '38', name: 'Isère', cities: 'Grenoble, Voiron, Bourgoin...' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Immersive & Modern */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-black overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
          
          {/* Animated gradient orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-yellow-400/20 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-60 -left-40 w-[500px] h-[500px] bg-yellow-500/15 rounded-full blur-[100px]"
          />
          
          {/* Grid pattern overlay */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tight leading-[0.95]">
              Parlons de
              <span className="block mt-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500">
                  votre projet
                </span>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-12">
              Une question ? Un devis ? Notre équipe est disponible pour vous accompagner 
              dans tous vos projets de signalisation et d'aménagement urbain.
            </p>

            {/* Quick CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:0698741199"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-black rounded-2xl font-bold text-lg shadow-2xl shadow-yellow-500/25 hover:shadow-yellow-500/40 transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Appeler maintenant
              </motion.a>
              <motion.a
                href="#form"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/20 text-white rounded-2xl font-bold text-lg hover:bg-white/10 hover:border-white/30 transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                Demander un devis
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider - Below Hero */}
      <SectionDivider variant="masterpiece" />

      {/* Contact Form Section */}
      <section id="form" className="py-32 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-yellow-50 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-32"
            >
              <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-bold mb-6">
                Devis gratuit
              </span>
              
              <h2 className="text-5xl md:text-6xl font-black text-black mb-6 leading-[1.1]">
                Décrivez-nous
                <span className="block text-yellow-500">votre projet</span>
              </h2>
              
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Remplissez ce formulaire et recevez un devis personnalisé sous 24h. 
                Aucun engagement, 100% gratuit.
              </p>

              {/* Contact info list */}
              <div className="space-y-5">
                {[
                  { icon: '📞', text: '06 98 74 11 99', href: 'tel:0698741199' },
                  { icon: '✉️', text: 'glmarquage@gmail.com', href: 'mailto:glmarquage@gmail.com' },
                  { icon: '📸', text: '@glmarquage', href: 'https://instagram.com/glmarquage' },
                  { icon: '📍', text: 'Auvergne-Rhône-Alpes', href: null }
                ].map((contact, i) => (
                  contact.href ? (
                    <motion.a
                      key={i}
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4 p-3 rounded-2xl hover:bg-gray-100 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-transform">
                        {contact.icon}
                      </div>
                      <span className="text-lg font-bold text-gray-800 group-hover:text-yellow-600 transition-colors">{contact.text}</span>
                    </motion.a>
                  ) : (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4 p-3 rounded-2xl"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-xl shadow-lg">
                        {contact.icon}
                      </div>
                      <span className="text-lg font-bold text-gray-800">{contact.text}</span>
                    </motion.div>
                  )
                ))}
              </div>
            </motion.div>

            {/* Right Column - Liquid Glass Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="relative">
                {/* Outer glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/30 via-amber-400/20 to-orange-400/30 rounded-[2rem] blur-xl" />
                
                {/* Liquid Glass Form Card */}
                <div className="relative bg-white/80 backdrop-blur-2xl rounded-[2rem] p-8 lg:p-10 shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-white/50">
                  {/* Inner sheen gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-white/40 rounded-[2rem] pointer-events-none" />
                  
                  {/* Form header */}
                  <div className="relative text-center mb-8">
                    <h3 className="text-2xl font-black text-gray-900">Envoyez-nous un message</h3>
                  </div>
                  
                  {/* Form fields */}
                  <div className="relative space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="block text-sm font-bold text-gray-600">Prénom *</label>
                        <input
                          type="text"
                          required
                          onFocus={() => setActiveField('prenom')}
                          onBlur={() => setActiveField(null)}
                          className={`w-full px-5 py-4 bg-white/70 backdrop-blur-xl border-2 rounded-2xl outline-none transition-all text-base font-medium placeholder:text-gray-400 ${
                            activeField === 'prenom' 
                              ? 'border-yellow-400 bg-white shadow-lg shadow-yellow-100/50 ring-4 ring-yellow-50' 
                              : 'border-gray-200/60 hover:border-gray-300'
                          }`}
                          placeholder="Jean"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-bold text-gray-600">Nom *</label>
                        <input
                          type="text"
                          required
                          onFocus={() => setActiveField('nom')}
                          onBlur={() => setActiveField(null)}
                          className={`w-full px-5 py-4 bg-white/70 backdrop-blur-xl border-2 rounded-2xl outline-none transition-all text-base font-medium placeholder:text-gray-400 ${
                            activeField === 'nom' 
                              ? 'border-yellow-400 bg-white shadow-lg shadow-yellow-100/50 ring-4 ring-yellow-50' 
                              : 'border-gray-200/60 hover:border-gray-300'
                          }`}
                          placeholder="Dupont"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="block text-sm font-bold text-gray-600">Email *</label>
                        <input
                          type="email"
                          required
                          onFocus={() => setActiveField('email')}
                          onBlur={() => setActiveField(null)}
                          className={`w-full px-5 py-4 bg-white/70 backdrop-blur-xl border-2 rounded-2xl outline-none transition-all text-base font-medium placeholder:text-gray-400 ${
                            activeField === 'email' 
                              ? 'border-yellow-400 bg-white shadow-lg shadow-yellow-100/50 ring-4 ring-yellow-50' 
                              : 'border-gray-200/60 hover:border-gray-300'
                          }`}
                          placeholder="jean@exemple.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-bold text-gray-600">Téléphone *</label>
                        <input
                          type="tel"
                          required
                          onFocus={() => setActiveField('tel')}
                          onBlur={() => setActiveField(null)}
                          className={`w-full px-5 py-4 bg-white/70 backdrop-blur-xl border-2 rounded-2xl outline-none transition-all text-base font-medium placeholder:text-gray-400 ${
                            activeField === 'tel' 
                              ? 'border-yellow-400 bg-white shadow-lg shadow-yellow-100/50 ring-4 ring-yellow-50' 
                              : 'border-gray-200/60 hover:border-gray-300'
                          }`}
                          placeholder="06 12 34 56 78"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-gray-600">Service concerné *</label>
                      <select
                        required
                        onFocus={() => setActiveField('service')}
                        onBlur={() => setActiveField(null)}
                        className={`w-full px-5 py-4 bg-white/70 backdrop-blur-xl border-2 rounded-2xl outline-none transition-all text-base font-medium appearance-none cursor-pointer ${
                          activeField === 'service' 
                            ? 'border-yellow-400 bg-white shadow-lg shadow-yellow-100/50 ring-4 ring-yellow-50' 
                            : 'border-gray-200/60 hover:border-gray-300'
                        }`}
                      >
                        <option value="">Sélectionnez un service</option>
                        <option>Signalisation Horizontale (Marquage au sol)</option>
                        <option>Signalisation Verticale (Panneaux)</option>
                        <option>Mobilier Urbain</option>
                        <option>Autre / Renseignement</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-gray-600">Décrivez votre projet *</label>
                      <textarea
                        required
                        rows={4}
                        onFocus={() => setActiveField('message')}
                        onBlur={() => setActiveField(null)}
                        className={`w-full px-5 py-4 bg-white/70 backdrop-blur-xl border-2 rounded-2xl outline-none transition-all resize-none text-base font-medium placeholder:text-gray-400 ${
                          activeField === 'message' 
                            ? 'border-yellow-400 bg-white shadow-lg shadow-yellow-100/50 ring-4 ring-yellow-50' 
                            : 'border-gray-200/60 hover:border-gray-300'
                        }`}
                        placeholder="Type de marquage, surface estimée, localisation, délais souhaités..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative w-full px-8 py-5 rounded-2xl text-lg font-black transition-all overflow-hidden mt-6 ${
                      formStatus === 'success'
                        ? 'bg-green-500 text-white'
                        : 'bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 text-black hover:shadow-xl hover:shadow-yellow-400/30'
                    }`}
                  >
                    <AnimatePresence mode="wait">
                      {formStatus === 'idle' && (
                        <motion.span
                          key="idle"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-center justify-center gap-3"
                        >
                          Envoyer ma demande
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </motion.span>
                      )}
                      {formStatus === 'sending' && (
                        <motion.span
                          key="sending"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-center justify-center gap-3"
                        >
                          <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Envoi en cours...
                        </motion.span>
                      )}
                      {formStatus === 'success' && (
                        <motion.span
                          key="success"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-center justify-center gap-3"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Message envoyé !
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>

                  <p className="text-sm text-gray-500 text-center mt-6">
                    En soumettant ce formulaire, vous acceptez d'être contacté par GL Marquage.
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Zone d'intervention - Modern Map Style */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-yellow-400/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-white/70 mb-6">
              🗺️ Zone de couverture
            </span>
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              Nous intervenons
              <span className="block text-yellow-400">en Auvergne-Rhône-Alpes</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              De la Savoie à la Suisse, nous nous déplaçons gratuitement pour évaluer votre projet
            </p>
          </motion.div>

          {/* Zone Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {zones.map((zone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative p-8 rounded-3xl overflow-hidden transition-all duration-500 bg-gradient-to-br from-yellow-400 via-yellow-400 to-amber-500 text-black"
              >
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
                }} />
                
                <div className="text-7xl font-black mb-3 text-black">
                  {zone.code}
                </div>
                <div className="text-2xl font-bold mb-2 text-black">
                  {zone.name}
                </div>
                <div className="text-sm text-black/70">
                  {zone.cities}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Switzerland Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="inline-flex items-center gap-6 px-10 py-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:border-yellow-400/30 transition-all">
              <span className="text-5xl">🇨🇭</span>
              <div>
                <div className="text-2xl font-bold text-yellow-400">Suisse - Genève</div>
                <div className="text-gray-400">Intervention transfrontalière disponible</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-yellow-400 via-yellow-400 to-amber-500 relative overflow-hidden">
        {/* Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-black mb-6">
              Prêt à démarrer ?
            </h2>
            <p className="text-xl text-black/70 mb-10 max-w-xl mx-auto">
              Appelez-nous directement ou envoyez-nous un message. Nous répondons toujours sous 24h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:0698741199"
                className="inline-flex items-center gap-3 px-10 py-5 bg-black text-yellow-400 rounded-2xl font-black text-lg hover:bg-gray-900 transition-all shadow-xl"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                06 98 74 11 99
              </Link>
              <a
                href="mailto:glmarquage@gmail.com"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white/20 backdrop-blur-sm text-black rounded-2xl font-black text-lg hover:bg-white/30 transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Envoyer un email
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
