/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./Home";
import CategoryPage from "./pages/CategoryPage";
import PostPage from "./pages/PostPage";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans selection:bg-indigo-100 selection:text-indigo-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Dynamic category routes */}
            <Route path="/:categoryId" element={<CategoryPage />} />
            
            {/* Post routes - we handle both styles seen in structure */}
            <Route path="/posts-ai/:postPath" element={<PostPage />} />
            <Route path="/articles/:postPath" element={<PostPage />} />
            
            {/* Legal pages (placeholder) */}
            <Route path="/about" element={<PostPage />} />
            <Route path="/contact" element={<PostPage />} />
            <Route path="/privacy" element={<PostPage />} />
            <Route path="/terms" element={<PostPage />} />
            
            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
