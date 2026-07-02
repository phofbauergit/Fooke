"use client";

import { motion } from "framer-motion";
import { company, images } from "@/lib/content";
import { useReducedMotion } from "@/lib/motion";
import { ClipReveal } from "@/components/shared/motion";
import { ArrowLink, Reveal } from "./primitives";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

function MaskLine({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const reduced = useReducedMotion();
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={reduced ? undefined : { y: "110%" }}
        animate={reduced ? undefined : { y: "0%" }}
        transition={{ duration: 0.9, ease: EASE, delay: reduced ? 0 : delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section id="hero" className="mx-auto max-w-6xl px-5 pb-16 pt-12 sm:px-8 sm:pb-24 sm:pt-16">
      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <motion.p
            className="font-data text-xs uppercase tracking-[0.16em] text-[var(--mark)]"
            initial={reduced ? undefined : { opacity: 0, y: 8 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            {company.name} — {company.tagline} — {company.location}
          </motion.p>

          <h1 className="mt-4 font-display text-5xl font-semibold leading-[0.98] tracking-[-0.03em] text-[var(--mark)] sm:text-6xl lg:text-7xl">
            <MaskLine delay={0.08}>{company.headline}</MaskLine>
            <MaskLine delay={0.2}>
              <span className="text-[var(--ink)]">{company.subheadline}</span>
            </MaskLine>
          </h1>

          <Reveal delay={0.35}>
            <p className="mt-6 max-w-[62ch] font-data text-base leading-relaxed text-[var(--ink-soft)] sm:text-[17px]">
              {company.intro}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                company.madeIn,
                `Seit ${company.since}`,
                company.location,
              ].map((tag, i) => (
                <motion.span
                  key={tag}
                  className="border border-[var(--mark)]/30 px-2.5 py-1 font-data text-[11px] uppercase tracking-wide text-[var(--mark)]"
                  initial={reduced ? undefined : { opacity: 0, y: 8 }}
                  animate={reduced ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: reduced ? 0 : 0.5 + i * 0.08, ease: EASE }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              <ArrowLink href="#spec-sheet">Zum Datenblatt</ArrowLink>
              <ArrowLink href="#contact">Kontakt aufnehmen</ArrowLink>
            </div>
          </Reveal>
        </div>

        <div>
          <motion.figure
            className="border border-[var(--rule)] bg-[var(--paper-raised)] p-2"
            initial={reduced ? undefined : { opacity: 0 }}
            animate={reduced ? undefined : { opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <ClipReveal
              src={images.machineStudio}
              alt="FOOKE 5-Achs Portalfräsmaschine, Studioaufnahme in weißer Umgebung"
              sizes="(min-width: 1024px) 420px, 90vw"
              className="aspect-[4/5] border border-[var(--rule)]"
              direction="right"
              duration={1.1}
              delay={0.4}
              priority
              parallax
              aboveFold
            />
            <figcaption className="mt-2 px-1 pb-1 font-data text-[11px] leading-snug text-[var(--ink-soft)]">
              FIG. 00 — 5-Achs Portalfräsmaschine, Studioaufnahme.
            </figcaption>
          </motion.figure>

          <motion.ul
            className="mt-4 border-t border-[var(--rule)] pt-4 font-data text-xs text-[var(--ink-soft)]"
            initial={reduced ? undefined : "hidden"}
            whileInView={reduced ? undefined : "visible"}
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.6 } } }}
          >
            {company.heroSlides.map((slide, i) => (
              <motion.li
                key={slide.title}
                className="flex gap-3 border-b border-[var(--rule)] py-2 last:border-b-0"
                variants={{ hidden: { opacity: 0, x: -12 }, visible: { opacity: 1, x: 0 } }}
                transition={{ duration: 0.4, ease: EASE }}
              >
                <span className="font-medium text-[var(--mark)]">{String(i + 1).padStart(2, "0")}</span>
                <span>{slide.title}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
