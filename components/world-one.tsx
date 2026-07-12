"use client"

/* WORLD ONE — Scenario A1
   Logo: current neon-sign mark, untouched.
   Preloader: Pinyon Script — formal engraver's roundhand (traced to 01's
   oversized-script ref: fills and BLEEDS the frame, letters crop at edges).
   Rooms: Maison Charlotte photo-and-field — photo card, tiny centered italic
   caption UNDER the photo, huge whitespace, letterspaced serif caps.
   Specs: menu-ref slash-lines, not spec grids.
*/

import { useState } from "react"
import Image from "next/image"
import { Preloader } from "./preloader"
import { CurrentMark } from "./current-mark"
import { ROOM_CLASSES, MATCHER_TRIPS, LEDGER, MEDIA } from "@/lib/data"

export function WorldOne() {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="bg-cream text-ink">
      {!loaded && (
        <Preloader
          groundClass="bg-cream text-maroon"
          kicker="Marfa, Texas — Est. 1930"
          lines={[
            {
              text: "Hotel",
              className: "font-script-a1 text-[38vw] -ml-[6vw] -mt-[10vw] -mb-[14vw]",
            },
            {
              text: "Paisano",
              className: "font-script-a1 text-[38vw] ml-[16vw] -mb-[12vw]",
            },
          ]}
          onDone={() => setLoaded(true)}
        />
      )}

      <header className="flex items-center justify-between border-b border-ink/15 px-6 py-5 md:px-12">
        <CurrentMark className="h-6 md:h-7" />
        <nav aria-label="Main" className="flex items-baseline gap-8">
          <span className="hidden font-serif text-[13px] tracking-[0.18em] uppercase text-ink/70 md:inline">
            Rooms
          </span>
          <span className="hidden font-serif text-[13px] tracking-[0.18em] uppercase text-ink/70 md:inline">
            Marfa
          </span>
          <span className="font-serif text-[13px] tracking-[0.18em] uppercase text-ink underline decoration-ink/40 underline-offset-4">
            Book
          </span>
        </nav>
      </header>

      <main>
        {/* ROOM PAGES — Maison Charlotte photo-and-field treatment */}
        <section aria-labelledby="w1-rooms" className="px-6 py-20 md:py-28">
          {/* Centered head, letterspaced serif caps + tiny script-adjacent italic below,
              traced to Maison Charlotte letterhead hierarchy */}
          <div className="mb-20 flex flex-col items-center gap-3 text-center md:mb-28">
            <h1
              id="w1-rooms"
              className="font-serif text-[22px] tracking-[0.28em] uppercase md:text-[26px]"
            >
              The Rooms
            </h1>
            <p className="font-serif text-[15px] italic text-ink/60">
              forty-two rooms, nine ways to stay
            </p>
          </div>

          <div className="mx-auto flex max-w-4xl flex-col gap-24 md:gap-32">
            {ROOM_CLASSES.slice(0, 4).map((room, i) => (
              <article
                key={room.name}
                className={`flex flex-col gap-10 md:flex-row md:items-center md:gap-16 ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Photo card with caption beneath — Maison Charlotte */}
                <figure className="flex w-full flex-col gap-3 md:w-1/2">
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <Image
                      src={MEDIA[room.image as keyof typeof MEDIA]}
                      alt={`${room.name} room`}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                  <figcaption className="text-center font-serif text-[12px] italic text-ink/55">
                    {room.imageLabel
                      ? `${room.name}, Marfa, TX — ${room.imageLabel.toLowerCase()}`
                      : `${room.name}, Marfa, TX`}
                  </figcaption>
                </figure>

                <div className="flex w-full flex-col items-center gap-5 text-center md:w-1/2">
                  {/* Parenthetical numbering — 15's offset-editorial ref */}
                  <p className="font-serif text-[12px] text-ink/50">
                    {"( "}
                    {String(i + 1).padStart(2, "0")}
                    {" )"}
                  </p>
                  <h2 className="font-serif text-[26px] tracking-[0.12em] uppercase md:text-[30px]">
                    {room.name}
                  </h2>
                  <p className="max-w-sm font-serif text-[16px] leading-relaxed text-ink/80">
                    {room.description}
                  </p>
                  {/* Slash-line details — 16's menu ref pattern */}
                  <p className="font-sans text-[11px] tracking-[0.22em] uppercase text-ink/60">
                    {room.bed} / {room.sqft} / sleeps {room.sleeps}
                  </p>
                  <p className="font-serif text-[15px] italic text-maroon">{room.rate}</p>
                  {room.callout ? (
                    <p className="max-w-xs font-serif text-[13px] italic text-ink/55">
                      {room.callout}
                    </p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* WHICH ROOM FOR WHICH TRIP — Travel News maroon treatment:
            parenthetical number + serif heading, offset small images, short captions */}
        <section
          aria-labelledby="w1-matcher"
          className="bg-maroon px-6 py-20 text-cream md:py-28"
        >
          <div className="mx-auto max-w-3xl">
            <div className="mb-16 flex items-baseline justify-center gap-4">
              <span className="font-serif text-[13px] text-cream/60">{"( 01 )"}</span>
              <h2 id="w1-matcher" className="font-serif text-4xl md:text-5xl">
                Which room for which trip
              </h2>
            </div>

            <div className="flex flex-col gap-16 md:gap-20">
              {MATCHER_TRIPS.slice(0, 4).map((m, i) => (
                <div
                  key={m.trip}
                  className={`flex flex-col gap-6 md:flex-row md:items-center md:gap-12 ${
                    i % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="relative aspect-square w-full max-w-[240px] shrink-0 overflow-hidden md:w-[240px]">
                    <Image
                      src={MEDIA[m.image as keyof typeof MEDIA]}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="240px"
                    />
                  </div>
                  <div
                    className={`flex flex-col gap-2 ${i % 2 === 1 ? "md:text-right md:items-end" : ""}`}
                  >
                    <h3 className="font-serif text-xl text-balance md:text-2xl">{m.trip}</h3>
                    <p className="max-w-xs font-sans text-[14px] leading-relaxed text-cream/85">
                      {m.room}. {m.why}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THE LEDGER — menu-ref treatment: centered, wavy rules, italic labels */}
        <section aria-labelledby="w1-ledger" className="px-6 py-20 md:py-28">
          <div className="mx-auto max-w-xl">
            <div className="rule-wave mb-2" aria-hidden="true" />
            <h2
              id="w1-ledger"
              className="py-2 text-center font-sans text-[12px] tracking-[0.3em] uppercase"
            >
              The Ledger
            </h2>
            <div className="rule-wave mb-10" aria-hidden="true" />

            {LEDGER.sections.map((section, si) => (
              <div key={section.title} className="mb-10">
                <h3 className="mb-5 text-center font-serif text-[16px] italic">
                  {section.title}
                </h3>
                <dl className="flex flex-col gap-3">
                  {section.rows.map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-baseline justify-between gap-8"
                    >
                      <dt className="shrink-0 font-sans text-[11px] tracking-[0.22em] uppercase text-ink/80">
                        {label}
                      </dt>
                      <dd className="text-right font-sans text-[11px] tracking-[0.18em] uppercase text-ink">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
                {si < LEDGER.sections.length - 1 ? (
                  <div className="rule-wave mt-10" aria-hidden="true" />
                ) : null}
              </div>
            ))}

            <p className="mt-8 text-center font-serif text-[13px] italic text-ink/55">
              current as of {LEDGER.asOf}
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-ink/15 px-6 py-10 text-center md:px-12">
        <p className="font-serif text-[12px] italic text-ink/55">
          Hotel Paisano — 207 N Highland Ave, Marfa, Texas
        </p>
      </footer>
    </div>
  )
}
