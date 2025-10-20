import { Link } from "react-router-dom";
import { CONFIG } from "../config";
import { useState } from "react";

/**
 * Header component - sticky navigation bar with mobile hamburger menu
 * Displays site name and navigation links
 * Mobile menu toggles on small screens
 */
export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Services", path: "/services" },
    { label: "Projects", path: "/projects" },
    { label: "Activity", path: "/activity" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <nav className="flex items-center justify-between">
          <Link to="/" className="font-semibold text-lg tracking-tight text-gray-900 hover:text-gray-600 transition-colors">
            {CONFIG.name}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex gap-8 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 bg-gray-900 transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}></div>
            <div className={`w-6 h-0.5 bg-gray-900 transition-all ${isOpen ? "opacity-0" : ""}`}></div>
            <div className={`w-6 h-0.5 bg-gray-900 transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="sm:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

