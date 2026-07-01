"use client";

import { company } from "@/lib/content";

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
    <header className="sticky top-0 z-20 border-b border-[var(--rule)] bg-[var(--paper)]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-4 sm:px-8">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <a href="#hero" className="flex items-baseline gap-3 no-underline">
            <span className="font-display text-xl font-semibold tracking-[-0.02em] text-[var(--ink)]">
              {company.name}
            </span>
            <span className="font-data text-[11px] uppercase tracking-[0.14em] text-[var(--ink-soft)]">
              {company.tagline}
            </span>
          </a>
          <span className="font-data text-[11px] uppercase tracking-[0.14em] text-[var(--ink-soft)]">
            Seit {company.since} · {company.madeIn}
          </span>
        </div>
        <nav aria-label="Hauptnavigation" className="flex flex-wrap gap-x-6 gap-y-2">
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
      </div>
    </header>
  );
}
