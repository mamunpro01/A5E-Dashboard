import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon: LucideIcon;
}

export default function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
}: StatCardProps) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-800 p-6 shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-medium text-slate-300">{title}</h3>
        <Icon className="h-5 w-5 text-slate-400" />
      </div>

      <div className="text-3xl font-bold text-white">
        {value}
      </div>

      {subtitle && (
        <p className="mt-2 text-sm text-slate-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}
