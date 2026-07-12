/* EXPRESSION 03 — framed hero (round v0, fill-order pass)
   Derived from the Bowery Hotels hero (refs/symmetrical-editorial-web-header-layout)
   and the kept exploration "Hero Derivations - Bowery - 1 — FAITHFUL".
   Locks held: content inside tight thin padding/margins on ALL sides, never
   edge to edge · the actual Hotel Paisano wordmark, no stand-ins · site-hero
   subject. Negatives held: no full bleed, no arrows-in-circles carousel
   controls (no carousel shipped at all — open axis, noted in round),
   no foreign wordmark.
   One axis per variation:
     A — faithful: current mark top-left, address under it, centered serif nav, book link right
     B — wordmark axis: same chrome, the 25 traced mark (Scenario B) in place of the current mark
     C — chrome axis: centered ceremonial stack (mark over nav), current mark
     D — round two, studied against the ref again: the Bowery header is
         three bounded zones — logo block held by a vertical hairline,
         nav SPLIT around a central figure (their bellhop; our standing
         equivalent is the 26 crest), book button right. The image strip
         ends in a centered row of small utility links, not a caption.
         Arrows stay out (locked negative); no phone/email is invented.
   Facts: lib/data.ts (06 knowledge) — address only; no phone or email is on
   record, so none is shown (the invented-phone catch, decision 11).
   CALL: the kept exploration titles the mark "The Paisano" — band 1 kills
   "The", so the build uses the full wordmark. Flagged in the round record. */

import Image from "next/image"
import { MEDIA } from "@/lib/data"
import { CurrentMark } from "./current-mark"
import { TracedMark } from "./traced-mark"

export type E03Variant = "a" | "b" | "c" | "d"

const NAV = ["Stay", "Marfa", "Gatherings", "Guide", "Contact"] as const

function Mark({ variant, className }: { variant: E03Variant; className?: string }) {
  return variant === "b" ? (
    <span className={className}>
      <TracedMark variant="b" className="h-6 text-maroon md:h-7" />
      <span className="sr-only">Hotel Paisano</span>
    </span>
  ) : (
    <CurrentMark className={`h-6 md:h-7 ${className ?? ""}`} />
  )
}

function NavRow() {
  return (
    <nav aria-label="Main">
      <ul className="flex items-center justify-center gap-5 md:gap-7">
        {NAV.map((item, i) => (
          <li key={item} className="flex items-center gap-5 md:gap-7">
            <a
              href="#"
              className="font-serif-two text-[13px] tracking-[0.2em] uppercase text-ink hover:text-maroon"
            >
              {item}
            </a>
            {i < NAV.length - 1 ? (
              <span aria-hidden="true" className="text-[8px] text-maroon">
                ◆
              </span>
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
  )
}

/* ——— Round two: the faithful Bowery pass (variant D) ——— */
function SplitNav() {
  const left = NAV.slice(0, 3)
  const right = NAV.slice(3)
  const item = (label: string) => (
    <a
      href="#"
      className="font-serif-two text-[13px] tracking-[0.2em] uppercase text-ink hover:text-maroon"
    >
      {label}
    </a>
  )
  const diamond = (
    <span aria-hidden="true" className="text-[8px] text-maroon">
      ◆
    </span>
  )
  return (
    <nav aria-label="Main" className="flex items-center justify-center gap-5 md:gap-6">
      {left.map((l, i) => (
        <span key={l} className="flex items-center gap-5 md:gap-6">
          {item(l)}
          {i < left.length - 1 ? diamond : null}
        </span>
      ))}
      {/* The central figure the ref builds its nav around — ours is the
          26 crest, already traced. */}
      <img
        src="/crest-redraw/crest-a.svg"
        alt=""
        aria-hidden="true"
        className="mx-1 h-12 w-auto md:h-14"
      />
      {right.map((l, i) => (
        <span key={l} className="flex items-center gap-5 md:gap-6">
          {item(l)}
          {i < right.length - 1 ? diamond : null}
        </span>
      ))}
    </nav>
  )
}

function VariantD() {
  return (
    <main className="flex min-h-screen flex-col bg-cream text-ink">
      <div aria-hidden="true" className="h-1 w-full bg-maroon" />

      <header className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 px-6 py-3">
        {/* Logo block bounded by a vertical hairline, as in the ref */}
        <div className="flex items-center">
          <div className="flex flex-col gap-1 border-r border-ink/25 pr-5">
            <CurrentMark className="h-6 md:h-7" />
            <p className="font-serif-three text-[12px] leading-snug text-ink/60">
              207 N Highland Ave
              <br />
              Marfa, Texas 79843
            </p>
          </div>
        </div>

        <SplitNav />

        <div className="flex flex-col items-end gap-1.5">
          <a
            href="#"
            className="bg-maroon px-5 py-1.5 font-script-a1 text-[17px] text-cream"
          >
            Book Now
          </a>
          <p className="font-serif-three text-[12px] text-ink/60">
            At the desk, or by post
          </p>
        </div>
      </header>

      <section
        aria-label="The lobby of Hotel Paisano"
        className="flex flex-1 flex-col px-7 md:px-9"
      >
        <div className="relative min-h-[64vh] w-full flex-1 overflow-hidden">
          <Image
            src={MEDIA.lobbyLoungeArch || "/placeholder.svg"}
            alt="The lobby lounge under the arch, Hotel Paisano"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Centered utility strip, as in the ref's bottom row */}
      <footer className="flex items-center justify-center gap-6 px-6 py-3">
        {["Est. 1930", "207 N Highland Ave", "Marfa, Texas", "The Ledger"].map(
          (label) => (
            <span
              key={label}
              className="font-serif-three text-[12px] tracking-[0.1em] text-ink/60"
            >
              {label}
            </span>
          ),
        )}
      </footer>
    </main>
  )
}

export function E03FramedHero({ variant }: { variant: E03Variant }) {
  if (variant === "d") return <VariantD />
  return (
    <main className="flex min-h-screen flex-col bg-cream text-ink">
      {/* thin top accent — the Bowery hairline strip, ours in maroon */}
      <div aria-hidden="true" className="h-1 w-full bg-maroon" />

      {/* ——— Chrome ——— */}
      {variant === "c" ? (
        <header className="flex flex-col items-center gap-4 px-6 py-5">
          <Mark variant={variant} />
          <p className="font-serif-three text-[12px] tracking-[0.16em] text-ink/60">
            207 N Highland Ave — Marfa, Texas
          </p>
          <NavRow />
        </header>
      ) : (
        <header className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 px-6 py-4">
          <div className="flex flex-col gap-1">
            <Mark variant={variant} />
            <p className="font-serif-three text-[12px] leading-snug text-ink/60">
              207 N Highland Ave
              <br />
              Marfa, Texas 79843
            </p>
          </div>
          <NavRow />
          <div className="flex justify-end">
            <a
              href="#"
              className="bg-maroon px-5 py-2 font-script-a1 text-[18px] text-cream"
            >
              Book Now
            </a>
          </div>
        </header>
      )}

      {/* ——— The held image: thin margins all sides, never edge to edge ——— */}
      <section
        aria-label="The lobby of Hotel Paisano"
        className="flex flex-1 flex-col px-4 pb-4 md:px-5 md:pb-5"
      >
        <div className="relative min-h-[62vh] w-full flex-1 overflow-hidden">
          <Image
            src={MEDIA.lobbyLoungeArch}
            alt="The lobby lounge under the arch, Hotel Paisano"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      {/* ——— Footer strip inside the frame ——— */}
      <footer className="flex items-center justify-center gap-6 px-6 pb-4">
        <p className="font-serif-three text-[12px] tracking-[0.14em] text-ink/60">
          Hotel Paisano — Marfa, Texas — Est. 1930
        </p>
      </footer>
    </main>
  )
}
