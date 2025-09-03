import React from "react";

type Phase = {
  phase: string;
  role: string;
  company: string;
  when: string;   // e.g., "2014–18"
  color?: string; // tailwind bg-* class
};

const DEFAULT_PHASES: Phase[] = [
  { phase: "Plan",    role: "BA",                company: "JPMorgan",    when: "2014–18", color: "bg-indigo-600" },
  { phase: "Design",  role: "PM / Co-founder",   company: "ElevarSalud", when: "2022–23", color: "bg-emerald-600" },
  { phase: "Build",   role: "TPM",               company: "BiocharLife", when: "2023–25", color: "bg-sky-600" },
  { phase: "Test",    role: "QA",                company: "UBS",         when: "2012–14", color: "bg-amber-600" },
  { phase: "Release", role: "Prod Support",      company: "Apple",       when: "2008–12", color: "bg-rose-600" },
  { phase: "Operate", role: "TPM",               company: "BiocharLife", when: "2023–25", color: "bg-purple-600" },
];

// marker positions around the circle
const POS = [
  "left-1/2 -translate-x-1/2 -top-3",
  "right-2 -top-4",
  "right-2 top-1/2 -translate-y-1/2",
  "right-2 -bottom-4",
  "left-1/2 -translate-x-1/2 -bottom-3",
  "left-2 top-1/2 -translate-y-1/2",
];

export default function SdlcWheel({
  phases = DEFAULT_PHASES,
  compact = true,          // compact by default
  showLegend = true,       // legend on the right by default
}: {
  phases?: Phase[];
  compact?: boolean;
  showLegend?: boolean;
}) {
  const wheelSize = compact ? "h-64 w-64 md:h-72 md:w-72" : "h-80 w-80 md:h-96 md:w-96";
  const dotSize = compact ? "h-2.5 w-2.5" : "h-3 w-3";

  return (
    <div className={`grid items-center gap-6 ${showLegend ? "md:grid-cols-2" : ""}`}>
      {/* Wheel */}
      <div className={`relative mx-auto ${wheelSize}`}>
        <div className="absolute inset-0 rounded-full border border-slate-200" aria-hidden />
        <div className="absolute inset-5 rounded-full border border-slate-100" aria-hidden />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-[10px] uppercase tracking-wide text-slate-500">SDLC</p>
            <p className="text-xs text-slate-600">roles across phases</p>
          </div>
        </div>

        {phases.map((p, i) => (
          <div key={p.phase} className={`absolute ${POS[i % POS.length]} flex items-center gap-2`}>
            <span className={`${dotSize} rounded-full ring-2 ring-white ${p.color ?? "bg-slate-400"}`} />
            <span className="text-xs font-medium text-slate-700">{p.phase}</span>
          </div>
        ))}
      </div>

      {/* Legend (compact) */}
      {showLegend && (
        <div className="grid gap-2">
          {phases.map((p) => (
            <div key={p.phase} className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white p-2">
              <span className={`h-2.5 w-2.5 rounded-full ${p.color ?? "bg-slate-400"}`} />
              <div className="text-xs leading-5">
                <span className="font-medium text-slate-900">{p.phase}</span>{" "}
                <span className="text-slate-700">• {p.role}, {p.company}</span>{" "}
                <span className="text-slate-500">• {p.when}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

