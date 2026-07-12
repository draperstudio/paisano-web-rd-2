/* Single source of truth for each world's preloader composition.
   Used by both the live preloader (tabs / var routes) and the frozen
   capture routes (/var-N/preloader) so what you capture is exactly
   what plays. */

export type PreloaderConfig = {
  groundClass: string
  kicker?: string
  lines: { text: string; className: string }[]
}

export const PRELOADER_ONE: PreloaderConfig = {
  groundClass: "bg-cream text-maroon",
  kicker: "Marfa, Texas — Est. 1930",
  lines: [
    {
      text: "Hotel",
      className: "font-script-a1 text-[38vw] -ml-[6vw] -mt-[10vw] -mb-[14vw]",
    },
    {
      text: "Paisano",
      className: "font-script-a1 text-[38vw] ml-[16vw] -mb-[12vw]",
    },
  ],
}

export const PRELOADER_TWO: PreloaderConfig = {
  groundClass: "bg-maroon text-cream",
  kicker: "Marfa, Texas — Est. 1930",
  lines: [
    {
      text: "Hotel",
      className: "font-script-b text-[36vw] -ml-[8vw] -mt-[6vw] -mb-[10vw]",
    },
    {
      text: "Paisano",
      className: "font-script-b text-[36vw] ml-[12vw] -mb-[8vw]",
    },
  ],
}

export const PRELOADER_THREE: PreloaderConfig = {
  groundClass: "bg-wine text-cream",
  kicker: "Marfa, Texas — Est. 1930",
  lines: [
    {
      text: "Paisano",
      className: "font-script-a2 text-[40vw] ml-[8vw] -my-[8vw]",
    },
  ],
}
