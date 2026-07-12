# Index — Paisano Web Round Two

Orientation for an agent landing cold. Read this once to orient, then follow the Reads/Writes header at the top of whichever step doc you are running — the headers are the routing, not this file. Humans start at `00 - START HERE.md` instead.

## Glossary

Definitions follow the DRAPER Lexicon (`DRAPER-Documentation/01 - Lexicon.md`). Names marked (unsettled) are recorded there at that strength — use them, don't harden them, don't rename them mid-run.

- **Expression** (unsettled name) — a specific brand thing that coalesced out of exploration and gets developed in its own right. At least three types: brand expressions (logo, color, type, photography, layout, graphics), content-concept expressions (recurring subject matter), and conceptual expressions. One expression = one folder in `03 expressions/`.
- **Expressions doc** — the markdown that holds one expression (formerly pottery doc / reference doc): short human write-up, the locked controls as keywords/terms/phrases, what stays open, negative directives, with refs/ and explorations/ attached. Shape: `03 expressions/_expression-template/doc.md`.
- **Controls** (unsettled) — the word-lever idea: keywords, terms, and phrases are what make the output. The controls for a production type are listed in `02 logic/blocks/controls - *.md`.
- **Control set** — the written artifact, distinct from Controls-the-idea: human-language direction per control, filled with keywords/terms/phrases, varying by production type. The tie: Translation logic → AD logic → keywords/terms/phrases → the written control set.
- **AD logic** — per control, the options and what each one does, produces, and feels like. `02 logic/blocks/ad logic - *.md`.
- **Locked vs open controls** — the round-one mechanic that still governs expressions: commentary on a reference covers only 4–6 of a composition's controls; those get locked as keywords/terms/phrases; knowledge and media controls fill from the actual knowledge and media; everything else stays open, and cycling the open controls is what makes variations.
- **Message flow** (name unsettled) — building one piece, in order: **editorial outline** (the message and info in rough order, no application) → **visual direction** (what media, how and where, soft implementation ideas, not directives) → **copywriting** (the copy) → **applied direction** (the dialed final pass, copy and message matched to direction piece by piece — web: section by section). Steps L2–L5 in `02 logic/`.
- **Content concept** — a decided piece of content to make: one small goal under the big goal, one move for one person, one message, an angle, an execution. One md per concept in `07 content concepts/`.
- **Brief** (expression brief, unsettled) — the packaged handoff per content concept: outline, whittled media CDNs, knowledge chunks, and expression directives, handed to the coding agents. Shape: `08 briefs/_brief-template.md`.
- **Derivation / exploration** — one output made from a brief (or, round one, from a reference). Captured per `09 output/_contract.md`.
- **Block** — pull-in logic: a doc an agent folds into a prompt (`02 logic/blocks/`). **Tool** — an action prompt run on demand (`02 logic/tools/`). **Step** — an L-numbered action doc in `02 logic/` with a Reads/Writes header.
- **Settled** — decisions off the consideration table (`01 settled/`). Constraints in prompts, never considerations.

## Map

```
input/               strategy brief from Rd 1 + new-references/ inbox
01 settled/          decisions off the table (colors, type set)
02 logic/            L1–L8 step docs · blocks/ (pull-in logic) · tools/ (run on demand)
03 expressions/      one folder per expression: doc.md, feedback.md, refs/, explorations/
04 media/            19 assets + markdown docs with CDN links
05 graphics/         made assets + docs + to-make.md
06 knowledge/        the 5 knowledge docs (raw input to briefs; production agents don't read this)
07 content concepts/ one md per concept (_template.md)
08 briefs/           one folder per concept: the brief + compiled prompts (_brief-template.md)
09 output/           what tools produce, captured per _contract.md
```

## Conventions

- Root numbers (01–09) are places. L-numbers (L1–L8) are logic steps. Never refer to a step by bare number.
- Files starting with `_` are templates or contracts, not content.
- Every step doc opens with **Reads:** and **Writes:** — that header is authoritative for what to pull in and where results go.

**Check tiering**
- Always on, every output: the hard-truth rules — no invented facts, nothing planned framed as already real, facts sourced from 06 knowledge/.
- High-volume rounds (this one): L7 and L8 are a fast gut-pass for the hard rules above, not a full stylistic audit. Em-dash, phrasing, and polish enforcement is a slow-production pass, not a volume-round gate.
- L6 (AD check) fires only when a compiled control set or build prompt is about to run — not on every rough derivation.
