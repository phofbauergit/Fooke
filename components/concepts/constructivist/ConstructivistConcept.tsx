import { ScrollProgress } from "@/components/shared/motion";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Products } from "./Products";
import { Industries } from "./Industries";
import { UseCases } from "./UseCases";
import { Testimonials } from "./Testimonials";
import { Contact } from "./Contact";

/**
 * Concept C — Constructivist: off-white/ink poster system with a single
 * ultramarine accent used only as a few large, deliberate blocks. Oversized
 * Big Shoulders numerals act as graphic/compositional elements throughout
 * (hero year, industry index, use-case metrics), not just headline text.
 */
export function ConstructivistConcept() {
  return (
    <div className="c-constructivist concept-scroll min-h-screen overflow-x-hidden">
      <ScrollProgress color="var(--ultramarine)" />
      <Header />
      <main>
        <Hero />
        <Products />
        <Industries />
        <UseCases />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}
