"use client"

/* WORLD TWO — Scenario B (converged world)
   Logo: the working redraw direction — Mr Dafoe stands in for the neon
   sign's structure with strokes moved toward natural fluid script.
   The preloader IS that same script at frame-bleeding scale — mark and
   moment are one gesture in this world.
   Script elsewhere follows expression 07's actual move: switching MID-LINE
   inside running text — never as a price sticker or floating accent.
   Rooms: editorial spread. Data: receipt/Donica hairline rows.
*/

import { useState } from "react"
import Image from "next/image"
import { Preloader } from "./preloader"
import { ROOM_CLASSES, MATCHER_TRIPS, LEDGER, MEDIA } from "@/lib/data"
import { PRELOADER_TWO } from "@/lib/preloader-configs"

function RedrawnMark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-script-b leading-none ${className}`}>
      Hotel Paisano
    </span>
  )
}

export function WorldTwo({ skipPreloader = false }: { skipPreloader?: boolean }) {
  const [loaded, setLoaded] = useState(skipPreloader)

  return (
    <div className="bg-cream text-ink">
      {!loaded && <Preloader {...PRELOADER_TWO} onDone={() => setLoaded(true)} />}

      <header className="flex items-center justify-between border-b border-ink/15 px-6 py-4 md:px-12">
        <RedrawnMark className="text-3xl text-maroon md:text-4xl" />
        <nav aria-label="Main" className="flex items-baseline gap-8">
          <span className="hidden font-serif-two text-[13px] tracking-[0.18em] uppercase text-ink/70 md:inline">
            Rooms
          </span>
          <span className="hidden font-serif-two text-[13px] tracking-[0.18em] uppercase text-ink/70 md:inline">
            Marfa
          </span>
          <span className="border border-ink/50 px-4 py-2 font-serif-two text-[12px] tracking-[0.2em] uppercase">
            Book
          </span>
        </nav>
      </header>

      <main>
        {/* ROOM PAGES — editorial spread, script mixed in per 07's mid-line move */}
        <section aria-labelledby="w2-rooms" className="py-20 md:py-28">
          <div className="mx-auto mb-16 max-w-2xl px-6 text-center md:mb-24">
            <h1
              id="w2-rooms"
              className="font-serif-two text-3xl leading-snug text-balance md:text-4xl"
            >
              Forty-two rooms in the house, and{" "}
              <span className="font-script-b text-maroon text-[1.35em] leading-none">
                every one
              </span>{" "}
              of them told straight.
            </h1>
          </div>

          <div className="flex flex-col border-t border-ink/15">
            {ROOM_CLASSES.slice(0, 5).map((room) => (
              <article
                key={room.name}
                className="grid grid-cols-1 border-b border-ink/15 md:grid-cols-2"
              >
                <figure className="flex flex-col">
                  <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[460px] md:flex-1">
                    <Image
                      src={MEDIA[room.image as keyof typeof MEDIA]}
                      alt={`${room.name} room`}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                  {room.imageLabel ? (
                    <figcaption className="py-2 text-center font-serif-two text-[12px] italic text-ink/55">
                      {room.imageLabel.toLowerCase()}
                    </figcaption>
                  ) : null}
                </figure>
                <div className="flex flex-col justify-center gap-6 px-6 py-12 md:px-16">
                  <div className="flex flex-col gap-2">
                    <h2 className="font-serif-two text-3xl md:text-[34px]">{room.name}</h2>
                    <p className="font-sans text-[11px] tracking-[0.22em] uppercase text-ink/60">
                      {room.bed} / sleeps {room.sleeps} / {room.sqft}
                    </p>
                  </div>
                  <p className="max-w-md font-serif-two text-[15px] leading-relaxed text-ink/85">
                    {room.description}
                  </p>
                  {/* Receipt-style hairline rows — 16's Donica/receipt refs */}
                  <ul className="flex max-w-md flex-col">
                    {room.features.slice(0, 4).map((f) => (
                      <li
                        key={f}
                        className="border-t border-ink/15 py-2 font-serif-two text-[13px] text-ink/80"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                  {/* Script mixed in — mid-line switch inside a real sentence */}
                  <p className="font-serif-two text-[15px] text-ink/85">
                    Rooms{" "}
                    <span className="mx-1 font-script-b text-maroon text-[1.3em] leading-none">
                      from {room.rate.replace("From ", "").replace(" off-peak", "")}
                    </span>{" "}
                    a night.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* WHICH ROOM FOR WHICH TRIP — menu-ref treatment: centered,
            display serif trip names, slash-line details, wavy rules */}
        <section aria-labelledby="w2-matcher" className="px-6 py-20 md:py-28">
          <div className="mx-auto max-w-xl">
            <div className="rule-wave mb-2" aria-hidden="true" />
            <h2
              id="w2-matcher"
              className="py-2 text-center font-sans text-[12px] tracking-[0.3em] uppercase"
            >
              Which Room for Which Trip
            </h2>
            <div className="rule-wave mb-12" aria-hidden="true" />

            <div className="flex flex-col gap-12">
              {MATCHER_TRIPS.map((m) => (
                <div key={m.trip} className="flex flex-col items-center gap-3 text-center">
                  <h3 className="font-serif-two text-[26px] leading-tight text-balance md:text-[30px]">
                    {m.trip}
                  </h3>
                  <p className="font-sans text-[11px] tracking-[0.22em] uppercase text-maroon">
                    {m.room}
                  </p>
                  <p className="max-w-sm font-serif-two text-[13px] leading-relaxed text-ink/70">
                    {m.why}
                  </p>
                </div>
              ))}
            </div>

            <div className="rule-wave mt-12" aria-hidden="true" />
          </div>
        </section>

        {/* THE LEDGER — receipt register on maroon */}
        <section
          aria-labelledby="w2-ledger"
          className="bg-maroon px-6 py-20 text-cream md:py-28"
        >
          <div className="mx-auto max-w-xl">
            <div className="mb-12 text-center">
              <h2 id="w2-ledger" className="font-script-b text-6xl text-cream md:text-7xl">
                The Ledger
              </h2>
            </div>
            {LEDGER.sections.map((section, si) => (
              <div key={section.title} className="mb-10">
                <h3 className="mb-5 text-center font-serif-two text-[16px] italic text-cream/90">
                  {section.title}
                </h3>
                <dl className="flex flex-col gap-3">
                  {section.rows.map(([label, value]) => (
                    <div key={label} className="flex items-baseline justify-between gap-8">
                      <dt className="shrink-0 font-sans text-[11px] tracking-[0.22em] uppercase text-cream/75">
                        {label}
                      </dt>
                      <dd className="text-right font-sans text-[11px] tracking-[0.18em] uppercase">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
                {si < LEDGER.sections.length - 1 ? (
                  <div className="rule-wave-cream mt-10 opacity-50" aria-hidden="true" />
                ) : null}
              </div>
            ))}
            <p className="mt-8 text-center font-serif-two text-[13px] italic text-cream/60">
              current as of {LEDGER.asOf}
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-ink/15 px-6 py-10 md:px-12">
        <div className="flex flex-col items-center gap-2">
          <RedrawnMark className="text-2xl text-maroon" />
          <p className="font-serif-two text-[12px] italic text-ink/55">
            207 N Highland Ave, Marfa, Texas
          </p>
        </div>
      </footer>
    </div>
  )
}
