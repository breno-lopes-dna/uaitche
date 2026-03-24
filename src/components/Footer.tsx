"use client";

import { MapPin, Phone, Mail, ArrowUp } from "lucide-react";
import Image from "next/image";

// Inline SVG social icons (Instagram & Facebook not in lucide-react v1)
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
);
const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer style={{ backgroundColor: "#103F54", color: "#FAF8F6" }}>
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-6 group">
            <div className="relative w-28 h-12 transition-transform group-hover:scale-105">
              <Image
                src="/assets/logo.png"
                alt="Distribuidora UaiTche"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <p
            className="text-sm leading-relaxed opacity-75 mb-6"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Distribuindo sabor, qualidade e tradição por todo o Brasil. Conectamos os melhores
            produtores artesanais ao seu negócio.
          </p>
          {/* Social */}
          <div className="flex gap-3">
            {[
              { href: "#", Icon: InstagramIcon, label: "Instagram" },
              { href: "#", Icon: FacebookIcon, label: "Facebook" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ backgroundColor: "rgba(176,201,177,0.15)", color: "#B0C9B1" }}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4
            className="font-semibold text-base mb-5"
            style={{ fontFamily: "'Playfair Display', serif", color: "#B0C9B1" }}
          >
            Navegação
          </h4>
          <nav className="flex flex-col gap-3">
            {["#sobre|Sobre Nós", "#produtos|Produtos", "#marcas|Marcas", "#contato|Contato"].map(
              (item) => {
                const [href, label] = item.split("|");
                return (
                  <a
                    key={href}
                    href={href}
                    className="text-sm opacity-70 hover:opacity-100 transition-opacity hover:text-[#B0C9B1]"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    {label}
                  </a>
                );
              }
            )}
          </nav>
        </div>

        {/* Contact Info */}
        <div>
          <h4
            className="font-semibold text-base mb-5"
            style={{ fontFamily: "'Playfair Display', serif", color: "#B0C9B1" }}
          >
            Contato
          </h4>
          <div className="flex flex-col gap-3">
            {[
              { icon: Phone, text: "(31) 99961-8585" },
              { icon: Mail, text: "contato@distribuidorauaitche.com.br" },
              { icon: MapPin, text: "Atendimento Nacional" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2.5 text-sm opacity-70">
                <Icon size={14} style={{ color: "#B0C9B1", flexShrink: 0 }} />
                <span style={{ fontFamily: "'Lato', sans-serif" }}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="border-t px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3"
        style={{ borderColor: "rgba(176,201,177,0.15)" }}
      >
        <p
          className="text-xs opacity-50 text-center sm:text-left"
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          © {new Date().getFullYear()} Distribuidora UaiTche. Todos os direitos reservados.
        </p>
        <button
          onClick={scrollTop}
          aria-label="Voltar ao topo"
          className="flex items-center gap-1.5 text-xs opacity-50 hover:opacity-100 transition-opacity"
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          <ArrowUp size={14} />
          Voltar ao topo
        </button>
      </div>
    </footer>
  );
}
