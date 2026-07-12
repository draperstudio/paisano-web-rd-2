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
      className: "font-script-a1 text-[30vw] -ml-[1.5vw] -mt-[6vw] -mb-[11vw]",
    },
    {
      text: "Paisano",
      className: "font-script-a1 text-[30vw] ml-[15vw] -mb-[9vw]",
    },
  ],
}

export const PRELOADER_TWO: PreloaderConfig = {
  groundClass: "bg-maroon text-cream",
  kicker: "Marfa, Texas — Est. 1930",
  lines: [
    {
      text: "Hotel",
      className: "font-script-b text-[28vw] ml-[1vw] -mt-[4vw] -mb-[8vw]",
    },
    {
      text: "Paisano",
      className: "font-script-b text-[28vw] ml-[17vw] -mb-[6vw]",
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
