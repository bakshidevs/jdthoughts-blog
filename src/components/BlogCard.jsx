

import Tags from "./ui/Tags";

export default function BlogCard({ blog }) {

  const colorMap = {
    tech: {
      cardBody: "border-purple-200 dark:border-purple-400/40 dark:bg-purple-950/20 hover:shadow-purple-900",
      categoryButton: "text-purple-100 border-purple-600 bg-purple-900/20",
    },
    story: {
      cardBody: "border-blue-200 dark:border-blue-400/40 dark:bg-blue-950/20 hover:shadow-blue-900",
      categoryButton: "text-blue-100 border-blue-600 bg-blue-900/20",
    },
    poetry: {
      cardBody: "border-pink-200 dark:border-pink-400/40 dark:bg-pink-950/20 hover:shadow-pink-900",
      categoryButton: "text-pink-100 border-pink-600 bg-pink-900/20",
    },
  };

  const {cardBody, categoryButton} = colorMap[blog.category] || {
      cardBody: "border-gray-200 dark:border-gray-400/40 dark:bg-gray-950/20",
      categoryButton: "text-gray-100 border-gray-600 bg-gray-900/20",
    }

  return (
    <div className={`group hover:scale-103 relative rounded-md border hover:shadow-2xl transition duration-500 dark:text-gray-300 cursor-pointer ${cardBody} overflow-hidden`}>
      <button className={`text-sm z-10 font-medium absolute top-2 left-2 ${categoryButton} px-2 rounded-xl border`}>
        {blog.category.slice(0, 1).toUpperCase() + blog.category.slice(1)}
      </button>
      <img className="group-hover:scale-103 transition duration-500 rounded-t-md h-52 w-full object-cover" src={blog.image} alt={blog.slug} />
      <div className="p-4">
        <h2 className="mb-3 font-bold text-2xl">{blog.title}</h2>
        <div className="flex flex-wrap gap-2 my-2">
            {blog.tags.map((tag, index) => (
                <Tags key={index} text={tag} />
            ))}
        </div>
        <p className="">{blog.excerpt}</p>
        <div className="flex justify-between my-4 ">
          <p className="">{blog.date}</p>
          <p className="">{blog.readTime}</p>
        </div>
      </div>
    </div>
  )
}
