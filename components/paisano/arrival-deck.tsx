"use client"

import { useEffect, useState } from "react"

const DECK = [
  {
    src: "/paisano/deck-fountain.png",
    alt: "The tiled fountain at the center of the Hotel Paisano courtyard",
  },
  {
    src: "/paisano/deck-crest.png",
    alt: "The cast-stone crest on the Hotel Paisano facade",
  },
  {
    src: "/paisano/deck-neon.png",
    alt: "The neon sign above the Hotel Paisano roofline",
  },
  {
    src: "/paisano/deck-doorway.png",
    alt: "The arched lounge doorway off the Hotel Paisano lobby",
  },
]

/* Slight misregistration offsets, like a held stack of prints */
const OFFSETS = [
  "translate(0px, 0px) rotate(0deg)",
  "translate(2px, -1px) rotate(0.3deg)",
  "translate(-2px, 1px) rotate(-0.25deg)",
  "translate(1px, 2px) rotate(0.2deg)",
]

export function ArrivalDeck() {
  const [index, setIndex] = useState(0)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduced(mq.matches)
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  useEffect(() => {
    if (reduced) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % DECK.length)
    }, 4200)
    return () => clearInterval(id)
  }, [reduced])

  const active = reduced ? 0 : index

  return (
    <figure className="relative w-full aspect-4/5 overflow-hidden">
      {DECK.map((photo, i) => (
        <img
          key={photo.src}
          src={photo.src || "/placeholder.svg"}
          alt={i === active ? photo.alt : ""}
          aria-hidden={i !== active}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out"
          style={{
            opacity: i === active ? 1 : 0,
            transform: OFFSETS[i],
          }}
        />
      ))}
    </figure>
  )
}
