import { Navigate } from "react-router";

import useAuthStore from "../store/authStore";


export default function ProtectedRoute({children}) {
    const {user} = useAuthStore()
  return user ? children : <Navigate to="/auth" />
}
