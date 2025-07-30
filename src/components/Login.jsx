import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react"

import useAuthStore from "../store/authStore";
import { useNavigate } from "react-router";
import { notify } from "./ui/Toast";

export default function Login() {
    const { login, isLoading } = useAuthStore()
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()
    const handleLogin = async () => {
        const { success } = await login(formData);
        if (success) {
            navigate("/profile");
        } else {
            notify.error("Login failed");
        }
    };

    const isBlank = str => !str || str.trim() === "";

    const isInvalid =
        isBlank(formData.email) ||
        isBlank(formData.password) ||
        formData.password.length < 8;

    return (
        <div className="flex items-center justify-center min-h-[300px]">
            <div className="w-full max-w-md p-8 rounded-2xl shadow-2xl border border-white/20 bg-white/10 dark:bg-black/30 backdrop-blur-lg">
                <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">Login</h2>
                <div className="flex flex-col gap-4">
                    <input
                        value={formData.email}
                        onChange={(e) => setFormData(prevFormData => ({ ...prevFormData, [e.target.name]: e.target.value }))}
                        className="w-full p-3 border border-gray-300/30 dark:border-gray-700/50 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400/40 bg-white/10 dark:bg-black/20 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                        required
                    />
                    <div className="relative">
                        <input
                            value={formData.password}
                            onChange={(e) => setFormData(prevFormData => ({ ...prevFormData, [e.target.name]: e.target.value }))}
                            className="w-full p-3 border border-gray-300/30 dark:border-gray-700/50 rounded focus:outline-none focus:ring-2 focus:ring-pink-400/40 bg-white/10 dark:bg-black/20 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500"
                            type={!showPassword ? "password" : "text"}
                            name="password"
                            id="password"
                            placeholder="Enter your password"
                            minLength="8"
                            maxLength="24"
                            required
                        />
                        <button
                            type="button"
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-300"
                            onClick={() => setShowPassword(prevState => !prevState)}
                            tabIndex={-1}
                        >
                            {showPassword ? <Eye /> : <EyeClosed />}
                        </button>
                    </div>
                    <button
                        disabled={isInvalid || isLoading}
                        onClick={handleLogin}
                        className="w-full mt-4 py-3 bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-lg transition-all duration-200 shadow focus:outline-none focus:ring-2 focus:ring-purple-400/40"
                        type="submit"
                    >
                        {isLoading ? "Logging In..." : "Login"}
                    </button>
                </div>
            </div>
        </div>
    )
}
