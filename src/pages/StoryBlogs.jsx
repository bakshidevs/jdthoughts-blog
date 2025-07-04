

import { Link } from "react-router"
import BlogCard from "../components/BlogCard"
import dummyTechBlogs from "../dummyTechBlogs"

export default function StoryBlogs() {
  const blogs = dummyTechBlogs
  return (
    <div>
      <div className="flex justify-center items-center flex-col h-56 dark:text-white bg-blue-900/20 border border-blue-600 rounded-lg">
        <h1 className="font-bold font-mono text-5xl ">Short Stories</h1>
        <p className="text-xl w-2/3 text-center mt-2">Narratives that transport you to different worlds, times, and perspectives.</p>
      </div>
      <div className="p-16 sm:px-0 mx-auto md:max-w-3/5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {blogs.filter(blog => blog.category === "story").map(blog => (
          <Link to={blog.slug}>
            <BlogCard blog={blog} />
          </Link>
        ))}
      </div>
    </div>
  )
}
