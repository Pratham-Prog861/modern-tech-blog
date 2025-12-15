import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { blogs } from "../../data/blogs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageLoader } from "@/components/PageLoader";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { Search, Calendar, Clock, ArrowRight, X } from "lucide-react";

const blogSearchSchema = z.object({
  search: z.string().optional(),
  category: z.string().optional(),
});

export const Route = createFileRoute("/blog/")({
  validateSearch: (search) => blogSearchSchema.parse(search),
  loader: async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return blogs;
  },
  pendingComponent: () => <PageLoader text="Loading blogs..." />,
  component: BlogList,
});

function BlogList() {
  const blogs = Route.useLoaderData();
  const { search, category } = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch = search
      ? blog.title.toLowerCase().includes(search.toLowerCase()) ||
        blog.tags.some((tag) =>
          tag.toLowerCase().includes(search.toLowerCase())
        ) ||
        blog.description.toLowerCase().includes(search.toLowerCase())
      : true;

    const matchesCategory = category
      ? blog.category.toLowerCase() === category.toLowerCase()
      : true;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-muted/30 border-b py-16 mb-10">
        <div className="container mx-auto px-4 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight animate-fade-up">
            Our Blog
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-up delay-100">
            Discover the latest insights, tutorials, and trends in the world of
            technology.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20 max-w-5xl">
        <div className="flex flex-col md:flex-row gap-4 mb-10 animate-fade-up delay-200">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search articles..."
              value={search || ""}
              onChange={(e) =>
                navigate({
                  search: (prev) => ({ ...prev, search: e.target.value }),
                })
              }
              className="pl-10 h-12 bg-card/50 backdrop-blur-sm"
            />
          </div>

          {category && (
            <Badge
              variant="secondary"
              className="h-12 px-4 text-sm flex items-center gap-2 hover:bg-destructive/10 hover:text-destructive transition-colors cursor-pointer"
              onClick={() =>
                navigate({
                  search: (prev) => ({ ...prev, category: undefined }),
                })
              }
            >
              Category: {category}
              <X className="w-3 h-3" />
            </Badge>
          )}
        </div>

        {filteredBlogs.length === 0 ? (
          <div className="text-center py-20 animate-fade-up">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No articles found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or filters.
            </p>
          </div>
        ) : (
          <div className="grid gap-6">
            {filteredBlogs.map((blog, index) => (
              <Link
                key={blog.slug}
                to="/blog/$slug"
                params={{ slug: blog.slug }}
                className="block group"
              >
                <Card
                  className="overflow-hidden border-muted/60 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:border-primary/20 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 h-48 md:h-auto bg-muted/50 relative overflow-hidden">
                      <div className="absolute inset-0 bg-linear-to-tr from-primary/10 to-transparent group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-4 left-4">
                        <Badge
                          variant="secondary"
                          className="backdrop-blur-md bg-background/80"
                        >
                          {blog.category}
                        </Badge>
                      </div>
                    </div>

                    <div className="flex-1 p-6 flex flex-col">
                      <CardHeader className="p-0 mb-4">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" /> {blog.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" /> 5 min read
                          </span>
                        </div>
                        <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
                          {blog.title}
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="p-0 flex-1">
                        <p className="text-muted-foreground line-clamp-2 mb-4">
                          {blog.description}
                        </p>

                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex gap-2 flex-wrap">
                            {blog.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-md"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                          <span className="text-sm font-medium text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                            Read Article <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
