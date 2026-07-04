import Card from "@/components/ui/Card";
import ActivityList from "@/components/ui/ActivityList";
import PageHeader from "@/components/ui/PageHeader";
import StatCard from "@/components/ui/StatCard";
import StatusList from "@/components/ui/StatusList";

import { dashboardStats } from "@/services/dashboardService";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Dashboard"
        description="System overview"
      />

      {/* Dashboard Stats */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            subtitle={stat.subtitle}
            icon={stat.icon}
          />
        ))}
      </div>

      {/* Bottom Panels */}
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
