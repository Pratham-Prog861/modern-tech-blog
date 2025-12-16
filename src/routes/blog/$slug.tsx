import { createFileRoute, Link } from "@tanstack/react-router";
import { allBlogs as blogs } from "content-collections";
import { PageLoader } from "@/components/PageLoader";
import { MDXContent } from "@content-collections/mdx/react";
import "highlight.js/styles/atom-one-dark.css";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import { ShareButtons } from "@/components/ShareButtons";
import { useEffect } from "react";
import { Callout } from "@/components/mdx/Callout";
import { Card, CardGrid } from "@/components/mdx/Card";

const components = {
  Callout,
  Card,
  CardGrid,
};

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

  useEffect(() => {
    let rafId: number | null = null;
    const progressBar = document.getElementById("scroll-progress-bar");
    const handleScroll = () => {
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        const totalScroll = document.documentElement.scrollTop;
        const windowHeight =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        const scroll = (totalScroll / windowHeight) * 100;

        if (progressBar) {
          progressBar.style.transform = `scaleX(${scroll / 100})`;
        }

        rafId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <article className="min-h-screen bg-background pb-20">
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-muted">
        <div
          id="scroll-progress-bar"
          className="h-full bg-primary origin-left transition-transform duration-100 ease-out"
          style={{ transform: "scaleX(0)" }}
        />
      </div>
      <div className="bg-muted/30 border-b">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <Button asChild variant="default" size="sm" className="mb-8 -ml-4">
            <Link to="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blogs
            </Link>
          </Button>

          <div className="space-y-6 animate-fade-up">
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="text-sm px-3 py-1">
                {blog.category}
              </Badge>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-foreground">
              {blog.title}
            </h1>

            <div className="flex items-center justify-between border-t border-border/50 pt-6 mt-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <img
                    src="https://gravatar.com/avatar/8f5cfe4bef76bef3fe7cee2d4ccb83fc?s=400&d=robohash&r=x"
                    alt="Logo"
                    width={40}
                    height={10}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium">
                    Written by Pratham Darji
                  </p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {blog.date}
                  </p>
                </div>
              </div>
              <ShareButtons
                title={blog.title}
                description={blog.description}
                url={typeof window !== "undefined" ? window.location.href : ""}
              />
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
          prose-pre:p-0 prose-pre:bg-transparent prose-pre:border-0
          prose-hr:border-primary prose-hr:border-2 prose-hr:my-8
          prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-muted/30 prose-blockquote:p-4 prose-blockquote:rounded-r-lg prose-blockquote:not-italic"
        >
          <MDXContent code={blog.mdx} components={components} />
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
