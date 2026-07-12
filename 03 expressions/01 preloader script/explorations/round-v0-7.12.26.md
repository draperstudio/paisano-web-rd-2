# Round — v0 — 7.12.26 (backfilled 7.12.26, agent call, review)

**Backfill notice:** written after the fact from Buck's locked decisions out of the 7.12 review and from what the code at `/var-1`–`/var-3` shows. The building agent wrote no round record at the moment of making; this reconstruction pays that debt. Everything below is "(agent call, review)".

## The set

Three preloader variations, one per scenario-world, live at `/var-1/preloader`, `/var-2/preloader`, `/var-3/preloader` (frozen capture routes; the live versions play on entry at `/var-N`). Configs in `lib/preloader-configs.ts`, shared between frozen and live per the frozen-composition pattern.

- **Var 1 (Scenario A1):** Pinyon Script, cream ground / maroon script, "Hotel / Paisano" staggered at 30vw, kicker "Marfa, Texas — Est. 1930".
- **Var 2 (Scenario B):** Great Vibes standing in for the traced mark, maroon ground / cream script, "Hotel / Paisano" staggered at 28vw. Mark and moment are one gesture in this world.
- **Var 3 (Scenario A2):** Herr Von Muellerhoff, wine ground / cream script, "Paisano" solo at 43vw.

## Tried / worked / failed

Open axes cycled: **script face** (Pinyon / Great Vibes / Herr Von Muellerhoff), **color ground** (cream / maroon / wine), **frame placement** (staggered stack vs. solo word). One axis of world-context varied per the scenario mechanic (doc V3).

- **Worked:** the scenario-worlds mechanic itself — Buck judged A against B as worlds and both tracks stay alive (decision 13). The sanctioned word set held (solo "Paisano", staggered "Hotel Paisano"; no "The").
- **Failed:** Scenario B on a substitute font. Buck: testing B with a substitute fails; **only the trace tests it** (decision 13). Var 2's Great Vibes build is therefore evidence about nothing on the B question.
- **Reaction on bleed (decision 4):** oversized script bleed is subtle — letters graze or slightly clip the frame edge; words never half-lost off screen. The 7.12 compositions ran the edge of this; it is now a hard boundary.

## Preserve

- The frozen-composition pattern: `components/preloader.tsx` + `lib/preloader-configs.ts`, configs shared so frozen and live are identical. Reuse for any new full-frame moment.
- Script faces alive (decision 5): Pinyon Script, Mrs Saint Delafield, Great Vibes; Monsieur La Doulaise and Herr Von Muellerhoff acceptable.
- Kicker as tiny sans, tracked caps, floating inside the composition (traced to the ref's "OUTUBRO 2025").
- Grounds: cream/maroon, maroon/cream, wine/cream all functioned; color stays open per doc.

## Avoid

- Scenario B with any substitute face — build it only on the 25 trace (positive direction: rebuild var 2's preloader with the traced lettering at 2.0+ frame scale once 25 exists).
- Letting words run half off screen; clip at ascenders/edges only (decision 4).
- Dead faces (decision 5): Mr Dafoe, Yellowtail, Grand Hotel, Lily Script One.

## Fault line

- **Doc problem:** none found — doc V3 already carries the scenario mechanic and the 25 dependency.
- **Execution problem:** the missing round record itself (paid here), and Scenario B built on a substitute against the doc's stated dependency — the doc said B "cannot be built until the redrawn mark exists"; the build proceeded anyway. Classified execution, not doc.
- **Axis findings:** face and ground cycles produced no kills from Buck beyond the standing dead-face list; the solo-"Paisano"-at-43vw composition (var 3) reads as the strongest single-word scale evidence to date.

## Clean?

Not clean — receipts are partial by nature of a backfill. Comparison ref: `refs/oversized-script-on-canvas-texture` (House of Wander). Texture underlay still absent (blocked on 28), so the fullest read remains untested per the doc's open question.

## Next move

Named and done in this session: 25 wordmark redraw gets its first build, then 01 Scenario B is revisited with the trace at 2.0+ frame scale (see `round-v0-7.12.26-2.md` when written).
