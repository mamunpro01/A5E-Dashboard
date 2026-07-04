export default function ActivityList() {
  const logs = [
    "Docker service started",
    "Router connected",
    "AdGuard synchronized",
    "Dashboard initialized",
  ];

  return (
    <ul className="space-y-3">
      {logs.map((log, index) => (
        <li
          key={index}
          className="rounded-lg border border-slate-700 p-3 text-slate-300"
        >
          {log}
        </li>
      ))}
    </ul>
  );
}
