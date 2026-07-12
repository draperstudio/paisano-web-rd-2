/* The current neon-sign wordmark, untouched — used in Scenario A worlds.
   Assets are the vectorized "Hotel" and "Paisano" pulls from round one. */

export function CurrentMark({ className = "h-7" }: { className?: string }) {
  return (
    <span className={`inline-flex items-end gap-2 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/wordmark-current.png" alt="" className="h-full w-auto" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/wordmark-paisano.png" alt="" className="h-full w-auto" />
      <span className="sr-only">Hotel Paisano</span>
    </span>
  )
}
