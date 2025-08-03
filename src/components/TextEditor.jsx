
import MDEditor from "@uiw/react-md-editor";
import useThemeStore from "../store/themeStore";
import ThumbnailUploader from "./ThumbnailUploader";
import BlogSlugGenerate from "./BlogSlugGenerate";
import BlogTitleInput from "./BlogTitleInput";
import useEditorStore from "../store/editorStore";
import EditorActionButtons from "./EditorActionButtons";
import BlogExcerpt from "./BlogExcerptInput";
import BlogCategorySelection from "./BlogCategorySelection";
import BlogTagsInput from "./BlogTagsInput";
import { useEffect } from "react";
import { useParams } from "react-router";

export default function TextEditor() {
    const { theme } = useThemeStore();
    const { editorValue, setEditorValue, resetValue } = useEditorStore();

    const { slug } = useParams();

    // resets the editor value on component unmount (only when something was being edited)
    useEffect(() => {
        if (slug) {
            return () => {
                resetValue();
            }
        }
    }, [resetValue, slug])

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
                    <label htmlFor="content-editor" className="block text-xl font-semibold">Content</label>
                    <MDEditor
                        style={{
                            minHeight: "650px",
                        }}
                        textareaProps={{
                            id: "content-editor",
                            name: "content-editor",
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
