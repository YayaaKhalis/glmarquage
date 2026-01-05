"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface SectionDividerProps {
  variant?: "glow" | "particle" | "wave" | "pulse" | "masterpiece";
  className?: string;
}

export default function SectionDivider({
  variant = "glow",
  className = "",
}: SectionDividerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const glowX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  if (variant === "glow") {
    return (
      <div ref={ref} className={`relative h-1 overflow-hidden ${className}`}>
        {/* Base gradient line */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

        {/* Animated glow that follows scroll */}
        <motion.div
          style={{ x: glowX, opacity }}
          className="absolute top-1/2 -translate-y-1/2 w-32 h-8"
        >
          {/* Main bright spot */}
          <div className="absolute inset-0 bg-yellow-400 rounded-full blur-xl opacity-75" />
          <div className="absolute inset-0 bg-white rounded-full blur-md opacity-50" />

          {/* Outer halo */}
          <div className="absolute -inset-4 bg-yellow-300 rounded-full blur-2xl opacity-30" />
        </motion.div>

        {/* Subtle shine particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 -translate-y-1/2 w-1 h-1 bg-yellow-200 rounded-full"
            style={{
              left: `${20 * i + 10}%`,
              opacity,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === "particle") {
    return (
      <div ref={ref} className={`relative h-1 overflow-hidden ${className}`}>
        {/* Base gradient line */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-60" />

        {/* Moving particle trail */}
        <motion.div
          style={{ x: glowX, opacity }}
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
        >
          {/* Main particle */}
          <motion.div
            className="relative w-4 h-4"
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="absolute inset-0 bg-yellow-400 rounded-full" />
            <div className="absolute inset-0 bg-white rounded-full blur-sm opacity-60" />
            <div className="absolute -inset-2 bg-yellow-300 rounded-full blur-lg opacity-40" />
          </motion.div>

          {/* Trail particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-yellow-400/60 rounded-full blur-sm"
              style={{
                left: -10 - i * 8,
              }}
              animate={{
                opacity: [0, 0.6, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeOut",
              }}
            />
          ))}
        </motion.div>
      </div>
    );
  }

  if (variant === "wave") {
    return (
      <div ref={ref} className={`relative h-2 overflow-hidden ${className}`}>
        {/* Animated wave line */}
        <svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,1 Q25,0 50,1 T100,1"
            vectorEffect="non-scaling-stroke"
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="2"
            style={{ opacity }}
          />
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#FFD600" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>

        {/* Moving glow along wave */}
        <motion.div
          style={{ left: glowX, opacity }}
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
        >
          <div className="w-24 h-24 bg-yellow-400 rounded-full blur-3xl opacity-50" />
        </motion.div>

        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          animate={{
            x: ["-200%", "200%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ opacity }}
        />
      </div>
    );
  }

  if (variant === "pulse") {
    return (
      <div ref={ref} className={`relative h-1 overflow-hidden ${className}`}>
        {/* Base line */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent" />

        {/* Multiple pulsing points */}
        {[0, 25, 50, 75, 100].map((position, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
            style={{
              left: `${position}%`,
              opacity,
            }}
          >
            <motion.div
              animate={{
                scale: [0, 2, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeOut",
              }}
            >
              {/* Expanding ring */}
              <div className="w-16 h-16 border-2 border-yellow-400 rounded-full" />
            </motion.div>

            {/* Center dot */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-yellow-400 rounded-full"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        ))}

        {/* Traveling light beam */}
        <motion.div
          style={{ left: glowX, opacity }}
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
        >
          <div className="w-32 h-16 bg-gradient-to-r from-transparent via-yellow-400 to-transparent blur-xl opacity-60" />
        </motion.div>
      </div>
    );
  }

  if (variant === "masterpiece") {
    return (
      <div ref={ref} className={`absolute bottom-0 left-0 right-0 ${className}`}>
        {/* Main refined line */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-80" />
        {/* Glow effect */}
        <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-30 blur-sm" />
      </div>
    );
  }

  return null;
}
