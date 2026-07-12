"use client"

import { Preloader } from "@/components/preloader"
import { TextureGround } from "@/components/texture-ground"
import { PRELOADER_TWO } from "@/lib/preloader-configs"

/* 28 in context — the judgment surface the capture called for:
   01's Scenario B preloader (the 25 trace, current live config) held
   frozen over the textured ground instead of flat maroon. The texture is
   the only changed variable vs /var-2/preloader. */

export default function Page() {
  return (
    <>
      {/* TextureGround is position:relative internally — wrap it to pin
          it full-screen rather than fighting the class order */}
      <div className="fixed inset-0" aria-hidden="true">
        <TextureGround grain="present" tone="maroon" className="h-full w-full" />
      </div>
      <Preloader
        lines={PRELOADER_TWO.lines}
        groundClass="text-cream"
        kicker={PRELOADER_TWO.kicker}
        frozen
      />
    </>
  )
}
