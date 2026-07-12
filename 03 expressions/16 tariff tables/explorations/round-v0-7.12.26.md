# Round — v0 — 7.12.26 (backfilled 7.12.26, agent call, review)

**Backfill notice:** reconstructed after the fact from Buck's 7.12 locked decisions and the code at `/var-1`–`/var-3`. No round record was written at the moment of making. Everything below is "(agent call, review)".

## The set

The ledger concept (07 content concepts/10) built once per world — three data-table treatments on real rates, policies, and seasons from the knowledge base:

- **Var 1:** centered menu-style — italic section titles, label/value rows, rules between sections. Rows set in tracked sans caps.
- **Var 2:** receipt register on maroon — script display head, label/value rows, sans labels.
- **Var 3:** receipt take traced from the tabular-receipt ref — narrow serif column, labels left / values right, dashed rules as the only section breaks, receipt-style header block, serif throughout. Plus the Donica-table matcher (headers once, serif rows over full-width hairlines).

## Tried / worked / failed

Open axes cycled: **table register** (menu / receipt-on-color / strict receipt) and **face inside the table** (sans rows vs. serif rows).

- **Worked → LOCKED (decision 7):** the receipt register — narrow serif column, labels left and values right, dashed rules as the only section breaks, receipt-style header. Var 3 is the surviving recipe.
- **Failed → killed (decision 7):** sans inside tables. Vars 1 and 2 carry sans rows/labels; both are dead as table treatments. This confirms the doc's standing negative ("why the fuck do some of these have sans serif in there") — the build repeated a documented kill.
- **Killed globally (decision 3):** wavy rules (vars 1 and 2 originally used them; already swapped to hairlines in `globals.css`).

## Preserve

- Var 3's full recipe verbatim: max-w-xl column · serif 15–17px · `flex justify-between` label/value rows · `border-dashed` section breaks only · header block of title + place + "current as of" lines.
- The Donica matcher-table: column headers named once in a header row, serif rows, full-width hairlines, no caps chips in rows.

## Avoid

- Sans anywhere inside a table (decision 7 — now a lock in this doc's territory).
- Wavy/squiggly rules anywhere (decision 3).
- Building from the failed round-one explorations — start from the refs and the tariff-card direction only (standing doc negative).

## Fault line

- **Doc problem:** none — but decision 7 upgrades this doc's territory: the receipt register is now the locked data treatment. Doc edit queued (V2 bump) rather than made in this backfill, since the round record is the evidence trail for it. **(agent call, review)**
- **Execution problem:** the missing round record (paid here), and sans inside tables shipped against a documented negative — execution, not doc.
- **Axis finding:** register cycle did its job — two registers ruled out by Buck, one locked in.

## Clean?

Not clean — backfill. Comparison refs: the tabular-receipt and in-line-section-breaks references in this folder's refs/.

## Next move

Doc bump to V2 recording decision 7's receipt-register lock — done this session (see doc.md V2). Numbering-on-tables (with 15) queued for a later pass.
