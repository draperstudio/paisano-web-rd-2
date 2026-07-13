"use client"

/* Review chrome, not a brand expression: a quiet fixed bar so reviewers
   can get back to the index from any expression route, and — on
   expressions with multiple variations — jump directly between vars
   without going back out. Hidden on the index itself. Deliberately set
   in the plain sans so it never reads as part of the work being judged. */

import Link from "next/link"
import { usePathname } from "next/navigation"

/* Variant counts per expression route segment. Kept here (review chrome
   config) so adding a var means bumping one number. */
const VARIANTS: Record<string, number> = {
  e02: 6,
  e03: 4,
  e04: 1,
  e05: 5,
  e06: 3,
  e08: 4,
  e09: 3,
  e11: 2,
  e14: 4,
  e17: 4,
  e18: 3,
  e19: 4,
  e20: 3,
  e21: 3,
  e22: 3,
  e23: 3,
}

export function IndexReturn() {
  const pathname = usePathname()
  if (pathname === "/") return null

  const match = pathname.match(/^\/(e\d+)\/var-(\d+)$/)
  const slug = match?.[1]
  const current = match ? Number(match[2]) : 0
  const count = slug ? (VARIANTS[slug] ?? 0) : 0

  return (
    <div className="fixed bottom-4 left-4 z-[100] flex items-center gap-2">
      <Link
        href="/"
        className="rounded-full border border-ink/20 bg-cream/90 px-4 py-2 font-sans text-[11px] uppercase tracking-[0.2em] text-ink/70 shadow-sm backdrop-blur-sm transition-colors hover:bg-cream hover:text-ink"
      >
        {"\u2190 Index"}
      </Link>

      {count > 1 && slug && (
        <nav
          aria-label="Switch variation"
          className="flex items-center gap-1 rounded-full border border-ink/20 bg-cream/90 px-2 py-1 shadow-sm backdrop-blur-sm"
        >
          {Array.from({ length: count }, (_, i) => {
            const n = i + 1
            const active = n === current
            return (
              <Link
                key={n}
                href={`/${slug}/var-${n}`}
                aria-current={active ? "page" : undefined}
                className={`flex h-6 w-6 items-center justify-center rounded-full font-sans text-[11px] transition-colors ${
                  active
                    ? "bg-ink text-cream"
                    : "text-ink/60 hover:bg-ink/10 hover:text-ink"
                }`}
              >
                {n}
              </Link>
            )
          })}
        </nav>
      )}
    </div>
  )
}
