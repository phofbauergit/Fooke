"use client";

import { images, industries, productFinderCategories } from "@/lib/content";
import { Figure, Reveal, RevealGroup, RevealItem, SectionKicker, Tag } from "./primitives";

export function Industries() {
  return (
    <section id="industries" className="border-t border-[var(--rule)]">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <SectionKicker index="03" label="Branchen" />
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.02em] text-[var(--ink)] sm:text-5xl">
            Einsatzgebiete
          </h2>
        </Reveal>

        <RevealGroup className="mt-10 border-t border-[var(--ink)]">
          {industries.map((industry, i) => (
            <RevealItem
              key={industry.id}
              className="grid gap-3 border-b border-[var(--rule)] py-6 sm:grid-cols-[140px_1fr] sm:gap-8"
            >
              <span className="font-data text-xs uppercase tracking-[0.12em] text-[var(--ink-faint)]">
                IND.{String(i + 1).padStart(2, "0")}
              </span>
              <span>
                <span className="font-display text-xl font-medium text-[var(--ink)]">
                  {industry.name}
                </span>
                <p className="mt-2 max-w-[62ch] font-data text-sm leading-relaxed text-[var(--ink-soft)]">
                  {industry.description}
                </p>
              </span>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-10 grid gap-6 sm:grid-cols-2">
          <Figure
            src={images.railAssembly}
            alt="Fräsbearbeitung einer Aluminium-Bodenbaugruppe für Schienenfahrzeuge"
            caption="FIG. 01 — Bodenbaugruppe, Rail-Anwendung."
            aspect="aspect-[16/10]"
            sizes="(min-width: 1024px) 400px, 90vw"
          />
          <Figure
            src={images.cfrpCloseup}
            alt="Nahaufnahme einer CFK-Bauteiloberfläche nach der Fräsbearbeitung"
            caption="FIG. 02 — CFK-Außenhaut, Aerospace-Anwendung."
            aspect="aspect-[16/10]"
            sizes="(min-width: 1024px) 400px, 90vw"
          />
        </Reveal>

        <Reveal className="mt-10 border-t border-[var(--rule)] pt-6">
          <p className="font-data text-[11px] uppercase tracking-[0.12em] text-[var(--ink-soft)]">
            Abdeckung
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {[...productFinderCategories.business, ...productFinderCategories.product].map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
