
import MDEditor from "@uiw/react-md-editor";
import { useState, useRef } from "react";
import useMDEditor from "../store/mdStore";
import useThemeStore from "../store/themeStore";
import useBlogStore from "../store/blogStore";
import { useNavigate } from "react-router";
import { X } from "lucide-react";

import { notify } from "../components/ui/Toast"

export default function TextEditor() {
    const { theme } = useThemeStore();
    const { editorValue, setEditorValue } = useMDEditor();
    const { createBlog } = useBlogStore();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [tags, setTags] = useState([]);
    const [tagInput, setTagInput] = useState("");
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const fileInputRef = useRef(null);

    const slugify = (str) =>
        str
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$/g, "");

    const handleTitleChange = (e) => {
        const newTitle = e.target.value;
        setTitle(newTitle);
        setSlug(slugify(newTitle));
    };

    const handleTagInputChange = (e) => {
        setTagInput(e.target.value);
    };

    const handleTagInputKeyDown = (e) => {
        if (e.key === "," || e.key === "Enter") {
            e.preventDefault();
            const newTag = tagInput.trim();
            if (newTag && !tags.includes(newTag) && tags.length < 4) {
                setTags([...tags, newTag]);
            }
            setTagInput("");
        }
    };

    const removeTag = (tagToRemove) => {
        setTags(tags.filter(tag => tag !== tagToRemove));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleImageContainerClick = () => {
        fileInputRef.current.click();
    };

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
        <div className="max-w-4xl mx-auto py-8">
            <form className="space-y-8">
                <div className="space-y-2">
                    <label htmlFor="title" className="block text-xl font-semibold text-gray-900 dark:text-white">Blog Title</label>
                    <input
                        type="text"
                        id="title"
                        placeholder="What's on your mind?"
                        value={title}
                        onChange={handleTitleChange}
                        className="w-full px-4 py-3 bg-purple-500/10 dark:bg-purple-500/20 border-2 border-purple-500/30 dark:border-purple-500/40 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="slug" className="block text-lg font-medium text-gray-700 dark:text-gray-300">Slug</label>
                    <input
                        type="text"
                        id="slug"
                        placeholder="your-blog-slug-will-be-here"
                        value={slug}
                        disabled
                        className="w-full px-4 py-3 bg-purple-500/10 dark:bg-purple-500/20 border-2 border-purple-500/30 dark:border-purple-500/40 rounded-lg shadow-sm transition-all duration-200"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="tags" className="block text-lg font-medium text-gray-700 dark:text-gray-300">Tags</label>
                    <div className="flex flex-wrap items-center w-full px-4 py-3 bg-purple-500/10 dark:bg-purple-500/20 border-2 border-purple-500/30 dark:border-purple-500/40 rounded-lg shadow-sm">
                        {tags.map(tag => (
                            <div key={tag} className="flex items-center bg-purple-500/80 text-white text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full">
                                {tag}
                                <button onClick={() => removeTag(tag)} className="ml-2 text-white hover:text-gray-200">
                                    <X size={16} />
                                </button>
                            </div>
                        ))}
                        <input
                            type="text"
                            id="tags"
                            placeholder={tags.length < 4 ? "Add a tag..." : "Max 4 tags"}
                            value={tagInput}
                            onChange={handleTagInputChange}
                            onKeyDown={handleTagInputKeyDown}
                            className="flex-grow bg-transparent focus:outline-none text-gray-900 dark:text-white"
                            disabled={tags.length >= 4}
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="image" className="block text-lg font-medium text-gray-700 dark:text-gray-300">Featured Image</label>
                    <div onClick={handleImageContainerClick} className="mt-1 flex justify-center items-center w-full h-64 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md cursor-pointer">
                        {imagePreview ? (
                            <div className="relative w-max p-4">
                                <button onClick={() => setImagePreview(null)} className="absolute right-0">
                                    <X />
                                </button>
                                <img src={imagePreview} alt="Featured image preview" className=" rounded-md" />
                            </div>
                        ) : (
                            <div className="space-y-1 text-center">
                                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div className="flex text-sm text-gray-600 dark:text-gray-400">
                                    <label htmlFor="image" className="relative cursor-pointer bg-white dark:bg-gray-800 rounded-md font-medium text-purple-600 dark:text-purple-400 hover:text-purple-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-purple-500">
                                        <span>Upload a file</span>
                                        <input id="image" name="image" type="file" className="sr-only" onChange={handleImageChange} ref={fileInputRef} />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG, GIF up to 10MB</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="block text-xl font-semibold text-gray-900 dark:text-white">Content</label>
                    <MDEditor
                        style={{
                            minHeight: "600px",
                        }}
                        data-color-mode={theme}
                        value={editorValue}
                        onChange={setEditorValue}
                        className="mt-1 !bg-white dark:!bg-gray-800 border dark:border-gray-600 rounded-lg shadow-sm"
                    />
                </div>

                <div className="fixed bottom-10 right-10 z-50 flex flex-col gap-4">
                    <button onClick={handleSaveDraft} className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white bg-gray-500 hover:bg-gray-600 rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-gray-500/50 dark:focus:ring-gray-500/50 transition-all duration-300 ease-in-out transform hover:-translate-y-1">
                        Save Draft
                    </button>
                    <button type="submit" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-500/50 dark:focus:ring-purple-500/50 transition-all duration-300 ease-in-out transform hover:-translate-y-1">
                        Publish
                    </button>
                </div>
            </form>
        </div>
    );
}
