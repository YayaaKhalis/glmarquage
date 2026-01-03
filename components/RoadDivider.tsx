'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function RoadDivider() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress for this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end 0.5"]
  });

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-24 bg-black overflow-hidden"
    >
      {/* Yellow Center Lines Only - Progressive Drawing */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute top-1/2 -translate-y-1/2 w-full h-px flex justify-start items-center gap-3 px-8">
          {[...Array(30)].map((_, i) => {
            const startProgress = i / 30;
            const endProgress = (i + 1) / 30;
            
            return (
              <motion.div
                key={i}
                className="relative w-14 h-px"
                initial={{ scaleX: 0, opacity: 0 }}
                style={{
                  scaleX: useTransform(
                    scrollYProgress,
                    [startProgress, endProgress],
                    [0, 1]
                  ),
                  opacity: useTransform(
                    scrollYProgress,
                    [startProgress - 0.02, startProgress, endProgress + 0.05],
                    [0, 1, 1]
                  ),
                  transformOrigin: 'left',
                }}
              >
                {/* Main line */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400" />
                
                {/* Glow effect */}
                <motion.div 
                  className="absolute inset-0 bg-yellow-400 blur-sm"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.05,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
