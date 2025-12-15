import { createFileRoute } from '@tanstack/react-router'
import { blogs } from "../../data/blogs"
import { PageLoader } from '@/components/PageLoader'

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

      <div className="prose prose-zinc dark:prose-invert">
        {blog.content.split("\n").map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </article>
  )
}
