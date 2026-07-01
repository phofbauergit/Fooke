"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, staggerContainer, useReducedMotion } from "@/lib/motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Section eyebrow: "§ 03 —————— Branchen" with a hairline rule filling the gap. */
export function SectionKicker({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-baseline gap-3 font-data text-xs uppercase tracking-[0.14em] text-[var(--ink-soft)]">
      <span className="text-[var(--mark)]">§ {index}</span>
      <span aria-hidden className="h-px flex-1 bg-[var(--rule)]" />
      <span>{label}</span>
    </div>
  );
}

/** Single fade-up reveal, gated by prefers-reduced-motion. */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? undefined : "hidden"}
      whileInView={reduced ? undefined : "visible"}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      variants={fadeUp}
      transition={{ duration: reduced ? 0 : 0.4, ease: EASE, delay: reduced ? 0 : delay }}
    >
      {children}
    </motion.div>
  );
}

/** Staggered container — pair with <RevealItem> children. */
export function RevealGroup({ children, className }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? undefined : "hidden"}
      whileInView={reduced ? undefined : "visible"}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={fadeUp} transition={{ duration: 0.3, ease: EASE }}>
      {children}
    </motion.div>
  );
}

/** Hairline-bordered "tag" chip — never a filled pill. */
export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center border border-[var(--rule)] px-2.5 py-1 font-data text-[11px] uppercase tracking-wide text-[var(--ink-soft)]">
      {children}
    </span>
  );
}

/** Underlined text link with an arrow glyph — the CTA voice of this concept (never a filled button). */
export function ArrowLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="font-data text-sm text-[var(--ink)] underline decoration-[var(--rule)] decoration-1 underline-offset-4 transition-colors duration-200 hover:text-[var(--mark)] hover:decoration-[var(--mark)] focus-visible:text-[var(--mark)]"
    >
      → {children}
    </a>
  );
}

/** Small "figure" frame for photography — bordered box + mono caption, never full-bleed. */
export function Figure({
  src,
  alt,
  caption,
  aspect = "aspect-[4/5]",
  sizes = "(min-width: 1024px) 420px, 90vw",
  preload = false,
}: {
  src: string;
  alt: string;
  caption: string;
  aspect?: string;
  sizes?: string;
  preload?: boolean;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.figure
      className="border border-[var(--rule)] bg-[var(--paper-raised)] p-2"
      initial={reduced ? undefined : { opacity: 0, y: 20 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: reduced ? 0 : 0.55, ease: EASE }}
    >
      <div className={`relative overflow-hidden border border-[var(--rule)] ${aspect}`}>
        <motion.div
          className="relative h-full w-full"
          whileHover={reduced ? undefined : { scale: 1.03 }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" preload={preload} />
        </motion.div>
      </div>
      <figcaption className="mt-2 px-1 pb-1 font-data text-[11px] leading-snug text-[var(--ink-soft)]">
        {caption}
      </figcaption>
    </motion.figure>
  );
}
