/* 14 folio rule — round v0 7.12.26
   The framed micro moment at the bottom of a section: a drawn rule above,
   small text beside a "/05" sub-number. Structure from the door reference;
   its type treatment (thin spaced sans caps) is dead per the doc — the
   lines here are set in the brand serif and typewriter instead.
   Each variation shows the move at the foot of a real section so it can
   be judged in place, not floating. */

import Image from "next/image"
import { MEDIA } from "@/lib/data"

type FolioProps = {
  lines: string[]
  number: string
  /** short = ref's stub rule; full = hairline across the column */
  rule?: "short" | "full"
  face?: "serif" | "typewriter"
}

/* The move itself — reusable. */
export function FolioRule({
  lines,
  number,
  rule = "short",
  face = "serif",
}: FolioProps) {
  const faceClass =
    face === "serif"
      ? "font-serif text-[14px] italic leading-relaxed"
      : "font-typewriter text-[11px] uppercase tracking-[0.14em] leading-relaxed"
  return (
    <div className="pt-10">
      <div
        className={
          rule === "short"
            ? "w-10 border-t border-ink/60"
            : "w-full border-t border-ink/25"
        }
      />
      <div className="flex items-end justify-between gap-8 pt-6">
        <div className={`${faceClass} text-ink/85`}>
          {lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <p className="shrink-0 font-typewriter text-[13px] tracking-[0.04em] text-ink/70">
          {number}
        </p>
      </div>
    </div>
  )
}

/* A host section — image over cream, the folio moment at its foot. */
function HostSection({
  children,
  image,
  alt,
}: {
  children: React.ReactNode
  image: string
  alt: string
}) {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <section className="mx-auto max-w-xl px-5 py-12 md:px-0 md:py-20">
        <div className="relative aspect-[3/4] w-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={alt}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 576px, 92vw"
          />
        </div>
        {children}
      </section>
    </main>
  )
}

/* Variation D — round two: the ref's WHOLE composition, not just the
   foot. A portrait split-field card: photo owns the top ~55% full
   bleed; the lower field carries a staggered two-block statement in
   tracked caps (set in the brand serif — the ref's thin sans is dead
   per the doc), then the short stub rule alone on the left, then two
   serif lines with the /05 folio at bottom right. */
export function E14SplitField() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-ink/15 px-4 py-10">
      <article className="flex w-full max-w-md flex-col overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.18)]">
        {/* ——— Top field: the photo, full bleed to the card edges ——— */}
        <div className="relative aspect-[4/3.4] w-full">
          <Image
            src={MEDIA.facadeEntrance || "/placeholder.svg"}
            alt="The entrance doors of the Hotel Paisano"
            fill
            className="object-cover"
            sizes="448px"
          />
        </div>

        {/* ——— Lower field ——— */}
        <div className="flex flex-col bg-cream px-7 pb-7 pt-9">
          <p className="font-serif-two text-[15px] uppercase leading-[1.9] tracking-[0.28em] text-ink">
            The finest hotel
            <br />
            between El Paso
          </p>
          <p className="pt-4 text-right font-serif-two text-[15px] uppercase leading-[1.9] tracking-[0.28em] text-ink">
            and San
            <br />
            Antonio.
          </p>

          <div className="mt-9 w-10 border-t border-ink/60" />

          <div className="flex items-end justify-between gap-8 pt-7">
            <div className="font-serif text-[14px] leading-relaxed text-ink/85">
              <p>Dedicated June 1930.</p>
              <p>Trost &amp; Trost, architects, El Paso.</p>
            </div>
            <p className="shrink-0 font-typewriter text-[13px] tracking-[0.04em] text-ink/70">
              /05
            </p>
          </div>
        </div>
      </article>
    </main>
  )
}

/* Variation A — serif italic lines, short stub rule (closest to ref). */
export function E14Serif() {
  return (
    <HostSection
      image={MEDIA.courtyardFountain}
      alt="The courtyard fountain at the Hotel Paisano"
      children={
        <FolioRule
          lines={[
            "The building is organized around the courtyard.",
            "Most of its life passes through it once a day.",
          ]}
          number="/02"
          rule="short"
          face="serif"
        />
      }
    />
  )
}

/* Variation B — typewriter lines, ties to 11's microtext voice. */
export function E14Typewriter() {
  return (
    <HostSection
      image={MEDIA.neonSignCloseup}
      alt="The rooftop neon sign at dusk"
      children={
        <FolioRule
          lines={["The sign reads against the sky", "from either end of Highland Avenue."]}
          number="/04"
          rule="short"
          face="typewriter"
        />
      }
    />
  )
}

/* Variation C — full hairline rule; tests the folio as a section
   boundary rather than a stub gesture. */
export function E14FullRule() {
  return (
    <HostSection
      image={MEDIA.lobbyLoungeArch}
      alt="Arched lounge opening off the lobby"
      children={
        <FolioRule
          lines={[
            "In the afternoon the courtyard light comes through sideways",
            "and the whole floor goes amber.",
          ]}
          number="/05"
          rule="full"
          face="serif"
        />
      }
    />
  )
}
