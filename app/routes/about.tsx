import type { Route } from "./+types/about";
import { Tag } from "../components/ui/tag";
import {
  Timeline,
  TimelineCard,
  TimelineCardHeader,
  TimelineTechStack,
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

export default function About() {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] py-16 px-4 md:py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-title font-bold text-4xl md:text-6xl lg:text-7xl text-left mb-12 md:mb-16">
          ABOUT
        </h1>
        <div className="space-y-6 text-lg md:text-xl leading-relaxed text-pretty">
          <p>
            I'm currently building innovative products at <strong>Flare</strong>
            , teaming up with some seriously talented people to create
            experiences that bring technology and people together in meaningful
            ways.
          </p>
          <p>
            I like to live in the sweet spot between engineering and design —
            solving tricky problems under the hood while keeping things
            intuitive, engaging, and enjoyable on the surface. For me, it's all
            about making things that work beautifully and feel great to use.
          </p>
          <p>
            When I'm not glued to a screen, you'll probably find me spending
            time with my wife and three kids, riding my mountain bike, playing
            guitar, listening to music, or watching movies and TV shows.
          </p>
        </div>

        {/* Experience Section */}
        <section className="mt-16 md:mt-24" aria-label="Work Experience">
          <h2 className="font-title font-bold text-3xl md:text-4xl lg:text-5xl text-left mb-12 md:mb-16">
            EXPERIENCE
          </h2>

          <Timeline>
            {/* Flare */}
            <TimelineCard accent="main">
              <TimelineCardHeader
                company="Flare"
                description="Legal tech platform modernizing legal services through intelligent systems"
                startDate="Nov 2022"
                endDate="Present"
              />

              <div className="space-y-4 text-lg md:text-xl leading-relaxed text-pretty mb-6">
                <p>
                  At Flare, I act as a frontend lead, responsible for frontend architecture, technical direction, and developer experience across multiple products. My work spans monorepo design, shared infrastructure, and frontend standards, with a strong focus on scalability and long-term maintainability across web and mobile applications.
                </p>
                <p>
                  A major part of my role involves building and introducing AI-first development workflows, including design system integration pipelines, LLM memory banks, and AI-assisted automation. I also own and evolve the company's design system and regularly lead architectural discussions and knowledge-sharing sessions that shape how frontend engineering is done across the organization.
                </p>
              </div>

              <TimelineTechStack>
                <Tag variant="accent">React</Tag>
                <Tag variant="accent">TypeScript</Tag>
                <Tag variant="accent">Next.js</Tag>
                <Tag variant="accent">React Router</Tag>
                <Tag variant="accent">Tailwind</Tag>
                <Tag variant="accent">GraphQL</Tag>
                <Tag variant="accent">Turborepo</Tag>
                <Tag variant="accent">Playwright</Tag>
                <Tag variant="accent">Node.js</Tag>
              </TimelineTechStack>
            </TimelineCard>

            {/* Healthy.io */}
            <TimelineCard accent="accent">
              <TimelineCardHeader
                company="Healthy.io"
                description="Transforming smartphone cameras into clinical-grade medical devices"
                startDate="Dec 2018"
                endDate="Nov 2022"
              />

              <div className="space-y-4 text-lg md:text-xl leading-relaxed text-pretty mb-6">
                <p>
                  At Healthy.io, I led the development of the company's first B2C web application, taking it from initial concept through production. I was responsible for core frontend architecture and implementation, introducing technologies such as Next.js, Emotion, and React Hook Form, which were later adopted across other projects in the company.
                </p>
                <p>
                  Alongside feature development, I significantly improved code quality and scalability by implementing end-to-end testing with Cypress and React Testing Library, modernizing legacy React codebases from class components to hooks, migrating state management from Redux and Redux-Saga to React Query, and establishing the company's first design system and UI component library using Storybook. I also led the migration of the frontend into a monorepo architecture using npm workspaces, Turborepo, and Changesets.
                </p>
              </div>

              <TimelineTechStack>
                <Tag variant="accent">React</Tag>
                <Tag variant="accent">Next.js</Tag>
                <Tag variant="accent">TypeScript</Tag>
                <Tag variant="accent">Emotion</Tag>
                <Tag variant="accent">Turborepo</Tag>
                <Tag variant="accent">Cypress</Tag>
              </TimelineTechStack>
            </TimelineCard>

            {/* Headstart */}
            <TimelineCard accent="interactive">
              <TimelineCardHeader
                company="Headstart"
                description="Israel's first and leading crowdfunding platform"
                startDate="Oct 2017"
                endDate="Dec 2018"
              />

              <div className="space-y-4 text-lg md:text-xl leading-relaxed text-pretty mb-6">
                <p>
                  At Headstart Group, I was responsible for frontend ownership, including UI task planning and close collaboration with designers to deliver high-quality user experiences across multiple crowd-funding platforms. I built reusable React UI components and managed application state using Redux and GraphQL, enabling shared usage across different products and domains.
                </p>
                <p>
                  In addition to frontend work, I contributed to backend development using Node.js and Express, and was involved in deploying scalable, highly available microservices. These services were containerized and continuously integrated, running in production on Kubernetes.
                </p>
              </div>

              <TimelineTechStack>
                <Tag variant="accent">React</Tag>
                <Tag variant="accent">Redux</Tag>
                <Tag variant="accent">GraphQL</Tag>
                <Tag variant="accent">Node.js</Tag>
                <Tag variant="accent">PostgreSQL</Tag>
                <Tag variant="accent">CSS Modules</Tag>
              </TimelineTechStack>
            </TimelineCard>
          </Timeline>
        </section>
      </div>
    </div>
  );
}
