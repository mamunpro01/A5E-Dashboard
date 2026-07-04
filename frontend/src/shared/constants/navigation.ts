import {
  LayoutDashboard,
  Network,
  Router,
  ShieldCheck,
  Container,
  Activity,
  FileText,
  Settings,
} from "lucide-react";

import type { NavigationItem } from "../types/navigation";

export const navigation: NavigationItem[] = [
  {
    name: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Network",
    path: "/network",
    icon: Network,
  },
  {
    name: "Devices",
    path: "/devices",
    icon: Router,
  },
  {
    name: "AdGuard",
    path: "/adguard",
    icon: ShieldCheck,
  },
  {
    name: "Docker",
    path: "/docker",
    icon: Container,
  },
  {
    name: "Speed Test",
    path: "/speedtest",
    icon: Activity,
  },
  {
    name: "Logs",
    path: "/logs",
    icon: FileText,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
];
