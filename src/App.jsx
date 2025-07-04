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

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="tech" element={<TechBlogs />} />
          <Route path="poetry" element={<PoetryBlogs />} />
          <Route path="stories" element={<StoryBlogs />} />
          <Route path=":category(tech|poetry|stories)/:slug" element={<BlogPage />} />
          <Route path="write" element={
            <ProtectedRoute>
              <Write />
            </ProtectedRoute>
          } />
          <Route path="profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
