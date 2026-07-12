# Round — 03 framed hero — v0 — 7.12.26

**Set:** three variations, live at `/e03/var-1` through `/e03/var-3` (`components/e03-framed-hero.tsx`). Direct-build lane, unattended run — everything below is (agent call, review).

## The set

The site hero, judged side-by-side against the Bowery ref (`refs/symmetrical-editorial-web-header-layout 1.png`) and the kept exploration (`Hero Derivations - Bowery - 1 — FAITHFUL.png`). Locks held: content inside thin margins on all sides (px-4/5, never edge to edge), the actual wordmark, real facts only. One axis each:

1. **var-1 — faithful.** Current mark top-left with the address stacked under it, centered tracked-caps serif nav with diamond separators, maroon Book Now plate right (script face, echoing the kept exploration), image held inside the frame, Est.-line footer strip.
2. **var-2 — wordmark axis.** Identical chrome; the 25 traced mark (variant B) replaces the current mark. First Scenario B test of the hero chrome.
3. **var-3 — chrome axis.** Centered ceremonial stack (mark / address line / nav) over the same held image; current mark. Book plate dropped — the axis is arrangement, and the stack has no right slot.

## Tried / worked / failed

- **Worked:** the containment lock translates directly — 16–20px cream margins around the image read as the Bowery "tight thin padding" at 1440px. The maroon top strip stands in for Bowery's red accent bar.
- **Worked:** the kept exploration's chrome recipe (mark left / address under / nav center / maroon script book-plate right) reproduces cleanly with our faces.
- **Failed (fixed in-flight):** the held image left a dead cream band above the footer — flex child wasn't stretching. Execution problem, fixed (`flex-1` on the image wrapper), re-verified.
- **Not built:** carousel behavior. The ref implies one; the only lock is the kill on arrows-in-circles. Deliberately skipped rather than half-done — open axis, noted.

## Preserve

- Chrome recipe: mark at h-6/7 · address 12px EB Garamond ink/60 · nav 13px Cormorant tracked 0.2em uppercase with 8px maroon ◆ separators · book plate bg-maroon with Pinyon 18px cream.
- Frame: h-1 maroon strip top, px-4 pb-4 (md: 5) around the image, footer strip inside the frame.

## Avoid

- Don't run the footer Est. line outside the frame margin — it belongs inside the containment like Bowery's bottom strip.
- No carousel until a control treatment exists that isn't circled arrows — plain ‹ › or edge hit-zones are the candidates to test.

## Fault line

- **Execution problem** (dead band) — fixed, re-verified, receipts above.
- **CALL flagged:** the kept exploration's mark reads "The Paisano"; band 1 kills "The", so the build uses the full wordmark. If Buck wanted "The Paisano" here specifically, that's a one-line swap.
- No phone/email shown anywhere — neither is in 06 knowledge (the invented-phone catch from last round).
- Zero doc faults. Doc unchanged at V1.

## Next move

Next unbuilt in fill order: 05 script subtext. A second 03 pass should test carousel conduct and the nav-sharing question (ties to 24 nav bar).
