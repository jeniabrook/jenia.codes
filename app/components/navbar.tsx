import { Link } from "react-router";

export function Navbar() {
  return (
    <header className="bg-main border-b border-border sticky top-0 z-50">
      <nav className="flex font-mono items-center justify-between px-4 h-14">
        <Link className="flex items-center select-none gap-2" to={"/"}>
          <img
            src="/blue-logo-128.png"
            alt="Keycap with terminal icon"
            className="size-8"
          />
          <span className="hidden md:inline">jenia brook</span>
        </Link>
        <div className="flex gap-6">
          <Link to={"/about"}>about</Link>
          <Link className="hidden" to={"/experience"}>
            experience
          </Link>
        </div>
      </nav>
    </header>
  );
}
