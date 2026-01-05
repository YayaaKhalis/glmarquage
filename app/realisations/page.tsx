'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Lightbox from '@/components/Lightbox';
import { Eye, MapPin } from 'lucide-react';

export default function Realisations() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const categories = [
    { id: 'all', label: 'Toutes' },
    { id: 'horizontale', label: 'Marquage au Sol' },
    { id: 'verticale', label: 'Signalisation Verticale' },
    { id: 'mobilier', label: 'Mobilier Urbain' }
  ];

  const realisations = [
    { id: 1, image: '/IMG_0133.jpeg', title: 'Marquage Parking', category: 'horizontale', location: 'Chambéry (73)' },
    { id: 2, image: '/IMG_0134.jpeg', title: 'Places PMR', category: 'horizontale', location: 'Annecy (74)' },
    { id: 3, image: '/IMG_2327.jpeg', title: 'Marquage Routier', category: 'horizontale', location: 'Aix-les-Bains (73)' },
    { id: 4, image: '/IMG_2363.jpeg', title: 'Signalisation Voirie', category: 'horizontale', location: 'Albertville (73)' },
    { id: 5, image: '/passages-pietons-glm-marquage-au-sol.png', title: 'Passage Piéton', category: 'horizontale', location: 'Annemasse (74)' },
    { id: 6, image: '/IMG_5564.jpg', title: 'Marquage Industriel', category: 'horizontale', location: 'Savoie (73)' },
    { id: 7, image: '/IMG_5576.jpg', title: 'Zone de Stockage', category: 'horizontale', location: 'Haute-Savoie (74)' },
    { id: 8, image: '/IMG_8591.jpeg', title: 'Marquage Décoratif', category: 'horizontale', location: 'Chambéry (73)' },
    { id: 9, image: '/singalisationverticale.jpg', title: 'Panneaux Routiers', category: 'verticale', location: 'Savoie (73)' },
    { id: 10, image: '/mobilierUrbain.png', title: 'Mobilier Urbain', category: 'mobilier', location: 'Annecy (74)' },
  ];

  const filteredRealisations = selectedCategory === 'all'
    ? realisations
    : realisations.filter(r => r.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/IMG_0134.jpeg"
            alt="Réalisations GL Marquage"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight leading-[1.1]">
              Nos
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500">
                Réalisations
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Découvrez nos derniers projets de <strong className="text-yellow-400">marquage au sol</strong>,
              <strong className="text-yellow-400"> signalisation</strong> et <strong className="text-yellow-400">aménagement urbain</strong> en Savoie et Rhône-Alpes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-8 py-4 rounded-full font-bold text-lg transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black shadow-xl scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid avec Lightbox */}
      <section className="py-32 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredRealisations.map((realisation, index) => (
              <motion.div
                key={realisation.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => {
                  const filteredIndex = filteredRealisations.findIndex(r => r.id === realisation.id);
                  setSelectedImageIndex(filteredIndex);
                  setLightboxOpen(true);
                }}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer relative"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={realisation.image}
                    alt={realisation.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Bouton "Voir" au centre - apparaît au hover */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                  >
                    <div className="flex items-center gap-2 px-6 py-3 bg-yellow-400 text-black rounded-full font-black shadow-2xl">
                      <Eye className="w-5 h-5" />
                      <span>Voir en grand</span>
                    </div>
                  </motion.div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-black mb-2 group-hover:text-yellow-400 transition-colors">
                      {realisation.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-white/80">
                      <MapPin className="w-4 h-4" />
                      {realisation.location}
                    </div>
                  </div>

                  {/* Badge de catégorie */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs font-bold text-white border border-white/20">
                    {realisation.category === 'horizontale' ? 'Marquage' : realisation.category === 'verticale' ? 'Signalisation' : 'Mobilier'}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredRealisations.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-400">Aucune réalisation dans cette catégorie.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={filteredRealisations.map(r => r.image)}
        currentIndex={selectedImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        titles={filteredRealisations.map(r => r.title)}
        descriptions={filteredRealisations.map(r => r.location)}
      />

      {/* CTA Section */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-8">
              Votre projet
              <span className="block text-yellow-400">sera le prochain ?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Confiez-nous votre projet de signalisation et d'aménagement urbain. Devis gratuit sous 24h.
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
