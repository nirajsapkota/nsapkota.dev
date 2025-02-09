import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export default function Navbar() {
  return (
    <header className="px-8 md:px-0 sticky top-0 z-50 w-screen border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 max-w-4xl mx-auto">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold">nsapkota.dev</span>
        </Link>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          <Link
            href="#services"
            className="transition-colors hover:text-primary"
          >
            Services
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link
            href="https://github.com/nirajsapkota"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="ghost" size="icon">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
