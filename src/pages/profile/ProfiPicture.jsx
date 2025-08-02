import { ImageIcon } from "lucide-react";
import defaultProfile from "../../assets/defaultProfile.jpg";
import useAuthStore from "../../store/authStore";
import useBlogStore from "../../store/blogStore";

export default function ProfiPicture({ user }) {
    const { fetchUser, uploadProfilePicture } = useAuthStore();
    const { uploadThumbnail } = useBlogStore();

    // handles uploading profile picture
    const handleProfilePictureUpload = async (e) => {
        if (e.target.files) {
            const imageURL = await uploadThumbnail(e.target.files[0]);
            if (imageURL) {
                await uploadProfilePicture(imageURL);
                // user fetched to show the latest update without page reload
                fetchUser();
            }
        }
    }
    return (
        <div className="relative">
            <img
                src={
                    user?.prefs.profilePicture
                        ? user?.prefs.profilePicture
                        : defaultProfile
                }
                alt={defaultProfile ? "Profile Picture" : `Profile Picture of ${user?.name}`}
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
                    onChange={handleProfilePictureUpload}
                />
            </label>
        </div>
    )
}
