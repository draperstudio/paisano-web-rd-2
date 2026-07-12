# START HERE — running Paisano web round two

This is the human guide. Agents orient with `00 index.md` instead; the step docs in `02 logic/` each carry their own Reads/Writes header.

## What happened before you got here

Round one was Buck taking references one at a time — a reference, or a reference mashed with one of his ideas — and ripping variations across three tools at once: Claude Code designing in Paper, v0, and Figma Make. Full pages didn't work; one idea at a time did. The outputs got grouped on the Figma board: distinct concepts in horizontal bands, references on the left of each band, explorations to the right, and graphic assets that need making split off past the red line. Round two develops what coalesced, one notch more controlled.

## The loop you're running

0. **If `03 expressions/` is still empty, stop — the board pass hasn't happened.** Run `02 logic/tools/board pass.md` with Buck first; it fills the expression folders this loop runs on.

1. **Open an expression before you make anything.** Each folder in `03 expressions/` is one idea that survived round one. Its `doc.md` tells you what it is, what Buck likes about it, which controls are locked (written as keywords, terms, and phrases — follow these exactly), and what's deliberately open. The open controls are your variation space: cycle them to make versions, don't touch the locked ones. `feedback.md` is Buck's raw commentary if you want the unfiltered read. `refs/` and `explorations/` show where it came from and where it's been.

2. **Work from a content concept, not a blank page.** `07 content concepts/` holds the decided pieces — each one says what the piece is for, who it moves, the one message, and the angle. If a concept doesn't exist yet for what you want to make, it gets written first (step L1 in `02 logic/`).

3. **Build the brief.** Per concept, walk the steps in `02 logic/`: L2 outline (what it covers, in what order, the single point), L3 visual direction (which expressions are in play, which media lands where — this is where you pull the expression docs and the media CDN docs), L4 copy (good enough, not perfect — see the bar below). Each step doc says exactly what to read and where to write. The result accumulates in `08 briefs/[concept]/` in the template's shape.

4. **Compile, then produce.** L5 turns the finished brief into 2–3 build prompts (the prmpt example next to it shows the format — full spec, CDN links inline, so the tool does nothing but code). Run those in Paper, v0, or Figma Make. Roughly three variations per concept.

5. **Capture at the moment of making.** Before moving to the next thing: screenshot/export the result and write the small markdown per `09 output/_contract.md` — which tool, which prompt, which expressions were in play, and your honest commentary. Then copy that capture into each source expression's `explorations/`. This is the round-one lesson: feedback captured in the moment is what the next round runs on; feedback left in your head is gone.

6. **Feed the expressions.** After a batch: new idea surfaced → new expression folder. Existing idea developed → its doc.md advances (V2, V3). Idea died → say so in the doc and stop carrying it.

## The bar

This is high volume, not final production. Copy doesn't need to be perfect and media picks don't need to be final — the output needs to be good enough to really see a specific expression in the light of this brand. What you're producing is (a) outputs, yes, but mainly (b) developed expressions docs and captured judgment that the slower, human rounds build on.

## Rules that don't bend

- Locked controls in an expression doc are locked. Variation comes from the open ones.
- `01 settled/` items are constraints, never considerations. Don't re-open colors.
- The neon sign is not changing. The logo-script question (use it / deviate / tweak) is open — flag it in feedback when your work touches it, don't decide it.

**Check tiering**
- Always on, every output: the hard-truth rules — no invented facts, nothing planned framed as already real, facts sourced from 06 knowledge/.
- High-volume rounds (this one): L7 and L8 are a fast gut-pass for the hard rules above, not a full stylistic audit. Em-dash, phrasing, and polish enforcement is a slow-production pass, not a volume-round gate.
- L6 (AD check) fires only when a compiled control set or build prompt is about to run — not on every rough derivation.
