# Modern Tech Blog

A modern, high-performance technical blog built with [TanStack Start](https://tanstack.com/start), [React](https://react.dev/), and [Tailwind CSS](https://tailwindcss.com/).

## Features

- **Modern Stack**: Built with the latest web technologies including Vite, React 19, and TanStack Router.
- **File-Based Routing**: Intuitive routing structure using TanStack Router.
- **Markdown Support**: Renders blog posts from Markdown with syntax highlighting using `react-markdown` and `highlight.js`.
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
src/
├── components/        # Reusable UI components (Header, Footer, Hero, etc.)
├── data/             # Static data files (e.g., blog posts)
├── lib/              # Utility functions
├── routes/           # File-based routes for TanStack Router
│   ├── blog/         # Blog routes (index and slug)
│   ├── __root.tsx    # Root layout component
│   └── index.tsx     # Homepage
└── styles.css        # Global styles and Tailwind directives
```

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
    <h1>Build by Pratham Darji</h1>
  </center>
</div>
