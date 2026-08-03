import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  /** compact = header; full = marca completa con tagline */
  variant?: "compact" | "full";
};

export function Logo({ className = "", variant = "compact" }: LogoProps) {
  if (variant === "full") {
    return (
      <Link
        href="/"
        className={`inline-block ${className}`}
        aria-label="Sierra Magna inicio"
      >
        <Image
          src="/brand/logo-sierra-magna-classic.png"
          alt="Sierra Magna — Ropa para hombres de talla"
          width={280}
          height={280}
          className="h-auto w-full max-w-[220px]"
          priority
        />
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="Sierra Magna inicio"
    >
      <Image
        src="/brand/logo-sierra-magna-classic.png"
        alt="Sierra Magna"
        width={48}
        height={48}
        className="h-11 w-11 object-contain transition-opacity duration-200 group-hover:opacity-90"
        priority
      />
      <span className="hidden flex-col leading-none sm:flex">
        <span className="font-display text-xl tracking-[0.14em] text-sm-white transition-colors duration-200 group-hover:text-sm-gray">
          SIERRA
        </span>
        <span className="font-display text-xl tracking-[0.14em] text-sm-red">
          MAGNA
        </span>
      </span>
    </Link>
  );
}
