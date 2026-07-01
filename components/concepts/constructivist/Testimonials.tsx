import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section
      id="referenzen"
      className="relative overflow-x-hidden px-4 pt-24 sm:px-6 lg:px-10 lg:pt-32"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="flex items-baseline justify-between gap-6 border-b border-[var(--ink2)] pb-4">
          <h2 className="font-display text-[clamp(2rem,6vw,4rem)] font-black uppercase leading-none tracking-tight text-[var(--ink2)]">
            Referenzen
          </h2>
          <span className="font-display hidden text-[clamp(2rem,6vw,4rem)] font-black leading-none text-[var(--ink2)]/15 sm:block">
            05
          </span>
        </div>

        <div className="mt-2 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-0">
          {testimonials.map((testimonial, i) => (
            <figure
              key={testimonial.id}
              className={`border-b border-[var(--ink2)]/20 py-9 lg:border-b-0 lg:py-12 ${
                i === 0
                  ? "lg:border-r lg:border-[var(--ink2)]/20 lg:pr-10"
                  : "lg:pl-10 lg:pt-24"
              }`}
            >
              <span
                aria-hidden
                className="font-display block text-[clamp(3.5rem,8vw,5.5rem)] font-black leading-none text-[var(--ultramarine)]"
              >
                &bdquo;
              </span>
              <blockquote className="font-body -mt-4 max-w-lg text-lg leading-relaxed text-[var(--ink2)] sm:text-xl">
                {testimonial.quote}
              </blockquote>
              <figcaption className="mt-6 font-body text-xs font-bold uppercase tracking-[0.16em] text-[var(--ink2)]/60">
                {testimonial.author} — {testimonial.company}
                <span className="text-[var(--ink2)]/40"> · {testimonial.sector}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
