"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { gallery, images } from "@/lib/content";
import { useReducedMotion } from "@/lib/motion";

/**
 * Continuous film-strip of all gallery images — the noir visual rhythm
 * between hero and content sections.
 */
export function ImageStrip() {
  const reduced = useReducedMotion();
  const slides = [...gallery, ...gallery];

  return (
    <motion.section
      aria-label="Maschinen-Galerie"
      initial={reduced ? undefined : { opacity: 0 }}
      whileInView={reduced ? undefined : { opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: reduced ? 0 : 0.8 }}
      className="relative overflow-hidden border-y border-[var(--graphite-line)] bg-[var(--graphite-raised)]"
    >
      <div
        className={`flex w-max gap-px ${reduced ? "" : "animate-noir-marquee"}`}
        style={{ willChange: reduced ? undefined : "transform" }}
      >
        {slides.map((slide, i) => (
          <figure
            key={`${slide.image}-${i}`}
            className="group relative h-[200px] w-[280px] shrink-0 overflow-hidden sm:h-[240px] sm:w-[340px] md:h-[280px] md:w-[400px]"
          >
            <Image
              src={images[slide.image]}
              alt={slide.alt}
              fill
              sizes="400px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--graphite)] via-transparent to-transparent opacity-80"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-2 p-4">
              <span className="font-body text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--warmwhite)]">
                {slide.label}
              </span>
              <span
                aria-hidden
                className="h-1.5 w-1.5 bg-[var(--hazard)]"
              />
            </figcaption>
          </figure>
        ))}
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[var(--graphite-raised)] to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[var(--graphite-raised)] to-transparent"
      />
    </motion.section>
  );
}

/** Single framed photo with noir treatment — grain overlay, hazard corners optional. */
export function NoirPhoto({
  src,
  alt,
  aspect = "aspect-[4/3]",
  className = "",
  corners = false,
  label,
}: {
  src: string;
  alt: string;
  aspect?: string;
  className?: string;
  corners?: boolean;
  label?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.figure
      className={`relative overflow-hidden ${className}`}
      initial={reduced ? undefined : { opacity: 0, y: 20 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: reduced ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={`relative ${aspect} w-full`}>
        <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--graphite)]/70 via-transparent to-transparent"
        />
        {corners && (
          <>
            <span
              aria-hidden
              className="pointer-events-none absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 border-[var(--hazard)]"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-[var(--hazard)]"
            />
          </>
        )}
      </div>
      {label && (
        <figcaption className="mt-2 font-body text-[10px] uppercase tracking-[0.14em] text-[var(--steel)]">
          {label}
        </figcaption>
      )}
    </motion.figure>
  );
}
