/* The current neon-sign wordmark, untouched — used in Scenario A worlds.
   Assets are the vectorized "Hotel" and "Paisano" pulls from round one. */

export function CurrentMark({
  className = "h-7",
  inverted = false,
}: {
  className?: string
  inverted?: boolean
}) {
  /* inverted reverses the dark PNG pulls to cream for use on the
     brand-color band, as the ref does with its logo on red. */
  const img = inverted
    ? "h-full w-auto [filter:brightness(0)_invert(0.93)]"
    : "h-full w-auto"
  return (
    <span className={`inline-flex items-end gap-2 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/wordmark-current.png" alt="" className={img} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/wordmark-paisano.png" alt="" className={img} />
      <span className="sr-only">Hotel Paisano</span>
    </span>
  )
}
