import { productFinderCategories, products } from "@/lib/content";
import { HazardTag } from "./HazardTag";
import { SectionHeading } from "./SectionHeading";

export function Products() {
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

        <div className="divide-y divide-[var(--graphite-line)] border-y border-[var(--graphite-line)]">
          {products.map((product) => (
            <a
              key={product.id}
              href={product.href}
              className="group relative grid grid-cols-1 gap-4 py-8 pl-5 transition-colors duration-200 hover:bg-[var(--graphite-raised)] md:grid-cols-12 md:items-center md:gap-6 md:py-9"
            >
              <span
                aria-hidden
                className="absolute left-0 top-0 h-full w-[3px] bg-transparent transition-colors duration-200 group-hover:bg-[var(--hazard)]"
              />
              <div className="md:col-span-3">
                <HazardTag>{product.category}</HazardTag>
              </div>
              <h3
                className="font-display font-bold uppercase leading-[1.02] text-[var(--warmwhite)] md:col-span-4"
                style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.25rem)" }}
              >
                {product.name}
              </h3>
              <p className="font-body text-sm leading-relaxed text-[var(--steel)] md:col-span-4 md:text-base">
                {product.description}
              </p>
              <span
                aria-hidden
                className="hidden font-display text-2xl text-[var(--steel)] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[var(--hazard)] md:col-span-1 md:block md:text-right"
              >
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
