"use client";

import { company } from "@/lib/content";
import { FookeLogo } from "@/components/shared/FookeLogo";

const NAV = [
  { href: "#spec-sheet", label: "Datenblatt" },
  { href: "#products", label: "Programm" },
  { href: "#industries", label: "Branchen" },
  { href: "#use-cases", label: "Referenzen" },
  { href: "#testimonials", label: "Stimmen" },
  { href: "#contact", label: "Kontakt" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-[var(--mark)]/20 bg-[var(--paper)]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-5 gap-y-3 px-6 py-4 sm:gap-x-7 lg:gap-x-8">
        <a href="#hero" className="flex shrink-0 items-center gap-3 no-underline">
          <FookeLogo variant="on-light" />
          <span className="font-data text-[11px] uppercase tracking-[0.14em] text-[var(--mark)]">
            {company.tagline}
          </span>
        </a>

        <span aria-hidden className="hidden h-7 w-px shrink-0 bg-[var(--mark)]/20 sm:block" />

        <nav
          aria-label="Hauptnavigation"
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:gap-x-6"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-data text-xs uppercase tracking-[0.1em] text-[var(--ink-soft)] underline decoration-transparent underline-offset-4 transition-colors duration-200 hover:text-[var(--mark)] hover:decoration-[var(--mark)] focus-visible:text-[var(--mark)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <span aria-hidden className="hidden h-7 w-px shrink-0 bg-[var(--mark)]/20 lg:block" />

        <span className="shrink-0 font-data text-[11px] uppercase tracking-[0.14em] text-[var(--ink-soft)]">
          Seit {company.since} · {company.madeIn}
        </span>
      </div>
    </header>
  );
}
