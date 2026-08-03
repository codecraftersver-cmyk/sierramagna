import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { footerLinks } from "@/lib/data";

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer
      id="contacto"
      className="reveal border-t border-sm-border bg-sm-black"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-20">
        <div className="lg:col-span-4">
          <Logo variant="full" className="max-w-[180px]" />
          <p className="mt-5 max-w-sm font-sans text-sm leading-relaxed text-sm-gray/75">
            Ropa elegante y moderna en tallas grandes. Presencia mexicana con
            estándar premium.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://www.instagram.com/sierramagna2026/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center border border-sm-border text-sm-white transition-colors duration-300 hover:border-sm-red hover:text-sm-red"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center border border-sm-border font-display text-sm tracking-wider text-sm-white transition-colors duration-300 hover:border-sm-red hover:text-sm-red"
              aria-label="Facebook"
            >
              f
            </a>
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-3 lg:col-span-5">
          <FooterColumn title="Tienda" links={footerLinks.tienda} />
          <FooterColumn title="Ayuda" links={footerLinks.ayuda} />
          <FooterColumn title="Marca" links={footerLinks.marca} />
        </div>

        <div className="space-y-4 lg:col-span-3">
          <h3 className="font-display text-xl tracking-[0.12em] text-sm-white">
            Contacto
          </h3>
          <ul className="space-y-3 font-sans text-sm text-sm-gray/80">
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sm-red" strokeWidth={1.5} />
              <a
                href="mailto:hola@sierramagna.mx"
                className="transition-colors hover:text-sm-red"
              >
                hola@sierramagna.mx
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sm-red" strokeWidth={1.5} />
              <a
                href="tel:+525512345678"
                className="transition-colors hover:text-sm-red"
              >
                +52 55 1234 5678
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sm-red" strokeWidth={1.5} />
              <span>Ciudad de México, México</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-sm-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p className="font-sans text-xs text-sm-gray/60">
            © {new Date().getFullYear()} Sierra Magna. Todos los derechos
            reservados.
          </p>
          <div className="flex gap-6 font-sans text-xs text-sm-gray/60">
            <Link href="#" className="transition-colors hover:text-sm-red">
              Aviso de privacidad
            </Link>
            <Link href="#" className="transition-colors hover:text-sm-red">
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { href: string; label: string }[];
}) {
  return (
    <div>
      <h3 className="font-display text-xl tracking-[0.12em] text-sm-white">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="font-sans text-sm text-sm-gray/75 transition-colors duration-300 hover:text-sm-red"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
