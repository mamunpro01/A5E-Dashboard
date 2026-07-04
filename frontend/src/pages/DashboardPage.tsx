import Card from "@/components/ui/Card";
import ActivityList from "@/components/ui/ActivityList";
import PageHeader from "@/components/ui/PageHeader";
import StatCard from "@/components/ui/StatCard";
import StatusList from "@/components/ui/StatusList";

import { Cpu, MemoryStick, Container, Globe, Router, Shield, Network, Clock3 } from "lucide-react";

import { useDashboard } from "@/features/dashboard/hooks/useDashboard";

export default function DashboardPage() {
  const { data, isLoading, error } = useDashboard();

  if (isLoading) {
    return (
      <div className="p-8 text-slate-300">
        Loading dashboard...
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="p-8 text-red-500">
        Failed to load dashboard.
      </div>
    );
  }

  const stats = [
    {
      title: "CPU",
      value: `${data.cpu}%`,
      subtitle: "Live",
      icon: Cpu,
    },
    {
      title: "Memory",
      value: `${data.memory}%`,
      subtitle: "Live",
      icon: MemoryStick,
    },
    {
      title: "Network",
      value: data.network,
      subtitle: "Status",
      icon: Network,
    },
    {
      title: "Docker",
      value: String(data.docker),
      subtitle: "Containers",
      icon: Container,
    },
    {
      title: "WAN IP",
      value: data.wanIp,
      subtitle: "Gateway",
      icon: Globe,
    },
    {
      title: "Router",
      value: data.router,
      subtitle: "Connection",
      icon: Router,
    },
    {
      title: "AdGuard",
      value: data.adguard,
      subtitle: "DNS",
      icon: Shield,
    },
    {
      title: "Uptime",
      value: data.uptime,
      subtitle: "Running",
      icon: Clock3,
    },
  ];

  return (
    <div className="space-y-8">
      <PageHeader
        title="Dashboard"
        description="Live system overview"
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            subtitle={stat.subtitle}
            icon={stat.icon}
          />
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card title="System Status">
          <StatusList />
        </Card>

        <Card title="Recent Activity">
          <ActivityList />
        </Card>
      </div>
    </div>
  );
}
