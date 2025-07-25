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
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-green-500 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 via-pink-400 to-yellow-400 opacity-60 mix-blend-multiply" />
                <div className="absolute inset-0 bg-white/5 dark:bg-black/45" />
            </div>
            <Navbar />
            <main className="relative z-10 w-4/5 md:w-3/4 lg:w-2/3 mx-auto">{children}</main>
            <Footer />
        </div>
    )
}
