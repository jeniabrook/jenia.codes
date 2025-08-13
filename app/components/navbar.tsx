import { Link } from "react-router";
import { TerminalIcon } from "./icons/terminal";

export function Navbar() {
  return (
    <header className="bg-main border-b border-border sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 h-14">
        <nav>
          <Link className="group flex items-center select-none" to={"/"}>
            <TerminalIcon />
            <span className="font-mono">jenia.codes</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
