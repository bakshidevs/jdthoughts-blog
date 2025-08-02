import { Link, Outlet, useLocation } from 'react-router';

export default function ProfileBlogsSection({ user }) {
    const location = useLocation();
    return (
        <>
            {user?.labels.includes("admin") && (
                <nav className="mt-4">
                    <ul className="flex space-x-4 border-b border-white/20">
                        <>
                            <li>
                                <Link
                                    to="blogs"
                                    className={`py-2 px-4 ${location.pathname.endsWith("blogs")
                                        ? "text-purple-300 border-b-2 border-purple-300"
                                        : "text-white hover:text-purple-300"
                                        }`}
                                >
                                    Your Blogs
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="drafts"
                                    className={`py-2 px-4 ${location.pathname.endsWith("drafts")
                                        ? "text-purple-300 border-b-2 border-purple-300"
                                        : "text-white hover:text-purple-300"
                                        }`}
                                >
                                    Drafts
                                </Link>
                            </li>
                        </>
                    </ul>
                </nav>
            )}

            <div className="mt-6">
                {/* Shared UI for Blogs and Drafts */}
                <Outlet />
            </div>
        </>
    )
}
