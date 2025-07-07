import dummyTechBlogs from "../dummyTechBlogs"

export default function FeaturedPost() {
    const blog = dummyTechBlogs[0];
    return (
        <div className="relative">
            <img className="w-full h-80 rounded-md object-cover " src={blog.image} alt="" />
            <div className="absolute bottom-0 left-0 bg-gradient-to-t from-white./ h-full w-full">
                <div className=" absolute bottom-4">
                    <h1 className="cursor-pointer text-amber-100 font-bold text-5xl hover:underline transition duration-200">{blog.title}</h1>
                    <p className="">{blog.excerpt}</p>
                </div>
            </div>
        </div>
    )
}
