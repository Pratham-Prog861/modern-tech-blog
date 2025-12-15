import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { blogs } from "../../data/blogs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageLoader } from "@/components/PageLoader";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { z } from "zod";

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
    <div className="max-w-4xl mx-auto py-10 space-y-6 px-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-3xl font-bold">Blog</h1>
        <Input
          placeholder="Search blogs..."
          value={search || ""}
          onChange={(e) =>
            navigate({
              search: (prev) => ({ ...prev, search: e.target.value }),
            })
          }
          className="max-w-sm"
        />
      </div>

      {category && (
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground">Filtering by category:</span>
          <Badge variant="secondary" className="text-sm">
            {category}
            <button
              onClick={() =>
                navigate({
                  search: (prev) => ({ ...prev, category: undefined }),
                })
              }
              className="ml-2 hover:text-destructive"
            >
              ×
            </button>
          </Badge>
        </div>
      )}

      {filteredBlogs.length === 0 ? (
        <p className="text-center text-muted-foreground py-10">
          No blogs found matching your criteria.
        </p>
      ) : (
        filteredBlogs.map((blog) => (
          <Card key={blog.slug}>
            <CardHeader>
              <CardTitle>{blog.title}</CardTitle>
            </CardHeader>

            <CardContent className="space-y-3">
              <p className="text-muted-foreground">{blog.description}</p>

              <Badge variant="secondary">{blog.category}</Badge>

              <div className="flex gap-2 flex-wrap">
                {blog.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    #{tag}
                  </Badge>
                ))}
              </div>

              <Link
                to="/blog/$slug"
                params={{ slug: blog.slug }}
                className="text-primary underline block pt-2"
              >
                Read more →
              </Link>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
}
