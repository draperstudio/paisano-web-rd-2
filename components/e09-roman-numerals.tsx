/* 09 roman numerals — round v0 7.12.26
   The standard is the reference (Field Studies Flora field guide), not the
   old explorations: "I like the references a lot... It needs to get closer."
   Traced traits, all deliberate:
   - two-column catalog grid with hairline column + row rules
   - each entry: roman numeral + tracked small-caps label, offset on one line
   - typewriter key/value metadata blocks in two mini-columns
   - small serif body below the metadata
   - letterspaced small-caps masthead with a bottom hairline
   - chapter page: big letterspaced typewriter numeral + title, INDEX with
     bracketed entries, italic serif intro paragraph
   Numeral style here is provisional — 15 numbering system owns the
   brand-wide call; this is its strongest test surface (doc note).
   Facts from 06 knowledge (dossier + building doc). */

import Image from "next/image"
import { MEDIA } from "@/lib/data"

type Entry = {
  numeral: string
  label: string
  sub?: string
  image: string
  alt: string
  meta: [string, string][]
  body: string
}

const ENTRIES: Entry[] = [
  {
    numeral: "I.",
    label: "The Facade",
    sub: "Highland Avenue elevation",
    image: MEDIA.facadeEntrance,
    alt: "The Hotel Paisano facade and arched entrance on Highland Avenue",
    meta: [
      ["Built", "1930"],
      ["Architect", "Henry Trost"],
      ["Address", "207 N Highland"],
      ["Town", "Marfa, Texas"],
    ],
    body: "Henry Trost's last grand hotel for West Texas, opened in June 1930. The facade carries its ornament where the desert light can work on it — cast detail over the arch, brick laid plain everywhere else.",
  },
  {
    numeral: "II.",
    label: "The Courtyard",
    sub: "Fountain and dining terrace",
    image: MEDIA.courtyardFountain,
    alt: "The central courtyard fountain with terrace tables around it",
    meta: [
      ["Position", "Center block"],
      ["Feature", "Tiled fountain"],
      ["Use", "Dining, events"],
      ["Season", "Year round"],
    ],
    body: "The building is organized around this open square — rooms above, arcade below, the fountain holding the middle. Most of the hotel's life passes through it at least once a day.",
  },
  {
    numeral: "III.",
    label: "The Lobby",
    sub: "Seating hall and reception",
    image: MEDIA.lobbySeating,
    alt: "Lobby seating beneath the beamed ceiling",
    meta: [
      ["Ceiling", "Beamed"],
      ["Floor", "Original tile"],
      ["Desk", "Reception"],
      ["Detail", "Trost interior"],
    ],
    body: "Tile, beam, and plaster as Trost set them. The lobby has stayed in continuous use since opening; the furniture changes, the room does not.",
  },
  {
    numeral: "IV.",
    label: "The Sign",
    sub: "Neon, rooftop",
    image: MEDIA.neonSignCloseup,
    alt: "The rooftop neon sign reading Hotel Paisano at dusk",
    meta: [
      ["Medium", "Neon"],
      ["Script", "Connected"],
      ["Sited", "Roofline"],
      ["Read", "Both ways"],
    ],
    body: "The connected script that the wordmark work keeps returning to. It reads against the sky from either end of Highland Avenue, which is most of what a sign in Marfa needs to do.",
  },
  {
    numeral: "V.",
    label: "The Arcade",
    sub: "Lounge arches, ground floor",
    image: MEDIA.lobbyLoungeArch,
    alt: "Arched lounge opening off the lobby",
    meta: [
      ["Form", "Arched bays"],
      ["Faces", "Courtyard"],
      ["Use", "Lounge"],
      ["Light", "Afternoon"],
    ],
    body: "The arches repeat the entrance motif at the scale of a seated room. In the afternoon the courtyard light comes through them sideways and the whole floor goes amber.",
  },
  {
    numeral: "VI.",
    label: "The Street",
    sub: "Highland Avenue, looking north",
    image: MEDIA.marfaStreet,
    alt: "Highland Avenue in Marfa with the courthouse in the distance",
    meta: [
      ["Axis", "North–south"],
      ["Ends at", "Courthouse"],
      ["Walk", "Two blocks"],
      ["Elevation", "4,685 ft"],
    ],
    body: "The hotel sits two blocks from the Presidio County courthouse on the town's main axis. Everything in Marfa is close; the street is the lobby's front porch.",
  },
]

function Masthead() {
  return (
    <header className="flex items-baseline justify-between border-b border-ink/30 px-5 pb-3 pt-5 md:px-8">
      <p className="font-typewriter text-[12px] uppercase tracking-[0.32em] text-ink">
        Hotel Paisano — Field Guide
      </p>
      <p className="font-typewriter text-[11px] uppercase tracking-[0.28em] text-ink/70">
        Menu
      </p>
    </header>
  )
}

/* One catalog entry. bodyFace cycles the typeface axis Buck named. */
function CatalogEntry({
  entry,
  bodyFace,
}: {
  entry: Entry
  bodyFace: string
}) {
  return (
    <article className="flex flex-col">
      {/* numeral + label row — the offset is the ref's move: numeral at
          the left edge, label tabbed in, sub italic pushed to baseline */}
      <div className="flex items-baseline gap-5 pb-3 pt-4">
        <span className="font-typewriter text-[11px] tracking-[0.1em] text-ink">
          {entry.numeral}
        </span>
        <span className="font-typewriter text-[11px] uppercase tracking-[0.26em] text-ink">
          {entry.label}
        </span>
        {entry.sub && (
          <span className={`${bodyFace} text-[12px] italic text-ink/60`}>
            {entry.sub}
          </span>
        )}
      </div>

      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <Image
          src={entry.image || "/placeholder.svg"}
          alt={entry.alt}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 44vw, 92vw"
        />
      </div>

      {/* typewriter metadata block — two mini-columns, keys left values right */}
      <dl className="grid grid-cols-[max-content_1fr] gap-x-6 gap-y-1 pb-3 pt-4">
        {entry.meta.map(([k, v]) => (
          <div key={k} className="contents">
            <dt className="font-typewriter text-[10.5px] uppercase tracking-[0.08em] text-ink/60">
              {k}
            </dt>
            <dd className="font-typewriter text-[10.5px] tracking-[0.06em] text-ink">
              {v}
            </dd>
          </div>
        ))}
      </dl>

      <p className={`${bodyFace} pb-6 text-[13.5px] leading-relaxed text-ink/85`}>
        {entry.body}
      </p>
    </article>
  )
}

/* Variation A + C — the catalog grid. Two columns split by a hairline,
   rows split by hairlines, per the reference. */
export function E09Catalog({
  bodyFace = "font-serif",
}: {
  bodyFace?: string
}) {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <div className="mx-auto max-w-3xl border-x border-ink/20">
        <Masthead />
        <div className="grid grid-cols-1 md:grid-cols-2">
          {ENTRIES.map((entry, i) => (
            <div
              key={entry.numeral}
              className={`border-b border-ink/20 px-5 md:px-6 ${
                i % 2 === 0 ? "md:border-r md:border-ink/20" : ""
              }`}
            >
              <CatalogEntry entry={entry} bodyFace={bodyFace} />
            </div>
          ))}
        </div>
        <footer className="flex items-baseline justify-between px-5 py-3 md:px-8">
          <p className="font-typewriter text-[10px] uppercase tracking-[0.24em] text-ink/60">
            Est. 1930 — Marfa, Texas
          </p>
          <p className={`font-serif text-[11px] italic text-ink/60`}>
            A field guide to the property, in six plates
          </p>
        </footer>
      </div>
    </main>
  )
}

/* Variation B — the chapter page: big letterspaced numeral + title,
   INDEX with bracketed entries, italic serif intro, image below. */
export function E09Chapter() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col border-x border-ink/20">
        <Masthead />

        <div className="flex flex-1 flex-col justify-center px-5 py-16 text-center md:px-8">
          <h1 className="font-typewriter text-4xl tracking-[0.3em] text-ink md:text-5xl">
            II.
            <br />
            <span className="uppercase">The Property</span>
          </h1>
        </div>

        <div className="px-5 pb-6 md:px-8">
          <p className="font-typewriter text-[10.5px] uppercase tracking-[0.2em] text-ink/70">
            Index:
          </p>
          <div className="flex flex-wrap justify-between gap-x-10 gap-y-1 pt-2">
            <p className="font-typewriter text-[10.5px] uppercase tracking-[0.14em] text-ink">
              {"[The facade, the courtyard, the lobby]"}
            </p>
            <p className="font-typewriter text-[10.5px] uppercase tracking-[0.14em] text-ink">
              {"[The sign, the arcade, the street]"}
            </p>
          </div>
        </div>

        <div className="flex items-baseline gap-10 border-t border-ink/20 px-5 pt-4 md:px-8">
          <p className="max-w-[220px] font-typewriter text-[10.5px] uppercase tracking-[0.12em] leading-relaxed text-ink">
            On the building, its rooms, and the street it holds
          </p>
          <p className="font-typewriter text-[10.5px] tracking-[0.08em] text-ink">
            7/12/2026
          </p>
        </div>

        <p className="mx-auto max-w-md px-5 py-10 text-center font-serif text-[17px] italic leading-relaxed text-ink md:px-8">
          Marfa, 2026: Henry Trost&apos;s last grand hotel keeps its own
          catalog — six plates on the building as it stands, drawn against
          what the renovation will return.
        </p>

        <div className="relative aspect-[16/9] w-full">
          <Image
            src={MEDIA.facadeEntrance || "/placeholder.svg"}
            alt="The Hotel Paisano facade at dusk"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 768px, 100vw"
          />
        </div>

        <footer className="flex items-baseline justify-between border-t border-ink/20 px-5 py-3 md:px-8">
          <p className="font-typewriter text-[10px] uppercase tracking-[0.24em] text-ink/60">
            Now reading, ch. II
          </p>
          <p className="font-serif text-[11px] italic text-ink/60">
            The Property — Hotel Paisano — Marfa, Texas
          </p>
        </footer>
      </div>
    </main>
  )
}
