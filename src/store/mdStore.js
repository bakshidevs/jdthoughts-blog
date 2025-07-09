import { create } from "zustand";

const useMDEditor = create((set) => ({
    editorValue: "# This is the blog!",
    setEditorValue: (currentValue) => set({ editorValue: currentValue })
}))

export default useMDEditor;