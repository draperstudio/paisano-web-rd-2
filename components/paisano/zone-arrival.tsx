import { ArrivalDeck } from "./arrival-deck"

export function ZoneArrival() {
  return (
    <section className="relative bg-cream px-6 pt-24 pb-36 md:pt-32 md:pb-44">
      {/* Archive plate label, top corner */}
      <p className="absolute top-6 left-6 font-mono text-[10px] uppercase tracking-[0.28em] text-stone md:top-8 md:left-10">
        {"( B2 — Cycling ephemera )"}
      </p>

      <div className="mx-auto flex w-full max-w-md flex-col items-center text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-ink">
          Marfa, Texas
        </p>

        <h1 className="mt-6 font-script-a1 text-maroon leading-none text-[clamp(3.5rem,8vw,5.5rem)] text-balance">
          Hotel Paisano
        </h1>

        <div className="mt-12 w-full max-w-sm">
          <ArrivalDeck />
        </div>

        <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.28em] text-ink">
          {"EST. 1930 · TROST & TROST"}
        </p>

        <a
          href="#reserve"
          className="mt-12 font-mono text-[11px] uppercase tracking-[0.28em] text-maroon hover:opacity-70 transition-opacity"
        >
          Reserve a room
        </a>
      </div>
    </section>
  )
}
