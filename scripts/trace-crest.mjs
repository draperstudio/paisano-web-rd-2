/* 26 crest redraw — edge-artifact cleanup trace (round v0 7.12.26)
   Same pipeline as 25's wordmark trace (scripts/trace-wordmark.mjs):
   alpha-threshold to PBM, potrace smooth-curve fit. This executes the
   LOCKED half of 26 ("clean up the edge artifacts"); the "more like the
   references" half stays blocked until the board refs are exported.

   A — faithful: tight fit, keeps the original drawing's every wiggle.
   B — eased:    smoother curve fit — melts stair-step edge artifacts.

   Run: node scripts/trace-crest.mjs
   Output: public/crest-redraw/crest-{a,b}.svg
*/
import sharp from "sharp"
import { execFileSync } from "node:child_process"
import { mkdirSync, writeFileSync } from "node:fs"
import { join } from "node:path"

const ROOT = new URL("..", import.meta.url).pathname
const OUT = join(ROOT, "public/crest-redraw")
mkdirSync(OUT, { recursive: true })

const SRC = "03 expressions/26 crest redraw/explorations/Vector.png"

const VARIANTS = [
  { key: "a", alphamax: 0.55, opttolerance: 0.2 },
  { key: "b", alphamax: 1.0, opttolerance: 0.5 },
]

const img = sharp(join(ROOT, SRC))
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
const rowBytes = Math.ceil(w / 8)
const bits = Buffer.alloc(rowBytes * h)
for (let y = 0; y < h; y++) {
  for (let x = 0; x < w; x++) {
    if (raw[y * w + x] > 128) bits[y * rowBytes + (x >> 3)] |= 0x80 >> (x & 7)
  }
}
const pbm = Buffer.concat([Buffer.from(`P4\n${w} ${h}\n`), bits])
const pbmPath = join(OUT, "crest.pbm")
writeFileSync(pbmPath, pbm)

for (const v of VARIANTS) {
  const svgPath = join(OUT, `crest-${v.key}.svg`)
  execFileSync("potrace", [
    pbmPath,
    "--svg",
    "--output", svgPath,
    "--alphamax", String(v.alphamax),
    "--opttolerance", String(v.opttolerance),
    "--turdsize", "8",
    "--flat",
  ])
  console.log(`traced crest-${v.key}`)
}
console.log("done")
