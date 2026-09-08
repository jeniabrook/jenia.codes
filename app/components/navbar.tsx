import { Link, NavLink } from "react-router";

const navLinks = [
  { to: "/", label: "cd ~", end: true },
  { to: "/about", label: "whoami" },
];

export function Navbar() {
  return (
    <header className="bg-main border-b border-border sticky top-0 z-50">
      <nav className="flex font-mono items-center justify-between px-4 h-14">
        <Link className="flex items-center select-none" to="/">
          <img
            src="/blue-logo-128.png"
            alt="Keycap with terminal icon"
            className="size-8"
          />
        </Link>
        <div className="flex gap-3">
          {navLinks.map(({ to, label, end }) => {
            const base =
              "px-3 py-1 bg-bw text-text border border-border rounded font-medium tracking-[0.02em] text-sm transition-[transform,box-shadow] duration-[170ms] ease-press";
            return (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  isActive
                    ? `${base} translate-x-1 translate-y-1 shadow-none`
                    : `${base} shadow-hard hover:duration-[110ms] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_var(--border)]`
                }
              >
                {label}
              </NavLink>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
