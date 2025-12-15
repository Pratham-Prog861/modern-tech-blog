import { createFileRoute } from '@tanstack/react-router'
import { blogs } from "../../data/blogs"
import { PageLoader } from '@/components/PageLoader'
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Badge } from "@/components/ui/badge"

export const Route = createFileRoute('/blog/$slug')({
  loader: async ({ params }) => {
    await new Promise((resolve) => setTimeout(resolve, 500))

    const blog = blogs.find((blog) => blog.slug === params.slug)
    if (!blog) {
      throw new Error("Blog not found")
    }
    return blog
  },
  pendingComponent: () => <PageLoader text="Loading blogs..." />,

  component: BlogDetail,
})

function BlogDetail() {
  const blog = Route.useLoaderData()
  return (
    <article className="max-w-3xl mx-auto py-10 space-y-6">
      <h1 className="text-4xl font-bold">{blog.title}</h1>
      <p className="text-sm text-muted-foreground">{blog.date}</p>

      {/* Category */}
      <Badge variant="secondary">{blog.category}</Badge>

      {/* Tags */}
      <div className="flex gap-2 flex-wrap">
        {blog.tags.map((tag) => (
          <Badge key={tag} variant="outline">
            #{tag}
          </Badge>
        ))}
      </div>

      {/* Markdown Content */}
      <div className="prose prose-zinc dark:prose-invert max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {blog.content}
        </ReactMarkdown>
      </div>
    </article>
  )
}
