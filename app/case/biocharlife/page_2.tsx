// src/app/case/biocharlife/page.tsx
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function BiocharLifeCase() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">
        AI-assisted MRV for Smallholder Carbon Projects (BiocharLife)
      </h1>
      <p className="text-sm text-muted-foreground mt-1">
        Technical Program Manager • Dec 2023 – May 2025 • 4 countries • 100+ contributors
      </p>

      <div className="flex flex-wrap gap-2 mt-3">
        <Badge variant="secondary">MRV</Badge>
        <Badge variant="secondary">AI-assisted checks</Badge>
        <Badge variant="secondary">Offline capture</Badge>
        <Badge variant="secondary">Audit readiness</Badge>
      </div>

      <Separator className="my-6" />

      <Card className="rounded-2xl shadow-sm">
        <CardHeader><CardTitle>Problem</CardTitle></CardHeader>
        <CardContent className="text-slate-700">
           Carbon credits are issued only when removals are measured, reported, and verified. In smallholder biochar, tCO₂e relies on consistent capture of trench dimensions, feedstock mass and moisture, method, GPS, and date. Across four countries our data was uneven, standards kept changing, connectivity was weak, and auditors required reproducible evidence with a clear decision trail. Without this, issuance is delayed and payouts stall.
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6 my-6">
        <Card className="rounded-2xl shadow-sm">
          <CardHeader><CardTitle>Goals</CardTitle></CardHeader>
          <CardContent className="text-slate-700">
            <ul className="list-disc pl-5 space-y-1">
              <li>Auditor acceptance on first full cycle</li>
              <li>Usability for capture agents (local field operators)</li>
              <li>Median review time target: <span className="font-medium">3 days</span></li>
            </ul>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm">
          <CardHeader><CardTitle>My ownership</CardTitle></CardHeader>
          <CardContent className="text-slate-700">
            Program orchestration, MRV flow design, validation rules, reviewer console specs,
            KPI dashboards, and auditor package format.
          </CardContent>
        </Card>
      </div>

      <Card className="rounded-2xl shadow-sm overflow-hidden">
        <CardHeader><CardTitle>System at a glance</CardTitle></CardHeader>
        <CardContent>
          <Image
            src="/biocharlife/flow.png"
            alt="Field App → Ingest/Validation → Reviewer Console → Auditor Package"
            width={1400} height={700} className="rounded-xl border"
          />
          <p className="text-xs text-muted-foreground mt-2">Sample/illustrative diagram.</p>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6 my-6">
        <Card className="rounded-2xl shadow-sm overflow-hidden">
          <CardHeader><CardTitle>Reviewer Console (mock)</CardTitle></CardHeader>
          <CardContent>
            <Image
              src="/biocharlife/reviewer_console.png"
              alt="Reviewer console mock"
              width={1400} height={900} className="rounded-xl border"
            />
            <p className="text-xs text-muted-foreground mt-2">Sample UI with flags, checklist, and audit trail.</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm overflow-hidden">
          <CardHeader><CardTitle>Field capture (sample)</CardTitle></CardHeader>
          <CardContent>
            <Image
              src="/biocharlife/sample_trench_blurred.png"
              alt="Sample field photo (blurred)"
              width={1400} height={900} className="rounded-xl border"
            />
            <p className="text-xs text-muted-foreground mt-2">Illustrative only — not real project data.</p>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-6" />

      <h2 className="text-xl font-semibold tracking-tight">Approach</h2>
      <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-2">
        <li>Defined success metrics; maintained a weekly decision log.</li>
        <li>Structured a data schema + human checklists; immutable event trail.</li>
        <li>Offline-friendly capture with image quality gates and GPS prompts.</li>
        <li>Model-assisted checks (duplicate detection, boundary hints) with human-in-the-loop.</li>
        <li>Weekly metric reviews; iterated with verifiers and auditors.</li>
      </ul>

      <div className="grid md:grid-cols-3 gap-6 my-6">
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-4">
            <p className="text-3xl font-semibold">10,000+</p>
            <p className="text-sm text-muted-foreground mt-1">verified credits</p>
          </CardContent>
        </Card>
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-4">
            <p className="text-3xl font-semibold">~10d → 3d</p>
            <p className="text-sm text-muted-foreground mt-1">median review time</p>
          </CardContent>
        </Card>
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-4">
            <p className="text-3xl font-semibold">~15%</p>
            <p className="text-sm text-muted-foreground mt-1">fewer verification errors</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="rounded-2xl shadow-sm overflow-hidden">
          <CardHeader><CardTitle>Median Review Time</CardTitle></CardHeader>
          <CardContent>
            <Image src="/biocharlife/chart_review_time.png" alt="Review time chart"
              width={1200} height={800} className="rounded-xl border" />
          </CardContent>
        </Card>
        <Card className="rounded-2xl shadow-sm overflow-hidden">
          <CardHeader><CardTitle>Verification Error Rate</CardTitle></CardHeader>
          <CardContent>
            <Image src="/biocharlife/chart_error_rate.png" alt="Error rate chart"
              width={1200} height={800} className="rounded-xl border" />
          </CardContent>
        </Card>
        <Card className="rounded-2xl shadow-sm overflow-hidden">
          <CardHeader><CardTitle>Cumulative Verified Credits</CardTitle></CardHeader>
          <CardContent>
            <Image src="/biocharlife/chart_credits_cumulative.png" alt="Credits cumulative chart"
              width={1200} height={800} className="rounded-xl border" />
          </CardContent>
        </Card>
      </div>

      <Separator className="my-6" />

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="rounded-2xl shadow-sm">
          <CardHeader><CardTitle>Guardrails</CardTitle></CardHeader>
          <CardContent className="text-slate-700">
            Privacy redactions, consent capture, transparent thresholds and model versions;
            checksums & manifest in export; immutable decision history.
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm">
          <CardHeader><CardTitle>What I’d do next</CardTitle></CardHeader>
          <CardContent className="text-slate-700">
            On-device pre-checks, broader anomaly detection, and a lightweight MRV playbook for
            faster verifier onboarding.
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-wrap gap-3 mt-8">
        <Button variant="secondary" asChild>
          <a href="#" aria-disabled>1-pager (coming soon)</a>
        </Button>
        <Button variant="secondary" asChild>
          <a href="#" aria-disabled>Demo deck (coming soon)</a>
        </Button>
      </div>
    </div>
  );
}

