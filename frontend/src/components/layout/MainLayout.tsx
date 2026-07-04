import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen bg-slate-900 text-white">
      <aside className="w-64 border-r border-slate-800">
        <Sidebar />
      </aside>

      <div className="flex flex-1 flex-col">
        <Header />

        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
