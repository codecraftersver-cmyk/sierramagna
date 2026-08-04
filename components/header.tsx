"use client";

import { Menu, ShoppingBag, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { useCart } from "@/components/cart-provider";
import { navLinks } from "@/lib/data";

export function Header() {
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string>("");
  const { itemCount, openCart } = useCart();

  useEffect(() => {
    const sectionIds = navLinks.map((link) =>
      link.href.replace("/#", "").replace("#", ""),
    );
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveHref(`/#${visible[0].target.id}`);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-sm-border bg-sm-black/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {navLinks.map((link) => {
            const isActive = activeHref === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  "relative py-1 font-sans text-xs font-semibold uppercase tracking-[0.2em]",
                  "transition-colors duration-200",
                  isActive ? "text-sm-white" : "text-sm-gray hover:text-sm-red",
                ].join(" ")}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
                <span
                  className={[
                    "absolute inset-x-0 -bottom-0.5 h-0.5 bg-sm-red transition-opacity duration-200",
                    isActive ? "opacity-100" : "opacity-0",
                  ].join(" ")}
                  aria-hidden="true"
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={openCart}
            className="relative inline-flex h-10 w-10 items-center justify-center text-sm-white transition-all duration-200 hover:-translate-y-px hover:text-sm-red"
            aria-label={`Abrir carrito${itemCount > 0 ? `, ${itemCount} piezas` : ""}`}
          >
            <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
            {itemCount > 0 ? (
              <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center bg-sm-red px-1 font-sans text-[10px] font-bold text-sm-white">
                {itemCount > 99 ? "99+" : itemCount}
              </span>
            ) : null}
          </button>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center text-sm-white transition-colors duration-200 hover:text-sm-red lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Cerrar menu" : "Abrir menu"}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`border-t border-sm-border bg-sm-black lg:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <nav
          className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4"
          aria-label="Movil"
        >
          {navLinks.map((link) => {
            const isActive = activeHref === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={[
                  "relative px-2 py-3 font-sans text-sm font-semibold uppercase tracking-[0.18em]",
                  "transition-colors duration-200",
                  isActive ? "text-sm-white" : "text-sm-gray hover:text-sm-red",
                ].join(" ")}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
                <span
                  className={[
                    "absolute bottom-2 left-2 right-2 h-0.5 bg-sm-red transition-opacity duration-200",
                    isActive ? "opacity-100" : "opacity-0",
                  ].join(" ")}
                  aria-hidden="true"
                />
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
