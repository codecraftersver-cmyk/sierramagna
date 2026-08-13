"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Minus, Plus } from "lucide-react";
import { getProductsByLine } from "@/lib/data";
import { productToCartItem } from "@/lib/cart";
import { buildOrderMessage, getWhatsAppOrderUrl } from "@/lib/contact";
import { availabilityWhatsAppLine } from "@/lib/inventory";
import { useCart } from "@/components/cart-provider";
import { Button } from "@/components/ui/Button";

const GALLERY = [
  {
    src: "/products/promo/fiestas-patrias/blanca-frente-sm.png",
    color: "Blanca",
    label: "Blanca · Frente",
  },
  {
    src: "/products/promo/fiestas-patrias/blanca-espalda-sm.png",
    color: "Blanca",
    label: "Blanca · Espalda",
  },
  {
    src: "/products/promo/fiestas-patrias/verde-espalda-sm.png",
    color: "Verde",
    label: "Verde · Espalda",
  },
] as const;

export function FiestasPatriasBanner() {
  const products = getProductsByLine("fiestas-patrias");
  const { addItem } = useCart();
  const [colorName, setColorName] = useState<"Blanca" | "Verde">("Blanca");
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [qty, setQty] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const [addedHint, setAddedHint] = useState(false);

  const product = products.find((item) => item.colorName === colorName) ?? products[0];

  const orderMessage = useMemo(() => {
    if (!product || !selectedSize || typeof window === "undefined") return "";
    const origin = window.location.origin;
    return buildOrderMessage({
      brand: product.brand,
      model: product.model,
      kind: product.kind,
      sleeve: product.sleeve,
      colorName: product.colorName,
      size: selectedSize,
      price: product.price,
      photoUrl: `${origin}${product.image}`,
      pageUrl: `${origin}/#fiestas-patrias`,
      availabilityLabel: availabilityWhatsAppLine("preorder"),
      paymentNote: "Anticipo: 50% para apartar; 50% contra entrega.",
    });
  }, [product, selectedSize]);

  function ensureReady() {
    if (!selectedSize) {
      setError("Elige una talla para continuar.");
      return false;
    }
    if (qty < 1) {
      setError("La cantidad debe ser al menos 1.");
      return false;
    }
    setError(null);
    return true;
  }

  function handleAddToCart() {
    if (!ensureReady() || !product || !selectedSize) return;
    addItem(productToCartItem(product, selectedSize, qty));
    setAddedHint(true);
    window.setTimeout(() => setAddedHint(false), 2500);
  }

  function handleWhatsApp() {
    if (!ensureReady() || !orderMessage) return;
    const ua = navigator.userAgent || "";
    const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(ua);
    const url = getWhatsAppOrderUrl(orderMessage);
    if (isMobile) {
      window.location.href = url;
    } else {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  }

  return (
    <section
      id="fiestas-patrias"
      className="relative overflow-hidden bg-sm-black"
    >
      <Image
        src="/products/promo/fiestas-patrias/flag-bg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-sm-black via-sm-black/80 to-sm-black/45"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-sm-black via-sm-black/30 to-sm-black/55"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 top-1/2 h-[70%] w-[45%] -translate-y-1/2 rounded-full bg-[#006847]/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-16 top-1/3 h-[55%] w-[40%] rounded-full bg-sm-red/20 blur-3xl"
        aria-hidden="true"
      />

      <Image
        src="/brand/logo-sierra-magna-classic.png"
        alt=""
        width={520}
        height={520}
        className="pointer-events-none absolute -right-10 top-10 h-auto w-[50vw] max-w-[380px] opacity-[0.12] mix-blend-screen sm:right-6"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <p className="font-display text-xl tracking-[0.22em] text-sm-white/80 sm:text-2xl">
          VIVA MEXICO
        </p>
        <p className="mt-1 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-sm-gray/70">
          Independencia · 16 de septiembre
        </p>

        <div className="mt-8 grid items-start gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14">
          <div>
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-sm-red">
              Edicion patriotica · sobre pedido
            </p>
            <div className="mt-4 flex items-center gap-3">
              <Image
                src="/brand/logo-sierra-magna-classic.png"
                alt="Sierra Magna"
                width={56}
                height={56}
                className="h-12 w-12 object-contain sm:h-14 sm:w-14"
              />
              <p className="font-display text-3xl tracking-[0.12em] text-sm-white sm:text-4xl">
                SIERRA <span className="text-sm-red">MAGNA</span>
              </p>
            </div>
            <h2 className="mt-5 max-w-xl font-display text-4xl leading-[0.95] tracking-[0.04em] text-sm-white sm:text-5xl lg:text-6xl">
              FIESTAS PATRIAS
              <br />
              16 DE SEPTIEMBRE
            </h2>
            <p className="mt-5 max-w-xl font-sans text-base leading-relaxed text-sm-gray/85 md:text-lg">
              Camisa Magellan con la bandera de Mexico. Elige color y talla,
              agrega al carrito o aparta por WhatsApp. Traemos tu pedido para
              estas fiestas.
            </p>
            <p className="mt-6 font-display text-5xl tracking-[0.06em] text-sm-white sm:text-6xl">
              $1100
              <span className="ml-2 font-sans text-base font-semibold uppercase tracking-[0.16em] text-sm-red">
                MXN
              </span>
            </p>
            <p className="mt-2 font-sans text-xs uppercase tracking-[0.16em] text-sm-gray/60">
              Sobre pedido · anticipo 50% · resto contra entrega
            </p>

            <div className="mt-7">
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-sm-red">
                Color
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {products.map((item) => {
                  const active = item.colorName === colorName;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setColorName(item.colorName as "Blanca" | "Verde");
                        setError(null);
                      }}
                      className={[
                        "inline-flex items-center gap-2 border px-4 py-2.5 font-sans text-xs font-semibold uppercase tracking-[0.14em] transition-colors",
                        active
                          ? item.colorName === "Verde"
                            ? "border-[#006847] bg-[#006847] text-sm-white"
                            : "border-sm-white bg-sm-white text-sm-black"
                          : "border-sm-border text-sm-white hover:border-sm-red",
                      ].join(" ")}
                    >
                      <span
                        className="h-3.5 w-3.5 rounded-full border border-white/30"
                        style={{ backgroundColor: item.colorHex }}
                        aria-hidden="true"
                      />
                      {item.colorName}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-6">
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-sm-red">
                Talla
              </p>
              <div
                className={[
                  "mt-3 flex flex-wrap gap-2",
                  error && !selectedSize ? "rounded-sm p-1 ring-1 ring-sm-red/80" : "",
                ].join(" ")}
              >
                {product?.sizes.map((size) => {
                  const active = selectedSize === size;
                  return (
                    <button
                      key={size}
                      type="button"
                      onClick={() => {
                        setSelectedSize(size);
                        setError(null);
                      }}
                      className={[
                        "min-w-[3rem] border px-3 py-2 text-center font-sans text-xs font-semibold uppercase tracking-[0.12em] transition-colors",
                        active
                          ? "border-sm-red bg-sm-red text-sm-white"
                          : "border-sm-border text-sm-white hover:border-sm-red hover:text-sm-red",
                      ].join(" ")}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-6">
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-sm-red">
                Cantidad
              </p>
              <div className="mt-3 inline-flex items-center border border-sm-border">
                <button
                  type="button"
                  className="p-3 text-sm-white hover:text-sm-red"
                  aria-label="Quitar una"
                  onClick={() => setQty((n) => Math.max(1, n - 1))}
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
                  onClick={() => setQty((n) => Math.min(20, n + 1))}
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {error ? (
              <p
                role="alert"
                className="mt-4 border border-sm-red/70 bg-sm-red/15 px-3 py-2.5 text-center font-sans text-sm font-semibold text-sm-red"
              >
                {error}
              </p>
            ) : null}
            {addedHint ? (
              <p className="mt-3 font-sans text-xs text-sm-white">
                Agregado al carrito. Puedes seguir armando tu pedido.
              </p>
            ) : null}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button type="button" onClick={handleAddToCart}>
                Agregar al carrito
              </Button>
              <Button type="button" variant="outline" onClick={handleWhatsApp}>
                Apartar por WhatsApp
              </Button>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {GALLERY.map((shirt) => {
                const active = shirt.color === colorName;
                return (
                  <button
                    key={shirt.src}
                    type="button"
                    onClick={() =>
                      setColorName(shirt.color as "Blanca" | "Verde")
                    }
                    className={[
                      "overflow-hidden border bg-[#141416] text-left transition-all",
                      active
                        ? "border-[#006847] ring-2 ring-[#006847]/70"
                        : "border-sm-border opacity-75 hover:opacity-100",
                    ].join(" ")}
                  >
                    <div className="relative aspect-[3/4]">
                      <Image
                        src={shirt.src}
                        alt={shirt.label}
                        fill
                        sizes="(max-width: 1024px) 33vw, 18vw"
                        className="object-cover object-center"
                        priority
                      />
                    </div>
                    <span className="block border-t border-sm-border px-1.5 py-2 text-center font-sans text-[9px] font-semibold uppercase tracking-[0.12em] text-sm-gray/70 sm:text-[10px]">
                      {shirt.label}
                    </span>
                  </button>
                );
              })}
            </div>
            <p className="mt-4 text-center font-sans text-xs uppercase tracking-[0.16em] text-sm-gray/70">
              Presencia mexicana · Fiestas Patrias
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
