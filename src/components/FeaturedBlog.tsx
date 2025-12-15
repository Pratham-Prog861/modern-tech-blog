import { blogs } from "@/data/blogs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Link } from "@tanstack/react-router";

const FeaturedBlog = () => {
  const featuredBlogs = blogs.slice(0, 3);
  return (
    <section className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredBlogs.map((blog) => (
          <Card key={blog.slug} className="flex flex-col">
            <CardHeader>
              <CardTitle>{blog.title}</CardTitle>
              <CardDescription>{blog.date}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-muted-foreground line-clamp-3">
                {blog.description}
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="secondary" className="w-full">
                <Link to="/blog/$slug" params={{ slug: blog.slug }}>
                  Read More
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
