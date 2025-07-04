import { useState } from "react"
import Login from "../components/Login"
import Signup from "../components/Signup"

export default function Auth() {
    const [tab, setTab] = useState("login")

    return (
        <div className="flex flex-col justify-center items-center h-full">
            <h1>Welcome{tab == "login" ? " Back!" : "!"}</h1>

            <div aria-label="authentication-menu-tab" className="flex w-96 text-center cursor-pointer p-1 border border-gray-50/20 rounded bg-gray-50/20">
                <div onClick={() => setTab("login")} className={`w-1/2 rounded-l-md font-bold p-1 ${tab === "login" ? "bg-gray-50/50" : ""} transition duration-200`}>Login</div>
                <div onClick={() => setTab("signup")} className={`w-1/2  rounded-r-md font-bold p-1 ${tab === "signup" ? "bg-gray-50/50" : ""} transition duration-200`}>Signup</div>
            </div>
            {tab === "login" ? (
                <Login />
            ) : <Signup />}
        </div>
    )
}
