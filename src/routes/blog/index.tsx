import { createFileRoute, Link } from "@tanstack/react-router"
import { blogs } from "../../data/blogs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageLoader } from "@/components/PageLoader"

export const Route = createFileRoute('/blog/')({
  loader: async () => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    return blogs
  },
  pendingComponent: () => <PageLoader text="Loading blogs..." />,

  component: BlogList,
})

function BlogList() {
  const blogs = Route.useLoaderData()
  return (
    <div className="max-w-4xl mx-auto py-10 space-y-6">
      <h1 className="text-3xl font-bold">Blog</h1>

      {blogs.map((blog) => (
        <Card key={blog.slug}>
          <CardHeader>
            <CardTitle>{blog.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-muted-foreground">{blog.description}</p>
            <Link
              to="/blog/$slug"
              params={{ slug: blog.slug }}
              className="text-primary underline"
            >
              Read more →
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
