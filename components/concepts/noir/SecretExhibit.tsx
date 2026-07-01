"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { company } from "@/lib/content";
import { useReducedMotion } from "@/lib/motion";

interface SecretExhibitProps {
  open: boolean;
  onClose: () => void;
}

const exhibit = company.heroSlides[2];

// Konami code (↑↑↓↓←→←→BA), captured by useKonamiCode in NoirConcept, flips
// `open` — a nod to FOOKE's own tradition of "ausgefallene Exponate."
export function SecretExhibit({ open, onClose }: SecretExhibitProps) {
  const reduced = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="secret-exhibit-title"
          className="fixed inset-0 z-[60] flex items-center justify-center p-6"
          style={{ backgroundColor: "rgba(22,23,26,0.9)" }}
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduced ? undefined : { opacity: 0 }}
          transition={{ duration: reduced ? 0 : 0.2 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-lg overflow-hidden border-2 border-[var(--hazard)] bg-[var(--graphite-raised)] p-8 md:p-10"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: 16 }}
            transition={{ duration: reduced ? 0 : 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
              }}
            />

            <p className="relative mb-5 inline-flex items-center gap-1.5 border border-[var(--hazard)] px-2 py-0.5 font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--hazard)]">
              Geheimes Exponat
            </p>
            <h3
              id="secret-exhibit-title"
              className="relative font-display font-extrabold uppercase leading-[0.98] text-[var(--warmwhite)]"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
            >
              {exhibit.title}
            </h3>
            <p className="relative mt-4 font-body text-sm leading-relaxed text-[var(--steel)] md:text-base">
              {exhibit.subtitle}
            </p>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="relative mt-8 border border-[var(--graphite-line)] px-4 py-2 font-body text-xs font-semibold uppercase tracking-[0.14em] text-[var(--steel)] transition-colors duration-200 hover:border-[var(--hazard)] hover:text-[var(--hazard)]"
            >
              Schließen
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
