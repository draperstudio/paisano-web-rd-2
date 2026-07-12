/* Single source of truth for each world's preloader composition.
   Used by both the live preloader (tabs / var routes) and the frozen
   capture routes (/var-N/preloader) so what you capture is exactly
   what plays. */

export type PreloaderLine = {
  /** Type line — a word from the sanctioned set in a script face */
  text?: string
  /** Mark line — a word of the 25 traced wordmark (Scenario B only:
      "only the trace tests it," decision 13). Sized via w-* classes;
      height follows the sign's own aspect ratio. */
  mark?: "hotel" | "paisano"
  markVariant?: "a" | "b" | "c"
  className: string
}

export type PreloaderConfig = {
  groundClass: string
  kicker?: string
  lines: PreloaderLine[]
}

export const PRELOADER_ONE: PreloaderConfig = {
  groundClass: "bg-cream text-maroon",
  kicker: "Marfa, Texas — Est. 1930",
  lines: [
    {
      text: "Hotel",
      className: "font-script-a1 text-[30vw] -ml-[1.5vw] -mt-[6vw] -mb-[11vw]",
    },
    {
      text: "Paisano",
      className: "font-script-a1 text-[30vw] ml-[15vw] -mb-[9vw]",
    },
  ],
}

/* Scenario B rebuilt on the 25 trace (round v0 7.12.26-2) — the Great
   Vibes substitute failed the test by definition (decision 13: "only the
   trace tests it"). Variant B (eased) as default until Buck calls the dial.
   Scale: Hotel ~72vw, Paisano ~102vw — the trace at full-frame size,
   Paisano grazing/clipping the right edge only (decision 4: subtle bleed,
   never words half-lost). */
export const PRELOADER_TWO: PreloaderConfig = {
  groundClass: "bg-maroon text-cream",
  kicker: "Marfa, Texas — Est. 1930",
  lines: [
    {
      mark: "hotel",
      markVariant: "b",
      className: "w-[72vw] ml-[2vw] -mt-[2vw] -mb-[3vw]",
    },
    {
      mark: "paisano",
      markVariant: "b",
      className: "w-[97vw] ml-[5vw]",
    },
  ],
}

export const PRELOADER_THREE: PreloaderConfig = {
  groundClass: "bg-wine text-cream",
  kicker: "Marfa, Texas — Est. 1930",
  lines: [
    {
      text: "Paisano",
      className: "font-script-a2 text-[43vw] -ml-[1vw] -my-[9vw]",
    },
  ],
}
