import dummyTechBlogs from "../dummyTechBlogs"
import Tags from "./ui/Tags";

export default function FeaturedPost() {
    const featuredPost = dummyTechBlogs[0];
    return (
        <div className="group relative rounded-md w-full mx-auto overflow-hidden cursor-pointer">
            <img className="w-full h-80 object-cover" src={featuredPost.image} alt="" />
            <div className="group absolute inset-0 bg-black/20 dark:bg-black/40 hover:bg-black/70 text transition-all duration-500 top-0 rounded-md">
                <div className="absolute bottom-0 p-6 text-white">
                    <h2 className="text-2xl md:text-4xl group-hover:underline font-bold my-1">{featuredPost.title}</h2>
                    <div className="flex flex-wrap gap-2 text-xs font-medium">
                        {featuredPost.tags.map((tag, index) => (
                            <Tags key={index} text={tag} />
                        ))}
                    </div>
                    <p className="text-lg">{featuredPost.excerpt}</p>
                    <div className="flex gap-2 items-center mt-2 text-xs">
                        <span className="">{featuredPost.date}</span>
                        <div className="h-1 w-1 bg-white rounded-full"></div>
                        <span className="">{featuredPost.readTime}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
