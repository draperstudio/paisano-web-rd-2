"use client"

import { Preloader } from "@/components/preloader"
import { PRELOADER_ONE } from "@/lib/preloader-configs"

/* Variation 1 preloader, frozen at full composition — for capture / Figma import */
export default function Var1PreloaderPage() {
  return <Preloader {...PRELOADER_ONE} frozen />
}
