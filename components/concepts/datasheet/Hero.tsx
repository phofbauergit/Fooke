"use client";

import { company, images } from "@/lib/content";
import { ArrowLink, Figure, Reveal } from "./primitives";

export function Hero() {
  return (
    <section id="hero" className="mx-auto max-w-6xl px-5 pb-16 pt-12 sm:px-8 sm:pb-24 sm:pt-16">
      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <Reveal>
          <p className="font-data text-xs uppercase tracking-[0.16em] text-[var(--ink-soft)]">
            {company.name} — {company.tagline} — {company.location}
          </p>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-[0.98] tracking-[-0.03em] text-[var(--ink)] sm:text-6xl lg:text-7xl">
            {company.headline}
            <br />
            {company.subheadline}
          </h1>
          <p className="mt-6 max-w-[62ch] font-data text-base leading-relaxed text-[var(--ink-soft)] sm:text-[17px]">
            {company.intro}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="border border-[var(--rule)] px-2.5 py-1 font-data text-[11px] uppercase tracking-wide text-[var(--ink-soft)]">
              {company.madeIn}
            </span>
            <span className="border border-[var(--rule)] px-2.5 py-1 font-data text-[11px] uppercase tracking-wide text-[var(--ink-soft)]">
              Seit {company.since}
            </span>
            <span className="border border-[var(--rule)] px-2.5 py-1 font-data text-[11px] uppercase tracking-wide text-[var(--ink-soft)]">
              {company.location}
            </span>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            <ArrowLink href="#spec-sheet">Zum Datenblatt</ArrowLink>
            <ArrowLink href="#contact">Kontakt aufnehmen</ArrowLink>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Figure
            src={images.machineStudio}
            alt="FOOKE 5-Achs Portalfräsmaschine, Studioaufnahme in weißer Umgebung"
            caption="FIG. 00 — 5-Achs Portalfräsmaschine, Studioaufnahme."
            preload
          />
          <ul className="mt-4 border-t border-[var(--rule)] pt-4 font-data text-xs text-[var(--ink-soft)]">
            {company.heroSlides.map((slide, i) => (
              <li
                key={slide.title}
                className="flex gap-3 border-b border-[var(--rule)] py-2 last:border-b-0"
              >
                <span className="text-[var(--ink-faint)]">{String(i + 1).padStart(2, "0")}</span>
                <span>{slide.title}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
