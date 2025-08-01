import { Navigate, Outlet } from "react-router";
import useAuthStore from "../store/authStore";


export default function AdminRoutes() {
  const { isAuthenticated , user} = useAuthStore();
      return isAuthenticated && user?.labels.includes("admin") ? <Outlet /> : <Navigate to="/profile" replace={true} />;
}
