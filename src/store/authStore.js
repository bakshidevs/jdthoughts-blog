import { create } from "zustand";
import authService from "../lib/authService";

const useAuthStore = create((set) => ({
  user: null,
  loading: true,

  fetchUser: async () => {
    try {
      const user = await authService.getCurrentUser();
      set({ user, loading: false });
    } catch (error) {
      set({ user: null, loading: false });
    }
  },

  logout: async () => {
    try {
      await authService.logout();
      set({ user: null });
    } catch (error) {
      console.error("Logout failed:", error);
    }
  },
}));

export default useAuthStore;
