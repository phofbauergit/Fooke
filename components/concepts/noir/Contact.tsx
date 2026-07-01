"use client";

import { motion } from "framer-motion";
import { benefits, company, contact, images } from "@/lib/content";
import { fadeUp, staggerContainer, useReducedMotion } from "@/lib/motion";
import { NoirPhoto } from "./ImageStrip";
import { HazardTag } from "./HazardTag";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const reduced = useReducedMotion();

  return (
    <section id="contact" className="px-6 py-20 pb-28 md:px-10 md:py-28 md:pb-32">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading eyebrow="Direkter Kontakt" title="Kontakt" index="05" />

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
          <motion.div
            initial={reduced ? undefined : "hidden"}
            whileInView={reduced ? undefined : "visible"}
            viewport={{ once: true }}
            variants={staggerContainer}
            className="lg:col-span-6"
          >
            <motion.div variants={fadeUp}>
              <NoirPhoto
                src={images.blueprintMill}
                alt="FOOKE Fertigungshalle in Borken — Portalfräsmaschinen im Einsatz"
                aspect="aspect-[16/10]"
                corners
                label="Werk Borken · NRW"
                className="mb-10"
              />
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-[var(--steel)]"
            >
              Ihre Vorteile
            </motion.p>
            <ul className="mt-6 flex flex-col gap-4">
              {benefits.map((benefit, i) => (
                <motion.li
                  key={benefit}
                  variants={fadeUp}
                  transition={{ delay: reduced ? 0 : i * 0.05 }}
                  className="flex items-start gap-3 border-b border-[var(--graphite-line)] pb-4"
                >
                  <span aria-hidden className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-[var(--hazard)]" />
                  <span className="font-body text-base text-[var(--warmwhite)] md:text-lg">
                    {benefit}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={reduced ? undefined : "hidden"}
            whileInView={reduced ? undefined : "visible"}
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: reduced ? 0 : 0.55, delay: reduced ? 0 : 0.15 }}
            className="lg:col-span-6"
          >
            <div className="border border-[var(--graphite-line)] bg-[var(--graphite-raised)] p-8 md:p-10">
              <HazardTag>Werk Borken</HazardTag>

              <div className="mt-7 flex flex-col gap-6">
                <div>
                  <p className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-[var(--steel)]">
                    Telefon
                  </p>
                  <a
                    href={`tel:${contact.phone}`}
                    className="mt-1 inline-block font-display text-2xl font-semibold text-[var(--warmwhite)] underline decoration-[var(--graphite-line)] decoration-2 underline-offset-4 transition-colors duration-200 hover:decoration-[var(--hazard)] md:text-3xl"
                  >
                    {contact.phoneDisplay}
                  </a>
                </div>

                <div>
                  <p className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-[var(--steel)]">
                    E-Mail
                  </p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="mt-1 inline-block font-display text-2xl font-semibold text-[var(--warmwhite)] underline decoration-[var(--graphite-line)] decoration-2 underline-offset-4 transition-colors duration-200 hover:decoration-[var(--hazard)] md:text-3xl"
                  >
                    {contact.email}
                  </a>
                </div>

                <div>
                  <p className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-[var(--steel)]">
                    Adresse
                  </p>
                  <p className="mt-1 font-body text-base text-[var(--warmwhite)] md:text-lg">
                    {contact.address}
                    <br />
                    {contact.city}
                  </p>
                </div>
              </div>

              <a
                href={`mailto:${contact.email}`}
                className="mt-9 inline-flex w-full items-center justify-center border border-[var(--warmwhite)] px-5 py-3 font-body text-sm font-semibold uppercase tracking-[0.12em] text-[var(--warmwhite)] transition-colors duration-200 hover:border-[var(--hazard)] hover:text-[var(--hazard)] sm:w-auto"
              >
                Anfrage senden
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-[var(--graphite-line)] pt-8 font-body text-xs uppercase tracking-[0.14em] text-[var(--steel)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            {company.name} — {company.madeIn}, seit {company.since}
          </p>
          <p>{contact.city}</p>
        </div>
      </div>
    </section>
  );
}
