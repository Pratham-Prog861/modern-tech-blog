import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="container mx-auto px-4 pt-20 pb-10 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
        Modern Tech Blog
      </h1>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
        Learn AI, Web Development & Modern Tools — Simply Explained.
      </p>
      <div className="flex justify-center gap-4">
        <Button asChild size="lg">
          <Link to="/blog">Read Blogs</Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link to="/blog">Browse Categories</Link>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
