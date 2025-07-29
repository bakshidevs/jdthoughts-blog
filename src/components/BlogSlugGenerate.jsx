import { useEffect } from "react";
import useEditorStore from "../store/editorStore"

export default function BlogSlugGenerate() {
    const { slug, generateSlug, blogTitle } = useEditorStore();
    useEffect(() => {
        generateSlug();
    }, [blogTitle])
    return (
        <div className="w-full">
            <label htmlFor="tags" className="block text-lg font-medium text-gray-700 dark:text-gray-300">Slug</label>
            <input
                className="bg-purple-500/10 dark:bg-purple-500/20 px-3 py-5 rounded-md w-full border-2 border-purple-500/30 dark:border-purple-500/40"
                value={slug}
                disabled
                name="slug"
                placeholder="Slug will be generated here..."
            />
        </div>
    )
}
