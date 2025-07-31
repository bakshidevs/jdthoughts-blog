import {
  LogOut,
  Pencil,
  FileText,
  Image as ImageIcon,
  User as UserIcon,
} from "lucide-react";
import { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router";
import useAuthStore from "../store/authStore";
import defaultProfile from "../assets/defaultProfile.jpg";
import useBlogStore from "../store/blogStore";

export default function Profile() {

  const { getBlogsByAuthor } = useBlogStore();

  const { user, logout } = useAuthStore();
  const location = useLocation();


  useEffect(() => {
    if (user) {
      getBlogsByAuthor(user.$id);
    }
  }, [getBlogsByAuthor, user])

  return (
    <div className="container mx-auto mt-10 p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-white">Profile</h1>
        <button
          className="flex items-center gap-2 font-bold text-white border border-red-500 hover:bg-red-500/40 active:scale-101 px-4 py-2 rounded-md bg-red-500/20"
          onClick={logout}
        >
          <LogOut /> Logout
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-center gap-8">
        <div className="relative">
          <img
            src={defaultProfile}
            alt="Profile Picture"
            className="w-48 h-48 rounded-full object-cover border-4 border-purple-500"
          />
          <label
            htmlFor="profile-pic-upload"
            className="absolute bottom-0 right-0 bg-purple-500 hover:bg-purple-600 text-white rounded-full p-2 cursor-pointer"
          >
            <ImageIcon className="h-5 w-5" />
            <input
              type="file"
              id="profile-pic-upload"
              className="hidden"
              accept="image/*"
              onChange={() => { }}
            />
          </label>
        </div>

        <div className="flex-1">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
              <UserIcon className="h-8 w-8" />
              {user.name}
            </h2>
            <p className="text-gray-300 mt-1 flex items-center gap-2">
              <Pencil className="h-4 w-4" />
              {user.email}
            </p>
          </div>
        </div>
      </div>
      <nav className="mt-4">
        <ul className="flex space-x-4 border-b border-white/20">
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
        </ul>
      </nav>

      <div className="mt-6">
        {/* Shared UI for Blogs and Drafts */}
        <Outlet />
      </div>
    </div>
  );
}
