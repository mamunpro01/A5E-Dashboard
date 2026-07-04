export default function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-800 bg-slate-900 px-8">
      <h1 className="text-xl font-semibold text-white">
        A5E Dashboard
      </h1>

      <div className="flex items-center gap-4">
        <button>🔔</button>
        <button>🌙</button>
        <button>👤</button>
      </div>
    </header>
  );
}
