import AppMockup from "@/components/AppMockup";
import Pricing from "@/components/Pricing";
import EmailSignup from "@/components/EmailSignup";
import Icon, { type IconName } from "@/components/Icon";

const nav = [
  { href: "#features", label: "Features" },
  { href: "#how", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

// made-up company names for the "trusted by" strip
const logos = ["Kitecraft", "Orbitly", "Pinebase", "Tidewave", "Quillstack", "Lumaport"];

const features: { icon: IconName; title: string; text: string }[] = [
  { icon: "mic", title: "Records any call", text: "Joins Zoom, Google Meet and Teams, or records in-person meetings from your laptop." },
  { icon: "sparkles", title: "Summaries in seconds", text: "A clear summary, key decisions and open questions as soon as the call ends." },
  { icon: "listCheck", title: "Action items, assigned", text: "Spots who promised what and when, and sends reminders before the deadline." },
  { icon: "search", title: "Search every meeting", text: "Ask “what did we decide about pricing?” and jump to the exact moment." },
  { icon: "arrows", title: "Works with your tools", text: "Push notes to Notion, Slack, Linear or email with one click." },
  { icon: "lock", title: "Private by default", text: "Your recordings are encrypted and never used to train models." },
];

const steps = [
  { title: "Connect your calendar", text: "Noezz Notes sees your upcoming meetings and asks before it joins." },
  { title: "Talk like normal", text: "It transcribes in 30+ languages and tells speakers apart." },
  { title: "Get the notes", text: "Summary, decisions and action items land in your inbox and workspace." },
];

const reviews = [
  { name: "Sarah K.", role: "Product lead", text: "I stopped taking notes in calls. The action items alone save me an hour a week." },
  { name: "Daniel M.", role: "Agency founder", text: "Clients get a clean recap five minutes after every call. It makes us look very organised." },
  { name: "Priya R.", role: "Engineering manager", text: "Search is the killer feature. I can find any decision from last quarter in seconds." },
];

const faqs = [
  { q: "Does it work with Zoom, Google Meet and Teams?", a: "Yes. Noezz Notes joins as a participant on all three, or records from your microphone for in-person meetings." },
  { q: "Do other people on the call know they are being recorded?", a: "Yes. The bot appears with a clear name and posts a short notice in the chat when it joins." },
  { q: "Which languages are supported?", a: "Transcription works in more than 30 languages, and summaries can be written in a different language from the call." },
  { q: "Can I cancel any time?", a: "Yes. Monthly plans stop at the end of the month. Yearly plans are refunded for unused months." },
  { q: "Is my data used to train AI models?", a: "No. Recordings and notes stay in your workspace, are encrypted, and can be deleted at any time." },
];

function SectionHead({ kicker, title, text }: { kicker: string; title: string; text?: string }) {
  return (
    <div className="reveal mx-auto max-w-2xl text-center">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-violet">{kicker}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-muted">{text}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <p className="border-b border-line bg-panel px-4 py-2 text-center text-xs text-muted">
        Demo landing page · fictional product · built by{" "}
        <a href="https://duongthanhnam.vercel.app" className="underline hover:text-text">
          Duong Thanh Nam
        </a>
      </p>
      <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-8 px-4 sm:px-6">
          <a href="#top" className="flex items-center gap-2 font-semibold">
            <span aria-hidden="true" className="grid size-7 place-items-center rounded-lg bg-violet text-sm text-bg">
              N
            </span>
            Noezz Notes
          </a>
          <nav aria-label="Main" className="hidden gap-6 text-sm text-muted md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-text">
                {n.label}
              </a>
            ))}
          </nav>
          <a href="#signup" className="ml-auto rounded-lg bg-text px-4 py-2 text-sm font-medium text-bg hover:bg-white">
            Get started
          </a>
        </div>
      </header>

      <main>
        <section id="top" className="relative isolate overflow-hidden px-4 pb-24 pt-20 text-center sm:px-6 sm:pt-28">
          <div aria-hidden="true" className="absolute left-1/2 top-0 -z-10 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-violet/20 blur-[120px]" />
          <a href="#how" className="play-in inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3 py-1 text-xs text-muted hover:text-text">
            <span className="rounded-full bg-cyan/15 px-2 py-0.5 text-cyan">New</span> Live summaries during the call →
          </a>
          <h1 className="play-in mx-auto mt-6 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl" style={{ "--d": "0.1s" } as React.CSSProperties}>
            Meeting notes that <span className="text-violet">write themselves</span>.
          </h1>
          <p className="play-in mx-auto mt-6 max-w-xl text-lg text-muted" style={{ "--d": "0.2s" } as React.CSSProperties}>
            Noezz Notes records your calls, writes the summary and pulls out every action item, so you can focus on the conversation.
          </p>
          <div className="play-in mt-9 flex flex-wrap justify-center gap-3" style={{ "--d": "0.3s" } as React.CSSProperties}>
            <a href="#signup" className="rounded-lg bg-violet px-6 py-3 text-sm font-medium text-bg hover:bg-[#a59aff]">
              Start free
            </a>
            <a href="#how" className="rounded-lg border border-line px-6 py-3 text-sm font-medium hover:border-muted">
              See how it works
            </a>
          </div>
          <p className="play-in mt-4 text-xs text-muted" style={{ "--d": "0.35s" } as React.CSSProperties}>
            Free for 5 meetings a month · No credit card
          </p>
          <div className="mt-16">
            <AppMockup />
          </div>
        </section>

        <section aria-label="Sample customers" className="border-y border-line py-10">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-muted">Trusted by fast-moving teams (sample logos)</p>
          <div className="mx-auto mt-6 flex max-w-5xl flex-wrap justify-center gap-x-12 gap-y-4 px-4 text-lg font-semibold tracking-tight text-muted/70">
            {logos.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
        </section>

        <section id="features" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <SectionHead kicker="Features" title="Everything after the meeting, done for you" />
          <div className="reveal mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="bg-bg p-7">
                <span aria-hidden="true" className="grid size-10 place-items-center rounded-lg border border-line bg-panel text-violet">
                  <Icon name={f.icon} />
                </span>
                <h3 className="mt-5 font-medium">{f.title}</h3>
                <p className="mt-2 text-sm text-muted">{f.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="how" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <SectionHead kicker="How it works" title="Set up in two minutes" />
          <ol className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className="reveal rounded-2xl border border-line bg-panel p-7">
                <span className="font-mono text-sm text-cyan">0{i + 1}</span>
                <h3 className="mt-3 text-lg font-medium">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="pricing" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <SectionHead kicker="Pricing" title="Simple plans that grow with you" text="Start free. Upgrade when your calendar fills up." />
          <div className="mt-10">
            <Pricing />
          </div>
        </section>

        <section aria-labelledby="reviews-title" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-violet">Reviews</p>
            <h2 id="reviews-title" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Loved by people with too many meetings
            </h2>
            <p className="mt-3 text-xs text-muted">Sample reviews for this demo</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.name} className="reveal rounded-2xl border border-line bg-panel p-7">
                <blockquote className="text-text/90">“{r.text}”</blockquote>
                <figcaption className="mt-5 text-sm">
                  <span className="font-medium">{r.name}</span> <span className="text-muted">· {r.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
          <SectionHead kicker="FAQ" title="Questions, answered" />
          <div className="reveal mt-12 divide-y divide-line rounded-2xl border border-line">
            {faqs.map((f) => (
              <details key={f.q} className="group px-6">
                <summary className="flex cursor-pointer items-center justify-between gap-4 py-5 font-medium">
                  {f.q}
                  <span aria-hidden="true" className="text-xl text-muted transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="pb-5 text-sm text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="signup" className="px-4 pb-24 sm:px-6">
          <div className="reveal relative isolate mx-auto max-w-4xl overflow-hidden rounded-3xl border border-line bg-panel px-6 py-16 text-center">
            <div aria-hidden="true" className="absolute inset-x-0 -top-24 -z-10 mx-auto h-64 w-2/3 rounded-full bg-cyan/15 blur-3xl" />
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Your next meeting, already summarised.</h2>
            <p className="mx-auto mt-4 max-w-md text-muted">Join the early access list and get 3 months of Pro free.</p>
            <div className="mt-8 flex justify-center">
              <EmailSignup />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-muted sm:flex-row sm:justify-between sm:px-6">
          <p>© 2026 Noezz Notes · a fictional product</p>
          <p>
            Design &amp; build:{" "}
            <a href="https://duongthanhnam.vercel.app" className="underline hover:text-text">
              Duong Thanh Nam
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
