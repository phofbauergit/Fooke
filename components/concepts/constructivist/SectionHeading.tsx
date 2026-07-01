"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MaskLines } from "@/components/shared/motion";
import { useReducedMotion } from "@/lib/motion";

/**
 * The repeating constructivist section header: a rule-bordered row with the
 * section title (revealed line-by-line behind a mask via MaskLines) and an
 * oversized, faint index numeral ("02"…"06") that scales/fades in with a
 * slight parallax as the row scrolls through the viewport.
 *
 * Heading stays a single semantic <h2>; MaskLines renders spans (phrasing
 * content) so the markup inside the heading stays valid.
 */
export function SectionHeading({ index, title }: { index: string; title: string }) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduced ? ["0%", "0%"] : ["14%", "-14%"]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.45, 0.55, 1],
    reduced ? [1, 1, 1, 1] : [0.82, 1, 1, 0.82],
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.35, 0.65, 1],
    reduced ? [1, 1, 1, 1] : [0, 1, 1, 0],
  );

  return (
    <div className="flex items-baseline justify-between gap-6 border-b border-[var(--ink2)] pb-4">
      <h2 className="font-display text-[clamp(2rem,6vw,4rem)] font-black uppercase leading-none tracking-tight text-[var(--ink2)]">
        <MaskLines lines={[title]} inView />
      </h2>
      <motion.span
        ref={ref}
        aria-hidden
        style={{ y, scale, opacity }}
        className="font-display hidden text-[clamp(2rem,6vw,4rem)] font-black leading-none text-[var(--ink2)]/15 sm:block"
      >
        {index}
      </motion.span>
    </div>
  );
}
