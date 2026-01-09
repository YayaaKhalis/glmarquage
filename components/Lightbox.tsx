'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Download } from 'lucide-react';

interface LightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  titles?: string[];
  descriptions?: string[];
}

export default function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  titles,
  descriptions,
}: LightboxProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(currentIndex);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    setCurrentImageIndex(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setIsZoomed(false);
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setIsZoomed(false);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!isOpen) return;
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === 'ArrowRight') handleNext();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentImageIndex]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          onClick={onClose}
        >
          {/* Backdrop avec effet de flou */}
          <motion.div
            initial={{ backdropFilter: 'blur(0px)' }}
            animate={{ backdropFilter: 'blur(20px)' }}
            exit={{ backdropFilter: 'blur(0px)' }}
            className="absolute inset-0 bg-black/97"
          />

          {/* Contenu principal */}
          <div className="relative w-full h-full flex items-center justify-center p-4 md:p-8">
            {/* Bouton fermer */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={onClose}
              className="absolute top-4 right-4 md:top-8 md:right-8 z-50 p-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white hover:bg-white/20 transition-all group"
            >
              <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
            </motion.button>

            {/* Compteur d'images */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-4 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white font-bold"
            >
              {currentImageIndex + 1} / {images.length}
            </motion.div>

            {/* Boutons de navigation */}
            {images.length > 1 && (
              <>
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevious();
                  }}
                  className="absolute left-4 md:left-8 z-50 p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white hover:bg-white/20 transition-all group"
                >
                  <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                </motion.button>

                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-4 md:right-8 z-50 p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white hover:bg-white/20 transition-all group"
                >
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </>
            )}



            {/* Image principale avec animations */}
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: isZoomed ? 1.3 : 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-7xl max-h-[80vh] w-full h-full flex items-center justify-center"
            >
              {/* Container de l'image */}
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative w-full h-full max-w-6xl max-h-[75vh] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={images[currentImageIndex]}
                    alt={titles?.[currentImageIndex] || `Image ${currentImageIndex + 1}`}
                    fill
                    className="object-contain"
                    quality={100}
                    priority
                  />
                </div>
              </div>
            </motion.div>



            {/* Thumbnails en bas (optionnel) */}
            {images.length > 1 && images.length <= 10 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-32 md:bottom-24 left-1/2 -translate-x-1/2 flex gap-3 overflow-x-auto max-w-full px-4 scrollbar-hide"
                onClick={(e) => e.stopPropagation()}
              >
                {images.map((img, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => {
                      setCurrentImageIndex(idx);
                      setIsZoomed(false);
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden border-3 transition-all shadow-lg ${
                      idx === currentImageIndex
                        ? 'border-white opacity-100 ring-2 ring-white/50'
                        : 'border-white/30 opacity-60 hover:opacity-100 hover:border-white/60'
                    }`}
                  >
                    <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
                  </motion.button>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
