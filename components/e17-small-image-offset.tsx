"use client"

/* 17 small image offset — round v0 7.12.26
   The pairing is the move: one large image + one much smaller image set
   off beside it. The size gap is the idea.
   Kills honored from the doc: no serif+script mix (the heading is serif
   only), no script at all, no line coming out of the eyebrow (the
   eyebrow stands alone, unruled).
   Small-image position is explicitly unlocked ("could be centered or
   offset. That's not really the point") — var-1 offsets high, var-2
   centers; var-3 runs band 1's cycling idea.
   Var-4 (round two, re-studied against the ref): the ref's power is the
   EXTREMITY of the size gap — the large image runs nearly the full
   frame height while the small image is a tiny jewel isolated high and
   right, far above the text block, which sits low with a deep
   first-line indent. Vars 1–3 undersold all three moves. */

import { useEffect, useState } from "react"
import Image from "next/image"
import { MEDIA } from "@/lib/data"

const COPY = {
  eyebrow: "The Courtyard",
  heading: "The Middle of the Building",
  body: "The hotel is organized around its courtyard — rooms above, arcade below, the tiled fountain holding the center. Dinner moves outside in the warm months, and the flags over the terrace mark the town's three governments: Texas, the United States, and the memory of Mexico a hundred miles south.",
}

function RightColumn({
  small,
  smallPosition,
  microtext,
}: {
  small: React.ReactNode
  smallPosition: "offset" | "center"
  microtext?: string
}) {
  return (
    <div className="flex flex-col justify-center gap-10 md:min-h-[80vh]">
      <div
        className={
          smallPosition === "center"
            ? "flex flex-col items-center"
            : "flex flex-col items-start pl-[14%]"
        }
      >
        <div className="relative aspect-[4/5] w-36 md:w-44">{small}</div>
        {microtext && (
          <p className="w-36 pt-2 font-typewriter text-[9.5px] uppercase tracking-[0.2em] leading-relaxed text-ink/55 md:w-44">
            {microtext}
          </p>
        )}
      </div>

      <div className={smallPosition === "center" ? "text-center" : ""}>
        {/* eyebrow — unruled per the kill */}
        <p className="font-typewriter text-[10px] uppercase tracking-[0.3em] text-ink/70">
          {COPY.eyebrow}
        </p>
        <h1 className="pt-3 font-serif text-3xl text-ink md:text-4xl">
          {COPY.heading}
        </h1>
        <p
          className={`pt-5 font-serif text-[14.5px] leading-relaxed text-ink/85 ${
            smallPosition === "center" ? "mx-auto max-w-sm" : "max-w-sm"
          }`}
        >
          {COPY.body}
        </p>
      </div>
    </div>
  )
}

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-5 py-10 md:grid-cols-[1.2fr_1fr] md:gap-16 md:px-8 md:py-16">
        <div className="relative aspect-[3/4] w-full overflow-hidden md:min-h-[80vh]">
          <Image
            src={MEDIA.courtyardFountain || "/placeholder.svg"}
            alt="The courtyard fountain at the Hotel Paisano"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 55vw, 92vw"
          />
        </div>
        {children}
      </div>
    </main>
  )
}

/* Variation A — small image offset high, with microtext. */
export function E17Offset() {
  return (
    <Frame>
      <RightColumn
        smallPosition="offset"
        microtext="Terrace dining, evening — flags over the arcade"
        small={
          <Image
            src={MEDIA.lobbyLoungeArch || "/placeholder.svg"}
            alt="Arched lounge opening seen from the courtyard"
            fill
            className="object-cover"
            sizes="176px"
          />
        }
      />
    </Frame>
  )
}

/* Variation B — small image centered, no microtext. */
export function E17Centered() {
  return (
    <Frame>
      <RightColumn
        smallPosition="center"
        small={
          <Image
            src={MEDIA.neonSignCloseup || "/placeholder.svg"}
            alt="The rooftop neon sign above the courtyard"
            fill
            className="object-cover"
            sizes="176px"
          />
        }
      />
    </Frame>
  )
}

/* Variation D — round two: the ref's actual proportions.
   Large image nearly full height; small image a tiny isolated jewel,
   high and right of the text axis; text low, deep first-line indent.
   Kills held: serif-only heading, no eyebrow rule, no script. */
export function E17ExtremeGap() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <div className="mx-auto grid min-h-screen max-w-6xl grid-cols-1 gap-10 px-5 py-8 md:grid-cols-[46fr_54fr] md:gap-0 md:px-10">
        {/* The large image holds nearly the full frame height */}
        <div className="relative min-h-[60vh] w-full overflow-hidden md:min-h-[calc(100vh-4rem)]">
          <Image
            src={MEDIA.courtyardFountain || "/placeholder.svg"}
            alt="The courtyard fountain at the Hotel Paisano"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 42vw, 92vw"
          />
        </div>

        <div className="relative flex flex-col md:pl-20">
          {/* The tiny jewel, isolated high and right of the text axis */}
          <div className="flex justify-center pt-[10vh] md:pr-8">
            <div className="relative aspect-[5/6] w-28 md:w-32">
              <Image
                src={MEDIA.lobbyLoungeArch || "/placeholder.svg"}
                alt="Arched lounge opening seen from the courtyard"
                fill
                className="object-cover"
                sizes="128px"
              />
            </div>
          </div>

          {/* The text sits low, well below the jewel */}
          <div className="max-w-md pt-[16vh] md:pr-10">
            <p className="font-typewriter text-[10px] uppercase tracking-[0.3em] text-ink/70">
              {COPY.eyebrow}
            </p>
            <h1 className="pt-3 font-serif text-3xl text-ink md:text-4xl">
              {COPY.heading}
            </h1>
            <p className="pt-5 font-serif text-[14.5px] leading-relaxed text-ink/85 [text-indent:3.5em]">
              {COPY.body}
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

/* Variation C — the small image cycles (band 1's version of the idea).
   Slow crossfade; Motion is an unvetted control, so the movement is
   kept to opacity only. */
const CYCLE = [
  { src: MEDIA.lobbyLoungeArch, alt: "Arched lounge opening" },
  { src: MEDIA.neonSignCloseup, alt: "The rooftop neon sign" },
  { src: MEDIA.facadeEntrance, alt: "The Highland Avenue facade" },
]

export function E17Cycling() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % CYCLE.length), 3500)
    return () => clearInterval(t)
  }, [])

  return (
    <Frame>
      <RightColumn
        smallPosition="offset"
        microtext={`Around the property — ${index + 1} of ${CYCLE.length}`}
        small={
          <>
            {CYCLE.map((img, i) => (
              <Image
                key={img.alt}
                src={img.src || "/placeholder.svg"}
                alt={i === index ? img.alt : ""}
                fill
                className={`object-cover transition-opacity duration-1000 ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
                sizes="176px"
              />
            ))}
          </>
        }
      />
    </Frame>
  )
}
