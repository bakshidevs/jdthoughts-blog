import { create } from "zustand";
import { persist } from "zustand/middleware";
import { databases, storage, ID } from "../lib/appwrite";
import { conf } from "../conf/conf";
import { Query } from "appwrite";

const useBlogStore = create(
  persist(
    (set, get) => ({
      blogs: [],
      publishedBlogs: [],
      draftedBlogs: [],
      techBlogs: [],
      storyBlogs: [],
      poetryBlogs: [],
      allBlogsByAuthor: [],
      publishedByAuthor: [],
      draftedByAuthor: [],
      currentBlog: null,
      isLoading: false,

      uploadThumbnail: async (file) => {
        try {
          const response = await storage.createFile(conf.appwriteBucketId, ID.unique(), file);
          const fileId = response.$id;
          const previewUrl = storage.getFileView(conf.appwriteBucketId, fileId);
          return previewUrl;
        } catch (error) {
          console.error("Upload failed :: Appwrite :: ", error);
        }
      },

      createBlog: async (blog) => {
        set({ isLoading: true });
        try {
          await databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteBlogsCollectionId,
            ID.unique(),
            blog
          );
        } catch (error) {
          console.error("Blog creation failure :: Appwrite :: ", error);
        } finally {
          set({ isLoading: false });
        }
      },

      updateBlog: async (blogId, blog) => {
        set({ isLoading: true });
        try {
          await databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteBlogsCollectionId,
            blogId,
            blog
          );
        } catch (error) {
          console.error("Blog update failure :: Appwrite :: ", error);
        } finally {
          set({ isLoading: false });
        }
      },

      getAllBlogs: async () => {
        set({ isLoading: true });
        try {
          const response = await databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteBlogsCollectionId
          );
          if (response.documents) {
            const allBlogs = response.documents;
            const publishedBlogs = allBlogs.filter(blog => blog.status === "published");
            set({
              blogs: allBlogs,
              publishedBlogs: publishedBlogs,
              draftedBlogs: allBlogs.filter(blog => blog.status === "draft"),
              techBlogs: publishedBlogs.filter(blog => blog.category === "tech"),
              storyBlogs: publishedBlogs.filter(blog => blog.category === "story"),
              poetryBlogs: publishedBlogs.filter(blog => blog.category === "poetry"),
            });
          } else {
            set({ blogs: [] });
          }
        } catch (error) {
          console.error("Fetching all blogs failed :: Appwrite :: ", error);
        } finally {
          set({ isLoading: false });
        }
      },

      getBlogBySlug: async (slug) => {
        set({ isLoading: true });
        try {
          const { blogs } = get();
          const blog = blogs.find(blog => blog.slug === slug);
          if (blog) {
            set({ currentBlog: blog });
          } else {
            const response = await databases.listDocuments(
              conf.appwriteDatabaseId,
              conf.appwriteBlogsCollectionId,
              [Query.equal("slug", slug)]
            );
            if (response && response.documents.length > 0) {
              set({ currentBlog: response.documents[0] });
            } else {
              set({ currentBlog: null });
            }
          }
        } catch (error) {
          console.error("Blog fetching failed :: Appwrite :: ", error);
        } finally {
          set({ isLoading: false });
        }
      },

      getBlogsByAuthor: async (authorId) => {
        set({ isLoading: true });
        try {
          const response = await databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteBlogsCollectionId,
            [Query.equal("author", authorId)]
          );
          if (response.documents) {
            const authoredBlogs = response.documents;
            set({
              allBlogsByAuthor: authoredBlogs,
              publishedByAuthor: authoredBlogs.filter(blog => blog.status === "published"),
              draftedByAuthor: authoredBlogs.filter(blog => blog.status === "draft")
            });
          } else {
            set({
              allBlogsByAuthor: [],
              publishedByAuthor: [],
              draftedByAuthor: []
            });
          }
        } catch (error) {
          console.error("Fetching user blogs failed :: Appwrite :: ", error);
        } finally {
          set({ isLoading: false });
        }
      }
    }),
    {
      name: "blog-storage",
    }
  )
);

export default useBlogStore;
