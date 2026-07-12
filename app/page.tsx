import Link from "next/link"

/* The reviewer's index — everything reviewable this round, one serif page.
   The three-world tab switcher lives at /worlds. */

type Entry = {
  href: string
  label: string
  note?: string
}

type Group = {
  numeral: string
  title: string
  entries: Entry[]
}

const GROUPS: Group[] = [
  {
    numeral: "I",
    title: "The worlds",
    entries: [
      { href: "/worlds", label: "Three worlds, tabbed", note: "Var. 1 / 2 / 3 — reconciled to the 7.12 catalog" },
      { href: "/var-1/preloader", label: "Preloader — Scenario A" },
      { href: "/var-2/preloader", label: "Preloader — Scenario B", note: "now running the 25 trace" },
      { href: "/var-3/preloader", label: "Preloader — Scenario C" },
    ],
  },
  {
    numeral: "II",
    title: "Marks",
    entries: [
      { href: "/var-25", label: "25 wordmark redraw", note: "three trace settings in real headers" },
      { href: "/e26/board", label: "26 crest redraw", note: "cleanup pass only — refs still blocked" },
    ],
  },
  {
    numeral: "III",
    title: "Type and text moments",
    entries: [
      { href: "/e02/var-1", label: "02 title over image", note: "four variations" },
      { href: "/e05/var-1", label: "05 script subtext", note: "four variations" },
      { href: "/e08/var-1", label: "08 text framing", note: "three variations" },
      { href: "/e19/var-1", label: "19 centered minimal", note: "three variations" },
    ],
  },
  {
    numeral: "IV",
    title: "Systems",
    entries: [
      { href: "/e09/var-1", label: "09 roman numerals", note: "three variations" },
      { href: "/e11/var-1", label: "11 microtext", note: "two variations" },
      { href: "/e14/var-1", label: "14 folio rule", note: "three variations" },
      { href: "/e24/rip", label: "24 nav bar", note: "five header studies, one board" },
      { href: "/e22/var-1", label: "22 footer", note: "three variations" },
    ],
  },
  {
    numeral: "V",
    title: "Image moments",
    entries: [
      { href: "/e03/var-1", label: "03 framed hero", note: "three variations" },
      { href: "/e17/var-1", label: "17 small image offset", note: "three variations" },
      { href: "/e18/var-1", label: "18 split cards", note: "three variations" },
      { href: "/e20/var-1", label: "20 card on image", note: "three variations" },
      { href: "/e21/var-1", label: "21 full-bleed history", note: "three variations" },
    ],
  },
  {
    numeral: "VI",
    title: "Illustration and texture",
    entries: [
      { href: "/e06/var-1", label: "06 illustrated icons", note: "three deployments" },
      { href: "/e27/board", label: "27 illustration style", note: "three candidates, one board" },
      { href: "/e23/var-1", label: "23 faded illustration", note: "provisional on 27" },
      { href: "/e28/swatches", label: "28 the texture — swatches" },
      { href: "/e28/preloader", label: "28 the texture — under the preloader" },
    ],
  },
]

export default function Index() {
  return (
    <main className="min-h-screen bg-cream px-6 py-16 md:px-12">
      <div className="mx-auto flex max-w-2xl flex-col gap-12">
        <header className="flex flex-col gap-3">
          <p className="font-serif-two text-[11px] uppercase tracking-[0.3em] text-ink/60">
            Hotel Paisano — round two — 7.12.26
          </p>
          <h1 className="font-serif text-4xl leading-tight text-ink text-balance">
            The index
          </h1>
          <p className="font-serif-three text-[15px] leading-relaxed text-ink/70 text-pretty">
            Everything reviewable this round. Each expression&apos;s round
            record lives in its folder under 03 expressions.
          </p>
        </header>

        {GROUPS.map((g) => (
          <section key={g.numeral} className="flex flex-col gap-1">
            <div className="mb-2 flex items-baseline gap-4 border-b border-ink/20 pb-2">
              <span className="font-serif-two text-[13px] text-ink/50">
                {g.numeral}
              </span>
              <h2 className="font-serif-two text-[13px] uppercase tracking-[0.25em] text-ink">
                {g.title}
              </h2>
            </div>
            <ul className="flex flex-col">
              {g.entries.map((e) => (
                <li key={e.href}>
                  <Link
                    href={e.href}
                    className="group flex items-baseline justify-between gap-4 border-b border-ink/10 py-3 transition-colors hover:bg-ink/[0.03]"
                  >
                    <span className="font-serif text-lg text-ink group-hover:text-maroon">
                      {e.label}
                    </span>
                    {e.note && (
                      <span className="shrink-0 text-right font-serif-two text-[11px] uppercase tracking-[0.15em] text-ink/50">
                        {e.note}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <footer className="border-t border-ink/20 pt-4">
          <p className="font-serif-two text-[11px] uppercase tracking-[0.2em] text-ink/50">
            207 N Highland Ave, Marfa, Texas — Est. 1930
          </p>
        </footer>
      </div>
    </main>
  )
}
