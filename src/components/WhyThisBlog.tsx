import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import Skeleton1 from "./skeleton/skeleton1";
import Skeleton2 from "./skeleton/skeleton2";
import Skeleton3 from "./skeleton/skeleton3";


const features = [
  {
    title: "Beginner-friendly",
    description:
      "Complex topics broken down into simple, easy-to-understand explanations.",
    visual: <Skeleton1 />,
  },
  {
    title: "Modern Tech Stack",
    description:
      "Focus on the latest tools and frameworks used in the industry today.",
    visual: <Skeleton2 />
  },
  {
    title: "Practical Examples",
    description:
      "Real-world code snippets and projects to help you learn by doing.",
    visual: <Skeleton3 />
  },
];

const WhyThisBlog = () => {
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
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
          Why This Blog?
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          We don't just write code — we explain the 'why' and 'how' behind every
          decision.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card
            key={feature.title}
            className={`overflow-hidden border-muted/60 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:shadow-lg ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: `${index * 150 + 200}ms` }}
          >
            <div className="h-40 bg-muted/20 border-b flex items-center justify-center relative group overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-b from-transparent to-background/10" />
              <div className="w-3/4 h-3/4 transition-transform duration-500 group-hover:scale-105">
                {feature.visual}
              </div>
            </div>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default WhyThisBlog;
