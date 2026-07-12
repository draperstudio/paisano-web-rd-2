import Image from "next/image"

/* 26 crest redraw — cleanup board (round v0 7.12.26)
   Executes the LOCKED half only: edge-artifact cleanup via the same
   trace pipeline as 25. The "more like the references" half is BLOCKED —
   refs/ is empty (board screenshots were never exported).
   Original vs two trace settings, at display size and at detail size. */

const ROWS = [
  {
    src: "/crest-redraw/crest-a.svg",
    label: "A — faithful trace",
    note: "Tight curve fit. Keeps the drawing exactly; only the stair-step pixel edges melt.",
  },
  {
    src: "/crest-redraw/crest-b.svg",
    label: "B — eased trace",
    note: "Smoother fit. Joins soften slightly — the same degree that won on the wordmark (25 variant B).",
  },
]

export default function E26Board() {
  return (
    <main className="min-h-screen bg-cream px-6 py-12 md:px-12">
      <header className="mb-10 flex flex-col gap-2">
        <p className="font-serif-two text-[11px] uppercase tracking-[0.3em] text-ink/60">
          26 crest redraw — cleanup board — round v0 7.12.26
        </p>
        <h1 className="font-serif text-2xl text-ink text-balance">
          The crest, retraced: original against two cleanup settings
        </h1>
        <p className="max-w-xl font-serif-three text-[15px] leading-relaxed text-ink/70 text-pretty">
          Edge-artifact cleanup only — the locked half of the spec. The
          &ldquo;more like the references&rdquo; half is blocked until the
          board references are exported into the folder. Judge at both
          sizes: the crest lives small.
        </p>
      </header>

      <div className="flex flex-col gap-12">
        {/* Original for reference */}
        <section className="flex flex-col gap-3">
          <p className="font-serif-two text-[12px] uppercase tracking-[0.2em] text-ink">
            Original (current asset)
          </p>
          <div className="flex items-end gap-10">
            <div className="relative h-40 w-72">
              <Image
                src="/crest-original.png"
                alt="The current Paisano crest: a P monogram in an oval frame with flanking ribbon scrolls"
                fill
                className="object-contain object-left-bottom"
              />
            </div>
            <div className="relative h-10 w-20">
              <Image
                src="/crest-original.png"
                alt=""
                aria-hidden="true"
                fill
                className="object-contain object-left-bottom"
              />
            </div>
          </div>
        </section>

        {ROWS.map((r) => (
          <section key={r.label} className="flex flex-col gap-3">
            <p className="font-serif-two text-[12px] uppercase tracking-[0.2em] text-ink">
              {r.label}
            </p>
            <div className="flex items-end gap-10">
              <div className="relative h-40 w-72">
                <Image
                  src={r.src || "/placeholder.svg"}
                  alt={`Retraced crest, ${r.label}`}
                  fill
                  className="object-contain object-left-bottom"
                />
              </div>
              <div className="relative h-10 w-20">
                <Image
                  src={r.src || "/placeholder.svg"}
                  alt=""
                  aria-hidden="true"
                  fill
                  className="object-contain object-left-bottom"
                />
              </div>
            </div>
            <p className="max-w-md font-serif-three text-[13px] leading-relaxed text-ink/60 text-pretty">
              {r.note}
            </p>
          </section>
        ))}
      </div>
    </main>
  )
}
