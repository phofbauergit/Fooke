import { company } from "@/lib/content";
import { FookeLogo } from "@/components/shared/FookeLogo";

const NAV_LINKS = [
  { href: "#produkte", label: "Produkte" },
  { href: "#branchen", label: "Branchen" },
  { href: "#anwendungen", label: "Anwendungsfälle" },
  { href: "#referenzen", label: "Referenzen" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Header() {
  return (
    <header className="relative z-30 border-b border-[var(--ink2)]/15 px-4 py-4 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4">
        <a
          href="#hero"
          className="group flex items-center gap-3 font-body no-underline"
        >
          <FookeLogo variant="on-light" />
          <span className="hidden flex-col leading-none sm:flex">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--ultramarine)]">
              Seit {company.since} &middot; {company.madeIn}
            </span>
          </span>
        </a>

        <nav
          aria-label="Hauptnavigation"
          className="hidden items-center gap-7 sm:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 text-xs font-bold uppercase tracking-[0.16em] text-[var(--ink2)]/75 transition-colors duration-200 after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[var(--ultramarine)] after:transition-transform after:duration-200 hover:text-[var(--ink2)] hover:after:scale-x-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#kontakt"
          className="border border-[var(--ink2)] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[var(--ink2)] transition-colors duration-200 hover:bg-[var(--ink2)] hover:text-[var(--paper2)] sm:hidden"
        >
          Kontakt
        </a>
      </div>
    </header>
  );
}
