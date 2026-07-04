export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-slate-400">
          Real-time network overview for A5E router system
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {["CPU", "RAM", "WAN", "Clients", "AdGuard", "Docker"].map(
          (item) => (
            <div
              key={item}
              className="p-4 rounded-xl bg-slate-900 border border-slate-800"
            >
              <h3 className="text-slate-400 text-sm">{item}</h3>
              <p className="text-2xl font-bold mt-2">--</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}
