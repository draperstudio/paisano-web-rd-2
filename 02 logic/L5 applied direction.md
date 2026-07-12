**Reads:** the assembled brief in 08 briefs/[concept]/ · 04 media/Media Markdown Docs/ and 05 graphics/ for CDN links · blocks/ad logic - composition.md (web execution vocabulary) · L5a for the format
**Writes:** 2–3 compiled build prompts into 08 briefs/[concept]/prompts/ — tools run them, results captured per 09 output/_contract.md

# Applied Direction

The pull-it-together step. After the editorial outline, visual direction, and copy exist and have been checked, this step compiles everything into a build prompt that a production tool (Claude Code in Paper, v0, or Figma Make) executes with as little left on its plate as possible — the goal is that the coding agent is focused on nothing but coding.

What goes into the compiled prompt:

- The structure and phases of the piece (from the outline and direction)
- The specific media and graphics as CDN links, already selected
- The copy, already written and checked
- The expression directives: the controls, keywords, terms, and phrases being controlled for — including motion and interaction behavior, spelled out in the web execution vocabulary (see blocks/ad logic - composition.md)
- Exact styling where it is settled (type, color, spacing)

See `L5a applied direction - prmpt example.md` for the reference format — the prompt behind the one-shot site Erik showed on the 7.11 call. It specifies everything down to pixel values, easing, and breakpoints.

Open question, per Jack on 7.11: how detailed the directive should be. The prmpt example makes every decision in advance and leaves the tool nothing but transcription. We may want to stay looser than that and leave some things in the tools' hands — the right level of detail gets figured out through a provisional test case. Per expression brief, the working shape is: this agent produces two or three of these compiled prompts (variations), and those go to the tools to code.
