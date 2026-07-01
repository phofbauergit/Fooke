"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { images, industries, productFinderCategories } from "@/lib/content";
import { fadeUp, staggerContainer, useReducedMotion } from "@/lib/motion";
import { SectionHeading } from "./SectionHeading";

export function Industries() {
  const reduced = useReducedMotion();

  return (
    <section
      id="industries"
      className="border-b border-[var(--graphite-line)] bg-[var(--graphite-raised)] px-6 py-20 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading eyebrow="Einsatzgebiete" title="Branchen" index="02" />

        <nav
          aria-label="Branchen-Kurzwahl"
          className="mb-10 flex flex-wrap items-center gap-3 md:mb-14"
        >
          <span className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-[var(--steel)]">
            Direkt zu
          </span>
          {productFinderCategories.business.map((chip) => {
            const match = industries.find((industry) => industry.name === chip);
            const href = match ? `#industry-${match.id}` : "#industries";
            return (
              <a
                key={chip}
                href={href}
                className="border border-[var(--graphite-line)] px-2.5 py-1 font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--steel)] transition-colors duration-200 hover:border-[var(--hazard)] hover:text-[var(--warmwhite)]"
              >
                {chip}
              </a>
            );
          })}
        </nav>

        <motion.div
          initial={reduced ? undefined : "hidden"}
          whileInView={reduced ? undefined : "visible"}
          viewport={{ once: true, margin: "-5% 0px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-px overflow-hidden border border-[var(--graphite-line)] bg-[var(--graphite-line)] sm:grid-cols-2"
        >
          {industries.map((industry, i) => (
            <motion.div
              key={industry.id}
              id={`industry-${industry.id}`}
              variants={fadeUp}
              transition={{ duration: reduced ? 0 : 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden bg-[var(--graphite-raised)]"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden sm:aspect-[16/10]">
                <Image
                  src={images[industry.image]}
                  alt={industry.imageAlt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--graphite-raised)] via-[var(--graphite-raised)]/40 to-transparent"
                />
                <span
                  aria-hidden
                  className="absolute right-4 top-4 font-display text-5xl font-bold text-[var(--warmwhite)]/20"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="p-8 md:p-10">
                <h3
                  className="font-display font-bold uppercase leading-[0.98] text-[var(--warmwhite)]"
                  style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
                >
                  {industry.name}
                </h3>
                <p className="mt-4 max-w-[42ch] font-body text-sm leading-relaxed text-[var(--steel)] md:text-base">
                  {industry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
