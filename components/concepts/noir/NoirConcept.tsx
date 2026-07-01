"use client";

import { useCallback, useState } from "react";
import { useKonamiCode } from "@/lib/hooks/useKonamiCode";
import { Contact } from "./Contact";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Industries } from "./Industries";
import { Products } from "./Products";
import { SecretExhibit } from "./SecretExhibit";
import { Testimonials } from "./Testimonials";
import { UseCases } from "./UseCases";

export function NoirConcept() {
  const [exhibitOpen, setExhibitOpen] = useState(false);
  const revealExhibit = useCallback(() => setExhibitOpen(true), []);
  useKonamiCode(revealExhibit);

  return (
    <div className="c-noir concept-scroll min-h-screen">
      <div className="font-body">
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
      <SecretExhibit open={exhibitOpen} onClose={() => setExhibitOpen(false)} />
    </div>
  );
}
