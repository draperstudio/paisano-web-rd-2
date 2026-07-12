# Round — v0 — 7.12.26 (backfilled 7.12.26, agent call, review)

**Backfill notice:** reconstructed after the fact from Buck's 7.12 locked decisions and the code at `/var-1`–`/var-3`. No round record was written at the moment of making. Everything below is "(agent call, review)".

## The set

The room-pages concept (07 content concepts/04) built once per world — three treatments of room detail content, one per scenario-world, all on real catalog data from `lib/data.ts`:

- **Var 1:** Maison Charlotte photo-and-field — photo card, tiny centered italic caption under the photo, huge whitespace, letterspaced serif caps, parenthetical numbering.
- **Var 2:** editorial spread — full-bleed alternating photo/text rows, hairline receipt rows for features, script mixed mid-line for rates.
- **Var 3:** Bowery structure — page-per-type with a tab row, detail panel right, receipt hairline feature rows.

## Tried / worked / failed

Open axis cycled: **the whole treatment** (this expression had no explorations before this round — the first round was the variation space, per doc V1). Locks held: outer margin/frame feeling, centered title (var 1), varied subtext sizes, room details as subject, not promoted to hero.

- **Worked:** decision 12 — **Bowery is the structural model** for room pages: page-per-type with tab navigation. Structure only; treatment stays open across all three band-4 refs (Bowery structure, Frati spread, Maison Charlotte field).
- **Worked:** hierarchy on weight not caps (decision 2) — regular weight with size doing the work beat medium.
- **Failed:** nothing in this band was killed outright; the reactions were structural (12) and typographic (1, 2, 6).

## Preserve

- Bowery tab-row structure (`components/world-three.tsx`, the `role="tablist"` row) as the page-per-type skeleton.
- Maison Charlotte caption pattern: tiny centered italic caption under the photo card.
- Receipt hairline rows for room features (border-t hairlines, serif, 13–14px).
- Real data only: names, rates, dimensions from `06 knowledge/07` via `lib/data.ts`.

## Avoid

- Sans anywhere in title positions (decision 1 — titles are serif; tracked uppercase serif survived).
- Body copy outside 13–15px serif (decision 6); Italiana dead.
- Wavy rules as section breaks (decision 3) — plain 1px hairlines only.

## Fault line

- **Doc problem:** none — doc V1's locks were followable and none proved wrong.
- **Execution problem:** the missing round record (paid here). Also: the 7.12 build ran on the old 7.9 rooms doc and renders for current rooms — corrected 7.12 in the reconciliation pass (nine classes, catalog order, current photography; see `lib/data.ts` header).
- **Axis finding:** three treatments existing side by side produced decision 12's structural pick without killing the Frati or Maison Charlotte *treatments* — treatment exploration remains open on the Bowery skeleton.

## Clean?

Not clean — backfill without the moment-of-making screenshots. Comparison refs: `refs/asymmetrical-grid-with-centered-typography`, `refs/split-frame-carousel-with-left-heavy-composition`, plus the band-4 Bowery/Frati/Maison Charlotte set named in decision 12.

## Next move

Room-page treatments on the Bowery skeleton exploring Frati spread and Maison Charlotte field as *treatments* (decision 12) — queued for a later pass; this session's fill order runs the untouched expressions first.
