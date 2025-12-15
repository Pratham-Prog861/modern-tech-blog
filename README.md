# Modern Tech Blog

A modern, high-performance technical blog built with [TanStack Start](https://tanstack.com/start), [React](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/), and [Content Collections](https://www.content-collections.dev/).

## Features

- **Modern Stack**: Built with the latest web technologies including Vite, React 19, and TanStack Router.
- **MDX Support**: Write blog posts in MDX (Markdown + JSX) with full component support.
- **Content Collections**: Type-safe content management for your blog posts.
- **Syntax Highlighting**: Beautiful code blocks using `rehype-highlight` and Atom One Dark theme.
- **File-Based Routing**: Intuitive routing structure using TanStack Router.
- **Responsive Design**: Fully responsive UI styled with Tailwind CSS.
- **Type Safety**: End-to-end type safety with TypeScript.

## Getting Started

To run this application:

```bash
pnpm install
pnpm dev
```

## Building For Production

To build this application for production:

```bash
pnpm build
```

## Testing

This project uses [Vitest](https://vitest.dev/) for testing. You can run the tests with:

```bash
pnpm test
```

## Styling

This project uses [Tailwind CSS](https://tailwindcss.com/) for styling.

### Shadcn

Add components using the latest version of [Shadcn](https://ui.shadcn.com/).

```bash
pnpm dlx shadcn@latest add button
```

## Project Structure

```bash
├── content/
│   └── blogs/         # MDX blog posts go here
├── src/
│   ├── components/    # Reusable UI components (Header, Footer, Hero, etc.)
│   ├── lib/           # Utility functions
│   ├── routes/        # File-based routes for TanStack Router
│   │   ├── blog/      # Blog routes (index and slug)
│   │   ├── __root.tsx # Root layout component
│   │   └── index.tsx  # Homepage
│   └── styles.css     # Global styles and Tailwind directives
├── content-collections.ts # Configuration for content collections
├── vite.config.ts     # Vite configuration
└── package.json
```

## Adding a New Blog Post

1. Create a new `.mdx` file in `content/blogs/`.
2. Add the required frontmatter:

```mdx
---
title: "My New Post"
summary: "A short summary of the post."
date: "2025-01-01"
category: "Tech"
tags: ["react", "tutorial"]
content: "" # This is required by the schema but handled automatically
---

# Hello World

Write your content here using Markdown or MDX!
```

The new post will automatically appear on the blog page.

## Routing

This project uses [TanStack Router](https://tanstack.com/router). The initial setup is a file based router. Which means that the routes are managed as files in `src/routes`.

### Adding A Route

To add a new route to your application just add another a new file in the `./src/routes` directory.

TanStack will automatically generate the content of the route file for you.

Now that you have two routes you can use a `Link` component to navigate between them.

### Adding Links

To use SPA (Single Page Application) navigation you will need to import the `Link` component from `@tanstack/react-router`.

```tsx
import { Link } from "@tanstack/react-router";
```

Then anywhere in your JSX you can use it like so:

```tsx
<Link to="/about">About</Link>
```

This will create a link that will navigate to the `/about` route.

More information on the `Link` component can be found in the [Link documentation](https://tanstack.com/router/v1/docs/framework/react/api/router/linkComponent).

## Learn More

You can learn more about all of the offerings from TanStack in the [TanStack documentation](https://tanstack.com).

---

<div>
  <center>
    <h1>Built by Pratham Darji</h1>
  </center>
</div>
