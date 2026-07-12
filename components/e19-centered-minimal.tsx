/* 19 centered minimal — reference-only minimalism: a single understated
   word on the vertical center line, slightly ABOVE true geometric center
   (visual lift), anchored at the bottom by two smaller horizontally
   juxtaposed text elements. Emptiness owns the frame.

   Buck's record is thin ("just the minimalism of this... certainly on
   the web") — this first round is discovery per the doc. The exploration
   axis is the voice of the single word: serif, script, traced mark.

   Locked from the reference md: sparse space, steep-but-quiet hierarchy,
   optical center over geometric, two bottom anchors against the void.
*/

import { TracedWord } from "./traced-mark"

type Variant = "serif" | "script" | "trace" | "faithful"

/* ——— Round two: the ref's actual geometry, re-measured ———
   The word sits HIGHER than round one had it (~1/3 down, not 42%),
   set BOLD at modest size — quiet but firm, not airy. The two bottom
   anchors are asymmetric: the left one carries a tiny stacked second
   line; they sit slightly left and right of the center axis, closer
   together than round one's wide gap. */
function FaithfulVariant() {
  return (
    <section
      className="flex min-h-screen flex-col bg-cream"
      aria-label="Hotel Paisano"
    >
      <div className="flex flex-[33] items-end justify-center">
        <h1 className="font-serif-two text-2xl font-bold tracking-[0.12em] text-ink md:text-3xl">
          Paisano
        </h1>
      </div>

      <div className="flex flex-[67] flex-col justify-end">
        <div className="flex items-start justify-center gap-12 pb-14 md:gap-16">
          <p className="text-center font-serif-two text-[10px] font-bold uppercase leading-relaxed tracking-[0.25em] text-ink/70">
            Marfa
            <br />
            <span className="font-normal normal-case tracking-[0.15em] text-ink/50">
              Texas
            </span>
          </p>
          <p className="font-serif-two text-[10px] font-bold uppercase tracking-[0.25em] text-ink/70">
            Est. 1930
          </p>
        </div>
      </div>
    </section>
  )
}

export function E19CenteredMinimal({ variant }: { variant: Variant }) {
  if (variant === "faithful") return <FaithfulVariant />
  return (
    <section
      className="flex min-h-screen flex-col bg-cream"
      aria-label="Hotel Paisano"
    >
      {/* The word sits at ~42% depth — above geometric center, the
          reference's "visual lift." flex-[42] / flex-[58] splits the
          void asymmetrically without any magic-number positioning. */}
      <div className="flex flex-[42] items-end justify-center">
        {variant === "serif" && (
          <h1 className="font-serif-two text-3xl tracking-[0.08em] text-ink md:text-4xl">
            Paisano
          </h1>
        )}
        {variant === "script" && (
          <h1 className="font-script-a1 text-4xl text-ink md:text-5xl">
            Paisano
          </h1>
        )}
        {variant === "trace" && (
          <h1 className="text-ink">
            <span className="sr-only">Paisano</span>
            <TracedWord
              word="paisano"
              variant="b"
              className="block h-10 md:h-12"
            />
          </h1>
        )}
      </div>

      <div className="flex flex-[58] flex-col justify-end">
        {/* Two small horizontally juxtaposed anchors at the bottom */}
        <div className="flex items-baseline justify-center gap-16 pb-10 md:gap-24">
          <p className="font-serif-two text-[11px] uppercase tracking-[0.3em] text-ink/60">
            Marfa, Texas
          </p>
          <p className="font-serif-two text-[11px] uppercase tracking-[0.3em] text-ink/60">
            Est. 1930
          </p>
        </div>
      </div>
    </section>
  )
}
