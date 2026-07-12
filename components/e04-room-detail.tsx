"use client"

/* EXPRESSION 04 — room detail frame (round two, ref-studied pass)
   Ref: refs/asymmetrical-grid-with-centered-typography — the Bowery room
   detail page. Structure traced from the ref:
   - Full-width BRAND-COLOR band up top: script mark left, caps nav with
     diamond separators center, book link right — all reversed in cream.
   - A rooms sub-nav rail below it: every room type in small caps,
     hairline group separators, the active one in the brand color.
   - Main: photograph holds the LEFT ~2/3; the right rail is a centered
     column — room name in letterspaced brand-color serif caps, book
     button, then "Features" as an italic serif header over a short
     brand-color rule, italic serif fact lines stacked beneath.
   All facts from lib/data.ts ROOM_CLASSES — nothing invented.
   The sub-nav is live: clicking a class switches the page, as in the ref. */

import { useState } from "react"
import Image from "next/image"
import { MEDIA, ROOM_CLASSES } from "@/lib/data"
import { CurrentMark } from "./current-mark"

const NAV = ["Stay", "Marfa", "Gatherings", "Guide", "Contact"] as const

export function E04RoomDetail() {
  const [active, setActive] = useState(1) // Queen Historic first — the basic type
  const room = ROOM_CLASSES[active]

  return (
    <main className="flex min-h-screen flex-col bg-cream text-ink">
      {/* ——— The brand-color band ——— */}
      <header className="grid w-full grid-cols-[1fr_auto_1fr] items-center gap-4 bg-maroon px-6 py-3 text-cream">
        <CurrentMark className="h-6" inverted />
        <nav aria-label="Main">
          <ul className="flex items-center gap-5 md:gap-6">
            {NAV.map((item, i) => (
              <li key={item} className="flex items-center gap-5 md:gap-6">
                <a
                  href="#"
                  className="font-serif-two text-[12px] uppercase tracking-[0.2em] text-cream hover:text-cream/70"
                >
                  {item}
                </a>
                {i < NAV.length - 1 ? (
                  <span aria-hidden="true" className="text-[7px] text-cream/70">
                    ◆
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="#"
          className="justify-self-end font-serif-two text-[12px] uppercase tracking-[0.2em] text-cream hover:text-cream/70"
        >
          Book Now
        </a>
      </header>

      {/* ——— The rooms sub-nav rail ——— */}
      <nav aria-label="Room types" className="border-b border-ink/15 px-6 py-3">
        <ul className="flex flex-wrap items-center justify-center gap-x-0 gap-y-2">
          {ROOM_CLASSES.map((r, i) => (
            <li key={`${r.code}-${i}`} className="flex items-center">
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-current={i === active ? "page" : undefined}
                className={`px-3 font-serif-two text-[12px] uppercase tracking-[0.14em] transition-colors ${
                  i === active ? "text-maroon" : "text-ink hover:text-maroon"
                }`}
              >
                {r.name}
              </button>
              {i < ROOM_CLASSES.length - 1 && (i + 1) % 3 === 0 ? (
                <span
                  aria-hidden="true"
                  className="mx-1 h-4 w-px bg-ink/25"
                />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>

      {/* ——— Image left, centered rail right ——— */}
      <section className="grid flex-1 grid-cols-1 md:grid-cols-[68fr_32fr]">
        <div className="relative min-h-[46vh] md:min-h-[70vh]">
          <Image
            src={MEDIA[room.image as keyof typeof MEDIA] || "/placeholder.svg"}
            alt={`${room.name} — ${room.imageLabel}`}
            fill
            priority
            className="object-cover"
            sizes="(min-width: 768px) 68vw, 100vw"
          />
        </div>

        <aside className="flex flex-col items-center gap-7 px-8 py-10 text-center md:py-14">
          <h1 className="font-serif text-[20px] uppercase tracking-[0.18em] text-maroon">
            {room.name}
          </h1>
          <a
            href="#"
            className="bg-maroon px-6 py-2 font-serif-two text-[11px] uppercase tracking-[0.22em] text-cream"
          >
            Book Now
          </a>

          <div className="flex flex-col items-center gap-4">
            <h2 className="font-serif text-[19px] italic text-maroon">
              Features
            </h2>
            <div aria-hidden="true" className="h-px w-24 bg-maroon/70" />
            <ul className="flex flex-col gap-3">
              <li className="font-serif-three text-[14px] italic text-ink/85">
                {room.bed} — sleeps {room.sleeps}
              </li>
              <li className="font-serif-three text-[14px] italic text-ink/85">
                {room.sqft}
              </li>
              {room.features.map((f) => (
                <li
                  key={f}
                  className="font-serif-three text-[14px] italic text-ink/85"
                >
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center gap-4">
            <h2 className="font-serif text-[19px] italic text-maroon">
              The Room
            </h2>
            <div aria-hidden="true" className="h-px w-24 bg-maroon/70" />
            <p className="max-w-[36ch] font-serif-three text-[14px] italic leading-relaxed text-ink/85">
              {room.description}
            </p>
            <p className="font-serif-three text-[13px] text-ink/60">
              {room.rate} · {room.rooms} rooms
            </p>
          </div>
        </aside>
      </section>

      <footer className="flex items-center justify-center gap-6 border-t border-ink/15 px-6 py-3">
        <p className="font-serif-three text-[12px] tracking-[0.1em] text-ink/60">
          Hotel Paisano — 207 N Highland Ave, Marfa, Texas — Est. 1930
        </p>
      </footer>
    </main>
  )
}
