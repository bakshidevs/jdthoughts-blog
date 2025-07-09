import useBlogStore from "../store/blogStore"
import BlogCard from "../components/BlogCard"
import dummyTechBlogs from "../dummyTechBlogs"
import { Link } from "react-router"
export default function TechBlogs() {
  const [allTechPosts, setAllTechPosts] = useState()
  const { getAllBlogs } = useBlogStore()
  const blogs = dummyTechBlogs
  useEffect(() => {
    const getTechBlogs = async () => {
      const res = await getAllBlogs()
      if (res) {
        setAllTechPosts(res.filter(post => post.category === "Tech"))
      }
      getTechBlogs()
    }
  })
  return (
    <div>
      <div className="h-56 border rounded-lg flex flex-col justify-center items-center border-purple-800 bg-purple-100/20 dark:bg-purple-950/20">
        <h1 className="font-bold text-5xl my-3 font-mono dark:text-white">Tech Blogs</h1>
        <p className="w-2/3 text-xl text-center text-gray-100 dark:text-gray-400">Insights, tutorials, and discussions on web development, programming, and technology.</p>
      </div>
      <div className="p-16 md:px-36 lg:px-48 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {blogs.filter(blog => blog.category === "tech").map(blog => (
          <Link key={blog.slug} to={blog.slug}>
            <BlogCard blog={blog} />
          </Link>
        ))}
      </div>
    </div>
  )
}
