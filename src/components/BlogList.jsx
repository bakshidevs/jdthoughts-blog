import { Link } from "react-router";
import BlogCard from "./BlogCard";





export default function BlogList({ blogs, title }) {
    return (
        <div>
            <h2 className="text-2xl text-white font-bold mb-4">{title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 4xl:grid-cols-4 gap-4">
                {blogs.map((blog) => (
                    <div key={blog.slug} className="relative">
                        <BlogCard blog={blog} />
                        <Link to={`/edit/${blog.slug}`} className="text-md absolute top-2 right-4 text-accent hover: hover:text-primary hover:underline mt-2 inline-block font-bold">Edit</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}