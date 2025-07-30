import useEditorStore from "../store/editorStore";

export default function BlogTitleInput() {
    const { blogTitle, setStateValue } = useEditorStore();
    return (
        <div className="w-full">
            <label htmlFor="blogTitle" className="block text-lg font-medium text-gray-700 dark:text-gray-300">Blog Title</label>
            <input
                className="bg-purple-500/10 dark:bg-purple-500/20 px-3 py-5 outline-0 rounded-md w-full border-2 border-purple-500/30 dark:border-purple-500/40"
                value={blogTitle}
                onChange={(e) => setStateValue({ name: "blogTitle", value: e.target.value })}
                onClick={(e) => e.currentTarget.select()}
                name="blogTitle"
                placeholder="Enter your blog title..."
                maxLength={256}
            />
        </div>
    );
}
