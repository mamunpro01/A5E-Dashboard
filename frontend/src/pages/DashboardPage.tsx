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

import Card from "@/components/ui/Card";
import ActivityList from "@/components/ui/ActivityList";
import PageHeader from "@/components/ui/PageHeader";
import StatCard from "@/components/ui/StatCard";
import StatusList from "@/components/ui/StatusList";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Dashboard"
        description="System overview"
      />

      {/* First row */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="CPU"
          value="12%"
          subtitle="Live"
          icon={Cpu}
        />

        <StatCard
          title="Memory"
          value="42%"
          subtitle="Live"
          icon={MemoryStick}
        />

        <StatCard
          title="Network"
          value="Online"
          subtitle="Connected"
          icon={Network}
        />

        <StatCard
          title="Docker"
          value="5"
          subtitle="Containers"
          icon={Container}
        />
      </div>

      {/* Second row */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="WAN IP"
          value="192.168.1.1"
          subtitle="Gateway"
          icon={Globe}
        />

        <StatCard
          title="Router"
          value="HX21"
          subtitle="Online"
          icon={Router}
        />

        <StatCard
          title="AdGuard"
          value="97%"
          subtitle="Blocked"
          icon={Shield}
        />

        <StatCard
          title="Uptime"
          value="3 Days"
          subtitle="Running"
          icon={Clock3}
        />
      </div>

      {/* Bottom section */}
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
