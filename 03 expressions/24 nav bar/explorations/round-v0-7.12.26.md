# Round — v0 — 7.12.26

**Expression:** 24 nav bar
**Route:** /e24/rip (single rip board — six live bars stacked, labeled I–VI)
**Code:** components/e24-nav-bar.tsx

## What was tried

The band is a quarry ("rip variants"), so instead of one-per-route this
round ships a rip board: six nav forms rendered full-width at real scale
on one page, each labeled with a microtext caption so the read is proofs
down a page. All bars are live — real links to the three world routes.

- **I — Trace bar.** 25 trace left, links right, hairline foot. The
  working world-two form promoted to a bar of its own.
- **II — Split with center mark.** Two links left, trace centered, one
  link + "Marfa, TX" place passenger right. The heritage study's form
  with the trace standing in for the crest.
- **III — Ceremonial stack.** "Established 1930" kicker, serif "The
  Paisano" large, links under a hairline with diamond interpuncts —
  straight from the kept ceremonial study.
- **IV — Maroon band.** Trace in cream on maroon, links right, address
  passenger at whisper scale.
- **V — Whisper bar.** Serif mark at 17px, everything hushed, real
  coordinates as the right-edge passenger (12's data rule).
- **VI — Plate.** Trace on a maroon plate set flush into a cream bar —
  the plate study's move without the book-now button.

## Calls made

- Both wordmark treatments appear (trace and serif) — the logo-script
  question is standing, so the board argues both rather than pre-deciding.
- No invented destinations: Stay/Marfa/Gatherings map to the three world
  routes that exist. No book-now CTA — booking isn't built and a dead
  button is a lie.
- Microtext passengers carry only real data: coordinates, address,
  "Marfa, TX," "Established 1930."
- Fixed a font-class bug in the process: `font-serif-one` isn't a
  generated utility (the token maps to `font-serif`) — III and V were
  silently falling back to sans before the fix.

## Open for Buck

- Which forms survive to pair-testing with the heroes (03) — the doc's
  open question about pair-locking vs independent cycling is untouched.
- Trace vs serif in the bar — this board is the side-by-side for that
  standing question at nav scale.
- Whether passengers (address/coordinates) earn their seat at bar scale
  or read as clutter.
