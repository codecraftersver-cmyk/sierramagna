import type { Availability } from "@/lib/inventory";
import { AVAILABILITY_COPY } from "@/lib/inventory";

type AvailabilityBadgeProps = {
  availability: Availability | "mixed";
  className?: string;
};

export function AvailabilityBadge({
  availability,
  className = "",
}: AvailabilityBadgeProps) {
  if (availability === "mixed") {
    return (
      <span
        className={[
          "inline-flex border px-2.5 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.12em]",
          "border-sky-700/50 bg-sky-950/40 text-sky-200",
          className,
        ].join(" ")}
      >
        Algunas tallas inmediatas
      </span>
    );
  }

  const copy = AVAILABILITY_COPY[availability];
  return (
    <span
      className={[
        "inline-flex border px-2.5 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.12em]",
        copy.badgeClass,
        className,
      ].join(" ")}
    >
      {copy.shortLabel}
    </span>
  );
}
