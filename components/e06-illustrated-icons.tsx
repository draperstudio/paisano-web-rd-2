"use client"

/* E06 — illustrated icons
   Small illustration-type icons worked into a real room-detail section,
   used sparingly with framing and small text (Buck's board comment).
   Locks: garnish not feature · few in number · drawn, not interface
   geometry. Negatives: too many (St. George Marguerite) · too playful.
   CALL: the icon set is a generated stand-in in an etched-stationery
   hand — the real set is an asset effort on 05 graphics/to-make.md and
   should share a hand with 27 illustration style. Deployment is the
   axis under test here, not the icons themselves.
   Open axis varied per variation: HOW the garnish deploys —
   var-1 framed row of three under the room block, var-2 a single icon
   beside the section label, var-3 icons inside the receipt register.
*/

import Image from "next/image"
import { ROOM_CLASSES, MEDIA } from "@/lib/data"

type IconName = "doors" | "transom" | "fireplace" | "bath"

function EtchedIcon({
  name,
  size = 40,
  label,
}: {
  name: IconName
  size?: number
  label?: string
}) {
  return (
    <span className="inline-flex flex-col items-center gap-2">
      <Image
        src={`/icons/icon-${name}.png`}
        alt=""
        width={size}
        height={size}
        className="mix-blend-multiply"
      />
      {label ? (
        <span className="font-serif-three text-[11px] tracking-wide text-ink/60">
          {label}
        </span>
      ) : null}
    </span>
  )
}

/* The shared room block — Mezzanine Patio, real facts from the catalog. */
const room = ROOM_CLASSES[0]

function RoomBlock() {
  return (
    <div className="mx-auto max-w-xl">
      <div className="relative aspect-[3/2] w-full overflow-hidden">
        <Image
          src={MEDIA[room.image as keyof typeof MEDIA]}
          alt={`${room.name} room`}
          fill
          className="object-cover"
        />
      </div>
      {room.imageLabel ? (
        <p className="mt-2 font-serif-three text-[11px] italic text-ink/50">
          {room.imageLabel}
        </p>
      ) : null}
      <h2 className="mt-5 font-serif-two text-2xl text-ink">{room.name}</h2>
      <p className="mt-3 font-serif-three text-[14px] leading-relaxed text-ink/80">
        {room.description}
      </p>
    </div>
  )
}

/* Variation 1 — framed garnish row: three icons with small text labels,
   hairline rules above and below, under the room block. */
export function E06GarnishRow() {
  return (
    <main className="min-h-screen bg-cream px-6 py-16 md:py-24">
      <RoomBlock />
      <div className="mx-auto mt-10 max-w-xl border-y border-ink/20 py-6">
        <div className="flex items-start justify-center gap-12">
          <EtchedIcon name="doors" label="Private patio" />
          <EtchedIcon name="fireplace" label="Outdoor fireplace" />
          <EtchedIcon name="bath" label="European bath" />
        </div>
      </div>
      <p className="mx-auto mt-6 max-w-xl text-center font-serif-three text-[13px] text-ink/60">
        {room.bed} — {room.sqft} — {room.rate}
      </p>
    </main>
  )
}

/* Variation 2 — single icon as a section-label garnish: minimum count,
   the icon sits above the small-caps label like a stationery device. */
export function E06SingleDevice() {
  return (
    <main className="min-h-screen bg-cream px-6 py-16 md:py-24">
      <div className="mx-auto mb-10 flex max-w-xl flex-col items-center gap-4">
        <EtchedIcon name="transom" size={56} />
        <p className="font-serif-two text-sm uppercase tracking-[0.3em] text-ink">
          The Rooms
        </p>
        <div className="h-px w-16 bg-ink/25" />
      </div>
      <RoomBlock />
      <p className="mx-auto mt-6 max-w-xl text-center font-serif-three text-[13px] text-ink/60">
        {room.bed} — {room.sqft} — {room.rate}
      </p>
    </main>
  )
}

/* Variation 3 — icons inside the receipt register: each dashed-rule row
   carries a small icon at the left of its label. Tests whether the
   garnish survives inside 16's locked table register. */
const registerRows: { icon: IconName; label: string; value: string }[] = [
  { icon: "doors", label: "Private walled patio", value: "All six rooms" },
  { icon: "fireplace", label: "Outdoor fireplace", value: "On the patio" },
  { icon: "bath", label: "European bath", value: "Tub and shower" },
]

export function E06RegisterIcons() {
  return (
    <main className="min-h-screen bg-cream px-6 py-16 md:py-24">
      <RoomBlock />
      <div className="mx-auto mt-10 max-w-xl">
        <p className="border-b border-dashed border-ink/30 pb-2 text-center font-serif-two text-[12px] uppercase tracking-[0.25em] text-ink/70">
          Room Particulars
        </p>
        {registerRows.map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between border-b border-dashed border-ink/30 py-3"
          >
            <span className="flex items-center gap-3">
              <EtchedIcon name={row.icon} size={26} />
              <span className="font-serif-three text-[13px] text-ink/80">
                {row.label}
              </span>
            </span>
            <span className="font-serif-three text-[13px] text-ink/60">
              {row.value}
            </span>
          </div>
        ))}
        <p className="pt-3 text-right font-serif-three text-[13px] text-ink/60">
          {room.bed} — {room.sqft} — {room.rate}
        </p>
      </div>
    </main>
  )
}
