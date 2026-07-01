"use client";

import { benefits, company, contact } from "@/lib/content";
import { Reveal, SectionKicker } from "./primitives";

export function Contact() {
  return (
    <section id="contact" className="border-t border-[var(--rule)] pb-28">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <SectionKicker index="06" label="Kontakt" />
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.02em] text-[var(--ink)] sm:text-5xl">
            Anfrage stellen
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-12 border-t border-[var(--ink)] pt-10 sm:grid-cols-2 sm:gap-16">
          <Reveal>
            <dl className="space-y-4 font-data text-sm">
              <div>
                <dt className="text-[11px] uppercase tracking-[0.1em] text-[var(--ink-faint)]">Telefon</dt>
                <dd className="mt-1">
                  <a
                    href={`tel:${contact.phone}`}
                    className="text-[var(--ink)] underline decoration-[var(--rule)] underline-offset-4 transition-colors duration-200 hover:text-[var(--mark)] hover:decoration-[var(--mark)] focus-visible:text-[var(--mark)]"
                  >
                    {contact.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.1em] text-[var(--ink-faint)]">E-Mail</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-[var(--ink)] underline decoration-[var(--rule)] underline-offset-4 transition-colors duration-200 hover:text-[var(--mark)] hover:decoration-[var(--mark)] focus-visible:text-[var(--mark)]"
                  >
                    {contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.1em] text-[var(--ink-faint)]">Adresse</dt>
                <dd className="mt-1 text-[var(--ink-soft)]">
                  {contact.address}
                  <br />
                  {contact.city}
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="font-data text-[11px] uppercase tracking-[0.1em] text-[var(--ink-faint)]">
              Vorteile
            </p>
            <ul className="mt-3 space-y-2">
              {benefits.map((b) => (
                <li key={b} className="flex gap-2 font-data text-sm text-[var(--ink-soft)]">
                  <span aria-hidden className="text-[var(--mark)]">
                    →
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mt-14 border-t border-[var(--rule)] pt-6 font-data text-[11px] uppercase tracking-[0.1em] text-[var(--ink-faint)]">
          {company.name} GmbH — {company.location} — Rev. A
        </div>
      </div>
    </section>
  );
}
