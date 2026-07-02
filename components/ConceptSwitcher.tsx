"use client";

import type { ConceptId } from "@/lib/types";

const META: Record<
  ConceptId,
  { index: string; name: string; sub: string; accent: string }
> = {
  datasheet: {
    index: "01",
    name: "Datasheet",
    sub: "Swiss / paper",
    accent: "#e8531b",
  },
  noir: {
    index: "02",
    name: "Noir",
    sub: "Graphite / steel",
    accent: "#f2c200",
  },
  constructivist: {
    index: "03",
    name: "Constructivist",
    sub: "Block / ultramarine",
    accent: "#1d3fbf",
  },
};

const ORDER: ConceptId[] = ["datasheet", "noir", "constructivist"];

interface ConceptSwitcherProps {
  active: ConceptId;
  onChange: (id: ConceptId) => void;
}

/**
 * Self-contained wayfinding strip — always ink-on-warm-white regardless of
 * the concept rendered behind it, so it stays legible on paper, graphite,
 * and ultramarine alike. Each tab carries its own concept's accent as a
 * permanent identity swatch rather than mirroring the active theme.
 */
export function ConceptSwitcher({ active, onChange }: ConceptSwitcherProps) {
  return (
    <div
      className="flex overflow-hidden border border-[#141210] bg-[#f4f1ea] shadow-[0_2px_0_0_#141210]"
      role="tablist"
      aria-label="Design concept selector"
    >
      {ORDER.map((id) => {
        const meta = META[id];
        const isActive = active === id;
        return (
          <button
            key={id}
            role="tab"
            aria-selected={isActive}
            aria-controls={`concept-panel-${id}`}
            id={`concept-tab-${id}`}
            onClick={() => onChange(id)}
            className={`group relative flex flex-col gap-0.5 border-r border-[#141210] px-3.5 py-2.5 text-left transition-colors duration-200 last:border-r-0 sm:px-4 ${
              isActive ? "bg-[#141210]" : "bg-transparent hover:bg-[#141210]/[0.06]"
            }`}
            style={{ ["--focus-ring" as string]: meta.accent }}
          >
            <span className="flex items-center gap-1.5">
              <span
                aria-hidden
                className="h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ backgroundColor: meta.accent }}
              />
              <span
                className={`font-mono text-[10px] tabular-nums ${
                  isActive ? "text-[#f4f1ea]/60" : "text-[#141210]/50"
                }`}
              >
                {meta.index}
              </span>
              <span
                className={`text-xs font-semibold uppercase tracking-wide ${
                  isActive ? "text-[#f4f1ea]" : "text-[#141210]"
                }`}
              >
                {meta.name}
              </span>
            </span>
            <span
              className={`hidden pl-[18px] font-mono text-[9px] uppercase tracking-wider sm:block ${
                isActive ? "text-[#f4f1ea]/50" : "text-[#141210]/40"
              }`}
            >
              {meta.sub}
            </span>
          </button>
        );
      })}
    </div>
  );
}
