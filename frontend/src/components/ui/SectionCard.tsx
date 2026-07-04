import type { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

export default function SectionCard({
  title,
  children,
}: Props) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900">
      <div className="border-b border-slate-800 px-5 py-3">
        <h2 className="font-semibold">
          {title}
        </h2>
      </div>

      <div className="p-5">
        {children}
      </div>
    </div>
  );
}
