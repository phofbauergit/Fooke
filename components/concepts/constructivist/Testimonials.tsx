"use client";

import Image from "next/image";
import { images, testimonials } from "@/lib/content";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { SectionHeading } from "./SectionHeading";

export function Testimonials() {
  return (
    <section
      id="referenzen"
      className="relative overflow-x-hidden px-4 pt-24 sm:px-6 lg:px-10 lg:pt-32"
    >
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading index="05" title="Referenzen" />

        <Reveal className="relative mt-8 aspect-[21/7] overflow-hidden border border-[var(--ink2)]">
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
        </Reveal>

        <RevealGroup className="mt-2 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-0">
          {testimonials.map((testimonial, i) => (
            <RevealItem
              key={testimonial.id}
              className={`border-b border-[var(--ink2)]/20 py-9 lg:border-b-0 lg:py-12 ${
                i === 0
                  ? "lg:border-r lg:border-[var(--ink2)]/20 lg:pr-10"
                  : "lg:pl-10 lg:pt-24"
              }`}
            >
              <figure>
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
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
