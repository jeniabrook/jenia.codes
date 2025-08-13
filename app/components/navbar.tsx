import { Link } from "react-router";

export function Navbar() {
  return (
    <header className="bg-main border-b border-border sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 h-14">
        <nav>
          <Link className="flex items-center select-none" to={"/"}>
            <span className="font-mono">jenia.codes</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
