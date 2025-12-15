import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Cta = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="container mx-auto px-4 py-24">
      <div
        className={`relative overflow-hidden rounded-3xl bg-primary px-6 py-16 md:px-16 md:py-24 text-center text-primary-foreground shadow-2xl ${
          isVisible ? "animate-fade-up" : "opacity-0"
        }`}
      >
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm border border-white/20">
            <Sparkles className="w-4 h-4" />
            <span>Join our community of developers</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            Ready to take your coding skills to the next level?
          </h2>

          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Get access to exclusive tutorials, source code, and weekly insights
            delivered straight to your inbox.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="h-14 px-8 text-lg shadow-lg shadow-black/10 transition-transform hover:scale-105"
            >
              <Link to="/blog">
                Start Reading Now <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
