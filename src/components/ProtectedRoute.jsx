import { Navigate, Outlet } from "react-router";

import useAuthStore from "../store/authStore";


export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuthStore()
  return isAuthenticated ? <Outlet /> : <Navigate to="/auth" />
}
