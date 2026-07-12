/* 24 NAV BAR — the variant-ripping band.
   Buck: "I want to fucking rip variants for nav bars." Only lock is the
   subject; everything else is open. So this is a rip board: six nav
   variants stacked on one route, each rendered full-width at real scale,
   separated by a labeled hairline so Buck can read down the page like
   flipping proofs.

   Axes ripped across:
   - wordmark treatment: 25 trace vs serif "The Paisano" (the logo-script
     question is standing — both appear)
   - form: full bar / split with center mark / ceremonial stack / plate /
     hairline whisper / maroon band
   - microtext passengers (10/11/12): coordinates, est. line, address
   - dividers: diamond interpuncts (from the kept studies), hairlines, none

   Links point at the three world routes — no invented destinations.
   Data from lib/data.ts only. */

import Link from "next/link"
import { TracedMark } from "./traced-mark"

const LINKS = [
  { label: "Stay", href: "/var-1" },
  { label: "Marfa", href: "/var-2" },
  { label: "Gatherings", href: "/var-3" },
]

const COORDS = "N 30.3095 · W 104.0212"

function NavLinks({
  className = "",
  divider,
}: {
  className?: string
  divider?: "diamond" | "none"
}) {
  return (
    <ul className={`flex items-baseline ${className}`}>
      {LINKS.map((l, i) => (
        <li key={l.href} className="flex items-baseline">
          {i > 0 && divider === "diamond" && (
            <span aria-hidden="true" className="mx-4 text-[8px] text-current opacity-60">
              ◆
            </span>
          )}
          <Link
            href={l.href}
            className="font-serif-two text-[11px] uppercase tracking-[0.24em] transition-opacity hover:opacity-70"
          >
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

/* 1 — Trace left, links right: the working world-two form, at bar scale */
function NavTraceBar() {
  return (
    <header className="flex items-center justify-between border-b border-ink/15 bg-cream px-6 py-4 text-ink md:px-10">
      <Link href="/var-2" aria-label="Hotel Paisano — home">
        <TracedMark variant="b" className="h-5 text-maroon" />
      </Link>
      <nav aria-label="Main">
        <NavLinks className="gap-8" />
      </nav>
    </header>
  )
}

/* 2 — Split nav, mark center: the heritage study's form with the trace */
function NavSplitCenter() {
  return (
    <header className="grid grid-cols-[1fr_auto_1fr] items-center border-b border-ink/15 bg-cream px-6 py-5 text-ink md:px-10">
      <nav aria-label="Main, left">
        <ul className="flex items-baseline gap-8">
          <li>
            <Link
              href={LINKS[0].href}
              className="font-serif-two text-[11px] uppercase tracking-[0.24em] hover:opacity-70"
            >
              {LINKS[0].label}
            </Link>
          </li>
          <li>
            <Link
              href={LINKS[1].href}
              className="font-serif-two text-[11px] uppercase tracking-[0.24em] hover:opacity-70"
            >
              {LINKS[1].label}
            </Link>
          </li>
        </ul>
      </nav>
      <Link href="/var-2" aria-label="Hotel Paisano — home" className="px-8">
        <TracedMark variant="b" className="h-5 text-maroon" />
      </Link>
      <nav aria-label="Main, right" className="justify-self-end">
        <ul className="flex items-baseline gap-8">
          <li>
            <Link
              href={LINKS[2].href}
              className="font-serif-two text-[11px] uppercase tracking-[0.24em] hover:opacity-70"
            >
              {LINKS[2].label}
            </Link>
          </li>
          <li>
            <span className="font-serif-two text-[10px] uppercase tracking-[0.24em] text-ink/50">
              Marfa, TX
            </span>
          </li>
        </ul>
      </nav>
    </header>
  )
}

/* 3 — Ceremonial stack: kicker, serif mark, links row under a hairline */
function NavCeremonial() {
  return (
    <header className="flex flex-col items-center gap-3 border-b border-ink/15 bg-cream px-6 pb-4 pt-6 text-ink">
      <p className="font-serif-two text-[10px] uppercase tracking-[0.34em] text-ink/60">
        Established 1930
      </p>
      <Link
        href="/var-1"
        className="font-serif text-3xl text-ink md:text-4xl"
        aria-label="The Paisano — home"
      >
        The Paisano
      </Link>
      <nav aria-label="Main" className="border-t border-ink/15 pt-3">
        <NavLinks divider="diamond" />
      </nav>
    </header>
  )
}

/* 4 — Maroon band: trace in cream, links right, address passenger */
function NavMaroonBand() {
  return (
    <header className="flex items-center justify-between bg-maroon px-6 py-4 text-cream md:px-10">
      <Link href="/var-2" aria-label="Hotel Paisano — home">
        <TracedMark variant="b" className="h-5 text-cream" />
      </Link>
      <div className="flex items-baseline gap-10">
        <nav aria-label="Main">
          <NavLinks className="gap-8" />
        </nav>
        <p className="hidden font-serif-two text-[9px] uppercase tracking-[0.3em] text-cream/50 md:block">
          207 N Highland Ave
        </p>
      </div>
    </header>
  )
}

/* 5 — Hairline whisper: serif mark small, everything at whisper scale */
function NavWhisper() {
  return (
    <header className="flex items-baseline justify-between border-b border-ink/10 bg-cream px-6 py-3 text-ink md:px-10">
      <Link
        href="/var-1"
        className="font-serif text-[17px] text-ink"
        aria-label="The Paisano — home"
      >
        The Paisano
      </Link>
      <nav aria-label="Main">
        <ul className="flex items-baseline gap-6">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="font-serif-two text-[10px] uppercase tracking-[0.2em] text-ink/60 transition-colors hover:text-ink"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <p
        className="hidden font-serif-two text-[9px] uppercase tracking-[0.3em] text-ink/35 lg:block"
        aria-hidden="true"
      >
        {COORDS}
      </p>
    </header>
  )
}

/* 6 — Plate: mark on a maroon plate set into a cream bar (study 03's move) */
function NavPlate() {
  return (
    <header className="flex items-stretch justify-between border-b border-ink/15 bg-cream text-ink">
      <Link
        href="/var-2"
        aria-label="Hotel Paisano — home"
        className="flex items-center bg-maroon px-6 py-4 md:px-8"
      >
        <TracedMark variant="b" className="h-5 text-cream" />
      </Link>
      <nav aria-label="Main" className="flex items-center px-6 md:px-10">
        <NavLinks className="gap-8" divider="diamond" />
      </nav>
    </header>
  )
}

/* ————— The rip board ————— */

const VARIANTS: { label: string; note: string; Nav: () => React.JSX.Element }[] = [
  { label: "I", note: "Trace left · links right · hairline foot", Nav: NavTraceBar },
  { label: "II", note: "Split nav · trace center · place passenger", Nav: NavSplitCenter },
  { label: "III", note: "Ceremonial stack · serif mark · diamond dividers", Nav: NavCeremonial },
  { label: "IV", note: "Maroon band · trace in cream · address passenger", Nav: NavMaroonBand },
  { label: "V", note: "Whisper bar · serif mark small · coordinates passenger", Nav: NavWhisper },
  { label: "VI", note: "Plate · trace on maroon plate set into the bar", Nav: NavPlate },
]

export function NavRipBoard() {
  return (
    <main className="min-h-screen bg-cream pb-24">
      <div className="mx-auto max-w-2xl px-6 pb-4 pt-16 text-center">
        <h1 className="font-serif text-2xl text-ink">Nav bars — the rip</h1>
        <p className="mt-2 font-serif-three text-[14px] leading-relaxed text-ink/60">
          Six forms at real scale. Read down the page; every bar is live.
        </p>
      </div>
      {VARIANTS.map(({ label, note, Nav }) => (
        <section key={label} aria-label={`Nav variant ${label}: ${note}`}>
          <p className="mx-auto max-w-6xl px-6 pb-2 pt-10 font-serif-two text-[10px] uppercase tracking-[0.3em] text-ink/40 md:px-10">
            {label} — {note}
          </p>
          <div className="shadow-sm">
            <Nav />
          </div>
        </section>
      ))}
    </main>
  )
}
