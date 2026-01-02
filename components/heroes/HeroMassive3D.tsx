'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function HeroMassive3D() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 opacity-60"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(251, 191, 36, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(251, 191, 36, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 80%, rgba(251, 191, 36, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(251, 191, 36, 0.3) 0%, transparent 50%)',
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Floating Road Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 bg-yellow-400/20"
            style={{
              left: `${(i * 5)}%`,
              height: `${100 + i * 20}px`,
              bottom: 0,
            }}
            animate={{
              y: [0, -1000],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: i * 0.2,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Massive Typography */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ y, opacity }}
        >
          <motion.h1
            className="text-[15vw] md:text-[20vw] lg:text-[18rem] font-black leading-[0.85] tracking-tighter"
            style={{
              background: 'linear-gradient(180deg, #FFFFFF 0%, #FCD34D 50%, #F59E0B 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            animate={{
              backgroundPosition: ['0% 0%', '0% 100%', '0% 0%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            GL
          </motion.h1>

          <motion.h2
            className="text-[10vw] md:text-[15vw] lg:text-[12rem] font-black leading-[0.85] tracking-tighter -mt-8 md:-mt-16"
            style={{
              background: 'linear-gradient(180deg, #F59E0B 0%, #FCD34D 50%, #FFFFFF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            MARQUAGE
          </motion.h2>
        </motion.div>

        {/* Subtitle with 3D effect */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-2xl md:text-4xl text-white/90 font-bold mt-8 mb-12"
          style={{
            textShadow: '0 4px 20px rgba(0,0,0,0.5)',
          }}
        >
          Expert en signalisation routière depuis 15 ans
        </motion.p>

        {/* Stats Grid - Floating Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-16"
        >
          {[
            { value: '500+', label: 'Projets' },
            { value: '15+', label: 'Ans' },
            { value: '5', label: 'Départements' },
            { value: '100%', label: 'Satisfait' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="relative group"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6">
                <div className="text-4xl md:text-5xl font-black text-yellow-400 mb-1">{stat.value}</div>
                <div className="text-sm text-white/80 font-semibold uppercase tracking-wider">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-12 py-6 bg-yellow-400 text-black rounded-full text-xl font-black overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500"
              whileHover={{ scale: 1.5, rotate: 180 }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10 flex items-center gap-3">
              Devis gratuit
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </motion.a>

          <motion.a
            href="tel:0698741199"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-6 backdrop-blur-xl bg-white/10 border-2 border-yellow-400 text-yellow-400 rounded-full text-xl font-black hover:bg-yellow-400 hover:text-black transition-all"
          >
            06 98 74 11 99
          </motion.a>
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
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-yellow-400"
        >
          <span className="text-sm font-bold uppercase tracking-wider">Scroll</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
