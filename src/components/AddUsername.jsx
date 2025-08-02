import { Check } from 'lucide-react';
import { useState } from 'react'
import useAuthStore from '../store/authStore';



export default function AddUsername({ isUsernameEditing, setIsUsernameEditing, existingUsername }) {
    const { fetchUser, addUsername } = useAuthStore();
    const [username, setUsername] = useState(isUsernameEditing && existingUsername ? existingUsername : "");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsUsernameEditing(false);
        // username added/edited via authstore
        await addUsername(username);
        setUsername("");
        // user fetched to show the latest username without page reload
        fetchUser();
    }
    return (
        <form onSubmit={handleSubmit} className="flex gap-2 my-1">
            <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Enter your username" className="bg-pink-950/10 px-2 py-1 outline-0 focus:outline-1 focus:outline-pink-500 text-pink-50 rounded-md" />
            <button type="submit" className="bg-purple-500 text-pink-100 px-2 py-1 rounded-md hover:bg-purple-500/80 transition-colors">
                <Check />
            </button>
        </form>
    )
}
