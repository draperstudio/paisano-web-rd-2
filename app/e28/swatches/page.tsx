import { TextureGround } from "@/components/texture-ground"

/* 28 — swatch board in code: the same cycle as the Paper round's swatch
   artboard, now live in the browser at real render scale. Whisper is kept
   for the record even though Buck's live steering ("not enough texture")
   likely kills the low end. */

const SWATCHES = [
  { grain: "whisper", tone: "maroon", label: "01 — whisper · maroon (likely dead per 7.12 steering)" },
  { grain: "present", tone: "maroon", label: "02 — present · maroon (the working level)" },
  { grain: "handled", tone: "maroon", label: "03 — handled · maroon · edge wear" },
  { grain: "present", tone: "wine", label: "04 — present · deep wine (capture: grain nearly vanishes)" },
  { grain: "present", tone: "parchment", label: "05 — present · parchment (V3's cream-ground read)" },
] as const

export default function Page() {
  return (
    <main className="min-h-screen bg-cream px-6 py-16 md:px-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="font-serif text-2xl text-ink">The texture — swatches</h1>
        <p className="mt-2 max-w-xl font-serif-three text-[14px] leading-relaxed text-ink/60">
          Procedural canvas grain in brand color. Grain and tone cycle; the
          construction is one recipe (cloud drift + warp + weft).
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {SWATCHES.map((s) => (
            <figure key={s.label}>
              <TextureGround
                grain={s.grain}
                tone={s.tone}
                className="flex aspect-[16/10] items-end p-5"
              >
                <span className="relative font-script-b text-4xl">Paisano</span>
              </TextureGround>
              <figcaption className="mt-2 font-serif-two text-[10px] uppercase tracking-[0.24em] text-ink/50">
                {s.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </main>
  )
}
