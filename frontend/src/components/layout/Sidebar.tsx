import { NavLink } from "react-router-dom";
import { navigation } from "@/shared/constants/navigation";
import { cn } from "@/shared/utils/cn";

export default function Sidebar() {
  return (
    <aside className="h-screen w-64 bg-slate-900 border-r border-slate-800 hidden md:flex flex-col">
      <div className="p-4 text-xl font-bold text-white">
        A5E Dashboard
      </div>

      <nav className="flex-1 px-2 space-y-1">
        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition",
                  isActive
                    ? "bg-slate-800 text-white"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                )
              }
            >
              <Icon size={18} />
              {item.name}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}
