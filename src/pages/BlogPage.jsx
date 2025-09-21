import Tags from "../components/ui/Tags.jsx";

import MDEditor from "@uiw/react-md-editor";
import useBlogStore from "../store/blogStore.js";
import LoadingScreen from "../components/LoadingScreen.jsx";
import { Link, useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import NotFound from "../error/NotFound.jsx";
import useThemeStore from "../store/themeStore.js";
import useAuthStore from "../store/authStore.js";

export default function BlogPage() {
  const { theme } = useThemeStore();
  const { getAllBlogs, getBlogBySlug, currentBlog, isLoading, deleteBlog } =
    useBlogStore();
  const { user } = useAuthStore();

  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      getBlogBySlug(slug);
    }
  }, [slug, getBlogBySlug]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  const handleDeletion = async (blogId) => {
    await deleteBlog(blogId);
    getAllBlogs();
    navigate("/");
  };

  return currentBlog && !isLoading ? (
    <div className="my-12 w-full text-secondary dark:text-[#c9d1d9]">
      {user?.labels.includes("admin") && user?.$id === currentBlog.author && (
        <div className="flex gap-3 justify-end m-0 mr-6">
          <Link to={`/edit/${currentBlog.slug}`}>
            <button className="px-3 py-2 text-secondary hover:text-amber-900 font-medium bg-amber-900 rounded-md hover:bg-amber-300 transition-colors">
              Edit
            </button>
          </Link>
          <button
            onClick={() => handleDeletion(currentBlog.$id)}
            className="px-3 py-2 text-primary hover:text-red-200 font-medium bg-red-500 rounded-md hover:bg-red-600 transition-colors"
          >
            Delete
          </button>
        </div>
      )}
      <div aria-label="blog-body" className="my-12">
        <h2 className="font-bold text-3xl">{currentBlog.title}</h2>
        <p>{currentBlog.username}</p>
        <img
          aria-label="blog-thumbani"
          className="max-h-84 h-auto object-cover mx-auto my-4 rounded-md"
          src={currentBlog.image}
          alt={currentBlog.title}
        />
        <div className="flex flex-wrap gap-2 mt-4">
          {currentBlog.tags.map((tag, index) => (
            <Tags key={index} text={tag} />
          ))}
        </div>
        <p className="text-secondary/60  text-sm mt-2">
          {new Date(currentBlog.createdAt).toLocaleDateString()} by{" "}
          <span className="font-semibold">{currentBlog.username}</span> -{" "}
          {currentBlog.readingTime} min read
        </p>
        <p className="text-secondary/80 mt-4">{currentBlog.excerpt}</p>
        <div className="mt-6" data-color-mode={theme}>
          <MDEditor.Markdown
            className="!bg-transparent"
            source={currentBlog.content}
          />
        </div>
      </div>
    </div>
  ) : (
    <NotFound />
  );
}
