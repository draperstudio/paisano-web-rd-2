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
   Negatives held: no typeface mixing inside the stack, no all-caps
   serif wordmark, no solo "Paisano", no sans titles.
   Facts: lib/data.ts (06 knowledge). Current photography only — no renders. */

import { useEffect, useState } from "react"
import Image from "next/image"
import { MEDIA } from "@/lib/data"
import { TracedMark } from "./traced-mark"
import { CurrentMark } from "./current-mark"

export type E02Variant = "a" | "b" | "c" | "d"

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

export function E02TitleOverImage({ variant }: { variant: E02Variant }) {
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
