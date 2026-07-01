import { useCases } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

export function UseCases() {
  return (
    <section id="usecases" className="border-b border-[var(--graphite-line)] px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading eyebrow="Ergebnisse aus der Praxis" title="Anwendungen" index="03" />

        <div className="divide-y divide-[var(--graphite-line)] border-y border-[var(--graphite-line)]">
          {useCases.map((useCase) => (
            <div key={useCase.id} className="grid grid-cols-1 gap-8 py-10 md:grid-cols-12 md:gap-10 md:py-14">
              <div className="md:col-span-4">
                <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-[var(--steel)]">
                  {useCase.industry}
                </p>
                <p
                  className="mt-2 font-display font-extrabold text-[var(--warmwhite)]"
                  style={{ fontSize: "clamp(2.75rem, 6vw, 5.5rem)", lineHeight: 0.9 }}
                >
                  {useCase.metric}
                </p>
                <span aria-hidden className="mt-3 block h-px w-12 bg-[var(--hazard)]" />
                <p className="mt-2 font-body text-xs font-semibold uppercase tracking-[0.16em] text-[var(--steel)]">
                  {useCase.metricLabel}
                </p>
              </div>

              <div className="md:col-span-8">
                <h3
                  className="font-display font-bold uppercase leading-[1.02] text-[var(--warmwhite)]"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
                >
                  {useCase.title}
                </h3>
                <p className="mt-4 max-w-[65ch] font-body text-sm leading-relaxed text-[var(--steel)] md:text-base">
                  {useCase.description}
                </p>
                {useCase.bullets && (
                  <ul className="mt-6 flex flex-col gap-3">
                    {useCase.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span
                          aria-hidden
                          className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-[var(--hazard)]"
                        />
                        <span className="font-body text-sm text-[var(--warmwhite)] md:text-base">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
