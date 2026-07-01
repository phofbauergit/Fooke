import type { ReactNode } from "react";

interface HazardTagProps {
  children: ReactNode;
  className?: string;
}

/**
 * The one place hazard-yellow appears as a bordered surface — always at
 * label scale (never a large filled block), outline only, no fill.
 */
export function HazardTag({ children, className = "" }: HazardTagProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 border border-[var(--hazard)] px-2 py-0.5 font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--hazard)] ${className}`}
    >
      {children}
    </span>
  );
}
