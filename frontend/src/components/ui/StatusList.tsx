export default function StatusList() {
  const items = [
    "Backend Online",
    "API Ready",
    "SSE Connected",
    "Router Connected",
  ];

  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          <span className="text-slate-300">{item}</span>
        </li>
      ))}
    </ul>
  );
}
