
import Tags from "../components/ui/Tags.jsx";

import MDEditor from "@uiw/react-md-editor";
import useBlogStore from "../store/blogStore.js";
import LoadingScreen from "../components/LoadingScreen.jsx";
import { Link, useParams } from "react-router";
import { useEffect } from "react";
import NotFound from "../error/NotFound.jsx";
import useThemeStore from "../store/themeStore.js";

export default function BlogPage() {
  const { theme } = useThemeStore();
  const { getBlogBySlug, currentBlog, isLoading } = useBlogStore();
  const { slug } = useParams();

  useEffect(() => {
    if (slug) {
      getBlogBySlug(slug);
    }
  }, [slug, getBlogBySlug])

  if (isLoading) {
    return <LoadingScreen />
  }

  const blog = currentBlog;


  return blog && !isLoading ? (
    <div className="my-12 w-full text-secondary dark:text-[#c9d1d9]">
      <div aria-label="blog-body" className="my-12">
        <h2 className="font-bold text-3xl">{blog.title}</h2>
        <img aria-label="blog-thumbani" className="max-h-84 h-auto object-cover mx-auto my-4 rounded-md" src={blog.image} alt={blog.title} />
        <div className="flex flex-wrap gap-2 mt-4">
          {blog.tags.map((tag, index) => (
            <Tags key={index} text={tag} />
          ))}
        </div>
        <p className="text-secondary/60  text-sm mt-2">
          {new Date(blog.createdAt).toLocaleDateString()} by <span className="font-semibold">{blog.username}</span> - {blog.readingTime} min read
        </p>
        <p className="text-secondary/80 mt-4">{blog.excerpt}</p>
        <div className="mt-6" data-color-mode={theme}>
          <MDEditor.Markdown className="!bg-transparent" source={blog.content} />
        </div>
      </div>
    </div>
  ) : (
    <NotFound />
  )
}
