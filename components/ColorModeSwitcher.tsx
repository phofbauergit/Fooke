"use client";

import type { ColorMode } from "@/lib/types";

const MODES: { id: ColorMode; label: string; sub: string; swatch: string }[] = [
  {
    id: "client",
    label: "Client",
    sub: "FOOKE CI",
    swatch: "#004187",
  },
  {
    id: "concept",
    label: "Concept",
    sub: "Exploration",
    swatch: "linear-gradient(135deg, #e8531b 33%, #f2c200 33% 66%, #1d3fbf 66%)",
  },
];

interface ColorModeSwitcherProps {
  active: ColorMode;
  onChange: (mode: ColorMode) => void;
}

/**
 * Palette toggle — always ink-on-warm-white like ConceptSwitcher so it
 * stays legible regardless of the concept theme behind it.
 */
export function ColorModeSwitcher({ active, onChange }: ColorModeSwitcherProps) {
  return (
    <div
      className="flex overflow-hidden border border-[#141210] bg-[#f4f1ea] shadow-[0_2px_0_0_#141210]"
      role="group"
      aria-label="Color palette selector"
    >
      {MODES.map((mode) => {
        const isActive = active === mode.id;
        return (
          <button
            key={mode.id}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(mode.id)}
            className={`group relative flex flex-col gap-0.5 border-r border-[#141210] px-3 py-2.5 text-left transition-colors duration-200 last:border-r-0 sm:px-3.5 ${
              isActive ? "bg-[#141210]" : "bg-transparent hover:bg-[#141210]/[0.06]"
            }`}
            style={{ ["--focus-ring" as string]: "#004187" }}
          >
            <span className="flex items-center gap-1.5">
              <span
                aria-hidden
                className="h-1.5 w-1.5 shrink-0 rounded-full"
                style={{
                  background: mode.swatch,
                }}
              />
              <span
                className={`text-xs font-semibold uppercase tracking-wide ${
                  isActive ? "text-[#f4f1ea]" : "text-[#141210]"
                }`}
              >
                {mode.label}
              </span>
            </span>
            <span
              className={`hidden pl-[18px] font-mono text-[9px] uppercase tracking-wider sm:block ${
                isActive ? "text-[#f4f1ea]/50" : "text-[#141210]/40"
              }`}
            >
              {mode.sub}
            </span>
          </button>
        );
      })}
    </div>
  );
}
