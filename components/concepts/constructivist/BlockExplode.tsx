"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/lib/motion";

export interface BlockExplodeController {
  /** Increments on every trigger; pass as `runId` to <ExplodingBlock> to replay. */
  runId: number;
  /** True for ~one reduced-motion "flash" cycle — use for an instant, non-animated cue. */
  flash: boolean;
  trigger: () => void;
  reducedMotion: boolean;
}

/**
 * Drives the hero easter egg: a one-shot "block explode/reassemble" — clicking
 * the trigger nudges the poster's blocks outward with a slight rotation, then
 * they snap back. Reduced-motion users get a brief colour flash instead of
 * translate/rotate motion, so the click still has a felt response.
 */
export function useBlockExplode(): BlockExplodeController {
  const reducedMotion = useReducedMotion();
  const [runId, setRunId] = useState(0);
  const [flash, setFlash] = useState(false);

  const trigger = useCallback(() => {
    if (reducedMotion) {
      setFlash(true);
      window.setTimeout(() => setFlash(false), 240);
      return;
    }
    setRunId((n) => n + 1);
  }, [reducedMotion]);

  return { runId, flash, trigger, reducedMotion };
}

interface ExplodingBlockProps {
  runId: number;
  /** Outward translate on the X axis, e.g. "16px" or "-20px". */
  ex?: string;
  /** Outward translate on the Y axis. */
  ey?: string;
  /** Rotation applied mid-explosion. */
  er?: string;
  duration?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

/**
 * Wraps a single geometric block so it can take part in the block-explode
 * easter egg. Restarts the `@keyframes block-explode` CSS animation (from
 * app/globals.css) on every `runId` bump via a forced-reflow ref trick —
 * deliberately NOT a remount-by-key, so focus on interactive children
 * (e.g. the hero numeral <button>) survives the one-shot replay.
 */
export function ExplodingBlock({
  runId,
  ex = "14px",
  ey = "-10px",
  er = "2deg",
  duration = "640ms",
  className = "",
  style,
  children,
}: ExplodingBlockProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || runId === 0) return;
    el.style.animation = "none";
    void el.offsetWidth; // force reflow so the animation restarts every click
    el.style.animation = `block-explode ${duration} cubic-bezier(0.22, 0.8, 0.24, 1) 1`;
  }, [runId, duration]);

  return (
    <div
      ref={ref}
      style={
        {
          ...style,
          "--ex": ex,
          "--ey": ey,
          "--er": er,
        } as React.CSSProperties
      }
      className={className}
    >
      {children}
    </div>
  );
}
