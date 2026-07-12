import Image from "next/image"

/* 27 illustration style — candidate board (round v0 7.12.26)
   Three generated candidates against the Horsey wispy-gestural ref:
   broken contours, no hatching, no fill, one thin line weight.
   Buck judges which (if any) holds the register; the winning recipe
   becomes the style contract that unblocks 23 faded illustration. */

const CANDIDATES = [
  {
    src: "/images/e27/facade-gestural-cream-on-maroon.png",
    alt: "Gestural line sketch of the Paisano facade, cream line on maroon ground",
    label: "A — facade, cream on maroon",
    note: "Loosest of the three; contours break and lift. Reads as the sign's ground color speaking.",
  },
  {
    src: "/images/e27/facade-gestural-maroon-on-cream.png",
    alt: "Gestural line sketch of the Paisano facade, maroon line on cream ground",
    label: "B — facade, maroon on cream",
    note: "Architecturally truest (tower, parapet, five-arch arcade) but the line closes more shapes than the ref does.",
  },
  {
    src: "/images/e27/courtyard-gestural-maroon-on-cream.png",
    alt: "Gestural line sketch of the courtyard fountain, maroon line on cream ground",
    label: "C — courtyard fountain, maroon on cream",
    note: "Between A and B in looseness. Perspective interior — a different deployment class than elevation drawings.",
  },
]

export default function E27Board() {
  return (
    <main className="min-h-screen bg-cream px-6 py-12 md:px-12">
      <header className="mb-10 flex flex-col gap-2">
        <p className="font-serif-two text-[11px] uppercase tracking-[0.3em] text-ink/60">
          27 illustration style — candidate board — round v0 7.12.26
        </p>
        <h1 className="font-serif text-2xl text-ink text-balance">
          Three candidates against the wispy-gestural reference
        </h1>
        <p className="max-w-xl font-serif-three text-[15px] leading-relaxed text-ink/70 text-pretty">
          Judge the line, not the subject: broken contours, air inside forms,
          no hatching, no fill, one thin weight. The winning recipe becomes
          the style contract for every illustration on the site and unblocks
          23 faded illustration.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-3">
        {CANDIDATES.map((c) => (
          <figure key={c.label} className="flex flex-col gap-3">
            <div className="relative aspect-square w-full overflow-hidden border border-ink/15">
              <Image
                src={c.src || "/placeholder.svg"}
                alt={c.alt}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>
            <figcaption className="flex flex-col gap-1">
              <p className="font-serif-two text-[12px] uppercase tracking-[0.2em] text-ink">
                {c.label}
              </p>
              <p className="font-serif-three text-[13px] leading-relaxed text-ink/60 text-pretty">
                {c.note}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </main>
  )
}
