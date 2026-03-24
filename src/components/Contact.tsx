"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, Send, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefone",
    value: "(31) 99961-8585",
    href: "tel:+5531999618585",
    color: "#103F54",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "(31) 99961-8585",
    href: "https://wa.me/5531999618585",
    color: "#1F5F2F",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@distribuidorauaitche.com.br",
    href: "mailto:contato@distribuidorauaitche.com.br",
    color: "#7E2B38",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Brasil – Atendimento Nacional",
    href: "#",
    color: "#CD9F92",
  },
  {
    icon: Clock,
    label: "Horário",
    value: "Seg–Sex: 8h às 18h",
    href: "#",
    color: "#103F54",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // WhatsApp deep link with message
    const msg = encodeURIComponent(
      `Olá! Meu nome é ${formData.name}${formData.company ? ` da empresa ${formData.company}` : ""}.\n\nTelefone: ${formData.phone}\nE-mail: ${formData.email}\n\nMensagem: ${formData.message}`
    );
    window.open(`https://wa.me/5531999618585?text=${msg}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputStyle = {
    width: "100%" as const,
    padding: "12px 16px",
    borderRadius: "12px",
    border: "1.5px solid rgba(16,63,84,0.15)",
    backgroundColor: "rgba(255,255,255,0.8)",
    color: "#212121",
    fontFamily: "'Lato', sans-serif",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <section
      id="contato"
      ref={ref}
      className="section-padding"
      style={{ backgroundColor: "#CD9F9222" }} // Terracotta tint
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
            Entre em Contato
          </span>
          <h2
            className="text-4xl lg:text-5xl font-semibold mt-3 mb-5"
            style={{ fontFamily: "'Playfair Display', serif", color: "#7E2B38" }}
          >
            Vamos conversar?
          </h2>
          <p
            className="max-w-xl mx-auto text-base lg:text-lg leading-relaxed"
            style={{ color: "#212121", fontFamily: "'Lato', sans-serif" }}
          >
            Estamos prontos para atender distribuidores, varejos e revendedores. Entre em contato
            e descubra nossas condições especiais.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass-card rounded-2xl p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${color}18` }}
                >
                  <Icon size={20} style={{ color }} />
                </div>
                <div>
                  <p
                    className="text-xs uppercase tracking-widest mb-0.5"
                    style={{ color: "#212121", opacity: 0.5, fontFamily: "'Lato', sans-serif" }}
                  >
                    {label}
                  </p>
                  <p
                    className="font-medium text-sm"
                    style={{ color: "#212121", fontFamily: "'Lato', sans-serif" }}
                  >
                    {value}
                  </p>
                </div>
              </a>
            ))}

            {/* WhatsApp featured */}
            <a
              href="https://wa.me/5531999618585"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-semibold text-base transition-all duration-300 hover:shadow-xl hover:-translate-y-1 mt-2"
              style={{
                background: "linear-gradient(135deg, #1F5F2F 0%, #2d8a44 100%)",
                color: "#FAF8F6",
                fontFamily: "'Lato', sans-serif",
              }}
            >
              <MessageCircle size={20} />
              Chamar no WhatsApp
            </a>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3 glass-card rounded-3xl p-8"
          >
            <h3
              className="text-xl font-semibold mb-6"
              style={{ fontFamily: "'Playfair Display', serif", color: "#103F54" }}
            >
              Envie uma mensagem
            </h3>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="text-5xl mb-4">✅</div>
                <h4
                  className="text-xl font-semibold mb-2"
                  style={{ fontFamily: "'Playfair Display', serif", color: "#1F5F2F" }}
                >
                  Mensagem enviada!
                </h4>
                <p style={{ color: "#212121", fontFamily: "'Lato', sans-serif" }}>
                  Você será redirecionado ao WhatsApp para continuar a conversa.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-xs uppercase tracking-widest mb-1.5 font-medium"
                      style={{ color: "#103F54", fontFamily: "'Lato', sans-serif" }}
                    >
                      Nome *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#103F54")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(16,63,84,0.15)")}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs uppercase tracking-widest mb-1.5 font-medium"
                      style={{ color: "#103F54", fontFamily: "'Lato', sans-serif" }}
                    >
                      Empresa
                    </label>
                    <input
                      type="text"
                      placeholder="Nome da empresa"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#103F54")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(16,63,84,0.15)")}
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-xs uppercase tracking-widest mb-1.5 font-medium"
                      style={{ color: "#103F54", fontFamily: "'Lato', sans-serif" }}
                    >
                      E-mail *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="seu@email.com.br"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#103F54")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(16,63,84,0.15)")}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs uppercase tracking-widest mb-1.5 font-medium"
                      style={{ color: "#103F54", fontFamily: "'Lato', sans-serif" }}
                    >
                      Telefone
                    </label>
                    <input
                      type="tel"
                      placeholder="(31) 99961-8585"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#103F54")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(16,63,84,0.15)")}
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="block text-xs uppercase tracking-widest mb-1.5 font-medium"
                    style={{ color: "#103F54", fontFamily: "'Lato', sans-serif" }}
                  >
                    Mensagem *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Descreva sua necessidade, volume de compra, região de atuação..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ ...inputStyle, resize: "none" }}
                    onFocus={(e) => (e.target.style.borderColor = "#103F54")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(16,63,84,0.15)")}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:translate-y-0"
                  style={{
                    backgroundColor: "#1F5F2F",
                    color: "#FAF8F6",
                    fontFamily: "'Lato', sans-serif",
                  }}
                >
                  <Send size={18} />
                  Enviar via WhatsApp
                </button>
                <p
                  className="text-center text-xs opacity-60"
                  style={{ color: "#212121", fontFamily: "'Lato', sans-serif" }}
                >
                  Ao enviar, você será redirecionado ao WhatsApp com sua mensagem.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
