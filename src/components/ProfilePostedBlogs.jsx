import useBlogStore from "../store/blogStore";
import BlogList from "./BlogList";
import { Link } from "react-router";


export default function ProfilePostedBlogs() {
    const { publishedByAuthor } = useBlogStore();
    
    return publishedByAuthor.length > 0 ? (
        <BlogList blogs={publishedByAuthor} title="Posted Blogs" />
    ) : (
        <div className="h-full w-full flex flex-col justify-center items-center">
            <h1 className="text-xl font-medium text-white">No posted blogs yet...</h1>
            <Link className="text-purple-500 p-1" to="/write">Write a new blog!</Link>
        </div>
    )
}