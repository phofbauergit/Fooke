import { ScrollProgress } from "@/components/shared/motion";
import type { ColorMode } from "@/lib/types";
import { Contact } from "./Contact";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Industries } from "./Industries";
import { Products } from "./Products";
import { RevisionOverlay } from "./RevisionOverlay";
import { SpecSheet } from "./SpecSheet";
import { Testimonials } from "./Testimonials";
import { UseCases } from "./UseCases";

export function DatasheetConcept({ palette }: { palette: ColorMode }) {
  return (
    <div
      className={`c-datasheet concept-scroll min-h-screen font-data${palette === "client" ? " palette-client" : ""}`}
    >
      <ScrollProgress color="var(--mark)" />
      <Header />
      <main>
        <Hero />
        <SpecSheet />
        <Products />
        <Industries />
        <UseCases />
        <Testimonials />
        <Contact />
      </main>
      <RevisionOverlay />
    </div>
  );
}
