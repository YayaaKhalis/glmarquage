'use client';

import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Realisations() {
  const projets = [
    {
      title: 'Marquage Parking Commercial',
      category: 'Signalisation Horizontale',
      location: 'Chambéry, Savoie',
      description: 'Réfection complète du marquage d\'un parking de 200 places avec lignes, flèches et zébras.',
      image: '/IMG_2363.jpeg',
    },
    {
      title: 'Signalisation Zone Industrielle',
      category: 'Signalisation Verticale',
      location: 'Annecy, Haute-Savoie',
      description: 'Installation de panneaux directionnels et de sécurité pour une zone d\'activité de 50 hectares.',
      image: '/IMG_5576.jpg',
    },
    {
      title: 'Aménagement Urbain Centre-Ville',
      category: 'Mobilier Urbain',
      location: 'Aix-les-Bains, Savoie',
      description: 'Pose de potelets, barrières et mobilier urbain pour sécuriser une zone piétonne de 2000m².',
      image: '/IMG_2363.jpeg',
    },
    {
      title: 'Marquage Piste Cyclable',
      category: 'Signalisation Horizontale',
      location: 'Grenoble, Isère',
      description: 'Création de pistes cyclables avec marquage thermoplastique et signalisation dédiée sur 5km.',
      image: '/IMG_5576.jpg',
    },
    {
      title: 'Signalisation Temporaire Chantier',
      category: 'Signalisation Verticale',
      location: 'Genève, Suisse',
      description: 'Mise en place de signalisation temporaire pour travaux routiers de grande envergure.',
      image: '/IMG_2363.jpeg',
    },
    {
      title: 'Équipement Zone Scolaire',
      category: 'Mobilier Urbain',
      location: 'Albertville, Savoie',
      description: 'Sécurisation d\'abords d\'école avec ralentisseurs, panneaux et barrières de protection.',
      image: '/IMG_5576.jpg',
    },
  ];

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
            Nos
            <span className="block text-yellow-400">Réalisations</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl lg:text-2xl text-slate-300 max-w-3xl"
          >
            Découvrez nos projets de marquage au sol et signalisation en Savoie et Rhône-Alpes
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projets.map((projet, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100"
              >
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <Image
                    src={projet.image}
                    alt={projet.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-yellow-400 text-black text-sm font-bold rounded-full">
                      {projet.category}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-sm text-yellow-600 font-semibold mb-2">{projet.location}</p>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-600 transition-colors">
                    {projet.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {projet.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-12 text-center">
            {[
              { number: '500+', label: 'Projets Réalisés' },
              { number: '15+', label: 'Années d\'Expérience' },
              { number: '100%', label: 'Clients Satisfaits' },
              { number: '5', label: 'Départements Couverts' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-6xl font-bold text-yellow-400 mb-4">{stat.number}</div>
                <div className="text-xl text-slate-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8">
            Un Projet en Tête ?
          </h2>
          <p className="text-xl text-slate-600 mb-12">
            Contactez-nous pour discuter de votre projet et obtenir un devis gratuit
          </p>
          <Link
            href="/contact"
            className="inline-block px-12 py-5 bg-linear-to-r from-yellow-400 to-yellow-500 text-black text-xl font-bold rounded-full hover:from-yellow-300 hover:to-yellow-400 transition-all shadow-2xl shadow-yellow-400/30 hover:shadow-yellow-400/50 hover:scale-105"
          >
            Demander un Devis
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
