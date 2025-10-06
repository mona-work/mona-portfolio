"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { BarChart as BarChartIcon } from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid,
} from "recharts";

type Campaign = {
  name: string;
  budgetUSD: number;
  cpmUSD: number;
  priority: "High" | "Medium" | "Low";
  targetingShare: number; // 0..1 of viewers eligible
  color?: string;
};

const DEFAULT_CAMPAIGNS: Campaign[] = [
  { name: "Brand A (High)", budgetUSD: 120000, cpmUSD: 24, priority: "High",   targetingShare: 0.65 },
  { name: "Brand B (Med)",  budgetUSD:  80000, cpmUSD: 22, priority: "Medium", targetingShare: 0.55 },
  { name: "Brand C (Low)",  budgetUSD:  40000, cpmUSD: 18, priority: "Low",    targetingShare: 0.40 },
];

function priWeight(p: Campaign["priority"]) {
  return p === "High" ? 3 : p === "Medium" ? 2 : 1;
}

export default function AdPacingSimulator() {
  // Supply / UX assumptions (adjust to taste)
  const [viewers, setViewers] = useState(50000);
  const [hoursPerViewer, setHoursPerViewer] = useState(1.8);
  const [breaksPerHour, setBreaksPerHour] = useState(4);
  const [breakLengthSec, setBreakLengthSec] = useState(120); // seconds per break
  const [adLengthSec, setAdLengthSec] = useState(30);        // average ad length
  const [frequencyCap, setFrequencyCap] = useState(4);       // per viewer, per day (sim window)

  const [campaigns, setCampaigns] = useState<Campaign[]>(DEFAULT_CAMPAIGNS);

  // Derived: total available slots (simple pod model)
  const slotsPerBreak = Math.max(1, Math.floor(breakLengthSec / adLengthSec));
  const slotsPerViewerPerHour = slotsPerBreak * breaksPerHour;
  const totalSlots = Math.floor(viewers * hoursPerViewer * slotsPerViewerPerHour);

  type CalcRow = {
    name: string;
    reqImpressions: number;
    maxByFreq: number;
    deliverableBeforeCompetition: number;
    delivered: number;
    cpm: number;
    budget: number;
    priority: Campaign["priority"];
    targetingShare: number;
  };

  const results = useMemo(() => {
    // Requirements & caps
    const rows: CalcRow[] = campaigns.map((c) => {
      const reqImpressions = Math.floor((c.budgetUSD / c.cpmUSD) * 1000);
      const eligibleViewers = Math.floor(viewers * c.targetingShare);
      const maxByFreq = Math.max(0, eligibleViewers * frequencyCap);
      const deliverableBeforeCompetition = Math.min(reqImpressions, maxByFreq);
      return {
        name: c.name,
        reqImpressions,
        maxByFreq,
        deliverableBeforeCompetition,
        delivered: 0, // filled later
        cpm: c.cpmUSD,
        budget: c.budgetUSD,
        priority: c.priority,
        targetingShare: c.targetingShare,
      };
    });

    // If total demand <= supply, we’re good.
    const totalDemandCap = rows.reduce((s, r) => s + r.deliverableBeforeCompetition, 0);
    if (totalDemandCap <= totalSlots) {
      rows.forEach((r) => (r.delivered = r.deliverableBeforeCompetition));
      return rows;
    }

    // Otherwise proportionally allocate by (priority * demandCap).
    const weightedDemand = rows.reduce(
      (s, r) => s + priWeight(r.priority) * r.deliverableBeforeCompetition,
      0
    );
    let remaining = totalSlots;

    // First pass proportional
    const provisional = rows.map((r) => {
      const weight = priWeight(r.priority) * r.deliverableBeforeCompetition;
      const alloc = Math.floor((weight / weightedDemand) * totalSlots);
      const clamped = Math.min(alloc, r.deliverableBeforeCompetition);
      remaining -= clamped;
      return { ...r, delivered: clamped };
    });

    // If rounding left slots, trickle to highest priority rows with headroom
    if (remaining > 0) {
      const sorted = provisional
        .slice()
        .sort((a, b) => priWeight(b.priority) - priWeight(a.priority));
      for (let i = 0; i < sorted.length && remaining > 0; i++) {
        const row = sorted[i];
        const headroom = row.deliverableBeforeCompetition - row.delivered;
        if (headroom > 0) {
          const add = Math.min(headroom, remaining);
          row.delivered += add;
          remaining -= add;
        }
      }
    }

    return provisional;
  }, [campaigns, viewers, hoursPerViewer, breaksPerHour, breakLengthSec, adLengthSec, frequencyCap, totalSlots]);

  const totals = useMemo(() => {
    const delivered = results.reduce((s, r) => s + r.delivered, 0);
    const required = results.reduce((s, r) => s + r.reqImpressions, 0);
    const revenue = results.reduce((s, r) => s + (r.delivered / 1000) * r.cpm, 0);

    // Simple QoE proxy: penalize heavy ad minutes/hour + repetition risk
    const adMinutesPerHour = (slotsPerViewerPerHour * adLengthSec) / 60; // e.g., 4 breaks * 4 slots * 30s = 8 min/hour
    const densityPenalty = Math.max(0, (adMinutesPerHour - 8) * 2); // >8 min/hr starts to hurt
    // repetition proxy: avg exposures per eligible viewer across campaigns (very rough)
    const repPenalty = results.reduce((s, r) => {
      const eligible = Math.max(1, Math.floor(viewers * r.targetingShare));
      const avgPerEligible = r.delivered / eligible;
      return s + Math.max(0, avgPerEligible - 2) * 2; // >2 per eligible viewer starts to feel repetitive
    }, 0);

    let qoe = Math.max(50, Math.min(100, 95 - densityPenalty - repPenalty));
    const fillRate = totalSlots > 0 ? delivered / totalSlots : 0;
    const avgFrequencyGlobal = viewers > 0 ? delivered / viewers : 0;

    return { delivered, required, revenue, fillRate, qoe, adMinutesPerHour, avgFrequencyGlobal };
  }, [results, slotsPerViewerPerHour, adLengthSec, viewers, totalSlots]);

  // Chart data
  const chartData = results.map((r) => ({
    name: r.name,
    Required: r.reqImpressions,
    Delivered: r.delivered,
  }));

  // UI helpers
  const updateCampaign = (idx: number, patch: Partial<Campaign>) => {
    setCampaigns((prev) => prev.map((c, i) => (i === idx ? { ...c, ...patch } : c)));
  };

  return (
    <div className="grid gap-6">
      {/* Controls */}
      <section className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <h2 className="text-base font-semibold">Supply & Experience</h2>
          <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
            <label className="flex flex-col">
              <span className="text-slate-600">Viewers</span>
              <input type="number" value={viewers} onChange={(e)=>setViewers(Number(e.target.value))}
                className="mt-1 rounded border px-2 py-1" min={1000} step={1000}/>
            </label>
            <label className="flex flex-col">
              <span className="text-slate-600">Hours / Viewer</span>
              <input type="number" value={hoursPerViewer} onChange={(e)=>setHoursPerViewer(Number(e.target.value))}
                className="mt-1 rounded border px-2 py-1" min={0.25} step={0.1}/>
            </label>
            <label className="flex flex-col">
              <span className="text-slate-600">Breaks / Hour</span>
              <input type="number" value={breaksPerHour} onChange={(e)=>setBreaksPerHour(Number(e.target.value))}
                className="mt-1 rounded border px-2 py-1" min={1} step={1}/>
            </label>
            <label className="flex flex-col">
              <span className="text-slate-600">Break Length (s)</span>
              <input type="number" value={breakLengthSec} onChange={(e)=>setBreakLengthSec(Number(e.target.value))}
                className="mt-1 rounded border px-2 py-1" min={15} step={15}/>
            </label>
            <label className="flex flex-col">
              <span className="text-slate-600">Avg Ad Length (s)</span>
              <input type="number" value={adLengthSec} onChange={(e)=>setAdLengthSec(Number(e.target.value))}
                className="mt-1 rounded border px-2 py-1" min={5} step={5}/>
            </label>
            <label className="flex flex-col">
              <span className="text-slate-600">Frequency Cap</span>
              <input type="number" value={frequencyCap} onChange={(e)=>setFrequencyCap(Number(e.target.value))}
                className="mt-1 rounded border px-2 py-1" min={1} step={1}/>
            </label>
          </div>

          <div className="mt-3 text-xs text-slate-600">
            Slots per hour: <span className="font-medium">{slotsPerViewerPerHour}</span> •
            Total slots (sim window): <span className="font-medium">{totalSlots.toLocaleString()}</span> •
            Ad minutes / hr: <span className="font-medium">{totals.adMinutesPerHour.toFixed(1)}</span>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <h2 className="text-base font-semibold">Outcomes</h2>
          <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-lg bg-emerald-50 ring-1 ring-emerald-200/70 p-3">
              <div className="text-slate-700">Fill Rate</div>
              <div className="text-2xl font-semibold">{(totals.fillRate*100).toFixed(1)}%</div>
            </div>
            <div className="rounded-lg bg-emerald-50 ring-1 ring-emerald-200/70 p-3">
              <div className="text-slate-700">Revenue (est.)</div>
              <div className="text-2xl font-semibold">${totals.revenue.toLocaleString(undefined,{maximumFractionDigits:0})}</div>
            </div>
            <div className="rounded-lg bg-sky-50 ring-1 ring-sky-200/70 p-3">
              <div className="text-slate-700">Avg Frequency (global)</div>
              <div className="text-2xl font-semibold">{totals.avgFrequencyGlobal.toFixed(2)}x</div>
            </div>
            <div className="rounded-lg bg-amber-50 ring-1 ring-amber-200/70 p-3">
              <div className="text-slate-700">Viewer QoE (proxy)</div>
              <div className="text-2xl font-semibold">{totals.qoe.toFixed(0)}/100</div>
            </div>
          </div>
          <div className="mt-3 text-xs text-slate-600">
            QoE is a heuristic: penalizes heavy ad-minutes/hour and repetitive exposures.
          </div>
        </div>
      </section>

      {/* Campaign table */}
      <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <h2 className="text-base font-semibold">Campaigns</h2>
        <div className="mt-3 overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-slate-600">
                <th className="p-2">Name</th>
                <th className="p-2">Budget ($)</th>
                <th className="p-2">CPM ($)</th>
                <th className="p-2">Priority</th>
                <th className="p-2">% Eligible</th>
                <th className="p-2">Req Impr.</th>
                <th className="p-2">Max by Cap</th>
                <th className="p-2">Delivered</th>
              </tr>
            </thead>
            <tbody>
              {results.map((r, i) => {
                const c = campaigns[i];
                return (
                  <tr key={r.name} className="border-t">
                    <td className="p-2">
                      <input
                        value={c.name}
                        onChange={(e)=>updateCampaign(i,{name:e.target.value})}
                        className="rounded border px-2 py-1 w-56"
                      />
                    </td>
                    <td className="p-2">
                      <input type="number" value={c.budgetUSD}
                        onChange={(e)=>updateCampaign(i,{budgetUSD:Number(e.target.value)})}
                        className="rounded border px-2 py-1 w-28" step={1000}/>
                    </td>
                    <td className="p-2">
                      <input type="number" value={c.cpmUSD}
                        onChange={(e)=>updateCampaign(i,{cpmUSD:Number(e.target.value)})}
                        className="rounded border px-2 py-1 w-24" step={1}/>
                    </td>
                    <td className="p-2">
                      <select
                        value={c.priority}
                        onChange={(e)=>updateCampaign(i,{priority: e.target.value as Campaign["priority"]})}
                        className="rounded border px-2 py-1"
                      >
                        <option>High</option><option>Medium</option><option>Low</option>
                      </select>
                    </td>
                    <td className="p-2">
                      <input type="number"
                        value={Math.round(c.targetingShare*100)}
                        onChange={(e)=>updateCampaign(i,{targetingShare: Math.max(0, Math.min(1, Number(e.target.value)/100))})}
                        className="rounded border px-2 py-1 w-20"
                      />%
                    </td>
                    <td className="p-2 tabular-nums">{r.reqImpressions.toLocaleString()}</td>
                    <td className="p-2 tabular-nums">{r.maxByFreq.toLocaleString()}</td>
                    <td className="p-2 tabular-nums font-medium">{r.delivered.toLocaleString()}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Quick add/remove controls */}
        <div className="mt-3 flex gap-2">
          <button
            onClick={() =>
              setCampaigns((p) => [
                ...p,
                { name: `New Campaign ${p.length+1}`, budgetUSD: 50000, cpmUSD: 20, priority: "Medium", targetingShare: 0.5 },
              ])
            }
            className="rounded bg-emerald-700 text-white px-3 py-1.5 text-sm"
          >
            + Add campaign
          </button>
          {campaigns.length > 1 && (
            <button
              onClick={() => setCampaigns((p) => p.slice(0, -1))}
              className="rounded border px-3 py-1.5 text-sm"
            >
              − Remove last
            </button>
          )}
        </div>
      </section>

      {/* Chart */}
      <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex items-center gap-2">
          <BarChartIcon className="h-5 w-5 text-emerald-700" />
          <h2 className="text-base font-semibold">Required vs Delivered (by campaign)</h2>
        </div>
        <div className="mt-3 h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" hide />
              <YAxis />
              <Tooltip formatter={(v: number) => v.toLocaleString()} />
              <Legend />
              <Bar dataKey="Required" />
              <Bar dataKey="Delivered" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Narrative */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-sm text-slate-600"
      >
        <p>
          This toy model simplifies many realities of CTV ad serving: targeting, eligibility, pod ordering,
          competitive separation, creative rotation, pacing strategies, and QoE instrumentation. It’s
          meant to demonstrate product/TPM thinking—how constraints (frequency caps, pod size, CPMs,
          budget, eligibility) trade off fill, revenue, and viewer satisfaction.
        </p>
      </motion.div>
    </div>
  );
}

