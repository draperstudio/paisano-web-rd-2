"use client"

import { Preloader } from "@/components/preloader"
import { PRELOADER_TWO } from "@/lib/preloader-configs"

/* Variation 2 preloader, frozen at full composition — for capture / Figma import */
export default function Var2PreloaderPage() {
  return <Preloader {...PRELOADER_TWO} frozen />
}
