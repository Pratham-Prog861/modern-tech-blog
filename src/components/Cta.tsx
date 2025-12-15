import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";

const Cta = () => {
  return (
    <section className="container mx-auto px-4 text-center py-10">
      <div className="bg-primary text-primary-foreground rounded-3xl p-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Start learning something new today.
        </h2>
        <Button asChild size="lg" variant="secondary" className="text-lg px-8">
          <Link to="/blog">Browse All Blogs</Link>
        </Button>
      </div>
    </section>
  );
};

export default Cta;
