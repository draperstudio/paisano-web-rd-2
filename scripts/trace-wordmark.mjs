/* Expression 25 — wordmark redraw trace pipeline.
   Takes the vectorized sign pulls (wordmark-current.png = "Hotel",
   wordmark-paisano.png = "Paisano"), thresholds the alpha channel to a
   bitmap, and runs potrace at three smoothing settings — three degrees
   of "more natural, more fluid" while the letterforms themselves stay
   the sign's own (structure, proportions, tails preserved by construction).

   A — faithful: minimal smoothing, closest to the current drawing.
   B — eased:    corners rounded, curve optimization on — softer joins.
   C — fluid:    maximum alphamax + loose opttolerance — the far edge of
                 "slightly toward the script" before it stops being the sign.

   Run: node scripts/trace-wordmark.mjs
   Output: public/wordmark-redraw/{hotel,paisano}-{a,b,c}.svg
*/
import sharp from "sharp"
import { execFileSync } from "node:child_process"
import { mkdirSync, writeFileSync } from "node:fs"
import { join } from "node:path"

const ROOT = new URL("..", import.meta.url).pathname
const OUT = join(ROOT, "public/wordmark-redraw")
mkdirSync(OUT, { recursive: true })

const SOURCES = [
  { word: "hotel", file: "public/wordmark-current.png" },
  { word: "paisano", file: "public/wordmark-paisano.png" },
]

/* Three degrees of fluidity. potrace alphamax: 0 = polygon, 1.3334 = max
   smoothing. opttolerance: higher = fewer, longer curves. */
const VARIANTS = [
  { key: "a", alphamax: 0.55, opttolerance: 0.2 },
  { key: "b", alphamax: 1.0, opttolerance: 0.5 },
  { key: "c", alphamax: 1.3334, opttolerance: 1.0 },
]

for (const { word, file } of SOURCES) {
  const img = sharp(join(ROOT, file))
  const { width, height } = await img.metadata()
  // upscale 3x for a cleaner trace, take alpha as the shape
  const raw = await img
    .resize(width * 3, height * 3, { kernel: "lanczos3" })
    .ensureAlpha()
    .extractChannel(3)
    .raw()
    .toBuffer()

  const w = width * 3
  const h = height * 3
  // PBM (P4): 1 = black (ink). Threshold alpha at 128.
  const rowBytes = Math.ceil(w / 8)
  const bits = Buffer.alloc(rowBytes * h)
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (raw[y * w + x] > 128) bits[y * rowBytes + (x >> 3)] |= 0x80 >> (x & 7)
    }
  }
  const pbm = Buffer.concat([Buffer.from(`P4\n${w} ${h}\n`), bits])
  const pbmPath = join(OUT, `${word}.pbm`)
  writeFileSync(pbmPath, pbm)

  for (const v of VARIANTS) {
    const svgPath = join(OUT, `${word}-${v.key}.svg`)
    execFileSync("potrace", [
      pbmPath,
      "--svg",
      "--output", svgPath,
      "--alphamax", String(v.alphamax),
      "--opttolerance", String(v.opttolerance),
      "--turdsize", "8",
      "--flat",
    ])
    console.log(`traced ${word}-${v.key}`)
  }
}
console.log("done")
