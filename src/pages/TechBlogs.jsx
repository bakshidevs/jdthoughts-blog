import useBlogStore from "../store/blogStore"
import BlogCard from "../components/BlogCard"
import { Link } from "react-router"
import LoadingScreen from "../components/LoadingScreen"
export default function TechBlogs() {

  const { isLoading, techBlogs } = useBlogStore()

  if (isLoading) {
    return <LoadingScreen />
  }
  
  return (
    <div>
      <div className="my-12 h-56 border rounded-lg flex flex-col justify-center items-center border-purple-800 bg-purple-100/20 dark:bg-purple-950/20">
        <h1 className="font-bold text-5xl my-3 font-mono dark:text-white">Tech Blogs</h1>
        <p className="w-2/3 text-xl text-center text-gray-100 dark:text-gray-400">Insights, tutorials, and discussions on web development, programming, and technology.</p>
      </div>
      <div className="mb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {techBlogs.map(blog => (
            <BlogCard key={blog.$id} blog={blog} />
        ))}
      </div>
    </div>
  )
}
