import { create } from "zustand";
import authService from "../lib/authService";

const useAuthStore = create((set) => ({
  user: null,
  loading: false,
  error: null,

  // fetching logged-in user info
  fetchUser: async () => {
    set({ loading: true, error: null });
    try {
      const user = await authService.getCurrentUser();
      set({ user, loading: false });
    } catch (error) {
      set({ user: null, loading: false, error: error.message || "Failed to fetch user" });
    }
  },

  // signup + login 
  createAccount: async ({ email, password, name }) => {
    set({ loading: true, error: null });
    try {
      const session = await authService.createAccount({ email, password, name });
      const user = await authService.getCurrentUser();
      set({ user, loading: false });
      return session;
    } catch (error) {
      set({ user: null, loading: false, error: error.message || "Signup failed" });
    }
  },

  // login
  login: async ({ email, password }) => {
    set({ loading: true, error: null });
    try {
      await authService.login({ email, password });
      const user = await authService.getCurrentUser();
      set({ user, loading: false });
    } catch (error) {
      set({ user: null, loading: false, error: error.message || "Login failed" });
    }
  },

  // logout
  logout: async () => {
    set({ loading: true, error: null });
    try {
      await authService.logout();
      set({ user: null, loading: false });
    } catch (error) {
      set({ loading: false, error: error.message || "Logout failed" });
    }
  },
}));

export default useAuthStore;
