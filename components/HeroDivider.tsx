'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function HeroDivider() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress for different animations
  const lineWidth = useTransform(scrollYProgress, [0, 0.5], ['0%', '100%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const glowIntensity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.3]);

  return (
    <div ref={ref} className="relative py-16 bg-gradient-to-b from-black via-gray-900 to-white overflow-hidden">
      {/* Animated Road Construction Effect */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main Road Line Being Painted */}
        <div className="relative h-2 bg-black/10 rounded-full overflow-hidden">
          {/* Base asphalt texture */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800" />

          {/* Yellow line being painted */}
          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 rounded-full"
            style={{ width: lineWidth }}
          >
            {/* Wet paint shimmer */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              animate={{
                x: ['-200%', '200%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>

          {/* Paint Roller at the end */}
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
            style={{ left: lineWidth, opacity: glowIntensity }}
          >
            {/* Roller body */}
            <div className="relative">
              {/* Main roller */}
              <motion.div
                className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg shadow-2xl border-2 border-yellow-400/50"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              {/* Yellow paint on roller */}
              <motion.div
                className="absolute inset-1 bg-yellow-400/60 rounded-md"
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Paint drips */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-1 bg-yellow-400 rounded-full"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: [0, 12, 0],
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeOut"
                  }}
                />
              ))}

              {/* Glow around roller */}
              <div className="absolute -inset-4 bg-yellow-400/30 rounded-full blur-xl" />
              <div className="absolute -inset-8 bg-yellow-300/20 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>

        {/* Road Markings - Dashed Lines Above */}
        <div className="absolute -top-8 left-0 right-0 h-px">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 bg-yellow-400/40 rounded-full"
              style={{
                left: `${i * 5}%`,
                width: '3%',
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{
                scaleX: 1,
                opacity: [0, 0.6, 0.6],
              }}
              transition={{
                duration: 0.5,
                delay: i * 0.05,
                ease: "easeOut"
              }}
            />
          ))}
        </div>

        {/* Road Markings - Dashed Lines Below */}
        <div className="absolute -bottom-8 left-0 right-0 h-px">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 bg-yellow-400/40 rounded-full"
              style={{
                left: `${i * 5}%`,
                width: '3%',
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{
                scaleX: 1,
                opacity: [0, 0.6, 0.6],
              }}
              transition={{
                duration: 0.5,
                delay: i * 0.05,
                ease: "easeOut"
              }}
            />
          ))}
        </div>

        {/* Paint Particles Flying */}
        <motion.div
          style={{ opacity }}
          className="absolute inset-0 pointer-events-none"
        >
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, -60],
                x: [0, (Math.random() - 0.5) * 40],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeOut"
              }}
            />
          ))}
        </motion.div>

        {/* Arrows Appearing Along the Line */}
        {[0.2, 0.5, 0.8].map((position, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 -translate-y-1/2"
            style={{
              left: `${position * 100}%`,
              opacity: useTransform(
                scrollYProgress,
                [position - 0.1, position, position + 0.1],
                [0, 1, 0.6]
              ),
            }}
          >
            <motion.svg
              className="w-12 h-8 text-yellow-400"
              viewBox="0 0 24 12"
              fill="currentColor"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            >
              <path d="M0,6 L18,6 L18,0 L24,6 L18,12 L18,6 Z" />
            </motion.svg>

            {/* Arrow glow */}
            <div className="absolute inset-0 -z-10 bg-yellow-400/30 blur-xl scale-150" />
          </motion.div>
        ))}

        {/* Speed Lines Effect */}
        <motion.div
          style={{ opacity: glowIntensity }}
          className="absolute inset-0"
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"
              style={{
                top: `${10 + i * 10}%`,
                left: 0,
                right: 0,
              }}
              animate={{
                x: ['-100%', '200%'],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeIn"
              }}
            />
          ))}
        </motion.div>

        {/* Glowing Orbs Following the Paint */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2"
          style={{ left: lineWidth, opacity: glowIntensity }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              animate={{
                x: [0, -20 - i * 15],
                scale: [1, 0.5, 0],
                opacity: [0.8, 0.4, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeOut"
              }}
            >
              <div className={`w-${3 - i} h-${3 - i} bg-yellow-400 rounded-full blur-sm`} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Ambient background glow */}
      <motion.div
        style={{ opacity: glowIntensity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-yellow-400/5 blur-3xl"
      />
    </div>
  );
}
