"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, Leaf, Shield, Truck } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Tradição & Afeto",
    description:
      "Cada produto que distribuímos carrega a tradição de quem produz com amor e dedicação. Selecionamos somente o que acreditamos.",
    color: "#7E2B38",
    bg: "rgba(126,43,56,0.08)",
  },
  {
    icon: Leaf,
    title: "Qualidade Natural",
    description:
      "Priorizamos produtos com ingredientes naturais, sem conservantes artificiais desnecessários, respeitando o processo artesanal.",
    color: "#1F5F2F",
    bg: "rgba(31,95,47,0.08)",
  },
  {
    icon: Shield,
    title: "Confiança Garantida",
    description:
      "Nossa reputação foi construída ao longo de anos entregando produtos confiáveis com total responsabilidade.",
    color: "#103F54",
    bg: "rgba(16,63,84,0.08)",
  },
  {
    icon: Truck,
    title: "Logística Eficiente",
    description:
      "Entregamos com pontualidade para todo o território nacional. Sua loja nunca fica sem estoque.",
    color: "#B0C9B1",
    bg: "rgba(176,201,177,0.25)",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="sobre"
      ref={ref}
      className="section-padding"
      style={{ backgroundColor: "#FAF8F6" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span
            className="text-xs uppercase tracking-[0.25em] font-medium"
            style={{ color: "#7E2B38", fontFamily: "'Lato', sans-serif" }}
          >
            Quem Somos
          </span>
          <h2
            className="text-4xl lg:text-5xl font-semibold mt-3 mb-5"
            style={{ fontFamily: "'Playfair Display', serif", color: "#7E2B38" }}
          >
            A história por trás do sabor
          </h2>
          <p
            className="max-w-2xl mx-auto text-base lg:text-lg leading-relaxed"
            style={{ color: "#212121", fontFamily: "'Lato', sans-serif" }}
          >
            A <strong>Distribuidora UaiTche</strong> nasceu da paixão por alimentos genuínos e artesanais.
            Conectamos produtores regionais de excelência aos melhores pontos de venda, levando sabor
            autêntico e qualidade real à mesa de cada consumidor.
          </p>
        </motion.div>

        {/* Story Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass-card rounded-3xl p-8 lg:p-12 mb-16 grid lg:grid-cols-2 gap-10 items-center"
        >
          <div>
            <h3
              className="text-2xl lg:text-3xl font-semibold mb-4"
              style={{ fontFamily: "'Playfair Display', serif", color: "#103F54" }}
            >
              Do produtor ao consumidor — com respeito em cada etapa
            </h3>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "#212121", fontFamily: "'Lato', sans-serif" }}
            >
              Iniciamos nossas atividades movidos pela crença de que produtos artesanais de qualidade
              merecem alcançar mais pessoas. Percorremos fazendas, ateliês e cooperativas em busca das
              melhores produções regionais.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "#212121", fontFamily: "'Lato', sans-serif" }}
            >
              Hoje representamos marcas consagradas como <strong style={{ color: "#7E2B38" }}>Da Fazenda</strong>,{" "}
              <strong style={{ color: "#103F54" }}>Serra Negra</strong> e uma curadoria de{" "}
              <strong style={{ color: "#1F5F2F" }}>produtos artesanais</strong> selecionados com rigor.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { label: "Doces e conservas artesanais", percent: 95 },
              { label: "Satisfação dos clientes", percent: 98 },
              { label: "Pontualidade nas entregas", percent: 97 },
            ].map(({ label, percent }) => (
              <div key={label}>
                <div className="flex justify-between mb-1.5">
                  <span
                    className="text-sm font-medium"
                    style={{ color: "#212121", fontFamily: "'Lato', sans-serif" }}
                  >
                    {label}
                  </span>
                  <span className="text-sm font-semibold" style={{ color: "#1F5F2F" }}>
                    {percent}%
                  </span>
                </div>
                <div
                  className="h-2 rounded-full overflow-hidden"
                  style={{ backgroundColor: "rgba(176,201,177,0.3)" }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${percent}%` } : {}}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: "#1F5F2F" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map(({ icon: Icon, title, description, color, bg }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              className="glass-card rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300 group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: bg }}
              >
                <Icon size={22} style={{ color }} />
              </div>
              <h4
                className="font-semibold text-base mb-2"
                style={{ fontFamily: "'Playfair Display', serif", color: "#103F54" }}
              >
                {title}
              </h4>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#212121", opacity: 0.8, fontFamily: "'Lato', sans-serif" }}
              >
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
