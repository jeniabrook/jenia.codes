import { GitHub, Linkedin, Mail } from "react-feather";

const socials = [
  { href: "https://github.com/jeniabrook", label: "GitHub", Icon: GitHub },
  { href: "https://www.linkedin.com/in/jeniabrook", label: "LinkedIn", Icon: Linkedin },
  { href: "mailto:jeniabrook@gmail.com", label: "Email", Icon: Mail },
];

export function Footer() {
  return (
    <footer className="bg-blank text-mtext border-t border-border">
      <div className="container mx-auto px-4 py-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-sm">
          &copy; {new Date().getFullYear()} jenia brook
        </p>
        <div className="flex items-center gap-5">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              {...(href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              aria-label={label}
              className="hover:text-main transition-colors"
            >
              <Icon size={24} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
