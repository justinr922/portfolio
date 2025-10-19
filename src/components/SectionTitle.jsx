export function SectionTitle({ kicker, title, right }) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        {kicker && (
          <div className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-2">
            {kicker}
          </div>
        )}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">{title}</h2>
      </div>
      {right}
    </div>
  );
}

