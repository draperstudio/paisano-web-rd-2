# Round — v0 — 7.12.26 — 2 (live record, written at the moment of making)

The Scenario B revisit promised in the backfilled record. 25's trace now exists (see 25's `round-v0-7.12.26-2.md`), so decision 13's condition is met: the trace, not a substitute, finally tests B.

## The set

One rebuild: var 2's preloader (`/var-2/preloader` frozen, live on entry at `/var-2`), Great Vibes substitute replaced with the 25 traced wordmark, variant B (eased) as the default until Buck calls the dial.

- **Composition:** "Hotel" at 72vw width, "Paisano" at 97vw, staggered, maroon ground / cream lettering, kicker unchanged ("Marfa, Texas — Est. 1930").
- **Mechanics:** `PreloaderLine` type extended in `lib/preloader-configs.ts` — a line can now be `text` (script face) or `mark` (25 trace, any variant). The frozen-composition pattern holds; nothing forked.
- **World coherence:** world-two's header and footer marks also switched to `TracedMark` variant B — mark and moment are one gesture in this world, now literally the same paths.

## Tried / worked / failed

- **Worked:** the trace at frame scale. The sign's own letterforms hold up at ~25vw letter height — the tails (H's sweep, the l's, the final o's tail) read as drawn features, not artifacts. This is evidence the Great Vibes build could never produce: B's question is whether *the sign* can be the oversized moment, and at this scale it can.
- **Worked:** decision 4 calibration. First pass ran Paisano at 102vw + 8vw offset — the final "o" went half-lost off the right edge, over the line. Pulled to 97vw + 5vw: the o's tail grazes and slightly clips. That is the boundary made concrete: **~5vw of total overflow is a graze; ~10vw loses a letter.**
- **Difference from the script worlds:** the trace is upright, looped, sign-painterly — it does not read as an engraver's script the way Pinyon does in var 1. B at frame scale is a different animal from A's "expressive typographic moment": it reads as *the building's sign filling the screen*, which is exactly Scenario B's premise (mark = moment). The two scenarios now genuinely diverge instead of being two fonts.

## Preserve

- The extended `PreloaderLine` (text | mark) — any future world can put either type or trace in the frame without touching the component again.
- The calibration finding: subtle bleed = total overflow around 5vw at these scales.
- Variant-B-as-default with the variant switchable in one config field — Buck's dial pick is a one-line change.

## Avoid

- Re-introducing any substitute face for B — the pathway is closed now that the trace exists; there is no reason to ever test B on a font again.
- Overflow past ~10vw on the trailing word (decision 4, now with numbers).

## Fault line

- **Doc problem:** none — 01 doc V3's dependency ("B cannot be built until the redrawn mark exists") is now satisfied in the code, and the scenario mechanic held.
- **Execution problem:** none known; QA is Buck's. The open judgment call made without him: variant B (eased) as default. Flagged, reversible in one line.
- **Cross-expression finding:** the texture underlay (28) remains the last blocker on 01's fullest read — the canvas-texture ref comparison is still untested. Unchanged from the backfilled record.

## Clean?

Clean: live-written, receipts are the config diff plus screenshots of the calibration pass, both frozen and live routes verified in the browser at the working viewport. The B-variant default is the only unreviewed call.

## Next move

The fill order continues — remaining unblocked expressions get their first builds this session. On 01 specifically: nothing further is buildable until Buck picks the trace dial (a/b/c) and 28 unblocks the texture underlay.
