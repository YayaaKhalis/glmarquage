'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroBentoGrid() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #FCD34D 1px, transparent 1px),
                           linear-gradient(to bottom, #FCD34D 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="relative z-10 max-w-[1800px] mx-auto px-6 lg:px-12 py-20 min-h-screen flex items-center">
        <div className="grid grid-cols-12 gap-4 md:gap-6 w-full">

          {/* Main Title - Large Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="col-span-12 md:col-span-7 row-span-2 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-3xl md:rounded-[3rem] p-8 md:p-16 relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-black/20"
              animate={{
                background: [
                  'radial-gradient(circle at 0% 0%, rgba(0,0,0,0.4) 0%, transparent 50%)',
                  'radial-gradient(circle at 100% 100%, rgba(0,0,0,0.4) 0%, transparent 50%)',
                  'radial-gradient(circle at 0% 0%, rgba(0,0,0,0.4) 0%, transparent 50%)',
                ]
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-sm md:text-base font-bold uppercase tracking-wider text-black/60 mb-4"
              >
                Expert depuis 15 ans
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl md:text-7xl lg:text-8xl font-black text-black leading-[0.9] mb-6"
              >
                GL<br/>MARQUAGE
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-xl md:text-2xl font-bold text-black/80 mb-8 max-w-lg"
              >
                Signalisation routière & marquage au sol en Savoie et Rhône-Alpes
              </motion.p>
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-black text-yellow-400 rounded-full text-lg font-black hover:bg-black/90 transition-all"
              >
                Devis gratuit
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.a>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute top-1/4 right-10 w-32 h-32 bg-black/10 rounded-full blur-2xl"
              animate={{
                y: [0, -30, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* Stats Card 1 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="col-span-6 md:col-span-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-white/10 transition-all group"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="text-6xl md:text-7xl font-black text-yellow-400 mb-2">500+</div>
            <div className="text-lg font-bold text-white/80">Projets réalisés</div>
            <div className="text-sm text-white/50 mt-2">En Savoie et Rhône-Alpes</div>
          </motion.div>

          {/* Stats Card 2 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="col-span-6 md:col-span-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-white/10 transition-all group"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="text-6xl md:text-7xl font-black text-yellow-400 mb-2">100%</div>
            <div className="text-lg font-bold text-white/80">Satisfaction client</div>
            <div className="text-sm text-white/50 mt-2">Garantie qualité</div>
          </motion.div>

          {/* Services Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="col-span-12 md:col-span-7 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8"
          >
            <h3 className="text-2xl font-black mb-6">Nos Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: '🛣️', title: 'Marquage Horizontal', desc: 'Lignes, passages piétons' },
                { icon: '🚦', title: 'Signalisation Verticale', desc: 'Panneaux, potelets' },
                { icon: '🪑', title: 'Mobilier Urbain', desc: 'Bancs, abris, barrières' },
              ].map((service, i) => (
                <motion.a
                  key={i}
                  href="#services"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(251, 191, 36, 0.1)' }}
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-yellow-400/50 transition-all cursor-pointer"
                >
                  <div className="text-3xl mb-2">{service.icon}</div>
                  <div className="font-bold text-white mb-1">{service.title}</div>
                  <div className="text-sm text-white/60">{service.desc}</div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Card */}
          <motion.a
            href="tel:0698741199"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="col-span-12 md:col-span-5 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 backdrop-blur-xl border-2 border-yellow-400 rounded-3xl p-6 md:p-8 cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-bold uppercase tracking-wider text-yellow-400 mb-2">Appelez-nous</div>
                <div className="text-3xl md:text-4xl font-black text-white">06 98 74 11 99</div>
                <div className="text-sm text-white/70 mt-2">Disponible 7j/7</div>
              </div>
              <motion.div
                className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 15 }}
              >
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </motion.div>
            </div>
          </motion.a>
        </div>
      </div>

      {/* Animated Lines Background */}
      <div className="absolute bottom-0 left-0 right-0 h-64 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent"
            style={{ left: `${i * 10}%` }}
            animate={{
              y: [0, -200],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </section>
  );
}
