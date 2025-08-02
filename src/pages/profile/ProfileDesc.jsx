import { LogOut, Pencil, UserIcon } from "lucide-react";
import useAuthStore from "../../store/authStore";


export default function ProfileDesc({ user }) {
    const { logout } = useAuthStore();
    return (
        <div className="flex-1">
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
                    <UserIcon className="h-8 w-8" />
                    {user.name}
                </h2>
                {user?.prefs?.username && (
                    <p className="text-lg text-secondary/70 text-yellow-600 dark:text-purple-600 font-thin">@{user?.prefs.username}</p>
                )}
                <p className="text-gray-300 mt-1 flex items-center gap-2">
                    <Pencil className="h-4 w-4" />
                    {user.email}
                </p>
                <button
                    className="flex items-center gap-2 font-bold text-white border border-red-500 hover:bg-red-500/40 active:scale-101 px-4 py-2 rounded-md bg-red-500/20"
                    onClick={logout}
                >
                    <LogOut /> Logout
                </button>
            </div>
        </div>
    )
}
