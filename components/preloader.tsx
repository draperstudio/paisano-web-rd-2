"use client"

import { useEffect, useState } from "react"

type PreloaderProps = {
  /** Lines of the sanctioned word set, rendered staggered top-to-bottom */
  lines: { text: string; className: string }[]
  /** Ground + text colors */
  groundClass: string
  /** Small secondary line, sans, tiny — like the ref's "OUTUBRO 2025" */
  kicker?: string
  onDone: () => void
}

export function Preloader({ lines, groundClass, kicker, onDone }: PreloaderProps) {
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    const hold = setTimeout(() => setExiting(true), 2400)
    const done = setTimeout(() => onDone(), 3000)
    return () => {
      clearTimeout(hold)
      clearTimeout(done)
    }
  }, [onDone])

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-50 overflow-hidden ${groundClass} ${exiting ? "preloader-exit" : ""}`}
    >
      <div className="relative flex h-full w-full flex-col justify-center">
        {lines.map((line, i) => (
          <div
            key={i}
            className={`preloader-word preloader-word-${i + 1} leading-none whitespace-nowrap select-none ${line.className}`}
          >
            {line.text}
          </div>
        ))}
        {/* Kicker sits inside the composition, upper-left third — like the
            ref's "OUTUBRO 2025" floating within the giant script */}
        {kicker ? (
          <div className="preloader-word preloader-word-3 absolute bottom-[14%] left-[8%] font-sans text-[12px] tracking-[0.3em] uppercase">
            {kicker}
          </div>
        ) : null}
      </div>
    </div>
  )
}
