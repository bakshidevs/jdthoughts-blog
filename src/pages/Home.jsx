import FeaturedPost from "../components/FeaturedPost";
import { BlogCarousel } from "../components/BlogCarousel";
import dummyTechBlogs from "../dummyTechBlogs";

export default function Home() {
  const featuredPost = dummyTechBlogs[0];
  const popularBlogs = dummyTechBlogs.slice(1, 5);
  const latestBlogs = dummyTechBlogs.slice(5, 9);

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Featured Post</h2>
        <FeaturedPost post={featuredPost} />
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
