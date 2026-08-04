import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { catalogLines, getProductsByLine } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CatalogHub() {
  return (
    <section
      id="productos"
      className="reveal border-t border-sm-border bg-sm-black"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Catálogo Magellan"
          title="Elige tu línea"
          description="Laguna Madre, Falcon Lake y playeras. Entra al módulo y explora cada color con detalle."
        />

        <div className="mb-8 flex flex-wrap items-center gap-4 border border-sm-border bg-[#141416] px-5 py-4">
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
            <span className="text-sm-white">
              Laguna Madre · Falcon Lake · Casting Crew
            </span>
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {catalogLines.map((line) => {
            const count = getProductsByLine(line.id).length;
            return (
              <Link
                key={line.id}
                href={line.href}
                className="group relative flex min-h-[420px] flex-col overflow-hidden border border-sm-border bg-[#141416] transition-all duration-300 hover:-translate-y-1.5 hover:border-sm-red/60 hover:shadow-[0_24px_50px_rgba(0,0,0,0.45)]"
              >
                <div className="relative aspect-[4/5] overflow-hidden border-b border-sm-border">
                  <Image
                    src={line.coverImage}
                    alt={line.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sm-black via-sm-black/20 to-transparent" />
                  <span className="absolute left-4 top-4 bg-sm-black/80 px-3 py-1.5 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-sm-white backdrop-blur-sm">
                    {line.label}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-sm-red">
                    {line.model}
                  </p>
                  <h3 className="mt-2 font-display text-3xl tracking-[0.06em] text-sm-white transition-colors duration-200 group-hover:text-sm-red">
                    {line.title}
                  </h3>
                  <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-sm-gray/70">
                    {line.summary}
                  </p>
                  <div className="mt-5 flex items-end justify-between gap-3 border-t border-sm-border pt-4">
                    <p className="font-sans text-xs uppercase tracking-[0.14em] text-sm-gray/60">
                      {count} colores · {line.price} MXN
                    </p>
                    <span className="inline-flex items-center gap-1 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-sm-white transition-colors group-hover:text-sm-red">
                      Ver
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
