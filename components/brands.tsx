import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

const partners = [
  {
    name: "Magellan Outdoors",
    role: "Marca",
    detail: "Camisas modelo Laguna Madre",
    logo: "/brand/magellan-outdoors.png",
    invert: true,
  },
] as const;

export function Brands() {
  return (
    <section
      id="marcas"
      className="reveal border-t border-sm-border bg-sm-black"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Selección"
          title="Marcas que manejamos"
          description="Traemos camisas de marcas que ya conoces y se sienten bien. Por ahora tenemos Magellan Outdoors, modelo Laguna Madre."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner) => (
            <article
              key={partner.name}
              className="flex flex-col justify-between border border-sm-border bg-[#141416] p-8 shadow-[0_16px_40px_rgba(0,0,0,0.28)]"
            >
              <div className="flex h-20 items-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={280}
                  height={80}
                  className={[
                    "h-14 w-auto max-w-full object-contain object-left",
                    partner.invert ? "brightness-0 invert" : "",
                  ].join(" ")}
                />
              </div>
              <div className="mt-8 border-t border-sm-border pt-5">
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-sm-red">
                  {partner.role}
                </p>
                <h3 className="mt-2 font-display text-2xl tracking-[0.08em] text-sm-white">
                  {partner.name}
                </h3>
                <p className="mt-2 font-sans text-sm text-sm-gray/75">
                  {partner.detail}
                </p>
              </div>
            </article>
          ))}

          <article className="flex flex-col justify-between border border-dashed border-sm-border/80 bg-transparent p-8">
            <p className="font-display text-4xl tracking-[0.08em] text-sm-gray/30">
              +
            </p>
            <div className="mt-8 border-t border-sm-border/60 pt-5">
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-sm-gray/50">
                Próximamente
              </p>
              <h3 className="mt-2 font-display text-2xl tracking-[0.08em] text-sm-gray/60">
                Más marcas
              </h3>
              <p className="mt-2 font-sans text-sm text-sm-gray/50">
                Seguimos sumando marcas para ampliar el catálogo.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
