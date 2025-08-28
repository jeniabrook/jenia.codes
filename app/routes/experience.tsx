import type { Route } from "./+types/experience";
import { Tag } from "../components/ui/tag";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Experience - Jenia Brook" },
    { name: "description", content: "My professional work experience and background." },
  ];
}

export default function Experience() {
  return (
    <div className="min-h-screen py-16 px-4 md:py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-title font-bold text-4xl md:text-6xl lg:text-7xl text-left mb-16 md:mb-24">
          EXPERIENCE
        </h1>
        
        <div className="space-y-16 md:space-y-20">
          {/* Flare */}
          <div className="space-y-6">
            <div>
              <h2 className="font-title font-bold text-3xl md:text-4xl mb-2">
                Flare
              </h2>
              <div className="flex flex-col md:flex-row md:items-center md:gap-4 mb-4">
                <h3 className="font-mono text-xl md:text-2xl">Senior Frontend Engineer</h3>
                <span className="text-text-muted font-mono text-lg md:text-xl">2023 - Present</span>
              </div>
            </div>
            
            <ul className="space-y-3 text-lg md:text-xl leading-relaxed text-pretty">
              <li className="flex items-start">
                <span className="text-main mr-3 mt-1">•</span>
                <span>Building innovative products that bring technology and people together in meaningful ways</span>
              </li>
              <li className="flex items-start">
                <span className="text-main mr-3 mt-1">•</span>
                <span>Leading frontend development initiatives and collaborating with talented teams</span>
              </li>
              <li className="flex items-start">
                <span className="text-main mr-3 mt-1">•</span>
                <span>Creating exceptional user experiences with modern web technologies</span>
              </li>
              <li className="flex items-start">
                <span className="text-main mr-3 mt-1">•</span>
                <span>Mentoring junior developers and contributing to architectural decisions</span>
              </li>
            </ul>
            
            <div className="flex flex-wrap gap-2 mt-6">
              <Tag variant="main">React</Tag>
              <Tag variant="accent">TypeScript</Tag>
              <Tag variant="interactive">Next.js</Tag>
              <Tag variant="main">Tailwind CSS</Tag>
              <Tag variant="accent">Node.js</Tag>
              <Tag variant="interactive">GraphQL</Tag>
              <Tag variant="main">PostgreSQL</Tag>
            </div>
          </div>

          {/* Previous Company */}
          <div className="space-y-6">
            <div>
              <h2 className="font-title font-bold text-3xl md:text-4xl mb-2">
                Previous Company
              </h2>
              <div className="flex flex-col md:flex-row md:items-center md:gap-4 mb-4">
                <h3 className="font-mono text-xl md:text-2xl">Frontend Developer</h3>
                <span className="text-text-muted font-mono text-lg md:text-xl">2020 - 2023</span>
              </div>
            </div>
            
            <ul className="space-y-3 text-lg md:text-xl leading-relaxed text-pretty">
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                <span>Developed responsive web applications improving user experience across multiple products</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                <span>Collaborated with design and backend teams to deliver high-quality solutions</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                <span>Optimized application performance and implemented best practices</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                <span>Participated in code reviews and maintained clean, maintainable codebases</span>
              </li>
            </ul>
            
            <div className="flex flex-wrap gap-2 mt-6">
              <Tag variant="interactive">Vue.js</Tag>
              <Tag variant="main">JavaScript</Tag>
              <Tag variant="accent">SCSS</Tag>
              <Tag variant="interactive">Python</Tag>
              <Tag variant="main">Django</Tag>
              <Tag variant="accent">MySQL</Tag>
            </div>
          </div>

          {/* Earlier Role */}
          <div className="space-y-6">
            <div>
              <h2 className="font-title font-bold text-3xl md:text-4xl mb-2">
                Startup Company
              </h2>
              <div className="flex flex-col md:flex-row md:items-center md:gap-4 mb-4">
                <h3 className="font-mono text-xl md:text-2xl">Junior Frontend Developer</h3>
                <span className="text-text-muted font-mono text-lg md:text-xl">2018 - 2020</span>
              </div>
            </div>
            
            <ul className="space-y-3 text-lg md:text-xl leading-relaxed text-pretty">
              <li className="flex items-start">
                <span className="text-interactive mr-3 mt-1">•</span>
                <span>Built user interfaces for early-stage products in a fast-paced environment</span>
              </li>
              <li className="flex items-start">
                <span className="text-interactive mr-3 mt-1">•</span>
                <span>Worked closely with founders and designers to bring ideas to life</span>
              </li>
              <li className="flex items-start">
                <span className="text-interactive mr-3 mt-1">•</span>
                <span>Learned modern web development practices and agile methodologies</span>
              </li>
              <li className="flex items-start">
                <span className="text-interactive mr-3 mt-1">•</span>
                <span>Contributed to product strategy and user experience decisions</span>
              </li>
            </ul>
            
            <div className="flex flex-wrap gap-2 mt-6">
              <Tag variant="main">React</Tag>
              <Tag variant="accent">JavaScript</Tag>
              <Tag variant="interactive">CSS</Tag>
              <Tag variant="main">Express.js</Tag>
              <Tag variant="accent">MongoDB</Tag>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}