import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Projects } from "./pages/Projects";
import { Activity } from "./pages/Activity";
import { Contact } from "./pages/Contact";

/**
 * Main portfolio application component
 * Sets up routing for all pages and wraps the app with header/footer
 */
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
