// importing routing components
import { BrowserRouter, Routes, Route } from "react-router";

// importing layout
import Layout from "./Layout";

// importing pages
import Home from "./pages/Home";
import TechBlogs from "./pages/TechBlogs";
import PoetryBlogs from "./pages/PoetryBlogs";
import StoryBlogs from "./pages/StoryBlogs";
import BlogPage from "./pages/BlogPage";
import Write from "./pages/Write";

// error/not found page
import NotFound from "./error/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import ProfilePostedBlogs from "./components/ProfilePostedBlogs";
import ProfileDrafts from "./components/ProfileDrafts";
import { ToastContainer } from "react-toastify";
import useThemeStore from "./store/themeStore";
import { useEffect } from "react";
import useBlogStore from "./store/blogStore";
import AdminRoutes from "./protected/AdminRoutes";

export default function App() {
  const { getAllBlogs } = useBlogStore();
  // all blogs fetched each time page reloads
  useEffect(() => {
    getAllBlogs();
  }, [getAllBlogs])


  const { isDarkModeEnabled } = useThemeStore()
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="auth" element={<Auth />} />
          <Route path="tech">
            <Route index element={<TechBlogs />} />
            <Route path=":slug" element={<BlogPage />} />
          </Route>
          <Route path="poetry">
            <Route index element={<PoetryBlogs />} />
            <Route path=":slug" element={<BlogPage />} />
          </Route>
          <Route path="story">
            <Route index element={<StoryBlogs />} />
            <Route path=":slug" element={<BlogPage />} />
          </Route>

          {/* Admin only routes */}
          <Route element={<AdminRoutes />}>
            <Route path="write" element={<Write />} />
            <Route path="edit/:slug" element={<Write />} />
          </Route>

          <Route element={<ProtectedRoute />}>
            <Route path="profile" element={<Profile />}>
              {/* Subroutes for profile page with admin access */}
              <Route element={<AdminRoutes />}>
                <Route path="blogs" element={<ProfilePostedBlogs />} />
                <Route path="drafts" element={<ProfileDrafts />} />
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={isDarkModeEnabled ? "dark" : "light"}
      />
    </BrowserRouter>
  )
}
