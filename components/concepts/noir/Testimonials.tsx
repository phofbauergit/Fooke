"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { images, testimonials } from "@/lib/content";
import { fadeLeft, fadeRight, useReducedMotion } from "@/lib/motion";
import { HazardTag } from "./HazardTag";
import { SectionHeading } from "./SectionHeading";

export function Testimonials() {
  const reduced = useReducedMotion();

  return (
    <section
      id="testimonials"
      className="border-b border-[var(--graphite-line)] bg-[var(--graphite-raised)] px-6 py-20 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading eyebrow="Was Kunden sagen" title="Referenzen" index="04" />

        <div className="relative mb-14 hidden aspect-[21/7] overflow-hidden md:block">
          <Image
            src={images.cfrpCloseup}
            alt="CFK-Bearbeitung im Aerospace-Einsatz — Referenzprojekt"
            fill
            sizes="1400px"
            className="object-cover opacity-40"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[var(--graphite-raised)] via-[var(--graphite-raised)]/60 to-[var(--graphite-raised)]"
          />
        </div>

        <div className="grid grid-cols-1 gap-12 divide-y divide-[var(--graphite-line)] md:grid-cols-2 md:gap-16 md:divide-x md:divide-y-0">
          {testimonials.map((testimonial, i) => (
            <motion.figure
              key={testimonial.id}
              initial={reduced ? undefined : "hidden"}
              whileInView={reduced ? undefined : "visible"}
              viewport={{ once: true, amount: 0.4 }}
              variants={i === 0 ? fadeLeft : fadeRight}
              transition={{ duration: reduced ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="pt-10 first:pt-0 md:pt-0 md:pl-12 md:first:pl-0 lg:pl-16"
            >
              <HazardTag>Referenz</HazardTag>
              <blockquote className="mt-6 font-body text-xl leading-relaxed text-[var(--warmwhite)] md:text-2xl">
                „{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-[var(--graphite-line)] pt-4">
                <p className="font-body text-sm font-semibold text-[var(--warmwhite)]">
                  {testimonial.author}
                </p>
                <p className="mt-1 font-body text-xs font-semibold uppercase tracking-[0.14em] text-[var(--steel)]">
                  {testimonial.company} · {testimonial.sector}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
