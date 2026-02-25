import { GitHub, Linkedin, Mail } from "react-feather";

export function Footer() {
  return (
    <footer className="bg-blank text-mtext border-t border-border">
      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-sm">
          &copy; {new Date().getFullYear()} jenia brook
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/jeniabrook"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-main transition-colors"
          >
            <GitHub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/jeniabrook"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-main transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:jeniabrook@gmail.com"
            aria-label="Email"
            className="hover:text-main transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
