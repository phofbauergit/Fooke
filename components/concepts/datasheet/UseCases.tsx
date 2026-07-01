"use client";

import Image from "next/image";
import { images, useCases } from "@/lib/content";
import { Reveal, RevealGroup, RevealItem, SectionKicker } from "./primitives";

export function UseCases() {
  return (
    <section id="use-cases" className="border-t border-[var(--rule)]">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <SectionKicker index="04" label="Referenzen" />
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.02em] text-[var(--ink)] sm:text-5xl">
            Anwendungsfälle
          </h2>
        </Reveal>

        <RevealGroup className="mt-10 border-t border-[var(--ink)]">
          {useCases.map((uc, i) => (
            <RevealItem
              key={uc.id}
              className="grid gap-6 border-b border-[var(--rule)] py-8 sm:grid-cols-[200px_1fr_220px] sm:items-start"
            >
              <div>
                <p className="font-data text-[11px] uppercase tracking-[0.12em] text-[var(--ink-faint)]">
                  UC.{String(i + 1).padStart(2, "0")} · {uc.industry}
                </p>
                <p className="mt-2 font-data text-4xl font-semibold tracking-[-0.02em] text-[var(--ink)]">
                  {uc.metric}
                </p>
                <p className="mt-1 font-data text-xs uppercase tracking-[0.08em] text-[var(--ink-soft)]">
                  {uc.metricLabel}
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl font-medium text-[var(--ink)]">{uc.title}</h3>
                <p className="mt-2 max-w-[68ch] font-data text-sm leading-relaxed text-[var(--ink-soft)]">
                  {uc.description}
                </p>
                {uc.bullets && (
                  <ul className="mt-4 space-y-1.5">
                    {uc.bullets.map((b) => (
                      <li key={b} className="flex gap-2 font-data text-sm text-[var(--ink-soft)]">
                        <span aria-hidden className="text-[var(--mark)]">
                          →
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="relative aspect-[4/3] overflow-hidden border border-[var(--rule)]">
                <Image
                  src={images[uc.image]}
                  alt={uc.imageAlt}
                  fill
                  sizes="220px"
                  className="object-cover"
                />
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
