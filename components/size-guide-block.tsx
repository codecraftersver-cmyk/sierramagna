import Image from "next/image";

type SizeGuideBlockProps = {
  compact?: boolean;
  className?: string;
};

export function SizeGuideBlock({
  compact = false,
  className = "",
}: SizeGuideBlockProps) {
  return (
    <div className={className}>
      <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-sm-red">
        Guía de tallas
      </h4>
      <p className="mt-2 font-sans text-sm leading-relaxed text-sm-gray/75">
        Las medidas son de una sola cara de la camisa. Si mides el contorno del
        cuerpo, divide entre 2 y compáralo con la tabla.
      </p>
      <div
        className={[
          "mt-4 overflow-hidden border border-sm-border bg-[#141416]",
          compact ? "" : "shadow-[0_12px_30px_rgba(0,0,0,0.25)]",
        ].join(" ")}
      >
        <Image
          src="/brand/guia-tallas-sierra-magna.png"
          alt="Guía de tallas Sierra Magna — medidas de camisa en centímetros"
          width={1920}
          height={1080}
          className="h-auto w-full"
          sizes={compact ? "(max-width: 768px) 100vw, 480px" : "100vw"}
        />
      </div>
    </div>
  );
}
