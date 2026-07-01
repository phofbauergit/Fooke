"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import {
  EASE_OUT,
  fadeUp,
  staggerContainer,
  staggerFast,
  useReducedMotion,
} from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: Variants;
  duration?: number;
  once?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  variant = fadeUp,
  duration = 0.5,
  once = true,
}: RevealProps) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? undefined : "hidden"}
      whileInView={reduced ? undefined : "visible"}
      viewport={{ once, margin: "-8% 0px -8% 0px" }}
      variants={variant}
      transition={{ duration: reduced ? 0 : duration, ease: EASE_OUT, delay: reduced ? 0 : delay }}
    >
      {children}
    </motion.div>
  );
}

export function RevealGroup({
  children,
  className,
  fast = false,
}: {
  children: ReactNode;
  className?: string;
  fast?: boolean;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? undefined : "hidden"}
      whileInView={reduced ? undefined : "visible"}
      viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
      variants={fast ? staggerFast : staggerContainer}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  variant = fadeUp,
}: {
  children: ReactNode;
  className?: string;
  variant?: Variants;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={variant}
      transition={{ duration: reduced ? 0 : 0.4, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}

export function LineReveal({ className }: { className?: string }) {
  const reduced = useReducedMotion();
  return (
    <motion.span
      aria-hidden
      className={`block h-px origin-left bg-current ${className ?? ""}`}
      initial={reduced ? undefined : { scaleX: 0 }}
      whileInView={reduced ? undefined : { scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: reduced ? 0 : 0.7, ease: EASE_OUT }}
    />
  );
}
