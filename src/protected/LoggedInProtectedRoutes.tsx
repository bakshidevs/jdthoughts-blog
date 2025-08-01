import { Outlet, Navigate } from "react-router"
import useAuthStore from "../store/authStore"

export default function LoggedInProtectedRoutes() {
    const { isAuthenticated } = useAuthStore();
    return !isAuthenticated ? <Outlet /> : <Navigate to="/profile" replace={true} />;
}
