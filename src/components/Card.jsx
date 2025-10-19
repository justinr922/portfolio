const cx = (...classes) => classes.filter(Boolean).join(" ");

export function Card({ children, className }) {
  return (
    <div className={cx("rounded-lg border border-gray-200 bg-gray-50 p-6 hover:border-gray-300 transition-colors", className)}>
      {children}
    </div>
  );
}

