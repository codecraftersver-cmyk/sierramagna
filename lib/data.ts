export const navLinks = [
  { href: "#tallas", label: "Tallas" },
  { href: "#marcas", label: "Marcas" },
  { href: "#productos", label: "Camisas" },
  { href: "#historia", label: "Historia" },
  { href: "#contacto", label: "Contacto" },
] as const;

export const sizes = [
  {
    size: "2XL",
    description: "Disponible ahora. Corte relajado con presencia.",
    href: "#productos",
    available: true,
  },
  {
    size: "3XL",
    description: "Disponible ahora. Amplio, cómodo y definido.",
    href: "#productos",
    available: true,
  },
  {
    size: "4XL",
    description: "Próximamente. Más presencia, mismo estándar.",
    href: "#contacto",
    available: false,
  },
  {
    size: "5XL",
    description: "Próximamente. Para quienes no se achican.",
    href: "#contacto",
    available: false,
  },
] as const;

export const categories = [
  {
    name: "Camisas",
    href: "#productos",
    image: "/products/styled/navy.png",
    status: "disponible" as const,
  },
  {
    name: "Polos",
    href: "#contacto",
    image:
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc864f?auto=format&fit=crop&w=1200&q=80",
    status: "proximamente" as const,
  },
  {
    name: "Chamarras",
    href: "#contacto",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=80",
    status: "proximamente" as const,
  },
  {
    name: "Gorras",
    href: "#contacto",
    image:
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1200&q=80",
    status: "proximamente" as const,
  },
  {
    name: "Accesorios",
    href: "#contacto",
    image:
      "https://images.unsplash.com/photo-1624222247344-550fb60583fd?auto=format&fit=crop&w=1200&q=80",
    status: "proximamente" as const,
  },
] as const;

/** Catálogo actual: Magellan Outdoors · modelo Laguna Madre */
export const productLine = {
  brand: "Magellan Outdoors",
  model: "Laguna Madre",
  category: "Camisa",
} as const;

/** 7 colores · variedad manga corta + manga larga · stock 2XL/3XL */
export const products = [
  {
    id: "sm-navy-mc",
    name: "Camisa Navy",
    sleeve: "Manga corta",
    colorName: "Navy",
    colorHex: "#1B2A4A",
    price: "$750",
    sizes: ["2XL", "3XL"],
    image: "/products/styled/navy.png",
    featured: true,
    brand: productLine.brand,
    model: productLine.model,
  },
  {
    id: "sm-azul-fuerte-mc",
    name: "Camisa Azul Fuerte",
    sleeve: "Manga corta",
    colorName: "Azul fuerte",
    colorHex: "#1E4DB7",
    price: "$750",
    sizes: ["3XL"],
    image: "/products/styled/azul-fuerte.png",
    featured: false,
    brand: productLine.brand,
    model: productLine.model,
  },
  {
    id: "sm-rojo-mc",
    name: "Camisa Rojo",
    sleeve: "Manga corta",
    colorName: "Rojo",
    colorHex: "#C1121F",
    price: "$750",
    sizes: ["2XL", "3XL"],
    image: "/products/styled/rojo.png",
    featured: false,
    brand: productLine.brand,
    model: productLine.model,
  },
  {
    id: "sm-negro-mc",
    name: "Camisa Negro",
    sleeve: "Manga corta",
    colorName: "Negro",
    colorHex: "#1A1A1A",
    price: "$750",
    sizes: ["2XL"],
    image: "/products/styled/negro.png",
    featured: false,
    brand: productLine.brand,
    model: productLine.model,
  },
  {
    id: "sm-teal-ml",
    name: "Camisa Teal",
    sleeve: "Manga larga",
    colorName: "Teal",
    colorHex: "#2F8F7B",
    price: "$900",
    sizes: ["2XL", "3XL"],
    image: "/products/styled/teal.png",
    featured: false,
    brand: productLine.brand,
    model: productLine.model,
  },
  {
    id: "sm-azul-claro-ml",
    name: "Camisa Azul Claro",
    sleeve: "Manga larga",
    colorName: "Azul claro",
    colorHex: "#6BA3D6",
    price: "$900",
    sizes: ["2XL"],
    image: "/products/styled/azul-claro.png",
    featured: false,
    brand: productLine.brand,
    model: productLine.model,
  },
  {
    id: "sm-vino-ml",
    name: "Camisa Vino",
    sleeve: "Manga larga",
    colorName: "Vino",
    colorHex: "#6B1E2A",
    price: "$900",
    sizes: ["2XL"],
    image: "/products/styled/vino.png",
    featured: false,
    brand: productLine.brand,
    model: productLine.model,
  },
] as const;

export const footerLinks = {
  tienda: [
    { href: "#productos", label: "Camisas" },
    { href: "#tallas", label: "Guía de tallas" },
    { href: "#marcas", label: "Marcas" },
    { href: "#", label: "Novedades" },
  ],
  ayuda: [
    { href: "#", label: "Envíos" },
    { href: "#", label: "Cambios y devoluciones" },
    { href: "#", label: "Preguntas frecuentes" },
    { href: "#contacto", label: "Contacto" },
  ],
  marca: [
    { href: "#historia", label: "Nuestra historia" },
    { href: "#marcas", label: "Marcas" },
    { href: "#", label: "Calidad" },
    { href: "#", label: "Mayoristas" },
  ],
} as const;
