import { ArrowDown } from "react-feather";
import type { Route } from "./+types/about";
import { PixelPhoto } from "../components/ui/pixel-photo";
import {
  Timeline,
  TimelineAside,
  TimelineBody,
  TimelineCard,
  TimelineClimb,
  TimelineItem,
} from "../components/ui/timeline";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About - Jenia Brook" },
    {
      name: "description",
      content:
        "Frontend engineer passionate about creating meaningful user experiences.",
    },
  ];
}

const OFF_SCREEN = [
  "A wife and three kids",
  "Mountain biking",
  "Playing guitar",
  "Listening to music",
  "Movies and TV shows",
];

export default function About() {
  return (
    <>
      {/* PAGE TITLE */}
      <section className="relative overflow-hidden border-b-[3px] border-border">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.09] [background-image:radial-gradient(var(--border)_1px,transparent_1px)] [background-size:22px_22px] md:[background-size:24px_24px]"
        />
        <div
          aria-hidden
          className="absolute top-6 -right-10 hidden size-80 rotate-12 animate-pop [animation-delay:120ms] rounded border-[3px] border-border bg-accent lg:block"
        />
        <div
          aria-hidden
          className="absolute top-24 right-32 hidden size-56 -rotate-9 animate-pop [animation-delay:180ms] rounded border-[3px] border-border bg-interactive lg:block"
        />
        <div className="relative container mx-auto px-4 py-8 md:py-14">
          <div className="mb-4 flex animate-rise items-center gap-2 font-mono text-[11px] tracking-[0.14em] text-[var(--text-muted)] uppercase md:mb-5.5 md:text-xs md:tracking-[0.16em]">
            <span>jenia.codes</span>
            <span>/</span>
            <span className="text-text">whoami</span>
          </div>
          <h1 className="relative inline-block animate-rise [animation-delay:60ms] font-title text-[84px] leading-[0.82] font-bold tracking-[-0.03em] uppercase md:text-[168px]">
            <span
              aria-hidden
              className="absolute -inset-x-1.5 bottom-2 h-[22px] origin-left animate-wipe-x [animation-delay:300ms] bg-main md:-inset-x-2.5 md:bottom-3.5 md:h-10"
            />
            <span className="relative">About</span>
          </h1>
          <p className="mt-5 max-w-[640px] animate-rise [animation-delay:200ms] text-lg leading-normal font-semibold md:mt-6.5 md:text-[22px]">
            Frontend engineer living in the sweet spot between engineering and design.
          </p>
        </div>
      </section>

      {/* BODY */}
      <section className="container mx-auto px-4 py-8 md:flex md:gap-16 md:py-[72px]">
        <div className="min-w-0 md:max-w-[680px] md:grow">
          <div className="mb-5 flex animate-rise-sm [animation-delay:260ms] items-center gap-3 md:mb-6.5 md:gap-3.5">
            <span className="block size-4 border-2 border-border bg-main md:size-[18px]" />
            <span className="font-mono text-[11px] tracking-[0.16em] uppercase md:text-xs">
              the long version
            </span>
          </div>
          <div className="flex flex-col gap-5 text-[17px] leading-[1.65] text-pretty md:gap-6.5 md:text-xl">
            <p className="animate-rise-sm [animation-delay:300ms]">
              I'm currently building innovative products at{" "}
              <strong className="rounded bg-accent px-1.5 py-px font-bold">Flare</strong>,
              teaming up with some seriously talented people to create experiences that
              bring technology and people together in meaningful ways.
            </p>
            <p className="animate-rise-sm [animation-delay:340ms]">
              I like to live in the sweet spot between engineering and design — solving
              tricky problems under the hood while keeping things intuitive, engaging, and
              enjoyable on the surface. For me, it's all about making things that work
              beautifully and feel great to use.
            </p>
            <p className="animate-rise-sm [animation-delay:380ms]">
              When I'm not glued to a screen, you'll probably find me spending time with my
              wife and three kids, riding my mountain bike, playing guitar, listening to
              music, or watching movies and TV shows.
            </p>
          </div>
        </div>

        <div className="mt-8 flex shrink-0 flex-col gap-7 md:mt-0 md:w-[440px]">
          <div className="animate-rise [animation-delay:360ms] rounded border border-border bg-interactive p-5 shadow-hard-lg md:p-6.5">
            <div className="mb-4 font-mono text-[11px] tracking-[0.16em] uppercase md:mb-5">
              away from the screen
            </div>
            <div className="flex flex-col gap-3 md:gap-4">
              {OFF_SCREEN.map((item) => (
                <span key={item} className="text-[17px] font-semibold md:text-lg">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <PixelPhoto
            src="/jenia.jpg"
            pixelSrc="/jenia-pixel.png"
            alt="Jenia Brook"
            className="animate-rise [animation-delay:430ms]"
          />
        </div>
      </section>

      {/* EXPERIENCE */}
      <section aria-label="Work Experience" className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(var(--border)_1px,transparent_1px)] [background-size:24px_24px]"
        />
        <div className="relative container mx-auto px-4 pt-8 md:pt-[76px]">
          <div className="flex flex-col gap-3 border-b-[3px] border-border pb-3.5 md:flex-row md:items-end md:justify-between md:gap-8 md:pb-5">
            <h2 className="animate-rise font-title text-[54px] leading-[0.85] font-bold tracking-[-0.03em] uppercase md:text-[96px]">
              Experience
            </h2>
            <div className="flex animate-rise-sm [animation-delay:90ms] items-center gap-2.5 md:pb-3">
              <span className="block size-2.5 rounded-full border-2 border-border bg-interactive" />
              <span className="font-mono text-[11px] tracking-[0.14em] uppercase md:text-[13px] md:tracking-[0.16em]">
                2012 — present &nbsp;/&nbsp; 5 companies
              </span>
            </div>
          </div>
        </div>

        <div className="relative container mx-auto px-4 pt-8 pb-10 md:pt-14 md:pb-[76px]">
          <Timeline>
            <TimelineItem year="2022" accent="main">
              <TimelineCard
                accent="main"
                company="Flare"
                role="head of frontend"
                blurb="Legal tech platform modernizing legal services through intelligent systems"
                dates="nov 2022 → present"
              >
                <TimelineBody>
                  <p>
                    At Flare, I'm the head of frontend, responsible for frontend
                    architecture, technical direction, and developer experience across
                    multiple products. My work spans monorepo design, shared
                    infrastructure, and frontend standards, with a strong focus on
                    scalability and long-term maintainability across web and mobile
                    applications.
                  </p>
                  <p>
                    A major part of my role involves building and introducing AI-first
                    development workflows, including design system integration pipelines,
                    LLM memory banks, and AI-assisted automation. I also own and evolve the
                    company's design system and regularly lead architectural discussions
                    and knowledge-sharing sessions that shape how frontend engineering is
                    done across the organization.
                  </p>
                  <p>
                    Beyond the architecture: I run our frontend guild, lead the
                    knowledge-sharing sessions, and interview most of the frontend
                    engineers who join.
                  </p>
                </TimelineBody>
                <TimelineClimb
                  steps={[
                    { title: "Senior Frontend Engineer", date: "nov 2022" },
                    { title: "Principal Frontend Engineer", date: "apr 2025" },
                    { title: "Head of Frontend", date: "aug 2025 → now", current: true },
                  ]}
                />
              </TimelineCard>
            </TimelineItem>

            <TimelineItem year="2018" accent="accent">
              <TimelineCard
                accent="accent"
                company="Healthy.io"
                role="senior frontend engineer"
                blurb="Transforming smartphone cameras into clinical-grade medical devices"
                dates="dec 2018 → nov 2022"
              >
                <TimelineBody>
                  <p>
                    At Healthy.io, I led the development of the company's first B2C web
                    application, taking it from initial concept through production. I was
                    responsible for core frontend architecture and implementation,
                    introducing technologies such as Next.js, Emotion, and React Hook Form,
                    which were later adopted across other projects in the company.
                  </p>
                  <p>
                    Alongside feature development, I significantly improved code quality
                    and scalability by implementing end-to-end testing with Cypress and
                    React Testing Library, modernizing legacy React codebases from class
                    components to hooks, migrating state management from Redux and
                    Redux-Saga to React Query, and establishing the company's first design
                    system and UI component library using Storybook. I also led the
                    migration of the frontend into a monorepo architecture using npm
                    workspaces, Turborepo, and Changesets.
                  </p>
                </TimelineBody>
                <TimelineClimb
                  steps={[
                    { title: "Frontend Engineer", date: "dec 2018" },
                    { title: "Senior Frontend Engineer", date: "jan 2021 → nov 2022" },
                  ]}
                />
              </TimelineCard>
            </TimelineItem>

            <TimelineItem year="2017" accent="interactive">
              <TimelineCard
                accent="interactive"
                company="Headstart"
                role="frontend engineer"
                blurb="Israel's first and leading crowdfunding platform"
                dates="oct 2017 → dec 2018"
              >
                <TimelineBody>
                  <p>
                    At Headstart Group, I was responsible for frontend ownership, including
                    UI task planning and close collaboration with designers to deliver
                    high-quality user experiences across multiple crowd-funding platforms.
                    I built reusable React UI components and managed application state
                    using Redux and GraphQL, enabling shared usage across different
                    products and domains.
                  </p>
                  <p>
                    In addition to frontend work, I contributed to backend development
                    using Node.js and Express, and was involved in deploying scalable,
                    highly available microservices. These services were containerized and
                    continuously integrated, running in production on Kubernetes.
                  </p>
                </TimelineBody>
              </TimelineCard>
            </TimelineItem>

            <TimelineItem year="2012" accent="blank" last>
              <TimelineAside
                label="before frontend"
                note="where the testing habits came from"
                entries={[
                  {
                    company: "888holdings",
                    dates: "jun 2016 → oct 2017",
                    role: "Software Automation Engineer.",
                    body: "Built and maintained an automation framework for testing web applications, with Selenium and C#.",
                  },
                  {
                    company: "AVT",
                    dates: "may 2012 → may 2016",
                    role: "QA Engineer.",
                    body: "Four years of breaking other people's software before I started writing my own.",
                  },
                ]}
              />
            </TimelineItem>
          </Timeline>
        </div>
      </section>
    </>
  );
}
