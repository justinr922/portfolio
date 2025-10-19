import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Projects } from "./pages/Projects";
import { Activity } from "./pages/Activity";
import { Contact } from "./pages/Contact";

// ======= Quick Start =======
// 1) Replace the CONFIG values in src/config.js
// 2) Deploy as a static site (Vite/React) or drop into a Next.js page
// 3) On Render, create a Static Site from your GitHub repo and set the build cmd
//    e.g. "npm ci && npm run build" and publish dir "dist" (for Vite)

export default function PortfolioApp() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />

        {/* Minimal Tailwind Injection for preview */}
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
          :root { color-scheme: light; }
          * { box-sizing: border-box; }
          body { font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, "Noto Sans", sans-serif; }
        `}</style>
      </div>
    </Router>
  );
}
