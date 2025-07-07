import useAuthStore from "../store/authStore"

export default function Profile() {
  const {user} = useAuthStore();
  return (
    <div>
      <h1 className="font-bold text-2xl">Profile</h1>
      {user.name}
    </div>
  )
}
