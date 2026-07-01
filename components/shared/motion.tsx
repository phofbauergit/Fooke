"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { useReducedMotion } from "@/lib/motion";

/* ============================================================ *
 * ClipReveal — image wipes in with a directional clip-path and
 * a slow inner scale. The signature premium image entrance.
 * ============================================================ */
const CLIPS = {
  right: "inset(0 100% 0 0)",
  left: "inset(0 0 0 100%)",
  up: "inset(100% 0 0 0)",
  down: "inset(0 0 100% 0)",
};

export function ClipReveal({
  src,
  alt,
  sizes,
  className = "",
  imgClassName = "",
  direction = "right",
  delay = 0,
  duration = 1,
  priority = false,
  parallax = false,
  fill = false,
  aboveFold = false,
}: {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  imgClassName?: string;
  direction?: keyof typeof CLIPS;
  delay?: number;
  duration?: number;
  priority?: boolean;
  parallax?: boolean;
  fill?: boolean;
  /**
   * For above-the-fold heroes: drive the wipe with `animate` (fires on
   * mount) instead of `whileInView`. `whileInView` with `amount: 0.2`
   * never triggers for tall hero images that are taller than the viewport
   * on load, leaving the image fully clipped (blank). `animate` is
   * viewport-independent so the reveal reliably plays on load.
   */
  aboveFold?: boolean;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], parallax && !reduced ? ["-8%", "8%"] : ["0%", "0%"]);

  const revealTarget = { clipPath: "inset(0% 0% 0% 0%)" };

  return (
    <div ref={ref} className={`${fill ? "absolute inset-0" : "relative"} overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0"
        initial={reduced ? undefined : { clipPath: CLIPS[direction] }}
        animate={reduced ? undefined : aboveFold ? revealTarget : undefined}
        whileInView={reduced ? undefined : aboveFold ? undefined : revealTarget}
        viewport={aboveFold ? undefined : { once: true, amount: 0.2 }}
        transition={{ duration: reduced ? 0 : duration, ease: [0.77, 0, 0.175, 1], delay: reduced ? 0 : delay }}
      >
        <motion.div className="absolute inset-0" style={{ y }}>
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            className={`object-cover ${imgClassName}`}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ============================================================ *
 * MaskLines — headline revealed line-by-line from behind a mask.
 * Pass an array of lines; each slides up from a clip wrapper.
 * ============================================================ */
const lineContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};
const lineItem: Variants = {
  hidden: { y: "110%" },
  visible: { y: "0%", transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

export function MaskLines({
  lines,
  className = "",
  lineClassName = "",
}: {
  lines: string[];
  className?: string;
  lineClassName?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={lineContainer}
      initial={reduced ? undefined : "hidden"}
      animate={reduced ? undefined : "visible"}
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span variants={lineItem} className={`block ${lineClassName}`}>
            {line}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
}

/* ============================================================ *
 * Magnetic — wraps a link/button; the element drifts toward the
 * cursor on hover. Disabled under reduced-motion / touch.
 * ============================================================ */
export function Magnetic({
  children,
  className = "",
  strength = 0.35,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);

  function onMove(e: React.MouseEvent) {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) * strength;
    const y = (e.clientY - (rect.top + rect.height / 2)) * strength;
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  }
  function onLeave() {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0,0)";
  }

  return (
    <a
      ref={ref}
      className={`inline-block transition-transform duration-300 ease-out ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </a>
  );
}

/* ============================================================ *
 * ScrollProgress — thin top bar tracking page scroll, themed
 * by the active concept's accent via --focus-ring.
 * ============================================================ */
export function ScrollProgress({ color = "var(--focus-ring)" }: { color?: string }) {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  if (reduced) return null;
  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left"
      style={{ scaleX, backgroundColor: color }}
    />
  );
}

/* ============================================================ *
 * HoverScale — subtle image zoom on group hover, reduced-motion safe.
 * ============================================================ */
export function HoverScale({
  children,
  className = "",
  scale = 1.06,
}: {
  children: ReactNode;
  className?: string;
  scale?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      whileHover={reduced ? undefined : { scale }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
