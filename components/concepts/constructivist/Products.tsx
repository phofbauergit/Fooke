"use client";

import Image from "next/image";
import { images, products } from "@/lib/content";
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

        <ul>
          {products.map((product, i) => {
            const isFirstOfHref = !seenHrefs.has(product.href);
            if (isFirstOfHref) seenHrefs.add(product.href);

            return (
              <li
                key={product.id}
                id={isFirstOfHref ? toId(product.href) : undefined}
                className="border-b border-[var(--ink2)]/20"
              >
                <a
                  href={product.href}
                  className="group grid grid-cols-1 gap-4 py-5 no-underline transition-colors duration-200 hover:bg-[var(--ultramarine)]/5 focus-visible:bg-[var(--ultramarine)]/10 sm:grid-cols-[64px_112px_1fr_auto] sm:items-start sm:gap-6"
                >
                  <span
                    aria-hidden
                    className="font-display text-xl font-bold text-[var(--ink2)]/35 sm:text-2xl"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="relative hidden aspect-[4/3] w-full overflow-hidden border border-[var(--ink2)] transition-transform duration-500 group-hover:scale-105 sm:block">
                    <Image
                      src={images[product.image]}
                      alt={product.imageAlt}
                      fill
                      sizes="112px"
                      className="object-cover"
                    />
                  </div>

                  <div className="min-w-0">
                    <span className="font-body text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--ultramarine)]">
                      {product.category}
                    </span>
                    <span className="font-display mt-1 block text-xl font-bold leading-snug text-[var(--ink2)] break-words hyphens-auto sm:text-2xl">
                      {product.name}
                    </span>
                    <p className="font-body mt-3 max-w-prose text-sm leading-relaxed text-[var(--ink2)]/75">
                      {product.description}
                    </p>
                  </div>

                  <span
                    aria-hidden
                    className="font-body hidden text-xs font-bold uppercase tracking-[0.16em] text-[var(--ink2)] opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 sm:block"
                  >
                    Mehr →
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
