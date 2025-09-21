import FeaturedPost from "../components/FeaturedPost";
import { BlogCarousel } from "../components/BlogCarousel";
import useBlogStore from "../store/blogStore";
import { getLatestBlogs } from "../utils/getLatestBlogs";
import LoadingScreen from "../components/LoadingScreen";
import { useEffect } from "react";


export default function Home() {
  const { getAllBlogs, isLoading, publishedBlogs } = useBlogStore();
  const popularBlogs = publishedBlogs.slice(1, 5);
  const latestBlogs = getLatestBlogs(publishedBlogs).slice(0, 5);

  useEffect(() => {
    getAllBlogs();
  }, [getAllBlogs])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="container mx-auto px-4 py-8 w-full">
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Featured Post</h2>
        <FeaturedPost />
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Popular Blogs</h2>
        <BlogCarousel blogs={popularBlogs} />
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Latest Blogs</h2>
        <BlogCarousel blogs={latestBlogs} />
      </section>
    </div>
  );
}
