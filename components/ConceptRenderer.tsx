"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { ConceptId } from "@/lib/types";
import { DatasheetConcept } from "./concepts/datasheet/DatasheetConcept";
import { NoirConcept } from "./concepts/noir/NoirConcept";
import { ConstructivistConcept } from "./concepts/constructivist/ConstructivistConcept";
import { useReducedMotion } from "@/lib/motion";

interface ConceptRendererProps {
  active: ConceptId;
}

const CONCEPTS: Record<ConceptId, React.ComponentType> = {
  datasheet: DatasheetConcept,
  noir: NoirConcept,
  constructivist: ConstructivistConcept,
};

export function ConceptRenderer({ active }: ConceptRendererProps) {
  const reduced = useReducedMotion();
  const ActiveConcept = CONCEPTS[active];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={active}
        id={`concept-panel-${active}`}
        role="tabpanel"
        aria-labelledby={`concept-tab-${active}`}
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={reduced ? undefined : { opacity: 0 }}
        transition={{ duration: reduced ? 0 : 0.35, ease: "easeInOut" }}
      >
        <ActiveConcept />
      </motion.div>
    </AnimatePresence>
  );
}
