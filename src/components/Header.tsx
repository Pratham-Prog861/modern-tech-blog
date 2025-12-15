import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          Modern Tech Blog
        </Link>
        <nav className="flex gap-6">
          <Link
            to="/"
            className="text-sm font-medium hover:text-primary transition-colors [&.active]:text-primary"
          >
            Home
          </Link>
          <Link
            to="/blog"
            className="text-sm font-medium hover:text-primary transition-colors [&.active]:text-primary"
          >
            Blogs
          </Link>
        </nav>
      </div>
    </header>
  )
}

