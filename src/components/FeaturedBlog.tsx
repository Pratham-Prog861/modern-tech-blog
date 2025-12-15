import { blogs } from "@/data/blogs";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const FeaturedBlog = () => {
  const featuredBlogs = blogs.slice(0, 3);
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
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="container mx-auto px-4 py-20">
      <div
        className={`text-center mb-12 transition-opacity duration-500 ${
          isVisible ? "animate-fade-up" : "opacity-0"
        }`}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
          Featured Articles
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Hand-picked stories to keep you updated with the latest in technology.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredBlogs.map((blog, index) => (
          <Card
            key={blog.slug}
            className={`flex flex-col overflow-hidden border-muted/60 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: `${index * 100 + 200}ms` }}
          >
            <div className="h-48 w-full bg-muted/50 relative overflow-hidden group">
              <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent z-10" />
              <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 text-xs font-medium text-foreground/80">
                <span className="bg-primary/10 text-primary px-2 py-1 rounded-md backdrop-blur-md">
                  Technology
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" /> 5 min read
                </span>
              </div>
            </div>

            <CardHeader className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>{blog.date}</span>
              </div>
              <CardTitle className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                {blog.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="flex-1">
              <p className="text-muted-foreground line-clamp-3 leading-relaxed">
                {blog.description}
              </p>
            </CardContent>

            <CardFooter className="pt-0">
              <Button
                asChild
                variant="ghost"
                className="w-full justify-between group hover:bg-primary/5"
              >
                <Link to="/blog/$slug" params={{ slug: blog.slug }}>
                  Read Article
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeaturedBlog;
