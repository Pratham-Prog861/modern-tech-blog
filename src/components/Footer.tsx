export default function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-lg font-bold mb-4">Modern Tech Blog</h3>
        <p className="text-muted-foreground mb-4">
          Built with TanStack Start, React, Tailwind CSS, and Shadcn UI.
        </p>
        <div className="flex justify-center gap-4 mb-8">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-sm hover:underline"
          >
            GitHub
          </a>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Modern Tech Blog. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
