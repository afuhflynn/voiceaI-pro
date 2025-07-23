import Link from "next/link";
import { Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} VoiceAI Pro. All rights reserved.
        </p>

        <nav className="flex items-center gap-6">
          <Link
            href="https://github.com/afuhflynn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            <Github className="w-5 h-5" />
          </Link>
          <Link
            href="https://x.com/afuhflynn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            <Twitter className="w-5 h-5" />
          </Link>
        </nav>
      </div>
    </footer>
  );
}
