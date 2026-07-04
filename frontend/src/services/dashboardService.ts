import {
  Clock3,
  Container,
  Cpu,
  Globe,
  MemoryStick,
  Network,
  Router,
  Shield,
} from "lucide-react";

export const dashboardStats = [
  {
    title: "CPU",
    value: "12%",
    subtitle: "Live",
    icon: Cpu,
  },
  {
    title: "Memory",
    value: "42%",
    subtitle: "Live",
    icon: MemoryStick,
  },
  {
    title: "Network",
    value: "Online",
    subtitle: "Connected",
    icon: Network,
  },
  {
    title: "Docker",
    value: "5",
    subtitle: "Containers",
    icon: Container,
  },
  {
    title: "WAN IP",
    value: "192.168.1.1",
    subtitle: "Gateway",
    icon: Globe,
  },
  {
    title: "Router",
    value: "HX21",
    subtitle: "Online",
    icon: Router,
  },
  {
    title: "AdGuard",
    value: "97%",
    subtitle: "Blocked",
    icon: Shield,
  },
  {
    title: "Uptime",
    value: "3 Days",
    subtitle: "Running",
    icon: Clock3,
  },
];
