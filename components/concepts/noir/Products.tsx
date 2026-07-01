"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { images, productFinderCategories, products } from "@/lib/content";
import { fadeUp, staggerFast, useReducedMotion } from "@/lib/motion";
import { HazardTag } from "./HazardTag";
import { SectionHeading } from "./SectionHeading";

export function Products() {
  const reduced = useReducedMotion();

  return (
    <section id="products" className="border-b border-[var(--graphite-line)] px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading eyebrow="Portfolio" title="Produkte" index="01" />

        <div className="mb-10 flex flex-wrap items-center gap-3 md:mb-14">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-[var(--steel)]">
            Produktbereiche
          </span>
          {productFinderCategories.product.map((category) => (
            <HazardTag key={category}>{category}</HazardTag>
          ))}
        </div>

        <motion.div
          initial={reduced ? undefined : "hidden"}
          whileInView={reduced ? undefined : "visible"}
          viewport={{ once: true, margin: "-5% 0px" }}
          variants={staggerFast}
          className="divide-y divide-[var(--graphite-line)] border-y border-[var(--graphite-line)]"
        >
          {products.map((product) => (
            <motion.a
              key={product.id}
              href={product.href}
              variants={fadeUp}
              transition={{ duration: reduced ? 0 : 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="group relative grid grid-cols-1 gap-4 py-8 pl-5 transition-colors duration-200 hover:bg-[var(--graphite-raised)] md:grid-cols-12 md:items-center md:gap-6 md:py-9"
            >
              <span
                aria-hidden
                className="absolute left-0 top-0 h-full w-[3px] scale-y-0 bg-[var(--hazard)] transition-transform duration-300 group-hover:scale-y-100"
                style={{ transformOrigin: "top" }}
              />
              <div className="relative hidden aspect-[4/3] overflow-hidden md:col-span-2 md:block">
                <Image
                  src={images[product.image]}
                  alt={product.imageAlt}
                  fill
                  sizes="160px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[var(--graphite)]/30 transition-opacity duration-300 group-hover:opacity-0"
                />
              </div>
              <div className="md:col-span-2">
                <HazardTag>{product.category}</HazardTag>
              </div>
              <h3
                className="font-display font-bold uppercase leading-[1.05] text-[var(--warmwhite)] md:col-span-4"
                style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.25rem)" }}
              >
                <span className="break-words hyphens-auto">{product.name}</span>
              </h3>
              <p className="font-body text-sm leading-relaxed text-[var(--steel)] md:col-span-3 md:max-w-[26ch] md:text-base">
                {product.description}
              </p>
              <span
                aria-hidden
                className="hidden font-display text-2xl text-[var(--steel)] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[var(--hazard)] md:col-span-1 md:block md:text-right"
              >
                →
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
