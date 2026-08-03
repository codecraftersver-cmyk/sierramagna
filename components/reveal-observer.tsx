"use client";

import { useEffect } from "react";

/**
 * Observa elementos con clase `.reveal` y aplica `.is-visible`
 * cuando entran en el viewport. Incluye fallback para que nunca
 * queden secciones invisibles (p. ej. al ver por túnel).
 */
export function RevealObserver() {
  useEffect(() => {
    document.documentElement.classList.add("js-ready");

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal"),
    );
    if (elements.length === 0) return;

    const reveal = (el: Element) => {
      el.classList.add("is-visible");
    };

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) {
      elements.forEach(reveal);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          reveal(entry.target);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    elements.forEach((el) => observer.observe(el));

    // Si por alguna razón el observer no dispara (túnel, hidratación),
    // revelamos todo tras 1.2s para que la página nunca quede “cortada”.
    const fallback = window.setTimeout(() => {
      document
        .querySelectorAll<HTMLElement>(".reveal:not(.is-visible)")
        .forEach(reveal);
    }, 1200);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return null;
}
