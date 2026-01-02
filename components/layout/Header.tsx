'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Signalisation Horizontale', href: '/signalisation-horizontale' },
    { name: 'Signalisation Verticale', href: '/signalisation-verticale' },
    { name: 'Mobilier Urbain', href: '/mobilier-urbain' },
    { name: 'Réalisations', href: '/realisations' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Floating Header - No background bar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <div className="flex justify-between items-center pointer-events-auto">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link href="/" className="flex items-center group relative z-50 bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-xl shadow-xl hover:shadow-2xl transition-all">
                <Image
                  src="/logo.png"
                  alt="GL Marquage"
                  width={180}
                  height={60}
                  className="h-12 w-auto transition-all duration-500"
                  priority
                />
              </Link>
            </motion.div>

            {/* Menu Burger Button - Floating */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              onClick={() => setMenuOpen(!menuOpen)}
              className={`relative z-50 w-14 h-14 rounded-full transition-all duration-500 flex items-center justify-center shadow-xl ${
                menuOpen
                  ? 'bg-white text-black scale-110'
                  : scrolled
                  ? 'bg-black/90 backdrop-blur-sm text-white hover:bg-yellow-400 hover:text-black hover:scale-110'
                  : 'bg-white/95 backdrop-blur-sm text-black hover:bg-yellow-400 hover:scale-110'
              }`}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-center items-center">
                <motion.span
                  animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  className="w-full h-0.5 bg-current mb-1.5 transition-all"
                />
                <motion.span
                  animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-full h-0.5 bg-current mb-1.5 transition-all"
                />
                <motion.span
                  animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  className="w-full h-0.5 bg-current transition-all"
                />
              </div>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Fullscreen Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black"
          >
            {/* Animated gradient background */}
            <div className="absolute inset-0">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-400/10 rounded-full blur-3xl"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-yellow-400/5 rounded-full blur-3xl"
              />
            </div>

            {/* Menu Content */}
            <div className="relative h-full flex items-center justify-center">
              <nav className="w-full max-w-4xl px-6">
                <motion.ul className="space-y-2">
                  {navigation.map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="group block py-4 relative overflow-hidden"
                      >
                        <span className="relative z-10 text-5xl lg:text-7xl font-bold text-white transition-all duration-300 group-hover:text-yellow-400 inline-block">
                          {item.name}
                          <motion.span
                            className="absolute bottom-2 left-0 w-0 h-1 bg-yellow-400 group-hover:w-full transition-all duration-500"
                          />
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-16"
                >
                  <Link
                    href="/contact"
                    onClick={() => setMenuOpen(false)}
                    className="inline-block px-12 py-5 bg-linear-to-r from-yellow-400 to-yellow-500 text-black text-xl font-bold rounded-full hover:from-yellow-300 hover:to-yellow-400 transition-all shadow-2xl shadow-yellow-400/30 hover:shadow-yellow-400/50 hover:scale-105"
                  >
                    Devis Gratuit
                  </Link>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-16 flex flex-wrap gap-8 text-slate-400"
                >
                  <a href="tel:0698741199" className="hover:text-yellow-400 transition-colors">
                    <span className="text-sm uppercase tracking-wider block mb-1">Téléphone</span>
                    <span className="text-lg font-semibold text-white">06 98 74 11 99</span>
                  </a>
                  <a href="mailto:glmarquage@gmail.com" className="hover:text-yellow-400 transition-colors">
                    <span className="text-sm uppercase tracking-wider block mb-1">Email</span>
                    <span className="text-lg font-semibold text-white">glmarquage@gmail.com</span>
                  </a>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
