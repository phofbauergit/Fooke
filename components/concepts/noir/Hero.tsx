"use client";

import { motion } from "framer-motion";
import { company, contact, images, machineSpecs } from "@/lib/content";
import { useReducedMotion } from "@/lib/motion";
import { ClipReveal, Magnetic } from "@/components/shared/motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

function MaskLine({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduced = useReducedMotion();
  return (
    <span className="block overflow-hidden">
      <motion.span
        className={`block ${className ?? ""}`}
        initial={reduced ? undefined : { y: "110%" }}
        animate={reduced ? undefined : { y: "0%" }}
        transition={{ duration: 0.9, ease: EASE, delay: reduced ? 0 : delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/**
 * Asymmetric noir hero: line-masked headline top-left, clip-revealed
 * image bottom-right with parallax + hazard corner registration marks,
 * magnetic CTA, staggered nameplate spec strip.
 */
export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      id="top"
      className="relative border-b border-[var(--graphite-line)] px-6 pt-12 md:px-10 md:pt-16"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-6">
          <div className="relative z-10 lg:col-span-7">
            <motion.p
              className="mb-4 flex items-center gap-2.5 font-body text-xs font-semibold uppercase tracking-[0.2em] text-[var(--steel)]"
              initial={reduced ? undefined : { opacity: 0, y: 10 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <motion.span
                aria-hidden
                className="block h-px bg-[var(--hazard)]"
                initial={reduced ? undefined : { width: 0 }}
                animate={reduced ? undefined : { width: 32 }}
                transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
              />
              {company.madeIn} — {company.location}
            </motion.p>

            <h1 className="font-display uppercase text-[var(--warmwhite)]">
              <span
                className="block font-extrabold uppercase text-[var(--warmwhite)]"
                style={{ fontSize: "clamp(3rem, 10vw, 8.5rem)", lineHeight: 0.92, letterSpacing: "-0.015em" }}
              >
                <MaskLine delay={0.05}>{company.headline}</MaskLine>
              </span>
              <span
                className="block font-semibold uppercase text-[var(--steel)]"
                style={{ fontSize: "clamp(1.65rem, 5vw, 3.75rem)", lineHeight: 0.98, letterSpacing: "-0.01em" }}
              >
                <MaskLine delay={0.18}>{company.subheadline}</MaskLine>
              </span>
            </h1>

            <motion.p
              className="mt-8 max-w-[38ch] font-body text-base leading-relaxed text-[var(--steel)] md:text-lg"
              initial={reduced ? undefined : { opacity: 0, y: 16 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: reduced ? 0 : 0.5, ease: EASE }}
            >
              {company.heritage}
            </motion.p>

            <motion.div
              className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4"
              initial={reduced ? undefined : { opacity: 0, y: 16 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: reduced ? 0 : 0.65, ease: EASE }}
            >
              <Magnetic strength={0.25}>
                <a
                  href="#products"
                  className="group inline-flex items-center gap-2.5 border border-[var(--warmwhite)] px-5 py-3 font-body text-sm font-semibold uppercase tracking-[0.12em] text-[var(--warmwhite)] transition-colors duration-200 hover:border-[var(--hazard)] hover:text-[var(--hazard)]"
                >
                  Produkte ansehen
                  <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </a>
              </Magnetic>
              <a
                href={`tel:${contact.phone}`}
                className="font-body text-sm font-semibold text-[var(--steel)] underline decoration-[var(--graphite-line)] decoration-2 underline-offset-4 transition-colors duration-200 hover:text-[var(--warmwhite)] hover:decoration-[var(--hazard)]"
              >
                {contact.phoneDisplay}
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={reduced ? undefined : { opacity: 0 }}
            animate={reduced ? undefined : { opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="relative lg:col-span-5 lg:col-start-8 lg:-mt-8 lg:self-end"
          >
            <ClipReveal
              src={images.millDark}
              alt="5-Achs-Portalfräsmaschine im abgedunkelten Technologiezentrum, Nahaufnahme des Fräskopfes"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[4/5] w-full"
              direction="left"
              duration={1.1}
              delay={0.35}
              priority
              parallax
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(22,23,26,0.6), rgba(22,23,26,0) 55%)" }}
            />
            <motion.span
              aria-hidden
              className="pointer-events-none absolute -left-3 -top-3 h-8 w-8 border-l-2 border-t-2 border-[var(--hazard)]"
              initial={reduced ? undefined : { opacity: 0, scale: 0.4 }}
              animate={reduced ? undefined : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.1, ease: EASE }}
            />
            <motion.span
              aria-hidden
              className="pointer-events-none absolute -bottom-3 -right-3 h-8 w-8 border-b-2 border-r-2 border-[var(--hazard)]"
              initial={reduced ? undefined : { opacity: 0, scale: 0.4 }}
              animate={reduced ? undefined : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2, ease: EASE }}
            />
            <motion.p
              className="mt-4 font-body text-[11px] uppercase tracking-[0.14em] text-[var(--steel)]"
              initial={reduced ? undefined : { opacity: 0 }}
              animate={reduced ? undefined : { opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              Technologiezentrum Borken · 5-Achs-Bearbeitung
            </motion.p>
          </motion.div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-[var(--graphite-line)] py-6 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-8">
          {machineSpecs.map((spec, i) => (
            <motion.div
              key={spec.label}
              initial={reduced ? undefined : { opacity: 0, y: 16 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: reduced ? 0 : 0.4, delay: reduced ? 0 : i * 0.06, ease: EASE }}
            >
              <p className="font-body text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--steel)]">
                {spec.label}
              </p>
              <p className="mt-1 font-display text-lg font-semibold text-[var(--warmwhite)] sm:text-xl">
                {spec.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
