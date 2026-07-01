"use client";

import Image from "next/image";
import { images, testimonials } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

export function Testimonials() {
  return (
    <section
      id="referenzen"
      className="relative overflow-x-hidden px-4 pt-24 sm:px-6 lg:px-10 lg:pt-32"
    >
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading index="05" title="Referenzen" />

        <div className="relative mt-8 aspect-[21/7] overflow-hidden border border-[var(--ink2)]">
          <Image
            src={images.machineStudio}
            alt="FOOKE Maschine im Einsatz — Kundenreferenz"
            fill
            sizes="1440px"
            className="object-cover grayscale contrast-125"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-[var(--ultramarine)] mix-blend-multiply opacity-35"
          />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {testimonials.map((testimonial, i) => (
            <figure
              key={testimonial.id}
              className={`py-2 ${
                i === 0 ? "lg:border-r lg:border-[var(--ink2)]/20 lg:pr-10" : "lg:pl-10"
              }`}
            >
              <span
                aria-hidden
                className="font-display block text-[clamp(3rem,7vw,4.5rem)] font-black leading-none text-[var(--ultramarine)]"
              >
                &bdquo;
              </span>
              <blockquote className="font-body mt-3 max-w-lg text-lg leading-relaxed text-[var(--ink2)] sm:text-xl">
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
