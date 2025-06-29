import { Moon, PenTool, Sun } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

// importing theme toggler from zustand theme store
import useThemeStore from "../store/themeStore";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    //   const [isProfileOpen, setIsProfileOpen] = useState(false);
    const isAuthenticated = true
    const user = {
        name: 'Bakshi',
        role: 'writer'
    }

    const { isDarkModeEnabled, toggleDarkMode } = useThemeStore()

    const categories = ['Stories', 'Poetry', 'Tech'];
    return (
        <nav
            className="sticky top-0 z-50 backdrop-blur-lg bg-white/10 dark:bg-black/20 border-b border-white/20"
        >
            <div className="container mx-auto px-4 py-4">
                {/* Desktop View */}
                <div className="flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
                        JDThoughts
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {categories.map((category) => (
                            <Link
                                key={category}
                                to={`/${category.toLowerCase()}`}
                                className="text-white/90 hover:text-white transition-colors font-medium"
                            >
                                {category}
                            </Link>
                        ))}
                        {/* Authenticated user can only Write */}
                        {isAuthenticated && user?.role === 'writer' && (
                            <Link
                                to="/write"
                                className="text-white/90 hover:text-white transition-colors font-medium flex items-center space-x-1"
                            >
                                <PenTool className="w-4 h-4" />
                                <span>Write</span>
                            </Link>
                        )}
                    </div>
                    {/* Theme and Authentication */}
                    <div className="hidden md:flex items-center space-x-4">
                        {/* Theme toggle */}
                        {/* Theme Toggle */}
                        <button
                            onClick={toggleDarkMode}
                            className="text-white hover:bg-white/20"
                        >
                            {isDarkModeEnabled ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                        </button>
                    </div>
                </div>
                {/* Mobile View */}
                <div className=""></div>
            </div>
        </nav>
    )
}
