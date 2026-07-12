/* 21 full-bleed history — the sanctioned full-bleed exception, earned
   by history content. The kept exploration (Figma Make) is a full-
   viewport lobby photograph with quiet edge microtext; what Buck
   killed inside it is the all-caps big-kerning display lettering
   ("HOTEL PAISANO / NINETEEN THIRTY").

   Locked: edge to edge, deliberately — history subject first.
   HARD KILL: all-caps big-kerning display lettering. Any title here
   is mixed-case, modest scale, quiet.

   "Je ne sais quoi and tasteful" is the whole brief — the variation
   axis is type conduct on the image:
   - var-1: quiet centered block (kicker/title/body), low contrast
   - var-2: bottom-left editorial block, mixed-case serif
   - var-3: almost nothing — just the edge microtext line (12's move
     riding the full bleed); the photograph IS the section

   Content: real history from the dossier — Trost & Trost, June 1930,
   the Giant summer, the landmark listing.
*/

import Image from "next/image"
import { MEDIA } from "@/lib/data"

type Variant = "centered" | "editorial" | "bare"

function Ground({
  children,
  veil = "bg-ink/30",
}: {
  children: React.ReactNode
  veil?: string
}) {
  return (
    <section
      className="relative flex min-h-screen flex-col"
      aria-label="The history of the Hotel Paisano"
    >
      <Image
        src={MEDIA.lobbySeating || "/placeholder.svg"}
        alt="The Paisano lobby: leather chairs on patterned tile beneath the arch, lamplight on plaster"
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      {/* Quiet ink veil for legibility — functional, kept as shallow as
          the placement allows. Centered type sits over the photo's busy
          middle, so it takes a deeper veil than edge placements. */}
      <div className={`absolute inset-0 ${veil}`} aria-hidden="true" />
      {children}
    </section>
  )
}

export function E21FullBleedHistory({ variant }: { variant: Variant }) {
  if (variant === "bare") {
    return (
      <Ground>
        {/* The photograph is the section; one edge line carries the fact */}
        <div className="relative mt-auto flex items-baseline justify-center gap-6 pb-8">
          <p className="font-serif-two text-[11px] uppercase tracking-[0.3em] text-cream/90">
            Est. 1930 · National Historic Landmark · Marfa, Texas
          </p>
        </div>
      </Ground>
    )
  }

  if (variant === "editorial") {
    return (
      <Ground>
        <div className="relative mt-auto max-w-xl px-8 pb-16 md:px-16">
          <p className="font-serif-two text-[11px] uppercase tracking-[0.3em] text-cream/80">
            The history
          </p>
          {/* Mixed-case, modest — the killed lettering was all-caps
              big-kerning display; this is its opposite */}
          <h2 className="mt-4 font-serif-two text-3xl text-cream text-pretty md:text-4xl">
            Trost &amp; Trost, June 1930
          </h2>
          <p className="mt-4 font-serif-three text-[15px] leading-relaxed text-cream/85">
            Henry Trost designed it; the town has kept it. In the summer
            of 1955 Warner Bros. filled the rooms with the cast of Giant,
            and the building never quite got over it.
          </p>
        </div>
      </Ground>
    )
  }

  return (
    <Ground veil="bg-ink/50">
      <div className="relative m-auto flex max-w-xl flex-col items-center gap-5 px-8 text-center">
        <p className="font-serif-two text-[11px] uppercase tracking-[0.3em] text-cream/80">
          The history
        </p>
        <h2 className="font-serif-two text-3xl text-cream text-balance md:text-4xl">
          Standing since 1930
        </h2>
        <p className="font-serif-three text-[15px] leading-relaxed text-cream/85">
          A Trost &amp; Trost hotel at the corner of Highland Avenue —
          a National Historic Landmark that has watched Marfa change
          around it for nearly a century.
        </p>
      </div>
    </Ground>
  )
}
