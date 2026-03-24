import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600"], 
  variable: "--font-inter" 
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"], 
  variable: "--font-playfair" 
});

export const metadata: Metadata = {
  title: "Distribuidora UaiTche | Especialistas em Alimentos Artesanais do Sul",
  description:
    "A Distribuidora UaiTche traz até você os melhores produtos artesanais: doces de leite, bananadas, goiabadas, torresmo e muito mais. Sabor autêntico de origem.",
  keywords: [
    "distribuidora",
    "produtos artesanais",
    "doce de leite",
    "bananada",
    "goiabada",
    "gaúcho",
    "UaiTche",
    "alimentos especiais",
  ],
  authors: [{ name: "Distribuidora UaiTche" }],
  openGraph: {
    title: "Distribuidora UaiTche | Alimentos Artesanais de Qualidade",
    description:
      "Sabor autêntico direto da origem. Doces artesanais, conservas e iguarias selecionadas com qualidade garantida.",
    type: "website",
    locale: "pt_BR",
    siteName: "Distribuidora UaiTche",
  },
  twitter: {
    card: "summary_large_image",
    title: "Distribuidora UaiTche",
    description: "Alimentos artesanais com sabor de origem",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="font-sans antialiased text-stone-800 bg-stone-50 selection:bg-orange-200 selection:text-orange-900">
        {children}
      </body>
    </html>
  );
}
