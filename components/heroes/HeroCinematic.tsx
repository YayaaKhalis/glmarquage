'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
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

  // Window height for SSR compatibility
  const [windowHeight, setWindowHeight] = useState(1000);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Typewriter effect
  const fullText = "Expert en signalisation routière, marquage au sol et mobilier urbain pour professionnels et collectivités en Savoie et Rhône-Alpes.";
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 30); // Vitesse d'écriture (30ms par caractère)

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

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
              y: [-200, windowHeight + 200],
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

              {/* Description with Typewriter Effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl font-medium min-h-[80px] relative"
              >
                <p className="inline">
                  {displayedText.split(' ').map((word, index) => {
                    const isHighlighted = word.includes('professionnels') || word.includes('collectivités');
                    return (
                      <span key={index}>
                        {isHighlighted ? (
                          <span className="text-yellow-400 font-bold">{word}</span>
                        ) : (
                          <span>{word}</span>
                        )}
                        {index < displayedText.split(' ').length - 1 ? ' ' : ''}
                      </span>
                    );
                  })}
                  {/* Curseur clignotant */}
                  {currentIndex < fullText.length && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                      className="inline-block w-0.5 h-6 bg-yellow-400 ml-1 align-middle"
                    />
                  )}
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                {/* Bouton Devis - Sans effet blanc */}
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-2xl font-black text-base shadow-2xl shadow-yellow-400/30 hover:shadow-yellow-400/50 transition-all"
                >
                  <span className="flex items-center justify-center gap-3">
                    Demander un devis gratuit
                    <svg
                      className="w-6 h-6 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </motion.a>

                {/* Bouton Téléphone - Glassmorphism Apple */}
                <motion.a
                  href="tel:0698741199"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 text-white rounded-2xl font-black text-base overflow-hidden shadow-xl hover:shadow-2xl transition-all"
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(40px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(40px) saturate(180%)',
                    border: '1px solid rgba(255, 255, 255, 0.18)',
                  }}
                >
                  {/* Reflet glassmorphism */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 group-hover:opacity-70 transition-opacity" />

                  {/* Bordure intérieure lumineuse */}
                  <div className="absolute inset-0 rounded-2xl" style={{
                    boxShadow: 'inset 0 0 20px rgba(255, 255, 255, 0.1)',
                  }} />

                  <span className="relative z-10 flex items-center justify-center gap-3">
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
