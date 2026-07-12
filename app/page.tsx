"use client"

import { useState } from "react"
import { WorldOne } from "@/components/world-one"
import { WorldTwo } from "@/components/world-two"
import { WorldThree } from "@/components/world-three"

const TABS = [
  { id: "one", label: "Var. 1" },
  { id: "two", label: "Var. 2" },
  { id: "three", label: "Var. 3" },
] as const

type TabId = (typeof TABS)[number]["id"]

export default function Page() {
  const [tab, setTab] = useState<TabId>("one")

  return (
    <div className="min-h-screen">
      <div
        role="tablist"
        aria-label="Variation tabs"
        className="fixed top-0 left-0 right-0 z-100 flex h-6 items-stretch justify-center gap-6 border-b border-ink/10 bg-cream/95 backdrop-blur-sm"
      >
        {TABS.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={tab === t.id}
            onClick={() => setTab(t.id)}
            className={`font-sans text-[10px] tracking-[0.25em] uppercase transition-colors ${
              tab === t.id ? "text-ink" : "text-stone hover:text-ink"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="pt-6">
        {tab === "one" && <WorldOne key="one" />}
        {tab === "two" && <WorldTwo key="two" />}
        {tab === "three" && <WorldThree key="three" />}
      </div>
    </div>
  )
}
