

import { Link } from "react-router";
import Badge from "./Badge";
import Tags from "./ui/Tags";

export default function BlogCard({ blog }) {
  const { category } = blog;

  const colorMap = {
    tech: {
      cardBody: "bg-purple-300/30 border-purple-400/40 dark:bg-purple-950/20 hover:shadow-purple-900",
      categoryButton: "text-purple-800 bg-purple-200/50 border-purple-300 dark:text-purple-100 dark:border-purple-600 dark:bg-purple-900/20",
    },
    story: {
      cardBody: "bg-blue-100/30 border-blue-200 dark:border-blue-400/40 dark:bg-blue-950/20 hover:shadow-blue-900",
      categoryButton: "text-blue-800 bg-blue-200/50 border-blue-300 dark:text-blue-100 dark:border-blue-600 dark:bg-blue-900/20",
    },
    poetry: {
      cardBody: "bg-pink-100/30 border-pink-200 dark:border-pink-400/40 dark:bg-pink-950/20 hover:shadow-pink-900",
      categoryButton: "text-pink-800 bg-pink-200/50 border-pink-300 dark:text-pink-100 dark:border-pink-600 dark:bg-pink-900/20",
    },
  };

  const { cardBody, categoryButton } = colorMap[category] || {
    cardBody: "bg-gray-100/30 border-gray-200 dark:border-gray-400/40 dark:bg-gray-950/20",
    categoryButton: "text-gray-800 bg-gray-200/50 border-gray-300 dark:text-gray-100 dark:border-gray-600 dark:bg-gray-900/20",
  }

  return (
    <Link to={`/${category}/${blog.slug}`}>
      <div className={`hover:scale-103 relative h-full rounded-md border hover:shadow-2xl transition duration-500 text-gray-800 dark:text-gray-300 cursor-pointer ${cardBody} overflow-hidden`}>
        <Badge blogCategory={category} categoryButton={categoryButton} />
        <img className="transition duration-500 rounded-t-md h-52 w-full object-cover" src={blog.image} alt={blog.slug} />
        <div className="p-4">
          <h2 className="mb-3 font-bold text-2xl">{blog.title}</h2>
          <div className="flex flex-wrap gap-2 my-2">
            {blog.tags.map((tag, index) => (
              <Tags key={index} text={tag} />
            ))}
          </div>
          <p className="">{blog.excerpt.slice(0, 150) + "..."}</p>
          <div className="flex justify-between my-4 ">
            <p className="">{new Date(blog.createdAt).toLocaleDateString()}</p>
            <p className="">{blog.readingTime} mins read</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
