import { Link } from "react-router-dom";
import { CONFIG } from "../config";

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <nav className="flex items-center justify-between">
          <Link to="/" className="font-semibold text-lg tracking-tight text-gray-900 hover:text-gray-600 transition-colors">
            {CONFIG.name}
          </Link>
          <div className="hidden sm:flex gap-8 text-sm">
            <Link to="/services" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Services</Link>
            <Link to="/projects" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Projects</Link>
            <Link to="/activity" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Activity</Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Contact</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

