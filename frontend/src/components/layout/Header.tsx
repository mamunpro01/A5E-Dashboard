import { Bell, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="h-14 flex items-center justify-between px-4 border-b border-slate-800 bg-slate-950">
      <div className="flex items-center gap-2 text-slate-300">
        <Search size={18} />
        <input
          placeholder="Search devices, metrics..."
          className="bg-transparent outline-none text-sm"
        />
      </div>

      <div className="flex items-center gap-4 text-slate-300">
        <Bell size={18} />
        <div className="w-8 h-8 rounded-full bg-slate-700" />
      </div>
    </header>
  );
}
