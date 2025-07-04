import { useState } from "react"
import Login from "../components/Login"
import Signup from "../components/Signup"

export default function Auth() {
    const [tab, setTab] = useState("login")

    return (
        <div className="flex flex-col justify-center items-center min-h-[80vh] bg-transparent">
            <div className="w-full max-w-lg p-8 rounded-2xl shadow-2xl border border-white/20 bg-white/10 dark:bg-black/30 backdrop-blur-lg mt-8">
                <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    Welcome{tab === "login" ? " Back!" : "!"}
                </h1>
                <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
                    {tab === "login"
                        ? "Sign in to access your account, write new blogs, and connect with the JDThoughts community."
                        : "Create a free account to start sharing your stories, poetry, and tech insights with the world!"}
                </p>
                <div aria-label="authentication-menu" className="flex w-full text-center cursor-pointer p-1 border border-gray-50/20 rounded bg-gray-50/20 mb-6">
                    <div onClick={() => setTab("login")} className={`w-1/2 rounded-l-md font-bold p-2 ${tab === "login" ? "bg-gray-50/50" : ""} transition duration-200`}>Login</div>
                    <div onClick={() => setTab("signup")} className={`w-1/2 rounded-r-md font-bold p-2 ${tab === "signup" ? "bg-gray-50/50" : ""} transition duration-200`}>Signup</div>
                </div>
                <div className="w-full">
                    {tab === "login" ? (
                        <Login />
                    ) : <Signup />}
                </div>
            </div>
        </div>
    )
}
