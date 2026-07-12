/* 22 FOOTER — the site's sign-off, worked as its own expression.
   Three variations on one truth: the footer is the last thing the hand
   touches, so it behaves like the back page of the folio — settled facts,
   quiet rules, the mark as signature.

   A — Ledger foot: maroon ground, traced mark as signature, facts in
       hairline receipt rows (16's locked register at footer scale).
   B — Colophon foot: cream ground, centered stack in the reading faces,
       edge microtext carrying coordinates (12's real-data rule).
   C — Signature foot: near-empty maroon band, mark alone with one line —
       19's restraint applied to the sign-off.

   Facts pulled from lib/data.ts (single source, 7.12 reconciliation).
   No invented links: nav rows point at the worlds that exist. */

import Link from "next/link"
import { TracedMark } from "./traced-mark"

const FACTS = {
  address: "207 N Highland Ave, Marfa, Texas",
  est: "Est. June 1930",
  checkIn: "Check-in 3:00 PM",
  dogs: "Dogs welcome",
  rooms: "42 rooms across nine classes",
  coords: "N 30.3095 · W 104.0212 · 4,685 FT",
}

const NAV = [
  { label: "World One", href: "/var-1" },
  { label: "World Two", href: "/var-2" },
  { label: "World Three", href: "/var-3" },
]

/* ————— A: Ledger foot ————— */

export function FooterLedger() {
  return (
    <footer className="bg-maroon text-cream" aria-label="Hotel Paisano — footer">
      <div className="mx-auto max-w-4xl px-6 py-14 md:px-10">
        <TracedMark variant="b" className="h-6 text-cream md:h-7" />

        <dl className="mt-10 border-t border-cream/25">
          {[
            ["The house", FACTS.rooms],
            ["Address", FACTS.address],
            ["Arrival", FACTS.checkIn],
            ["Dogs", "Welcome, $40 a night"],
          ].map(([term, detail]) => (
            <div
              key={term}
              className="flex items-baseline justify-between gap-6 border-b border-cream/25 py-3"
            >
              <dt className="font-serif-two text-[11px] uppercase tracking-[0.22em] text-cream/70">
                {term}
              </dt>
              <dd className="text-right font-serif-three text-[14px] text-cream">
                {detail}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 flex flex-wrap items-baseline justify-between gap-4">
          <nav aria-label="Worlds">
            <ul className="flex gap-6">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="font-serif-two text-[11px] uppercase tracking-[0.22em] text-cream/70 transition-colors hover:text-cream"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <p className="font-serif-two text-[10px] uppercase tracking-[0.3em] text-cream/50">
            {FACTS.est}
          </p>
        </div>
      </div>
    </footer>
  )
}

/* ————— B: Colophon foot ————— */

export function FooterColophon() {
  return (
    <footer
      className="relative bg-cream text-ink"
      aria-label="Hotel Paisano — footer"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 py-16 text-center">
        <TracedMark variant="b" className="h-6 text-maroon md:h-7" />
        <p className="max-w-md font-serif-three text-[15px] leading-relaxed text-ink/80 text-pretty">
          The last hotel Charles Trost built, open since June 1930. {FACTS.rooms},
          on the courthouse square in Marfa.
        </p>
        <nav aria-label="Worlds">
          <ul className="flex gap-6">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className="font-serif-two text-[11px] uppercase tracking-[0.22em] text-ink/60 transition-colors hover:text-maroon"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="font-serif-two text-[10px] uppercase tracking-[0.28em] text-ink/50">
          {FACTS.address}
        </p>
      </div>
      {/* Edge microtext: real coordinates, 12's rule — data, not decoration */}
      <p
        className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 font-serif-two text-[9px] uppercase tracking-[0.35em] text-ink/35"
        aria-hidden="true"
      >
        {FACTS.coords}
      </p>
    </footer>
  )
}

/* ————— C: Signature foot ————— */

export function FooterSignature() {
  return (
    <footer
      className="flex min-h-[40vh] flex-col items-center justify-center gap-8 bg-maroon text-cream"
      aria-label="Hotel Paisano — footer"
    >
      <TracedMark variant="b" className="h-8 text-cream md:h-10" />
      <p className="font-serif-two text-[11px] uppercase tracking-[0.3em] text-cream/70">
        Marfa, Texas — {FACTS.est}
      </p>
      <nav aria-label="Worlds">
        <ul className="flex gap-8">
          {NAV.map((n) => (
            <li key={n.href}>
              <Link
                href={n.href}
                className="font-serif-two text-[10px] uppercase tracking-[0.25em] text-cream/50 transition-colors hover:text-cream"
              >
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  )
}

/* Demo page body — a quiet page stub above the footer so the sign-off is
   judged in context, not floating alone. */
export function FooterDemo({
  variant,
}: {
  variant: "ledger" | "colophon" | "signature"
}) {
  const Footer =
    variant === "ledger"
      ? FooterLedger
      : variant === "colophon"
        ? FooterColophon
        : FooterSignature
  return (
    <main className="flex min-h-screen flex-col bg-cream">
      <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 py-24 text-center">
        <h1 className="font-serif text-3xl text-ink">Page body stands in</h1>
        <p className="font-serif-three text-[15px] text-ink/60">
          The footer below is the exploration — scroll is the approach.
        </p>
      </div>
      <Footer />
    </main>
  )
}
