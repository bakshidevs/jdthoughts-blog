import { create } from "zustand";


const useThemeStore = create((set) => ({
	isDarkModeEnabled: true,
	currentTheme: "dark",
	toggleDarkMode: () =>
    set((state) => {
      const nextDarkMode = !state.isDarkModeEnabled;
      return {
        isDarkModeEnabled: nextDarkMode,
        currentTheme: nextDarkMode ? "dark" : "",
      };
    }),
}))

export default useThemeStore;