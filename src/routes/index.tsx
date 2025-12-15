import { createFileRoute } from '@tanstack/react-router'
import Hero from '@/components/Hero'
import FeaturedBlog from '@/components/FeaturedBlog'
import ExploreCategory from '@/components/ExploreCategory'
import WhyThisBlog from '@/components/WhyThisBlog'
import Cta from '@/components/Cta'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <Hero />
      <FeaturedBlog />
      <ExploreCategory />
      <WhyThisBlog />
      <Cta />
    </div>
  )
}

