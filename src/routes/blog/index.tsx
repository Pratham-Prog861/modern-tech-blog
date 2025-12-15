import { createFileRoute, Link } from "@tanstack/react-router"
import { blogs } from "../../data/blogs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageLoader } from "@/components/PageLoader"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { useState } from "react"

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
  const [search, setSearch] = useState("")

const filteredBlogs = blogs.filter(
  (blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase()) ||
    blog.tags.some((tag) =>
      tag.toLowerCase().includes(search.toLowerCase())
    ) ||
    blog.category.toLowerCase().includes(search.toLowerCase())
)
  return (
    <div className="max-w-4xl mx-auto py-10 space-y-6">
      <h1 className="text-3xl font-bold">Blog</h1>

      {blogs.map((blog) => (
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
