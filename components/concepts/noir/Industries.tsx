import { industries, productFinderCategories } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

export function Industries() {
  return (
    <section
      id="industries"
      className="border-b border-[var(--graphite-line)] bg-[var(--graphite-raised)] px-6 py-20 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading eyebrow="Einsatzgebiete" title="Branchen" index="02" />

        <nav
          aria-label="Branchen-Kurzwahl"
          className="mb-10 flex flex-wrap items-center gap-3 md:mb-14"
        >
          <span className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-[var(--steel)]">
            Direkt zu
          </span>
          {productFinderCategories.business.map((chip) => {
            const match = industries.find((industry) => industry.name === chip);
            const href = match ? `#industry-${match.id}` : "#industries";
            return (
              <a
                key={chip}
                href={href}
                className="border border-[var(--graphite-line)] px-2.5 py-1 font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--steel)] transition-colors duration-200 hover:border-[var(--hazard)] hover:text-[var(--warmwhite)]"
              >
                {chip}
              </a>
            );
          })}
        </nav>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-[var(--graphite-line)] bg-[var(--graphite-line)] sm:grid-cols-2">
          {industries.map((industry, i) => (
            <div
              key={industry.id}
              id={`industry-${industry.id}`}
              className="bg-[var(--graphite-raised)] p-8 md:p-10"
            >
              <span
                aria-hidden
                className="font-display font-bold text-[var(--steel-dim)]"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", lineHeight: 1 }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3
                className="mt-2 font-display font-bold uppercase leading-[0.98] text-[var(--warmwhite)]"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
              >
                {industry.name}
              </h3>
              <p className="mt-4 max-w-[42ch] font-body text-sm leading-relaxed text-[var(--steel)] md:text-base">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
