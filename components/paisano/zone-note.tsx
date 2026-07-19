function Script({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-script-a1 normal-case tracking-normal text-[1.4em] leading-none align-baseline">
      {children}
    </span>
  )
}

export function ZoneNote() {
  return (
    <section className="bg-maroon px-6 py-32 md:py-44">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-cream/80">
          A note from the house before you book.
        </p>

        <p className="mt-14 font-serif-two uppercase tracking-[0.18em] text-cream leading-[1.55] text-[clamp(1.5rem,3.5vw,2.5rem)] text-balance">
          The hotel is <Script>open</Script> through its{" "}
          <Script>restoration</Script>. The lobby, the bar, the courtyard{" "}
          {"—"} <Script>at their best</Script>. The rooms are 1930 rooms, and
          the rates say so.
        </p>

        <p className="mt-14 font-mono text-[11px] uppercase tracking-[0.28em] text-cream/80">
          New rooms arrive 2027.
        </p>
      </div>
    </section>
  )
}
