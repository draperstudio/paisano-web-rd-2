/* Expression 25 — the wordmark redraw candidates.
   Three trace variations derived directly from the sign's own letterforms
   (see scripts/trace-wordmark.mjs): structure, proportions, and letter
   tails are preserved by construction because every path starts from the
   sign pull. What varies is the degree of fluidity in the curve fitting —
   Buck's "more natural, more fluid, better drawn" dial.

   a — faithful: minimal smoothing. Closest to the current drawing;
       kills the sharpest Photoshop-era corner artifacts only.
   b — eased: rounded joins, optimized curves. The middle read.
   c — fluid: maximum smoothing. The far edge of "slightly toward the
       script" — past this it starts competing with the script, which
       is the hard line (25 negative: never becomes the script).

   Rendered as CSS masks so ink color follows currentColor — headers can
   set text-maroon / text-cream / text-ink and the mark follows. */

type Variant = "a" | "b" | "c"

const RATIOS = {
  hotel: "1248 / 408",
  paisano: "1830 / 408",
} as const

export function TracedWord({
  word,
  variant,
  className = "inline-block h-full",
}: {
  word: keyof typeof RATIOS
  variant: Variant
  className?: string
}) {
  const url = `url(/wordmark-redraw/${word}-${variant}.svg)`
  return (
    <span
      aria-hidden="true"
      className={`bg-current ${className}`}
      style={{
        aspectRatio: RATIOS[word],
        WebkitMaskImage: url,
        maskImage: url,
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    />
  )
}

export function TracedMark({
  variant,
  className = "h-7",
}: {
  variant: Variant
  className?: string
}) {
  return (
    <span className={`inline-flex items-end gap-2 ${className}`}>
      <TracedWord word="hotel" variant={variant} />
      <TracedWord word="paisano" variant={variant} />
      <span className="sr-only">Hotel Paisano</span>
    </span>
  )
}
