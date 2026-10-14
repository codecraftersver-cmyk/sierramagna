/**
 * Inventario Sierra Magna
 * ----------------------
 * Por defecto TODO es "sobre pedido".
 * Para marcar entrega inmediata, agrega SKUs aquí:
 *   { productId: "lm-mc-caviar", size: "2XL" },
 *
 * productId = id del producto en lib/data.ts
 * size = "S" | "M" | "L" | "XL" | "2XL" | "3XL" | "4XL" | "XS"
 */

export type Availability = "in-stock" | "preorder";

export type StockSku = {
  productId: string;
  size: string;
};

/** Piezas con entrega inmediata (1–3 días). Vacío = todo sobre pedido. */
export const inStockSkus: StockSku[] = [
  // Laguna Madre manga larga
  { productId: "lm-ml-magellan", size: "L" },
  { productId: "lm-ml-provence", size: "XL" },
  { productId: "lm-ml-windsor-wine", size: "XL" },
  // Laguna Madre manga corta (XXXL=3XL, XXL=2XL)
  { productId: "lm-mc-caviar", size: "3XL" },
  { productId: "lm-mc-skipper-blue", size: "3XL" },
  { productId: "lm-mc-skipper-blue", size: "2XL" },
  { productId: "lm-mc-rio-red", size: "3XL" },
  { productId: "lm-mc-rio-red", size: "2XL" },
];

export const AVAILABILITY_COPY = {
  "in-stock": {
    shortLabel: "Entrega inmediata",
    detail: "Hay existencias en Sierra Magna. Entrega estimada: 1 a 3 dias habiles.",
    eta: "1–3 dias habiles",
    badgeClass:
      "border-emerald-700/60 bg-emerald-950/50 text-emerald-300",
  },
  preorder: {
    shortLabel: "Sobre pedido",
    detail:
      "Se importa desde EE. UU. Tiempo estimado: 15 a 25 dias. Anticipo 50%, resto contra entrega.",
    eta: "15–25 dias",
    badgeClass: "border-amber-700/60 bg-amber-950/40 text-amber-200",
  },
} as const;

function skuKey(productId: string, size: string) {
  return `${productId}__${size.trim().toUpperCase()}`;
}

const inStockSet = new Set(
  inStockSkus.map((s) => skuKey(s.productId, s.size)),
);

export function getSkuAvailability(
  productId: string,
  size: string,
): Availability {
  return inStockSet.has(skuKey(productId, size)) ? "in-stock" : "preorder";
}

/** Resumen por producto (antes de elegir talla). */
export function getProductAvailabilitySummary(
  productId: string,
  sizes: readonly string[],
): Availability | "mixed" {
  if (sizes.length === 0) return "preorder";
  let stock = 0;
  for (const size of sizes) {
    if (getSkuAvailability(productId, size) === "in-stock") stock += 1;
  }
  if (stock === 0) return "preorder";
  if (stock === sizes.length) return "in-stock";
  return "mixed";
}

export function availabilityWhatsAppLine(availability: Availability): string {
  if (availability === "in-stock") {
    return "Disponibilidad: Entrega inmediata (1-3 dias).";
  }
  return [
    "Disponibilidad: Sobre pedido (importacion EE. UU., 15-25 dias).",
    "Pago: anticipo 50% para apartar, 50% contra entrega.",
  ].join(" ");
}
