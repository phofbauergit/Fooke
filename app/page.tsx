"use client";

import { useCallback, useEffect, useState } from "react";
import { ConceptRenderer } from "@/components/ConceptRenderer";
import { ConceptSwitcher } from "@/components/ConceptSwitcher";
import { useHasMounted } from "@/lib/hooks/useHasMounted";
import type { ConceptId } from "@/lib/types";

const VALID: ConceptId[] = ["datasheet", "noir", "constructivist"];
const DEFAULT_CONCEPT: ConceptId = "datasheet";

function parseConcept(value: string | null): ConceptId | null {
  if (value && VALID.includes(value as ConceptId)) return value as ConceptId;
  return null;
}

function resolveInitialConcept(): ConceptId {
  if (typeof window === "undefined") return DEFAULT_CONCEPT;
  const params = new URLSearchParams(window.location.search);
  const fromUrl = parseConcept(params.get("c"));
  const fromStorage = parseConcept(localStorage.getItem("fooke-concept"));
  return fromUrl ?? fromStorage ?? DEFAULT_CONCEPT;
}

export default function Home() {
  const mounted = useHasMounted();
  const [active, setActive] = useState<ConceptId>(resolveInitialConcept);

  const handleChange = useCallback((id: ConceptId) => {
    setActive(id);
    localStorage.setItem("fooke-concept", id);
    const url = new URL(window.location.href);
    url.searchParams.set("c", id);
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
      if (e.key === "1") handleChange("datasheet");
      if (e.key === "2") handleChange("noir");
      if (e.key === "3") handleChange("constructivist");
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [handleChange]);

  if (!mounted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#141210] text-[#857e70]">
        <span className="font-mono text-sm">Loading concepts…</span>
      </div>
    );
  }

  return (
    <>
      <ConceptRenderer active={active} />
      <ConceptSwitcher active={active} onChange={handleChange} />
    </>
  );
}
