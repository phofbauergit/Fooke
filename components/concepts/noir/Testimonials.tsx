import { testimonials } from "@/lib/content";
import { HazardTag } from "./HazardTag";
import { SectionHeading } from "./SectionHeading";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="border-b border-[var(--graphite-line)] bg-[var(--graphite-raised)] px-6 py-20 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading eyebrow="Was Kunden sagen" title="Referenzen" index="04" />

        <div className="grid grid-cols-1 gap-12 divide-y divide-[var(--graphite-line)] md:grid-cols-2 md:gap-16 md:divide-x md:divide-y-0">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.id} className="pt-10 first:pt-0 md:pt-0 md:pl-12 md:first:pl-0 lg:pl-16">
              <HazardTag>Referenz</HazardTag>
              <blockquote className="mt-6 font-body text-xl leading-relaxed text-[var(--warmwhite)] md:text-2xl">
                „{testimonial.quote}“
              </blockquote>
              <figcaption className="mt-6 border-t border-[var(--graphite-line)] pt-4">
                <p className="font-body text-sm font-semibold text-[var(--warmwhite)]">
                  {testimonial.author}
                </p>
                <p className="mt-1 font-body text-xs font-semibold uppercase tracking-[0.14em] text-[var(--steel)]">
                  {testimonial.company} · {testimonial.sector}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
