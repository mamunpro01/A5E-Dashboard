import type { ReactNode } from "react";

interface CardProps {
  title?: string;
  children: ReactNode;
}

export default function Card({ title, children }: CardProps) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-800 p-6 shadow-md">
      {title && (
        <h2 className="mb-4 text-lg font-semibold text-white">
          {title}
        </h2>
      )}

      {children}
    </div>
  );
}
