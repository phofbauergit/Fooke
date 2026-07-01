"use client";

import { motion } from "framer-motion";
import { company, images } from "@/lib/content";
import { Reveal } from "@/components/shared/Reveal";
import { ClipReveal } from "@/components/shared/motion";
import { useReducedMotion } from "@/lib/motion";
import { ExplodingBlock, useBlockExplode } from "./BlockExplode";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

function MaskLine({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const reduced = useReducedMotion();
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={reduced ? undefined : { y: "110%" }}
        animate={reduced ? undefined : { y: "0%" }}
        transition={{ duration: 0.9, ease: EASE, delay: reduced ? 0 : delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Hero() {
  const { runId, flash, trigger, reducedMotion } = useBlockExplode();

  return (
    <section
      id="hero"
      className="relative overflow-x-hidden px-4 pt-14 sm:px-6 lg:px-10 lg:pt-20"
    >
      <div className="relative mx-auto max-w-[1440px]">
        <motion.p
          className="font-body text-xs font-bold uppercase tracking-[0.24em] text-[var(--ink2)]/60"
          initial={reducedMotion ? undefined : { opacity: 0, y: 8 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          {company.madeIn} — Seit {company.since} — Borken, NRW
        </motion.p>

        <h1 className="font-display mt-4 text-[clamp(3rem,11.5vw,9rem)] font-black uppercase leading-[0.9] tracking-tight text-[var(--ink2)]">
          <MaskLine delay={0.08}>{company.headline}</MaskLine>
          <span className="block text-[var(--ultramarine)]">
            <MaskLine delay={0.2}>{company.subheadline}</MaskLine>
          </span>
        </h1>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start lg:gap-10">
          <Reveal className="relative z-10 lg:col-span-7 lg:rotate-[-1deg]" delay={0.1}>
            <ExplodingBlock
              runId={runId}
              ex="-18px"
              ey="10px"
              er="-2.5deg"
              className="border border-[var(--ink2)] bg-[var(--ultramarine)] p-6 sm:p-8"
            >
              <p className="font-body text-lg leading-relaxed text-[var(--ultramarine-ink)] sm:text-xl">
                {company.intro}
              </p>
              <p className="mt-6 border-t border-[var(--ultramarine-ink)]/25 pt-4 font-body text-xs font-bold uppercase tracking-[0.2em] text-[var(--ultramarine-ink)]/80">
                {company.tagline} · {company.location}
              </p>
            </ExplodingBlock>
          </Reveal>

          <Reveal className="relative z-20 lg:col-span-5 lg:-mt-6 lg:rotate-[1.5deg]" delay={0.2}>
            <ExplodingBlock
              runId={runId}
              ex="20px"
              ey="-14px"
              er="3deg"
              className="border border-[var(--ink2)] bg-[var(--paper2)]"
            >
              <button
                type="button"
                onClick={trigger}
                aria-label={`Gründungsjahr ${company.since} — Klicken für eine kurze Explosionsanimation der Bausteine`}
                /* Local --focus-ring override: focus/hover fill this button
                   ink2, where the default ultramarine ring would read too
                   dark — swap to paper2 so the ring stays visible. */
                style={{ ["--focus-ring" as string]: "var(--paper2)" }}
                className="group block w-full cursor-pointer px-5 py-4 text-left transition-colors duration-200 hover:bg-[var(--ink2)] focus-visible:bg-[var(--ink2)] sm:px-7 sm:py-5"
              >
                <span
                  aria-hidden
                  className="font-display block text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--ink2)]/60 transition-colors duration-200 group-hover:text-[var(--paper2)]/60"
                >
                  Gründungsjahr
                </span>
                <span
                  aria-hidden
                  className="font-display -mt-2 block text-[clamp(4.5rem,14vw,8rem)] font-black leading-none tracking-tight text-[var(--ink2)] transition-colors duration-200 group-hover:text-[var(--paper2)]"
                >
                  {company.since}
                </span>
              </button>
            </ExplodingBlock>

            <ExplodingBlock
              runId={runId}
              ex="-10px"
              ey="16px"
              er="-3deg"
              className="relative mt-6 aspect-[4/3] w-full overflow-hidden border border-[var(--ink2)] lg:-ml-8"
            >
              <ClipReveal
                src={images.blueprintMill}
                alt="Portalfräsmaschine im Werk: Blaupausenhafte Ansicht der Fräsanlage mit sichtbarer Portalkonstruktion"
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="absolute inset-0"
                imgClassName="grayscale contrast-125"
                direction="up"
                duration={1.2}
                delay={0.5}
                priority
                parallax
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[var(--ultramarine)] mix-blend-multiply"
                style={{ opacity: 0.55 }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[var(--ink2)] mix-blend-multiply"
                style={{ opacity: 0.15 }}
              />
              <span className="absolute bottom-2 left-2 z-10 bg-[var(--ink2)] px-1.5 py-0.5 font-body text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--paper2)]">
                Fig. 01 — Fertigung
              </span>
            </ExplodingBlock>
          </Reveal>
        </div>

        <div
          aria-hidden
          className={`pointer-events-none absolute inset-0 z-30 bg-[var(--ultramarine)] transition-opacity duration-150 ${
            flash ? "opacity-20" : "opacity-0"
          }`}
        />

        {!reducedMotion && (
          <p className="sr-only" role="status">
            {runId > 0 ? "Bausteine neu zusammengesetzt." : ""}
          </p>
        )}
      </div>
    </section>
  );
}
