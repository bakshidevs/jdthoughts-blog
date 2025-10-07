

export function getLatestBlogs(publishedBlogs) {
    const now = new Date();
    const tenDaysAgo = new Date(now.getTime() - 10 * 24 * 60 * 60 * 1000);

    return publishedBlogs.filter(blog => {
        const createdDate = new Date(blog.createdAt);
        return createdDate >= tenDaysAgo && createdDate <= now;
    });
}