"use client"

/* WORLD TWO — Scenario B
   Logo: the working redraw — the neon sign's structure held, strokes moved
   toward natural fluid script, quieter. Mr Dafoe is the closest free analog
   to the sign's bouncy connected casual script; it stands in as the redraw
   direction until the final vector. The preloader IS this same script at
   2.0+ scale — mark and moment are one gesture in this world.
   Room pages: Maison Charlotte photo-left, field-right treatment.
   Serif: Source Serif. Ground: maroon preloader.
*/

import { useState } from "react"
import Image from "next/image"
import { Preloader } from "./preloader"
import { ROOM_CLASSES, MATCHER_TRIPS, LEDGER, MEDIA } from "@/lib/data"

function RedrawnMark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-script-b leading-none ${className}`}>
      Hotel Paisano
    </span>
  )
}

export function WorldTwo() {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="bg-cream text-ink">
      {!loaded && (
        <Preloader
          groundClass="bg-maroon text-cream"
          kicker="Marfa, Texas — Est. 1930"
          lines={[
            {
              text: "Hotel",
              className: "font-script-b text-[24vw] pl-[8vw] -mb-[5vw]",
            },
            {
              text: "Paisano",
              className: "font-script-b text-[24vw] pl-[30vw]",
            },
          ]}
          onDone={() => setLoaded(true)}
        />
      )}

      <header className="flex items-center justify-between border-b border-ink/10 px-6 py-3 md:px-10">
        <RedrawnMark className="text-3xl text-maroon md:text-4xl" />
        <nav aria-label="Main" className="flex items-center gap-6">
          <span className="hidden font-sans text-[11px] tracking-[0.25em] uppercase text-stone md:inline">
            Rooms
          </span>
          <span className="hidden font-sans text-[11px] tracking-[0.25em] uppercase text-stone md:inline">
            Marfa
          </span>
          <span className="bg-maroon px-4 py-2 font-sans text-[11px] tracking-[0.25em] uppercase text-cream">
            Book Now
          </span>
        </nav>
      </header>

      <main>
        {/* ROOM PAGES — Maison Charlotte photo-left field-right */}
        <section aria-labelledby="w2-rooms" className="py-16 md:py-24">
          <div className="mb-14 px-6 md:px-10">
            <p className="mb-3 font-sans text-[11px] tracking-[0.35em] uppercase text-stone">
              The Rooms
            </p>
            <h1
              id="w2-rooms"
              className="font-serif-two text-4xl leading-tight text-balance md:text-6xl"
            >
              Every room, told straight.
            </h1>
          </div>

          <div className="flex flex-col border-t border-ink/10">
            {ROOM_CLASSES.slice(0, 5).map((room) => (
              <article
                key={room.name}
                className="grid grid-cols-1 border-b border-ink/10 md:grid-cols-2"
              >
                <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[480px]">
                  <Image
                    src={MEDIA[room.image as keyof typeof MEDIA]}
                    alt={`${room.name} room`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                  {room.imageLabel ? (
                    <span className="absolute bottom-3 left-3 bg-cream/90 px-2 py-1 font-sans text-[10px] tracking-[0.2em] uppercase text-stone">
                      {room.imageLabel}
                    </span>
                  ) : null}
                </div>
                <div className="flex flex-col justify-center gap-6 px-6 py-10 md:px-14">
                  <div>
                    <span className="font-script-b text-2xl text-maroon">
                      {room.rate}
                    </span>
                    <h2 className="mt-2 font-serif-two text-3xl md:text-4xl">
                      {room.name}
                    </h2>
                  </div>
                  <p className="max-w-md font-serif-two text-lg leading-relaxed text-ink/85">
                    {room.description}
                  </p>
                  <ul className="flex max-w-md flex-col gap-2">
                    {room.features.slice(0, 4).map((f) => (
                      <li
                        key={f}
                        className="border-b border-dotted border-ink/20 pb-2 font-serif-two text-sm text-ink/80"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-8">
                    <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-stone">
                      {room.bed} · Sleeps {room.sleeps} · {room.sqft}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* WHICH ROOM FOR WHICH TRIP — stacked cards */}
        <section
          aria-labelledby="w2-matcher"
          className="bg-parchment px-6 py-16 md:px-10 md:py-24"
        >
          <div className="mb-12 text-center">
            <p className="mb-3 font-sans text-[11px] tracking-[0.35em] uppercase text-stone">
              Which Room for Which Trip
            </p>
            <h2 id="w2-matcher" className="font-serif-two text-3xl text-balance md:text-5xl">
              What kind of trip is it?
            </h2>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {MATCHER_TRIPS.map((m) => (
              <div key={m.trip} className="flex flex-col gap-4 bg-cream p-7">
                <h3 className="font-script-b text-3xl leading-tight text-maroon">
                  {m.trip}
                </h3>
                <p className="font-serif-two text-sm italic text-stone">{m.detail}</p>
                <div className="mt-auto border-t border-ink/15 pt-4">
                  <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-stone">
                    The Room
                  </p>
                  <p className="mt-1 font-serif-two text-lg">{m.room}</p>
                  <p className="mt-2 font-serif-two text-sm leading-relaxed text-ink/75">
                    {m.why}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* THE LEDGER — on maroon, receipt register */}
        <section
          aria-labelledby="w2-ledger"
          className="bg-maroon px-6 py-16 text-cream md:px-10 md:py-24"
        >
          <div className="mx-auto max-w-2xl">
            <div className="mb-10 text-center">
              <h2 id="w2-ledger" className="font-script-b text-5xl text-cream md:text-6xl">
                The Ledger
              </h2>
              <p className="mt-3 font-sans text-[10px] tracking-[0.25em] uppercase text-cream/60">
                Current as of {LEDGER.asOf}
              </p>
            </div>
            {LEDGER.sections.map((section) => (
              <div key={section.title} className="mb-10">
                <h3 className="mb-4 border-b border-cream/30 pb-2 font-sans text-[11px] tracking-[0.35em] uppercase text-cream/70">
                  {section.title}
                </h3>
                <dl className="flex flex-col gap-3">
                  {section.rows.map(([label, value]) => (
                    <div key={label} className="flex items-baseline justify-between gap-6">
                      <dt className="shrink-0 font-serif-two text-sm text-cream/80">{label}</dt>
                      <dd className="text-right font-serif-two text-sm">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-ink/10 px-6 py-8 md:px-10">
        <div className="flex items-center justify-between">
          <RedrawnMark className="text-2xl text-maroon" />
          <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-stone">
            207 N Highland Ave, Marfa, Texas
          </p>
        </div>
      </footer>
    </div>
  )
}
