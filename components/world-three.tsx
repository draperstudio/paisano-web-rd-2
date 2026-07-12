"use client"

/* WORLD THREE — Scenario A2
   Logo: current neon-sign mark, untouched.
   Preloader: Herr Von Muellerhoff — a thin, fast, pen-drawn script; the
   second "deliberately far" candidate, opposite pole from Pinyon's formal
   engraver's roundhand. Maroon ground.
   Room pages: Bowery-structure treatment — type-to-type tab row, features
   and amenities as designed lists. Serif: EB Garamond.
   Ledger: full-width tabular, in-line section breaks (band 16's other ref).
*/

import { useState } from "react"
import Image from "next/image"
import { Preloader } from "./preloader"
import { CurrentMark } from "./current-mark"
import { ROOM_CLASSES, MATCHER_TRIPS, LEDGER, MEDIA } from "@/lib/data"

export function WorldThree() {
  const [loaded, setLoaded] = useState(false)
  const [activeRoom, setActiveRoom] = useState(0)
  const room = ROOM_CLASSES[activeRoom]

  return (
    <div className="bg-cream text-ink">
      {!loaded && (
        <Preloader
          groundClass="bg-wine text-cream"
          kicker="Marfa, Texas — Est. 1930"
          lines={[
            {
              text: "Paisano",
              className: "font-script-a2 text-[30vw] pl-[4vw]",
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
          <span className="border border-wine px-4 py-2 font-sans text-[11px] tracking-[0.25em] uppercase text-wine">
            Book Now
          </span>
        </nav>
      </header>

      <main>
        {/* ROOM PAGES — Bowery structure: type-to-type tab row + detail */}
        <section aria-labelledby="w3-rooms" className="py-16 md:py-20">
          <div className="mb-10 px-6 md:px-10">
            <p className="mb-3 font-sans text-[11px] tracking-[0.35em] uppercase text-stone">
              The Rooms — 42 rooms, nine classes
            </p>
            <h1
              id="w3-rooms"
              className="font-serif-three text-4xl leading-tight text-balance md:text-5xl"
            >
              Pick a class. Everything true about it is here.
            </h1>
          </div>

          {/* type-to-type tab row */}
          <div
            role="tablist"
            aria-label="Room classes"
            className="flex gap-6 overflow-x-auto border-y border-ink/15 px-6 md:px-10"
          >
            {ROOM_CLASSES.map((r, i) => (
              <button
                key={r.name}
                role="tab"
                aria-selected={activeRoom === i}
                onClick={() => setActiveRoom(i)}
                className={`shrink-0 border-b-2 py-4 font-sans text-[11px] tracking-[0.2em] uppercase transition-colors ${
                  activeRoom === i
                    ? "border-wine text-wine"
                    : "border-transparent text-stone hover:text-ink"
                }`}
              >
                {r.name}
              </button>
            ))}
          </div>

          {/* detail page for the active class */}
          <div className="grid grid-cols-1 gap-10 px-6 pt-12 md:grid-cols-12 md:px-10">
            <div className="md:col-span-7">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={MEDIA[room.image as keyof typeof MEDIA]}
                  alt={`${room.name} room`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 58vw, 100vw"
                />
                {room.imageLabel ? (
                  <span className="absolute bottom-3 left-3 bg-cream/90 px-2 py-1 font-sans text-[10px] tracking-[0.2em] uppercase text-stone">
                    {room.imageLabel}
                  </span>
                ) : null}
              </div>
            </div>
            <div className="flex flex-col gap-7 md:col-span-5">
              <div>
                <h2 className="font-serif-three text-4xl md:text-5xl">{room.name}</h2>
                {room.callout ? (
                  <p className="mt-2 font-serif-three text-base italic text-wine">
                    {room.callout}
                  </p>
                ) : null}
              </div>
              <p className="font-serif-three text-lg leading-relaxed text-ink/85">
                {room.description}
              </p>
              <div>
                <h3 className="mb-3 font-sans text-[11px] tracking-[0.35em] uppercase text-stone">
                  Features
                </h3>
                <ul className="flex flex-col">
                  {room.features.map((f) => (
                    <li
                      key={f}
                      className="border-t border-ink/15 py-2.5 font-serif-three text-sm"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-4 border-y border-ink/15 py-4">
                {[
                  ["Bed", room.bed],
                  ["Rooms", String(room.rooms)],
                  ["Sleeps", room.sleeps],
                  ["Rate", room.rate],
                ].map(([label, value]) => (
                  <div key={label} className="flex flex-col gap-1">
                    <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-stone">
                      {label}
                    </span>
                    <span className="font-serif-three text-sm">{value}</span>
                  </div>
                ))}
              </div>
              <span className="self-start bg-wine px-6 py-3 font-sans text-[11px] tracking-[0.25em] uppercase text-cream">
                Book {room.name}
              </span>
            </div>
          </div>
        </section>

        {/* WHICH ROOM FOR WHICH TRIP — index rows */}
        <section
          aria-labelledby="w3-matcher"
          className="border-t border-ink/10 px-6 py-16 md:px-10 md:py-24"
        >
          <div className="mb-12">
            <p className="mb-3 font-sans text-[11px] tracking-[0.35em] uppercase text-stone">
              Which Room for Which Trip
            </p>
            <h2 id="w3-matcher" className="font-serif-three text-3xl text-balance md:text-4xl">
              The trip decides.
            </h2>
          </div>
          <div className="flex flex-col">
            {MATCHER_TRIPS.map((m, i) => (
              <div
                key={m.trip}
                className="grid grid-cols-1 items-baseline gap-2 border-t border-ink/15 py-5 md:grid-cols-12 md:gap-6"
              >
                <span className="font-serif-three text-sm italic text-stone md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif-three text-xl md:col-span-4">{m.trip}</h3>
                <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-wine md:col-span-3">
                  {m.room}
                </p>
                <p className="font-serif-three text-sm leading-relaxed text-ink/75 md:col-span-4">
                  {m.why}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* THE LEDGER — full-width tabular with in-line section breaks */}
        <section
          aria-labelledby="w3-ledger"
          className="bg-parchment-deep px-6 py-16 md:px-10 md:py-24"
        >
          <div className="mb-10 flex items-baseline justify-between">
            <h2 id="w3-ledger" className="font-serif-three text-3xl md:text-4xl">
              The Ledger
            </h2>
            <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-stone">
              Current as of {LEDGER.asOf}
            </p>
          </div>
          <div className="flex flex-col">
            {LEDGER.sections.map((section) => (
              <div key={section.title}>
                <div className="flex items-center gap-4 pt-8 pb-3">
                  <h3 className="shrink-0 font-sans text-[11px] tracking-[0.35em] uppercase text-wine">
                    {section.title}
                  </h3>
                  <div className="h-px w-full bg-ink/30" aria-hidden="true" />
                </div>
                <dl className="flex flex-col">
                  {section.rows.map(([label, value]) => (
                    <div
                      key={label}
                      className="grid grid-cols-1 gap-1 border-b border-ink/10 py-2.5 md:grid-cols-2 md:gap-8"
                    >
                      <dt className="font-serif-three text-sm">{label}</dt>
                      <dd className="font-serif-three text-sm text-ink/75 md:text-right">
                        {value}
                      </dd>
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
