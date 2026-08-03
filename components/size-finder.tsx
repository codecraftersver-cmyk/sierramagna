import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { sizes } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SizeFinder() {
  return (
    <section id="tallas" className="reveal border-t border-sm-border bg-sm-black">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Tallas grandes"
          title="Encuentra tu talla"
          description="Revisa la guía de medidas, elige tu talla y luego ve la disponibilidad en cada camisa."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sizes.map((item) => (
            <Link
              key={item.size}
              href={item.href}
              className={[
                "group relative flex min-h-56 flex-col justify-between border p-6",
                "transition-all duration-200 ease-out",
                item.available
                  ? "border-sm-border bg-[#141416] shadow-[0_20px_50px_rgba(0,0,0,0.35)] hover:-translate-y-1 hover:border-sm-red"
                  : "border-sm-border/70 bg-[#101012] opacity-70 hover:opacity-90",
              ].join(" ")}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span
                    className={[
                      "font-display text-6xl tracking-wider md:text-7xl",
                      item.available
                        ? "text-sm-white transition-colors duration-200 group-hover:text-sm-red"
                        : "text-sm-gray/50",
                    ].join(" ")}
                  >
                    {item.size}
                  </span>
                  <p
                    className={[
                      "mt-2 font-sans text-[11px] font-semibold uppercase tracking-[0.2em]",
                      item.available ? "text-sm-red" : "text-sm-gray/50",
                    ].join(" ")}
                  >
                    {item.available ? "Disponible" : "Próximamente"}
                  </p>
                </div>
                <ArrowUpRight
                  className={[
                    "h-5 w-5 transition-colors duration-200",
                    item.available
                      ? "text-sm-gray group-hover:text-sm-red"
                      : "text-sm-gray/40",
                  ].join(" ")}
                  strokeWidth={1.5}
                />
              </div>
              <p className="font-sans text-sm leading-relaxed text-sm-gray/75">
                {item.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-14 md:mt-16">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sm-red">
              Guía de medidas
            </p>
            <h3 className="mt-2 font-display text-3xl tracking-[0.06em] text-sm-white md:text-4xl">
              Cómo elegir tu talla
            </h3>
            <p className="mt-2 max-w-2xl font-sans text-sm leading-relaxed text-sm-gray/75 md:text-base">
              Las medidas son de una sola cara de la camisa. Si mides el
              contorno del cuerpo, divide entre 2 y compáralo con la tabla.
            </p>
          </div>

          <div className="overflow-hidden border border-sm-border bg-[#141416] shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
            <Image
              src="/brand/guia-tallas-sierra-magna.png"
              alt="Guía de tallas Sierra Magna — medidas de camisa en centímetros"
              width={1920}
              height={1080}
              className="h-auto w-full"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
