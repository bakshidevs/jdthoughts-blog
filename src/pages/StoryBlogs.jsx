import BlogCard from "../components/BlogCard";
import useBlogStore from "../store/blogStore";
import LoadingScreen from "../components/LoadingScreen";

export default function StoryBlogs() {

  const { isLoading, storyBlogs } = useBlogStore();

  if (isLoading) {
    return <LoadingScreen />
  }


  return (
    <div>
      <div className="my-12 flex justify-center items-center flex-col h-56 dark:text-white bg-blue-900/20 border border-blue-600 rounded-lg">
        <h1 className="font-bold text-3xl text-center lg:text-5xl my-3 font-mono dark:text-white">Short Stories</h1>
        <p className="lg:w-2/3 text-sm lg:text-xl text-center text-gray-100 dark:text-gray-400">
          Narratives that transport you to different worlds, times, and perspectives.
        </p>
      </div>
      <div className="mb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {storyBlogs.map(blog => (
          <BlogCard key={blog.$id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
