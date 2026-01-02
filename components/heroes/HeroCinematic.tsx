'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function HeroCinematic() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const logoY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ scale: imageScale }}
      >
        <Image
          src="/bakgroundherosectionglmarquage.png"
          alt="GL Marquage - Travaux de marquage au sol"
          fill
          className="object-cover"
          priority
          quality={100}
          style={{ objectPosition: '35% top' }}
        />
      </motion.div>

      {/* Subtle Overlay for text readability */}
      <div className="absolute inset-0 z-10">
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Animated Road Lines - Decorative */}
      <div className="absolute inset-0 z-20 overflow-hidden opacity-5">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-32 w-1 bg-yellow-400"
            style={{ left: `${10 + i * 12}%` }}
            animate={{
              y: [-200, window.innerHeight + 200],
            }}
            transition={{
              duration: 3 + i * 0.3,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-30 min-h-screen flex items-center"
      >
        <div className="w-full max-w-5xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <div className="space-y-6 lg:space-y-8">
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 backdrop-blur-xl"
              >
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                <span className="text-yellow-400 font-bold text-sm tracking-wide uppercase">
                  Expert depuis 2008
                </span>
              </motion.div>

              {/* Main Title - Optimized */}
              <div className="space-y-2">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="font-black leading-[0.9] tracking-tight"
                >
                  <span className="block text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                    L'excellence
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-6xl md:text-7xl lg:text-8xl xl:text-9xl mt-1">
                    en marquage
                  </span>
                  <span className="block text-white/70 text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-1">
                    au sol
                  </span>
                </motion.h1>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl font-medium"
              >
                Expert en signalisation routière, marquage au sol et mobilier urbain pour{' '}
                <span className="text-yellow-400 font-bold">professionnels</span> et{' '}
                <span className="text-yellow-400 font-bold">collectivités</span> en Savoie et Rhône-Alpes.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-2xl font-black text-base overflow-hidden shadow-2xl shadow-yellow-400/30"
                >
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: '-100%', skewX: -20 }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Demander un devis gratuit
                    <motion.svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </motion.svg>
                  </span>
                </motion.a>

                <motion.a
                  href="tel:0698741199"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white/5 backdrop-blur-2xl border-2 border-white/20 text-white rounded-2xl font-black text-base hover:bg-white/10 hover:border-yellow-400/50 transition-all shadow-xl group"
                >
                  <span className="flex items-center justify-center gap-3">
                    <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    06 98 74 11 99
                  </span>
                </motion.a>
              </motion.div>

              {/* Trust Badges - Redesigned */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap gap-6 pt-4"
              >
                {[
                  { icon: '🏆', text: 'Certifié NF', color: 'yellow' },
                  { icon: '⚡', text: 'Devis 24h', color: 'yellow' },
                  { icon: '✓', text: 'Garantie qualité', color: 'yellow' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className="flex items-center gap-3 group cursor-default"
                  >
                    <div className="text-2xl group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <span className="text-white/90 font-semibold text-base">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator - Right Side */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-1/2 right-8 lg:right-12 z-40 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-yellow-400"
        >
          <span className="text-sm font-bold uppercase tracking-wider rotate-90 origin-center mb-8">Scroll</span>
          <div className="w-0.5 h-16 bg-gradient-to-b from-yellow-400 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
