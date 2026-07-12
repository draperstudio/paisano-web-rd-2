# Round — v0 — 7.12.26

**Expression:** 22 footer
**Routes:** /e22/var-1 (ledger foot) · /e22/var-2 (colophon foot) · /e22/var-3 (signature foot)
**Code:** components/e22-footer.tsx

## What was tried

Three treatments of the sign-off, each borrowing a locked or working move
from another expression rather than inventing new grammar:

- **A — Ledger foot (var-1).** Maroon ground. The 25 trace (variant B) as
  signature top-left, then settled facts in 16's receipt register at footer
  scale — hairline cream rules, term left, detail right. Worlds nav and
  "Est. June 1930" close the band.
- **B — Colophon foot (var-2).** Cream ground, centered stack: trace in
  maroon, two lines of running prose (Trost, June 1930, 42 rooms), nav,
  address. Edge microtext at the very bottom carries the real coordinates —
  12's data-not-decoration rule.
- **C — Signature foot (var-3).** Near-empty maroon band, 19's restraint:
  the trace alone at its largest footer scale, one line, nav at whisper
  size. Nothing else.

## Calls made

- All three run the 25 trace (variant B) as the mark — no font substitute
  anywhere in the footer, consistent with "only the trace tests it."
- Facts pulled from lib/data.ts only (7.12 reconciliation) — dogs $40,
  check-in 3:00 PM, 42 rooms/nine classes, 207 N Highland Ave. No invented
  links: nav points at the three world routes that exist.
- Demo pages mount each footer under a stub page body so the sign-off is
  judged on approach by scroll, not floating in isolation.

## Open for Buck

- Which register should the sign-off take: account (A), book (B), or
  sign (C)?
- Whether the coordinates line in B reads as data or as decoration at
  9px/0.35em — kill it if the latter.
- Trace scale in C (h-8/h-10) — large enough to be a signature, or does it
  read as a header that wandered to the bottom?
