"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroCinematic from "@/components/heroes/HeroCinematic";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  const services = [
    {
      title: "Signalisation Horizontale",
      description:
        "Expert en marquage au sol depuis plus de 15 ans. Nous réalisons tous types de marquages routiers : lignes continues et discontinues, passages piétons, zébras, places de stationnement, marquage de zones industrielles et logistiques. Matériaux certifiés NF et conformes aux normes EN 1436.",
      image: "/IMG_0134.jpeg",
      href: "/signalisation-horizontale",
      number: "01",
    },
    {
      title: "Signalisation Verticale",
      description:
        "Installation complète de panneaux de signalisation routière, totems de ville, potelets de sécurité et mobilier de signalisation. Fourniture et pose de panneaux conformes au code de la route. Expertise en signalisation permanente et temporaire pour chantiers.",
      image: "/singalisationverticale.jpg",
      href: "/signalisation-verticale",
      number: "02",
    },
    {
      title: "Mobilier Urbain",
      description:
        "Solutions complètes d'aménagement urbain : poubelles publiques, bancs, abris-bus, barrières, arceaux vélos. Installation de mobilier urbain durable et design pour collectivités et entreprises. Matériaux résistants aux intempéries et au vandalisme.",
      image: "/mobilierUrbain.png",
      href: "/mobilier-urbain",
      number: "03",
    },
  ];

  const realisations = [
    "/IMG_0133.jpeg",
    "/IMG_0134.jpeg",
    "/IMG_2327.jpeg",
    "/IMG_2363.jpeg",
    "/IMG_2451.jpeg",
    "/IMG_5564.jpg",
    "/IMG_5576.jpg",
    "/IMG_8591.jpeg",
  ];

  const avantages = [
    {
      icon: "✓",
      title: "Certifications & Normes",
      description:
        "Tous nos produits et prestations respectent les normes françaises et européennes en vigueur. Certifications NF, marquage CE, conformité EN 1436 pour le marquage routier.",
    },
    {
      icon: "⚡",
      title: "Réactivité Garantie",
      description:
        "Devis sous 24h, intervention rapide sur toute la Savoie et Haute-Savoie. Équipe disponible pour urgences et chantiers en dehors des heures ouvrées.",
    },
    {
      icon: "🛡️",
      title: "Garantie Qualité",
      description:
        "Matériaux premium longue durée. Garantie sur tous nos travaux. Suivi post-chantier et maintenance préventive disponible.",
    },
    {
      icon: "🌍",
      title: "Éco-responsable",
      description:
        "Utilisation de peintures et matériaux respectueux de l'environnement. Gestion responsable des déchets de chantier et conformité environnementale.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section Option 3: Cinematic */}
      <HeroCinematic />

      {/* Introduction / À propos */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right" data-aos-duration="1000">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="h-1 w-16 bg-yellow-400"
                  data-aos="slide-right"
                  data-aos-delay="200"
                ></div>
                <span
                  className="text-sm text-gray-600 uppercase tracking-wider font-bold"
                  data-aos="fade-in"
                  data-aos-delay="300"
                >
                  GL Marquage
                </span>
              </div>
              <h2
                className="text-5xl md:text-6xl font-black text-black mb-6 tracking-tight leading-tight"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Votre partenaire de confiance en signalisation
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-black">GL Marquage</strong> est une
                  entreprise spécialisée dans la{" "}
                  <strong>signalisation routière</strong>, le{" "}
                  <strong>marquage au sol</strong> et l'
                  <strong>aménagement urbain</strong> en Savoie et Rhône-Alpes.
                  Forte de plus de 15 ans d'expérience, notre équipe intervient
                  auprès des collectivités, entreprises et particuliers.
                </p>
                <p>
                  Nous proposons des solutions complètes de{" "}
                  <strong>marquage horizontal</strong> (lignes, passages
                  piétons, places de parking), de{" "}
                  <strong>signalisation verticale</strong> (panneaux, potelets)
                  et de <strong>mobilier urbain</strong> (bancs, poubelles,
                  abris).
                </p>
                <p>
                  Notre expertise technique et notre connaissance approfondie
                  des normes en vigueur garantissent des prestations conformes
                  et durables. Nous utilisons exclusivement des matériaux
                  certifiés et respectueux de l'environnement.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-yellow-400 hover:text-black transition-all"
                >
                  Contactez-nous
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="relative"
            >
              <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/vehicule glm.png"
                  alt="Véhicule GL Marquage - Flotte professionnelle"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div
                className="absolute -bottom-6 -left-6 bg-yellow-400 text-black rounded-2xl p-6 shadow-xl"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                <div className="text-4xl font-black mb-2">15+</div>
                <div className="text-sm font-bold">Ans d'expertise</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider 2 - Particle Trail Effect */}
      <SectionDivider variant="particle" />

      {/* Services - Clean Grid */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-1 w-16 bg-yellow-400"></div>
              <span className="text-sm text-gray-600 uppercase tracking-wider font-bold">
                Nos Services
              </span>
              <div className="h-1 w-16 bg-yellow-400"></div>
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-black mb-6 tracking-tight">
              Notre Expertise
            </h2>
            <p className="text-2xl text-gray-600 font-light max-w-3xl mx-auto">
              Des solutions professionnelles et durables pour tous vos besoins
              en signalisation routière et aménagement urbain
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Link href={service.href} className="group block">
                  <div
                    className={`grid lg:grid-cols-2 gap-16 items-center ${
                      index % 2 === 1 ? "lg:grid-flow-dense" : ""
                    }`}
                  >
                    {/* Image */}
                    <div
                      className={`relative ${
                        index % 2 === 1 ? "lg:col-start-2" : ""
                      }`}
                    >
                      <div className="relative h-[600px] rounded-3xl overflow-hidden bg-gray-200 shadow-xl">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>

                      {/* Floating Number */}
                      <motion.div
                        className="absolute -top-8 -right-8 w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center shadow-2xl border-4 border-black"
                        whileHover={{ scale: 1.1, rotate: 10 }}
                      >
                        <span className="text-black text-5xl font-black">
                          {service.number}
                        </span>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div
                      className={
                        index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                      }
                    >
                      <h3 className="text-5xl md:text-7xl font-black text-black mb-8 leading-none group-hover:text-yellow-600 transition-colors duration-300">
                        {service.title}
                      </h3>

                      <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed mb-12">
                        {service.description}
                      </p>

                      <div className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full group-hover:bg-yellow-400 group-hover:text-black transition-all duration-300 font-bold">
                        <span className="text-lg">Découvrir le service</span>
                        <svg
                          className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider 3 - Wave Effect */}
      <SectionDivider variant="wave" />

      {/* Avantages - Modern Design */}
      <section className="relative py-32 bg-black text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 50px,
              rgba(212, 163, 43, 0.1) 50px,
              rgba(212, 163, 43, 0.1) 52px
            )`,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full mb-6">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                <span className="text-yellow-400 text-sm font-bold uppercase tracking-wider">
                  Nos Engagements
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                Pourquoi nous
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500">
                  choisir ?
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:text-right"
            >
              <p className="text-2xl md:text-3xl font-light text-gray-300 leading-relaxed">
                Une expertise{" "}
                <span className="text-yellow-400 font-bold">reconnue</span>, des
                prestations de{" "}
                <span className="text-yellow-400 font-bold">qualité</span> et un
                service client{" "}
                <span className="text-yellow-400 font-bold">irréprochable</span>
              </p>
            </motion.div>
          </div>

          {/* Cards Grid - Asymmetric Modern Layout */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Large Feature Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 group relative bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl p-12 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                  <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center">
                    <span className="text-5xl">{avantages[0].icon}</span>
                  </div>
                  <div className="text-8xl font-black text-black/10">01</div>
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-black mb-6">
                  {avantages[0].title}
                </h3>
                <p className="text-xl text-black/80 leading-relaxed max-w-2xl">
                  {avantages[0].description}
                </p>
              </div>
            </motion.div>

            {/* Vertical Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-4xl text-black">
                    {avantages[1].icon}
                  </span>
                </div>
                <div className="text-6xl font-black text-white/10 mb-4">02</div>
                <h3 className="text-3xl font-black text-white mb-4 group-hover:text-yellow-400 transition-colors">
                  {avantages[1].title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {avantages[1].description}
                </p>
              </div>
            </motion.div>

            {/* Horizontal Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <span className="text-4xl text-black">
                    {avantages[2].icon}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="text-6xl font-black text-white/10 mb-2">
                    03
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3 group-hover:text-yellow-400 transition-colors">
                    {avantages[2].title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {avantages[2].description}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Wide Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2 group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <span className="text-4xl text-black">
                    {avantages[3].icon}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-3xl font-black text-white group-hover:text-yellow-400 transition-colors">
                      {avantages[3].title}
                    </h3>
                    <div className="text-8xl font-black text-white/10">04</div>
                  </div>
                  <p className="text-gray-400 leading-relaxed text-lg max-w-3xl">
                    {avantages[3].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: "500+", label: "Projets réalisés" },
              { number: "15+", label: "Ans d'expérience" },
              { number: "24h", label: "Délai de réponse" },
              { number: "100%", label: "Satisfaction" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl md:text-6xl font-black text-yellow-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Divider 4 - Pulse Rings Effect */}
      <SectionDivider variant="pulse" />

      {/* Zone d'Intervention - Road Journey Design */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Diagonal Yellow Stripes - Road Inspired */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `
              repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 80px,
                #FFD600 80px,
                #FFD600 100px
              )
            `,
            }}
          />
        </div>

        {/* Dashed Road Lines Pattern */}
        <div className="absolute inset-0 opacity-[0.06]">
          <div
            className="absolute top-1/4 left-0 right-0 h-px bg-yellow-400"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to right, #FFD600 0px, #FFD600 60px, transparent 60px, transparent 100px)",
            }}
          />
          <div
            className="absolute top-3/4 left-0 right-0 h-px bg-yellow-400"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to right, #FFD600 0px, #FFD600 60px, transparent 60px, transparent 100px)",
            }}
          />
        </div>

        {/* Corner Accent - Yellow Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          {/* Section Header - Split Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full mb-6">
                <svg
                  className="w-4 h-4 text-yellow-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span className="text-yellow-700 text-sm font-bold uppercase tracking-wider">
                  Notre Couverture
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-black mb-6 leading-tight">
                Zone d&apos;Intervention
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                GL Marquage intervient dans toute la région{" "}
                <strong className="text-black">Auvergne-Rhône-Alpes</strong> et
                en <strong className="text-black">Suisse</strong> pour tous vos
                projets de signalisation et d&apos;aménagement urbain
              </p>
            </motion.div>

            {/* Map Illustration Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square lg:aspect-auto lg:h-[400px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-500/10 rounded-3xl border-4 border-yellow-400/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">📍</div>
                  <div className="text-2xl font-black text-black">
                    Rhône-Alpes
                  </div>
                  <div className="text-lg text-gray-600">+ Suisse romande</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Road-Style Departments Display */}
          <div className="relative mb-24">
            {/* Horizontal Road Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-2 -translate-y-1/2 z-0">
              <div className="h-full bg-gradient-to-r from-gray-200 via-yellow-400/40 to-gray-200 rounded-full"></div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full"
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>

            {/* Departments - Horizontal Layout */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {[
                {
                  code: "73",
                  name: "Savoie",
                  primary: true,
                  description: "Zone prioritaire",
                  cities: "Chambéry, Aix-les-Bains",
                },
                {
                  code: "74",
                  name: "Haute-Savoie",
                  primary: true,
                  description: "Zone prioritaire",
                  cities: "Annecy, Annemasse",
                },
                {
                  code: "01",
                  name: "Ain",
                  primary: false,
                  description: "Intervention régulière",
                  cities: "Bourg-en-Bresse, Belley",
                },
                {
                  code: "38",
                  name: "Isère",
                  primary: false,
                  description: "Intervention régulière",
                  cities: "Grenoble, Vienne",
                },
              ].map((zone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="group relative"
                >
                  {/* Main Card */}
                  <div
                    className={`relative p-8 rounded-3xl transition-all duration-500 ${
                      zone.primary
                        ? "bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-2xl shadow-yellow-400/20 hover:shadow-3xl hover:shadow-yellow-400/30 hover:-translate-y-2"
                        : "bg-white border-2 border-gray-200 hover:border-yellow-400 hover:-translate-y-2 hover:shadow-xl"
                    }`}
                  >
                    {/* Priority Badge */}
                    {zone.primary && (
                      <div className="absolute -top-3 -right-3 w-8 h-8 bg-black rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-yellow-400 text-lg">★</span>
                      </div>
                    )}

                    {/* Department Code - Large */}
                    <div
                      className={`text-8xl font-black mb-4 leading-none ${
                        zone.primary ? "text-black" : "text-gray-900"
                      }`}
                    >
                      {zone.code}
                    </div>

                    {/* Department Name */}
                    <div
                      className={`text-2xl font-bold mb-2 ${
                        zone.primary ? "text-black" : "text-gray-900"
                      }`}
                    >
                      {zone.name}
                    </div>

                    {/* Description */}
                    <div
                      className={`text-sm font-semibold mb-3 uppercase tracking-wide ${
                        zone.primary ? "text-black/70" : "text-gray-500"
                      }`}
                    >
                      {zone.description}
                    </div>

                    {/* Cities */}
                    <div
                      className={`text-xs ${
                        zone.primary ? "text-black/60" : "text-gray-400"
                      }`}
                    >
                      {zone.cities}
                    </div>

                    {/* Road Stripe Accent */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl ${
                        zone.primary
                          ? "bg-black"
                          : "bg-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity"
                      }`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Switzerland - Special Destination */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white border-2 border-yellow-400 rounded-3xl p-10 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Left - Flag & Info */}
                <div className="flex items-center gap-6">
                  <div className="text-7xl">🇨🇭</div>
                  <div>
                    <div className="text-3xl md:text-4xl font-black text-black mb-2">
                      Suisse - Genève
                    </div>
                    <div className="text-lg text-gray-600">
                      Intervention transfrontalière • Canton de Genève
                    </div>
                  </div>
                </div>

                {/* Right - Badge */}
                <div className="shrink-0">
                  <div className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full shadow-lg">
                    <div className="text-black font-black text-lg">
                      🌍 International
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full" />
            </div>
          </motion.div>

          {/* Coverage Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { value: "4", label: "Départements", icon: "🗺️" },
              { value: "2", label: "Pays", icon: "🌍" },
              { value: "50km", label: "Rayon moyen", icon: "📍" },
              { value: "24h", label: "Délai intervention", icon: "⚡" },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center p-6 bg-white rounded-2xl border border-gray-200 hover:border-yellow-400 transition-colors"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-4xl font-black text-black mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Divider 5 - Glow Effect */}
      <SectionDivider variant="glow" />

      {/* Réalisations - Ultra Modern Gallery */}
      <section
        id="realisations"
        className="py-32 bg-gray-100 relative overflow-hidden"
      >
        {/* Dot Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.15]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
              backgroundSize: "30px 30px",
            }}
          />
        </div>

        {/* Diagonal Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-gray-200/40" />

        {/* Decorative Yellow Accents */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

        {/* Corner Glows - Different colors */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-black/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          {/* Section Header - Split Modern Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-end mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-black/5 border border-black/10 rounded-full mb-6">
                <svg
                  className="w-4 h-4 text-yellow-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-black text-sm font-bold uppercase tracking-wider">
                  Portfolio
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-black mb-6 leading-tight tracking-tight">
                Nos
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                  Réalisations
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:text-right"
            >
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
                Découvrez nos derniers chantiers de{" "}
                <span className="text-black font-bold">marquage routier</span>,
                <span className="text-black font-bold"> signalisation</span> et{" "}
                <span className="text-black font-bold">aménagement urbain</span>{" "}
                réalisés en{" "}
                <span className="text-yellow-600 font-bold">Savoie</span> et{" "}
                <span className="text-yellow-600 font-bold">Haute-Savoie</span>
              </p>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                {["Marquage au sol", "Signalisation", "Mobilier urbain"].map(
                  (tag, i) => (
                    <div
                      key={i}
                      className="px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full text-sm font-bold text-black"
                    >
                      {tag}
                    </div>
                  )
                )}
              </div>
            </motion.div>
          </div>

          {/* Advanced Bento Grid Gallery */}
          <div className="grid grid-cols-12 gap-4 lg:gap-6 mb-16">
            {/* Large Feature Image - Spanning */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-12 lg:col-span-8 lg:row-span-2 group relative overflow-hidden rounded-3xl cursor-pointer bg-black"
            >
              <div className="relative h-[400px] lg:h-[600px]">
                <Image
                  src={realisations[0]}
                  alt="Projet principal GL Marquage"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 text-white transform transition-transform duration-300 group-hover:translate-y-0">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 text-black rounded-full text-sm font-black mb-4">
                    <span>⭐</span>
                    <span>PROJET PHARE</span>
                  </div>
                  <h3 className="text-3xl lg:text-5xl font-black mb-3 group-hover:text-yellow-400 transition-colors">
                    Marquage Parking Chambéry
                  </h3>
                  <p className="text-lg text-white/80 mb-4">
                    Signalisation complète • 2000m² • Délai express 48h
                  </p>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                      </svg>
                      <span>Chambéry (73)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>Janvier 2024</span>
                    </div>
                  </div>
                </div>

                {/* Number Badge */}
                <div className="absolute top-6 right-6 w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center shadow-2xl">
                  <span className="text-3xl font-black text-black">01</span>
                </div>
              </div>
            </motion.div>

            {/* Side Images - Stacked */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="col-span-6 lg:col-span-4 group relative overflow-hidden rounded-3xl cursor-pointer bg-black"
            >
              <div className="relative h-[200px] lg:h-[290px]">
                <Image
                  src={realisations[1]}
                  alt="Réalisation GL Marquage 2"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-sm font-bold text-yellow-400 mb-1">
                    VOIRIE
                  </div>
                  <h4 className="text-xl font-black">Passages piétons</h4>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <span className="text-lg font-black text-white">02</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="col-span-6 lg:col-span-4 group relative overflow-hidden rounded-3xl cursor-pointer bg-black"
            >
              <div className="relative h-[200px] lg:h-[290px]">
                <Image
                  src={realisations[2]}
                  alt="Réalisation GL Marquage 3"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-sm font-bold text-yellow-400 mb-1">
                    INDUSTRIEL
                  </div>
                  <h4 className="text-xl font-black">Zones de stockage</h4>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <span className="text-lg font-black text-white">03</span>
                </div>
              </div>
            </motion.div>

            {/* Bottom Row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="col-span-6 lg:col-span-4 group relative overflow-hidden rounded-3xl cursor-pointer bg-black"
            >
              <div className="relative h-[200px] lg:h-[280px]">
                <Image
                  src={realisations[3]}
                  alt="Réalisation GL Marquage 4"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-sm font-bold text-yellow-400 mb-1">
                    SIGNALISATION
                  </div>
                  <h4 className="text-xl font-black">Panneaux routiers</h4>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <span className="text-lg font-black text-white">04</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="col-span-6 lg:col-span-4 group relative overflow-hidden rounded-3xl cursor-pointer bg-black"
            >
              <div className="relative h-[200px] lg:h-[280px]">
                <Image
                  src={realisations[4]}
                  alt="Réalisation GL Marquage 5"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-sm font-bold text-yellow-400 mb-1">
                    DÉCORATIF
                  </div>
                  <h4 className="text-xl font-black">Marquage ludique</h4>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <span className="text-lg font-black text-white">05</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="col-span-12 lg:col-span-4 group relative overflow-hidden rounded-3xl cursor-pointer bg-black"
            >
              <div className="relative h-[200px] lg:h-[280px]">
                <Image
                  src={realisations[5]}
                  alt="Réalisation GL Marquage 6"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-sm font-bold text-yellow-400 mb-1">
                    MOBILIER
                  </div>
                  <h4 className="text-xl font-black">Aménagement urbain</h4>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <span className="text-lg font-black text-white">06</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats + CTA Combined Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-8 items-center"
          >
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { number: "500+", label: "Projets" },
                { number: "15+", label: "Ans" },
                { number: "100%", label: "Satisfait" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="text-center p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-yellow-400 transition-colors"
                >
                  <div className="text-4xl font-black text-yellow-600 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-bold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="lg:text-right">
              <Link
                href="/realisations"
                className="group inline-flex items-center gap-4 px-10 py-6 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-2xl font-black text-lg hover:from-yellow-300 hover:to-yellow-400 transition-all shadow-2xl shadow-yellow-400/30 hover:shadow-3xl hover:-translate-y-1"
              >
                <span>Voir Toutes Nos Réalisations</span>
                <svg
                  className="w-6 h-6 group-hover:translate-x-2 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider 6 - Particle Trail Effect */}
      <SectionDivider variant="particle" />

      {/* Contact - Modern CTA Section */}
      <section
        id="contact"
        className="relative py-32 bg-black text-white overflow-hidden"
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 60px,
              rgba(255, 214, 0, 0.1) 60px,
              rgba(255, 214, 0, 0.1) 62px
            )`,
            }}
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-transparent" />

        {/* Top Border Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          {/* Split Layout Header */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left - Main CTA */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full mb-6">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                <span className="text-yellow-400 text-sm font-bold uppercase tracking-wider">
                  Parlons de votre projet
                </span>
              </div>

              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight tracking-tight">
                Prêt à démarrer
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500">
                  votre projet ?
                </span>
              </h2>

              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                Obtenez un{" "}
                <span className="text-yellow-400 font-bold">
                  devis gratuit sous 24h
                </span>{" "}
                et bénéficiez de notre expertise pour tous vos projets de
                signalisation.
              </p>

              {/* Benefits List */}
              <div className="space-y-4 mb-10">
                {[
                  { icon: "⚡", text: "Réponse garantie sous 24h" },
                  { icon: "🚗", text: "Déplacement gratuit en Savoie" },
                  { icon: "📋", text: "Étude personnalisée gratuite" },
                  { icon: "✓", text: "Devis détaillé et transparent" },
                ].map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 bg-yellow-400/10 border border-yellow-400/30 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">{benefit.icon}</span>
                    </div>
                    <span className="text-lg text-gray-200">
                      {benefit.text}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Primary CTA */}
              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 px-10 py-6 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-2xl font-black text-lg hover:from-yellow-300 hover:to-yellow-400 transition-all shadow-2xl shadow-yellow-400/30 hover:shadow-3xl hover:-translate-y-1"
              >
                <span>Demander un devis gratuit</span>
                <svg
                  className="w-6 h-6 group-hover:translate-x-2 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </motion.div>

            {/* Right - Contact Options */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Contact Cards - Stacked */}
              {[
                {
                  icon: (
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  ),
                  label: "Téléphone",
                  value: "06 98 74 11 99",
                  href: "tel:0698741199",
                  subtitle: "Lun-Ven 8h-18h",
                  primary: true,
                },
                {
                  icon: (
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  ),
                  label: "Email",
                  value: "glmarquage@gmail.com",
                  href: "mailto:glmarquage@gmail.com",
                  subtitle: "Réponse rapide garantie",
                },
                {
                  icon: (
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  ),
                  label: "Instagram",
                  value: "@glmarquage",
                  href: "https://instagram.com/glmarquage",
                  subtitle: "Suivez nos réalisations",
                },
              ].map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  target={
                    contact.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    contact.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ x: 5, scale: 1.02 }}
                  className={`group flex items-center gap-6 p-6 lg:p-8 rounded-2xl transition-all duration-300 ${
                    contact.primary
                      ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-black shadow-2xl shadow-yellow-400/30"
                      : "bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10"
                  }`}
                >
                  <div
                    className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 ${
                      contact.primary
                        ? "bg-black text-yellow-400"
                        : "bg-yellow-400/10 text-yellow-400"
                    }`}
                  >
                    {contact.icon}
                  </div>

                  <div className="flex-1">
                    <div
                      className={`text-sm font-bold uppercase tracking-wide mb-1 ${
                        contact.primary ? "text-black/70" : "text-gray-400"
                      }`}
                    >
                      {contact.label}
                    </div>
                    <div
                      className={`text-xl lg:text-2xl font-black mb-1 ${
                        contact.primary ? "text-black" : "text-white"
                      }`}
                    >
                      {contact.value}
                    </div>
                    <div
                      className={`text-sm ${
                        contact.primary ? "text-black/60" : "text-gray-500"
                      }`}
                    >
                      {contact.subtitle}
                    </div>
                  </div>

                  <svg
                    className={`w-6 h-6 group-hover:translate-x-2 transition-transform ${
                      contact.primary ? "text-black" : "text-yellow-400"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.a>
              ))}

              {/* Info Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm border border-yellow-400/20 rounded-2xl"
              >
                <div className="w-10 h-10 bg-yellow-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">💡</span>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">
                    Besoin d&apos;aide pour choisir ?
                  </div>
                  <p className="text-white text-sm leading-relaxed">
                    Notre équipe vous conseille gratuitement sur le meilleur
                    choix de signalisation pour votre projet.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Trust Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 border-t border-white/10"
          >
            {[
              { icon: "🏆", text: "Certifié NF" },
              { icon: "⚡", text: "Intervention rapide" },
              { icon: "✓", text: "Garantie qualité" },
              { icon: "🎯", text: "Devis précis" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="text-sm text-gray-400 font-bold uppercase tracking-wide">
                  {item.text}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
