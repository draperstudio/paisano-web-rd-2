/* 28 THE TEXTURE — the canvas ground, in code.
   Ports the Paper round's procedural build (paper-1, 7.12.26) into the
   codebase so 01 and 07 can be judged in the browser, not just in boards.

   Construction (same recipe as the Paper build):
   - base: brand color (maroon #641D18 per settled; wine optional)
   - cloud drift: low-frequency turbulence — the sun-faded dye wander,
     the layer the capture called "the part that works"
   - warp/weft: two anisotropic high-frequency layers (stretched X and Y)
     approximating thread structure
   Grain runs PRESENT by default — Buck's live steering: whisper "doesn't
   look like enough texture." Whisper kept only as a swatch for the record.

   Known limit (from the capture, still true in code): procedural noise
   reads linen/paper at close zoom, not coarse canvas. If Buck wants the
   ref's physical cloth, the fallback is a recolored canvas scan. */

type Grain = "whisper" | "present" | "handled"
type Tone = "maroon" | "wine" | "parchment"

const TONES: Record<Tone, { base: string; text: string }> = {
  maroon: { base: "#641D18", text: "text-cream" },
  wine: { base: "#42101b", text: "text-cream" },
  parchment: { base: "#f0ebe0", text: "text-maroon" },
}

/* Opacity levels per grain read. "handled" adds edge wear via a vignette. */
const LEVELS: Record<Grain, { cloud: number; weave: number }> = {
  whisper: { cloud: 0.1, weave: 0.05 },
  present: { cloud: 0.22, weave: 0.12 },
  handled: { cloud: 0.28, weave: 0.14 },
}

function noiseUri(fx: number, fy: number, seed: number) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='${fx} ${fy}' numOctaves='2' seed='${seed}' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.9 0'/></filter><rect width='300' height='300' filter='url(%23n)'/></svg>`
  return `url("data:image/svg+xml,${svg}")`
}

export function TextureGround({
  grain = "present",
  tone = "maroon",
  className = "",
  children,
}: {
  grain?: Grain
  tone?: Tone
  className?: string
  children?: React.ReactNode
}) {
  const { base, text } = TONES[tone]
  const { cloud, weave } = LEVELS[grain]

  return (
    <div
      className={`relative overflow-hidden ${text} ${className}`}
      style={{ backgroundColor: base }}
    >
      {/* Cloud drift — the dye-fade wander (soft-light, large scale) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: noiseUri(0.008, 0.008, 7),
          backgroundSize: "900px 900px",
          opacity: cloud,
          mixBlendMode: "soft-light",
        }}
      />
      {/* Warp — threads running vertical (stretched Y frequency) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: noiseUri(0.9, 0.08, 3),
          backgroundSize: "300px 300px",
          opacity: weave,
          mixBlendMode: "overlay",
        }}
      />
      {/* Weft — threads running horizontal (stretched X frequency) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: noiseUri(0.08, 0.9, 11),
          backgroundSize: "300px 300px",
          opacity: weave,
          mixBlendMode: "overlay",
        }}
      />
      {/* Edge wear — handled only: a quiet vignette, no glowing bars */}
      {grain === "handled" && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 120% 100% at 50% 50%, transparent 62%, rgba(0,0,0,0.18) 100%)",
          }}
        />
      )}
      {children}
    </div>
  )
}
