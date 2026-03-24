"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Star, Package, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const heroImages = [
  { src: "/assets/da fazenda doce de leite.png", alt: "Doce de Leite Artesanal" },
  { src: "/assets/bananada artesanal.png", alt: "Bananada Artesanal" },
  { src: "/assets/goiabada cascao.png", alt: "Goiabada Cascão" },
  { src: "/assets/serra negra doce de leite cremoso.png", alt: "Doce de Leite Serra Negra" },
  { src: "/assets/carne suina em lata.png", alt: "Carne Suína em Lata" },
];

const stats = [
  { value: "200+", label: "Produtos", icon: Package },
  { value: "15+", label: "Anos de Experiência", icon: Star },
  { value: "5", label: "Estados Atendidos", icon: MapPin },
];

export default function Hero() {
  const scrollToProducts = () => {
    document.querySelector("#produtos")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" });
  };

  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImg((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextImg = () => setActiveImg((prev) => (prev + 1) % heroImages.length);
  const prevImg = () => setActiveImg((prev) => (prev - 1 + heroImages.length) % heroImages.length);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-stone-50"
    >
      {/* Subtle modern background gradient (much cleaner than shapes) */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-100 via-stone-50 to-stone-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 lg:py-0 grid lg:grid-cols-2 gap-16 items-center min-h-[90vh]">
        {/* Left Content */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6 bg-brand-50 text-brand-700 border border-brand-100"
          >
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
            Especialistas em Alimentos Artesanais
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl lg:text-7xl font-semibold leading-tight mb-6 text-stone-900 font-serif"
          >
            Sabor que conta{" "}
            <span className="relative text-brand-700">
              histórias
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="absolute -bottom-1 left-0 right-0 h-1 rounded-full bg-brand-100 origin-left"
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-lg lg:text-xl mb-10 max-w-xl leading-relaxed text-stone-600"
          >
            Da fazenda à sua mesa. Trabalhamos com doces de leite, goiabadas, conservas e muito mais. Produtos selecionados com{" "}
            <strong className="text-stone-900 font-medium">qualidade garantida e excelência</strong>.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <button
              onClick={scrollToProducts}
              className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-medium text-white bg-stone-900 transition-all duration-300 hover:bg-stone-800 hover:shadow-lg hover:-translate-y-0.5"
            >
              Ver Catálogo
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={scrollToContact}
              className="px-8 py-4 rounded-xl font-medium text-stone-900 border border-stone-200 bg-white transition-all duration-300 hover:border-stone-300 hover:bg-stone-50 hover:-translate-y-0.5"
            >
              Seja nosso parceiro
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="grid grid-cols-3 gap-6 pt-8 border-t border-stone-200"
          >
            {stats.map(({ value, label, icon: Icon }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="flex flex-col gap-2"
              >
                <div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center text-stone-800">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="font-semibold text-2xl text-stone-900 font-serif">
                    {value}
                  </p>
                  <p className="text-sm text-stone-500">{label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right – Hero Visual */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="hidden lg:flex items-center justify-center relative"
        >
          <div className="relative w-full max-w-lg aspect-square">
            {/* Main Image Container & Carousel */}
            <div className="absolute inset-0 bg-white rounded-[2.5rem] p-4 shadow-2xl shadow-stone-200/50 border border-stone-100 rotate-2 transition-transform duration-500 hover:rotate-0 group/carousel overflow-hidden">
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-brand-50">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeImg}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center justify-center p-8"
                  >
                    <Image
                      src={heroImages[activeImg].src}
                      alt={heroImages[activeImg].alt}
                      width={400}
                      height={400}
                      className="object-contain w-full h-full"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Subtle Hover Controls */}
                <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <button
                    onClick={prevImg}
                    className="pointer-events-auto p-2 rounded-full bg-white/80 hover:bg-white text-stone-900 shadow-lg transition-transform hover:scale-110 active:scale-95 translate-x-[-10px] group-hover/carousel:translate-x-0 transition-all"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextImg}
                    className="pointer-events-auto p-2 rounded-full bg-white/80 hover:bg-white text-stone-900 shadow-lg transition-transform hover:scale-110 active:scale-95 translate-x-[10px] group-hover/carousel:translate-x-0 transition-all"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>

                {/* Indicators */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-1.5 opacity-0 group-hover/carousel:opacity-100 transition-opacity">
                  {heroImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImg(i)}
                      className={`h-1.5 rounded-full transition-all ${
                        activeImg === i ? "w-6 bg-stone-900" : "w-1.5 bg-stone-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge top-right */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-md rounded-2xl px-6 py-4 text-center shadow-xl border border-stone-100"
            >
              <p className="font-semibold text-2xl text-brand-700 font-serif">
                100%
              </p>
              <p className="text-xs text-stone-500 font-medium uppercase tracking-wider mt-1">Artesanal</p>
            </motion.div>

            {/* Floating badge bottom-left */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-stone-900 text-white rounded-2xl px-6 py-4 shadow-xl flex items-center gap-3"
            >
              <Star className="text-yellow-400 fill-yellow-400" size={20} />
              <p className="text-sm font-medium">
                Qualidade Premium
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-stone-300 to-transparent" />
      </motion.div>
    </section>
  );
}
