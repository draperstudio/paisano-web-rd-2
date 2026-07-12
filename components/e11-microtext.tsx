/* 11 microtext — round v0 7.12.26
   Microtext as layered hierarchy: distinct levels within the micro scale,
   each carrying something real. The hard kill is random/meaningless
   microtext — every string below is sourced from 06 knowledge or lib/data.

   The level system (this round's proposal):
   - M1 · plate/register: typewriter, 10px, wide-tracked upper — locates
     the composition in a sequence (plate no., class code)
   - M2 · metadata: typewriter, 10.5px, key/value — the facts layer
   - M3 · annotation: serif italic, 12px — the human aside, one per
     composition at most
   - M4 · legal/source: 9px tracked upper at lowest contrast — provenance
   Two variations: var-1 runs all four levels on a single room plate;
   var-2 runs a stripped two-level system (M2 + M4) to test how few
   levels still read as "layered."
   Refs shared with 09 (the numeral crops) — same typewriter voice. */

import Image from "next/image"
import { MEDIA, ROOM_CLASSES } from "@/lib/data"

const room = ROOM_CLASSES[1] // Queen Historic — carries the James Dean fact

/* Variation A — the four-level system on one plate. */
export function E11FourLevels() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <div className="mx-auto max-w-2xl px-5 py-10 md:px-0 md:py-16">
        {/* M1 — plate register */}
        <div className="flex items-baseline justify-between pb-2">
          <p className="font-typewriter text-[10px] uppercase tracking-[0.3em] text-ink">
            Plate II — Rooms
          </p>
          <p className="font-typewriter text-[10px] uppercase tracking-[0.3em] text-ink">
            {room.code}
          </p>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={MEDIA.currentDoorsOnePointR5 || "/placeholder.svg"}
            alt="A king room at the Hotel Paisano, French doors open to the light"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 672px, 92vw"
          />
        </div>

        {/* M2 — metadata layer */}
        <dl className="grid grid-cols-2 gap-x-10 gap-y-1 border-b border-ink/20 pb-4 pt-3 md:grid-cols-4">
          {[
            ["Class", room.name],
            ["Bed", room.bed],
            ["Area", room.sqft],
            ["Tariff", room.rate],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="font-typewriter text-[9px] uppercase tracking-[0.22em] text-ink/50">
                {k}
              </dt>
              <dd className="font-typewriter text-[10.5px] tracking-[0.04em] text-ink">
                {v}
              </dd>
            </div>
          ))}
        </dl>

        {/* body scale for contrast — the micro levels need a normal
            level to be micro against */}
        <h1 className="pt-8 font-serif text-2xl text-ink">
          {room.name}
        </h1>
        <p className="max-w-prose pt-3 font-serif text-[15px] leading-relaxed text-ink/85">
          {room.description}
        </p>

        {/* M3 — annotation: one serif-italic aside, keyed to the fact */}
        <p className="max-w-sm pt-6 font-serif text-[12px] italic leading-relaxed text-ink/65">
          Room 223 in this class is the James Dean Room — his room during
          the filming of Giant, kept under the same number.
        </p>

        {/* M4 — provenance line, lowest contrast */}
        <p className="pt-10 font-typewriter text-[9px] uppercase tracking-[0.26em] text-ink/40">
          Photography 7.12.26 — a king room shown — catalog per the 7.12
          room census
        </p>
      </div>
    </main>
  )
}

/* Variation B — stripped two-level system (M2 + M4 only).
   Tests how few levels still read as layered. */
export function E11TwoLevels() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <div className="mx-auto max-w-2xl px-5 py-10 md:px-0 md:py-16">
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={MEDIA.currentBedElevation || "/placeholder.svg"}
            alt="Bed elevation in a king room at the Hotel Paisano"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 672px, 92vw"
          />
        </div>

        {/* M2 — single metadata rail under the image */}
        <div className="flex flex-wrap items-baseline gap-x-8 gap-y-1 border-b border-ink/20 pb-3 pt-3">
          <p className="font-typewriter text-[10.5px] tracking-[0.06em] text-ink">
            {ROOM_CLASSES[2].name}
          </p>
          <p className="font-typewriter text-[10.5px] tracking-[0.06em] text-ink/70">
            {ROOM_CLASSES[2].bed}
          </p>
          <p className="font-typewriter text-[10.5px] tracking-[0.06em] text-ink/70">
            {ROOM_CLASSES[2].sqft}
          </p>
          <p className="font-typewriter text-[10.5px] tracking-[0.06em] text-ink/70">
            Sleeps {ROOM_CLASSES[2].sleeps}
          </p>
          <p className="ml-auto font-typewriter text-[10.5px] tracking-[0.06em] text-ink">
            {ROOM_CLASSES[2].rate}
          </p>
        </div>

        <h1 className="pt-8 font-serif text-2xl text-ink">
          {ROOM_CLASSES[2].name}
        </h1>
        <p className="max-w-prose pt-3 font-serif text-[15px] leading-relaxed text-ink/85">
          {ROOM_CLASSES[2].description}
        </p>

        {/* M4 — provenance */}
        <p className="pt-10 font-typewriter text-[9px] uppercase tracking-[0.26em] text-ink/40">
          Photography 7.12.26 — a king room shown — catalog per the 7.12
          room census
        </p>
      </div>
    </main>
  )
}
