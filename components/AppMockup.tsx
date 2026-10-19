// A fake app window built in HTML/CSS: the transcript "types" in, then the AI summary appears.
const transcript = [
  { who: "Lena", color: "bg-violet", text: "Can we ship the onboarding redesign before the 15th?" },
  { who: "Tom", color: "bg-cyan", text: "Yes if design hands off by Friday. I'll take the API part." },
  { who: "Mai", color: "bg-pink-400", text: "I'll update the pricing page copy this week." },
];

const actions = ["Tom: onboarding API by Thu", "Design: hand-off on Friday", "Mai: new pricing copy"];

export default function AppMockup() {
  return (
    <div className="relative mx-auto w-full max-w-4xl">
      <div aria-hidden="true" className="absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-to-r from-violet/30 via-cyan/15 to-violet/30 blur-3xl" />
      <div
        role="img"
        aria-label="Noezz Notes app: a live meeting transcript on the left and an AI-written summary with action items on the right"
        className="overflow-hidden rounded-2xl border border-line bg-panel/90 shadow-2xl backdrop-blur"
      >
        <div className="flex items-center gap-2 border-b border-line px-4 py-3">
          <span className="size-3 rounded-full bg-[#ff5f57]" />
          <span className="size-3 rounded-full bg-[#febc2e]" />
          <span className="size-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 min-w-0 truncate font-mono text-xs text-muted">Weekly product sync</span>
          <span className="ml-auto flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-red-500/15 px-2.5 py-1 text-[0.7rem] text-red-300">
            <span className="rec-dot size-1.5 rounded-full bg-red-400" /> Recording · 24:13
          </span>
        </div>

        <div className="grid text-left md:grid-cols-[1.25fr_1fr]">
          <div className="space-y-4 p-5 md:border-r md:border-line">
            <p className="font-mono text-[0.7rem] uppercase tracking-widest text-muted">Live transcript</p>
            {transcript.map((line, i) => (
              <div key={line.who} className="flex gap-3">
                <span className={`mt-0.5 grid size-7 shrink-0 place-items-center rounded-full ${line.color} text-xs font-semibold text-bg`}>
                  {line.who[0]}
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-muted">{line.who}</p>
                  <p className="play-line text-sm" style={{ "--d": `${0.4 + i * 1.2}s` } as React.CSSProperties}>
                    {line.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4 bg-bg/40 p-5">
            <p className="play-in flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-widest text-violet" style={{ "--d": "4s" } as React.CSSProperties}>
              <span aria-hidden="true">✦</span> AI summary
            </p>
            <p className="play-in text-sm text-text/90" style={{ "--d": "4.3s" } as React.CSSProperties}>
              Team agreed to ship the onboarding redesign before the 15th, pending design hand-off on Friday.
            </p>
            <ul className="space-y-2">
              {actions.map((a, i) => (
                <li
                  key={a}
                  className="play-in flex items-center gap-2 rounded-lg border border-line bg-panel px-3 py-2 text-sm"
                  style={{ "--d": `${4.7 + i * 0.3}s` } as React.CSSProperties}
                >
                  <span aria-hidden="true" className="grid size-4 place-items-center rounded border border-cyan/60 text-[0.6rem] text-cyan">
                    ✓
                  </span>
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
