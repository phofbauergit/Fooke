import { industries } from "@/lib/content";

export function Industries() {
  return (
    <section
      id="branchen"
      className="relative overflow-x-hidden px-4 pt-24 sm:px-6 lg:px-10 lg:pt-32"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="flex items-baseline justify-between gap-6 border-b border-[var(--ink2)] pb-4">
          <h2 className="font-display text-[clamp(2rem,6vw,4rem)] font-black uppercase leading-none tracking-tight text-[var(--ink2)]">
            Branchen
          </h2>
          <span className="font-display hidden text-[clamp(2rem,6vw,4rem)] font-black leading-none text-[var(--ink2)]/15 sm:block">
            03
          </span>
        </div>

        <div className="mt-2 grid grid-cols-1 gap-x-10 sm:grid-cols-2">
          {industries.map((industry, i) => (
            <div
              key={industry.id}
              className={`border-b border-[var(--ink2)]/20 py-8 sm:py-10 ${
                i % 2 === 1 ? "sm:pl-10" : "sm:pr-10"
              } ${i >= 2 ? "sm:border-t" : ""} ${
                i % 2 === 1 ? "lg:mt-8" : ""
              }`}
            >
              <span
                aria-hidden
                className="font-display block text-[clamp(3.5rem,9vw,6rem)] font-black leading-none text-[var(--ink2)]/12"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display -mt-4 text-2xl font-bold uppercase tracking-tight text-[var(--ink2)] sm:text-3xl">
                {industry.name}
              </h3>
              <p className="font-body mt-3 max-w-md text-sm leading-relaxed text-[var(--ink2)]/75">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
