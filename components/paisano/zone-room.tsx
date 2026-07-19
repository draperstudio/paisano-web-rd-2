export function ZoneRoom() {
  return (
    <section className="bg-cream px-6 pt-8 pb-32 md:px-12 md:pb-44">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 md:flex-row md:items-center md:gap-20">
        {/* Figure — the room render */}
        <div className="flex w-full flex-col items-center md:w-1/2">
          <figure className="w-full max-w-md">
            <img
              src="/paisano/queen-historic.png"
              alt="The Queen Historic room — a queen bed under an oxblood runner, warm walls, window light"
              className="w-full aspect-4/5 object-cover"
            />
            <figcaption className="mt-4 text-center font-serif-two italic text-[15px] text-stone text-pretty">
              Queen Historic, Marfa, TX — render — room renovation lands
              january 2027.
            </figcaption>
          </figure>
        </div>

        {/* Text — the room */}
        <div className="mx-auto flex w-full max-w-sm flex-col items-center text-center md:w-1/2">
          <p className="font-mono text-[11px] tracking-[0.28em] text-stone">
            {"( 01 )"}
          </p>

          <h2 className="mt-8 font-serif-two uppercase tracking-[0.2em] text-ink text-[clamp(1.5rem,3vw,2.2rem)]">
            Queen Historic
          </h2>

          <p className="mt-8 font-serif text-base leading-relaxed text-ink text-pretty">
            The most basic type. One queen, European bath with shower only,
            north-facing courthouse views.
          </p>

          <p className="mt-8 font-sans text-[13px] uppercase tracking-[0.2em] text-ink">
            ONE QUEEN / ~168 SQ FT / SLEEPS 2
          </p>

          <p className="mt-8 font-serif italic text-lg text-maroon">
            From $170
          </p>

          <p className="mt-8 font-serif italic text-[15px] text-ink">
            The James Dean Room lives here — room 223.
          </p>
        </div>
      </div>
    </section>
  )
}
