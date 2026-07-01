"use client";

import { Reveal } from "@/components/shared/Reveal";

export function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <Reveal>
      <div className="flex items-baseline justify-between gap-6 border-b border-[var(--ink2)] pb-4">
        <h2 className="font-display text-[clamp(2rem,6vw,4rem)] font-black uppercase leading-none tracking-tight text-[var(--ink2)]">
          {title}
        </h2>
        <span
          aria-hidden
          className="font-display hidden text-[clamp(2rem,6vw,4rem)] font-black leading-none text-[var(--ink2)]/15 sm:block"
        >
          {index}
        </span>
      </div>
    </Reveal>
  );
}
