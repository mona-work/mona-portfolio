import * as React from "react";

export default function Pill({
  children,
  accent = "emerald",
  className = "",
}: {
  children: React.ReactNode;
  accent?: "emerald" | "sky" | "violet" | "amber" | "slate" | "slateDark";
  className?: string;
}) {
  const color: Record<string, string> = {
    emerald: "bg-emerald-50 text-emerald-800 border-emerald-200",
    sky:     "bg-sky-50 text-sky-800 border-sky-200",
    violet:  "bg-violet-50 text-violet-800 border-violet-200",
    amber:   "bg-amber-50 text-amber-800 border-amber-200",
    slate:   "bg-slate-50 text-slate-800 border-slate-200",
    slateDark:"bg-slate-800 text-slate-100 border-slate-700",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[12px] ${color[accent]} ${className}`}
    >
      {children}
    </span>
  );
}

