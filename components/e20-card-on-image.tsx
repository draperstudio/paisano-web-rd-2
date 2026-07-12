/* 20 card on image — a card (image one side, text the other) floating
   on a background image. No reference exists; the kept exploration's
   structure is liked, nearly every execution detail was declared off.

   Locked: two-layer structure (background image ground + framed card),
   image-one-side/text-other inside the card, either handedness.

   Variation axes per doc:
   - background bleed vs the brand's held containment — var-1/2 bleed,
     var-3 contained (cycle both, per the doc)
   - handedness — var-1 image-left, var-2 image-right
   - eyebrow sits centered ABOVE the title (the off-to-left eyebrow
     read weird; the eyebrow line is a hard kill, also killed in 17)

   Content: the courtyard dinner fact — real, from the dossier set.
   Type: 18's five-level card interior is the current working proposal
   (typewriter kicker / serif title / body); type is open brand-wide.
*/

import Image from "next/image"
import { MEDIA } from "@/lib/data"

type Variant = "image-left" | "image-right" | "contained"

function CardInner({ imageSide }: { imageSide: "left" | "right" }) {
  const img = (
    <div className="relative min-h-[280px] md:min-h-0">
      <Image
        src={MEDIA.lobbyLoungeArch || "/placeholder.svg"}
        alt="The lobby lounge through an arched opening, leather chairs on patterned tile"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 40vw"
      />
    </div>
  )
  const text = (
    <div className="flex flex-col justify-center gap-5 px-8 py-12 text-center md:px-10">
      <p className="font-typewriter text-[11px] uppercase tracking-[0.35em] text-ink/60">
        Evenings at the hotel
      </p>
      <h2 className="font-serif-two text-2xl uppercase tracking-[0.12em] text-ink md:text-[28px]">
        Dinner in the courtyard
      </h2>
      <p className="mx-auto max-w-sm font-serif-three text-[15px] leading-relaxed text-ink/75">
        In the warm months the dining room moves outside, under the
        arcade and around the fountain. The kitchen is the same; the
        ceiling is West Texas sky.
      </p>
    </div>
  )
  return (
    <div className="grid overflow-hidden bg-cream shadow-lg md:grid-cols-[2fr_3fr]">
      {imageSide === "left" ? (
        <>
          {img}
          {text}
        </>
      ) : (
        <>
          {text}
          {img}
        </>
      )}
    </div>
  )
}

export function E20CardOnImage({ variant }: { variant: Variant }) {
  const imageSide = variant === "image-right" ? "right" : "left"

  if (variant === "contained") {
    /* The brand's held containment: background image framed inside a
       parchment surround instead of bleeding — the other side of the
       "full bleed is better here but not loved" hedge. */
    return (
      <section
        className="bg-parchment px-6 py-10 md:px-12 md:py-16"
        aria-label="Dinner in the courtyard"
      >
        <div className="relative mx-auto max-w-6xl">
          <div className="relative min-h-[80vh]">
            <Image
              src={MEDIA.courtyardFountain || "/placeholder.svg"}
              alt="The courtyard fountain with the hotel facade and flags behind it"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 flex items-center justify-center p-6 md:p-16">
              <div className="w-full max-w-3xl">
                <CardInner imageSide={imageSide} />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      className="relative flex min-h-screen items-center justify-center p-6 md:p-16"
      aria-label="Dinner in the courtyard"
    >
      <Image
        src={MEDIA.courtyardFountain || "/placeholder.svg"}
        alt="The courtyard fountain with the hotel facade and flags behind it"
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      <div className="relative w-full max-w-3xl">
        <CardInner imageSide={imageSide} />
      </div>
    </section>
  )
}
