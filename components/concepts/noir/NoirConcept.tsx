"use client";

import { useCallback, useState } from "react";
import { ScrollProgress } from "@/components/shared/motion";
import { useKonamiCode } from "@/lib/hooks/useKonamiCode";
import type { ColorMode } from "@/lib/types";
import { Contact } from "./Contact";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { ImageStrip } from "./ImageStrip";
import { Industries } from "./Industries";
import { Products } from "./Products";
import { SecretExhibit } from "./SecretExhibit";
import { Testimonials } from "./Testimonials";
import { UseCases } from "./UseCases";

export function NoirConcept({ palette }: { palette: ColorMode }) {
  const [exhibitOpen, setExhibitOpen] = useState(false);
  const revealExhibit = useCallback(() => setExhibitOpen(true), []);
  useKonamiCode(revealExhibit);

  return (
    <div
      className={`c-noir concept-scroll min-h-screen${palette === "client" ? " palette-client" : ""}`}
    >
      <ScrollProgress color="var(--hazard)" />
      <div className="font-body">
        <Header />
        <main>
          <Hero />
          <ImageStrip />
          <Products />
          <Industries />
          <UseCases />
          <Testimonials />
          <Contact />
        </main>
      </div>
      <SecretExhibit open={exhibitOpen} onClose={() => setExhibitOpen(false)} />
    </div>
  );
}
