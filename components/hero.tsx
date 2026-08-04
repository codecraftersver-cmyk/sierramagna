import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-6.5rem)] overflow-hidden">
      <Image
        src="/brand/hero-sierra-presencia.png"
        alt="Hombre de talla con presencia en la sierra — Sierra Magna"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_30%] animate-ken-burns"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-sm-black via-sm-black/50 to-sm-black/20" />
      <div className="absolute inset-0 bg-sm-black/10" />

      {/* Logo Sierra Magna semitransparente de fondo */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-end pr-4 sm:pr-10 lg:pr-16"
        aria-hidden="true"
      >
        <Image
          src="/brand/logo-sierra-magna-classic.png"
          alt=""
          width={520}
          height={520}
          className="h-auto w-[55vw] max-w-[420px] opacity-[0.18] mix-blend-screen sm:w-[42vw] sm:max-w-[480px] lg:w-[38vw] lg:max-w-[560px]"
          priority
        />
      </div>

      <div className="hero-topo absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-[calc(100svh-6.5rem)] max-w-7xl flex-col justify-end px-4 pb-16 pt-24 sm:px-6 sm:pb-20 lg:px-8 lg:pb-28">
        <p className="animate-fade-up font-display text-3xl tracking-[0.18em] text-sm-white md:text-4xl">
          SIERRA MAGNA
        </p>
        <h1 className="animate-fade-up delay-100 mt-4 max-w-4xl font-display text-4xl leading-[0.95] tracking-[0.04em] text-sm-white sm:text-5xl md:text-6xl lg:text-7xl">
          LA ELEGANCIA NO TIENE TALLA.
          <br />
          LA PRESENCIA TAMPOCO.
        </h1>
        <p className="animate-fade-up delay-200 mt-5 max-w-xl font-sans text-base leading-relaxed text-sm-gray/90 md:text-lg">
          Ropa premium para hombre en tallas grandes. Estilo, comodidad y
          presencia mexicana.
        </p>
        <div className="animate-fade-up delay-300 mt-8">
          <Button href="/#productos">Comprar ahora</Button>
        </div>
      </div>
    </section>
  );
}
