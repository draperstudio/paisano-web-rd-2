"use client"

/* Review chrome, not a brand expression: a quiet fixed return link so
   reviewers can get back to the index from any expression route.
   Hidden on the index itself. Deliberately set in the plain sans so it
   never reads as part of the work being judged. */

import Link from "next/link"
import { usePathname } from "next/navigation"

export function IndexReturn() {
  const pathname = usePathname()
  if (pathname === "/") return null

  return (
    <Link
      href="/"
      className="fixed bottom-4 left-4 z-[100] rounded-full border border-ink/20 bg-cream/90 px-4 py-2 font-sans text-[11px] uppercase tracking-[0.2em] text-ink/70 shadow-sm backdrop-blur-sm transition-colors hover:bg-cream hover:text-ink"
    >
      {"\u2190 Index"}
    </Link>
  )
}
