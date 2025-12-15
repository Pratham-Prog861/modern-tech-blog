import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold tracking-tight hover:opacity-90 transition-opacity"
        >
          <div className="p-1.5 bg-primary rounded-lg text-primary-foreground">
            <Code2 className="w-5 h-5" />
          </div>
          <span>Modern Tech Blog</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors [&.active]:text-primary"
          >
            Home
          </Link>
          <Link
            to="/blog"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors [&.active]:text-primary"
          >
            Blogs
          </Link>
          <Button asChild size="sm">
            <Link to="/blog">Get Started</Link>
          </Button>
        </nav>

        <button
          className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t bg-background animate-in slide-in-from-top-5 fade-in duration-200">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <Link
              to="/"
              className="text-base font-medium text-muted-foreground hover:text-primary transition-colors [&.active]:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/blog"
              className="text-base font-medium text-muted-foreground hover:text-primary transition-colors [&.active]:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Blogs
            </Link>
            <Button asChild className="w-full mt-2">
              <Link to="/blog" onClick={() => setIsMenuOpen(false)}>
                Get Started
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
