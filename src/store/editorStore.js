import { create } from "zustand";
import { persist } from "zustand/middleware";

const useEditorStore = create(
  persist(
    (set, get) => ({
      blogTitle: "Blog Title Goes Here",
      thumbnailURL: "",
      slug: "",
      excerpt: "",
      category: "",
      tags: [],
      editorValue: "## Write your blog content here",

      setStateValue: ({ name, value }) => {
        set({
          [name]: value,
        });
      },

      generateSlug: () => {
        const { blogTitle } = get();
        const blogSlug = blogTitle
          .replace(/\s+/g, "-")
          .toLowerCase()
          .replace(/[^\w-]+/g, "");
        set({ slug: blogSlug });
      },

      setEditorValue: (editorValue) => {
        set({ editorValue });
      },

      resetValue: () => {
        set({
          blogTitle: "Blog Title Goes Here",
          thumbnailURL: "",
          slug: "blog-title-goes-here",
          excerpt: "",
          category: "",
          tags: [],
          editorValue: "## Start here",
        });
      },
    }),
    {
      name: "editor-storage",
    }
  )
);

export default useEditorStore;
