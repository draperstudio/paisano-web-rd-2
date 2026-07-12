**Run on demand** — once, with Buck, before anything else in this folder runs. `03 expressions/` stays empty until this happens. Run it again after a round returns if the groupings need reworking.

# Board Pass

Organize the round-one Figma board with Buck: name the groupings, confirm the merges, and sort what's settled from what's open. This is a conversation, not an autonomous pass — Buck judges the visuals, the AI works his words into structure.

## The board

Round one's outputs, grouped and marked up. The red line splits it: implementation and application concepts on the left, specific graphic assets to make on the right. On the left, blue lines separate distinct concepts (one per horizontal band, ~23 bands), yellow lines mark sub-directions that branched inside one concept. Within a band: the references that kicked it off sit left, the explorations that came out sit right.

## Access

Preferred: Figma MCP access to the board, so the AI can read frames and Buck's comments directly. Fallback that works tonight: Buck flips through the board and talks per band (transcribed); the AI never needs to see the images — the commentary is what gets worked. Either way the judgment is Buck's.

## The pass, band by band

1. **Name it.** Short and referable ("preloader script", not a description). Naming vocabulary comes from `blocks/` where it fits, per the Lexicon's strength — don't mint new schema terms mid-pass; flag naming tensions instead.
2. **Say what it's keying on.** One or two sentences from Buck: what this band is actually about, what he likes, what it must not lose. This feeds the expression doc later — capture it raw.
3. **Confirm the grouping.** Is this band one expression or two? Should it merge with another? (Buck's standing suspects: bands 5 and 11 probably belong together, and 12 may join them — something like micro-graphics / framing text.) Are the sub-groupings right?
4. **Check the columns.** Buck suspects a middle column exists between full composition concepts and graphic assets: very specific little things (a formatting move, a micro-copy treatment) that aren't full compositions. Confirm per band which of the three it is.

## Outputs — where things land

- One folder per confirmed expression in `03 expressions/[name]/`, template copied in, the band's keying-on commentary dropped into `feedback.md`. (Refs and explorations export from Figma separately, after.)
- Settled decisions into `01 settled/settled.md`: colors are near-sure; type may land as a locked set of 2–3 directions with fonts downloaded. The logo-script question stays OPEN — it does not go in settled.
- Assets to make into `05 graphics/to-make.md` (the texture is already seeded there).
- Anything that dies on the board: note it died and why, so it doesn't resurface next round.
