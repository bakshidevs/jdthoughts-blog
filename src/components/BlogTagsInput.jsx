import { useState } from "react";
import useEditorStore from "../store/editorStore"
import { X } from "lucide-react";


export default function BlogTagsInput() {
    const [tagInput, setTagInput] = useState("");
    const { tags, setStateValue } = useEditorStore();
    const handleTagInputChange = (e) => {
        setTagInput(e.target.value);
    };

    const handleTagInputKeyDown = (e) => {
        if (e.key === "," || e.key === "Enter") {
            e.preventDefault();
            const newTag = tagInput.trim();
            if (newTag && !tags.includes(newTag) && tags.length < 4) {
                setStateValue({ name: "tags", value: [...tags, newTag] });
            }
            setTagInput("");
        }
    };

    const removeTag = (tagToRemove) => {
        setStateValue({ name: "tags", value: tags.filter(tag => tag !== tagToRemove) });
    };

    return (
        <div>
            <label htmlFor="tags" className="block text-lg font-medium text-gray-700 dark:text-gray-300">Tags</label>
            <div className="flex flex-wrap items-center w-full px-4 py-3 bg-purple-500/10 dark:bg-purple-500/20 border-2 border-purple-500/30 dark:border-purple-500/40 rounded-lg shadow-sm">
                {tags.map(tag => (
                    <div key={tag} className="flex items-center bg-purple-500/80  text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full">
                        {tag}
                        <button onClick={() => removeTag(tag)} className="ml-2  hover:text-gray-200">
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
                    className="flex-grow bg-transparent focus:outline-none"
                    disabled={tags.length >= 4}
                    maxLength={48}
                    autoComplete="off"
                />
            </div>
        </div>
    )
}
