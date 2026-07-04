import { NavLink } from "react-router-dom";

const menus = [
  { name: "Dashboard", path: "/" },
  { name: "Network", path: "/network" },
  { name: "Devices", path: "/devices" },
  { name: "Docker", path: "/docker" },
  { name: "AdGuard", path: "/adguard" },
  { name: "Logs", path: "/logs" },
  { name: "Settings", path: "/settings" },
];

export default function Sidebar() {
  return (
    <div className="h-full bg-slate-900 p-4">
      <h2 className="mb-6 text-xl font-bold text-white">
        A5E Dashboard
      </h2>

      <nav>
        <ul className="space-y-2">
          {menus.map((menu) => (
            <li key={menu.path}>
              <NavLink
                to={menu.path}
                end={menu.path === "/"}
                className={({ isActive }) =>
                  isActive
                    ? "block rounded bg-slate-700 px-3 py-2 text-white"
                    : "block rounded px-3 py-2 text-slate-300 hover:bg-slate-800 hover:text-white"
                }
              >
                {menu.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
