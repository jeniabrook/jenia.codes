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
    <div className="flex flex-col min-h-svh">
      <header className="bg-main border-b border-border sticky top-0">
        <div className="flex items-center justify-between px-4 h-14">
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
      <main className="container mx-auto flex flex-col flex-1 px-4">
        <section className="grid gap-10 py-8 sm:gap-4 sm:grid-cols-2 sm:py-40">
          <div className="text-balance">
            <h3 className="text-2xl mb-3">Hi, my name is Jenia.</h3>
            <h1 className="font-title font-bold text-7xl mb-3">
              I HAVE A KEYBOARD.
            </h1>
            <h3 className="text-2xl">
              I'm a frontend engineer, and I move pixels.
            </h3>
          </div>
          <div className="group place-self-center grid p-9">
            <div className="flex justify-center items-center col-start-1 z-3 row-start-1 transition-all duration-200 rotate-12 origin-bottom-right size-52 bg-accent rounded-md shadow group-hover:rotate-0">
              <img
                className="size-48 rounded-md grayscale group-hover:grayscale-0 transition-all duration-200"
                src="/me.jpg"
                alt="Jenia Brook"
              />
            </div>
            <div className="col-start-1 z-2 row-start-1 size-52 bg-interactive rounded-md shadow"></div>
            <div className="col-start-1 row-start-1 size-52 transition-all duration-200 -rotate-12 origin-bottom-right z-0 bg-main rounded-md shadow group-hover:rotate-0"></div>
          </div>
        </section>
        <section>Some</section>
        <section>Some</section>
        <section>Some</section>
        <section>Some</section>
      </main>
    </div>
  );
}
