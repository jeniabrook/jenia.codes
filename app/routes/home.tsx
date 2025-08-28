import type { Route } from "./+types/home";
import { Tag } from "../components/ui/tag";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Jenia Brook - Frontend Engineer" },
    { name: "description", content: "I have a keyboard. I move pixels." },
  ];
}

export default function Home() {
  return (
    <section className="flex items-center justify-center text-center h-[calc(100vh-3.5rem)]">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-8">
          <h3 className="text-2xl w-fit mx-auto">Hi, my name is Jenia.</h3>
          <h1 className="font-title font-bold text-6xl md:text-8xl lg:text-9xl leading-none">
            I HAVE A <span className="text-main">KEYBOARD</span>.
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold max-w-4xl mx-auto">
            I'm a{" "}
            <Tag variant="accent" size="inherit" className="mb-1">
              frontend engineer,
            </Tag>{" "}
            and I{" "}
            <Tag
              variant="interactive"
              size="inherit"
              className="group hover:text-main transition-colors"
            >
              move pixels
              <span className="group-hover:text-accent transition-colors">
                .
              </span>
            </Tag>
          </h2>
        </div>
      </div>
    </section>
  );
}
