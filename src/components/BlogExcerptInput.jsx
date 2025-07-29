import { useState } from "react";
import useEditorStore from "../store/editorStore"


export default function BlogExcerpt() {
    const { excerpt, setStateValue } = useEditorStore();
    const [charactersLeft, setCharactersLeft] = useState(256)
    return (
        <div className="relative">
            <textarea
                className="bg-purple-500/10 dark:bg-purple-500/20 px-3 py-5 outline-0 border-2 border-purple-500/30 dark:border-purple-500/40 rounded-md w-full"
                value={excerpt}
                name="excerpt"
                onChange={(e) => {
                    setStateValue({ name: "excerpt", value: e.target.value })
                    setCharactersLeft(256 - e.target.value.length)
                }}
                rows={4}
                maxLength={256}
                placeholder="Write blog descript within 256 characters..."
            />
            <p className="absolute bottom-3 right-3">
                {charactersLeft} characters left!
            </p>
        </div>
    )
}
