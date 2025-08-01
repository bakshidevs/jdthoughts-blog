import BlogCard from "../components/BlogCard";
import useBlogStore from "../store/blogStore";
import LoadingScreen from "../components/LoadingScreen";

export default function PoetryBlogs() {

  const { isLoading, poetryBlogs } = useBlogStore();

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div>
      <div className="my-12 h-56 border rounded-lg flex flex-col justify-center items-center border-pink-800 bg-pink-100/20 dark:bg-pink-900/25">
        <h1 className="font-bold text-5xl my-3 font-mono dark:text-white">Poetry</h1>
        <p className="w-2/3 text-xl text-center text-gray-100 dark:text-gray-400">
          Verses that capture moments, emotions, and the spaces between words.
        </p>
      </div>
      <div className="mb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {poetryBlogs.map(blog => (
            <BlogCard key={blog.$id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
