'use client';

import { motion, useInView, Variant } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  variant?: 'fadeIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'zoomIn' | 'zoomOut' | 'rotateIn' | 'flipUp';
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
  amount?: number;
}

export default function ScrollReveal({
  children,
  variant = 'fadeIn',
  delay = 0,
  duration = 0.6,
  once = true,
  className = '',
  amount = 0.3,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  const variants: Record<string, { hidden: Variant; visible: Variant }> = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    slideUp: {
      hidden: { opacity: 0, y: 60 },
      visible: { opacity: 1, y: 0 },
    },
    slideDown: {
      hidden: { opacity: 0, y: -60 },
      visible: { opacity: 1, y: 0 },
    },
    slideLeft: {
      hidden: { opacity: 0, x: 60 },
      visible: { opacity: 1, x: 0 },
    },
    slideRight: {
      hidden: { opacity: 0, x: -60 },
      visible: { opacity: 1, x: 0 },
    },
    zoomIn: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
    zoomOut: {
      hidden: { opacity: 0, scale: 1.2 },
      visible: { opacity: 1, scale: 1 },
    },
    rotateIn: {
      hidden: { opacity: 0, rotate: -10, scale: 0.95 },
      visible: { opacity: 1, rotate: 0, scale: 1 },
    },
    flipUp: {
      hidden: { opacity: 0, rotateX: -90, transformPerspective: 1000 },
      visible: { opacity: 1, rotateX: 0, transformPerspective: 1000 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants[variant]}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for smooth animation
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
