/**
 * Tag component - displays small badge labels
 * Used for project technologies and skill tags
 *
 * @param {React.ReactNode} children - Tag label text
 */
export function Tag({ children }) {
  return (
    <span className="text-xs px-3 py-1 rounded-full border border-gray-300 bg-gray-100 text-gray-700 font-medium">
      {children}
    </span>
  );
}

