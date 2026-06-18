"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { scrollToHash } from "@/shared/scroll-link";

export function HashScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    const frame = requestAnimationFrame(() => scrollToHash(hash));
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
