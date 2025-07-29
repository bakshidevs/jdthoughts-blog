import useBlogStore from "../store/blogStore";
import useEditorStore from "../store/editorStore";
import useAuthStore from "../store/authStore";
import { useNavigate, useParams } from "react-router";

import { notify } from "./ui/Toast";

export default function EditorActionButtons() {
    const { createBlog } = useBlogStore();
    const { blogTitle, thumbnailURL, slug, tags, category, excerpt, editorValue, resetValue } = useEditorStore();
    const { user } = useAuthStore();

    const navigate = useNavigate();

    const params = useParams();
    const editBlogSlug = params.slug;


    const handleCreateBlog = async (status) => {
        const blogData = {
            title: blogTitle,
            slug: slug,
            excerpt: excerpt,
            content: editorValue,
            image: thumbnailURL,
            tags,
            category,
            author: user?.$id,
            username: user?.prefs.username || user?.name,
            status: status,
            isFeatured: false,
            isArchived: false,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            readingTime: editorValue ? Math.ceil(editorValue.split(' ').length / 200) : 0,
        }
        if (blogData && slug && status === "published") {
            await createBlog(blogData);
            // navigate(`/blog/${slug}`);
            navigate(`/profile`);
            // resetValue();
        } else if (blogData && slug && status === "draft") {
            await createBlog(blogData);
            navigate(`/profile/drafts`);
            resetValue();
        } else {
            notify.warning("Please fill in all fields.");
        }
    }

    return (
        <div className="flex flex-col items-center gap-4 font-medium fixed bottom-24 right-16">
            <button
                className="bg-gray-500 hover:bg-gray-600 w-full active:scale-105 transition-all duration-200 px-2 py-1 rounded-md hover:bg-olive/80"
                onClick={() => handleCreateBlog("draft")}
            >
                Save to Drafts
            </button>
            <button
                onClick={() => handleCreateBlog("published")}
                className="px-2 py-1 w-full rounded-md bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-500/50 dark:focus:ring-purple-500/50 transition-all duration-300 active:scale-105"
            >
                {!!editBlogSlug ? 'Update Blog' : 'Publish Blog'}
            </button>
            <button className="p-1  rounded-md text-xs bg-red-500 active:scale-110 transition-all duration-200 hover:bg-red-600" onClick={resetValue}>
                Reset Editor!
            </button>
        </div>
    );
}
