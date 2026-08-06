import type { Product } from "@/lib/data";
import {
  type Availability,
  availabilityWhatsAppLine,
  getSkuAvailability,
} from "@/lib/inventory";

export type CartItem = {
  key: string;
  productId: string;
  brand: string;
  model: string;
  kind: string;
  sleeve: string;
  name: string;
  colorName: string;
  size: string;
  priceLabel: string;
  priceValue: number;
  image: string;
  qty: number;
  availability: Availability;
};

export function parsePriceValue(priceLabel: string): number {
  const digits = priceLabel.replace(/[^\d]/g, "");
  return Number(digits) || 0;
}

export function makeCartItemKey(productId: string, size: string): string {
  return `${productId}__${size}`;
}

export function productToCartItem(
  product: Product,
  size: string,
  qty = 1,
): CartItem {
  return {
    key: makeCartItemKey(product.id, size),
    productId: product.id,
    brand: product.brand,
    model: product.model,
    kind: product.kind,
    sleeve: product.sleeve,
    name: product.name,
    colorName: product.colorName,
    size,
    priceLabel: product.price,
    priceValue: parsePriceValue(product.price),
    image: product.image,
    qty,
    availability: getSkuAvailability(product.id, size),
  };
}

export function getCartTotals(items: CartItem[]) {
  const itemCount = items.reduce((sum, item) => sum + item.qty, 0);
  const total = items.reduce(
    (sum, item) => sum + item.priceValue * item.qty,
    0,
  );
  return { itemCount, total };
}

export function formatMxn(amount: number): string {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function buildCartOrderMessage(
  items: CartItem[],
  origin: string,
): string {
  const { itemCount, total } = getCartTotals(items);
  const hasPreorder = items.some((item) => item.availability === "preorder");

  const lines = items.flatMap((item, index) => [
    `${index + 1}. ${item.brand} ${item.model}`,
    `   Color: ${item.colorName}`,
    `   Manga: ${item.sleeve}`,
    `   Talla: ${item.size}`,
    `   Cantidad: ${item.qty}`,
    `   Precio unitario: ${item.priceLabel} MXN`,
    `   Subtotal: ${formatMxn(item.priceValue * item.qty)}`,
    `   ${availabilityWhatsAppLine(item.availability)}`,
    `   Foto: ${origin}${item.image}`,
    "",
  ]);

  return [
    "Hola Sierra Magna",
    "",
    "Quiero confirmar este pedido:",
    "",
    ...lines,
    `Total de piezas: ${itemCount}`,
    `Total a pagar: ${formatMxn(total)}`,
    "",
    hasPreorder
      ? "Nota: hay piezas sobre pedido. Anticipo 50% para apartar; 50% contra entrega."
      : "Disponibilidad: entrega inmediata.",
    "Forma de pago: transferencia o efectivo.",
    "Quedo atento(a) a su confirmacion para continuar.",
  ].join("\n");
}
