"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useReducedMotion } from "@/lib/motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

function RegistrationMark({ className }: { className: string }) {
  return (
    <span className={`absolute h-5 w-5 ${className}`} aria-hidden>
      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[var(--mark)]" />
      <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[var(--mark)]" />
      <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--mark)]" />
    </span>
  );
}

function DimLine({
  axis,
  className,
  reduced,
  delay = 0,
}: {
  axis: "h" | "v";
  className: string;
  reduced: boolean;
  delay?: number;
}) {
  return (
    <motion.span
      aria-hidden
      className={`absolute bg-[var(--mark)] ${axis === "h" ? "h-px" : "w-px"} ${className}`}
      style={{ transformOrigin: axis === "h" ? "left center" : "top center" }}
      initial={reduced ? undefined : { [axis === "h" ? "scaleX" : "scaleY"]: 0 }}
      animate={reduced ? undefined : { [axis === "h" ? "scaleX" : "scaleY"]: 1 }}
      transition={{ duration: reduced ? 0 : 0.7, delay: reduced ? 0 : delay, ease: EASE }}
    />
  );
}

function Tick({ className }: { className: string }) {
  return <span aria-hidden className={`absolute h-2 w-px bg-[var(--mark)] ${className}`} />;
}

/**
 * Easter egg: press "D" (ignored while an input/select/textarea/contentEditable
 * element is focused) to toggle a marked-up engineering "revision" overlay —
 * dimension lines, registration crosses and annotation callouts drawn over the
 * whole page, like a checked print. Draw-in animation is skipped entirely when
 * prefers-reduced-motion is set; the overlay still appears instantly.
 */
export function RevisionOverlay() {
  const [visible, setVisible] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    function handler(e: KeyboardEvent) {
      const t = e.target;
      if (
        t instanceof HTMLInputElement ||
        t instanceof HTMLSelectElement ||
        t instanceof HTMLTextAreaElement ||
        (t instanceof HTMLElement && t.isContentEditable)
      ) {
        return;
      }
      if (e.key === "d" || e.key === "D") setVisible((v) => !v);
    }
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="revision-overlay"
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0 : 0.2 }}
          className="pointer-events-none fixed inset-0 z-40 overflow-hidden"
        >
          <RegistrationMark className="left-3 top-3" />
          <RegistrationMark className="right-3 top-3" />
          <RegistrationMark className="bottom-3 left-3" />
          <RegistrationMark className="bottom-3 right-3" />

          <DimLine axis="h" className="left-[8%] right-[8%] top-[14%]" reduced={reduced} delay={0.05} />
          <Tick className="left-[8%] top-[calc(14%-4px)]" />
          <Tick className="right-[8%] top-[calc(14%-4px)]" />
          <div className="absolute left-1/2 top-[14%] -translate-x-1/2 -translate-y-[calc(100%+6px)] whitespace-nowrap font-data text-[10px] uppercase tracking-[0.14em] text-[var(--mark)]">
            SCALE 1:20
          </div>

          <DimLine axis="h" className="left-[8%] right-[8%] top-[86%]" reduced={reduced} delay={0.15} />
          <Tick className="left-[8%] top-[calc(86%-4px)]" />
          <Tick className="right-[8%] top-[calc(86%-4px)]" />
          <div className="absolute left-1/2 top-[86%] -translate-x-1/2 translate-y-2 whitespace-nowrap font-data text-[10px] uppercase tracking-[0.14em] text-[var(--mark)]">
            TOL. ±0.02 mm
          </div>

          <DimLine axis="v" className="right-[4%] top-[22%] bottom-[22%]" reduced={reduced} delay={0.25} />
          <div className="absolute right-[calc(4%+10px)] top-1/2 -translate-y-1/2 rotate-90 whitespace-nowrap font-data text-[10px] uppercase tracking-[0.14em] text-[var(--mark)]">
            DATUM A
          </div>

          <div className="absolute left-4 top-14 font-data text-[10px] uppercase tracking-[0.14em] text-[var(--mark)]">
            REV. A
          </div>
          <div className="absolute bottom-4 right-4 whitespace-nowrap font-data text-[10px] uppercase tracking-[0.14em] text-[var(--mark)]">
            FOOKE — DATENBLATT — BLATT 1/1
          </div>

          <span
            aria-hidden
            className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--mark)]"
          />
          <span
            aria-hidden
            className="absolute left-1/2 top-1/2 h-px w-3 -translate-x-1/2 -translate-y-1/2 bg-[var(--mark)]"
          />
          <span
            aria-hidden
            className="absolute left-1/2 top-1/2 h-3 w-px -translate-x-1/2 -translate-y-1/2 bg-[var(--mark)]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
