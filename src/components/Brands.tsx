"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const highlights = [
  {
    brand: "Da Fazenda",
    description: "Doces de leite artesanais em múltiplos sabores: tradição, amendoim, chocolate, coco, morango e mais. Embalagens práticas em lata e pote.",
    products: ["Doce de Leite Tradicional", "Com Amendoim", "Com Chocolate", "Com Coco", "Com Morango"],
    emoji: "🥛",
    themeClass: "from-amber-100 to-transparent border-amber-500",
    textClass: "text-amber-800",
    badgeClass: "bg-amber-100 text-amber-800 border-amber-200",
  },
  {
    brand: "Serra Negra",
    description: "Doces cremosos de alta qualidade, balas artesanais e iguarias que conquistam pelo sabor e pela textura inigualável.",
    products: ["Doce de Leite Cremoso", "Doce de Lata", "Bala de Doce de Leite", "Quebra Queixo"],
    emoji: "⭐",
    themeClass: "from-stone-200 to-transparent border-stone-800",
    textClass: "text-stone-900",
    badgeClass: "bg-stone-100 text-stone-800 border-stone-200",
  },
  {
    brand: "Artesanal",
    description: "Uma linha completa de bananadas, goiabadas, conservas e produtos zero açúcar, todos produzidos com ingredientes selecionados.",
    products: ["Bananada Artesanal", "Goiabada Cascão", "Torresmo Especial", "Paçoca de Carne", "Zero Açúcar"],
    emoji: "🌿",
    themeClass: "from-emerald-100 to-transparent border-emerald-600",
    textClass: "text-emerald-800",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
];

export default function Brands() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="marcas"
      ref={ref}
      className="section-padding bg-stone-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-stone-500">
            Nosso Portfólio
          </span>
          <h2 className="text-4xl lg:text-5xl font-semibold mt-4 mb-6 font-serif text-stone-900">
            Marcas Parceiras
          </h2>
          <p className="max-w-xl mx-auto text-base lg:text-lg leading-relaxed text-stone-600">
            Trabalhamos apenas com marcas que passam pelo nosso rigoroso processo de seleção de qualidade.
          </p>
        </motion.div>

        {/* Brands Grid */}
        <div className="space-y-6">
          {highlights.map(({ brand, description, products: prods, emoji, themeClass, textClass, badgeClass }, i) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className={`bg-gradient-to-r ${themeClass} bg-white rounded-[2rem] p-8 lg:p-10 grid lg:grid-cols-5 gap-10 items-center shadow-sm border-l-4 transition-shadow hover:shadow-lg`}
            >
              {/* Brand info */}
              <div className="lg:col-span-3">
                <div className="flex items-center gap-5 mb-5">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl bg-white shadow-sm border border-stone-100">
                    {emoji}
                  </div>
                  <div>
                    <h3 className={`text-3xl font-semibold font-serif ${textClass}`}>
                      {brand}
                    </h3>
                    <p className="text-xs uppercase tracking-widest text-stone-500 font-medium mt-1">
                      Marca Selecionada
                    </p>
                  </div>
                </div>
                <p className="text-base leading-relaxed text-stone-600">
                  {description}
                </p>
              </div>

              {/* Products tags */}
              <div className="lg:col-span-2">
                <p className={`text-xs uppercase tracking-widest mb-4 font-semibold ${textClass}`}>
                  Linhas em Destaque
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {prods.map((p) => (
                    <span
                      key={p}
                      className={`text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border ${badgeClass}`}
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partner CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 rounded-[2.5rem] p-10 lg:p-16 text-center bg-stone-900 border border-stone-800 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle decoration inside CTA */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-stone-800 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10">
            <h3 className="text-3xl lg:text-4xl font-semibold mb-5 font-serif text-white">
              Quer distribuir nossas marcas?
            </h3>
            <p className="text-lg mb-10 text-stone-400 max-w-2xl mx-auto">
              Seja um parceiro da UaiTche e leve produtos artesanais de alta qualidade e com alta margem de lucro para o seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5531999618585"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 bg-brand-600 text-white"
              >
                Quero ser parceiro
              </a>
              <a
                href="#contato"
                className="px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300 bg-stone-800 text-white border border-stone-700 hover:bg-stone-700"
              >
                Conhecer Mais
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
