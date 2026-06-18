"use client";

import Link from "next/link";
import { type ComponentProps, useCallback } from "react";
import { usePathname } from "next/navigation";

type ScrollLinkProps = ComponentProps<typeof Link>;

export function scrollToHash(hash: string) {
  const id = hash.startsWith("#") ? hash.slice(1) : hash;
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function ScrollLink({ href, onClick, ...props }: ScrollLinkProps) {
  const pathname = usePathname();
  const hrefStr = typeof href === "string" ? href : (href.pathname ?? "");

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      onClick?.(e);
      if (e.defaultPrevented) return;

      const hashIndex = hrefStr.indexOf("#");
      if (hashIndex === -1) return;

      const path = hrefStr.slice(0, hashIndex) || "/";
      const hash = hrefStr.slice(hashIndex + 1);
      if (!hash) return;

      if (pathname !== path) return;

      e.preventDefault();
      scrollToHash(hash);
      window.history.pushState(null, "", `${path}#${hash}`);
    },
    [hrefStr, onClick, pathname]
  );

  return <Link href={href} onClick={handleClick} {...props} />;
}
