
import MDEditor from "@uiw/react-md-editor";
import { useState, useRef } from "react";
import useThemeStore from "../store/themeStore";
import useBlogStore from "../store/blogStore";
import { useNavigate } from "react-router";
import { X } from "lucide-react";

import { notify } from "../components/ui/Toast"
import ThumbnailUploader from "./ThumbnailUploader";
import BlogSlugGenerate from "./BlogSlugGenerate";
import BlogTitleInput from "./BlogTitleInput";
import useEditorStore from "../store/editorStore";
import EditorActionButtons from "./EditorActionButtons";
import BlogExcerpt from "./BlogExcerptInput";
import BlogCategorySelection from "./BlogCategorySelection";
import BlogTagsInput from "./BlogTagsInput";

export default function TextEditor() {
    const { theme } = useThemeStore();
    const { editorValue, setEditorValue } = useEditorStore();
    const { createBlog } = useBlogStore();

    const [tags, setTags] = useState([]);
    const [tagInput, setTagInput] = useState("");
    const fileInputRef = useRef(null);


    

    const handleSaveDraft = async (e) => {
        e.preventDefault();
        const blogData = {
            title,
            slug,
            tags,
            content: editorValue,
            featuredImage: image,
            status: "draft",
        };
        const newBlog = await createBlog(blogData);
        if (newBlog) {
            notify.success("Blog Creation Successful!")
        }
    };

    return (
        <div className="max-w-4xl mx-auto py-8 dark:text-white">
            <div className="space-y-8">
                <div className="grid gap-4">
                    <BlogTitleInput />
                    <BlogSlugGenerate />
                    <BlogTagsInput />
                    <BlogCategorySelection />
                    <BlogExcerpt />
                    <ThumbnailUploader />
                </div>

                <div className="space-y-2">
                    <label className="block text-xl font-semibold">Content</label>
                    <MDEditor
                        style={{
                            minHeight: "650px",
                        }}
                        data-color-mode={theme}
                        value={editorValue}
                        onChange={setEditorValue}
                        className="mt-1 !bg-white dark:!bg-gray-800 border dark:border-gray-600 rounded-lg shadow-sm"
                        preview='edit'
                    />
                </div>
                <EditorActionButtons />
            </div>
        </div>
    );
}
