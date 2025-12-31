'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-yellow-400/10 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 py-32">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl lg:text-8xl font-bold mb-6"
          >
            Contactez
            <span className="block text-yellow-400">-Nous</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl lg:text-2xl text-slate-300 max-w-3xl"
          >
            Demandez votre devis gratuit ou posez-nous vos questions
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8">Nos Coordonnées</h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Téléphone</h3>
                    <a href="tel:0698741199" className="text-lg text-slate-600 hover:text-yellow-600 transition-colors">
                      06 98 74 11 99
                    </a>
                    <p className="text-sm text-slate-500 mt-1">Du lundi au vendredi, 8h - 18h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Email</h3>
                    <a href="mailto:glmarquage@gmail.com" className="text-lg text-slate-600 hover:text-yellow-600 transition-colors break-all">
                      glmarquage@gmail.com
                    </a>
                    <p className="text-sm text-slate-500 mt-1">Réponse sous 24h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Zone d'Intervention</h3>
                    <div className="text-lg text-slate-600 space-y-1">
                      <p>• Savoie (73)</p>
                      <p>• Haute-Savoie (74)</p>
                      <p>• Ain (01)</p>
                      <p>• Isère (38)</p>
                      <p>• Suisse - Genève</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📸</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Instagram</h3>
                    <a
                      href="https://instagram.com/glmarquage"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-slate-600 hover:text-yellow-600 transition-colors"
                    >
                      @glmarquage
                    </a>
                    <p className="text-sm text-slate-500 mt-1">Suivez nos réalisations</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-10 rounded-3xl"
            >
              <h2 className="text-4xl font-bold mb-8">Demande de Devis</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nom" className="block text-sm font-semibold text-slate-700 mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    required
                    value={formData.nom}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white border-2 border-slate-200 rounded-2xl focus:border-yellow-400 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white border-2 border-slate-200 rounded-2xl focus:border-yellow-400 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="telephone" className="block text-sm font-semibold text-slate-700 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    required
                    value={formData.telephone}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white border-2 border-slate-200 rounded-2xl focus:border-yellow-400 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">
                    Service Demandé *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white border-2 border-slate-200 rounded-2xl focus:border-yellow-400 focus:outline-none transition-colors"
                  >
                    <option value="">Sélectionnez un service</option>
                    <option value="horizontale">Signalisation Horizontale</option>
                    <option value="verticale">Signalisation Verticale</option>
                    <option value="mobilier">Mobilier Urbain</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                    Votre Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white border-2 border-slate-200 rounded-2xl focus:border-yellow-400 focus:outline-none transition-colors resize-none"
                    placeholder="Décrivez votre projet..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-12 py-5 bg-linear-to-r from-yellow-400 to-yellow-500 text-black text-xl font-bold rounded-full hover:from-yellow-300 hover:to-yellow-400 transition-all shadow-2xl shadow-yellow-400/30 hover:shadow-yellow-400/50 hover:scale-[1.02]"
                >
                  Envoyer ma Demande
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section - Placeholder */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-bold mb-12 text-center">Notre Zone d'Intervention</h2>
          <div className="bg-slate-200 rounded-3xl h-96 flex items-center justify-center">
            <p className="text-slate-600 text-lg">
              Carte à venir - Nous intervenons en Savoie, Haute-Savoie, Ain, Isère et région de Genève
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
