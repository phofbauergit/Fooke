"use client";

import { images, testimonials } from "@/lib/content";
import { Figure, Reveal, RevealGroup, RevealItem, SectionKicker, SectionTitle } from "./primitives";

export function Testimonials() {
  return (
    <section id="testimonials" className="border-t border-[var(--rule)]">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <SectionKicker index="05" label="Stimmen" />
          <SectionTitle>Aus der Praxis</SectionTitle>
        </Reveal>

        <Reveal className="mt-10">
          <Figure
            src={images.fswStudio}
            alt="Rührreibschweißanlage — Referenzprojekt mit TU Darmstadt und AIRBUS"
            caption="FIG. 03 — FSW-Referenz, Aerospace-Partnerschaft."
            aspect="aspect-[21/8]"
            sizes="(min-width: 1024px) 1152px, 90vw"
          />
        </Reveal>

        <RevealGroup className="mt-10 grid gap-10 border-t border-[var(--mark)] pt-10 sm:grid-cols-2 sm:gap-12">
          {testimonials.map((t) => (
            <RevealItem key={t.id} className="border-t border-[var(--rule)] pt-6">
              <figure>
                <blockquote className="font-quote text-xl italic leading-snug text-[var(--ink)] sm:text-2xl">
                  „{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 font-data text-xs uppercase tracking-[0.1em] text-[var(--ink-soft)]">
                  {t.author} — {t.company}
                  <span className="text-[var(--ink-faint)]"> / {t.sector}</span>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
