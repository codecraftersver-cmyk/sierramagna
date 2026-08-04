"use client";

import { useEffect, useRef } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CONTACT, openInstagramDm } from "@/lib/contact";

type InstagramOrderPanelProps = {
  message: string;
  copied: boolean;
  onCopy: () => void | Promise<void>;
};

export function InstagramOrderPanel({
  message,
  copied,
  onCopy,
}: InstagramOrderPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    panelRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, []);

  async function handleOpenChat() {
    await onCopy();
    openInstagramDm();
  }

  return (
    <div
      ref={panelRef}
      className="mt-3 border border-sm-border bg-[#141416] p-4"
    >
      <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-sm-red">
        Pedido para Instagram
      </p>
      <ol className="mt-3 list-decimal space-y-1 pl-4 font-sans text-sm leading-relaxed text-sm-gray/80">
        <li>Copia el mensaje (ya incluye color, talla y precio).</li>
        <li>Abre el chat de @{CONTACT.instagramHandle}.</li>
        <li>Pega el mensaje en Instagram y envialo.</li>
      </ol>
      <textarea
        readOnly
        value={message}
        rows={9}
        className="mt-4 w-full resize-none border border-sm-border bg-sm-black p-3 font-sans text-xs leading-relaxed text-sm-gray/90 outline-none focus:border-sm-red"
        onFocus={(e) => e.currentTarget.select()}
      />
      <div className="mt-3 flex flex-col gap-2">
        <Button type="button" variant="outline" className="w-full" onClick={onCopy}>
          {copied ? (
            <>
              <Check className="h-4 w-4" />
              Mensaje copiado
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              1. Copiar mensaje
            </>
          )}
        </Button>
        <Button
          type="button"
          variant="primary"
          className="w-full"
          onClick={handleOpenChat}
        >
          2. Abrir chat de Instagram
        </Button>
      </div>
      <p className="mt-3 font-sans text-[11px] text-sm-gray/55">
        En el celular debe abrir la app. Si abre el navegador, elige “Abrir en
        Instagram” o pega el mensaje en DM de @{CONTACT.instagramHandle}.
      </p>
    </div>
  );
}
