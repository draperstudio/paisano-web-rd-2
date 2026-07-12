# SESSION — v0 round — 7.12.26

Working session on the Paisano round-two repo. Everything reviewable is
indexed at `/` (the serif index); the three worlds moved to `/worlds`.
Every expression folder under `03 expressions/` now carries a
`round-v0-7.12.26.md` (or dated equivalent) in its explorations.

## What happened, in order

1. **Worlds reconciled to the 7.12 catalog.** `lib/data.ts` rebuilt:
   nine room types, forty-two keys, real rates and features. Room
   imagery swapped to the current CDN photography with honest labels
   where a king room stands in.

2. **Round records backfilled** for the expressions worked in the 7.12
   session before records existed (01, 04, 10, 12).

3. **25 wordmark redraw built.** Trace pipeline
   (`scripts/trace-wordmark.mjs`): the sign's own letterforms retraced
   at three smoothing degrees, deployed in real headers at `/var-25`.
   B (eased) is the working pick.

4. **01 Scenario B revisited** with the traced lettering in the
   preloader (`/var-2/preloader`).

5. **Fill order executed** — remaining unblocked expressions built with
   round records:
   - 02, 03, 05, 06, 08, 09, 11, 14, 17, 18, 19, 20, 21 (earlier passes)
   - **22 footer** — ledger / colophon / signature band, `/e22/var-1..3`
   - **24 nav bar** — five header studies on one rip board, `/e24/rip`
   - **28 the texture** — canvas texture as CSS ground
     (`components/texture-ground.tsx`), swatches + under the preloader,
     `/e28/swatches`, `/e28/preloader`
   - **27 illustration style** — three generated candidates against the
     wispy-gestural ref, `/e27/board`. The recipe is in the round record.
   - **23 faded illustration** — PROVISIONAL on 27's candidates,
     three fade deployments, `/e23/var-1..3`
   - **26 crest redraw** — cleanup half only (same trace pipeline,
     `scripts/trace-crest.mjs`), `/e26/board`

6. **Index + build.** `/` replaced with the serif index; `pnpm exec next
   build` passes, all routes static.

## Open / blocked (for the next session)

- **26 crest redraw:** the "more like the references" half is blocked —
  `refs/` is empty. Export the band screenshots from the Figma board.
- **23 faded illustration:** provisional. Re-verify once Buck rules on
  27; swapping the asset is one line in
  `components/e23-faded-illustration.tsx`.
- **27 illustration style:** three candidates await Buck's judgment.
  None is a hand; that is what the round tests.
- **25 / 26 sequencing:** same pass honored (same pipeline, same
  settings); "same hand" remains an open question in the docs.

## Where things live

- Round records: `03 expressions/<nn> <name>/explorations/round-v0-*.md`
- Trace scripts: `scripts/trace-wordmark.mjs`, `scripts/trace-crest.mjs`
- Trace outputs: `public/wordmark-redraw/`, `public/crest-redraw/`
- Generated illustration candidates: `public/images/e27/`
- The index: `app/page.tsx` — add new routes there as they are built.
