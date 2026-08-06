"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import {
  catalogLines,
  type CatalogLineConfig,
  type Product,
} from "@/lib/data";
import {
  getProductAvailabilitySummary,
  formatNextTripLabel,
  getSkuAvailability,
} from "@/lib/inventory";
import { AvailabilityBadge } from "@/components/availability-badge";
import { ProductModal } from "@/components/product-modal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SizeGuideBlock } from "@/components/size-guide-block";

type ProductCatalogProps = {
  line: CatalogLineConfig;
  items: Product[];
};

export function ProductCatalog({ line, items }: ProductCatalogProps) {
  const [selected, setSelected] = useState<Product | null>(null);
  const sizeLabel = items[0]?.sizeLabel ?? "";

  return (
    <section className="border-t border-sm-border bg-sm-black">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Link
          href="/#productos"
          className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-sm-gray transition-colors hover:text-sm-red"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al catálogo
        </Link>

        <div className="mt-8">
          <SectionHeading
            eyebrow={line.brand}
            title={line.title}
            description={`${line.summary} Precio ${line.price} MXN. Tallas ${sizeLabel}.`}
          />
        </div>

        <div className="mb-6 border border-amber-700/40 bg-amber-950/25 px-5 py-4">
          <p className="font-sans text-sm text-amber-100/90">
            La mayoria de colores van{" "}
            <span className="font-semibold text-sm-white">sobre pedido</span>{" "}
            (importacion EE. UU., 15–25 dias). Anticipo 50%. Proximo viaje:{" "}
            <span className="font-semibold text-sm-white">
              {formatNextTripLabel()}
            </span>
            .
          </p>
        </div>

        <div className="mb-8 flex flex-wrap items-center gap-4 border border-sm-border bg-[#141416] px-5 py-4">
          <Image
            src="/brand/magellan-outdoors.png"
            alt="Magellan Outdoors"
            width={160}
            height={40}
            className="h-8 w-auto brightness-0 invert"
          />
          <div className="h-6 w-px bg-sm-border" aria-hidden="true" />
          <p className="font-sans text-sm text-sm-gray/80">
            {items.length} colores · {line.kind} · {line.price} MXN
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {catalogLines.map((entry) => {
            const active = entry.id === line.id;
            return (
              <Link
                key={entry.id}
                href={entry.href}
                className={[
                  "px-4 py-2.5 font-sans text-xs font-semibold uppercase tracking-[0.16em]",
                  "border transition-all duration-200",
                  active
                    ? "border-sm-red bg-sm-red text-sm-white"
                    : "border-sm-border bg-transparent text-sm-gray hover:border-sm-red hover:text-sm-red",
                ].join(" ")}
              >
                {entry.label}
              </Link>
            );
          })}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((product) => {
            const summary = getProductAvailabilitySummary(
              product.id,
              product.sizes,
            );
            return (
              <article
                key={product.id}
                className="group border border-sm-border bg-[#141416] shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition-all duration-200 ease-out hover:-translate-y-1.5 hover:shadow-[0_22px_48px_rgba(0,0,0,0.45)]"
              >
                <button
                  type="button"
                  onClick={() => setSelected(product)}
                  className="block w-full text-left"
                >
                  <div className="relative aspect-[3/4] overflow-hidden border-b border-sm-border bg-[#1a1a1c]">
                    <Image
                      src={product.image}
                      alt={`${product.name} - ${product.brand} ${product.model}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 bg-sm-black/80 px-2.5 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-sm-white backdrop-blur-sm">
                      {product.sleeve}
                    </span>
                    <AvailabilityBadge
                      availability={summary}
                      className="absolute right-3 top-3 bg-sm-black/85 backdrop-blur-sm"
                    />
                  </div>
                  <div className="space-y-2.5 p-4">
                    <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-sm-red">
                      {product.model}
                    </p>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-display text-xl tracking-[0.05em] text-sm-white transition-colors duration-200 group-hover:text-sm-red">
                        {product.name}
                      </h3>
                      <span
                        className="mt-1 h-3.5 w-3.5 shrink-0 rounded-full border border-white/25"
                        style={{ backgroundColor: product.colorHex }}
                        title={product.colorName}
                        aria-label={`Color ${product.colorName}`}
                      />
                    </div>
                    <div className="space-y-1.5">
                      {product.sizes.some(
                        (size) =>
                          getSkuAvailability(product.id, size) === "in-stock",
                      ) ? (
                        <p className="inline-flex items-center gap-1.5 font-sans text-[10px] text-sm-gray/55">
                          <span
                            className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                            aria-hidden="true"
                          />
                          Verde = entrega inmediata
                        </p>
                      ) : null}
                      <div className="flex flex-wrap gap-1.5">
                        {product.sizes.map((size) => {
                          const sizeStock =
                            getSkuAvailability(product.id, size) === "in-stock";
                          return (
                            <span
                              key={size}
                              title={
                                sizeStock
                                  ? `${size}: entrega inmediata`
                                  : `${size}: sobre pedido`
                              }
                              className={[
                                "border px-1.5 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-[0.08em]",
                                sizeStock
                                  ? "border-emerald-600/70 bg-emerald-950/50 text-emerald-300"
                                  : "border-sm-border text-sm-gray/80",
                              ].join(" ")}
                            >
                              {size}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-sans text-[11px] text-sm-gray/55">
                        Ver detalle
                      </p>
                      <p className="font-sans text-sm text-sm-gray/85">
                        {product.price} MXN
                      </p>
                    </div>
                  </div>
                </button>
              </article>
            );
          })}
        </div>

        <div className="mt-14 border-t border-sm-border pt-10 md:mt-16">
          <SizeGuideBlock />
        </div>
      </div>

      {selected ? (
        <ProductModal product={selected} onClose={() => setSelected(null)} />
      ) : null}
    </section>
  );
}
