"use client"

/* 23 faded illustration — round v0 7.12.26
   PROVISIONAL: built on 27's candidate B (facade, maroon on cream) before
   Buck has locked the illustration style. If 27's winner changes, swap the
   asset — the deployment logic here is the deliverable, not the drawing.
   The move: the illustration sits UNDER real content at low opacity —
   a watermark of the place, not a hero image. Content stays fully legible;
   the drawing is felt more than seen.
*/

import Image from "next/image"
import { ROOM_CLASSES } from "@/lib/data"

const ILLUSTRATION = "/images/e27/facade-gestural-maroon-on-cream.png"

function FadedGround({ opacity }: { opacity: string }) {
  return (
    <div
      className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
      aria-hidden="true"
    >
      <div className={`relative aspect-square w-[110vmin] ${opacity}`}>
        <Image
          src={ILLUSTRATION || "/placeholder.svg"}
          alt=""
          fill
          className="object-contain"
          sizes="110vmin"
        />
      </div>
    </div>
  )
}

/* Variation 1 — faded behind a text moment (deep fade, 8%) */
export function E23BehindText() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-cream px-6 text-center">
      <FadedGround opacity="opacity-[0.08]" />
      <div className="relative flex max-w-lg flex-col items-center gap-5">
        <p className="font-serif-two text-[11px] uppercase tracking-[0.3em] text-ink/60">
          Marfa, Texas — Est. 1930
        </p>
        <h1 className="font-serif text-4xl leading-tight text-ink text-balance md:text-5xl">
          The finest hotel between El Paso and San Antonio
        </h1>
        <p className="font-serif-three text-[15px] leading-relaxed text-ink/70 text-pretty">
          Henry Trost&apos;s Spanish Baroque landmark on Highland Avenue —
          the lobby, the courtyard, and the rooms above the arcade, held in
          the same hand since 1930.
        </p>
      </div>
    </main>
  )
}

/* Variation 2 — faded behind working content: the room index (12%) */
export function E23BehindIndex() {
  return (
    <main className="relative min-h-screen bg-cream px-6 py-16 md:px-12">
      <FadedGround opacity="opacity-[0.12]" />
      <div className="relative mx-auto flex max-w-2xl flex-col gap-10">
        <header className="flex flex-col gap-2">
          <p className="font-serif-two text-[11px] uppercase tracking-[0.3em] text-ink/60">
            The rooms
          </p>
          <h1 className="font-serif text-3xl text-ink">
            Nine types, forty-two keys
          </h1>
        </header>
        <ul className="flex flex-col">
          {ROOM_CLASSES.map((r, i) => (
            <li
              key={`${r.code}-${i}`}
              className="flex items-baseline justify-between gap-4 border-b border-ink/15 py-4"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-serif-two text-[12px] text-ink/50">
                  {["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"][i]}
                </span>
                <span className="font-serif text-xl text-ink">{r.name}</span>
              </div>
              <span className="font-serif-two text-[12px] uppercase tracking-[0.15em] text-ink/60">
                {r.rate}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}

/* Variation 3 — maroon ground, cream illustration faded (10%) */
export function E23MaroonGround() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-maroon px-6 text-center">
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
        aria-hidden="true"
      >
        <div className="relative aspect-square w-[110vmin] opacity-[0.1]">
          <Image
            src="/images/e27/facade-gestural-cream-on-maroon.png"
            alt=""
            fill
            className="object-contain"
            sizes="110vmin"
          />
        </div>
      </div>
      <div className="relative flex max-w-lg flex-col items-center gap-5">
        <p className="font-serif-two text-[11px] uppercase tracking-[0.3em] text-cream/60">
          207 N Highland Ave
        </p>
        <h1 className="font-serif text-4xl leading-tight text-cream text-balance md:text-5xl">
          Ninety-six years on Highland Avenue
        </h1>
        <p className="font-serif-three text-[15px] leading-relaxed text-cream/70 text-pretty">
          Opened June 1930, seven months into the Depression, and never once
          renamed.
        </p>
      </div>
    </main>
  )
}
