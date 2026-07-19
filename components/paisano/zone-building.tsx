export function ZoneBuilding() {
  return (
    <section className="bg-cream px-6 py-32 md:px-12 md:py-44">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 md:flex-row md:items-center md:gap-20">
        {/* Figure — the facade portrait with storefront lettering */}
        <figure className="relative w-full md:w-[46%] shrink-0">
          <img
            src="/paisano/facade.png"
            alt="The white Spanish Revival facade of the Hotel Paisano, seen from across the street"
            className="w-full object-cover"
            style={{ aspectRatio: "3 / 4.6" }}
          />
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
            <p className="flex justify-between font-serif-two uppercase tracking-[0.2em] text-cream text-[clamp(0.9rem,1.6vw,1.25rem)]">
              <span>Hotel</span>
              <span>Paisano</span>
            </p>
            <p className="mt-3 flex justify-between font-serif-two uppercase tracking-[0.14em] text-cream text-[clamp(0.6rem,1vw,0.8rem)]">
              {"MARFA AND FAR WEST TEXAS".split(" ").map((word, i) => (
                <span key={i}>{word}</span>
              ))}
            </p>
          </div>
        </figure>

        {/* Text — the history */}
        <div className="mx-auto flex w-full max-w-sm flex-col items-center text-center">
          <h2 className="font-serif-two uppercase tracking-[0.22em] text-ink text-xl">
            The Hotel Paisano
          </h2>

          <p className="mt-8 font-serif-two text-base leading-relaxed text-ink">
            {
              "The Hotel Paisano is the 1930 work of Trost & Trost of El Paso, designed in 1928 and raised by contractor R.E. McKee at the northwest corner of Highland and Texas for $200,000 — one of the firm's four famous West Texas hotels. The building was financed by a community campaign and stock subscriptions under Charles N. Bassett, and dedicated in June 1930 as the town's grand hotel. A quarter century on it took a role in the 1956 picture Giant; the neon sign on the roof has not changed its mind since."
            }
          </p>

          <span
            aria-hidden="true"
            className="mt-10 block h-1.5 w-1.5 rounded-full bg-stone"
          />

          <p className="mt-10 font-serif-two italic tracking-[0.12em] text-[15px] leading-loose text-ink">
            {"Architecture, Trost & Trost"}
            <br />
            Marfa, Texas
            <br />
            1930
          </p>
        </div>
      </div>
    </section>
  )
}
