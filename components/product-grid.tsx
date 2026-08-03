import Image from "next/image";
import Link from "next/link";
import { productLine, products } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProductGrid() {
  const mangaCorta = products.filter((p) => p.sleeve === "Manga corta");
  const mangaLarga = products.filter((p) => p.sleeve === "Manga larga");

  return (
    <section
      id="productos"
      className="reveal border-t border-sm-border bg-sm-black"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Catálogo · Camisas"
          title="Laguna Madre"
          description={`${productLine.brand}. Modelo ${productLine.model}. Manga corta y manga larga; la disponibilidad de talla se indica en cada color.`}
        />

        <div className="mb-10 flex flex-wrap items-center gap-4 border border-sm-border bg-[#141416] px-5 py-4">
          <Image
            src="/brand/magellan-outdoors.png"
            alt="Magellan Outdoors"
            width={160}
            height={40}
            className="h-8 w-auto brightness-0 invert"
          />
          <div className="h-6 w-px bg-sm-border" aria-hidden="true" />
          <p className="font-sans text-sm text-sm-gray/80">
            Una de las marcas que manejamos ·{" "}
            <span className="text-sm-white">Modelo Laguna Madre</span>
          </p>
        </div>

        <ProductGroup title="Manga corta" products={mangaCorta} />
        <ProductGroup
          title="Manga larga"
          products={mangaLarga}
          className="mt-14 md:mt-16"
        />
      </div>
    </section>
  );
}

function ProductGroup({
  title,
  products: items,
  className = "",
}: {
  title: string;
  products: readonly (typeof products)[number][];
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="mb-6 flex items-end gap-4 border-b border-sm-border pb-3">
        <h3 className="font-display text-3xl tracking-[0.08em] text-sm-white md:text-4xl">
          {title}
        </h3>
        <p className="pb-1 font-sans text-xs uppercase tracking-[0.2em] text-sm-red">
          {items.length} colores
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((product) => (
          <article
            key={product.id}
            className="group border border-sm-border bg-[#141416] shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition-all duration-200 ease-out hover:-translate-y-1.5 hover:shadow-[0_22px_48px_rgba(0,0,0,0.45)]"
          >
            <Link href="#contacto" className="block">
              <div className="relative aspect-[3/4] overflow-hidden border-b border-sm-border bg-sm-black">
                <Image
                  src={product.image}
                  alt={`${product.name} — Magellan Laguna Madre — ${product.sleeve}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 bg-sm-red px-2.5 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-sm-white">
                  {product.sleeve}
                </span>
              </div>
              <div className="space-y-3 p-5">
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-sm-red">
                  {product.brand} · {product.model}
                </p>
                <div className="flex items-center justify-between gap-3">
                  <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-sm-gray/70">
                    {product.sizes.join(" · ")}
                  </p>
                  <span
                    className="h-3.5 w-3.5 shrink-0 rounded-full border border-white/20"
                    style={{ backgroundColor: product.colorHex }}
                    title={product.colorName}
                    aria-label={`Color ${product.colorName}`}
                  />
                </div>
                <h3 className="font-display text-2xl tracking-[0.06em] text-sm-white transition-colors duration-200 group-hover:text-sm-red">
                  {product.name}
                </h3>
                <p className="font-sans text-sm text-sm-gray/80">
                  {product.price} MXN
                </p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
