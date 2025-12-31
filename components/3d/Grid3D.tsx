'use client';

import { motion } from 'framer-motion';

export default function Grid3D() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grille 3D perspective - Plus subtile */}
      <div className="absolute inset-0 opacity-30" style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}>
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 214, 0, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 214, 0, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            transform: 'rotateX(60deg) translateZ(-200px)',
            transformOrigin: 'center center',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '100px 100px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Lignes de route animées - Réduites et plus subtiles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 bg-gradient-to-b from-transparent via-yellow-400/30 to-transparent"
          style={{
            left: `${25 + i * 25}%`,
            height: '150px',
            top: '-150px',
          }}
          animate={{
            top: ['-150px', '100%'],
            opacity: [0, 0.3, 0.3, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 1.5,
            ease: 'linear',
          }}
        />
      ))}

      {/* Formes 3D flottantes - Très subtiles */}
      <motion.div
        className="absolute top-1/4 left-10 opacity-5"
        animate={{
          y: [0, -30, 0],
          rotateZ: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <svg width="100" height="100" viewBox="0 0 120 120" fill="none">
          <path
            d="M60 10 L100 50 L75 50 L75 110 L45 110 L45 50 L20 50 Z"
            fill="currentColor"
            className="text-white"
            style={{ filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.2))' }}
          />
        </svg>
      </motion.div>

      {/* Cube 3D tournant - Plus subtil */}
      <motion.div
        className="absolute bottom-1/4 right-20 opacity-5"
        style={{ perspective: '1000px' }}
        animate={{
          rotateY: [0, 360],
          rotateX: [0, 15, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div
          className="w-24 h-24 relative"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'translateZ(-50px)',
          }}
        >
          {/* Faces du cube */}
          {[
            { transform: 'rotateY(0deg) translateZ(40px)', bg: 'bg-white/10' },
            { transform: 'rotateY(90deg) translateZ(40px)', bg: 'bg-white/10' },
            { transform: 'rotateY(180deg) translateZ(40px)', bg: 'bg-white/10' },
            { transform: 'rotateY(-90deg) translateZ(40px)', bg: 'bg-white/10' },
            { transform: 'rotateX(90deg) translateZ(40px)', bg: 'bg-white/10' },
            { transform: 'rotateX(-90deg) translateZ(40px)', bg: 'bg-white/10' },
          ].map((face, i) => (
            <div
              key={i}
              className={`absolute w-24 h-24 ${face.bg} border border-white/20`}
              style={{ transform: face.transform }}
            />
          ))}
        </div>
      </motion.div>

      {/* Cercles concentriques 3D - Très subtils */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 border border-white/5 rounded-full"
          style={{
            width: `${(i + 1) * 200}px`,
            height: `${(i + 1) * 200}px`,
            marginLeft: `-${(i + 1) * 100}px`,
            marginTop: `-${(i + 1) * 100}px`,
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.05, 0.1, 0.05],
            rotate: [0, 360],
          }}
          transition={{
            duration: 15 + i * 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      {/* Lignes de marquage au sol en perspective - Très subtiles */}
      <div className="absolute bottom-0 left-0 right-0 h-64 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 bg-white/5"
            style={{
              left: `${i * 15}%`,
              width: '30px',
              height: `${100 + i * 10}px`,
              transformOrigin: 'bottom center',
              transform: `perspective(500px) rotateX(${45 + i * 2}deg)`,
            }}
            animate={{
              opacity: [0.03, 0.08, 0.03],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );
}
