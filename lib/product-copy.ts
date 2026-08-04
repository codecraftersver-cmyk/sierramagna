import type { CatalogLine } from "@/lib/data";

export type ProductCopy = {
  headline: string;
  intro: string[];
  featuresTitle: string;
  features: string[];
};

const lagunaMadre: ProductCopy = {
  headline: "Camisa Magellan Outdoors Laguna Madre",
  intro: [
    "Descubre la combinación perfecta entre comodidad, estilo y funcionalidad con la camisa Magellan Outdoors Laguna Madre. Diseñada para quienes disfrutan de las actividades al aire libre, ofrece un tejido ligero y transpirable que ayuda a mantenerte fresco durante todo el día.",
    "Su tecnología de secado rápido y protección solar UPF 50 la convierten en una excelente opción para pesca, senderismo, trabajo de campo, viajes o uso diario. Además, incorpora ventilación en la espalda para mejorar la circulación del aire y bolsillos frontales con cierre para llevar tus objetos esenciales de forma segura.",
    "Su corte cómodo brinda libertad de movimiento, mientras que su diseño clásico permite combinarla fácilmente con jeans, pantalones tácticos o de trabajo.",
  ],
  featuresTitle: "Características",
  features: [
    "Protección solar UPF 50.",
    "Tela ligera, fresca y transpirable.",
    "Secado rápido.",
    "Ventilación trasera para mayor comodidad.",
    "Bolsillos funcionales con cierre.",
    "Ideal para pesca, senderismo, camping, trabajo y uso casual.",
    "Material resistente y cómodo para uso prolongado.",
  ],
};

const castingCrew: ProductCopy = {
  headline: "Playera Magellan Outdoors Casting Crew",
  intro: [
    "Descubre la combinación perfecta entre comodidad, estilo y funcionalidad con la playera Magellan Outdoors Casting Crew. Diseñada para actividades al aire libre y uso diario, ofrece un tejido ligero y cómodo que se adapta a tu ritmo.",
    "Ideal para pesca, senderismo, viajes o el día a día. Su corte cómodo brinda libertad de movimiento y su diseño gráfico aporta presencia sin perder practicidad.",
  ],
  featuresTitle: "Características",
  features: [
    "Tela ligera y cómoda.",
    "Corte relajado con buena movilidad.",
    "Ideal para pesca, outdoor y uso casual.",
    "Material resistente para uso prolongado.",
  ],
};

/** Copia genérica por línea de producto (mismo texto para todos los colores). */
export function getProductCopy(line: CatalogLine): ProductCopy {
  if (line === "casting-crew") return castingCrew;
  return lagunaMadre;
}
