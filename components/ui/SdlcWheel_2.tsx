// components/SdlcWheel.tsx
import React from "react";

type Phase = {
  phase: string;
  role: string;
  company: string;
  when: string;
  color?: string; // tailwind color class for the dot
};

const DEFAULT_PHASES: Phase[] = [
  { phase: "Plan / Requirements", role: "Business Analyst", company: "JPMorgan", when: "2014–2018", color: "bg-indigo-600" },
  { phase: "Design",              role: "PM / Co-founder",  company: "ElevarSalud", when: "2022–2023", color: "bg-emerald-600" },
  { phase: "Build",               role: "TPM",              company: "BiocharLife", when: "2023–2025", color: "bg-sky-600" },
  { phase: "Test",                role: "QA Engineer",      company: "UBS",         when: "2012–2014", color: "bg-amber-600" },
  { phase: "Release",             role: "Production Support", company: "Apple",     when: "2008–2012", color: "bg-rose-600" },
  { phase: "Operate / Iterate",   role: "TPM",              company: "BiocharLife", when: "2023–2025", color: "bg-purple-600" },
];

const POS = [
  "left-1/2 -translate-x-1/2 -top-3",                 // top
  "right-2 -top-4",                                   // top-right
  "right-2 top-1/2 -translate-y-1/2",                 // right
  "right-2 -bottom-4",                                // bottom-right
  "left-1/2 -translate-x-1/2 -bottom-3",              // bottom
  "left-2 top-1/2 -translate-y-1/2",                  // left
];

export default function SdlcWheel({ phases = DEFAULT_PHASES }: { phases?: Phase[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      {/* Wheel */}
      <div className="relative mx-auto h-80 w-80 md:h-96 md:w-96">
        {/* outer ring */}
        <div className="absolute inset-0 rounded-full border border-slate-200" aria-hidden />
        {/* inner ring for depth */}
        <div className="absolute inset-6 rounded-full border border-slate-100" aria-hidden />
        {/* center label */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-xs uppercase tracking-wide text-slate-500">SDLC coverage</p>
            <p className="text-sm text-slate-600">roles across phases</p>
          </div>
        </div>

        {phases.map((p, i) => (
          <div
            key={p.phase}
            className={`absolute ${POS[i % POS.length]} flex items-center gap-2`}
            aria-label={`${p.phase}: ${p.role} at ${p.company} (${p.when})`}
            title={`${p.phase} · ${p.role} · ${p.company} · ${p.when}`}
          >
            <span className={`h-3 w-3 rounded-full ring-2 ring-white ${p.color ?? "bg-slate-400"}`} />
            <span className="text-xs font-medium text-slate-700">{p.phase}</span>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="grid gap-3">
        {phases.map((p) => (
          <div key={p.phase} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-3">
            <span className={`mt-1 h-2.5 w-2.5 rounded-full ${p.color ?? "bg-slate-400"}`} />
            <div className="text-sm">
              <div className="font-medium text-slate-900">{p.phase}</div>
              <div className="text-slate-700">{p.role} · {p.company}</div>
              <div className="text-slate-500">{p.when}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

