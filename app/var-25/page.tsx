import { CurrentMark } from "@/components/current-mark"
import { TracedMark } from "@/components/traced-mark"

/* Expression 25 — wordmark redraw, round v0 7.12.26.
   Three trace variations (a faithful / b eased / c fluid) shown the only
   way a wordmark can be judged: in the real header, at header size, on
   both grounds the site uses (cream and maroon), next to the current mark.
   For capture / Figma import — no preloader, no tab bar. */

const VARIANTS = [
  {
    key: "a" as const,
    label: "A — faithful",
    note: "minimal smoothing · kills the sharpest digital corner artifacts only · safest read as 'the same sign'",
  },
  {
    key: "b" as const,
    label: "B — eased",
    note: "rounded joins, optimized curves · the middle of the dial · 'more natural, more fluid' without announcing itself",
  },
  {
    key: "c" as const,
    label: "C — fluid",
    note: "maximum smoothing · the far edge of 'slightly toward the script' — anything past this starts competing with 01's script, which is the hard line",
  },
]

function DemoHeader({
  mark,
  ground,
}: {
  mark: React.ReactNode
  ground: "cream" | "maroon"
}) {
  const isMaroon = ground === "maroon"
  return (
    <div
      className={
        isMaroon
          ? "flex items-center justify-between border-b border-cream/20 bg-maroon px-6 py-5 text-cream md:px-12"
          : "flex items-center justify-between border-b border-ink/15 bg-cream px-6 py-5 text-ink md:px-12"
      }
    >
      <span className={isMaroon ? "text-cream" : "text-maroon"}>{mark}</span>
      <span aria-hidden="true" className="flex items-baseline gap-8">
        <span
          className={`hidden font-serif text-[13px] tracking-[0.18em] uppercase md:inline ${isMaroon ? "text-cream/70" : "text-ink/70"}`}
        >
          Rooms
        </span>
        <span
          className={`hidden font-serif text-[13px] tracking-[0.18em] uppercase md:inline ${isMaroon ? "text-cream/70" : "text-ink/70"}`}
        >
          Marfa
        </span>
        <span
          className={`border px-4 py-2 font-serif text-[12px] tracking-[0.2em] uppercase ${isMaroon ? "border-cream/50" : "border-ink/50"}`}
        >
          Book
        </span>
      </span>
    </div>
  )
}

export default function Var25Page() {
  return (
    <main className="bg-cream text-ink">
      <div className="border-b border-ink/15 px-6 py-10 md:px-12">
        <p className="font-sans text-[11px] tracking-[0.22em] uppercase text-ink/60">
          25 wordmark redraw · round v0 · 7.12.26
        </p>
        <h1 className="mt-3 font-serif text-[22px] text-balance md:text-[26px]">
          Three degrees of fluidity, traced from the sign&apos;s own letterforms
        </h1>
        <p className="mt-2 max-w-2xl font-serif text-[14px] leading-relaxed text-ink/70">
          Every path below starts from the neon-sign pull — structure,
          proportions, and letter tails survive by construction. The only
          variable is how far the curve fitting moves toward &quot;naturally
          drawn.&quot; Judged in the real header, on both grounds.
        </p>
      </div>

      {/* Current mark, for reference */}
      <section aria-labelledby="v25-current" className="border-b border-ink/15">
        <div className="px-6 pt-8 pb-4 md:px-12">
          <h2
            id="v25-current"
            className="font-sans text-[11px] tracking-[0.22em] uppercase text-ink/60"
          >
            Current mark — as is
          </h2>
        </div>
        <DemoHeader ground="cream" mark={<CurrentMark className="h-6 md:h-7" />} />
        <DemoHeader ground="maroon" mark={<CurrentMark className="h-6 md:h-7" />} />
      </section>

      {/* The three trace variations */}
      {VARIANTS.map((v) => (
        <section
          key={v.key}
          aria-labelledby={`v25-${v.key}`}
          className="border-b border-ink/15"
        >
          <div className="flex flex-col gap-1 px-6 pt-8 pb-4 md:px-12">
            <h2
              id={`v25-${v.key}`}
              className="font-sans text-[11px] tracking-[0.22em] uppercase text-ink/60"
            >
              {v.label}
            </h2>
            <p className="max-w-2xl font-serif text-[13px] italic text-ink/55">
              {v.note}
            </p>
          </div>
          <DemoHeader
            ground="cream"
            mark={<TracedMark variant={v.key} className="h-6 md:h-7" />}
          />
          <DemoHeader
            ground="maroon"
            mark={<TracedMark variant={v.key} className="h-6 md:h-7" />}
          />
          {/* Large specimen — where the drawing quality actually reads */}
          <div className="flex justify-center bg-cream px-6 py-12 text-maroon md:py-16">
            <TracedMark variant={v.key} className="h-14 md:h-20" />
          </div>
        </section>
      ))}

      <p className="px-6 py-8 font-serif text-[13px] italic text-ink/55 md:px-12">
        The logo-script question stays formally open — this round records
        candidates, not a decision. Nothing here goes to 01 settled.
      </p>
    </main>
  )
}
