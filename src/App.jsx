// importing routing components
import { BrowserRouter, Routes, Route } from "react-router";

// importing layout
import Layout from "./Layout";

// importing pages
import Home from "./pages/Home";
import NotFound from "./error/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
