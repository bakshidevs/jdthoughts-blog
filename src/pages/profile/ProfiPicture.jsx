import { ImageIcon } from "lucide-react";
import defaultProfile from "../../assets/defaultProfile.jpg";

export default function ProfiPicture() {
    return (
        <div className="relative">
            <img
                src={defaultProfile}
                alt="Profile Picture"
                className="w-48 h-48 rounded-full object-cover border-4 border-purple-500"
            />
            <label
                htmlFor="profile-pic-upload"
                className="absolute bottom-0 right-0 bg-purple-500 hover:bg-purple-600 text-white rounded-full p-2 cursor-pointer"
            >
                <ImageIcon className="h-5 w-5" />
                <input
                    type="file"
                    id="profile-pic-upload"
                    className="hidden"
                    accept="image/*"
                    onChange={() => { }}
                />
            </label>
        </div>
    )
}
