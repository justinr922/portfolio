/**
 * Utility function to conditionally join classnames
 */
const cx = (...classes) => classes.filter(Boolean).join(" ");

/**
 * Card component - reusable container with consistent styling
 * Used throughout the portfolio for content sections
 *
 * @param {React.ReactNode} children - Content to display inside the card
 * @param {string} className - Additional CSS classes to apply
 */
export function Card({ children, className }) {
  return (
    <div className={cx("rounded-lg border border-gray-200 bg-gray-50 p-6 hover:border-gray-300 transition-colors", className)}>
      {children}
    </div>
  );
}

