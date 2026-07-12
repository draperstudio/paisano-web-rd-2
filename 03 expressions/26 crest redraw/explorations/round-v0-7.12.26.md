# round v0 — 7.12.26

**Expression:** 26 crest redraw
**Status going in:** unbuilt — graphic asset effort, kin to 25.

## What was executed vs what stays blocked

The spec has two halves:

1. **Edge-artifact cleanup (locked)** — EXECUTED. Same trace pipeline as
   25 (`scripts/trace-crest.mjs`): alpha-threshold to bitmap, potrace
   smooth-curve fit at two settings. Outputs at
   `public/crest-redraw/crest-{a,b}.svg`, recolored to brand maroon.
2. **"More like the references" (the standard)** — BLOCKED. `refs/` is
   empty; the board screenshots were never exported. The doc itself flags
   this. Do not fake the standard from memory of the board — export the
   refs, then run the second pass.

## What was made

Comparison board at `/e26/board`: original vs A (faithful) vs B (eased),
each shown at display size and at small size (the crest lives small).

- **A — faithful** (alphamax 0.55, opttolerance 0.2): keeps the drawing
  exactly; only pixel stair-steps melt.
- **B — eased** (alphamax 1.0, opttolerance 0.5): joins soften one degree —
  the same setting that won on the wordmark (25 variant B), keeping one
  sensibility across both marks (open question in the doc, honored here
  by construction: same pipeline, same settings, same pass).

## Calls made (agent, for review)

- Only two settings, not three: the crest is "not as fucked up" — the
  fluid extreme (25's C) has no case here.
- Recolored the SVG fills to #641D18 so judging happens in brand color.
- The original PNG copied to `public/crest-original.png` for the board.

## Honest read

- At small size, A and B are indistinguishable from the original — which
  is the point: the cleanup buys edge quality without changing the mark.
- At display size, B's ribbon inner curves read slightly calmer. Whether
  that is "more like the references" cannot be judged until the refs exist.

## Blocked / debts

- Export the band references from the Figma board into `refs/`, then run
  the reference-alignment pass (degrees: "a little bit more like" is the
  whole spec — iterate).
- Reconcile with `05 graphics/roadrunner-crest.md` (round-one asset doc).
