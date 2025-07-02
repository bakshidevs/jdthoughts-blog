import { LogOut, Menu, Moon, PenTool, Sun, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

// importing theme toggler from zustand theme store
import useThemeStore from "../store/themeStore";


// importing authServices from store
import useAuthStore from "../store/authStore";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    //   const [isProfileOpen, setIsProfileOpen] = useState(false);
    const { loading, logout } = useAuthStore()
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
                        {isAuthenticated && user.role === 'writer' && (
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
                        {/* Theme Toggle */}
                        <button
                            onClick={toggleDarkMode}
                            className="text-white hover:bg-white/20 p-3 rounded"
                        >
                            {isDarkModeEnabled ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                        </button>
                        {/* Action Buttons */}

                    </div>
                    {/* Mobile Actions */}
                    <div className="flex gap-4 text-white md:hidden">
                        <button onClick={toggleDarkMode}>
                            {isDarkModeEnabled ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                        </button>
                        <button onClick={() => setIsMenuOpen(prevState => !prevState)}>
                            {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                        </button>
                    </div>
                </div>


                {/* Mobile View */}
                {isMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white/20 backdrop-blur-lg rounded-lg border border-white/20 shadow-lg">
                        <div className="p-2">
                            {user.role === 'writer' && (
                                <Link
                                    to="/write"
                                    className="flex items-center space-x-2 w-full px-3 py-2 text-white hover:bg-white/20 rounded-md transition-colors"
                                    onClick={() => setIsProfileOpen(false)}
                                >
                                    <PenTool className="w-4 h-4" />
                                    <span>Write Blog</span>
                                </Link>
                            )}
                            <button
                                onClick={logout}
                                className="flex items-center space-x-2 w-full px-3 py-2 text-white hover:bg-white/20 rounded-md transition-colors"
                            >
                                <LogOut className="w-4 h-4" />
                                <span>Logout</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
