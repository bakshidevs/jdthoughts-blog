import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useThemeStore = create()(
    persist(
        (set) => ({
            isDarkModeEnabled: true,
            theme: "dark",
            toggleTheme: () => set((state) => {
                const isDark = !state.isDarkModeEnabled
                return {
                    isDarkModeEnabled: isDark,
                    theme: isDark ? "dark" : "light"
                }
            })
        }),
        {
            name: "theme-storage",
            storage: createJSONStorage(() => localStorage),
        }
    )
)

export default useThemeStore;