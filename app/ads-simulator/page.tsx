import type { Metadata } from "next";
import AdPacingSimulator from "@/components/ads/AdPacingSimulator";

export const metadata: Metadata = {
  title: "CTV Ad Pod & Pacing Simulator | Mona Singh",
  description:
    "Interactive simulator for ad pod fill, pacing, frequency caps, and revenue tradeoffs.",
};

export default function Page() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
        CTV Ad Pod & Pacing Simulator
      </h1>
      <p className="mt-2 text-slate-600 max-w-2xl">
        Explore how pod structure, frequency caps, eligibility, and budgets influence delivery,
        fill rate, and revenue—while balancing viewer experience.
      </p>
      <div className="mt-6">
        <AdPacingSimulator />
      </div>
    </main>
  );
}

