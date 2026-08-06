/** Datos de contacto para pedidos manuales (transferencia / efectivo). */
export const CONTACT = {
  instagramHandle: "sierramagna2026",
  instagramProfileUrl: "https://www.instagram.com/sierramagna2026/",
  /** Abre el chat directo de Instagram. (pedido IG pausado en UI por ahora) */
  instagramDmUrl: "https://ig.me/m/sierramagna2026",
  /**
   * WhatsApp en formato internacional sin "+".
   * Mexico movil suele ser: 521 + 10 digitos.
   * Puedes sobreescribir con NEXT_PUBLIC_WHATSAPP_NUMBER.
   */
  whatsappNumber:
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ||
    "5212294042908",
} as const;

export type OrderMessageInput = {
  brand: string;
  model: string;
  kind: string;
  sleeve: string;
  colorName: string;
  size: string;
  price: string;
  photoUrl: string;
  pageUrl: string;
  availabilityLabel: string;
  paymentNote: string;
};

export function buildOrderMessage(input: OrderMessageInput): string {
  return [
    "Hola Sierra Magna",
    "",
    "Quiero pedir esta prenda:",
    "",
    `Producto: ${input.brand} ${input.model}`,
    `Tipo: ${input.kind} - ${input.sleeve}`,
    `Color: ${input.colorName}`,
    `Talla: ${input.size}`,
    `Precio: ${input.price} MXN`,
    input.availabilityLabel,
    input.paymentNote,
    `Ver foto: ${input.photoUrl}`,
    "",
    "Forma de pago: transferencia o efectivo.",
    "Quedo atento(a) a su confirmacion para continuar el pedido.",
  ].join("\n");
}

export function getWhatsAppOrderUrl(message: string): string {
  const text = encodeURIComponent(message);
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${text}`;
}

export function getInstagramDmUrl(): string {
  return CONTACT.instagramDmUrl;
}

/** En movil navega en la misma pestana para abrir la app; en escritorio abre pestaña.
 * Pedido por Instagram esta pausado en la UI (comentado); se mantiene para reactivar luego.
 */
export function openInstagramDm(): void {
  const url = CONTACT.instagramDmUrl;
  const ua = navigator.userAgent || "";
  const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(ua);

  if (isMobile) {
    window.location.href = url;
    return;
  }

  window.open(url, "_blank", "noopener,noreferrer");
}
