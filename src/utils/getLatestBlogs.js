

export function getLatestBlogs(publishedBlogs) {
    const now = new Date();
    const sevenDaysAgo = new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000);

    return publishedBlogs.filter(blog => {
        const createdDate = new Date(blog.createdAt);
        return createdDate >= sevenDaysAgo && createdDate <= now;
    });
}