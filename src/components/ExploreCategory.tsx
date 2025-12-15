import { Link } from "@tanstack/react-router";
import { Card, CardContent } from "./ui/card";
import { Brain, Globe, Layout, Server, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const categories = [
  {
    name: "Artificial Intelligence",
    value: "AI",
    icon: Brain,
    description: "Machine learning, LLMs, and future tech",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    border: "group-hover:border-purple-500/50",
  },
  {
    name: "Web Development",
    value: "Web Development",
    icon: Globe,
    description: "Full-stack guides and best practices",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "group-hover:border-blue-500/50",
  },
  {
    name: "Frontend Engineering",
    value: "Frontend",
    icon: Layout,
    description: "React, CSS, and modern UI/UX",
    color: "text-pink-500",
    bg: "bg-pink-500/10",
    border: "group-hover:border-pink-500/50",
  },
  {
    name: "Backend Systems",
    value: "Backend",
    icon: Server,
    description: "Databases, APIs, and scalable arch",
    color: "text-green-500",
    bg: "bg-green-500/10",
    border: "group-hover:border-green-500/50",
  },
];

const ExploreCategory = () => {
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
        className={`text-center mb-16 transition-opacity duration-700 ${
          isVisible ? "animate-fade-up" : "opacity-0"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Explore by Category
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Find exactly what you're looking for by browsing our specialized
          topics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <Link
            key={category.value}
            to="/blog"
            search={{ category: category.value }}
            className={`block group transition-all duration-500 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: `${index * 100 + 200}ms` }}
          >
            <Card
              className={`h-full border-muted/60 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${category.border}`}
            >
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <div
                  className={`p-4 rounded-2xl mb-4 transition-transform duration-300 group-hover:scale-110 ${category.bg} ${category.color}`}
                >
                  <category.icon className="w-8 h-8" />
                </div>

                <h3 className="font-bold text-lg mb-2 group-hover:text-foreground transition-colors">
                  {category.name}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {category.description}
                </p>

                <div className="mt-auto flex items-center text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">
                  Browse Articles{" "}
                  <ArrowRight className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ExploreCategory;
