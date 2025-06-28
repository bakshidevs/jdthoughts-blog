import { create } from "zustand";


const useThemeStore = create((set) => ({
	isDarkModeEnabled: true,
	currentTheme: "dark",
	toggleDarkMode: (isDarkModeEnabled) => set((state) => {
		isDarkModeEnabled: !state.isDarkModeEnabled;
		currentTheme: state.isDarkModeEnabled ? "dark" : ""
	})
}))

export default useThemeStore;