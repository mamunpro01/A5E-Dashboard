import InfoCard from "@/components/ui/InfoCard";
import SectionCard from "@/components/ui/SectionCard";
import StatusBadge from "@/components/ui/StatusBadge";

import { useNetwork } from "@/features/network/hooks/useNetwork";

export default function NetworkPage() {
  const { data, isLoading, error } = useNetwork();

  if (isLoading) return <p>Loading...</p>;

  if (error || !data) return <p>Unable to load network.</p>;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">
          Network
        </h1>

        <p className="text-slate-400">
          Network status and interfaces
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <InfoCard title="WAN IP" value={data.wanIp} />

        <InfoCard title="Gateway" value={data.gateway} />

        <InfoCard
          title="DNS"
          value={data.dns.join(", ")}
        />

        <InfoCard title="RX" value={data.rx} />

        <InfoCard title="TX" value={data.tx} />

        <InfoCard
          title="Status"
          value={data.status}
        />
      </div>

      <SectionCard title="Interfaces">
        <div className="space-y-3">
          {data.interfaces.map((iface) => (
            <div
              key={iface.name}
              className="flex items-center justify-between border-b border-slate-800 pb-2"
            >
              <div>
                <p className="font-medium">
                  {iface.name}
                </p>

                <p className="text-sm text-slate-400">
                  {iface.ip}
                </p>
              </div>

              <StatusBadge
                online={iface.status === "online"}
              />
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}
