import { Fragment } from "react";
import { Link } from "react-router";
import { ArrowRight, GitHub, Grid, Layers, Linkedin, Mail, Terminal, Users } from "react-feather";
import type { Route } from "./+types/home";
import { Tag } from "../components/ui/tag";
import { Keycap, KeycapPeriod } from "../components/ui/keycap";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Jenia Brook - Frontend Engineer" },
    { name: "description", content: "I have a keyboard. I move pixels." },
  ];
}

const TICKER_PHRASES = [
  "head of frontend",
  "design systems",
  "monorepo architecture",
  "react",
  "typescript",
];

/** Copies in the marquee track. Must match the -16.6667% shift in @keyframes marquee. */
const TICKER_COPIES = 6;

const KEYCAPS = [
  { letter: "K", face: "bg" },
  { letter: "E", face: "main" },
  { letter: "Y", face: "bg" },
  { letter: "B", face: "bg" },
  { letter: "O", face: "accent" },
  { letter: "A", face: "interactive" },
  { letter: "R", face: "bg" },
  { letter: "D", face: "bg" },
] as const;

const CARDS = [
  {
    Icon: Grid,
    tint: "bg-main",
    title: "Design systems",
    body: "I own design systems — the components and tokens every product is built from, and the work of keeping design and code in step.",
  },
  {
    Icon: Layers,
    tint: "bg-interactive",
    title: "Architecture",
    body: "Monorepo design, shared infrastructure, and the frontend standards our web and mobile apps are built on.",
  },
  {
    Icon: Terminal,
    tint: "bg-bg",
    title: "Agent tooling",
    body: "The context, conventions and guardrails that make agents useful on a real codebase — not on a demo.",
  },
  {
    Icon: Users,
    tint: "bg-[var(--bg-secondary)]",
    title: "The team",
    body: "Guild sessions, architecture discussions, interviews. A good part of the job is helping other people build well.",
  },
];

const ELSEWHERE = [
  { Icon: GitHub, label: "github.com/jeniabrook", href: "https://github.com/jeniabrook" },
  { Icon: Linkedin, label: "in/jeniabrook", href: "https://www.linkedin.com/in/jeniabrook" },
  { Icon: Mail, label: "jeniabrook@gmail.com", href: "mailto:jeniabrook@gmail.com" },
];

/**
 * Each copy is sized by its own content (`w-max` track, `shrink-0` copies) —
 * pinning them to a fraction of the viewport makes the nowrap text overlap on
 * narrow screens and leave a gap on wide ones. Six copies with a one-copy
 * shift keep the loop seamless past ~3500px of viewport.
 */
function TickerCopy({ hidden }: { hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-5 pr-5 font-mono text-[11px] tracking-[0.18em] whitespace-nowrap text-bg uppercase md:gap-6 md:pr-6 md:text-[13px]"
    >
      {TICKER_PHRASES.map((phrase) => (
        <Fragment key={phrase}>
          <span>{phrase}</span>
          <span aria-hidden className="text-main">
            /
          </span>
        </Fragment>
      ))}
    </div>
  );
}

function Ticker() {
  return (
    <div className="relative z-10 flex h-9 items-center overflow-hidden border-b border-border bg-blank md:h-11">
      <div className="flex w-max animate-marquee">
        {Array.from({ length: TICKER_COPIES }, (_, i) => (
          <TickerCopy key={i} hidden={i > 0} />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Ticker />

      {/* HERO */}
      <section className="relative overflow-hidden py-8 md:py-[76px]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.09] [background-image:radial-gradient(var(--border)_1px,transparent_1px)] [background-size:22px_22px] md:[background-size:24px_24px]"
        />
        <div className="relative container mx-auto px-4">
          <div className="mb-7 inline-flex animate-rise items-center gap-2 rounded border border-border bg-bw px-3 py-[7px] shadow-hard">
            <span className="block size-2 rounded-full border border-border bg-main" />
            <span className="font-mono text-xs tracking-[0.14em] uppercase">
              hi, my name is jenia
            </span>
          </div>

          <h1 className="animate-rise [animation-delay:70ms] font-title text-[56px] leading-[0.84] font-bold tracking-[-0.025em] uppercase md:text-[158px]">
            I have a
          </h1>

          <div className="mt-4 flex max-w-[358px] flex-wrap items-end gap-2 md:mt-7 md:max-w-none md:flex-nowrap md:gap-3">
            {KEYCAPS.map(({ letter, face }, i) => (
              <Keycap
                key={letter}
                face={face}
                className="animate-drop"
                style={{ animationDelay: `${150 + i * 38}ms` }}
              >
                {letter}
              </Keycap>
            ))}
            <KeycapPeriod className="animate-drop" style={{ animationDelay: "454ms" }} />
          </div>

          <h2 className="mt-7 animate-rise [animation-delay:470ms] text-xl leading-[2] font-semibold md:mt-[46px] md:text-[34px] md:leading-[1.6]">
            I'm a{" "}
            <Tag variant="accent" size="inherit" className="mb-1">
              frontend engineer,
            </Tag>{" "}
            and I{" "}
            <Tag variant="interactive" size="inherit">
              move pixels.
            </Tag>
          </h2>

          <Link
            to="/about"
            className="mt-8 inline-flex animate-rise [animation-delay:540ms] items-center gap-2.5 rounded border border-border bg-blank px-6 py-[15px] font-title text-lg font-semibold tracking-[0.06em] text-bg uppercase shadow-hard-main transition-[transform,box-shadow] duration-[170ms] ease-press hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_var(--main)] hover:duration-[110ms] md:mt-12"
          >
            read the long version
            <ArrowRight size={18} strokeWidth={2.5} />
          </Link>
        </div>
      </section>

      {/* THE SWEET SPOT */}
      <section className="border-y-[3px] border-border bg-accent py-10 md:py-[68px]">
        <div className="container mx-auto px-4">
          <div className="mb-6 flex flex-col gap-3 md:mb-[34px] md:flex-row md:items-end md:justify-between md:gap-8">
            <h2 className="animate-rise-sm [animation-delay:560ms] font-title text-[44px] leading-[0.95] font-bold tracking-[-0.02em] uppercase md:text-[60px]">
              The sweet spot
            </h2>
            <p className="animate-rise-sm [animation-delay:590ms] max-w-[420px] text-base leading-relaxed md:mb-1.5 md:text-[17px]">
              Between engineering and design — tricky problems under the hood,
              intuitive and enjoyable on the surface.
            </p>
          </div>

          <div className="grid gap-[18px] md:grid-cols-2 md:gap-5 lg:grid-cols-4">
            {CARDS.map(({ Icon, tint, title, body }, i) => (
              <div
                key={title}
                className="animate-rise-sm rounded border border-border bg-bw p-5 shadow-hard-md md:p-[26px]"
                style={{ animationDelay: `${620 + i * 45}ms` }}
              >
                <div
                  className={`mb-4 flex size-[42px] items-center justify-center rounded border border-border shadow-hard md:mb-5 md:size-12 ${tint}`}
                >
                  <Icon size={22} strokeWidth={2} />
                </div>
                <h3 className="mb-2 font-title text-2xl leading-[1.1] font-bold uppercase md:text-[26px]">
                  {title}
                </h3>
                <p className="text-base leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ELSEWHERE */}
      <section className="flex flex-1 items-center border-b border-border bg-main py-10 md:py-[56px]">
        <div className="container mx-auto flex w-full flex-col gap-6 px-4 md:flex-row md:flex-wrap md:items-end md:justify-between md:gap-10">
          <div>
            <div className="mb-3 animate-rise-sm [animation-delay:790ms] font-mono text-[11px] tracking-[0.16em] uppercase">
              elsewhere
            </div>
            <h2 className="max-w-[560px] animate-rise-sm [animation-delay:810ms] font-title text-[34px] leading-[1.05] font-bold tracking-[-0.02em] uppercase md:text-[40px]">
              Find me in the usual places.
            </h2>
          </div>
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
            {ELSEWHERE.map(({ Icon, label, href }, i) => (
              <a
                key={label}
                href={href}
                {...(href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="flex animate-rise-sm items-center gap-2.5 rounded border border-border bg-bw px-3.5 py-3 font-mono text-[13px] shadow-hard-md transition-[transform,box-shadow] duration-[170ms] ease-press hover:translate-x-[2px] hover:translate-y-[2px] hover:text-text hover:shadow-hard hover:duration-[110ms] md:px-4 md:text-sm"
                style={{ animationDelay: `${840 + i * 45}ms` }}
              >
                <Icon size={17} strokeWidth={2} className="shrink-0" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
