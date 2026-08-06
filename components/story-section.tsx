import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function StorySection() {
  return (
    <section
      id="historia"
      className="reveal overflow-x-hidden border-t border-sm-border bg-sm-black"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-stretch lg:gap-16 lg:px-8 lg:py-28">
        <div className="relative min-w-0 overflow-hidden border border-sm-border bg-[#141416] lg:min-h-full">
          {/* Móvil: la imagen define el marco (sin salirse) */}
          <Image
            src="/brand/historia-sierra-magna.png"
            alt="Sierra Magna — Ropa para hombres de talla"
            width={1600}
            height={1000}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="block h-auto w-full max-w-full lg:hidden"
            priority={false}
          />
          {/* Desktop: llena la altura de la columna del texto */}
          <Image
            src="/brand/historia-sierra-magna.png"
            alt=""
            fill
            sizes="50vw"
            className="hidden object-cover object-center lg:block"
            aria-hidden="true"
          />
        </div>

        <div className="min-w-0 lg:flex lg:flex-col lg:justify-center">
          <SectionHeading
            eyebrow="Origen"
            title="Nuestra historia"
            className="mb-6 md:mb-8"
          />
          <p className="font-sans text-base leading-relaxed text-sm-gray/85 md:text-lg md:leading-8">
            Sierra Magna nació de una idea compartida entre dos amigos que
            creían que vestir bien no debería depender de una talla.
            <br />
            <br />
            Descubrimos que muchos hombres encontraban pocas opciones para
            vestir con calidad, estilo y a un precio justo. Por eso decidimos
            crear un espacio donde cualquier hombre pudiera encontrar prendas
            que lo hicieran sentir seguro, cómodo y con confianza.
            <br />
            <br />
            Comenzamos con una selección de ropa outdoor, elegida por su
            calidad, funcionalidad y diseño. Pero nuestra visión va mucho más
            allá: queremos ofrecer cada vez más opciones, desde ropa y calzado
            hasta accesorios, siempre con el mismo compromiso de calidad y
            excelente precio.
            <br />
            <br />
            Porque en Sierra Magna creemos que la elegancia no tiene talla y
            que la verdadera presencia nace de la confianza con la que cada
            hombre decide vestir.
            <br />
            <br />
            Sierra Magna.
            <br />
            Ropa para hombres de talla.
          </p>
        </div>
      </div>
    </section>
  );
}
