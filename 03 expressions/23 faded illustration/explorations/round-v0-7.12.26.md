# round v0 — 7.12.26

**Expression:** 23 faded illustration
**Status going in:** unbuilt — was gated on 27 illustration style.

## PROVISIONAL

Built on 27's candidates B and A *before* Buck has locked the illustration
style. The deployment logic is the deliverable here; the drawings are
placeholders for whichever 27 candidate (or re-roll) survives review.
Swapping the asset is a one-line change in
`components/e23-faded-illustration.tsx`.

## What was made

Three deployments at three fade depths:

- **`/e23/var-1` — behind a text moment (8%).** Facade drawing centered
  under a hero-scale claim. Deepest fade: the drawing is felt, not read.
- **`/e23/var-2` — behind working content (12%).** The nine-type room
  index runs over the drawing. Tests the hard case: hairline rows and
  rate figures staying legible over line art.
- **`/e23/var-3` — maroon ground (10%).** Candidate A (cream line on
  maroon) faded under cream type. The sign's polarity as a room-scale
  atmosphere.

## Calls made (agent, for review)

- Fade depths tuned per deployment, not global: text moments take 8%,
  working content can carry 12% because the rows' rhythm dominates.
- The drawing always renders at ~110vmin, centered, object-contain —
  oversized so edges crop softly rather than the drawing floating as a
  stamp. A stamp-scale version is a different (untested) move.
- `pointer-events-none` + `aria-hidden` on the ground layer — decorative,
  never interactive, invisible to screen readers.
- Real data only: the index rows are the 7.12 catalog types and rates.

## Honest read

- var-2 is the proof: if the ledger rows survive over the drawing, the
  move generalizes. They do at 12% — but only barely at the drawing's
  densest passages (the arcade). If Buck wants more drawing presence,
  the content column needs to dodge density, not the fade deepen.
- var-1's kicker line sits over the drawing's tower — legible at 8% but
  it grazes. Optical centering against the drawing is hand-work per
  deployment; no formula.

## Blocked / debts

- Re-verify against 27's locked winner once Buck rules. If the recipe
  changes, regenerate both assets and re-check var-2's density collisions.
