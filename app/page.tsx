import type { Metadata } from "next"
import { ZoneArrival } from "@/components/paisano/zone-arrival"
import { ZoneNote } from "@/components/paisano/zone-note"
import { ZoneBuilding } from "@/components/paisano/zone-building"
import { ZoneRoom } from "@/components/paisano/zone-room"

export const metadata: Metadata = {
  title: "Hotel Paisano — Marfa, Texas",
  description:
    "The Hotel Paisano is open through its restoration. The lobby, the bar, the courtyard — at their best. The rooms are 1930 rooms, and the rates say so. Est. 1930, Trost & Trost.",
}

export default function Page() {
  return (
    <main className="bg-cream text-ink">
      <ZoneArrival />
      <ZoneNote />
      <ZoneBuilding />
      <ZoneRoom />
    </main>
  )
}
