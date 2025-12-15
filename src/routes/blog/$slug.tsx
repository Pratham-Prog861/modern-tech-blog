import { createFileRoute, Link } from "@tanstack/react-router";
import { allBlogs as blogs } from "content-collections";
import { PageLoader } from "@/components/PageLoader";
import { MDXContent } from "@content-collections/mdx/react";
import "highlight.js/styles/atom-one-dark.css";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Share2, User } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => {
    await new Promise((resolve) => setTimeout(resolve, 500));

    const blog = blogs.find((blog) => blog.slug === params.slug);
    if (!blog) {
      throw new Error("Blog not found");
    }
    return blog;
  },
  pendingComponent: () => <PageLoader text="Loading article..." />,
  component: BlogDetail,
});

function BlogDetail() {
  const blog = Route.useLoaderData();

  return (
    <article className="min-h-screen bg-background pb-20">
      <div className="bg-muted/30 border-b">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="mb-8 hover:bg-background/50 -ml-4"
          >
            <Link to="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blogs
            </Link>
          </Button>

          <div className="space-y-6 animate-fade-up">
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="text-sm px-3 py-1">
                {blog.category}
              </Badge>
              <span className="text-muted-foreground text-sm flex items-center gap-1">
                <Clock className="w-3 h-3" /> 5 min read
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-foreground">
              {blog.title}
            </h1>

            <div className="flex items-center justify-between border-t border-border/50 pt-6 mt-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Written by Admin</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {blog.date}
                  </p>
                </div>
              </div>

              <Button variant="outline" size="icon" className="rounded-full">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-3xl animate-fade-up delay-200">
        <div
          className="prose prose-lg prose-zinc dark:prose-invert max-w-none 
          prose-headings:font-bold prose-headings:tracking-tight 
          prose-a:text-primary prose-a:no-underline hover:prose-a:underline
          prose-img:rounded-xl prose-img:shadow-lg
          prose-pre:p-0 prose-pre:bg-transparent prose-pre:border-0"
        >
          <MDXContent code={blog.mdx} />
        </div>

        <div className="mt-12 pt-8 border-t">
          <h4 className="text-sm font-semibold text-muted-foreground mb-4">
            Tags
          </h4>
          <div className="flex gap-2 flex-wrap">
            {blog.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="px-3 py-1 text-sm hover:bg-muted transition-colors cursor-default"
              >
                #{tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
