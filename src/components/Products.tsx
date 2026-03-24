"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence, Variants } from "framer-motion";
import { products, categories } from "@/data/products";
import { ShoppingBag, Info, ExternalLink } from "lucide-react";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const filtered = activeCategory === "Todos"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <section
      id="produtos"
      ref={ref}
      className="section-padding bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-700">
            Catálogo
          </span>
          <h2 className="text-4xl lg:text-5xl font-semibold mt-4 mb-6 font-serif text-stone-900">
            Nossos Produtos
          </h2>
          <p className="max-w-xl mx-auto text-base lg:text-lg leading-relaxed text-stone-600">
            Uma curadoria especial de alimentos artesanais com origem garantida e qualidade que você pode sentir.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 justify-center mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-stone-900 text-white shadow-lg shadow-stone-200"
                  : "bg-stone-50 text-stone-600 border border-stone-200 hover:border-stone-300 hover:bg-stone-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {filtered.map((product) => (
              <motion.div
                key={product.id}
                variants={cardVariants}
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="bg-white rounded-2xl overflow-hidden group border border-stone-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-stone-50">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-6 transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Badge */}
                  {product.badge && (
                    <span
                      className={`absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full text-white ${
                        product.badge === "Zero Açúcar"
                          ? "bg-emerald-600"
                          : product.badge === "Novidade"
                          ? "bg-rose-600"
                          : product.badge === "Mais Vendido"
                          ? "bg-stone-900"
                          : "bg-brand-600"
                      }`}
                    >
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brand-700 mb-2">
                    {product.brand}
                  </p>
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2 font-serif text-stone-900 leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-sm leading-relaxed mb-6 line-clamp-2 text-stone-500">
                    {product.description}
                  </p>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <a
                      href="https://wa.me/5531999618585"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-stone-900 text-white transition-all duration-200 hover:bg-stone-800"
                    >
                      <ShoppingBag size={14} />
                      Solicitar
                    </a>
                    <button
                      className="p-2.5 rounded-xl bg-stone-50 text-stone-600 border border-stone-200 transition-colors hover:bg-stone-100 hover:text-stone-900"
                      aria-label={`Informações sobre ${product.name}`}
                    >
                      <Info size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-stone-600 mb-6 font-medium">
            Não encontrou o que procura? Temos muito mais no nosso catálogo completo.
          </p>
          <a
            href="https://wa.me/5531999618585"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 bg-brand-700 text-white"
          >
            <ExternalLink size={16} />
            Ver Catálogo Completo
          </a>
        </motion.div>
      </div>
    </section>
  );
}
