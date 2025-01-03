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
    <div className="grid auto-rows-max grid-rows-[min-content_1fr] min-h-svh">
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
      <main className="container self-center mx-auto px-4">
        <section className="self-center">
          <h3 className="text-2xl mb-3">Hi, my name is Jenia.</h3>
          <h1 className="font-title font-bold text-7xl mb-3">
            I HAVE A KEYBOARD.
          </h1>
          <h3 className="text-2xl">
            I'm a frontend engineer, and I move pixels.
          </h3>
        </section>
      </main>
    </div>
  );
}
