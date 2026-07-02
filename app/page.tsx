"use client";

import { useCallback, useEffect, useState } from "react";
import { ColorModeSwitcher } from "@/components/ColorModeSwitcher";
import { ConceptRenderer } from "@/components/ConceptRenderer";
import { ConceptSwitcher } from "@/components/ConceptSwitcher";
import { useHasMounted } from "@/lib/hooks/useHasMounted";
import type { ColorMode, ConceptId } from "@/lib/types";

const VALID: ConceptId[] = ["datasheet", "noir", "constructivist"];
const VALID_PALETTE: ColorMode[] = ["client", "concept"];
const DEFAULT_CONCEPT: ConceptId = "datasheet";
const DEFAULT_PALETTE: ColorMode = "client";

function parseConcept(value: string | null): ConceptId | null {
  if (value && VALID.includes(value as ConceptId)) return value as ConceptId;
  return null;
}

function parsePalette(value: string | null): ColorMode | null {
  if (value && VALID_PALETTE.includes(value as ColorMode)) return value as ColorMode;
  return null;
}

function resolveInitialConcept(): ConceptId {
  if (typeof window === "undefined") return DEFAULT_CONCEPT;
  const params = new URLSearchParams(window.location.search);
  const fromUrl = parseConcept(params.get("c"));
  const fromStorage = parseConcept(localStorage.getItem("fooke-concept"));
  return fromUrl ?? fromStorage ?? DEFAULT_CONCEPT;
}

function resolveInitialPalette(): ColorMode {
  if (typeof window === "undefined") return DEFAULT_PALETTE;
  const params = new URLSearchParams(window.location.search);
  const fromUrl = parsePalette(params.get("palette"));
  const fromStorage = parsePalette(localStorage.getItem("fooke-palette"));
  return fromUrl ?? fromStorage ?? DEFAULT_PALETTE;
}

export default function Home() {
  const mounted = useHasMounted();
  const [active, setActive] = useState<ConceptId>(resolveInitialConcept);
  const [palette, setPalette] = useState<ColorMode>(resolveInitialPalette);

  const handleConceptChange = useCallback((id: ConceptId) => {
    setActive(id);
    localStorage.setItem("fooke-concept", id);
    const url = new URL(window.location.href);
    url.searchParams.set("c", id);
    window.history.replaceState({}, "", url.toString());
  }, []);

  const handlePaletteChange = useCallback((mode: ColorMode) => {
    setPalette(mode);
    localStorage.setItem("fooke-palette", mode);
    const url = new URL(window.location.href);
    url.searchParams.set("palette", mode);
    window.history.replaceState({}, "", url.toString());
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLSelectElement ||
        e.target instanceof HTMLTextAreaElement
      )
        return;
      if (e.key === "1") handleConceptChange("datasheet");
      if (e.key === "2") handleConceptChange("noir");
      if (e.key === "3") handleConceptChange("constructivist");
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [handleConceptChange]);

  if (!mounted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#141210] text-[#857e70]">
        <span className="font-mono text-sm">Loading concepts…</span>
      </div>
    );
  }

  return (
    <>
      <ConceptRenderer active={active} palette={palette} />
      <div
        className="fixed inset-x-0 bottom-0 z-50 flex flex-col items-center gap-2 px-4 pb-4 sm:flex-row sm:items-end sm:justify-start sm:gap-3 sm:px-6 sm:pb-6"
        aria-label="Concept and palette controls"
      >
        <ColorModeSwitcher active={palette} onChange={handlePaletteChange} />
        <ConceptSwitcher active={active} onChange={handleConceptChange} />
      </div>
    </>
  );
}
