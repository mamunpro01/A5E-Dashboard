import {
  Cpu,
  MemoryStick,
  Network,
  Container,
} from "lucide-react";

import PageHeader from "@/components/ui/PageHeader";
import StatCard from "@/components/ui/StatCard";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Dashboard"
        description="System overview"
      />

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
    </div>
  );
}
