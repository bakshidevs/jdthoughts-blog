// importing components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// importing zustand theme store
import useThemeStore from "./store/themeStore";



export default function Layout({ children }) {
    const { theme } = useThemeStore()
    return (
        <div className={`${theme} min-h-screen grid grid-rows-[auto_1fr_auto] `}>
            <div className="fixed inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-red-200 via-yellow-200 to-green-200 opacity-80 dark:from-blue-500 dark:via-purple-500 dark:to-green-500 dark:opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-tr from-red-300 via-yellow-300 to-green-300 opacity-60 mix-blend-multiply dark:from-cyan-400 dark:via-pink-400 dark:to-yellow-400 dark:opacity-60" />
                <div className="absolute inset-0 dark:bg-black/45" />
            </div>
            <Navbar />
            <main className="relative z-10 w-4/5 md:w-3/4 lg:w-2/3 mx-auto">{children}</main>
            <Footer />
        </div>
    )
}
