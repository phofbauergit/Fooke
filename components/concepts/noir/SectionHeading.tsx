interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  index?: string;
}

/**
 * Shared section header: small uppercase eyebrow + oversized condensed
 * title, hairline rule beneath. The oversized index numeral is decorative
 * (aria-hidden) and large enough to satisfy WCAG's 3:1 large-text
 * allowance for --steel-dim; every other text use in this concept sticks
 * to --steel or --warmwhite for guaranteed 4.5:1 contrast.
 */
export function SectionHeading({ eyebrow, title, index }: SectionHeadingProps) {
  return (
    <div className="mb-10 flex items-end justify-between gap-6 border-b border-[var(--graphite-line)] pb-6 md:mb-16 md:pb-8">
      <div>
        <p className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-[var(--steel)]">
          {eyebrow}
        </p>
        <h2
          className="font-display font-bold uppercase text-[var(--warmwhite)]"
          style={{
            fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </h2>
      </div>
      {index && (
        <span
          aria-hidden
          className="hidden shrink-0 font-display font-bold text-[var(--steel-dim)] sm:block"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1 }}
        >
          {index}
        </span>
      )}
    </div>
  );
}
