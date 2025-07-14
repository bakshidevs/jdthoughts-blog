import { LogOut } from "lucide-react";
import useAuthStore from "../store/authStore"

export default function Profile() {
  const { user, logout } = useAuthStore();
  return (
    <div>
      <h1 className="font-bold text-2xl">Profile</h1>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <button className="flex gap-1 font-bold text-white border border-cyan-500 hover:bg-purple-400/40 active:scale-101 px-3 py-2 rounded-md bg-purple-400/20" onClick={logout}>
        <LogOut /> Logout!
      </button>
    </div>
  )
}
