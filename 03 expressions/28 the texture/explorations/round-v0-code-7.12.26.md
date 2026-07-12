# Round — v0 (code port) — 7.12.26

**Expression:** 28 the texture
**Routes:** /e28/swatches (grain × tone board, live) · /e28/preloader (01's Scenario B trace over the texture — in-context judgment surface)
**Code:** components/texture-ground.tsx

## What this round is

The Paper round (paper-1) settled the recipe; this round ports it into the
codebase so the texture exists as a real, reusable ground component —
which is what "make first, gates 01 and 07" actually requires. Same
construction as the Paper build: maroon #641D18 base, low-frequency cloud
drift (the dye-fade layer), plus anisotropic warp/weft turbulence layers.
All procedural SVG data-URIs — no image assets, scales to any surface.

## What was tried

- **Swatch board (/e28/swatches):** whisper·maroon (kept for the record —
  likely dead per Buck's 7.12 "not enough texture" steering), present·
  maroon (the working level, now the component default), handled·maroon
  (quiet vignette edge wear — no glowing seam bars), present·wine
  (confirms the capture's note: grain nearly vanishes on wine), and
  present·parchment (V3's cream-ground read).
- **In context (/e28/preloader):** PRELOADER_TWO (the 25 trace, current
  live config) frozen over present·maroon. The texture is the only
  changed variable vs /var-2/preloader — the honest A/B the capture
  called for, now in the browser.

## Calls made

- `present` is the default grain — whisper survives only as a labeled
  swatch, per the live steering.
- No seam lines in the code port. The capture's seam attempt read as a
  lie at anything above whisper; how the material extends stays open, so
  the component ships seamless until Buck rules.
- One bug found and fixed: TextureGround is position:relative internally,
  so passing `fixed inset-0` in className silently zero-heights it —
  full-screen use requires a fixed wrapper (documented in the route).

## Known limit (carried from the capture, still true)

Procedural noise reads linen/paper at close zoom, not the ref's coarse
canvas. If Buck wants physical cloth, the fallback is a recolored canvas
scan as an image fill — trades parametric control for material truth.

## Open for Buck

- Is `present` the level, or does it want to run hotter still?
- Wine: brighten the grain for wine grounds, or drop wine as a texture
  tone?
- Does 07 (script mixed in) take the same ground next, now that the
  component exists?
