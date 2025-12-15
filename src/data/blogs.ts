export type Blog = {
    slug: string
    title: string
    description: string
    content: string
    date: string
  }
  
  export const blogs: Blog[] = [
    {
      slug: "what-is-ai",
      title: "What is Artificial Intelligence?",
      description: "A beginner-friendly introduction to AI.",
      date: "2025-01-01",
      content: `
  # What is AI?
  
  Artificial Intelligence (AI) is the ability of machines to mimic human intelligence.
  
  ## Types of AI
  - Narrow AI
  - General AI
  - Super AI
  
  AI is used in search engines, chatbots, and recommendation systems.
      `,
    },
    {
      slug: "tanstack-start-intro",
      title: "Getting Started with TanStack Start",
      description: "Learn the basics of TanStack Start.",
      date: "2025-01-05",
      content: `
  # TanStack Start
  
  TanStack Start is a full-stack React framework.
  
  ## Why TanStack Start?
  - Server-first
  - Type-safe routing
  - Powerful data loaders
      `,
    },
  ]
  