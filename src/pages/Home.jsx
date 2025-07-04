import { useEffect } from "react"
import useAuthStore from "../store/authStore"
import { LogOut } from "lucide-react"
import LoadingScreen from "../components/LoadingScreen"

export default function Home() {
  const { user, loading, fetchUser, logout } = useAuthStore()
  useEffect(() => {
    fetchUser()
  }, [])
  return (
    <div className="">
      Home Page!
      {loading && (
        <LoadingScreen />
      )}
      {!loading && user && (
        <div className="w-64 h-64 p-4 mx-auto my-auto bg-gradient-to-r from-amber-400 via-pink-400 to-purple-400 relative flex flex-col justify-center items-center rounded">
          <h1>Welcome, {user.name}!</h1>
          <p>{user.email}!</p>
          <button>
            <LogOut className="absolute top-4 right-4" onClick={logout} />
          </button>
        </div>
      )}
    </div>
  )
}
