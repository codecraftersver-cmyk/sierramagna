import Link from "next/link";
import { formatNextTripLabel } from "@/lib/inventory";

export function HowToOrder() {
  return (
    <section
      id="como-pedir"
      className="reveal border-t border-sm-border bg-sm-black"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-sm-red">
          Transparencia
        </p>
        <h2 className="mt-3 font-display text-4xl tracking-[0.06em] text-sm-white md:text-5xl">
          Como funciona tu pedido
        </h2>
        <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-sm-gray/75">
          Importamos directamente desde Estados Unidos para ofrecer mas variedad
          de modelos, colores y tallas. Si una prenda no esta en entrega
          inmediata, la traemos especialmente para ti en nuestro siguiente
          viaje.
        </p>

        <div className="mt-8 border border-amber-700/40 bg-amber-950/25 px-5 py-4">
          <p className="font-sans text-sm text-amber-100/90">
            Proximo pedido a EE. UU.:{" "}
            <span className="font-semibold text-sm-white">
              {formatNextTripLabel()}
            </span>
          </p>
        </div>

        <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              n: "01",
              t: "Elige tu prenda",
              d: "Modelo, color y talla en el catalogo.",
            },
            {
              n: "02",
              t: "Confirma por WhatsApp",
              d: "Carrito o pedido directo. Te confirmamos disponibilidad.",
            },
            {
              n: "03",
              t: "Anticipo 50%",
              d: "En sobre pedido: 50% para apartar, 50% contra entrega.",
            },
            {
              n: "04",
              t: "Recibe tu pedido",
              d: "Inmediato (1-3 dias) o en el siguiente viaje (15-25 dias).",
            },
          ].map((step) => (
            <li key={step.n} className="border border-sm-border bg-[#141416] p-5">
              <p className="font-display text-3xl tracking-[0.08em] text-sm-red">
                {step.n}
              </p>
              <h3 className="mt-3 font-sans text-sm font-semibold uppercase tracking-[0.14em] text-sm-white">
                {step.t}
              </h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-sm-gray/70">
                {step.d}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-8 font-sans text-sm text-sm-gray/60">
          Dudas?{" "}
          <Link href="/#contacto" className="text-sm-red hover:underline">
            Escribenos
          </Link>{" "}
          o pide por WhatsApp desde cualquier producto.
        </p>
      </div>
    </section>
  );
}
