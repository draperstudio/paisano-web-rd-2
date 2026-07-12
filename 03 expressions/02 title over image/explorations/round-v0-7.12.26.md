# Round — 02 title over image — v0 — 7.12.26

**Set:** four variations, live at `/e02/var-1` through `/e02/var-4` (`components/e02-title-over-image.tsx`). Direct-build lane. Built during the unattended run — everything below is (agent call, review).

## The set

Mounted as a real hotel-introduction section, facts from `lib/data.ts` (06 knowledge): 42 rooms / nine classes, Highland Ave, Queen Historic → Rock Hudson span, dogs $40, check-in at three. Current photography only (courtyard fountain, facade, lobby) — no renders. One axis per variation:

1. **var-1 — faithful baseline.** Title-case display serif (Libre Caslon, 5–6xl) over a hairline-framed image, tracked-caps serif kicker above, 14px serif body under a 1px rule.
2. **var-2 — the cycling branch.** Same stack; the image cycles through three current shots, each slightly askew (−1.2° / 0.8° / −0.6°), italic caption naming the shot. Doc note honored: this is built as a hero, NOT paired with 01's script preloader ("not both this and the script thing as the hero + preloader pair").
3. **var-3 — fifth-row branch, Scenario B.** The 25 traced mark (variant B) large up top as the title itself, kicker demoted below it, facade image under.
4. **var-4 — logo-above-and-below branch, Scenario A.** Current mark centered, kicker above, italic serif line below ("on Highland Avenue since 1930"), then image and body.

## Tried / worked / failed

- **Worked:** the ref's proportions transfer — judged side-by-side against `refs/symmetrical-vertical-stack-layout 1.png`: title zone ~1/4 height, framed inset ~40% width on desktop, body in a narrow measure at the bottom. The hairline frame (border-ink/25 with a cream mat) is the quiet cousin of the ref's beaded terracotta frame — the ornate frame itself belongs to 04's territory.
- **Worked:** var-3 is the first Scenario B deployment of the trace outside a header — at title scale the eased trace holds up; the maroon-on-parchment pairing keeps it from reading as a sticker.
- **Failed (fixed in-flight):** the cycling variant's image collapsed to a thumbnail — flex-centering ate the figure width. Execution problem, fixed (`w-full` on the wrapper), re-verified in browser.
- **Not tried:** the askew angle as its own cycle (all three tilts shipped in one variation — attribution muddies if Buck reacts to tilt vs cycling; flagged).

## Preserve

- Stack recipe: kicker 13px tracked 0.22em serif at ink/60 · title Libre Caslon title-case · framed image max-w-md with p-2 cream mat and border-ink/25 · 1px w-16 divider · body 14px EB Garamond ink/85, max-w-xl.
- Cycle timing 2400ms; tilt range under 1.5° reads "slightly askew" without going scrapbook.

## Avoid

- Don't set the wordmark all-caps serif anywhere in this band (doc negative, held). Don't run solo "Paisano" (held). Don't mix typefaces in the stack — the whole stack is one serif family per variation (held).

## Fault line

- **Execution problem** (image collapse) — fixed and re-verified, receipts above.
- **Axis finding:** var-1 and var-2 share an identical title zone by design (the cycling is the only delta) — that's correct one-axis discipline, but it means the set never tested title scale. Open axis, untouched, noted for a second pass.
- Zero doc faults. Doc unchanged at V1.

## Next move

Next unbuilt expression in fill order (03 framed hero). Second pass on 02 should cycle title scale and try the illustration-below fifth-row variant once 27's illustration style has a round.
