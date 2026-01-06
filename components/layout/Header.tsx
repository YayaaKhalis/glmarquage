'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  hideLogo?: boolean;
}

export default function Header({ hideLogo = false }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredService, setHoveredService] = useState(false);

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
            {/* Logo with Scroll Effect - Hidden when menu is open or hideLogo is true */}
            <AnimatePresence>
              {!menuOpen && !hideLogo && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="ml-4"
                >
                  <Link href="/" className="flex items-center group relative z-50">
                    <motion.div
                      animate={{
                        scale: scrolled ? 0.75 : 1,
                        boxShadow: scrolled 
                          ? '0 0 30px rgba(251, 191, 36, 0.4), 0 0 60px rgba(251, 191, 36, 0.2)' 
                          : '0 10px 40px rgba(0, 0, 0, 0.15)',
                      }}
                      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                      className={`relative rounded-full transition-all duration-500 ${
                        scrolled 
                          ? 'bg-black/80 backdrop-blur-md p-1.5 ring-2 ring-yellow-400/80' 
                          : 'bg-transparent p-0'
                      }`}
                    >
                      <Image
                        src="/Design sans titre.png"
                        alt="GL Marquage"
                        width={240}
                        height={240}
                        className={`rounded-full object-cover transition-all duration-500 ${
                          scrolled ? 'h-16 w-16' : 'h-24 w-24'
                        }`}
                        priority
                      />
                      {/* Glow ring animation on scroll */}
                      {scrolled && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute inset-0 rounded-full ring-2 ring-yellow-400 animate-pulse"
                          style={{ animationDuration: '2s' }}
                        />
                      )}
                    </motion.div>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Spacer when logo is hidden to keep menu button on right */}
            {hideLogo && !menuOpen && <div className="w-1" />}

            {/* Liquid Glass Navbar - Visible when NOT scrolled AND menu closed (Desktop) - Centered */}
            <AnimatePresence>
              {!scrolled && !menuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-1 px-2 py-2 rounded-full"
                  style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(20px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                  }}
                >
                  {[
                    { name: 'Accueil', href: '/' },
                    { 
                      name: 'Services', 
                      href: '/signalisation-horizontale',
                      dropdown: true 
                    },
                    { name: 'Contact', href: '/contact' },
                  ].map((item, index) => (
                    <div
                      key={item.name}
                      onMouseEnter={() => item.dropdown && setHoveredService(true)}
                      onMouseLeave={() => item.dropdown && setHoveredService(false)}
                      className="relative"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          className="relative px-4 py-2 text-sm font-bold text-white hover:text-yellow-400 transition-all duration-300 rounded-full hover:bg-white/10 group block"
                          style={{
                            textShadow: '0 1px 3px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.5)',
                          }}
                        >
                          <span className="flex items-center gap-1">
                            {item.name}
                            {item.dropdown && (
                              <svg className={`w-3 h-3 transition-transform duration-300 ${hoveredService ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            )}
                          </span>
                          <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-yellow-400 rounded-full transition-all duration-300 group-hover:w-1/2" />
                        </Link>
                      </motion.div>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {item.dropdown && hoveredService && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-64"
                          >
                           <div 
                              className="rounded-2xl overflow-hidden py-2"
                              style={{
                                background: 'rgba(0, 0, 0, 0.8)',
                                backdropFilter: 'blur(20px) saturate(180%)',
                                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                              }}
                            >
                              {[
                                { name: 'Signalisation Horizontale', href: '/signalisation-horizontale' },
                                { name: 'Signalisation Verticale', href: '/signalisation-verticale' },
                                { name: 'Mobilier Urbain', href: '/mobilier-urbain' }
                              ].map((subItem, idx) => (
                                <Link
                                  key={idx}
                                  href={subItem.href}
                                  className="block px-6 py-3 text-sm font-bold text-white hover:bg-white/10 hover:text-yellow-400 transition-colors relative group"
                                  style={{
                                    textShadow: '0 1px 2px rgba(0,0,0,0.8)',
                                  }}
                                >
                                  {subItem.name}
                                  <span className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-400 scale-y-0 group-hover:scale-y-100 transition-transform origin-center" />
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                  {/* CTA Button in navbar */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Link
                      href="#contact"
                      className="ml-2 px-5 py-2 bg-yellow-400 text-black text-sm font-bold rounded-full hover:bg-yellow-500 hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-400/20"
                    >
                      Devis Gratuit
                    </Link>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Menu Burger Button - Visible when scrolled OR on mobile/tablet */}
            <AnimatePresence>
              {(scrolled || menuOpen) && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setMenuOpen(!menuOpen)}
                  className={`ml-auto relative z-50 w-12 h-12 md:w-14 md:h-14 rounded-full transition-all duration-500 flex items-center justify-center ${
                    menuOpen ? 'bg-white text-black scale-110 shadow-xl' : ''
                  }`}
                  style={
                    !menuOpen
                      ? {
                          background: 'rgba(255, 255, 255, 0.15)',
                          backdropFilter: 'blur(20px) saturate(180%)',
                          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                          border: '1px solid rgba(255, 255, 255, 0.3)',
                          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                        }
                      : {}
                  }
                  aria-label="Toggle menu"
                >
                  <div className="w-5 h-4 md:w-6 md:h-5 flex flex-col justify-center items-center">
                    <motion.span
                      animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                      className="w-full h-0.5 mb-1 md:mb-1.5 transition-all rounded-full"
                      style={!menuOpen ? { 
                        backgroundColor: 'white',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.8), 0 0 6px rgba(0,0,0,0.4)'
                      } : { backgroundColor: 'currentColor' }}
                    />
                    <motion.span
                      animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                      className="w-full h-0.5 mb-1 md:mb-1.5 transition-all rounded-full"
                      style={!menuOpen ? { 
                        backgroundColor: 'white',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.8), 0 0 6px rgba(0,0,0,0.4)'
                      } : { backgroundColor: 'currentColor' }}
                    />
                    <motion.span
                      animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                      className="w-full h-0.5 transition-all rounded-full"
                      style={!menuOpen ? { 
                        backgroundColor: 'white',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.8), 0 0 6px rgba(0,0,0,0.4)'
                      } : { backgroundColor: 'currentColor' }}
                    />
                  </div>
                </motion.button>
              )}
            </AnimatePresence>

            {/* Burger always visible on mobile/tablet when NOT scrolled */}
            {!scrolled && !menuOpen && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden relative z-50 w-12 h-12 md:w-14 md:h-14 rounded-full transition-all duration-500 flex items-center justify-center"
                style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(20px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                }}
                aria-label="Toggle menu"
              >
                <div className="w-5 h-4 md:w-6 md:h-5 flex flex-col justify-center items-center">
                  <span 
                    className="w-full h-0.5 mb-1 md:mb-1.5 rounded-full"
                    style={{ backgroundColor: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.8)' }}
                  />
                  <span 
                    className="w-full h-0.5 mb-1 md:mb-1.5 rounded-full"
                    style={{ backgroundColor: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.8)' }}
                  />
                  <span 
                    className="w-full h-0.5 rounded-full"
                    style={{ backgroundColor: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.8)' }}
                  />
                </div>
              </motion.button>
            )}
          </div>
        </nav>
      </motion.header>

      {/* Fullscreen Menu Overlay - Liquid Glass Style */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40"
            style={{
              background: 'rgba(0, 0, 0, 0.8)',
              backdropFilter: 'blur(30px) saturate(180%)',
              WebkitBackdropFilter: 'blur(30px) saturate(180%)',
            }}
          >
            {/* Animated gradient orbs */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="absolute -top-20 -right-20 w-64 md:w-96 h-64 md:h-96 bg-yellow-400/20 rounded-full blur-3xl"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute -bottom-20 -left-20 w-72 md:w-[500px] h-72 md:h-[500px] bg-yellow-400/10 rounded-full blur-3xl"
              />
            </div>

            {/* Menu Content - Centered */}
            <div className="relative h-full flex items-center justify-center px-6 py-20">
              <nav className="w-full max-w-lg">
                {/* Navigation Links */}
                <motion.ul className="space-y-1 md:space-y-2">
                  {navigation.map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="group flex items-center gap-4 py-3 md:py-4 relative"
                      >
                        {/* Apple-style dot indicator */}
                        <span className="w-2 h-2 rounded-full bg-yellow-400/30 group-hover:bg-yellow-400 group-hover:shadow-lg group-hover:shadow-yellow-400/50 transition-all duration-300" />
                        {/* Link text */}
                        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white transition-all duration-300 group-hover:text-yellow-400 group-hover:translate-x-2">
                          {item.name}
                        </span>
                        {/* Arrow on hover */}
                        <motion.svg
                          className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </motion.svg>
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Divider */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="my-6 md:my-10 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"
                  style={{ transformOrigin: 'left' }}
                />

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link
                    href="/contact"
                    onClick={() => setMenuOpen(false)}
                    className="inline-flex items-center gap-3 px-6 md:px-10 py-3 md:py-4 bg-yellow-400 text-black text-base md:text-lg font-bold rounded-full hover:bg-yellow-500 transition-all shadow-xl shadow-yellow-400/30 hover:shadow-yellow-400/50 hover:scale-105"
                  >
                    <span>Devis Gratuit</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </motion.div>

                {/* Bottom Section - Contact Info + Logo */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-8 md:mt-12"
                >
                  {/* Row layout: contacts left, logo right */}
                  <div className="flex flex-row items-center justify-between gap-4">
                    {/* Contact Info - Left Side */}
                    <div className="flex flex-col gap-3 md:gap-4">
                      <a 
                        href="tel:0698741199" 
                        className="flex items-center gap-2 md:gap-3 text-white/70 hover:text-yellow-400 transition-colors group"
                      >
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors">
                          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <span className="text-[10px] md:text-xs uppercase tracking-wider block text-white/50">Téléphone</span>
                          <span className="text-xs md:text-base font-semibold text-white">06 98 74 11 99</span>
                        </div>
                      </a>
                      <a 
                        href="mailto:glmarquage@gmail.com" 
                        className="flex items-center gap-2 md:gap-3 text-white/70 hover:text-yellow-400 transition-colors group"
                      >
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors">
                          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <span className="text-[10px] md:text-xs uppercase tracking-wider block text-white/50">Email</span>
                          <span className="text-xs md:text-base font-semibold text-white">glmarquage@gmail.com</span>
                        </div>
                      </a>
                    </div>

                    {/* Logo with Halo Effect - Right Side */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 }}
                      className="flex-shrink-0 mr-4 md:mr-8"
                    >
                      <div 
                        className="relative rounded-full p-1 md:p-1.5 ring-2 ring-yellow-400/80"
                        style={{
                          background: 'rgba(0, 0, 0, 0.8)',
                          boxShadow: '0 0 20px rgba(251, 191, 36, 0.4), 0 0 40px rgba(251, 191, 36, 0.2)',
                        }}
                      >
                        <Image
                          src="/Design sans titre.png"
                          alt="GL Marquage"
                          width={80}
                          height={80}
                          className="h-14 w-14 md:h-16 md:w-16 rounded-full object-cover"
                        />
                        {/* Animated pulse ring */}
                        <div 
                          className="absolute inset-0 rounded-full ring-2 ring-yellow-400 animate-pulse"
                          style={{ animationDuration: '2s' }}
                        />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
