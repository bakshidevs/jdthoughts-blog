import { create } from "zustand";
import blogService from "../lib/blogService";

const useBlogStore = create((set, get) => ({
  loading: false,
  error: null,
  allBlogs: [],
  currentBlog: null,

  // Get all active blogs
  getAllBlogs: async () => {
    set({ loading: true, error: null });
    try {
      const res = await blogService.getPosts();
      set({ allBlogs: res?.documents || [], loading: false });
    } catch (error) {
      set({
        error: error.message || "Failed to fetch blogs",
        loading: false,
      });
    }
  },

  // Get a blog by slug
  getBlogBySlug: async (slug) => {
    set({ loading: true, error: null });
    try {
      const blog = await blogService.getPost(slug);
      set({ currentBlog: blog, loading: false });
      return blog;
    } catch (error) {
      set({
        error: error.message || "Failed to fetch blog",
        loading: false,
      });
      return null;
    }
  },

  // Create blog
  createBlog: async (blogData) => {
    set({ loading: true, error: null });
    try {
      const newBlog = await blogService.createPost(blogData);
      set((state) => ({
        allBlogs: [newBlog, ...state.allBlogs],
        loading: false,
      }));
      return newBlog;
    } catch (error) {
      set({
        error: error.message || "Failed to create blog",
        loading: false,
      });
      return null;
    }
  },

  // Update blog
  updateBlog: async (slug, blogData) => {
    set({ loading: true, error: null });
    try {
      const updatedBlog = await blogService.updatePost(slug, blogData);
      set((state) => ({
        allBlogs: state.allBlogs.map((blog) =>
          blog.$id === slug ? updatedBlog : blog
        ),
        loading: false,
      }));
      return updatedBlog;
    } catch (error) {
      set({
        error: error.message || "Failed to update blog",
        loading: false,
      });
      return null;
    }
  },

  // Delete blog
  deleteBlog: async (slug) => {
    set({ loading: true, error: null });
    try {
      const success = await blogService.deletePost(slug);
      if (success) {
        set((state) => ({
          allBlogs: state.allBlogs.filter((blog) => blog.$id !== slug),
          loading: false,
        }));
      }
      return success;
    } catch (error) {
      set({
        error: error.message || "Failed to delete blog",
        loading: false,
      });
      return false;
    }
  },

  // Upload image
  uploadFile: async (file) => {
    try {
      return await blogService.uploadFile(file);
    } catch (error) {
      set({ error: error.message || "File upload failed" });
      return null;
    }
  },

  // Delete image
  deleteFile: async (fileId) => {
    try {
      return await blogService.deleteFile(fileId);
    } catch (error) {
      set({ error: error.message || "File delete failed" });
      return false;
    }
  },

  // Get image preview URL
  getFilePreview: (fileId) => {
    try {
      return blogService.getFilePreview(fileId);
    } catch (error) {
      set({ error: error.message || "Preview generation failed" });
      return null;
    }
  },
}));

export default useBlogStore;
