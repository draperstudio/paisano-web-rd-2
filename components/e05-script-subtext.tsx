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
     E — round two, studied against the Maison Charlotte ref: the move
         lives on a LETTERHEAD. Two sheets side by side — left a deeply
         matted photo with an italic caption line; right the letterhead
         proper: serif caps title high, tiny script line directly under
         it, a vast empty middle, three-column microtext footer at the
         base. Round one skipped the entire composition and judged the
         pair on a bare page.
   Facts: lib/data.ts (06 knowledge). Current photography only. */

import Image from "next/image"
import { MEDIA, ROOM_CLASSES } from "@/lib/data"

export type E05Variant = "a" | "b" | "c" | "d" | "e"

/* ——— Round two: the letterhead (variant E) ———
   Two sheets on a deeper ground; the script subtext does its work in
   situ — a tiny line under the caps title, then silence, then the
   three-column footer. */
function LetterheadVariant() {
  return (
    <main className="min-h-screen bg-ink/10 px-4 py-10 md:py-14">
      <div className="mx-auto grid w-full max-w-5xl gap-6 md:grid-cols-[47fr_53fr]">
        {/* ——— Left sheet: matted photo, italic caption ——— */}
        <div className="flex flex-col bg-cream px-7 pb-6 pt-7 shadow-[0_2px_14px_rgba(0,0,0,0.12)]">
          <div className="relative min-h-[430px] flex-1 overflow-hidden md:min-h-[520px]">
            <Image
              src={MEDIA.lobbyLoungeArch || "/placeholder.svg"}
              alt="The lobby lounge beneath the arch, Hotel Paisano"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 44vw, 92vw"
            />
          </div>
          <p className="pt-4 text-center font-serif-three text-[12px] text-ink/60">
            The lobby, Marfa, TX —{" "}
            <span className="italic">under the arch, lamplight on plaster</span>
          </p>
        </div>

        {/* ——— Right sheet: the letterhead ——— */}
        <div className="flex min-h-[520px] flex-col bg-cream px-8 pb-7 pt-14 shadow-[0_2px_14px_rgba(0,0,0,0.12)] md:min-h-[600px]">
          <header className="flex flex-col items-center gap-1.5 text-center">
            <h2 className="font-serif-two text-[22px] tracking-[0.22em] uppercase text-maroon md:text-[25px]">
              Hotel Paisano
            </h2>
            {/* The move under test: the tiny script line beneath */}
            <p className="font-script-a1 text-[19px] leading-tight text-maroon/90">
              since 1930, the gathering place
            </p>
          </header>

          {/* The vast empty middle is the point — the sheet is for writing */}
          <div className="flex-1" aria-hidden="true" />

          <footer className="grid grid-cols-3 items-start gap-3 text-center">
            <p className="font-serif-two text-[9px] uppercase leading-relaxed tracking-[0.18em] text-maroon/80">
              207 N Highland Ave
              <br />
              Marfa, TX 79843
            </p>
            <p className="font-serif-two text-[9px] uppercase leading-relaxed tracking-[0.18em] text-maroon/80">
              Forty-two rooms
              <br />
              on the courtyard
            </p>
            <p className="font-serif-two text-[9px] uppercase leading-relaxed tracking-[0.18em] text-maroon/80">
              Marfa, Texas
              <br />
              Est. 1930
            </p>
          </footer>
        </div>
      </div>
    </main>
  )
}

const FACE: Record<E05Variant, string> = {
  a: "font-script-a1",
  b: "font-script-a2",
  c: "font-script-b",
  d: "font-script-a1",
  e: "font-script-a1",
}

/* Two real classes for the section body — the span of the house. */
const TEASER = [ROOM_CLASSES[1], ROOM_CLASSES[8]]

export function E05ScriptSubtext({ variant }: { variant: E05Variant }) {
  if (variant === "e") return <LetterheadVariant />
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
