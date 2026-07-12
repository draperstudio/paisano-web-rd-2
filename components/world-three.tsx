"use client"

/* WORLD THREE — Scenario A2
   Logo: current neon-sign mark, untouched.
   Preloader: Herr Von Muellerhoff — thin pen-drawn script, the second
   "deliberately far" pole. Wine ground, single word bleeding the frame.
   Rooms: Bowery structure (type-to-type tab row) with menu-ref detail
   styling. Matcher + Ledger: Donica table — tiny labels once in a header
   row, serif rows over full-width hairlines. No caps chips in rows.
*/

import { useState } from "react"
import Image from "next/image"
import { Preloader } from "./preloader"
import { CurrentMark } from "./current-mark"
import { ROOM_CLASSES, MATCHER_TRIPS, LEDGER, MEDIA } from "@/lib/data"
import { PRELOADER_THREE } from "@/lib/preloader-configs"

export function WorldThree({ skipPreloader = false }: { skipPreloader?: boolean }) {
  const [loaded, setLoaded] = useState(skipPreloader)
  const [activeRoom, setActiveRoom] = useState(0)
  const room = ROOM_CLASSES[activeRoom]

  return (
    <div className="bg-cream text-ink">
      {!loaded && <Preloader {...PRELOADER_THREE} onDone={() => setLoaded(true)} />}

      <header className="flex items-center justify-between border-b border-ink/15 px-6 py-5 md:px-12">
        <CurrentMark className="h-6 md:h-7" />
        <nav aria-label="Main" className="flex items-baseline gap-8">
          <span className="hidden font-serif-three text-[13px] tracking-[0.18em] uppercase text-ink/70 md:inline">
            Rooms
          </span>
          <span className="hidden font-serif-three text-[13px] tracking-[0.18em] uppercase text-ink/70 md:inline">
            Marfa
          </span>
          <span className="border border-ink/50 px-4 py-2 font-serif-three text-[12px] tracking-[0.2em] uppercase">
            Book
          </span>
        </nav>
      </header>

      <main>
        {/* ROOM PAGES — Bowery structure: type-to-type tab row + detail */}
        <section aria-labelledby="w3-rooms" className="py-20 md:py-24">
          <div className="mx-auto mb-14 flex max-w-2xl flex-col items-center gap-3 px-6 text-center">
            <h1
              id="w3-rooms"
              className="font-serif-three text-[22px] tracking-[0.24em] uppercase md:text-[26px]"
            >
              The Rooms
            </h1>
            <p className="font-serif-three text-[15px] italic text-ink/60">
              nine classes, everything true about each
            </p>
          </div>

          {/* type-to-type tab row — the one thing borrowed from Bowery */}
          <div
            role="tablist"
            aria-label="Room classes"
            className="flex justify-start gap-7 overflow-x-auto border-y border-ink/15 px-6 md:justify-center md:px-12"
          >
            {ROOM_CLASSES.map((r, i) => (
              <button
                key={r.name}
                role="tab"
                aria-selected={activeRoom === i}
                onClick={() => setActiveRoom(i)}
                className={`shrink-0 border-b py-4 font-serif-three text-[13px] tracking-[0.14em] uppercase transition-colors ${
                  activeRoom === i
                    ? "border-ink text-ink"
                    : "border-transparent text-ink/45 hover:text-ink"
                }`}
              >
                {r.name}
              </button>
            ))}
          </div>

          {/* detail page for the active class */}
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 px-6 pt-14 md:grid-cols-12 md:px-10">
            <figure className="flex flex-col gap-3 md:col-span-7">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={MEDIA[room.image as keyof typeof MEDIA]}
                  alt={`${room.name} room`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 55vw, 100vw"
                />
              </div>
              <figcaption className="text-center font-serif-three text-[12px] italic text-ink/55">
                {room.imageLabel
                  ? `${room.name} — ${room.imageLabel.toLowerCase()}`
                  : `${room.name}, Marfa, TX`}
              </figcaption>
            </figure>

            <div className="flex flex-col gap-7 md:col-span-5">
              <div className="flex flex-col gap-2">
                <p className="font-serif-three text-[12px] text-ink/50">
                  {"( "}
                  {String(activeRoom + 1).padStart(2, "0")}
                  {" of "}
                  {String(ROOM_CLASSES.length).padStart(2, "0")}
                  {" )"}
                </p>
                <h2 className="font-serif-three text-[28px] md:text-[32px]">
                  {room.name}
                </h2>
                {room.callout ? (
                  <p className="font-serif-three text-[15px] italic text-wine">
                    {room.callout}
                  </p>
                ) : null}
              </div>
              <p className="font-serif-three text-[17px] leading-relaxed text-ink/85">
                {room.description}
              </p>
              {/* Receipt hairline rows */}
              <ul className="flex flex-col">
                {room.features.map((f) => (
                  <li
                    key={f}
                    className="border-t border-ink/15 py-2.5 font-serif-three text-[14px] text-ink/80"
                  >
                    {f}
                  </li>
                ))}
              </ul>
              {/* Slash-line spec — weight, not caps */}
              <p className="font-serif-three text-[14px] font-semibold tracking-wide text-ink/75">
                {room.bed} / sleeps {room.sleeps} / {room.rate.toLowerCase()}
              </p>
              <span className="self-start border border-ink px-6 py-2.5 font-serif-three text-[14px] font-medium tracking-wide">
                Book {room.name}
              </span>
            </div>
          </div>
        </section>

        {/* WHICH ROOM FOR WHICH TRIP — Donica table: labels once, serif rows,
            full-width hairlines, no caps chips */}
        <section
          aria-labelledby="w3-matcher"
          className="border-t border-ink/15 px-6 py-20 md:px-12 md:py-28"
        >
          <div className="mx-auto max-w-4xl">
            <h2
              id="w3-matcher"
              className="mb-14 font-serif-three text-3xl leading-snug text-balance md:text-4xl"
            >
              Start from the trip, and the room follows.
            </h2>

            <div role="table" aria-label="Which room for which trip">
              <div
                role="row"
                className="grid grid-cols-12 gap-4 pb-2 md:gap-8"
              >
                <span role="columnheader" className="col-span-5 font-serif-three text-[13px] font-semibold text-wine md:col-span-4">
                  The Trip
                </span>
                <span role="columnheader" className="col-span-3 font-serif-three text-[13px] font-semibold text-wine">
                  The Room
                </span>
                <span role="columnheader" className="col-span-4 font-serif-three text-[13px] font-semibold text-wine md:col-span-5">
                  Why
                </span>
              </div>
              {MATCHER_TRIPS.map((m) => (
                <div
                  key={m.trip}
                  role="row"
                  className="grid grid-cols-12 items-baseline gap-4 border-t border-ink/25 py-4 md:gap-8"
                >
                  <span role="cell" className="col-span-5 font-serif-three text-[16px] md:col-span-4 md:text-[17px]">
                    {m.trip}
                  </span>
                  <span role="cell" className="col-span-3 font-serif-three text-[15px] italic text-ink/75">
                    {m.room}
                  </span>
                  <span role="cell" className="col-span-4 font-serif-three text-[14px] leading-relaxed text-ink/70 md:col-span-5">
                    {m.why}
                  </span>
                </div>
              ))}
              <div className="border-t border-ink/25" aria-hidden="true" />
            </div>
          </div>
        </section>

        {/* THE LEDGER — receipt take, traced from 16's tabular-receipt ref:
            narrow column, serif throughout, label left / value right,
            dashed rules as the only section breaks, no grid chrome */}
        <section
          aria-labelledby="w3-ledger"
          className="border-t border-ink/15 px-6 py-20 md:px-12 md:py-28"
        >
          <div className="mx-auto max-w-xl">
            <div className="mb-12 flex flex-col gap-1">
              <h2 id="w3-ledger" className="font-serif-three text-[26px]">
                The Ledger
              </h2>
              <p className="font-serif-three text-[15px] text-ink/70">
                Hotel Paisano, Marfa, Texas
              </p>
              <p className="font-serif-three text-[15px] text-ink/70">
                current as of {LEDGER.asOf}
              </p>
            </div>
            <div className="flex flex-col gap-10">
              {LEDGER.sections.map((section, i) => (
                <div key={section.title} className="flex flex-col gap-4">
                  {i > 0 ? (
                    <div
                      className="border-t border-dashed border-ink/40"
                      aria-hidden="true"
                    />
                  ) : null}
                  <p className="font-serif-three text-[17px]">{section.title}</p>
                  <dl className="flex flex-col gap-2.5">
                    {section.rows.map(([label, value]) => (
                      <div
                        key={label}
                        className="flex items-baseline justify-between gap-6"
                      >
                        <dt className="shrink-0 font-serif-three text-[16px]">
                          {label}
                        </dt>
                        <dd className="text-right font-serif-three text-[16px] text-ink/80">
                          {value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
              <div
                className="border-t border-dashed border-ink/40"
                aria-hidden="true"
              />
              {/* CALL: "front desk, any hour" removed — 24-hour desk is a finished-state
                  fact per the dossier's hard-truth note; current hours unconfirmed. */}
              <p className="font-serif-three text-[15px] text-ink/70">
                207 N Highland Ave, Marfa, Texas
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-ink/15 px-6 py-10 text-center md:px-12">
        <p className="font-serif-three text-[12px] italic text-ink/55">
          Hotel Paisano — 207 N Highland Ave, Marfa, Texas
        </p>
      </footer>
    </div>
  )
}
