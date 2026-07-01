"use client";

import Image from "next/image";
import { images, industries } from "@/lib/content";
import { RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { clipUp } from "@/lib/motion";
import { SectionHeading } from "./SectionHeading";

export function Industries() {
  return (
    <section
      id="branchen"
      className="relative overflow-x-hidden px-4 pt-24 sm:px-6 lg:px-10 lg:pt-32"
    >
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading index="03" title="Branchen" />

        <RevealGroup className="mt-2 grid grid-cols-1 gap-x-10 sm:grid-cols-2">
          {industries.map((industry, i) => (
            <RevealItem
              key={industry.id}
              variant={clipUp}
              className={`border-b border-[var(--ink2)]/20 py-8 sm:py-10 ${
                i % 2 === 1 ? "sm:pl-10" : "sm:pr-10"
              } ${i >= 2 ? "sm:border-t" : ""} ${i % 2 === 1 ? "lg:mt-8" : ""}`}
            >
              <div className="relative mb-6 aspect-[16/9] overflow-hidden border border-[var(--ink2)]">
                <Image
                  src={images[industry.image]}
                  alt={industry.imageAlt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover grayscale contrast-125"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-[var(--ultramarine)] mix-blend-multiply opacity-40"
                />
              </div>
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
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
