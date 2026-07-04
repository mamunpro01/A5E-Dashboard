type Props = {
  title: string;
  value: string;
  subtitle?: string;
};

export default function InfoCard({
  title,
  value,
  subtitle,
}: Props) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
      <p className="text-sm text-slate-400">
        {title}
      </p>

      <h2 className="mt-2 text-2xl font-bold">
        {value}
      </h2>

      {subtitle && (
        <p className="mt-2 text-sm text-slate-500">
          {subtitle}
        </p>
      )}
    </div>
  );
}
