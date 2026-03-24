// src/data/products.ts

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  description: string;
  image: string;
  highlight?: boolean;
  badge?: string;
}

export interface Brand {
  id: string;
  name: string;
  description: string;
  color: string;
}

export const brands: Brand[] = [
  {
    id: "da-fazenda",
    name: "Da Fazenda",
    description: "Doces de leite em diversas versões - tradição e sabor autêntico",
    color: "#7E2B38",
  },
  {
    id: "serra-negra",
    name: "Serra Negra",
    description: "Balas e doces cremosos com qualidade artesanal diferenciada",
    color: "#103F54",
  },
  {
    id: "artesanal",
    name: "Artesanal",
    description: "Bananadas, goiabadas e conservas feitas com carinho e tradição",
    color: "#1F5F2F",
  },
];

export const products: Product[] = [
  // Da Fazenda
  {
    id: "da-fazenda-doce-leite",
    name: "Doce de Leite Tradicional",
    brand: "Da Fazenda",
    category: "Doce de Leite",
    description: "O clássico doce de leite artesanal da fazenda – cremoso, encorpado e irresistível.",
    image: "/assets/da fazenda doce de leite.png",
    highlight: true,
    badge: "Mais Vendido",
  },
  {
    id: "da-fazenda-amendoin",
    name: "Doce de Leite com Amendoim",
    brand: "Da Fazenda",
    category: "Doce de Leite",
    description: "A combinação perfeita entre o cremoso doce de leite e o crocante do amendoim.",
    image: "/assets/da fazenda doce de leite amendoin.png",
  },
  {
    id: "da-fazenda-chocolate",
    name: "Doce de Leite com Chocolate",
    brand: "Da Fazenda",
    category: "Doce de Leite",
    description: "Irresistível fusão de doce de leite artesanal com o sabor intenso do chocolate.",
    image: "/assets/da fazenda doce de leite chocolate.png",
    badge: "Novidade",
  },
  {
    id: "da-fazenda-coco",
    name: "Doce de Leite com Coco",
    brand: "Da Fazenda",
    category: "Doce de Leite",
    description: "Sabor tropical com coco ralado misturado ao autêntico doce de leite da fazenda.",
    image: "/assets/da fazenda doce de leite coco.png",
  },
  {
    id: "da-fazenda-morango",
    name: "Doce de Leite com Morango",
    brand: "Da Fazenda",
    category: "Doce de Leite",
    description: "A leveza e o frescor do morango encontram o doce de leite artesanal.",
    image: "/assets/doce de leite da fazenda morango.png",
    badge: "Novidade",
  },
  {
    id: "da-fazenda-potes",
    name: "Doces de Leite em Potes",
    brand: "Da Fazenda",
    category: "Doce de Leite",
    description: "Linha completa de doces de leite em potes práticos para toda a família.",
    image: "/assets/da fazenda doces de leite em pote.png",
  },
  // Serra Negra
  {
    id: "serra-negra-cremosa",
    name: "Serra Negra Cremosa",
    brand: "Serra Negra",
    category: "Doce de Leite",
    description: "Doce de leite cremoso de lata com a qualidade artesanal da Serra Negra.",
    image: "/assets/serra negra cremosa.png",
    highlight: true,
  },
  {
    id: "serra-negra-doce-lata",
    name: "Doce de Lata Cremoso",
    brand: "Serra Negra",
    category: "Doce de Leite",
    description: "Praticidade e sabor em uma lata de doce de leite cremoso Serra Negra.",
    image: "/assets/serra negra doce de lata cremoso.png",
  },
  {
    id: "serra-negra-doce-leite",
    name: "Doce de Leite Cremoso",
    brand: "Serra Negra",
    category: "Doce de Leite",
    description: "O sabor tradicional e encorpado do doce de leite cremoso Serra Negra.",
    image: "/assets/serra negra doce de leite cremoso.png",
  },
  {
    id: "serra-negra-bala-doce",
    name: "Bala de Doce de Leite",
    brand: "Serra Negra",
    category: "Balas",
    description: "A balinhas artesanais de doce de leite Serra Negra – sabor que encanta.",
    image: "/assets/serra negra bala de doce de leite.png",
    badge: "Especial",
  },
  {
    id: "serra-negra-quebra-queixo",
    name: "Bala Quebra Queixo",
    brand: "Serra Negra",
    category: "Balas",
    description: "A tradicional bala quebra queixo artesanal para os amantes de doces firmes.",
    image: "/assets/serra negra bala quebra queixo.png",
  },
  // Artesanais Variados
  {
    id: "bananada-artesanal",
    name: "Bananada Artesanal",
    brand: "Artesanal",
    category: "Frutas",
    description: "Bananada artesanal feita com bananas selecionadas no ponto certo de doçura.",
    image: "/assets/bananada artesanal.png",
    highlight: true,
  },
  {
    id: "bananada-artesanal-lata",
    name: "Bananada Artesanal em Lata",
    brand: "Artesanal",
    category: "Frutas",
    description: "Bananada artesanal em embalagem de lata para conservar todo o sabor.",
    image: "/assets/bananada artesanal lata.png",
  },
  {
    id: "bananada-cremosa-zero",
    name: "Bananada Cremosa Zero Açúcar",
    brand: "Artesanal",
    category: "Frutas",
    description: "Sabor de bananada artesanal sem adição de açúcar – ideal para quem cuida da saúde.",
    image: "/assets/bananada cremosa sem açucar.png",
    badge: "Zero Açúcar",
  },
  {
    id: "goiabada-cascao",
    name: "Goiabada Cascão",
    brand: "Artesanal",
    category: "Frutas",
    description: "Goiabada cascão artesanal com textura firme e sabor intenso de goiaba.",
    image: "/assets/goiabada cascao.png",
    highlight: true,
  },
  {
    id: "goiabada-cascao-light",
    name: "Goiabada Cascão Light",
    brand: "Artesanal",
    category: "Frutas",
    description: "Toda a gostosura da goiabada cascão com menos calorias.",
    image: "/assets/goiabada cascao ligth.png",
    badge: "Light",
  },
  {
    id: "goiabada-cremosa",
    name: "Goiabada Cremosa",
    brand: "Artesanal",
    category: "Frutas",
    description: "Goiabada cremosa artesanal – perfeita para acompanhar queijo ou pão.",
    image: "/assets/goiabada cremosa.png",
  },
  {
    id: "doces-zero-acucar",
    name: "Linha Zero Açúcar",
    brand: "Artesanal",
    category: "Zero Açúcar",
    description: "Linha completa de doces artesanais zero açúcar para uma vida mais saudável.",
    image: "/assets/doces zero açucar.png",
    badge: "Zero Açúcar",
  },
  // Conservas
  {
    id: "carne-suina-lata",
    name: "Carne Suína em Lata",
    brand: "Artesanal",
    category: "Conservas",
    description: "Carne suína artesanal em lata, temperada e processada com cuidado especial.",
    image: "/assets/carne suina em lata.png",
    highlight: true,
  },
  {
    id: "pacoca-carne-lata",
    name: "Paçoca de Carne na Lata",
    brand: "Artesanal",
    category: "Conservas",
    description: "A famosa paçoca de carne gaúcha enlatada para consumo prático e saboroso.",
    image: "/assets/paçoca de carne na lata.png",
    badge: "Regional",
  },
  {
    id: "torresmo-especial",
    name: "Torresmo Especial",
    brand: "Artesanal",
    category: "Conservas",
    description: "Torresmo artesanal especial – crocante, temperado e cheio de sabor gaúcho.",
    image: "/assets/torresmo especial.png",
    highlight: true,
    badge: "Premium",
  },
  // Arroz
  {
    id: "arroz-iza",
    name: "Arroz Iza",
    brand: "Iza",
    category: "Grãos",
    description: "Arroz Iza selecionado – qualidade garantida para as refeições do dia a dia.",
    image: "/assets/arroz Iza.png",
  },
  {
    id: "arroz-beira-rio",
    name: "Arroz Beira Rio",
    brand: "Beira Rio",
    category: "Grãos",
    description: "Arroz Beira Rio com grãos selecionados para um cozimento perfeito.",
    image: "/assets/arroz beira rio.png",
  },
];

export const categories = [
  "Todos",
  "Doce de Leite",
  "Frutas",
  "Balas",
  "Conservas",
  "Zero Açúcar",
  "Grãos",
];
