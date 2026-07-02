"use client";

import { company, footnotes, specRows } from "@/lib/content";
import { Reveal, SectionKicker, SectionTitle } from "./primitives";

const footnoteNumbers = new Map(footnotes.map((f, i) => [f.id, i + 1]));

function FootnoteRef({ footnoteId }: { footnoteId: string }) {
  const n = footnoteNumbers.get(footnoteId);
  if (!n) return null;
  return (
    <sup className="ml-0.5">
      <a
        href={`#fn-${footnoteId}`}
        className="font-data text-[0.65em] font-semibold text-[var(--mark)] no-underline hover:underline focus-visible:underline"
        aria-label={`Fußnote ${n}`}
      >
        {n}
      </a>
    </sup>
  );
}

export function SpecSheet() {
  return (
    <section id="spec-sheet" className="border-t border-[var(--rule)]">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <SectionKicker index="01" label="Technisches Datenblatt" />
          <SectionTitle>Datenblatt</SectionTitle>
          <p className="mt-4 max-w-[68ch] font-data text-sm leading-relaxed text-[var(--ink-soft)] sm:text-base">
            {company.heritage}
          </p>
        </Reveal>

        <Reveal delay={0.05} className="mt-10">
          <table className="hidden w-full border-collapse font-data text-sm md:table">
            <thead>
              <tr className="border-b border-[var(--mark)] text-left">
                <th className="w-16 py-3 pr-4 text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--mark)]">
                  Code
                </th>
                <th className="py-3 pr-4 text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--mark)]">
                  Parameter
                </th>
                <th className="py-3 text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--mark)]">
                  Wert
                </th>
              </tr>
            </thead>
            <tbody>
              {specRows.map((row) => (
                <tr
                  key={row.code}
                  className="border-b border-[var(--rule)] transition-colors duration-200 hover:bg-[var(--paper-raised)]"
                >
                  <td className="py-3 pr-4 align-top text-[var(--ink-faint)]">{row.code}</td>
                  <td className="py-3 pr-4 align-top text-[var(--ink-soft)]">{row.label}</td>
                  <td className="py-3 align-top font-medium text-[var(--ink)]">
                    {row.value}
                    {row.footnote && <FootnoteRef footnoteId={row.footnote} />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <dl className="divide-y divide-[var(--rule)] md:hidden">
            {specRows.map((row) => (
              <div key={row.code} className="py-4">
                <dt className="font-data text-[11px] uppercase tracking-[0.1em] text-[var(--ink-faint)]">
                  {row.code} · {row.label}
                </dt>
                <dd className="mt-1 font-data text-base font-medium text-[var(--ink)]">
                  {row.value}
                  {row.footnote && <FootnoteRef footnoteId={row.footnote} />}
                </dd>
              </div>
            ))}
          </dl>

          <ol className="mt-8 list-none space-y-2 border-t border-[var(--rule)] pt-6">
            {footnotes.map((f, i) => (
              <li
                key={f.id}
                id={`fn-${f.id}`}
                className="flex gap-3 font-data text-xs leading-relaxed text-[var(--ink-soft)]"
              >
                <span className="text-[var(--mark)]">{i + 1}</span>
                <span>{f.text}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
