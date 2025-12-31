'use client';

import { motion } from 'framer-motion';

export default function RoadElements3D() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Cônes de chantier 3D - Très subtil */}
      <motion.div
        className="absolute top-20 right-1/4 opacity-8"
        animate={{
          y: [0, -20, 0],
          rotateY: [0, 20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ perspective: '800px', transformStyle: 'preserve-3d' }}
      >
        <svg width="80" height="100" viewBox="0 0 80 100" fill="none">
          {/* Cône */}
          <defs>
            <linearGradient id="coneGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#999999', stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: '#cccccc', stopOpacity: 0.3 }} />
            </linearGradient>
          </defs>
          <path d="M40 10 L70 90 L10 90 Z" fill="url(#coneGradient)" />
          <ellipse cx="40" cy="90" rx="30" ry="5" fill="#1a1a1a" opacity="0.5" />
          {/* Bandes réfléchissantes */}
          <rect x="25" y="40" width="30" height="8" fill="white" opacity="0.3" />
          <rect x="20" y="60" width="40" height="8" fill="white" opacity="0.3" />
        </svg>
      </motion.div>

      {/* Panneau de signalisation 3D - Très subtil */}
      <motion.div
        className="absolute bottom-1/3 left-1/4 opacity-8"
        animate={{
          rotateY: [-5, 5, -5],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
      >
        <div className="relative">
          {/* Poteau */}
          <div className="absolute left-1/2 -translate-x-1/2 w-3 h-40 bg-gradient-to-b from-gray-400 to-gray-600 opacity-50" />
          {/* Panneau triangulaire */}
          <svg width="120" height="120" viewBox="0 0 120 120" className="-translate-y-10">
            <defs>
              <linearGradient id="signGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#999999', stopOpacity: 0.3 }} />
                <stop offset="100%" style={{ stopColor: '#aaaaaa', stopOpacity: 0.3 }} />
              </linearGradient>
            </defs>
            <path
              d="M60 10 L110 100 L10 100 Z"
              fill="url(#signGradient)"
              stroke="#1a1a1a"
              strokeWidth="2"
              opacity="0.3"
            />
            {/* Symbole attention */}
            <text x="60" y="70" fontSize="40" fontWeight="black" textAnchor="middle" fill="#1a1a1a" opacity="0.2">!</text>
          </svg>
        </div>
      </motion.div>

      {/* Ligne de marquage en 3D perspective */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-96"
        style={{ perspective: '800px', transformStyle: 'preserve-3d' }}
      >
        <motion.div
          className="relative w-full h-full"
          style={{
            transform: 'rotateX(75deg)',
            transformOrigin: 'bottom center',
          }}
        >
          {/* Lignes discontinues qui avancent - Très subtiles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 -translate-x-1/2 bg-white/10"
              style={{
                width: `${20 + i * 5}px`,
                height: '60px',
                bottom: `${i * 40}px`,
              }}
              animate={{
                opacity: [0.05, 0.15, 0.05],
                height: ['60px', '80px', '60px'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
                ease: 'easeInOut',
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Particules flottantes - débris de peinture - Très subtiles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full opacity-10"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 0.15, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Grille de parking en perspective - Très subtile */}
      <motion.div
        className="absolute top-1/3 right-10 opacity-5"
        style={{ perspective: '600px' }}
      >
        <div
          style={{
            transform: 'rotateX(60deg) rotateZ(45deg)',
            transformStyle: 'preserve-3d',
          }}
        >
          <svg width="200" height="200" viewBox="0 0 200 200">
            {/* Places de parking */}
            {[0, 1, 2, 3].map((row) =>
              [0, 1, 2].map((col) => (
                <motion.rect
                  key={`${row}-${col}`}
                  x={col * 65 + 5}
                  y={row * 48 + 5}
                  width="60"
                  height="45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-white"
                  animate={{
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: (row + col) * 0.2,
                  }}
                />
              ))
            )}
          </svg>
        </div>
      </motion.div>

      {/* Flèches directionnelles rotatives - Très subtiles */}
      <motion.div
        className="absolute top-1/2 right-1/3 opacity-5"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {[0, 120, 240].map((angle) => (
          <motion.div
            key={angle}
            className="absolute"
            style={{
              transform: `rotate(${angle}deg) translateY(-60px)`,
            }}
          >
            <svg width="60" height="60" viewBox="0 0 60 60">
              <path
                d="M30 10 L45 30 L35 30 L35 50 L25 50 L25 30 L15 30 Z"
                fill="currentColor"
                className="text-white"
              />
            </svg>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
