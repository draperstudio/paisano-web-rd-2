/* 18 split cards — a type card and an image card side by side.
   No direct reference exists (Buck: "I wish I had a direct reference
   for this one") — the kept exploration (explorations/Section.png) is
   the only standard to read against.

   Locked: two cards, stacked type in one, image in the other, side by
   side. NOT dark ground (Buck's negative — the kept exploration's dark
   brown surround is the one thing he rejected).

   Variation axes per doc:
   - separate vs joined cards ("I don't exactly love that the cards are
     separate but also maybe it's okay") — var-1/3 separate, var-2 joined
   - Buck's spacing hypothesis: vertical padding/margin above equal to
     horizontal side spacing — applied in all variants via a shared
     --gutter value so top/bottom = sides = the gap between cards
   - image side — var-3 flips it right

   Content: the Giant 1955 fact from the kept exploration — real,
   dossier-backed. Script mid-title is expression 07's actual move
   (mid-line inside running copy, not a sticker).
*/

import Image from "next/image"
import { MEDIA } from "@/lib/data"

type Variant = "separate" | "joined" | "flipped"

function TypeCardContent() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-6 px-8 py-16 text-center md:px-12">
      <p className="font-typewriter text-[11px] uppercase tracking-[0.35em] text-ink/60">
        The summer of 1955
      </p>
      <h2 className="font-serif-two text-2xl uppercase tracking-[0.14em] text-ink md:text-3xl">
        The cast of{" "}
        <span className="font-script-a1 normal-case tracking-normal text-maroon text-[1.4em]">
          Giant
        </span>{" "}
        stayed here
      </h2>
      <p className="max-w-md font-serif-three text-[15px] leading-relaxed text-ink/75">
        Elizabeth Taylor, Rock Hudson and James Dean, while Warner Bros.
        filmed in the grasslands outside town. The building never quite
        got over it.
      </p>
      <p className="font-typewriter text-[11px] uppercase tracking-[0.35em] text-ink/60">
        Texas historic landmark
      </p>
    </div>
  )
}

function ImageCardContent() {
  return (
    <div className="relative min-h-[320px] w-full md:min-h-0">
      <Image
        src={MEDIA.facadeEntrance || "/placeholder.svg"}
        alt="The Hotel Paisano facade at the corner of Highland Avenue, its rooftop neon sign against the sky"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  )
}

export function E18SplitCards({ variant }: { variant: Variant }) {
  /* Buck's spacing hypothesis, applied: the surround (section padding)
     and the between-cards gap use the SAME value, so vertical breathing
     room equals horizontal. */
  const gutter = "clamp(1.5rem, 4vw, 4rem)"

  if (variant === "joined") {
    return (
      <section
        className="bg-parchment"
        style={{ padding: gutter }}
        aria-label="The cast of Giant stayed here"
      >
        {/* Joined: one card, one frame — the split is internal */}
        <div className="mx-auto grid max-w-6xl overflow-hidden border border-ink/15 bg-cream md:grid-cols-2">
          <ImageCardContent />
          <TypeCardContent />
        </div>
      </section>
    )
  }

  const imageFirst = variant === "separate"
  return (
    <section
      className="bg-parchment"
      style={{ padding: gutter }}
      aria-label="The cast of Giant stayed here"
    >
      {/* Separate: two distinct cards, gap = surround (the hypothesis) */}
      <div
        className="mx-auto grid max-w-6xl md:grid-cols-2"
        style={{ gap: gutter }}
      >
        {imageFirst ? (
          <>
            <div className="bg-cream shadow-sm">
              <div className="relative h-full min-h-[320px] md:min-h-[480px]">
                <Image
                  src={MEDIA.facadeEntrance || "/placeholder.svg"}
                  alt="The Hotel Paisano facade at the corner of Highland Avenue, its rooftop neon sign against the sky"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="bg-cream shadow-sm">
              <TypeCardContent />
            </div>
          </>
        ) : (
          <>
            <div className="bg-cream shadow-sm">
              <TypeCardContent />
            </div>
            <div className="bg-cream shadow-sm">
              <div className="relative h-full min-h-[320px] md:min-h-[480px]">
                <Image
                  src={MEDIA.facadeEntrance || "/placeholder.svg"}
                  alt="The Hotel Paisano facade at the corner of Highland Avenue, its rooftop neon sign against the sky"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
