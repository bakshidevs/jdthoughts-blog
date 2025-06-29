import { useEffect } from "react";
import useAuthStore from "../store/authStore"; // adjust path if needed

export default function Home() {
  const { user, loading, fetchUser } = useAuthStore();

  useEffect(() => {
    fetchUser(); // Call it once when the component mounts
  }, []);

  return (
    <div>
      <h1>Home</h1>

      {loading && <p>Loading user...</p>}

      {user && (
        <div>
          <p>Welcome, {user.name}!</p>
        </div>
      )}

      {!loading && !user && (
        <div>
          <p>No user logged in.</p>
        </div>
      )}
    </div>
  );
}
