

export default function BlogCard({ blog }) {
  // blog = {
  //   title: "",
  //   slug:"",
  //   content: "",
  //   featuredImageURL: "",
  //   category:"",
  //   status: "",
  //   userId: ""

  // }
  console.log(blog);

  return (
    <div className="relative rounded-md border border-gray-400/40 hover:shadow-2xl dark:text-gray-200 cursor-pointer">
      <button className="absolute top-2 left-2 text-white px-2 rounded-xl border border-purple-600 bg-purple-950">{blog.category.slice(0,1).toUpperCase() + blog.category.slice(1)}</button>
      <img className="rounded-t-md h-52 w-full object-cover" src={blog.image} alt={blog.slug} />
      <div className="p-4">
        <h2 className="mb-3 font-bold text-black text-2xl">{blog.title}</h2>
        <p className="text-gray-300">{blog.excerpt}</p>
      <div className="flex justify-between my-4 text-gray-300">
        <p className="">{blog.date}</p>
        <p className="">{blog.readTime}</p>
      </div>
      </div>
    </div>
  )
}
