/* EXPRESSION 05 — script subtext (round v0, fill-order pass)
   The move: a script face in the subtext slot under a serif title —
   a register change, deployed sometimes, not always. First-ever
   explorations for this doc (none existed).
   Mounted in a real content setting: the rooms section header, with two
   real room classes below so the move is judged doing real work.
   Locks held: script in the SUBTEXT slot only · title serif (decision 1) ·
   body 13–15px serif (decision 6) · sanctioned script faces only
   (decision 5: Pinyon, Mrs Saint Delafield, Great Vibes + Monsieur La
   Doulaise / Herr Von Muellerhoff acceptable).
   One axis per variation:
     A — face: Pinyon Script          (script-a1)
     B — face: Herr Von Muellerhoff   (script-a2)
     C — face: Great Vibes            (script-b)
   
     D — size axis: Pinyon held, subtext scaled UP past the title
   Facts: lib/data.ts (06 knowledge). Current photography only. */

import Image from "next/image"
import { MEDIA, ROOM_CLASSES } from "@/lib/data"

export type E05Variant = "a" | "b" | "c" | "d"

const FACE: Record<E05Variant, string> = {
  a: "font-script-a1",
  b: "font-script-a2",
  c: "font-script-b",
  d: "font-script-a1",
}

/* Two real classes for the section body — the span of the house. */
const TEASER = [ROOM_CLASSES[1], ROOM_CLASSES[8]]

export function E05ScriptSubtext({ variant }: { variant: E05Variant }) {
  const scriptSize =
    variant === "d"
      ? "text-[44px] md:text-[56px]"
      : "text-[26px] md:text-[30px]"
  return (
    <main className="min-h-screen bg-cream text-ink">
      <section
        aria-labelledby="e05-title"
        className="mx-auto w-full max-w-4xl px-6 py-20 md:py-28"
      >
        {/* ——— The title + subtext pair: the move under test ——— */}
        <header className="flex flex-col items-center gap-2 text-center">
          <h2
            id="e05-title"
            className="font-serif-two text-[26px] font-normal tracking-[0.18em] uppercase md:text-[30px]"
          >
            The Rooms
          </h2>
          <p
            className={`${FACE[variant]} ${scriptSize} leading-tight text-maroon`}
          >
            forty-two rooms, nine ways to stay
          </p>
        </header>

        <div aria-hidden="true" className="mx-auto my-12 h-px w-16 bg-ink/30" />

        {/* ——— Real work below: the span of the house ——— */}
        <div className="grid gap-10 md:grid-cols-2">
          {TEASER.map((room) => (
            <article key={room.name} className="flex flex-col gap-4">
              <div className="relative aspect-[4/3] w-full overflow-hidden border border-ink/20">
                <Image
                  src={MEDIA[room.image as keyof typeof MEDIA]}
                  alt={`${room.name}, Marfa, TX`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 400px, 100vw"
                />
              </div>
              {room.imageLabel ? (
                <p className="-mt-2 font-serif-three text-[12px] italic text-ink/50">
                  {room.imageLabel}
                </p>
              ) : null}
              <h3 className="font-serif text-[19px]">{room.name}</h3>
              <p className="font-serif-three text-[14px] leading-relaxed text-ink/85">
                {room.description}
              </p>
              <p className="font-serif-three text-[13px] text-ink/60">
                {room.bed} — {room.sqft} — {room.rate}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
