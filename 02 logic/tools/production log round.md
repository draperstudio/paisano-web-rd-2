**Run on demand** — per expression, the moment its variation set completes (a substantive stopping point: the batch of derivations for one expression exists and is captured). Adapted 7.12.26 from the DRAPER production flow's `/production-log-round` (the photo-work loop), fitted to composition/code production. Vocabulary authority is the repo's own blocks (`controls - composition.md` / `ad logic - composition.md`, current as of Erik's 7.11 additions) — never the DraperApp prompt tables, which may lag them.

# Production Log Round

Review one expression's just-finished variation set and act on what the review finds. The per-derivation capture (`09 output/_contract.md`) records what was made; the round is the QA — the system checks itself, nothing waits on a human. A round that only logs has failed.

## The loop

This tool is one station in a cycle that repeats *within* the expression until it converges:

**compile/state the build decisions in the open — chat or brief, no invisible steps (7.12 rule) → build → self-review against doc + refs → round (this doc) → implement the fix at the level the fault line names → if doc-level, revise the control set (doc.md) → build again → round again.**

Loop depth follows the check tiering in `00 index.md`. **High-volume rounds (this one): one round per variation set by default** — re-enter the build-again loop only when the round finds a doc or prompt fault worth rebuilding for; otherwise record, push, move to the next expression. **Per-expression budget in a volume pass: 3–5 variations, then log and move on** — later passes return to the expression with the prior round's preserve/avoid in hand. Never declare an axis "exhausted" by feel; axes are combinatorial and a full sweep is not the job. Iterate-until-converged is slow-production behavior, not a volume-pass gate — a run that perfects one expression and never reaches the rest has failed the round it's in.

**This tool is lane-agnostic** — it runs the same whether the builder is an agent driving Paper, a v0 session, or Figma Make reading this repo. Lane differences are named where they exist (fault line, below).

**Reads:** the set's capture.md files (`09 output/[concept]/[tool]-[n]/` and the expression's `explorations/`) · the expression's `doc.md` (the control set being tested) and `feedback.md` · `refs/` for the judging standard · `blocks/controls - composition.md` / `controls - graphic.md` and the matching AD logic block, when classifying a finding against controls · prior rounds in the same folder
**Writes:** one Round entry appended to the expression's capture record (copied per the contract) · `doc.md` revisions when the fault line lands there — version-bumped, marked "(agent call, review)"

## The entry

1. **Tried / worked / failed** — across the set as a whole, not board by board. Name which open axes were cycled and what each cycle showed.
2. **Preserve** — what carries forward, specific enough the next build reuses it verbatim: values, faces, sizes, placements, recipes. Not "the type felt right."
3. **Avoid** — as positive future direction where possible ("crop at the ascenders only"), not only negatives. Negatives-as-kills stay Buck's alone.
4. **Fault line** — every failure classified to the surface it lives on:
   - **Doc problem** — a *locked* control is wrong, missing, or misleading → revise `doc.md` now, version-bumped, "(agent call, review)". Photo-flow rule holds: fix the control set, never the prompt.
   - **Prompt problem** — the doc was right but the translation layer mistranslated it → fix the translation for the next run; the doc stays untouched. *Lane note:* in a compiled-prompt lane (brief prompts run in Paper/v0/Figma Make) the translation layer is the compiled prompt; in a direct build (an agent working live in the tool) it's the stated build decisions; where no translation layer exists separately from the build, this category collapses away — fault-line on doc / execution / axis-finding only, don't invent a prompt to blame.
   - **Execution problem** — prompt was right, the build or tool missed it → fix it in the build. Code is steerable mid-flight: edit and re-verify, don't re-roll.
   - **Axis finding** — the failure sits on an *open* control and the variation did its job by ruling a direction out. That's evidence, not a fault: record it in the round, flag it as a negative *candidate* — it becomes a real negative only when Buck kills it. Findings that land on the not-yet-vetted controls (Erik's 7.11 Depth / Motion / Time — see the board-pass record) feed that open vet as evidence; they classify nothing and lock nothing.
5. **Next move** — named and then *done*: another variation, a doc revision, a refs/media swap (the DRAPER log's reference-change move — pull different media from `04 media/` or different refs), an asset that must be made first, or — only when the doc genuinely cannot answer — a flagged question for Buck that the run routes around, never waits on.

## What counts as clean

"Clean" is not self-graded — the same agent builds, reviews, and judges, so a vibe check inflates (the first build of 7.12 passed its own review and failed Buck's on contact). A round may declare itself clean only with receipts:

1. **The comparison is named** — which kept exploration or ref image each board was judged side-by-side against, looking at composition, scale relationships, and how the type fills the frame — not "does it fit."
2. **Every line cites its source** — each preserve, avoid, and fault traces to a specific control in the doc, a ref, settled, or knowledge. A claim with no source is an opinion; it gets flagged as agent judgment or cut.
3. **Zero doc or prompt faults found** — execution fixes already made, axis findings recorded.

Missing receipts = not clean = the round says so plainly.

## Where this differs from the photo flow

The photo control set specifies every control before generating; an expression doc deliberately doesn't — locks are constraints, open controls are the variation space. So the fault line splits by lock status: failures against **locked** controls are doc/prompt/execution problems; outcomes on **open** controls are usually axis findings. Don't let a round harden an open control into a lock — that's the lock-hardening ban (`00 index.md`).

## The bar

Same as the photo loop's: separate what the control set got wrong from what the translation or the tool got wrong, and put each fix where it lives. A next agent reading only the rounds should know what to reuse, what to skip, and why — without this conversation.
