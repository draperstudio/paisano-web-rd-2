"use client"

/* EXPRESSION 02 — title over image (round v0, fill-order pass)
   Ref: refs/symmetrical-vertical-stack-layout — strict central axis,
   display serif up top, framed photographic inset, generous negative
   space, justified-feeling body at the bottom.
   Locks held: centered stack (title / image block / text below),
   title leads, serif titles only (decision 1), body 13–15px serif
   (decision 6), plain 1px hairlines (decision 3).
   One axis per variation:
     A — faithful baseline: title-case display serif over framed image
     B — the image-cycling branch: images cycle through, slightly askew
     C — fifth-row branch, Scenario B: traced wordmark large up top, image below
     D — logo-with-above-and-below-text branch, Scenario A: current mark centered
     E — round two, studied against the ref: the ref is a COLOR-FIELD POSTER.
         The ground is the brand color edge to edge; the title is enormous
         (two stacked lines eating the top third); the photo is a small
         jewel (~1/3 frame width) in a tone-on-tone embossed frame; below,
         a typewriter-caps line pair then a small justified paragraph.
         A–D got this weight distribution backwards (pale ground, small
         title, big photo). E corrects it on maroon.
     F — same poster structure on wine, the deeper dial.
   Negatives held: no typeface mixing inside the stack, no all-caps
   serif wordmark (ref uses caps; we keep its scale/stack in Title Case),
   no solo "Paisano", no sans titles.
   Facts: lib/data.ts (06 knowledge). Current photography only — no renders. */

import { useEffect, useState } from "react"
import Image from "next/image"
import { MEDIA } from "@/lib/data"
import { TracedMark } from "./traced-mark"
import { CurrentMark } from "./current-mark"

export type E02Variant = "a" | "b" | "c" | "d" | "e" | "f"

/* Shared real content — the hotel introduction. Facts from the ledger. */
const KICKER = "Marfa, Texas — Est. 1930"
const BODY_LEAD =
  "Forty-two rooms across nine classes on Highland Avenue, a block from the Presidio County courthouse. The rooms run from the Queen Historic — one queen, European bath, courthouse out the north windows — to the Rock Hudson Suite and its private rooftop terrace."
const BODY_TAIL =
  "Dogs are welcome at forty dollars a night. Check-in is at three."

/* The cycling branch: current photography only, slightly askew per the doc. */
const CYCLE = [
  { key: "courtyardFountain", label: "The courtyard", tilt: "-1.2deg" },
  { key: "lobbySeating", label: "The lobby", tilt: "0.8deg" },
  { key: "facadeEntrance", label: "Highland Avenue", tilt: "-0.6deg" },
] as const

function FramedImage({
  src,
  alt,
  tilt,
}: {
  src: string
  alt: string
  tilt?: string
}) {
  return (
    <figure
      className="mx-auto w-full max-w-md border border-ink/25 bg-cream p-2 shadow-none"
      style={tilt ? { transform: `rotate(${tilt})` } : undefined}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image src={src} alt={alt} fill className="object-cover" sizes="448px" />
      </div>
    </figure>
  )
}

function CyclingImage() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % CYCLE.length), 2400)
    return () => clearInterval(t)
  }, [])
  const item = CYCLE[i]
  return (
    <div className="w-full" aria-label="Photographs of the hotel, cycling">
      <FramedImage
        src={MEDIA[item.key as keyof typeof MEDIA]}
        alt={item.label}
        tilt={item.tilt}
      />
      <p className="mt-3 text-center font-serif-three text-[13px] italic text-ink/60">
        {item.label}
      </p>
    </div>
  )
}

/* ——— Round two: the color-field poster (variants E / F) ———
   Weight distribution traced from the ref:
   title ≈ top third at ~11vw, image ≈ 30% frame width, text ≈ small
   footer block. Everything centered on one axis. */
function PosterVariant({ tone }: { tone: "maroon" | "wine" }) {
  const ground = tone === "maroon" ? "bg-maroon" : "bg-wine"
  return (
    <main className={`min-h-screen ${ground} text-cream`}>
      <section
        aria-labelledby="e02-title"
        className="mx-auto flex min-h-screen w-full max-w-4xl flex-col items-center justify-between gap-10 px-6 py-14 text-center md:py-16"
      >
        {/* ——— The title owns the top third ——— */}
        {/* Both lines optically equal width, as in the ref — "Hotel" is
            5 glyphs to "Paisano"'s 7, so it takes a larger size to hold
            the same measure. */}
        <h1 id="e02-title" className="font-serif text-cream">
          <span className="block leading-[0.9] text-[clamp(5rem,13.5vw,11rem)]">
            Hotel
          </span>
          <span className="block leading-[0.9] text-[clamp(4rem,10.8vw,8.8rem)]">
            Paisano
          </span>
        </h1>

        {/* ——— The image is a small jewel in a tone-on-tone frame ——— */}
        <figure className="w-full max-w-[17rem]">
          <div
            className={`${ground} p-3`}
            style={{
              boxShadow:
                "inset 0 1px 0 rgba(244,239,227,0.22), inset 0 -1px 0 rgba(0,0,0,0.35), 0 2px 6px rgba(0,0,0,0.3)",
            }}
          >
            <div
              className="relative aspect-square w-full overflow-hidden"
              style={{
                boxShadow:
                  "0 0 0 1px rgba(244,239,227,0.28), inset 0 0 0 1px rgba(0,0,0,0.3)",
              }}
            >
              <Image
                src={MEDIA.courtyardFountain || "/placeholder.svg"}
                alt="The courtyard fountain"
                fill
                className="object-cover"
                sizes="272px"
              />
            </div>
          </div>
        </figure>

        {/* ——— Typewriter caps pair, then the small justified block ——— */}
        <div className="flex max-w-xl flex-col items-center gap-5">
          <p className="font-typewriter text-[12px] font-bold uppercase leading-relaxed tracking-[0.18em] text-cream/90">
            Marfa, Texas — Est. 1930
            <br />
            Forty-two rooms on Highland Avenue
          </p>
          <p className="text-justify font-serif-three text-[13px] leading-relaxed text-cream/80 [text-align-last:center]">
            {BODY_LEAD} {BODY_TAIL}
          </p>
        </div>
      </section>
    </main>
  )
}

export function E02TitleOverImage({ variant }: { variant: E02Variant }) {
  if (variant === "e") return <PosterVariant tone="maroon" />
  if (variant === "f") return <PosterVariant tone="wine" />
  return (
    <main className="min-h-screen bg-parchment text-ink">
      <section
        aria-labelledby="e02-title"
        className="mx-auto flex min-h-screen w-full max-w-3xl flex-col items-center justify-center gap-10 px-6 py-20 text-center md:gap-12"
      >
        {/* ——— Title zone ——— */}
        {variant === "a" && (
          <header className="flex flex-col items-center gap-4">
            <p className="font-serif-three text-[13px] tracking-[0.22em] uppercase text-ink/60">
              {KICKER}
            </p>
            <h1
              id="e02-title"
              className="font-serif text-5xl leading-tight text-balance md:text-6xl"
            >
              Hotel Paisano
            </h1>
          </header>
        )}
        {variant === "b" && (
          <header className="flex flex-col items-center gap-4">
            <p className="font-serif-three text-[13px] tracking-[0.22em] uppercase text-ink/60">
              {KICKER}
            </p>
            <h1
              id="e02-title"
              className="font-serif text-5xl leading-tight text-balance md:text-6xl"
            >
              Hotel Paisano
            </h1>
          </header>
        )}
        {variant === "c" && (
          <header className="flex flex-col items-center gap-5">
            {/* Fifth-row branch under Scenario B: the traced mark IS the title,
                "bigger up top." */}
            <h1 id="e02-title" className="flex justify-center">
              <TracedMark
                variant="b"
                className="h-14 text-maroon md:h-20"
              />
              <span className="sr-only">Hotel Paisano</span>
            </h1>
            <p className="font-serif-three text-[13px] tracking-[0.22em] uppercase text-ink/60">
              {KICKER}
            </p>
          </header>
        )}
        {variant === "d" && (
          <header className="flex flex-col items-center gap-5">
            {/* Logo-with-above-and-below-text branch under Scenario A:
                the current mark holds the center, text stacked both sides. */}
            <p className="font-serif-three text-[13px] tracking-[0.22em] uppercase text-ink/60">
              {KICKER}
            </p>
            <h1 id="e02-title" className="flex justify-center">
              <CurrentMark className="h-12 md:h-16" />
            </h1>
            <p className="font-serif-two text-[15px] italic text-ink/70">
              on Highland Avenue since 1930
            </p>
          </header>
        )}

        {/* ——— Image zone ——— */}
        {variant === "b" ? (
          <CyclingImage />
        ) : (
          <FramedImage
            src={
              variant === "c" ? MEDIA.facadeEntrance : MEDIA.courtyardFountain
            }
            alt={
              variant === "c"
                ? "The hotel entrance on Highland Avenue"
                : "The courtyard fountain"
            }
          />
        )}

        {/* ——— Text below ——— */}
        <div className="flex max-w-xl flex-col items-center gap-4">
          <div aria-hidden="true" className="h-px w-16 bg-ink/30" />
          <p className="font-serif-three text-[14px] leading-relaxed text-pretty text-ink/85">
            {BODY_LEAD}
          </p>
          <p className="font-serif-three text-[14px] leading-relaxed text-ink/85">
            {BODY_TAIL}
          </p>
        </div>
      </section>
    </main>
  )
}
