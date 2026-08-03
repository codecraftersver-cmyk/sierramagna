import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Categories() {
  return (
    <section
      id="categorias"
      className="reveal border-t border-sm-border bg-sm-black"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Colección"
          title="Categorías"
          description="Por ahora el catálogo activo es solo camisas. El resto de categorías llega pronto."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative block aspect-[3/4] overflow-hidden border border-sm-border"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                className={[
                  "object-cover transition-transform duration-700 ease-out group-hover:scale-105",
                  category.status === "proximamente" ? "grayscale-[35%]" : "",
                ].join(" ")}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sm-black via-sm-black/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="mb-1 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-sm-red">
                  {category.status === "disponible"
                    ? "Disponible"
                    : "Próximamente"}
                </p>
                <h3 className="font-display text-3xl tracking-[0.08em] text-sm-white transition-colors duration-200 group-hover:text-sm-red">
                  {category.name}
                </h3>
                {category.name === "Camisas" ? (
                  <p className="mt-1 font-sans text-xs text-sm-gray/70">
                    Magellan · Laguna Madre
                  </p>
                ) : null}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
