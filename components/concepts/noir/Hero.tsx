"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { company, contact, images, machineSpecs } from "@/lib/content";
import { fadeUp, useReducedMotion } from "@/lib/motion";

/**
 * Deliberately asymmetric: headline sits top-left and runs long, the image
 * is anchored bottom-right and pulled up to overlap the headline's row —
 * no centered box, no full-bleed background, no scroll cue.
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
          <motion.div
            initial={reduced ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            transition={{ duration: reduced ? 0 : 0.6, ease: "easeOut" }}
            className="relative z-10 lg:col-span-7"
          >
            <p className="mb-4 flex items-center gap-2.5 font-body text-xs font-semibold uppercase tracking-[0.2em] text-[var(--steel)]">
              <span aria-hidden className="h-px w-8 bg-[var(--hazard)]" />
              {company.madeIn} — {company.location}
            </p>

            <h1
              className="font-display font-extrabold uppercase text-[var(--warmwhite)]"
              style={{
                fontSize: "clamp(3rem, 10vw, 8.5rem)",
                lineHeight: 0.92,
                letterSpacing: "-0.015em",
              }}
            >
              {company.headline}
            </h1>
            <h2
              className="font-display font-semibold uppercase text-[var(--steel)]"
              style={{
                fontSize: "clamp(1.65rem, 5vw, 3.75rem)",
                lineHeight: 0.98,
                letterSpacing: "-0.01em",
              }}
            >
              {company.subheadline}
            </h2>

            <p className="mt-8 max-w-[38ch] font-body text-base leading-relaxed text-[var(--steel)] md:text-lg">
              {company.heritage}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="#products"
                className="group inline-flex items-center gap-2.5 border border-[var(--warmwhite)] px-5 py-3 font-body text-sm font-semibold uppercase tracking-[0.12em] text-[var(--warmwhite)] transition-colors duration-200 hover:border-[var(--hazard)] hover:text-[var(--hazard)]"
              >
                Produkte ansehen
                <span
                  aria-hidden
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
              <a
                href={`tel:${contact.phone}`}
                className="font-body text-sm font-semibold text-[var(--steel)] underline decoration-[var(--graphite-line)] decoration-2 underline-offset-4 transition-colors duration-200 hover:text-[var(--warmwhite)] hover:decoration-[var(--hazard)]"
              >
                {contact.phoneDisplay}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={reduced ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: reduced ? 0 : 0.6, ease: "easeOut", delay: reduced ? 0 : 0.15 }}
            className="relative lg:col-span-5 lg:col-start-8 lg:-mt-8 lg:self-end"
          >
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={images.millDark}
                alt="5-Achs-Portalfräsmaschine im abgedunkelten Technologiezentrum, Nahaufnahme des Fräskopfes"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
                preload
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(22,23,26,0.6), rgba(22,23,26,0) 55%)",
                }}
              />
              <span
                aria-hidden
                className="pointer-events-none absolute -left-3 -top-3 h-8 w-8 border-l-2 border-t-2 border-[var(--hazard)]"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-3 -right-3 h-8 w-8 border-b-2 border-r-2 border-[var(--hazard)]"
              />
            </div>
            <p className="mt-4 font-body text-[11px] uppercase tracking-[0.14em] text-[var(--steel)]">
              Technologiezentrum Borken · 5-Achs-Bearbeitung
            </p>
          </motion.div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-[var(--graphite-line)] py-6 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-8">
          {machineSpecs.map((spec) => (
            <div key={spec.label}>
              <p className="font-body text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--steel)]">
                {spec.label}
              </p>
              <p className="mt-1 font-display text-lg font-semibold text-[var(--warmwhite)] sm:text-xl">
                {spec.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
