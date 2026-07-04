import { useDashboard } from "@/features/dashboard/hooks/useDashboard";

import InfoCard from "@/components/ui/InfoCard";
import SectionCard from "@/components/ui/SectionCard";

export default function DashboardPage() {
  const {
  data,
  isLoading,
  error,
  isFetching,
  dataUpdatedAt,
} = useDashboard();

  if (isLoading) {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-slate-400">Loading dashboard...</p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-red-500">Unable to load dashboard data.</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
  <div>
    <h1 className="text-2xl font-bold">Dashboard</h1>
    <p className="text-slate-400">
      Real-time network overview for A5E router system
    </p>
  </div>

  <div className="flex flex-wrap items-center gap-4 text-sm">
    <div className="flex items-center gap-2">
      <span className="h-2 w-2 rounded-full bg-green-500"></span>
      <span>Connected</span>
    </div>

    <div>
      Last Update:{" "}
      {new Date(dataUpdatedAt).toLocaleTimeString()}
    </div>

    <div>
      {isFetching ? "Updating..." : "Refresh every 5s"}
    </div>
  </div>

      {/* Top Cards */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <InfoCard title="CPU" value={`${data.cpu}%`} />

        <InfoCard title="Memory" value={`${data.memory}%`} />

        <InfoCard
          title="Docker"
          value={`${data.docker}`}
          subtitle="Containers"
        />

        <InfoCard
          title="AdGuard"
          value={data.adguard}
          subtitle="DNS Filter"
        />

        <InfoCard
          title="WAN"
          value={data.wanIp}
          subtitle="Gateway"
        />

        <InfoCard
          title="Router"
          value={data.model}
          subtitle={data.router}
        />

        <InfoCard
          title="Uptime"
          value={data.uptime}
          subtitle={data.hostname}
        />

        <InfoCard
          title="Firmware"
          value={data.firmware}
          subtitle={data.kernel}
        />
      </div>

      {/* Bottom Sections */}
      <div className="grid gap-6 lg:grid-cols-2">
        <SectionCard title="System Information">
          <div className="space-y-2 text-sm">
            <p>
              <strong>Hostname:</strong> {data.hostname}
            </p>

            <p>
              <strong>Model:</strong> {data.model}
            </p>

            <p>
              <strong>Kernel:</strong> {data.kernel}
            </p>

            <p>
              <strong>Firmware:</strong> {data.firmware}
            </p>
          </div>
        </SectionCard>

        <SectionCard title="Quick Status">
          <div className="space-y-2 text-sm">
            <p>
              <strong>Router:</strong> {data.router}
            </p>

            <p>
              <strong>Network:</strong> {data.network}
            </p>

            <p>
              <strong>AdGuard:</strong> {data.adguard}
            </p>

            <p>
              <strong>Docker:</strong> {data.docker} Containers
            </p>
          </div>
        </SectionCard>
        <SectionCard title="API Information">
  <div className="space-y-2 text-sm">
    <p>
      <strong>Backend:</strong> Connected
    </p>

    <p>
      <strong>Provider:</strong> Mock
    </p>

    <p>
      <strong>Refresh:</strong> Every 5 seconds
    </p>

    <p>
      <strong>API:</strong> {import.meta.env.VITE_API_URL}
    </p>
  </div>
</SectionCard>
      </div>
    </div>
  );
}
