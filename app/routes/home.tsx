import { TerminalIcon } from "~/components/icons/terminal";
import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="grid auto-rows-min min-h-svh">
      <header className="bg-main border-b-2 border-border sticky top-0">
        <div className="flex items-center justify-between px-4 h-12">
          <nav>
            <Link
              className="group flex items-center gap-4 select-none"
              to={"/"}
            >
              <div className="flex items-center justify-center size-8 bg-accent transition rounded shadow group-hover:shadow-none">
                <TerminalIcon strokeWidth="3" />
              </div>
              jenia.codes
            </Link>
          </nav>
          <div>Some other stuff</div>
        </div>
      </header>
      <main className="container mx-auto px-4 mt-8">
        <section>
          <h3 className="text-2xl">Hi, my name is Jenia.</h3>
          <h1 className="font-heading text-7xl">I HAVE A KEYBOARD.</h1>
          <h3 className="text-2xl">
            I'm a frontend engineer, and I move pixels.
          </h3>
        </section>
        {Array.from(Array(100).keys()).map(() => (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus totam sapiente nisi magnam aliquam assumenda maiores
            voluptatibus sequi autem voluptate nostrum molestiae, sed facilis
            error dicta quibusdam voluptatum. Necessitatibus, dolorum?
          </p>
        ))}
      </main>
    </div>
  );
}
