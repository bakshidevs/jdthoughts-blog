import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useMDEditor = create()(
    persist(
        (set) => ({
            editorValue: "# This is the blog!",
            setEditorValue: (currentValue) => set({ editorValue: currentValue })
        }),
        {
            name: "mdeditor-store",
            storage: createJSONStorage(() => localStorage)
        }
    )
)

export default useMDEditor;