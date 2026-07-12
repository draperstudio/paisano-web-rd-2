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

type Variant = "serif" | "script" | "trace"

export function E19CenteredMinimal({ variant }: { variant: Variant }) {
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
