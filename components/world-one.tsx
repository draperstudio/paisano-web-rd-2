"use client"

/* WORLD ONE — Scenario A1
   Logo: current neon-sign mark, untouched.
   Preloader: Pinyon Script — formal engraver's roundhand, deliberately far
   from the sign's bouncy casual script. Cream ground, maroon text.
   Room pages: Frati editorial-spread treatment. Serif: Libre Caslon.
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
              className:
                "font-script-a1 text-[26vw] pl-[6vw] -mb-[7vw]",
            },
            {
              text: "Paisano",
              className: "font-script-a1 text-[26vw] pl-[34vw]",
            },
          ]}
          onDone={() => setLoaded(true)}
        />
      )}

      <header className="flex items-center justify-between border-b border-ink/10 px-6 py-4 md:px-10">
        <CurrentMark className="h-6 md:h-7" />
        <nav aria-label="Main" className="flex items-center gap-6">
          <span className="hidden font-sans text-[11px] tracking-[0.25em] uppercase text-stone md:inline">
            Rooms
          </span>
          <span className="hidden font-sans text-[11px] tracking-[0.25em] uppercase text-stone md:inline">
            Marfa
          </span>
          <span className="border border-maroon px-4 py-2 font-sans text-[11px] tracking-[0.25em] uppercase text-maroon">
            Book Now
          </span>
        </nav>
      </header>

      <main>
        {/* ROOM PAGES — Frati editorial spread treatment */}
        <section aria-labelledby="w1-rooms" className="px-6 py-16 md:px-10 md:py-24">
          <div className="mb-14 flex flex-col gap-3 md:mb-20">
            <p className="font-sans text-[11px] tracking-[0.35em] uppercase text-stone">
              The Rooms
            </p>
            <h1
              id="w1-rooms"
              className="font-serif text-4xl leading-tight text-balance md:text-6xl"
            >
              Forty-two rooms.
              <br />
              <span className="italic">Nine ways to stay.</span>
            </h1>
          </div>

          <div className="flex flex-col gap-20 md:gap-28">
            {ROOM_CLASSES.slice(0, 4).map((room, i) => (
              <article
                key={room.name}
                className={`flex flex-col gap-8 md:flex-row md:items-end md:gap-12 ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden md:w-3/5">
                  <Image
                    src={MEDIA[room.image as keyof typeof MEDIA]}
                    alt={`${room.name} room`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 60vw, 100vw"
                  />
                  {room.imageLabel ? (
                    <span className="absolute bottom-3 left-3 bg-cream/90 px-2 py-1 font-sans text-[10px] tracking-[0.2em] uppercase text-stone">
                      {room.imageLabel}
                    </span>
                  ) : null}
                </div>
                <div className="flex w-full flex-col gap-5 md:w-2/5 md:pb-4">
                  <div className="flex items-baseline gap-4">
                    <span className="font-serif text-sm italic text-stone">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl">{room.name}</h2>
                  </div>
                  <p className="font-serif text-lg leading-relaxed text-ink/85">
                    {room.description}
                  </p>
                  <dl className="grid grid-cols-2 gap-x-6 gap-y-2 border-t border-ink/15 pt-5">
                    <div className="flex flex-col gap-1">
                      <dt className="font-sans text-[10px] tracking-[0.25em] uppercase text-stone">
                        Bed
                      </dt>
                      <dd className="font-serif text-sm">{room.bed}</dd>
                    </div>
                    <div className="flex flex-col gap-1">
                      <dt className="font-sans text-[10px] tracking-[0.25em] uppercase text-stone">
                        Size
                      </dt>
                      <dd className="font-serif text-sm">{room.sqft}</dd>
                    </div>
                    <div className="flex flex-col gap-1">
                      <dt className="font-sans text-[10px] tracking-[0.25em] uppercase text-stone">
                        Sleeps
                      </dt>
                      <dd className="font-serif text-sm">{room.sleeps}</dd>
                    </div>
                    <div className="flex flex-col gap-1">
                      <dt className="font-sans text-[10px] tracking-[0.25em] uppercase text-stone">
                        Rate
                      </dt>
                      <dd className="font-serif text-sm">{room.rate}</dd>
                    </div>
                  </dl>
                  {room.callout ? (
                    <p className="font-serif text-sm italic text-maroon">{room.callout}</p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* WHICH ROOM FOR WHICH TRIP */}
        <section
          aria-labelledby="w1-matcher"
          className="bg-maroon px-6 py-16 text-cream md:px-10 md:py-24"
        >
          <div className="mb-12 flex flex-col gap-3">
            <p className="font-sans text-[11px] tracking-[0.35em] uppercase text-cream/60">
              Which Room for Which Trip
            </p>
            <h2 id="w1-matcher" className="font-serif text-3xl text-balance md:text-5xl">
              Start from the trip. <span className="italic">Land on the room.</span>
            </h2>
          </div>
          <div className="flex flex-col">
            {MATCHER_TRIPS.map((m) => (
              <div
                key={m.trip}
                className="grid grid-cols-1 gap-3 border-t border-cream/20 py-6 md:grid-cols-12 md:gap-8"
              >
                <div className="md:col-span-4">
                  <h3 className="font-serif text-xl md:text-2xl">{m.trip}</h3>
                  <p className="mt-1 font-serif text-sm italic text-cream/60">{m.detail}</p>
                </div>
                <div className="md:col-span-3">
                  <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-cream/60">
                    The Room
                  </p>
                  <p className="mt-1 font-serif text-lg">{m.room}</p>
                </div>
                <div className="md:col-span-5">
                  <p className="font-serif text-base leading-relaxed text-cream/85">{m.why}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* THE LEDGER */}
        <section aria-labelledby="w1-ledger" className="px-6 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-2xl">
            <div className="mb-10 flex items-baseline justify-between border-b-2 border-ink pb-4">
              <h2 id="w1-ledger" className="font-serif text-2xl md:text-3xl">
                The Ledger
              </h2>
              <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-stone">
                Current as of {LEDGER.asOf}
              </p>
            </div>
            {LEDGER.sections.map((section) => (
              <div key={section.title} className="mb-8">
                <h3 className="mb-3 font-sans text-[11px] tracking-[0.35em] uppercase text-maroon">
                  {section.title}
                </h3>
                <dl className="flex flex-col">
                  {section.rows.map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-baseline justify-between gap-6 border-b border-dotted border-ink/25 py-2"
                    >
                      <dt className="shrink-0 font-serif text-sm">{label}</dt>
                      <dd className="text-right font-serif text-sm text-ink/80">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-ink/10 px-6 py-8 md:px-10">
        <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-stone">
          Hotel Paisano — 207 N Highland Ave, Marfa, Texas
        </p>
      </footer>
    </div>
  )
}
