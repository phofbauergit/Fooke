"use client";

import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}
function getClientSnapshot() {
  return true;
}
function getServerSnapshot() {
  return false;
}

/**
 * True once the component has hydrated on the client. Use to gate reads of
 * browser-only state (localStorage, URL params) without a hydration mismatch.
 */
export function useHasMounted(): boolean {
  return useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
}
