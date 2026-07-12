"use client"

import { Preloader } from "@/components/preloader"
import { PRELOADER_THREE } from "@/lib/preloader-configs"

/* Variation 3 preloader, frozen at full composition — for capture / Figma import */
export default function Var3PreloaderPage() {
  return <Preloader {...PRELOADER_THREE} frozen />
}
