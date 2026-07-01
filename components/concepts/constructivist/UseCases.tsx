import { useCases } from "@/lib/content";

export function UseCases() {
  const [lead, ...rest] = useCases;

  return (
    <section
      id="anwendungen"
      className="relative overflow-x-hidden px-4 pt-24 sm:px-6 lg:px-10 lg:pt-32"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="flex items-baseline justify-between gap-6 border-b border-[var(--ink2)] pb-4">
          <h2 className="font-display text-[clamp(2rem,6vw,4rem)] font-black uppercase leading-none tracking-tight text-[var(--ink2)]">
            Anwendungsfälle
          </h2>
          <span className="font-display hidden text-[clamp(2rem,6vw,4rem)] font-black leading-none text-[var(--ink2)]/15 sm:block">
            04
          </span>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Lead use case — the signature moment: metric as a huge poster
              numeral bleeding off the ultramarine block's right edge. */}
          <article className="relative overflow-hidden border border-[var(--ink2)] bg-[var(--ultramarine)] lg:col-span-7">
            <div className="relative flex flex-col justify-between gap-6 p-6 sm:p-10 lg:min-h-[420px] lg:flex-row">
              <div className="flex flex-col justify-between">
                <div>
                  <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-[var(--ultramarine-ink)]/70">
                    {lead.industry}
                  </p>
                  <h3 className="font-display mt-2 max-w-sm text-2xl font-bold leading-tight text-[var(--ultramarine-ink)] sm:text-3xl">
                    {lead.title}
                  </h3>
                </div>
                <p className="font-body mt-6 max-w-sm text-sm leading-relaxed text-[var(--ultramarine-ink)]/85 lg:mt-0">
                  {lead.description}
                </p>
              </div>

              <div className="relative shrink-0 self-end lg:self-end lg:pr-4">
                <span className="font-display block text-right text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--ultramarine-ink)]/70">
                  {lead.metricLabel}
                </span>
                <span className="font-display -mr-2 block text-[clamp(6rem,17vw,11rem)] font-black leading-[0.85] tracking-tight text-[var(--ultramarine-ink)] sm:-mr-4">
                  {lead.metric}
                </span>
              </div>
            </div>
          </article>

          <div className="flex flex-col gap-3 lg:col-span-5 lg:justify-center">
            {lead.bullets?.map((bullet) => (
              <p
                key={bullet}
                className="font-body border-l-2 border-[var(--ink2)] pl-4 text-sm leading-relaxed text-[var(--ink2)]/80"
              >
                {bullet}
              </p>
            ))}
          </div>

          {/* Remaining use cases — static poster numerals, ink-on-paper, no motion counters */}
          {rest.map((useCase) => (
            <article
              key={useCase.id}
              className="relative overflow-hidden border border-[var(--ink2)] p-6 sm:p-7 lg:col-span-4"
            >
              <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-[var(--ultramarine)]">
                {useCase.industry}
              </p>
              <div className="mt-3 flex items-baseline gap-3">
                <span className="font-display text-[clamp(3rem,8vw,4.5rem)] font-black leading-none tracking-tight text-[var(--ink2)]">
                  {useCase.metric}
                </span>
                <span className="font-body text-[11px] font-bold uppercase leading-tight tracking-[0.14em] text-[var(--ink2)]/60">
                  {useCase.metricLabel}
                </span>
              </div>
              <h3 className="font-display mt-4 text-lg font-bold leading-tight text-[var(--ink2)]">
                {useCase.title}
              </h3>
              <p className="font-body mt-3 text-sm leading-relaxed text-[var(--ink2)]/75">
                {useCase.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
