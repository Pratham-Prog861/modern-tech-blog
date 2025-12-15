import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";
import { ArrowRight, Terminal } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-32 md:pt-32 md:pb-48">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

      <div className="container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border bg-muted/50 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-sm mb-8 animate-fade-up">
          <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          <span>Latest articles updated weekly</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 animate-fade-up delay-100">
          Master the Art of <br className="hidden md:block" />
          <span className="bg-linear-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Modern Development
          </span>
        </h1>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up delay-200 leading-relaxed">
          Deep dives into AI, React, and System Design. Built for developers who
          want to stay ahead of the curve.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up delay-300">
          <Button
            asChild
            size="lg"
            className="h-12 px-8 text-base shadow-lg shadow-primary/20 transition-all hover:shadow-primary/40 hover:-translate-y-0.5"
          >
            <Link to="/blog">
              Start Reading <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="h-12 px-8 text-base hover:bg-muted/50"
          >
            <Link to="/blog">
              Explore Topics <Terminal className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
