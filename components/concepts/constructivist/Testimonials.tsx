"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  type MotionValue,
} from "framer-motion";
import { images, testimonials } from "@/lib/content";
import { useReducedMotion } from "@/lib/motion";
import { SectionHeading } from "./SectionHeading";
import type { Testimonial } from "@/lib/types";

/* ------------------------------------------------------------------ *
 * TestimonialSlide — one crossfading quote in the pinned sequence.
 * Pulled into its own component so each slide's useTransform hooks are
 * called at the top level (not inside a .map callback), keeping the
 * rules-of-hooks linter happy and the motion values stable per slide.
 * ------------------------------------------------------------------ */
function TestimonialSlide({
  index,
  total,
  progress,
  testimonial,
}: {
  index: number;
  total: number;
  progress: MotionValue<number>;
  testimonial: Testimonial;
}) {
  const reduced = useReducedMotion();
  const seg = 1 / total;
  const start = index * seg;
  const end = start + seg;
  const fade = Math.min(0.12, seg / 3);

  // Unified 4-point crossfade shape so the single useTransform call is
  // unconditional (first slide is visible at the top, last slide holds).
  const input = [
    Math.max(0, start - fade),
    start,
    Math.min(1, end - fade),
    Math.min(1, end),
  ];
  const output =
    index === 0
      ? [1, 1, 1, 0]
      : index === total - 1
        ? [0, 1, 1, 1]
        : [0, 1, 1, 0];

  const opacity = useTransform(progress, input, output);
  const y = useTransform(progress, [start, end], reduced ? ["0%", "0%"] : ["5%", "-5%"]);

  return (
    <motion.figure
      style={{ opacity, y }}
      className="absolute inset-0 flex flex-col justify-center"
    >
      <span
        aria-hidden
        className="font-display pointer-events-none mb-2 block text-[clamp(5rem,14vw,9rem)] font-black leading-[0.7] text-[var(--ultramarine)]"
      >
        &bdquo;
      </span>
      <blockquote className="font-body max-w-[42rem] text-[clamp(1.25rem,2.6vw,2rem)] leading-snug text-[var(--ink2)]">
        {testimonial.quote}
      </blockquote>
    </motion.figure>
  );
}

export function Testimonials() {
  const reduced = useReducedMotion();
  const total = testimonials.length;
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Drive the left-panel attribution from the scroll position.
  const activeIndex = useTransform(scrollYProgress, [0, 1], [0, total - 1]);
  useMotionValueEvent(activeIndex, "change", (v) =>
    setActive(Math.min(total - 1, Math.max(0, Math.round(v)))),
  );

  // --- Reduced-motion: no pin, no crossfade — all quotes statically. ---
  if (reduced) {
    return (
      <section
        id="referenzen"
        className="relative overflow-x-hidden px-4 pt-24 sm:px-6 lg:px-10 lg:pt-32"
      >
        <div className="mx-auto max-w-[1440px]">
          <SectionHeading index="05" title="Referenzen" />

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {testimonials.map((t) => (
              <figure
                key={t.id}
                className="border-b border-[var(--ink2)]/20 py-9 lg:py-12"
              >
                <span
                  aria-hidden
                  className="font-display block text-[clamp(3.5rem,8vw,5.5rem)] font-black leading-none text-[var(--ultramarine)]"
                >
                  &bdquo;
                </span>
                <blockquote className="font-body -mt-4 max-w-lg text-lg leading-relaxed text-[var(--ink2)] sm:text-xl">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 font-body text-xs font-bold uppercase tracking-[0.16em] text-[var(--ink2)]/60">
                  {t.author} — {t.company}
                  <span className="text-[var(--ink2)]/40"> · {t.sector}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // --- Sticky-scroll pinned sequence. ---
  // overflow-x-clip (not hidden) so the section does NOT become a scroll
  // container — that would break position: sticky on the inner panel.
  return (
    <section
      ref={sectionRef}
      id="referenzen"
      className="relative overflow-x-clip"
    >
      {/* Tall track gives scroll room for the pin (one viewport per slide). */}
      <div style={{ height: `${total * 100}vh` }} className="relative">
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="mx-auto flex h-full max-w-[1440px] flex-col px-4 pt-20 sm:px-6 lg:px-10 lg:pt-24">
            <SectionHeading index="05" title="Referenzen" />

            <div className="mt-8 grid flex-1 grid-cols-1 gap-6 lg:mt-10 lg:grid-cols-12 lg:gap-10">
              {/* Left pinned panel: graphic mark, progress, attribution. */}
              <div className="flex flex-col justify-between lg:col-span-5">
                <div className="relative hidden aspect-[16/7] overflow-hidden border border-[var(--ink2)] lg:block">
                  <Image
                    src={images.machineStudio}
                    alt="FOOKE Maschine im Einsatz — Kundenreferenz"
                    fill
                    sizes="600px"
                    className="object-cover grayscale contrast-125"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-[var(--ultramarine)] mix-blend-multiply opacity-35"
                  />
                </div>

                <div className="mt-6 lg:mt-0">
                  {/* Progress rule — fills with the active testimonial. */}
                  <div className="relative h-[3px] w-full bg-[var(--ink2)]/15">
                    <motion.div
                      className="absolute inset-y-0 left-0 bg-[var(--ultramarine)]"
                      style={{ scaleX: scrollYProgress, transformOrigin: "0% 50%" }}
                    />
                  </div>

                  {/* Active attribution swaps as the reader scrolls. */}
                  <p className="mt-5 font-body text-xs font-bold uppercase tracking-[0.16em] text-[var(--ink2)]/50">
                    {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                  </p>
                  <p className="mt-2 font-display text-2xl font-bold uppercase leading-tight tracking-tight text-[var(--ink2)] sm:text-3xl">
                    {testimonials[active].author}
                  </p>
                  <p className="mt-1 font-body text-sm font-bold uppercase tracking-[0.16em] text-[var(--ultramarine)]">
                    {testimonials[active].company}
                    <span className="text-[var(--ink2)]/40"> · {testimonials[active].sector}</span>
                  </p>
                </div>
              </div>

              {/* Right: crossfading pinned slides. */}
              <div className="relative lg:col-span-7">
                {testimonials.map((t, i) => (
                  <TestimonialSlide
                    key={t.id}
                    index={i}
                    total={total}
                    progress={scrollYProgress}
                    testimonial={t}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
