import { Link } from "react-router"
import dummyTechBlogs from "../dummyTechBlogs"
import BlogCard from "../components/BlogCard"
import { useEffect, useState } from "react"
import useBlogStore from "../store/blogStore"


export default function PoetryBlogs() {
  const [allPoetryPosts, setAllPoetryPosts] = useState()
  const { getAllBlogs } = useBlogStore()
  const blogs = dummyTechBlogs
  useEffect(() => {
    const getPoetries = async () => {
      const res = await getAllBlogs()
      if (res) {
        setAllPoetryPosts(res.filter(post => post.category === "Poetry"))
      }
      getPoetries()
    }
  })
  return (
    <div>
      <div className="h-56 border rounded-lg flex flex-col justify-center items-center border-pink-800 bg-pink-100/20 dark:bg-pink-900/25">
        <h1 className="font-bold text-5xl my-3 font-mono dark:text-white">Poetry</h1>
        <p className="w-2/3 text-xl text-center text-gray-100 dark:text-gray-400">
          Verses that capture moments, emotions, and the spaces between words.
        </p>
      </div>
      <div className="p-16 md:px-36 lg:px-48 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {blogs.filter(blog => blog.category === "poetry").map(blog => (
          <Link key={blog.slug} to={blog.slug}>
            <BlogCard blog={blog} />
          </Link>
        ))}
      </div>
    </div>
  )
}
