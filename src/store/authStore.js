import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { account, ID } from '../lib/appwrite';

const useAuthStore = create(
  persist(
    (set, get) => ({
      isLoading: false,
      isAuthenticated: false,
      user: null,

      fetchUser: async () => {
        set({ isLoading: true });
        try {
          const user = await account.get();
          set({ user, isAuthenticated: true, isLoading: false });
          return { success: true };
        } catch (error) {
          console.error("Error fetching user:", error);
          set({ user: null, isAuthenticated: false });
          return { success: false };
        } finally {
          set({ isLoading: false });
        }
      },

      createAccount: async ({ email, password, fullname }) => {
        set({ isLoading: true });
        try {
          await account.create(ID.unique(), email, password, fullname);
          await account.createEmailPasswordSession(email, password);
          const user = await account.get();
          set({ user, isAuthenticated: true });
          return { success: true };
        } catch (error) {
          console.error("Error creating account:", error);
          return { success: false };
        } finally {
          set({ isLoading: false });
        }
      },

      login: async ({ email, password }) => {
        set({ isLoading: true });
        try {
          await account.createEmailPasswordSession(email, password);
          const user = await account.get();
          set({ user, isAuthenticated: true });
          return { success: true };
        } catch (error) {
          console.error("Error logging in:", error);
          return { success: false };
        } finally {
          set({ isLoading: false });
        }
      },

      addUsername: async (username) => {
        try {
          const { user } = get();
          const prevPrefs = user?.prefs
          if (!prevPrefs) {
            console.error("No previous preferences found.");
            return;
          }
          await account.updatePrefs({
            ...prevPrefs,
            username
          });
        } catch (error) {
          console.error("Error adding username:", error);
        }
      },

      uploadProfilePicture: async (imageURL) => {
        try {
          const { user } = get();
          const prevPrefs = user?.prefs
          if (!prevPrefs) {
            console.error("No previous preferences found.");
            return;
          }
          await account.updatePrefs({
            ...prevPrefs,
            profilePicture: imageURL,
          });
        } catch (error) {
          console.error("Error uploading profile image:", error);
        }
      },

      logout: async () => {
        try {
          await account.deleteSession('current');
          set({ user: null, isAuthenticated: false, isLoading: false });
        } catch (error) {
          console.error("Error logging out:", error);
        }
      },

      globalLogout: async () => {
        try {
          await account.deleteSessions();
          set({ user: null, isAuthenticated: false, isLoading: false });
        } catch (error) {
          console.error("Error logging out globally:", error);
        }
      },

      // deleteAccount: async () => {
      //   try {
      //     await account.delete();
      //     set({ user: null, isAuthenticated: false, isLoading: false });
      //   } catch (error) {
      //     console.error("Error deleting account:", error);
      //   }
      // },
    }),
    {
      name: 'auth-storage',
    }
  )
);

export default useAuthStore;
