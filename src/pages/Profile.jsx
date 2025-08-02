import { useEffect } from "react";
import useAuthStore from "../store/authStore";

import useBlogStore from "../store/blogStore";
import ProfiPicture from "./profile/ProfiPicture";
import ProfileDesc from "./profile/ProfileDesc";
import ProfileBlogsSection from "./profile/ProfileBlogsSection";

export default function Profile() {

  const { getBlogsByAuthor } = useBlogStore();

  const { user, fetchUser } = useAuthStore();



  useEffect(() => {
    fetchUser();
  }, [fetchUser]);


  useEffect(() => {
    if (user) {
      getBlogsByAuthor(user.$id);
    }
  }, [getBlogsByAuthor, user])

  return (
    <div className="container mx-auto mt-10 p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-white">Profile</h1>

      </div>

      <div className="flex flex-col md:flex-row items-center md:items-center gap-8">
        <ProfiPicture />
        <ProfileDesc user={user} />
      </div>
      <ProfileBlogsSection user={user} />
    </div>
  );
}
