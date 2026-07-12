// All facts from 06 knowledge/07 Room Types and Catalog (7.12.26) and 06 dossier.
// Honesty guards: renders labeled, no Juliet balconies marketed, current nine classes only.

export const MEDIA = {
  renderBedroom:
    "https://media.withdraper.com/00a47620-f1af-4fee-b1d3-ff7c75ecf745/85ac447d479a6b7e17d6a049adb9f0aef8c17696cf547e124918a6d88b5cda85",
  renderBathroom:
    "https://media.withdraper.com/00a47620-f1af-4fee-b1d3-ff7c75ecf745/c7b1be17786a62696faf2a2f184deeb4b7ac502545c436058eb4453d86bb918b",
  lobbySeating:
    "https://media.withdraper.com/00a47620-f1af-4fee-b1d3-ff7c75ecf745/91390cacd041a372bd3705bd4aa9ac587bb13c5f6c34c8020183658b29aa753a",
  renderCourtyard:
    "https://media.withdraper.com/00a47620-f1af-4fee-b1d3-ff7c75ecf745/7456c8f1e94ef0b7eb6e25603dc01c0fd98e59a7e4a4b28f3cb93bb68ebee769",
  courtyardFountain:
    "https://media.withdraper.com/00a47620-f1af-4fee-b1d3-ff7c75ecf745/01e0fb63d2646aeb5a9662c6576754d7564becfbf3f8bd6fad214dbc7162083d",
  renderExterior:
    "https://media.withdraper.com/00a47620-f1af-4fee-b1d3-ff7c75ecf745/97cc68bbb873e9da7479000aea12be7b5906fb6157c5ec236b9ae0f04469e24f",
  facadeEntrance:
    "https://media.withdraper.com/00a47620-f1af-4fee-b1d3-ff7c75ecf745/fb35f5b818cebeb87e926a1c6612014c78f973daf87c0f2cc817193bc2aa2799",
  marfaStreet:
    "https://media.withdraper.com/00a47620-f1af-4fee-b1d3-ff7c75ecf745/cd00409dee385d0506b41088c9bdeca4cd3c108a2490bb149ea85a226945dbc8",
  lobbyLoungeArch:
    "https://media.withdraper.com/00a47620-f1af-4fee-b1d3-ff7c75ecf745/d76912c5ee00bca3ab1bdd4b51ea40f9470247e9cf45bdc273fc07ab90f52677",
  lobbyReception:
    "https://media.withdraper.com/00a47620-f1af-4fee-b1d3-ff7c75ecf745/1db32228b3cf0779cb93d50af3665ba5b86333fc18c9c26ae6ea8ea6f5aa8cd1",
  neonSignCloseup:
    "https://media.withdraper.com/00a47620-f1af-4fee-b1d3-ff7c75ecf745/b57356d2f9d83a4925db29dfa35384ac8bd61d082c16f9f4a90692537315e7df",
} as const

export type RoomClass = {
  name: string
  code: string
  bed: string
  rooms: number
  sleeps: string
  sqft: string
  rate: string
  description: string
  features: string[]
  callout?: string
  image: string
  imageLabel?: string
}

export const ROOM_CLASSES: RoomClass[] = [
  {
    name: "Queen Historic",
    code: "QENHIS",
    bed: "One queen",
    rooms: 7,
    sleeps: "2",
    sqft: "~168 sq ft",
    rate: "From $170",
    description:
      "The most basic type. One queen, European bath with shower only, north-facing courthouse views.",
    features: [
      "European bath, shower only",
      "North-facing courthouse views",
      "Room 223 is the James Dean Room",
      "Room 224 shares a courtyard patio with Suite 202",
    ],
    callout: "The James Dean Room lives here — room 223.",
    image: "renderBedroom",
    imageLabel: "Render — room renovation lands January 2027",
  },
  {
    name: "Mezzanine Patio",
    code: "MEZPAT",
    bed: "Queen",
    rooms: 6,
    sleeps: "2",
    sqft: "~210 sq ft",
    rate: "From $190",
    description:
      "The most uniform type in the hotel. Queen bed, European bath, and a private walled patio with an outdoor fireplace. Mezzanine level.",
    features: [
      "Private walled patio",
      "Outdoor fireplace",
      "European bath",
      "Mezzanine level, rooms 101–111",
      "No rollaway",
    ],
    image: "renderCourtyard",
    imageLabel: "Render — room renovation lands January 2027",
  },
  {
    name: "2 Queen Historic",
    code: "2QENHIS",
    bed: "Two queens",
    rooms: 4,
    sleeps: "4",
    sqft: "~355 sq ft",
    rate: "From $200",
    description:
      "Two queens, sleeps four, all rooms take a rollaway. Rooms 245 and 247 sit in a wider bay; room 117 is mezzanine level with a sun porch.",
    features: [
      "Sleeps four",
      "All rooms take a rollaway",
      "Room 117 has a sun porch",
      "Wider bay in rooms 245/247",
    ],
    image: "renderBedroom",
    imageLabel: "Render — room renovation lands January 2027",
  },
  {
    name: "Deluxe Historic",
    code: "DLXHIS",
    bed: "King",
    rooms: 12,
    sleeps: "2",
    sqft: "~180 sq ft",
    rate: "From $190",
    description:
      "The standard king, slightly larger than Queen Historic. Split between the east wing facing Highland Avenue and the courtyard side.",
    features: [
      "King bed",
      "East wing or courtyard side",
      "The largest class in the hotel — twelve rooms",
    ],
    image: "renderBathroom",
    imageLabel: "Render — room renovation lands January 2027",
  },
  {
    name: "Junior Suite",
    code: "JRSTE",
    bed: "King",
    rooms: 4,
    sleeps: "2",
    sqft: "165–355 sq ft",
    rate: "From $230",
    description:
      "King with a sitting area, not a separate bedroom. Outdoor access varies: balconies over the pool or courtyard, or facing the courthouse.",
    features: [
      "King with sitting area",
      "Balconies over pool or courtyard, varies by room",
      "Sizes vary widely",
    ],
    image: "lobbySeating",
  },
  {
    name: "Courtyard Patio",
    code: "JRSTE",
    bed: "King",
    rooms: 2,
    sleeps: "2",
    sqft: "—",
    rate: "From $240",
    description:
      "King with a private patio balcony over the courtyard. Rooms 228 and 230.",
    features: [
      "Private patio balcony over the courtyard",
      "Rooms 228 and 230 only",
    ],
    image: "courtyardFountain",
  },
  {
    name: "1BR Suite",
    code: "1BRSTE",
    bed: "King or two queens",
    rooms: 5,
    sleeps: "2–4",
    sqft: "~500–690 sq ft",
    rate: "From $230",
    description:
      "Separate bedroom plus living and dining with an efficiency kitchen. Room 212 is the Elizabeth Taylor Suite. Rooms 203 and 205 overlook the pool.",
    features: [
      "Separate bedroom",
      "Living and dining room",
      "Room 212 is the Elizabeth Taylor Suite",
      "Pool-overlook suites: 203 and 205",
    ],
    callout: "The Elizabeth Taylor Suite — room 212.",
    image: "lobbyLoungeArch",
  },
  {
    name: "Rock Hudson Suite",
    code: "RHSTE",
    bed: "King",
    rooms: 1,
    sleeps: "2",
    sqft: "~805 sq ft",
    rate: "$345 off-peak",
    description:
      "Room 211, the signature suite. Elevated bedroom, sunroom to a private rooftop terrace, brick fireplace, full kitchen, and wet bar.",
    features: [
      "Private rooftop terrace",
      "Sunroom",
      "Brick fireplace",
      "Full kitchen and wet bar",
      "Freestanding tub",
    ],
    callout: "The signature suite. One room: 211.",
    image: "renderExterior",
    imageLabel: "Render — renovation in progress",
  },
]

export const MATCHER_TRIPS = [
  {
    trip: "The one-night road stop",
    detail: "Passing through on 90, in late, out by ten.",
    room: "Queen Historic",
    why: "The most basic room in the house, courthouse out the window. From $170.",
  },
  {
    trip: "The long Chinati weekend",
    detail: "Three nights, two people, the full circuit.",
    room: "Junior Suite or 1BR Suite",
    why: "A sitting area to come back to. Suites from $230 midweek.",
  },
  {
    trip: "The evening-outside people",
    detail: "Drinks on your own patio, fire going.",
    room: "Mezzanine Patio or Courtyard Patio",
    why: "Private walled patio with an outdoor fireplace, or a king over the courtyard.",
  },
  {
    trip: "Four people, one room",
    detail: "Two couples or a family, keeping it together.",
    room: "2 Queen Historic",
    why: "Two queens, sleeps four, every room takes a rollaway.",
  },
  {
    trip: "The occasion",
    detail: "The anniversary, the proposal, the birthday that matters.",
    room: "Rock Hudson Suite",
    why: "Rooftop terrace, brick fireplace, one room in the hotel. $345 off-peak.",
  },
  {
    trip: "Traveling with the dog",
    detail: "Any of it, plus a dog.",
    room: "Any class",
    why: "Dogs welcome across the hotel. $40 a night, bed and bowls in the room.",
  },
] as const

export const LEDGER = {
  asOf: "July 12, 2026",
  sections: [
    {
      title: "The House",
      rows: [
        ["Rooms", "42, across nine classes"],
        ["Address", "207 N Highland Ave, Marfa, Texas"],
        ["Front desk", "24 hours"],
        ["Check-in", "3:00 PM"],
        ["Named rooms", "James Dean 223 · Elizabeth Taylor 212 · Dennis Hopper 220 · Rock Hudson 211"],
      ],
    },
    {
      title: "Rates",
      rows: [
        ["Standard rooms, weeknight", "$170–190"],
        ["Standard rooms, weekend", "$200 and up"],
        ["Suites, midweek", "$230–250"],
        ["Rock Hudson Suite, off-peak", "$345"],
        ["Tax", "13% (6 state, 7 city), not included"],
        ["Resort fee", "None"],
      ],
    },
    {
      title: "Policies",
      rows: [
        ["Dogs", "Welcome, $40 a night. Bed and bowls in the room."],
        ["Minimum stay", "None. One night is a stay."],
        ["Groups", "Five rooms and up. Four or fewer book as a regular reservation."],
        ["Rollaways", "Available in most classes. Mezzanine Patio takes none."],
      ],
    },
    {
      title: "Seasons",
      rows: [
        ["Highest", "October, Chinati Weekend — roughly 40% above low season"],
        ["Lowest", "January and May"],
        ["Most expensive night", "Saturday, consistently"],
      ],
    },
  ],
} as const
