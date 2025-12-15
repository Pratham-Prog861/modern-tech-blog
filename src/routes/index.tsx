import { Button } from '@/components/ui/button'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Button asChild>
        <Link to="/blog">Go to Blog</Link>
      </Button>
    </div>
  )
}
