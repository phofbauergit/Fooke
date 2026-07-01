"use client";

import Image from "next/image";
import { images, products } from "@/lib/content";
import { RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { SectionHeading } from "./SectionHeading";

function toId(href: string): string {
  return href.replace(/^#/, "");
}

export function Products() {
  const seenHrefs = new Set<string>();

  return (
    <section
      id="produkte"
      className="relative overflow-x-hidden px-4 pt-24 sm:px-6 lg:px-10 lg:pt-32"
    >
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading index="02" title="Produktprogramm" />

        <RevealGroup>
          <ul>
            {products.map((product, i) => {
              const isFirstOfHref = !seenHrefs.has(product.href);
              if (isFirstOfHref) seenHrefs.add(product.href);

              return (
                <RevealItem key={product.id}>
                  <li
                    id={isFirstOfHref ? toId(product.href) : undefined}
                    className="border-b border-[var(--ink2)]/20"
                  >
                    <a
                      href={product.href}
                      className="group flex flex-col gap-4 py-5 no-underline transition-colors duration-200 hover:bg-[var(--ultramarine)]/5 focus-visible:bg-[var(--ultramarine)]/10 sm:flex-row sm:items-start sm:gap-6"
                    >
                      <span
                        aria-hidden
                        className="font-display shrink-0 text-xl font-bold text-[var(--ink2)]/35 sm:w-16 sm:text-2xl"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      <div className="relative hidden aspect-[4/3] w-28 shrink-0 overflow-hidden border border-[var(--ink2)] transition-transform duration-500 group-hover:scale-105 sm:block">
                        <Image
                          src={images[product.image]}
                          alt={product.imageAlt}
                          fill
                          sizes="112px"
                          className="object-cover"
                        />
                      </div>

                      <span className="flex flex-col sm:w-44 sm:shrink-0">
                        <span className="font-body text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--ultramarine)]">
                          {product.category}
                        </span>
                        <span className="font-display text-xl font-bold leading-tight text-[var(--ink2)] sm:text-2xl">
                          {product.name}
                        </span>
                      </span>

                      <p className="font-body max-w-xl flex-1 text-sm leading-relaxed text-[var(--ink2)]/75">
                        {product.description}
                      </p>

                      <span
                        aria-hidden
                        className="font-body shrink-0 text-xs font-bold uppercase tracking-[0.16em] text-[var(--ink2)] opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 sm:self-start"
                      >
                        Mehr →
                      </span>
                    </a>
                  </li>
                </RevealItem>
              );
            })}
          </ul>
        </RevealGroup>
      </div>
    </section>
  );
}
