import { formatNextTripLabel } from "@/lib/inventory";

export function TopBar() {
  return (
    <div className="bg-sm-red px-4 py-2.5 text-center">
      <p className="font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-sm-white sm:text-xs">
        Catalogo amplio · Sobre pedido desde EE. UU. · Proximo viaje:{" "}
        {formatNextTripLabel()}
      </p>
    </div>
  );
}
