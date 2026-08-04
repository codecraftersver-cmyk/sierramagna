"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { Minus, Plus, Trash2, X } from "lucide-react";
import { useCart } from "@/components/cart-provider";
// import { InstagramOrderPanel } from "@/components/instagram-order-panel";
import { Button } from "@/components/ui/Button";
import { buildCartOrderMessage, formatMxn } from "@/lib/cart";
import { getWhatsAppOrderUrl } from "@/lib/contact";

export function CartDrawer() {
  const {
    items,
    itemCount,
    total,
    isOpen,
    closeCart,
    setQty,
    removeItem,
    clearCart,
  } = useCart();
  const [copied, setCopied] = useState(false);
  // TODO: reactivar Instagram — const [igStep, setIgStep] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  const orderMessage = useMemo(() => {
    if (typeof window === "undefined" || items.length === 0) return "";
    return buildCartOrderMessage(items, window.location.origin);
  }, [items]);

  async function copyMessage() {
    if (!orderMessage) return;
    try {
      await navigator.clipboard.writeText(orderMessage);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 4000);
    } catch {
      // ignore
    }
  }

  async function handleWhatsApp() {
    if (items.length === 0) return;
    // setIgStep(false);
    await copyMessage();
    const ua = navigator.userAgent || "";
    const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(ua);
    const url = getWhatsAppOrderUrl(orderMessage);
    if (isMobile) {
      window.location.href = url;
    } else {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  }

  // TODO: reactivar pedido por Instagram
  // function handleInstagram() {
  //   if (items.length === 0) return;
  //   void copyMessage();
  //   setIgStep(true);
  // }

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[210] flex justify-end">
      <button
        type="button"
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        aria-label="Cerrar carrito"
        onClick={closeCart}
      />

      <aside
        className="relative z-10 flex h-full w-full max-w-md flex-col border-l border-sm-border bg-sm-black shadow-[-20px_0_50px_rgba(0,0,0,0.45)]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
      >
        <div className="flex items-center justify-between border-b border-sm-border px-5 py-4">
          <div>
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-sm-red">
              Pedido
            </p>
            <h2
              id="cart-title"
              className="font-display text-3xl tracking-[0.06em] text-sm-white"
            >
              Carrito
            </h2>
            <p className="mt-1 font-sans text-xs text-sm-gray/65">
              {itemCount} {itemCount === 1 ? "pieza" : "piezas"}
            </p>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="border border-sm-border p-2 text-sm-white transition-colors hover:border-sm-red hover:text-sm-red"
            aria-label="Cerrar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <p className="font-sans text-sm text-sm-gray/70">
              Tu carrito esta vacio. Elige color y talla en una camisa para
              agregar.
            </p>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={item.key}
                  className="flex gap-3 border border-sm-border bg-[#141416] p-3"
                >
                  <div className="relative h-24 w-20 shrink-0 overflow-hidden border border-sm-border bg-[#1a1a1c]">
                    <Image
                      src={item.image}
                      alt={`${item.colorName} ${item.size}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-sm-red">
                      {item.model}
                    </p>
                    <p className="truncate font-display text-xl tracking-[0.04em] text-sm-white">
                      {item.colorName}
                    </p>
                    <p className="mt-1 font-sans text-xs text-sm-gray/70">
                      {item.sleeve} · Talla {item.size}
                    </p>
                    <p className="mt-1 font-sans text-sm text-sm-white">
                      {item.priceLabel} MXN
                    </p>
                    <div className="mt-3 flex items-center justify-between gap-2">
                      <div className="inline-flex items-center border border-sm-border">
                        <button
                          type="button"
                          className="p-2 text-sm-white hover:text-sm-red"
                          aria-label="Quitar una"
                          onClick={() => setQty(item.key, item.qty - 1)}
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="min-w-[2rem] text-center font-sans text-xs font-semibold text-sm-white">
                          {item.qty}
                        </span>
                        <button
                          type="button"
                          className="p-2 text-sm-white hover:text-sm-red"
                          aria-label="Agregar una"
                          onClick={() => setQty(item.key, item.qty + 1)}
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <button
                        type="button"
                        className="p-2 text-sm-gray hover:text-sm-red"
                        aria-label="Eliminar del carrito"
                        onClick={() => removeItem(item.key)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-sm-border px-5 py-4">
          <div className="mb-4 flex items-end justify-between">
            <p className="font-sans text-xs uppercase tracking-[0.16em] text-sm-gray/60">
              Total estimado
            </p>
            <p className="font-display text-3xl tracking-[0.04em] text-sm-white">
              {formatMxn(total)}
            </p>
          </div>
          <p className="mb-4 font-sans text-[11px] text-sm-gray/55">
            Pago por transferencia o efectivo. Sierra Magna te confirma el
            pedido por chat.
          </p>
          <div className="flex flex-col gap-2">
            <Button
              type="button"
              variant="primary"
              className="w-full"
              disabled={items.length === 0}
              onClick={handleWhatsApp}
            >
              Finalizar por WhatsApp
            </Button>
            {/* TODO: reactivar pedido por Instagram
            <Button
              type="button"
              variant="outline"
              className="w-full"
              disabled={items.length === 0}
              onClick={handleInstagram}
            >
              Finalizar por Instagram
            </Button>
            {igStep && orderMessage ? (
              <InstagramOrderPanel
                message={orderMessage}
                copied={copied}
                onCopy={copyMessage}
              />
            ) : null}
            */}
            {items.length > 0 ? (
              <button
                type="button"
                className="py-2 font-sans text-xs uppercase tracking-[0.14em] text-sm-gray/60 hover:text-sm-red"
                onClick={() => {
                  clearCart();
                  // setIgStep(false);
                }}
              >
                Vaciar carrito
              </button>
            ) : null}
          </div>
        </div>
      </aside>
    </div>,
    document.body,
  );
}
