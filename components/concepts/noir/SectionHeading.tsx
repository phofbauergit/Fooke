"use client";

import { motion } from "framer-motion";
import { fadeUp, useReducedMotion } from "@/lib/motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  index?: string;
}

export function SectionHeading({ eyebrow, title, index }: SectionHeadingProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={reduced ? undefined : "hidden"}
      whileInView={reduced ? undefined : "visible"}
      viewport={{ once: true, amount: 0.5 }}
      variants={fadeUp}
      transition={{ duration: reduced ? 0 : 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="mb-10 flex items-end justify-between gap-6 border-b border-[var(--graphite-line)] pb-6 md:mb-16 md:pb-8"
    >
      <div>
        <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-[var(--steel)]">
          {eyebrow}
        </p>
        <h2
          className="font-display font-bold uppercase text-[var(--warmwhite)]"
          style={{
            fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </h2>
        <motion.span
          aria-hidden
          className="mt-4 block h-px w-16 origin-left bg-[var(--hazard)]"
          initial={reduced ? undefined : { scaleX: 0 }}
          whileInView={reduced ? undefined : { scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reduced ? 0 : 0.6, delay: reduced ? 0 : 0.2, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
      {index && (
        <span
          aria-hidden
          className="hidden shrink-0 font-display font-bold text-[var(--steel-dim)] sm:block"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1 }}
        >
          {index}
        </span>
      )}
    </motion.div>
  );
}
