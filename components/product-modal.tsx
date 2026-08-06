"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Minus, Plus, X } from "lucide-react";
import type { Product } from "@/lib/data";
import { productToCartItem } from "@/lib/cart";
import { buildOrderMessage, getWhatsAppOrderUrl } from "@/lib/contact";
import { getProductCopy } from "@/lib/product-copy";
import {
  AVAILABILITY_COPY,
  availabilityWhatsAppLine,
  formatNextTripLabel,
  getProductAvailabilitySummary,
  getSkuAvailability,
} from "@/lib/inventory";
import { useCart } from "@/components/cart-provider";
// import { InstagramOrderPanel } from "@/components/instagram-order-panel";
import { AvailabilityBadge } from "@/components/availability-badge";
import { Button } from "@/components/ui/Button";
import { SizeGuideBlock } from "@/components/size-guide-block";

type ProductModalProps = {
  product: Product;
  onClose: () => void;
};

function selectionHint(size: string | null, quantity: number) {
  const missingSize = !size;
  const missingQty = quantity < 1;
  if (missingSize && missingQty) {
    return "Elige una talla y una cantidad mayor a 0.";
  }
  if (missingSize) return "Elige una talla para continuar.";
  if (missingQty) return "La cantidad debe ser al menos 1.";
  return null;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const copy = getProductCopy(product.line);
  const { addItem } = useCart();
  const [mounted, setMounted] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [qty, setQty] = useState(1);
  const [selectionError, setSelectionError] = useState<string | null>(null);
  // const [igStep, setIgStep] = useState(false);
  // const [copied, setCopied] = useState(false);
  const [addedHint, setAddedHint] = useState(false);
  const errorRef = useRef<HTMLParagraphElement>(null);

  const productSummary = useMemo(
    () => getProductAvailabilitySummary(product.id, product.sizes),
    [product.id, product.sizes],
  );

  const selectedAvailability = useMemo(
    () =>
      selectedSize
        ? getSkuAvailability(product.id, selectedSize)
        : productSummary === "mixed"
          ? "preorder"
          : productSummary,
    [product.id, selectedSize, productSummary],
  );

  const availabilityCopy = AVAILABILITY_COPY[selectedAvailability];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  useEffect(() => {
    setSelectedSize(null);
    setQty(1);
    setSelectionError(null);
    // setIgStep(false);
    // setCopied(false);
    setAddedHint(false);
  }, [product.id]);

  const orderMessage = useMemo(() => {
    if (!selectedSize || typeof window === "undefined") return "";
    const origin = window.location.origin;
    const availability = getSkuAvailability(product.id, selectedSize);
    return buildOrderMessage({
      brand: product.brand,
      model: product.model,
      kind: product.kind,
      sleeve: product.sleeve,
      colorName: product.colorName,
      size: selectedSize,
      price: product.price,
      photoUrl: `${origin}${product.image}`,
      pageUrl: window.location.href,
      availabilityLabel: availabilityWhatsAppLine(availability),
      paymentNote:
        availability === "preorder"
          ? "Anticipo: 50% para apartar; 50% contra entrega."
          : "Pago: transferencia o efectivo al confirmar.",
    });
  }, [product, selectedSize]);

  function ensureSelectionReady() {
    const hint = selectionHint(selectedSize, qty);
    if (hint) {
      setSelectionError(hint);
      window.requestAnimationFrame(() => {
        errorRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      });
      return false;
    }
    setSelectionError(null);
    return true;
  }

  async function copyOrderMessage() {
    if (!orderMessage) return;
    try {
      await navigator.clipboard.writeText(orderMessage);
      // setCopied(true);
      // window.setTimeout(() => setCopied(false), 4000);
    } catch {
      // ignore
    }
  }

  function handleAddToCart() {
    if (!ensureSelectionReady() || !selectedSize) return;
    addItem(productToCartItem(product, selectedSize, qty));
    setAddedHint(true);
    window.setTimeout(() => setAddedHint(false), 2500);
  }

  async function handleWhatsApp() {
    if (!ensureSelectionReady()) return;
    await copyOrderMessage();
    const ua = navigator.userAgent || "";
    const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(ua);
    const url = getWhatsAppOrderUrl(orderMessage);
    if (isMobile) {
      window.location.href = url;
    } else {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  }

  // TODO: reactivar pedido por Instagram cuando definamos flujo en app/mobile
  // async function handleInstagram() {
  //   if (!ensureSelectionReady()) return;
  //   await copyOrderMessage();
  //   setIgStep(true);
  // }

  if (!mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/85 backdrop-blur-sm"
        aria-label="Cerrar"
        onClick={onClose}
      />

      <div className="relative z-10 flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden border border-sm-border bg-sm-black shadow-[0_30px_80px_rgba(0,0,0,0.65)] sm:flex-row">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-20 border border-sm-border bg-sm-black/80 p-2 text-sm-white backdrop-blur-sm transition-colors hover:border-sm-red hover:text-sm-red"
          aria-label="Cerrar detalle"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative h-[42vh] w-full shrink-0 bg-[#141416] sm:h-auto sm:min-h-[560px] sm:w-[46%]">
          <Image
            src={product.image}
            alt={`${product.name} - ${product.brand} ${product.model}`}
            fill
            priority
            sizes="(max-width: 640px) 100vw, 46vw"
            className="object-cover"
          />
          <span className="absolute left-4 top-4 bg-sm-black/80 px-3 py-1.5 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-sm-white backdrop-blur-sm">
            {product.sleeve}
          </span>
        </div>

        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto border-t border-sm-border sm:border-l sm:border-t-0">
          <div className="space-y-6 p-5 sm:p-8 lg:p-10">
            <div>
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-sm-red">
                {product.brand} · {product.model}
              </p>
              <h2
                id="product-modal-title"
                className="mt-2 font-display text-4xl tracking-[0.06em] text-sm-white md:text-5xl"
              >
                {product.name}
              </h2>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <span
                  className="inline-flex h-4 w-4 rounded-full border border-white/25"
                  style={{ backgroundColor: product.colorHex }}
                  aria-hidden="true"
                />
                <p className="font-sans text-sm text-sm-gray/80">
                  Color {product.colorName}
                </p>
                <span className="text-sm-border">|</span>
                <p className="font-sans text-sm font-semibold text-sm-white">
                  {product.price} MXN
                </p>
              </div>
              <div className="mt-4 space-y-2">
                <AvailabilityBadge
                  availability={
                    selectedSize ? selectedAvailability : productSummary
                  }
                />
                <p className="font-sans text-xs leading-relaxed text-sm-gray/70">
                  {selectedSize
                    ? availabilityCopy.detail
                    : productSummary === "mixed"
                      ? "Algunas tallas tienen entrega inmediata. Elige talla para ver el tiempo exacto."
                      : AVAILABILITY_COPY[
                          productSummary === "in-stock" ? "in-stock" : "preorder"
                        ].detail}
                </p>
                {selectedAvailability === "preorder" ||
                (!selectedSize && productSummary === "preorder") ? (
                  <p className="font-sans text-xs text-sm-gray/55">
                    Proximo viaje a EE. UU.: {formatNextTripLabel()}.
                  </p>
                ) : null}
              </div>
            </div>

            <div className="border-t border-sm-border pt-5">
              <h3 className="font-display text-2xl tracking-[0.08em] text-sm-white">
                {copy.headline}
              </h3>
              <div className="mt-4 space-y-3">
                {copy.intro.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="font-sans text-sm leading-relaxed text-sm-gray/75"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-sm-red">
                {copy.featuresTitle}
              </h4>
              <ul className="mt-3 space-y-2">
                {copy.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-3 font-sans text-sm text-sm-gray/80"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 bg-sm-red"
                      aria-hidden="true"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-sm-border pt-5">
              <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-sm-red">
                Elige tu talla
              </h4>
              <div
                className={[
                  "mt-3 flex flex-wrap gap-2 rounded-sm p-1 transition-shadow",
                  selectionError && !selectedSize
                    ? "ring-1 ring-sm-red/80"
                    : "",
                ].join(" ")}
              >
                {product.sizes.map((size) => {
                  const active = selectedSize === size;
                  return (
                    <button
                      key={size}
                      type="button"
                      onClick={() => {
                        setSelectedSize(size);
                        setSelectionError(selectionHint(size, qty));
                        // setIgStep(false);
                      }}
                      className={[
                        "min-w-[3rem] border px-3 py-2 text-center font-sans text-xs font-semibold uppercase tracking-[0.12em] transition-colors",
                        active
                          ? "border-sm-red bg-sm-red text-sm-white"
                          : "border-sm-border text-sm-white hover:border-sm-red hover:text-sm-red",
                      ].join(" ")}
                      aria-pressed={active}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>

              <div className="mt-5">
                <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-sm-red">
                  Cantidad
                </h4>
                <div
                  className={[
                    "mt-3 inline-flex items-center border",
                    selectionError && qty < 1
                      ? "border-sm-red"
                      : "border-sm-border",
                  ].join(" ")}
                >
                  <button
                    type="button"
                    className="p-3 text-sm-white hover:text-sm-red"
                    aria-label="Quitar una"
                    onClick={() =>
                      setQty((n) => {
                        const next = Math.max(0, n - 1);
                        setSelectionError(selectionHint(selectedSize, next));
                        return next;
                      })
                    }
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="min-w-[2.5rem] text-center font-sans text-sm font-semibold text-sm-white">
                    {qty}
                  </span>
                  <button
                    type="button"
                    className="p-3 text-sm-white hover:text-sm-red"
                    aria-label="Agregar una"
                    onClick={() =>
                      setQty((n) => {
                        const next = Math.min(20, n + 1);
                        setSelectionError(selectionHint(selectedSize, next));
                        return next;
                      })
                    }
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <p className="mt-3 font-sans text-xs leading-relaxed text-sm-gray/55">
                Puedes armar tu carrito y pedir por WhatsApp. En sobre pedido se
                solicita anticipo del 50%; el resto contra entrega.
              </p>
              {addedHint ? (
                <p className="mt-2 font-sans text-xs text-sm-white">
                  Agregado al carrito.
                </p>
              ) : null}
            </div>

            <div className="border-t border-sm-border pt-5">
              <SizeGuideBlock compact />
            </div>

            <div className="flex flex-col gap-3 pt-1">
              {selectionError ? (
                <p
                  ref={errorRef}
                  role="alert"
                  className="border border-sm-red/70 bg-sm-red/15 px-3 py-2.5 text-center font-sans text-sm font-semibold text-sm-red"
                >
                  {selectionError}
                </p>
              ) : null}
              <Button
                type="button"
                variant="primary"
                className="w-full"
                onClick={handleAddToCart}
              >
                Agregar al carrito
              </Button>
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={handleWhatsApp}
              >
                {selectedAvailability === "in-stock"
                  ? "Pedir ya por WhatsApp"
                  : "Apartar por WhatsApp"}
              </Button>
              {/* TODO: reactivar pedido por Instagram
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={handleInstagram}
              >
                Pedir ya por Instagram
              </Button>
              {igStep && orderMessage ? (
                <InstagramOrderPanel
                  message={orderMessage}
                  copied={copied}
                  onCopy={copyOrderMessage}
                />
              ) : null}
              */}
              <Button
                type="button"
                variant="ghost"
                className="w-full"
                onClick={onClose}
              >
                Seguir viendo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
