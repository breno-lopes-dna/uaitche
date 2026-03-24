"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "#sobre", label: "Sobre Nós" },
  { href: "#produtos", label: "Produtos" },
  { href: "#marcas", label: "Marcas" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-stone-900 text-stone-50 text-xs py-2 px-6 hidden md:flex items-center justify-end gap-6 font-medium">
        <a
          href="tel:+5531999618585"
          className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity"
        >
          <Phone size={12} />
          (31) 99961-8585
        </a>
        <a
          href="mailto:contato@distribuidorauaitche.com.br"
          className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity"
        >
          <Mail size={12} />
          contato@distribuidorauaitche.com.br
        </a>
      </div>

      {/* Main Header */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed left-0 right-0 z-50 transition-all duration-500 max-w-7xl mx-auto px-4 sm:px-6 ${
          scrolled ? "top-4" : "top-14"
        }`}
      >
        <div 
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled ? "bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-stone-100 px-6 py-3" : "px-0 py-4 bg-transparent"
          }`}
        >
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <div className="relative w-32 h-14 transition-transform group-hover:scale-105">
              <Image
                src="/assets/logo.png"
                alt="Distribuidora UaiTche"
                fill
                className="object-contain"
                priority
              />
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium transition-colors duration-200 relative group text-stone-600 hover:text-stone-900"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300 rounded-full bg-brand-600" />
              </button>
            ))}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/5531999618585"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 bg-stone-900 text-white"
            >
              Fale Conosco
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg transition-colors text-stone-900 hover:bg-stone-100"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-2 rounded-2xl overflow-hidden bg-white shadow-xl border border-stone-100"
            >
              <div className="px-6 py-4 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="text-base font-medium text-left py-3 border-b border-stone-100 text-stone-800 last:border-0"
                  >
                    {link.label}
                  </button>
                ))}
                <a
                  href="https://wa.me/5531999618585"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-5 py-3.5 rounded-xl text-sm font-semibold text-center bg-stone-900 text-white"
                >
                  Fale Conosco no WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
