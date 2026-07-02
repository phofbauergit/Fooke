import { company } from "@/lib/content";
import { FookeLogo } from "@/components/shared/FookeLogo";

const NAV = [
  { href: "#products", label: "Produkte" },
  { href: "#industries", label: "Branchen" },
  { href: "#usecases", label: "Anwendungen" },
  { href: "#testimonials", label: "Referenzen" },
  { href: "#contact", label: "Kontakt" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--graphite-line)] bg-[var(--graphite)]">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 px-6 py-4 md:px-10">
        <a
          href="#top"
          className="flex items-center no-underline"
        >
          <FookeLogo variant="on-dark" />
        </a>

        <nav aria-label="Hauptnavigation" className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-[var(--steel)] decoration-[var(--hazard)] decoration-2 underline-offset-[6px] transition-colors duration-200 hover:text-[var(--warmwhite)] hover:underline"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <span className="hidden shrink-0 items-center gap-1.5 border border-[var(--graphite-line)] px-2.5 py-1 font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--steel)] lg:inline-flex">
          <span aria-hidden className="h-1.5 w-1.5 bg-[var(--hazard)]" />
          Est. {company.since}
        </span>
      </div>
    </header>
  );
}
