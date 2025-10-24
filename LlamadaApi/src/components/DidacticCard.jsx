export const DidacticCard = ({ title, description, steps = [] }) => {
  return (
    <article className="bg-white rounded-xl shadow-soft-xl p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>

      {steps.length > 0 && (
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          {steps.map((s, i) => (
            <li key={i} className="pl-1">
              <span className="font-medium">{s.title}</span>
              {s.detail && <div className="text-sm text-gray-600">{s.detail}</div>}
            </li>
          ))}
        </ol>
      )}
    </article>
  );
};
