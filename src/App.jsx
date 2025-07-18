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

export default function App() {
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
          <Route path="stories">
            <Route index element={<StoryBlogs />} />
            <Route path=":slug" element={<BlogPage />} />
          </Route>

          <Route element={<ProtectedRoute />}>
            <Route path="write" element={<Write />} />
            <Route path="profile" element={<Profile />}>
              {/* Subroutes for profile page */}
              <Route path="blogs" element={<ProfilePostedBlogs />} />
              <Route path="drafts" element={<ProfileDrafts />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
