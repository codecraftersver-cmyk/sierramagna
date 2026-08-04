export const navLinks = [
  { href: "/#marcas", label: "Marcas" },
  { href: "/#productos", label: "Camisas" },
  { href: "/#historia", label: "Historia" },
  { href: "/#contacto", label: "Contacto" },
] as const;

export const sizes = [
  {
    size: "2XL",
    description: "Disponible ahora. Corte relajado con presencia.",
    href: "/#productos",
    available: true,
  },
  {
    size: "3XL",
    description: "Disponible ahora. Amplio, comodo y definido.",
    href: "/#productos",
    available: true,
  },
  {
    size: "4XL",
    description: "Proximamente. Mas presencia, mismo estandar.",
    href: "/#contacto",
    available: false,
  },
  {
    size: "5XL",
    description: "Proximamente. Para quienes no se achican.",
    href: "/#contacto",
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

/** Tallas Magellan Academy: XS, S, M, L, XL, 2XL, 3XL, 4XL */
export const ALL_SIZES = [
  "XS",
  "S",
  "M",
  "L",
  "XL",
  "2XL",
  "3XL",
  "4XL",
] as const;

export const SIZE_LABEL = ALL_SIZES.join(", ");

export type CatalogLine = "laguna-mc" | "laguna-ml" | "casting-crew";

export type CatalogSlug = "manga-corta" | "manga-larga" | "playeras";

export const catalogLines = [
  {
    id: "laguna-mc" as const,
    slug: "manga-corta" as const,
    href: "/camisas/manga-corta",
    label: "Manga corta",
    title: "Laguna Madre - Manga corta",
    brand: "Magellan Outdoors",
    model: "Laguna Madre",
    kind: "Camisa",
    price: "$750",
    coverImage: "/products/catalog/mc-sm/brilliant-blue.png",
    summary:
      "Camisa Laguna Madre manga corta. Ligera, transpirable y lista para el dia a dia outdoor.",
  },
  {
    id: "laguna-ml" as const,
    slug: "manga-larga" as const,
    href: "/camisas/manga-larga",
    label: "Manga larga",
    title: "Laguna Madre - Manga larga",
    brand: "Magellan Outdoors",
    model: "Laguna Madre",
    kind: "Camisa",
    price: "$950",
    coverImage: "/products/catalog/ml-sm/magellan.png",
    summary:
      "Camisa Laguna Madre manga larga. Proteccion y comodidad para jornadas largas al sol.",
  },
  {
    id: "casting-crew" as const,
    slug: "playeras" as const,
    href: "/camisas/playeras",
    label: "Playeras",
    title: "Casting Crew - Manga larga",
    brand: "Magellan Outdoors",
    model: "Casting Crew Core Graphic",
    kind: "Playera",
    price: "$650",
    coverImage: "/products/catalog/crew/dazzling-blue.png",
    summary:
      "Playera Casting Crew manga larga. Comoda para pesca, outdoor y uso casual.",
  },
] as const;

type ProductInput = {
  id: string;
  line: CatalogLine;
  name: string;
  colorName: string;
  colorHex: string;
  image: string;
  sleeve: "Manga corta" | "Manga larga";
};

const BRAND = "Magellan Outdoors";

/**
 * Colores Academy Laguna Madre:
 * - Manga corta: 30 (PDP SS)
 * - Manga larga: 20 (PDP LS)
 * Sin marcar stock en la UI.
 */
const catalogRaw: ProductInput[] = [
  // ---- Laguna Madre manga corta (30) ----
  // https://www.academy.com/p/magellan-outdoors-mens-laguna-madre-solid-short-sleeve-fishing-shirt-109383201
  {
    id: "lm-mc-beach-glass",
    line: "laguna-mc",
    name: "Beach Glass",
    colorName: "Beach Glass",
    colorHex: "#7BA8A0",
    image: "/products/catalog/mc-sm/beach-glass.png",
    sleeve: "Manga corta",
  },
  {
    id: "lm-mc-bright-white",
    line: "laguna-mc",
    name: "Bright White",
    colorName: "Bright White",
    colorHex: "#F2F2F0",
    image: "/products/catalog/mc-sm/bright-white.png",
    sleeve: "Manga corta",
  },
  {
    id: "lm-mc-caviar",
    line: "laguna-mc",
    name: "Caviar",
    colorName: "Caviar",
    colorHex: "#1A1A1A",
    image: "/products/catalog/mc-sm/caviar.png",
    sleeve: "Manga corta",
  },
  {
    id: "lm-mc-magellan",
    line: "laguna-mc",
    name: "Magellan",
    colorName: "Magellan",
    colorHex: "#1B2A4A",
    image: "/products/catalog/mc-sm/magellan.png",
    sleeve: "Manga corta",
  },
  {
    id: "lm-mc-medieval-blue",
    line: "laguna-mc",
    name: "Medieval Blue",
    colorName: "Medieval Blue",
    colorHex: "#2C3E6B",
    image: "/products/catalog/mc-sm/medieval-blue.png",
    sleeve: "Manga corta",
  },
  {
    id: "lm-mc-olive-night",
    line: "laguna-mc",
    name: "Olive Night",
    colorName: "Olive Night",
    colorHex: "#3D4A2E",
    image: "/products/catalog/mc-sm/olive-night.png",
    sleeve: "Manga corta",
  },
  {
    id: "lm-mc-rio-red",
    line: "laguna-mc",
    name: "Rio Red",
    colorName: "Rio Red",
    colorHex: "#C1121F",
    image: "/products/catalog/mc-sm/rio-red.png",
    sleeve: "Manga corta",
  },
  {
    id: "lm-mc-silver-mink",
    line: "laguna-mc",
    name: "Silver Mink",
    colorName: "Silver Mink",
    colorHex: "#A8A29E",
    image: "/products/catalog/mc-sm/silver-mink.png",
    sleeve: "Manga corta",
  },
  {
    id: "lm-mc-sugar-coral",
    line: "laguna-mc",
    name: "Sugar Coral",
    colorName: "Sugar Coral",
    colorHex: "#E07A5F",
    image: "/products/catalog/mc-sm/sugar-coral.png",
    sleeve: "Manga corta",
  },
  {
    id: "lm-mc-bright-yellow",
    line: "laguna-mc",
    name: "Bright Yellow 03",
    colorName: "Bright Yellow 03",
    colorHex: "#E8C547",
    image: "/products/catalog/mc-sm/bright-yellow.png",
    sleeve: "Manga corta",
  },
  {
    id: "lm-mc-burnt-brick",
    line: "laguna-mc",
    name: "Burnt Brick",
    colorName: "Burnt Brick",
    colorHex: "#A0452C",
    image: "/products/catalog/mc-sm/burnt-brick.png",
    sleeve: "Manga corta",
  },
  {
    id: "lm-mc-castlerock",
    line: "laguna-mc",
    name: "Castlerock",
    colorName: "Castlerock",
    colorHex: "#6B6E73",
    image: "/products/catalog/mc-sm/castlerock.png",
    sleeve: "Manga corta",
  },
  {
    id: "lm-mc-dark-green",
    line: "laguna-mc",
    name: "Dark Green 07",
    colorName: "Dark Green 07",
    colorHex: "#2F4F3E",
    image: "/products/catalog/mc-sm/dark-green.png",
    sleeve: "Manga corta",
  },
  {
    id: "lm-mc-deep-teal",
    line: "laguna-mc",
    name: "Deep Teal",
    colorName: "Deep Teal",
    colorHex: "#1F6F6A",
    image: "/products/catalog/mc-sm/deep-teal.png",
    sleeve: "Manga corta",
  },
  {
    id: "lm-mc-green-bright",
    line: "laguna-mc",
    name: "Green Bright 09",
    colorName: "Green Bright 09",
    colorHex: "#3CB043",
    image: "/products/catalog/mc-sm/green-bright.png",
    sleeve: "Manga corta",
  },
  {
    id: "lm-mc-light-orange",
    line: "laguna-mc",
    name: "Light Orange 05",
    colorName: "Light Orange 05",
    colorHex: "#E8913A",
    image: "/products/catalog/mc-sm/light-orange.png",
    sleeve: "Manga corta",
  },
  {
    id: "lm-mc-light-purple",
    line: "laguna-mc",
    name: "Light Purple 06",
    colorName: "Light Purple 06",
    colorHex: "#9B7EBD",
    image: "/products/catalog/mc-sm/light-purple.png",
    sleeve: "Manga corta",
  },
  {
    id: "lm-mc-nautical-blue",
    line: "laguna-mc",
    name: "Nautical Blue",
    colorName: "Nautical Blue",
    colorHex: "#1A3A5C",
    image: "/products/catalog/mc-sm/nautical-blue.png",
    sleeve: "Manga corta",
  },
  {
    id: "lm-mc-oyster-mushroom",
    line: "laguna-mc",
    name: "Oyster Mushroom",
    colorName: "Oyster Mushroom",
    colorHex: "#C4B7A6",
    image: "/products/catalog/mc-sm/oyster-mushroom.png",
    sleeve: "Manga corta",
  },
  {
    id: "lm-mc-pineneedle",
    line: "laguna-mc",
    name: "Pineneedle",
    colorName: "Pineneedle",
    colorHex: "#3A5A40",
    image: "/products/catalog/mc-sm/pineneedle.png",
    sleeve: "Manga corta",
  },
  {
    id: "lm-mc-provence",
    line: "laguna-mc",
    name: "Provence",
    colorName: "Provence",
    colorHex: "#5B7C99",
    image: "/products/catalog/mc-sm/provence.png",
    sleeve: "Manga corta",
  },
  {
    id: "lm-mc-royal-purple",
    line: "laguna-mc",
    name: "Royal Purple",
    colorName: "Royal Purple",
    colorHex: "#5B3A7A",
    image: "/products/catalog/mc-sm/royal-purple.png",
    sleeve: "Manga corta",
  },
  {
    id: "lm-mc-windsor-wine",
    line: "laguna-mc",
    name: "Windsor Wine",
    colorName: "Windsor Wine",
    colorHex: "#6B1E2A",
    image: "/products/catalog/mc-sm/windsor-wine.png",
    sleeve: "Manga corta",
  },
  {
    id: "lm-mc-wax-yellow",
    line: "laguna-mc",
    name: "Wax Yellow",
    colorName: "Wax Yellow",
    colorHex: "#D4C46A",
    image: "/products/catalog/mc-sm/wax-yellow.png",
    sleeve: "Manga corta",
  },
  {
    id: "lm-mc-windward-blue",
    line: "laguna-mc",
    name: "WINDWARD BLUE",
    colorName: "WINDWARD BLUE",
    colorHex: "#4A7FA8",
    image: "/products/catalog/mc-sm/windward-blue.png",
    sleeve: "Manga corta",
  },
  {
    id: "lm-mc-brilliant-blue",
    line: "laguna-mc",
    name: "Brilliant Blue",
    colorName: "Brilliant Blue",
    colorHex: "#1E5AA8",
    image: "/products/catalog/mc-sm/brilliant-blue.png",
    sleeve: "Manga corta",
  },
  {
    id: "lm-mc-skipper-blue",
    line: "laguna-mc",
    name: "Skipper Blue",
    colorName: "Skipper Blue",
    colorHex: "#2E5A8C",
    image: "/products/catalog/mc-sm/skipper-blue.png",
    sleeve: "Manga corta",
  },
  {
    id: "lm-mc-splish-splash",
    line: "laguna-mc",
    name: "SPLISH SPLASH",
    colorName: "SPLISH SPLASH",
    colorHex: "#3DB8C9",
    image: "/products/catalog/mc-sm/splish-splash.png",
    sleeve: "Manga corta",
  },
  {
    id: "lm-mc-ivy",
    line: "laguna-mc",
    name: "Ivy",
    colorName: "Ivy",
    colorHex: "#4A7C59",
    image: "/products/catalog/mc-sm/ivy.png",
    sleeve: "Manga corta",
  },
  {
    id: "lm-mc-lupine",
    line: "laguna-mc",
    name: "Lupine",
    colorName: "Lupine",
    colorHex: "#6B5B95",
    image: "/products/catalog/mc-sm/lupine.png",
    sleeve: "Manga corta",
  },

  // ---- Laguna Madre manga larga (20) ----
  // https://www.academy.com/p/magellan-outdoors-mens-laguna-madre-solid-long-sleeve-fishing-shirt-109382559
  {
    id: "lm-ml-beach-glass",
    line: "laguna-ml",
    name: "Beach Glass",
    colorName: "Beach Glass",
    colorHex: "#7BA8A0",
    image: "/products/catalog/ml-sm/beach-glass.png",
    sleeve: "Manga larga",
  },
  {
    id: "lm-ml-bright-white",
    line: "laguna-ml",
    name: "Bright White",
    colorName: "Bright White",
    colorHex: "#F2F2F0",
    image: "/products/catalog/ml-sm/bright-white.png",
    sleeve: "Manga larga",
  },
  {
    id: "lm-ml-caviar",
    line: "laguna-ml",
    name: "Caviar",
    colorName: "Caviar",
    colorHex: "#1A1A1A",
    image: "/products/catalog/ml-sm/caviar.png",
    sleeve: "Manga larga",
  },
  {
    id: "lm-ml-magellan",
    line: "laguna-ml",
    name: "Magellan",
    colorName: "Magellan",
    colorHex: "#1B2A4A",
    image: "/products/catalog/ml-sm/magellan.png",
    sleeve: "Manga larga",
  },
  {
    id: "lm-ml-medieval-blue",
    line: "laguna-ml",
    name: "Medieval Blue",
    colorName: "Medieval Blue",
    colorHex: "#2C3E6B",
    image: "/products/catalog/ml-sm/medieval-blue.png",
    sleeve: "Manga larga",
  },
  {
    id: "lm-ml-olive-night",
    line: "laguna-ml",
    name: "Olive Night",
    colorName: "Olive Night",
    colorHex: "#3D4A2E",
    image: "/products/catalog/ml-sm/olive-night.png",
    sleeve: "Manga larga",
  },
  {
    id: "lm-ml-provence",
    line: "laguna-ml",
    name: "Provence",
    colorName: "Provence",
    colorHex: "#5B7C99",
    image: "/products/catalog/ml-sm/provence.png",
    sleeve: "Manga larga",
  },
  {
    id: "lm-ml-rio-red",
    line: "laguna-ml",
    name: "Rio Red",
    colorName: "Rio Red",
    colorHex: "#C1121F",
    image: "/products/catalog/ml-sm/rio-red.png",
    sleeve: "Manga larga",
  },
  {
    id: "lm-ml-silver-mink",
    line: "laguna-ml",
    name: "Silver Mink",
    colorName: "Silver Mink",
    colorHex: "#A8A29E",
    image: "/products/catalog/ml-sm/silver-mink.png",
    sleeve: "Manga larga",
  },
  {
    id: "lm-ml-sugar-coral",
    line: "laguna-ml",
    name: "Sugar Coral",
    colorName: "Sugar Coral",
    colorHex: "#E07A5F",
    image: "/products/catalog/ml-sm/sugar-coral.png",
    sleeve: "Manga larga",
  },
  {
    id: "lm-ml-castlerock",
    line: "laguna-ml",
    name: "Castlerock",
    colorName: "Castlerock",
    colorHex: "#6B6E73",
    image: "/products/catalog/ml-sm/castlerock.png",
    sleeve: "Manga larga",
  },
  {
    id: "lm-ml-nautical-blue",
    line: "laguna-ml",
    name: "Nautical Blue",
    colorName: "Nautical Blue",
    colorHex: "#1A3A5C",
    image: "/products/catalog/ml-sm/nautical-blue.png",
    sleeve: "Manga larga",
  },
  {
    id: "lm-ml-oyster-mushroom",
    line: "laguna-ml",
    name: "Oyster Mushroom",
    colorName: "Oyster Mushroom",
    colorHex: "#C4B7A6",
    image: "/products/catalog/ml-sm/oyster-mushroom.png",
    sleeve: "Manga larga",
  },
  {
    id: "lm-ml-windsor-wine",
    line: "laguna-ml",
    name: "Windsor Wine",
    colorName: "Windsor Wine",
    colorHex: "#6B1E2A",
    image: "/products/catalog/ml-sm/windsor-wine.png",
    sleeve: "Manga larga",
  },
  {
    id: "lm-ml-blarney",
    line: "laguna-ml",
    name: "Blarney",
    colorName: "Blarney",
    colorHex: "#2F6B4F",
    image: "/products/catalog/ml-sm/blarney.png",
    sleeve: "Manga larga",
  },
  {
    id: "lm-ml-deep-teal",
    line: "laguna-ml",
    name: "Deep Teal",
    colorName: "Deep Teal",
    colorHex: "#1F6F6A",
    image: "/products/catalog/ml-sm/deep-teal.png",
    sleeve: "Manga larga",
  },
  {
    id: "lm-ml-pineneedle",
    line: "laguna-ml",
    name: "Pineneedle",
    colorName: "Pineneedle",
    colorHex: "#3A5A40",
    image: "/products/catalog/ml-sm/pineneedle.png",
    sleeve: "Manga larga",
  },
  {
    id: "lm-ml-fjord-blue",
    line: "laguna-ml",
    name: "Fjord Blue",
    colorName: "Fjord Blue",
    colorHex: "#4A6F8C",
    image: "/products/catalog/ml-sm/fjord-blue.png",
    sleeve: "Manga larga",
  },
  {
    id: "lm-ml-skipper-blue",
    line: "laguna-ml",
    name: "Skipper Blue",
    colorName: "Skipper Blue",
    colorHex: "#2E5A8C",
    image: "/products/catalog/ml-sm/skipper-blue.png",
    sleeve: "Manga larga",
  },
  {
    id: "lm-ml-light-blue-09",
    line: "laguna-ml",
    name: "Light Blue 09",
    colorName: "Light Blue 09",
    colorHex: "#6BA3D6",
    image: "/products/catalog/ml-sm/light-blue-09.png",
    sleeve: "Manga larga",
  },

  // ---- Casting Crew Core Graphic manga larga ----
  {
    id: "cc-ml-bright-turquoise",
    line: "casting-crew",
    name: "Bright Turquoise / Aqua",
    colorName: "Bright Turquoise / Aqua 02",
    colorHex: "#2EC4B6",
    image: "/products/catalog/crew/bright-turquoise.png",
    sleeve: "Manga larga",
  },
  {
    id: "cc-ml-clear-sky",
    line: "casting-crew",
    name: "Clear Sky",
    colorName: "Clear Sky",
    colorHex: "#87CEEB",
    image: "/products/catalog/crew/clear-sky.png",
    sleeve: "Manga larga",
  },
  {
    id: "cc-ml-light-blue-06",
    line: "casting-crew",
    name: "Light Blue 06",
    colorName: "Light Blue 06",
    colorHex: "#6BA3D6",
    image: "/products/catalog/crew/light-blue-06.png",
    sleeve: "Manga larga",
  },
  {
    id: "cc-ml-light-blue-05",
    line: "casting-crew",
    name: "Light Blue 05",
    colorName: "Light Blue 05",
    colorHex: "#5B9BD5",
    image: "/products/catalog/crew/light-blue-05.png",
    sleeve: "Manga larga",
  },
  {
    id: "cc-ml-light-blue-04",
    line: "casting-crew",
    name: "Light Blue 04",
    colorName: "Light Blue 04",
    colorHex: "#4A90C8",
    image: "/products/catalog/crew/light-blue-04.png",
    sleeve: "Manga larga",
  },
  {
    id: "cc-ml-dazzling-blue",
    line: "casting-crew",
    name: "Dazzling Blue / Pool Blue",
    colorName: "Dazzling Blue / Pool Blue",
    colorHex: "#1E90FF",
    image: "/products/catalog/crew/dazzling-blue.png",
    sleeve: "Manga larga",
  },
  {
    id: "cc-ml-dark-turquoise",
    line: "casting-crew",
    name: "Dark Turquoise",
    colorName: "Dark Turquoise 02",
    colorHex: "#008B8B",
    image: "/products/catalog/crew/dark-turquoise.png",
    sleeve: "Manga larga",
  },
  {
    id: "cc-ml-caviar-beach",
    line: "casting-crew",
    name: "Caviar / Beach Glass",
    colorName: "Caviar / Beach Glass",
    colorHex: "#2C3E50",
    image: "/products/catalog/crew/caviar-beach.png",
    sleeve: "Manga larga",
  },
  {
    id: "cc-ml-castlerock-salmon",
    line: "casting-crew",
    name: "Castlerock / Fresh Salmon",
    colorName: "Castlerock / Fresh Salmon",
    colorHex: "#6B6E73",
    image: "/products/catalog/crew/castlerock-salmon.png",
    sleeve: "Manga larga",
  },
  {
    id: "cc-ml-chili-pepper",
    line: "casting-crew",
    name: "Chili Pepper / White / Lead",
    colorName: "Chili Pepper / White / Lead",
    colorHex: "#C0392B",
    image: "/products/catalog/crew/chili-pepper.png",
    sleeve: "Manga larga",
  },
  {
    id: "cc-ml-crimson-caviar",
    line: "casting-crew",
    name: "Crimson / Caviar",
    colorName: "Crimson / Caviar",
    colorHex: "#8B0000",
    image: "/products/catalog/crew/crimson-caviar.png",
    sleeve: "Manga larga",
  },
  {
    id: "cc-ml-fresh-salmon",
    line: "casting-crew",
    name: "Fresh Salmon",
    colorName: "Fresh Salmon",
    colorHex: "#FA8072",
    image: "/products/catalog/crew/fresh-salmon.png",
    sleeve: "Manga larga",
  },
  {
    id: "cc-ml-green-bright",
    line: "casting-crew",
    name: "Green Bright",
    colorName: "Green Bright 03",
    colorHex: "#2ECC71",
    image: "/products/catalog/crew/green-bright.png",
    sleeve: "Manga larga",
  },
  {
    id: "cc-ml-green-light",
    line: "casting-crew",
    name: "Green Light",
    colorName: "Green Light 03",
    colorHex: "#90EE90",
    image: "/products/catalog/crew/green-light.png",
    sleeve: "Manga larga",
  },
  {
    id: "cc-ml-light-orange",
    line: "casting-crew",
    name: "Light Orange",
    colorName: "Light Orange 06",
    colorHex: "#FFA07A",
    image: "/products/catalog/crew/light-orange.png",
    sleeve: "Manga larga",
  },
  {
    id: "cc-ml-white-provence",
    line: "casting-crew",
    name: "Bright White / Provence",
    colorName: "Bright White / Provence / Nostalgia Rose",
    colorHex: "#F5F5F5",
    image: "/products/catalog/crew/white-provence.png",
    sleeve: "Manga larga",
  },
];

export const products = catalogRaw.map((p) => {
  const line = catalogLines.find((l) => l.id === p.line)!;
  return {
    ...p,
    brand: BRAND,
    model: line.model,
    kind: line.kind,
    price: line.price,
    sizes: [...ALL_SIZES],
    sizeLabel: SIZE_LABEL,
  };
});

export type Product = (typeof products)[number];

export type CatalogLineConfig = (typeof catalogLines)[number];

export function getCatalogLineBySlug(slug: string) {
  return catalogLines.find((line) => line.slug === slug);
}

export function getProductsByLine(lineId: CatalogLine) {
  return products.filter((product) => product.line === lineId);
}

/** @deprecated usar catalogLines / products */
export const productLine = {
  brand: BRAND,
  model: "Laguna Madre",
  category: "Camisa",
} as const;

export const footerLinks = {
  tienda: [
    { href: "/#productos", label: "Camisas" },
    { href: "/camisas/manga-corta", label: "Manga corta" },
    { href: "/#marcas", label: "Marcas" },
    { href: "/camisas/manga-larga", label: "Manga larga" },
  ],
  ayuda: [
    { href: "/#contacto", label: "Envios" },
    { href: "/#contacto", label: "Cambios y devoluciones" },
    { href: "/#contacto", label: "Preguntas frecuentes" },
    { href: "/#contacto", label: "Contacto" },
  ],
  marca: [
    { href: "/#historia", label: "Nuestra historia" },
    { href: "/#marcas", label: "Marcas" },
    { href: "/camisas/manga-larga", label: "Manga larga" },
    { href: "/camisas/playeras", label: "Playeras" },
  ],
} as const;
