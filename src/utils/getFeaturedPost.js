
import { getLatestBlogs } from "./getLatestBlogs";

export const getFeaturedPost = (publishedBlogs) => {
    const latestBlogs = getLatestBlogs(publishedBlogs);
    // return blog with most content
    const featuredPost = latestBlogs.reduce((prev, current) => {
        return prev.content.length > current.content.length ? prev : current;
    }, latestBlogs[0]);
    return featuredPost;
}


