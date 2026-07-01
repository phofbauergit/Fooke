"use client";

import Image from "next/image";
import { images, products } from "@/lib/content";
import { Reveal, RevealGroup, RevealItem, SectionKicker } from "./primitives";

export function Products() {
  return (
    <section id="products" className="border-t border-[var(--rule)]">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <SectionKicker index="02" label="Produktprogramm" />
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.02em] text-[var(--ink)] sm:text-5xl">
            Programm
          </h2>
        </Reveal>

        <RevealGroup className="mt-10 border-t border-[var(--ink)]">
          {products.map((p, i) => (
            <RevealItem
              key={p.id}
              className="group grid grid-cols-1 gap-4 border-b border-[var(--rule)] py-5 transition-colors duration-200 hover:bg-[var(--paper-raised)] sm:grid-cols-[64px_120px_1fr_180px] sm:items-center sm:gap-6"
            >
              <span className="font-data text-xs text-[var(--ink-faint)]">
                P.{String(i + 1).padStart(2, "0")}
              </span>
              <div className="relative hidden aspect-square overflow-hidden border border-[var(--rule)] sm:block">
                <Image
                  src={images[p.image]}
                  alt={p.imageAlt}
                  fill
                  sizes="120px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <span>
                <span className="font-display text-lg font-medium text-[var(--ink)]">{p.name}</span>
                <span className="mt-1 block max-w-[60ch] font-data text-sm leading-relaxed text-[var(--ink-soft)]">
                  {p.description}
                </span>
              </span>
              <span className="font-data text-[11px] uppercase tracking-wide text-[var(--ink-soft)] sm:text-right">
                {p.category}
              </span>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
