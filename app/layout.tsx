import type { Metadata } from "next"
import {
  Archivo,
  Cormorant_Garamond,
  EB_Garamond,
  Italiana,
  Libre_Caslon_Text,
  Pinyon_Script,
  Herr_Von_Muellerhoff,
  Great_Vibes,
  Courier_Prime,
} from "next/font/google"
import "./globals.css"
import { IndexReturn } from "@/components/index-return"

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["400", "500", "600"],
})

const libreCaslon = Libre_Caslon_Text({
  subsets: ["latin"],
  variable: "--font-serif-one",
  weight: ["400", "700"],
  style: ["normal", "italic"],
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif-two",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
})

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-serif-three",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
})

const italiana = Italiana({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "400",
})

const pinyon = Pinyon_Script({
  subsets: ["latin"],
  variable: "--font-script-a1",
  weight: "400",
})

const herrVon = Herr_Von_Muellerhoff({
  subsets: ["latin"],
  variable: "--font-script-a2",
  weight: "400",
})

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-script-b",
  weight: "400",
})

/* 09 roman numerals: the reference's metadata blocks are set in a
   typewriter face — Courier Prime is the restrained stand-in.
   Buck's "try some different typefaces" is the cycling axis. */
const courierPrime = Courier_Prime({
  subsets: ["latin"],
  variable: "--font-typewriter",
  weight: ["400", "700"],
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  title: "Hotel Paisano — Round Two Variations",
  description:
    "Expression variations: preloader script, room pages, which room for which trip, the ledger. Marfa, Texas.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`bg-background ${archivo.variable} ${libreCaslon.variable} ${cormorant.variable} ${ebGaramond.variable} ${italiana.variable} ${pinyon.variable} ${herrVon.variable} ${greatVibes.variable} ${courierPrime.variable}`}
    >
      <body className="font-sans">
        {children}
        <IndexReturn />
      </body>
    </html>
  )
}
