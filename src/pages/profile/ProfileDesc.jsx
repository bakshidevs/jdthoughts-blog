import { LogOut, Pencil, UserIcon } from "lucide-react";
import useAuthStore from "../../store/authStore";
import { useState } from "react";
import AddUsername from "../../components/AddUsername";


export default function ProfileDesc({ user }) {
    // local state
    const [isUsernameEditing, setIsUsernameEditing] = useState(false);
    const { logout } = useAuthStore();
    return (
        <div className="flex-1">
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
                    <UserIcon className="h-8 w-8" />
                    {user.name}
                </h2>
                {user?.prefs?.username ? (
                    isUsernameEditing ? <AddUsername existingUsername={user?.prefs.username} isUsernameEditing={isUsernameEditing} setIsUsernameEditing={setIsUsernameEditing} /> : (
                        <div className="flex items-center gap-2">
                            <p className="text-lg text-pink-500/70 dark:text-pink-300 font-thin">@{user?.prefs.username}</p>
                            <button onClick={() => setIsUsernameEditing(true)} className="px-2 py-0.5 bg-purple-500 text-pink-100 rounded-md">Edit</button>
                        </div>
                    )
                ) : (
                    isUsernameEditing ? <AddUsername existingUsername={user?.prefs.username} isUsernameEditing={isUsernameEditing} setIsUsernameEditing={setIsUsernameEditing} /> : <button onClick={() => setIsUsernameEditing(true)} className="px-2 py-1 text-white w-max border border-pink-500 bg-pink-950/30 hover:bg-pink-950/60 active:scale-101 rounded-md">Add Username</button>
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
