import { benefits, contact } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  return (
    <section
      id="kontakt"
      className="relative overflow-x-hidden px-4 pt-24 pb-28 sm:px-6 lg:px-10 lg:pt-32 lg:pb-32"
    >
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading index="06" title="Kontakt" />

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-10">
          <ul className="flex flex-col gap-4 lg:col-span-5">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="font-body flex gap-3 border-b border-[var(--ink2)]/15 pb-4 text-base leading-snug text-[var(--ink2)]"
              >
                <span aria-hidden className="text-[var(--ultramarine)]">
                  —
                </span>
                {benefit}
              </li>
            ))}
          </ul>

          <div
            className="relative overflow-hidden border border-[var(--ink2)] bg-[var(--ultramarine)] p-7 sm:p-10 lg:col-span-7 lg:-mt-3 lg:rotate-[-0.6deg] lg:p-12"
            style={{ ["--focus-ring" as string]: "var(--ultramarine-ink)" }}
          >
            <p className="font-body text-xs font-bold uppercase tracking-[0.24em] text-[var(--ultramarine-ink)]/70">
              Sprechen Sie mit uns
            </p>

            <a
              href={`tel:${contact.phone}`}
              className="font-display group mt-4 block w-fit text-[clamp(2.2rem,7vw,4rem)] font-black leading-none tracking-tight text-[var(--ultramarine-ink)] no-underline"
            >
              <span className="border-b-2 border-transparent transition-colors duration-200 group-hover:border-[var(--ultramarine-ink)] group-focus-visible:border-[var(--ultramarine-ink)]">
                {contact.phoneDisplay}
              </span>
            </a>

            <a
              href={`mailto:${contact.email}`}
              className="font-body group mt-4 block w-fit text-lg font-semibold text-[var(--ultramarine-ink)] no-underline sm:text-xl"
            >
              <span className="border-b border-transparent transition-colors duration-200 group-hover:border-[var(--ultramarine-ink)] group-focus-visible:border-[var(--ultramarine-ink)]">
                {contact.email}
              </span>
            </a>

            <p className="font-body mt-8 border-t border-[var(--ultramarine-ink)]/25 pt-6 text-sm leading-relaxed text-[var(--ultramarine-ink)]/80">
              {contact.address}
              <br />
              {contact.city}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
