import { Link } from "@tanstack/react-router";
import { Card, CardContent } from "./ui/card";

const ExploreCategory = () => {
  const categories = ["AI", "Web Development", "Frontend", "Backend"];
  return (
    <section className="container mx-auto px-4 bg-muted/50 py-16 rounded-3xl">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Explore Categories
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {categories.map((category) => (
          <Link
            key={category}
            to="/blog"
            search={{ category }}
            className="block"
          >
            <Card className="hover:bg-accent transition-colors cursor-pointer h-full">
              <CardContent className="flex items-center justify-center h-24">
                <span className="font-semibold text-lg">{category}</span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ExploreCategory;
