# Round — v0 — 7.12.26 — 2 (live record, written at the moment of making)

First build round for 25. Doc V1 governs. This is the trace round the whole session was waiting on — 01 Scenario B and world-two's mark are both blocked behind it.

## The set

Three trace variations of the wordmark, live at `/var-25` (frozen capture route: no preloader, no tab bar). Each is shown in the real header at header size, on both grounds (cream and maroon), next to the current mark, plus a large specimen row where drawing quality actually reads.

- **A — faithful:** potrace alphamax 0.55, opttolerance 0.2. Minimal smoothing; kills only the sharpest Photoshop-era corner artifacts. The safest "same sign" read.
- **B — eased:** alphamax 1.0, opttolerance 0.5. Rounded joins, optimized curves. The middle of the dial.
- **C — fluid:** alphamax 1.3334 (max), opttolerance 1.0. The far edge of "slightly toward the script."

## Method (the receipt that matters)

Not hand-redrawn and not AI-imagined: every path derives mechanically from the sign pulls (`public/wordmark-current.png`, `public/wordmark-paisano.png`) via `scripts/trace-wordmark.mjs` — alpha-thresholded to bitmap at 3x, then potrace at three smoothing settings. **Structure, proportions, and letter tails are preserved by construction**, because there is no drawing step in which they could drift. The only variable is curve-fit fluidity — which is exactly the axis doc V1 leaves open ("degrees of fluidity to iterate"). Output SVGs: `public/wordmark-redraw/{hotel,paisano}-{a,b,c}.svg`.

## Tried / worked / failed

- **Worked:** the trace-don't-redraw method. All three read as the same sign at header size; nobody would call any of them "a new logo." The boundary (never becomes the script) is not even approached — potrace cannot invent script letterforms.
- **Worked:** rendering as CSS masks with `currentColor` (`components/traced-mark.tsx`). The mark takes the ground's ink color — cream on maroon, maroon on cream. The current PNG mark nearly disappears on the maroon ground at `/var-25`; the traced mark doesn't. An accidental but real finding: the redraw also fixes a production defect the PNG mark has.
- **Partial:** at header size (h-6/h-7) the three variants are nearly indistinguishable — the differences live at specimen size and up. This means the redraw decision can't be made from headers alone; the large specimen (or the preloader-scale use in 01 Scenario B) is where the dial actually shows.
- **Failed / limit of method:** potrace smoothing removes digital artifacts but cannot *add* draughtsmanship. "Better drawn" in the full sense — confident stroke modulation, a letterer's hand — is beyond what tracing at any setting produces. C is the ceiling of this method; if Buck wants more hand than C shows, the next round needs an actual lettering pass over the C skeleton, not a fourth potrace setting.

## Preserve

- `scripts/trace-wordmark.mjs` — rerunnable; new settings are one array entry.
- `components/traced-mark.tsx` — variant-switchable mark component, mask-based, color-follows-ground. This is what 01 Scenario B and world-two should consume.
- The judging format at `/var-25`: real header, both grounds, current mark adjacent, large specimen. Reuse for any future mark round.

## Avoid

- Judging variants at header size only — they converge there (see partial above).
- Any setting past C — the method's ceiling, and pushing further just degrades fidelity without adding hand.
- Conflating this with 01's script (doc negative): `/var-25` carries the standing note that nothing here goes to 01 settled.

## Fault line

- **Doc problem:** none found. V1's control set (letterforms as base, structure/proportions/tails preserved, never-the-script boundary) mapped cleanly onto a buildable method.
- **Execution problem:** none known yet — this is the first live-written record of the project; QA is Buck's.
- **Open finding for the doc:** the "degree of hand" question (audit note in V1) now has a concrete floor and ceiling: potrace-C is the most fluid a pure trace gets. Anything beyond requires a human or a drawing pass, which is a different effort class.

## Clean?

Clean as a trace round: method is mechanical and rerunnable, receipts are the script plus the six SVGs, judging surface is live at `/var-25`. Not clean as a final redraw — no lettering hand has touched it, per the limit noted above.

## Next move

Unblocked and done next in this session: 01 Scenario B revisited with `TracedMark` (variant per Buck's pick — defaulting to B-eased until he calls it) at 2.0+ frame scale, replacing world-two's Great Vibes substitute. See 01's next round record.
