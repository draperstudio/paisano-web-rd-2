/* E08 — text framing
   A section where type frames the composition top and bottom, with a
   wide ladder of text sizes between: framing lines, title, main block,
   small bits below, and text over the image.
   Locks: framing at top AND bottom, structural not decorative · 4+
   sizes with dramatic differentials · contained (border/margin/padding
   "for sure"), not full bleed. Negative: full bleed is dead.
   Titles serif per lock 1 (tracked uppercase serif allowed); body
   13–15px serif per lock 6; hairlines only per lock 3.
   All facts from 06 knowledge/01 The Building: dedicated June 1930,
   Trost & Trost, Giant filmed summer 1955, ~six-week shoot, Stevens
   and 300-plus cast and crew based at the hotel.
   Open axis varied: hierarchy steepness — var-1 moderate ladder,
   var-2 dramatic spread, var-3 the 12-kinship cycle (framing lines
   pushed to the panel edges at micro scale, per this doc's own
   "cycle them together" note).
   Var-4 (round two, re-studied against the Oliver du Puy ref): the ref
   is a TWO-PANEL composition on a dark ground. Left: tall photo with
   tracked caps overlaid at mid-frame. Right: light panel framed by
   text — a nav row across the top, a caps row across the base, and
   between them a centered small-caps title, a fully centered paragraph
   (every line centered, not justified), a single dot glyph, and a
   three-line colophon. Round one flattened this into one stack and
   lost both the split and the mid-frame overlay.
*/

import Image from "next/image"
import { MEDIA } from "@/lib/data"

const FACTS = {
  kicker: "Marfa, Texas",
  title: "The Building",
  body: "Dedicated in June 1930 and designed by Trost & Trost of El Paso, the hotel was built as the finest between El Paso and San Antonio. In the summer of 1955 it became the base of operations for Giant — George Stevens and a cast and crew of more than three hundred stayed here through a six-week shoot, James Dean, Elizabeth Taylor, and Rock Hudson among them.",
  below: "Listed on the National Register of Historic Places, 1978.",
  overImage: "El Paisano — dedicated June 1930",
  frameTop: "Hotel Paisano — Est. 1930",
  frameBottom: "207 N Highland Ave — Marfa, Texas",
}

function PanelImage() {
  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden">
      <Image
        src={MEDIA.facadeEntrance}
        alt="The Hotel Paisano facade and entrance"
        fill
        className="object-cover"
      />
      {/* CALL: over-image line sits at the image top — the facade photo
          carries landmark plaques in its lower third that collide with
          bottom-set type. A quiet ink scrim keeps the line legible over
          the bright sky; functional, not decorative. */}
      <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-ink/45 to-transparent pb-8 pt-4">
        <p className="text-center font-serif-two text-[12px] uppercase tracking-[0.3em] text-cream">
          {FACTS.overImage}
        </p>
      </div>
    </div>
  )
}

/* Variation 4 — round two: the ref's two-panel composition. */
export function E08SplitPanels() {
  return (
    <main className="min-h-screen bg-ink px-6 py-10 md:px-10 md:py-14">
      <div className="mx-auto grid w-full max-w-5xl gap-6 md:grid-cols-[43fr_57fr]">
        {/* ——— Left panel: tall photo, tracked caps at mid-frame ——— */}
        <div className="relative min-h-[70vh] overflow-hidden">
          <Image
            src={MEDIA.courtyardFountain || "/placeholder.svg"}
            alt="The courtyard fountain of the Hotel Paisano"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 40vw, 92vw"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-6">
            <p className="w-full text-center font-serif-two text-[13px] uppercase tracking-[0.35em] text-cream [text-shadow:0_1px_8px_rgba(26,22,18,0.5)]">
              Hotel <span className="inline-block w-10" /> Paisano
            </p>
            <p className="w-full text-center font-serif-two text-[13px] uppercase tracking-[0.35em] text-cream [text-shadow:0_1px_8px_rgba(26,22,18,0.5)]">
              Marfa <span className="inline-block w-14" /> and <span className="inline-block w-14" /> Texas
            </p>
          </div>
        </div>

        {/* ——— Right panel: the text-framed sheet ——— */}
        <div className="flex min-h-[70vh] flex-col bg-cream px-8 py-6 md:px-10">
          {/* Top framing row: the nav */}
          <div className="flex items-baseline justify-between gap-4">
            <a href="#" className="font-serif-two text-[11px] uppercase tracking-[0.25em] text-ink">
              Menu
            </a>
            <p className="font-serif-two text-[11px] uppercase tracking-[0.3em] text-ink">
              Hotel <span className="inline-block w-4" /> Paisano
            </p>
            <a href="#" className="font-serif-two text-[11px] uppercase tracking-[0.25em] text-ink">
              Back
            </a>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center gap-8 py-10 text-center">
            <h1 className="font-serif-two text-[14px] uppercase tracking-[0.3em] text-ink">
              The Building
            </h1>

            {/* Every line centered, as in the ref */}
            <p className="max-w-md font-serif-three text-[13.5px] leading-[1.9] text-ink/85">
              {FACTS.body}
            </p>

            <span aria-hidden="true" className="block h-2 w-2 rounded-full bg-ink/50" />

            <p className="font-serif-two text-[12px] tracking-[0.15em] leading-loose text-ink/80">
              Trost &amp; Trost, El Paso
              <br />
              Marfa, Texas
              <br />
              1930
            </p>
          </div>

          {/* Bottom framing row */}
          <div className="flex items-baseline justify-between gap-4">
            <p className="font-serif-two text-[11px] uppercase tracking-[0.3em] text-ink">
              The Grande Dame
            </p>
            <p className="font-serif-two text-[11px] uppercase tracking-[0.3em] text-ink">
              of West Texas
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

/* Variation 1 — moderate ladder: five sizes, restrained spread. */
export function E08Moderate() {
  return (
    <main className="min-h-screen bg-cream px-6 py-10 md:px-12">
      <section className="mx-auto max-w-3xl border border-ink/20 px-6 py-8 md:px-12">
        <p className="text-center font-serif-two text-[11px] uppercase tracking-[0.35em] text-ink/60">
          {FACTS.frameTop}
        </p>
        <h1 className="mt-10 text-center font-serif-two text-3xl text-ink md:text-4xl">
          {FACTS.title}
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-center font-serif-three text-[14px] leading-relaxed text-ink/80">
          {FACTS.body}
        </p>
        <p className="mt-6 text-center font-serif-three text-[12px] text-ink/55">
          {FACTS.below}
        </p>
        <div className="mt-8">
          <PanelImage />
        </div>
        <p className="mt-10 text-center font-serif-two text-[11px] uppercase tracking-[0.35em] text-ink/60">
          {FACTS.frameBottom}
        </p>
      </section>
    </main>
  )
}

/* Variation 2 — dramatic spread: the title goes display-scale while the
   framing lines shrink; the spread between sizes is the point. */
export function E08Dramatic() {
  return (
    <main className="min-h-screen bg-cream px-6 py-10 md:px-12">
      <section className="mx-auto max-w-4xl border border-ink/20 px-6 py-6 md:px-14">
        <p className="text-center font-serif-two text-[10px] uppercase tracking-[0.4em] text-ink/50">
          {FACTS.frameTop}
        </p>
        <h1 className="mt-12 text-center font-serif-two text-6xl leading-none text-ink md:text-8xl">
          {FACTS.title}
        </h1>
        <p className="mt-3 text-center font-serif-two text-[13px] uppercase tracking-[0.3em] text-ink/60">
          {FACTS.kicker}
        </p>
        <div className="mt-10">
          <PanelImage />
        </div>
        <p className="mx-auto mt-10 max-w-md text-center font-serif-three text-[13px] leading-relaxed text-ink/80">
          {FACTS.body}
        </p>
        <p className="mt-6 text-center font-serif-three text-[11px] text-ink/50">
          {FACTS.below}
        </p>
        <p className="mt-12 text-center font-serif-two text-[10px] uppercase tracking-[0.4em] text-ink/50">
          {FACTS.frameBottom}
        </p>
      </section>
    </main>
  )
}

/* Variation 3 — the 12 kinship: framing lines leave the panel flow and
   pin to the composition edges at micro scale, testing whether 08 and
   12 are one system. */
export function E08EdgeKinship() {
  return (
    <main className="relative min-h-screen bg-cream px-6 py-14 md:px-12">
      <p className="absolute inset-x-0 top-4 text-center font-serif-two text-[10px] uppercase tracking-[0.45em] text-ink/50">
        {FACTS.frameTop}
      </p>
      <p className="absolute inset-x-0 bottom-4 text-center font-serif-two text-[10px] uppercase tracking-[0.45em] text-ink/50">
        {FACTS.frameBottom}
      </p>
      <section className="mx-auto max-w-3xl border border-ink/20 px-6 py-10 md:px-12">
        <h1 className="text-center font-serif-two text-4xl text-ink md:text-5xl">
          {FACTS.title}
        </h1>
        <p className="mt-3 text-center font-serif-two text-[12px] uppercase tracking-[0.3em] text-ink/60">
          {FACTS.kicker}
        </p>
        <div className="mt-8">
          <PanelImage />
        </div>
        <p className="mx-auto mt-8 max-w-lg text-center font-serif-three text-[14px] leading-relaxed text-ink/80">
          {FACTS.body}
        </p>
        <p className="mt-6 text-center font-serif-three text-[12px] text-ink/55">
          {FACTS.below}
        </p>
      </section>
    </main>
  )
}
