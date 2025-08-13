import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Jenia Brook - Frontend Engineer" },
    { name: "description", content: "I have a keyboard. I move pixels." },
  ];
}

export default function Home() {
  return (
    // Hero Section
    <section
      className="flex items-center justify-center text-center"
      style={{ height: "calc(100vh - 3.5rem)" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="space-y-8">
          <h3 className="text-2xl w-fit mx-auto">Hi, my name is Jenia.</h3>
          <h1 className="font-title font-bold text-6xl md:text-8xl lg:text-9xl leading-none">
            I HAVE A <span className="text-main">KEYBOARD</span>.
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold max-w-4xl mx-auto leading-relaxed">
            I'm a{" "}
            <span className="bg-accent px-3 py-2 rounded-lg shadow whitespace-nowrap">
              frontend engineer
            </span>{" "}
            , and I{" "}
            <span className="bg-interactive px-3 py-2 rounded-lg shadow whitespace-nowrap">
              move pixels
            </span>{" "}
            .
          </h2>
        </div>
      </div>
    </section>
  );
}
