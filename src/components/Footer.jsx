import { CONFIG } from "../config";

/**
 * Footer component - displays copyright and build info
 * Appears at the bottom of every page
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 text-sm text-gray-600">
        © {year} {CONFIG.name}. Built with React + Tailwind. Deployed on Render.
      </div>
    </footer>
  );
}

