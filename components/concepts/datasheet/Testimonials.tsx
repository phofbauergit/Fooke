"use client";

import { testimonials } from "@/lib/content";
import { Reveal, RevealGroup, RevealItem, SectionKicker } from "./primitives";

export function Testimonials() {
  return (
    <section id="testimonials" className="border-t border-[var(--rule)]">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <SectionKicker index="05" label="Stimmen" />
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.02em] text-[var(--ink)] sm:text-5xl">
            Aus der Praxis
          </h2>
        </Reveal>

        <RevealGroup className="mt-10 grid gap-10 border-t border-[var(--ink)] pt-10 sm:grid-cols-2 sm:gap-12">
          {testimonials.map((t) => (
            <RevealItem key={t.id} className="border-t border-[var(--rule)] pt-6">
              <figure>
                <blockquote className="font-quote text-xl italic leading-snug text-[var(--ink)] sm:text-2xl">
                  „{t.quote}“
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
