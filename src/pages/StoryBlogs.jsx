

import { Link } from "react-router";
import BlogCard from "../components/BlogCard";
import useBlogStore from "../store/blogStore";

export default function StoryBlogs() {

  const { isLoading, storyBlogs } = useBlogStore();

  if (isLoading) {
    return <LoadingScreen />
  }


  return (
    <div>
      <div className="my-12 flex justify-center items-center flex-col h-56 dark:text-white bg-blue-900/20 border border-blue-600 rounded-lg">
        <h1 className="font-bold font-mono text-5xl ">Short Stories</h1>
        <p className="text-xl w-2/3 text-center mt-2">Narratives that transport you to different worlds, times, and perspectives.</p>
      </div>
      <div className="mb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {storyBlogs.map(blog => (
            <BlogCard key={blog.$id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
