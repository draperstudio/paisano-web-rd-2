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

   IMAGE SELECTION (fixed after review): each variant carries its own
   subject with its own background/card pairing — ground and card image
   must never repeat across variants, and the card image must show
   something the ground doesn't.
     var-1  courtyard dinner   — ground: fountain,      card: arcade lounge
     var-2  the neon at night  — ground: Marfa street,  card: neon close-up
     var-3  arrival & the desk — ground: the facade,    card: reception

   Content: real facts from the dossier set only.
   Type: 18's five-level card interior is the current working proposal
   (typewriter kicker / serif title / body); type is open brand-wide.
*/

import Image from "next/image"
import { MEDIA } from "@/lib/data"

type Variant = "image-left" | "image-right" | "contained"

type CardStory = {
  ground: string
  groundAlt: string
  card: string
  cardAlt: string
  kicker: string
  title: string
  body: string
}

const STORIES: Record<Variant, CardStory> = {
  "image-left": {
    ground: MEDIA.courtyardFountain,
    groundAlt:
      "The courtyard fountain with the hotel facade and flags behind it",
    card: MEDIA.lobbyLoungeArch,
    cardAlt:
      "The lobby lounge through an arched opening, leather chairs on patterned tile",
    kicker: "Evenings at the hotel",
    title: "Dinner in the courtyard",
    body: "In the warm months the dining room moves outside, under the arcade and around the fountain. The kitchen is the same; the ceiling is West Texas sky.",
  },
  "image-right": {
    ground: MEDIA.marfaStreet,
    groundAlt: "Highland Avenue, Marfa, looking toward the hotel",
    card: MEDIA.neonSignCloseup,
    cardAlt: "The Hotel Paisano neon sign against the evening sky",
    kicker: "On Highland Avenue",
    title: "The sign comes on at dusk",
    body: "The neon has marked the corner of Highland and Texas since the thirties. When it comes on, dinner is close and the town has settled in for the night.",
  },
  contained: {
    ground: MEDIA.facadeEntrance,
    groundAlt: "The entrance doors of the Hotel Paisano",
    card: MEDIA.lobbyReception,
    cardAlt: "The reception desk in the lobby of the Hotel Paisano",
    kicker: "Arrival",
    title: "The desk under the arch",
    body: "Check-in happens where it always has — at the desk in the tiled lobby, dedicated with the building in June 1930. Trost & Trost drew the room; Marfa has kept it.",
  },
}

function CardInner({
  story,
  imageSide,
}: {
  story: CardStory
  imageSide: "left" | "right"
}) {
  const img = (
    <div className="relative min-h-[280px] md:min-h-0">
      <Image
        src={story.card || "/placeholder.svg"}
        alt={story.cardAlt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 40vw"
      />
    </div>
  )
  const text = (
    <div className="flex flex-col justify-center gap-5 px-8 py-12 text-center md:px-10">
      <p className="font-typewriter text-[11px] uppercase tracking-[0.35em] text-ink/60">
        {story.kicker}
      </p>
      <h2 className="font-serif-two text-2xl uppercase tracking-[0.12em] text-ink md:text-[28px]">
        {story.title}
      </h2>
      <p className="mx-auto max-w-sm font-serif-three text-[15px] leading-relaxed text-ink/75">
        {story.body}
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
  const story = STORIES[variant]

  if (variant === "contained") {
    /* The brand's held containment: background image framed inside a
       parchment surround instead of bleeding — the other side of the
       "full bleed is better here but not loved" hedge. */
    return (
      <section
        className="bg-parchment px-6 py-10 md:px-12 md:py-16"
        aria-label={story.title}
      >
        <div className="relative mx-auto max-w-6xl">
          <div className="relative min-h-[80vh]">
            <Image
              src={story.ground || "/placeholder.svg"}
              alt={story.groundAlt}
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 flex items-center justify-center p-6 md:p-16">
              <div className="w-full max-w-3xl">
                <CardInner story={story} imageSide={imageSide} />
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
      aria-label={story.title}
    >
      <Image
        src={story.ground || "/placeholder.svg"}
        alt={story.groundAlt}
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      <div className="relative w-full max-w-3xl">
        <CardInner story={story} imageSide={imageSide} />
      </div>
    </section>
  )
}
