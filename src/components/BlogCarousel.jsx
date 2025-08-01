import useEmblaCarousel from 'embla-carousel-react'
import BlogCard from './BlogCard'

export const BlogCarousel = ({ blogs }) => {
  const [emblaRef] = useEmblaCarousel({ loop: false, active: window.innerWidth < 768 })

  return (
    <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="embla md:hidden" ref={emblaRef}>
          <div className="embla__container">
            {blogs.map(blog => (
              <div className="embla__slide" key={blog.$id}>
                <BlogCard blog={blog} />
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:grid md:grid-cols-2 2xl:grid-cols-3 col-span-full gap-8">
            {blogs.map(blog => (
                <BlogCard key={blog.$id} blog={blog} />
            ))}
        </div>
    </div>
  )
}
