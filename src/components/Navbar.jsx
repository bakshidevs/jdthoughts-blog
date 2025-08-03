import { LogOut, Menu, Moon, PenTool, Sun, User, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

// importing theme toggler from zustand theme store
import useThemeStore from "../store/themeStore";


// importing authServices from store
import useAuthStore from "../store/authStore";
import useViewport from "../hooks/useViewport";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isAuthenticated, user, logout } = useAuthStore();

    const { isMobile } = useViewport();

    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

    const { isDarkModeEnabled, toggleTheme } = useThemeStore()

    const categories = ['Story', 'Poetry', 'Tech'];
    const navLinks = (
        <>
            {categories.map((category) => (
                <Link
                    key={category}
                    to={`/${category.toLowerCase()}`}
                    className="text-gray-600 dark:text-white/90 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                >
                    {category}
                </Link>
            ))}
            {isAuthenticated && user?.labels[0] === 'admin' && (
                <Link
                    to="/write"
                    className="text-gray-600 dark:text-white/90 hover:text-gray-900 dark:hover:text-white transition-colors font-medium flex items-center space-x-1"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <PenTool className="w-4 h-4" />
                    <span>Write</span>
                </Link>
            )}
        </>
    );

    const authLinks = (
        <div className="flex items-center gap-2">
            {isAuthenticated ? (
                <div className="relative">
                    {isMobile ? (
                        <div onClick={() => setIsProfileMenuOpen(prevState => !prevState)} className="cursor-pointer">
                            {user?.prefs.profilePicture ? (<img className="w-14 h-14 object-cover border-2 border-white rounded-full" src={user?.prefs.profilePicture} alt={user?.name} />) : (<User className="w-4 h-4" />)}
                        </div>
                    ) : (
                        <Link to="/profile">
                            <div className="cursor-pointer">
                                {user?.prefs.profilePicture ? (<img className="w-14 h-14 object-cover border-2 border-white rounded-full" src={user?.prefs.profilePicture} alt={user?.name} />) : (<User className="w-4 h-4" />)}
                            </div>
                        </Link>
                    )}
                    {isProfileMenuOpen && !isMobile && (
                        <div className="w-40 text-xl absolute py-2 z-10 top-16 right-10 border rounded-md border-indigo-500 bg-purple-900/40 text-white" onClick={() => setIsProfileMenuOpen(prevState => !prevState)}>
                            <Link to="/profile" className="" onClick={() => setIsMenuOpen(false)}>
                                <button className="p-2 rounded-md hover:bg-indigo-500/40 w-full text-left">
                                    Profile
                                </button>
                            </Link>
                            <hr className="text-indigo-500/40 my-1" />
                            <button onClick={() => { logout(); setIsMenuOpen(false); }} className="flex gap-2 items-center p-2 rounded-md hover:bg-indigo-500/40 w-full">
                                <LogOut className="w-4 h-4" />
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <>
                    <Link to="/auth" className="text-gray-600 dark:text-white/90 hover:text-gray-900 dark:hover:text-white transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Login</Link>
                    <Link to="/auth" className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Signup</Link>
                </>
            )}
        </div>
    );

    return (
        <nav
            className="sticky top-0 z-50 backdrop-blur-lg bg-white/10 dark:bg-black/20 border-b border-white/20"
        >
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
                        JDThoughts
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks}
                    </div>

                    {/* Theme and Authentication */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button
                            onClick={toggleTheme}
                            className="text-gray-600 dark:text-white hover:bg-gray-400/20 dark:hover:bg-white/20 p-3 rounded-full"
                        >
                            {isDarkModeEnabled ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                        </button>
                        {authLinks}
                    </div>

                    {/* Mobile Actions */}
                    <div className="flex gap-4 text-gray-600 dark:text-white md:hidden">
                        <button onClick={toggleTheme}>
                            {isDarkModeEnabled ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                        </button>
                        <button onClick={() => setIsMenuOpen(prevState => !prevState)}>
                            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* Mobile View */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4">
                        <div className="flex flex-col items-center space-y-4">
                            {navLinks}
                            <div className="pt-4 border-t border-white/20 w-full flex justify-center">
                                {authLinks}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
