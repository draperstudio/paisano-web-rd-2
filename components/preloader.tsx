"use client"

import { useEffect, useState } from "react"
import { TracedWord } from "./traced-mark"
import type { PreloaderLine } from "@/lib/preloader-configs"

type PreloaderProps = {
  /** Lines of the sanctioned word set — script type or 25-traced mark */
  lines: PreloaderLine[]
  /** Ground + text colors */
  groundClass: string
  /** Small secondary line, sans, tiny — like the ref's "OUTUBRO 2025" */
  kicker?: string
  /** Frozen: no timers, no exit, no entry animation — holds the full
      composition indefinitely (for capture / Figma import) */
  frozen?: boolean
  onDone?: () => void
}

export function Preloader({ lines, groundClass, kicker, frozen = false, onDone }: PreloaderProps) {
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    if (frozen) return
    const hold = setTimeout(() => setExiting(true), 2400)
    const done = setTimeout(() => onDone?.(), 3000)
    return () => {
      clearTimeout(hold)
      clearTimeout(done)
    }
  }, [onDone, frozen])

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-50 overflow-hidden ${groundClass} ${exiting ? "preloader-exit" : ""} ${frozen ? "preloader-frozen" : ""}`}
    >
      <div className="relative flex h-full w-full flex-col justify-center">
        {lines.map((line, i) => (
          <div
            key={i}
            className={`preloader-word preloader-word-${i + 1} leading-none whitespace-nowrap select-none ${line.className}`}
          >
            {line.mark ? (
              <TracedWord
                word={line.mark}
                variant={line.markVariant ?? "b"}
                className="block w-full"
              />
            ) : (
              line.text
            )}
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
