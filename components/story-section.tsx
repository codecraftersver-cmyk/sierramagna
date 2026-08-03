import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function StorySection() {
  return (
    <section
      id="historia"
      className="reveal border-t border-sm-border bg-sm-black"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-28">
        <div className="relative aspect-[4/5] overflow-hidden border border-sm-border lg:aspect-[5/6]">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1400&q=80"
            alt="Paisaje de sierra mexicana"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-sm-black/50 to-transparent" />
        </div>

        <div>
          <SectionHeading
            eyebrow="Origen"
            title="Nuestra historia"
            className="mb-6 md:mb-8"
          />
          <p className="font-sans text-base leading-relaxed text-sm-gray/85 md:text-lg md:leading-8">
            Sierra Magna nació de la amistad y de una realidad que vivimos día a
            día: encontrar ropa elegante, moderna y de buena calidad en tallas
            grandes es mucho más difícil de lo que debería ser. Creemos que la
            talla nunca debería limitar el estilo. Por eso seleccionamos prendas
            que permiten vestir con confianza, comodidad y presencia.
          </p>
        </div>
      </div>
    </section>
  );
}
