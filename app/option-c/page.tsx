"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Linkedin, Download, MapPin, CheckCircle, Search, Users, ClipboardList, Hammer, ShieldCheck, Rocket, LineChart, Target, Gauge, Braces, BarChart, Handshake, Globe2, Shield, Zap, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import SdlcWheel from "@/components/ui/SdlcWheel";

const CONTACT = {
  name: "Mona Singh",
  title: "Technical Program Manager",
  location: "SF Bay Area / NYC",
  email: "mona.singh08@gmail.com",
  phone: "201-589-0640",
  linkedin: "https://www.linkedin.com/in/mona-singh-67471810",
  resume: "/resume/MonaSingh.pdf",
};

const HIGHLIGHTS = [
  { tag: "Meta",        logo: "/logos/meta.svg",        value: "300+ ML models",         label: "Managed across evaluation, debugging & launch readiness programs; MTTM improved 51%" },
  { tag: "JPMorgan",    logo: "/logos/jpmorgan.png",    value: "100+ stakeholders",      label: "Aligned risk, data, and engineering for Basel III & CCAR delivery" },
  { tag: "BiocharLife", logo: "/logos/biocharlife.png", value: "10,000+ carbon credits", label: "Verified after leading MRV rollout across 4 countries" },
  { tag: "ElevarSalud", logo: "/logos/elevarsalud.png", value: "5,000+ users",           label: "Launched WhatsApp triage + clinician portal" },
];

const META_PROJECT = {
  timeframe: "Feb 2026 – Present",
  tags: ["ML Productionization", "Ads Ranking", "O2O Debugging", "Eval Governance"],
  problem: "Ads Ranking ML models needed a reliable path from offline evaluation to online launch — but offline signals were inconsistent, offline-to-online gaps caused delayed incident detection, and cross-org ownership of eval configs was unclear.",
  approach: [
    "ML Model Launch & Production Readiness: led cross-functional programs for Ads Ranking ML systems, partnering with engineering, product, data science, and platform teams to move ranking models from offline evaluation to reliable online launch across evaluation reliability, debugging, launch readiness, and issue mitigation.",
    "Customer Discovery & Roadmap Prioritization: led weekly engagement with internal Ads product-group customers — Instagram, Business Messaging, and model platform teams — to understand evaluation/debugging pain points, track H1 asks, refresh goals, and shape H2 roadmap priorities.",
    "XFN Partnership & Roadmap Influence: translated customer pain points into prioritization docs, OKRs, and roadmap narratives that helped the team secure the highest vote count across competing investment areas.",
    "Program Management & Operating Rhythm: created operating structure across ML evaluation and debugging workstreams — milestone tracking, OKR alignment, WBR updates, dashboards, customer success metrics, risk/blocker management, roadmap refreshes, tradeoff discussions, and leadership reporting.",
    "ML Launch Decision Quality: drove execution against an increased Good Decision Rate target from 70% to 75.5%, connecting offline go/no-go recommendations to post-launch ads quality and incremental revenue outcomes.",
    "Offline Evaluation Platform Reliability: aligned engineering owners, tracked half-to-date reliability improvement from 80% to 86%, and created failure-category metrics to separate platform, user-side, capacity, and downstream system failures.",
    "ML Debugging & Issue Mitigation: automated offline-to-online issue tracking by scanning incident tickets, identifying relevant model debugging issues, updating mitigation trackers, and calculating MTTM; partnered with engineering on white-glove support, improving MTTM from 22 days to 10.8 days.",
    "Governance & AI Tooling: drove cross-org accountability for evaluation configuration and metric definition quality; built automation to reduce reporting burden on technical leads; published an internal AI tooling guide featured in the AI4P x TPM digest.",
  ],
  metrics: [
    "MTTM improved from 22 days → 10.8 days through automated O2O issue tracking and white-glove support",
    "Offline eval platform reliability improved from 80% → 86% half-to-date",
    "Good Decision Rate target raised from 70% → 75.5%",
    "100+ models onboarded to Unified Eval; 50+ to O2O debugging",
    "2,400 evaluation jobs tracked across 292 models in Q1",
    "Secured team's highest vote count across competing H2 investment areas",
  ],
  tools: ["XFN Partnerships", "Risk & Blocker Management", "Roadmap Execution", "Tradeoff Facilitation", "OKR Planning", "WBR & Leadership Reporting", "Unidash", "Claude", "Manus", "Nestapp", "MyClaw"],
  disclaimer: "Role impacted by Meta org-wide layoffs; currently in notice period. Metrics are rounded or directional; no proprietary data included.",
};

const LOGOS = [
  { src: "/logos/meta.svg",        alt: "Meta",        h: "h-9" },
  { src: "/logos/apple.svg",       alt: "Apple",       h: "h-9" },
  { src: "/logos/jpmorgan.png",    alt: "JPMorgan",    h: "h-9" },
  { src: "/logos/ubs.jpg",         alt: "UBS",         h: "h-9" },
  { src: "/logos/biocharlife.png", alt: "BiocharLife", h: "h-7" },
  { src: "/logos/elevarsalud.png", alt: "ElevarSalud", h: "h-7" },
];


function ImgCard({ src, caption }: { src: string; caption: string }) {
  return (
    <figure className="relative rounded-lg border bg-white p-2">
      <span className="absolute right-2 top-2 z-10 rounded bg-black/60 px-1.5 py-0.5 text-[10px] font-medium text-white pointer-events-none">
        SAMPLE
      </span>
      <div className="relative w-full max-h-48 overflow-y-auto rounded">
        <Image
          src={src}
          alt={`${caption} — sample / illustrative`}
          width={1600} height={1000}
          className="w-full h-auto block"
          priority={false}
        />
      </div>
      <figcaption className="mt-1 text-[11px] text-slate-500">
        {caption} (illustrative; data redacted/synthetic)
      </figcaption>
    </figure>
  );
}

const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

export default function OptionC() {
  return (
    <div className="min-h-screen bg-white text-slate-900">

      {/* ── HERO ── */}
      <header className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden" animate="show"
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            className="space-y-6"
          >
            <motion.div variants={fadeUp} className="space-y-2">
              <p className="text-sm font-semibold text-emerald-600 tracking-widest uppercase">Technical Program Manager</p>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">Mona Singh</h1>
              <p className="text-slate-500 flex items-center gap-1.5 text-sm">
                <MapPin className="h-4 w-4" /> {CONTACT.location}
              </p>
            </motion.div>
            <motion.p variants={fadeUp} className="text-lg text-slate-600 leading-relaxed max-w-xl">
              15+ years building programs that turn ambiguous technical environments into shipped, measurable product — across AI/ML systems, data platforms, risk technology, and production reliability.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <Button asChild className="bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl">
                <a href={CONTACT.resume} target="_blank" rel="noreferrer"><Download className="mr-2 h-4 w-4" /> Resume</a>
              </Button>
              <Button asChild variant="outline" className="rounded-xl border-slate-300">
                <a href={CONTACT.linkedin} target="_blank" rel="noreferrer"><Linkedin className="mr-2 h-4 w-4" /> LinkedIn</a>
              </Button>
              <Button asChild variant="ghost" className="rounded-xl text-slate-500">
                <a href={`mailto:${CONTACT.email}`}><Mail className="mr-2 h-4 w-4" /> Email</a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative h-64 w-64 md:h-80 md:w-80">
              <Image src="/profile.png" alt="Mona Singh" fill
                className="rounded-full object-cover ring-4 ring-emerald-100 shadow-lg" priority />
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-12">
          <p className="text-xs uppercase tracking-widest text-slate-400 mb-4">Experience includes</p>
          <div className="flex flex-wrap items-center gap-8">
            {LOGOS.map((l) => (
              <Image key={l.alt} src={l.src} alt={l.alt} width={120} height={40}
                className={`${l.h} w-auto grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition duration-200`} />
            ))}
          </div>
        </motion.div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-24 space-y-16">
        <Separator />

        {/* ── CROSS-PROJECT IMPACT ── */}
        <section>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-8">Cross-project impact</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {HIGHLIGHTS.map((h, i) => (
              <motion.div key={h.tag} variants={fadeUp} initial="hidden" whileInView="show"
                viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="space-y-2">
                <Image src={h.logo} alt={h.tag} width={64} height={22} className="h-5 w-auto object-contain opacity-70" />
                <p className="text-3xl font-bold tracking-tight">{h.value}</p>
                <p className="text-sm text-slate-500 leading-snug">{h.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <Separator />

        {/* ── SDLC WHEEL ── */}
        <section className="space-y-4">
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">Roles across the SDLC</p>
            <p className="text-sm text-slate-500">Hands-on across the full lifecycle: BA → QA → PM/TPM → Prod Ops</p>
          </div>
          <SdlcWheel />
        </section>

        <Separator />

        {/* ── FEATURED: META ── */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Featured work</p>
            <Badge className="bg-emerald-100 text-emerald-700 border-0 rounded-full text-[11px]">Current role</Badge>
          </div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="rounded-2xl border-2 border-emerald-200 bg-gradient-to-br from-emerald-50/60 to-white p-8">
            <div className="space-y-2 mb-6">
              <Image src="/logos/meta.svg" alt="Meta" width={88} height={30} className="h-9 w-auto" />
              <h2 className="text-2xl font-bold tracking-tight">Ads Ranking ML Productionization</h2>
              <p className="text-slate-500 text-sm">Technical Program Manager · {META_PROJECT.timeframe}</p>
              <div className="flex flex-wrap gap-1.5">
                {META_PROJECT.tags.map((t) => (
                  <span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">{t}</span>
                ))}
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Approach</p>
                <ul className="space-y-2.5">
                  {META_PROJECT.approach.map((a, i) => (
                    <li key={i} className="text-sm text-slate-600 flex gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />{a}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Outcomes</p>
                <ul className="space-y-2.5">
                  {META_PROJECT.metrics.map((m, i) => (
                    <li key={i} className="text-sm text-slate-600 flex gap-2.5">
                      <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />{m}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {META_PROJECT.tools.map((t) => (
                    <Badge key={t} variant="outline" className="rounded-full text-[11px]">{t}</Badge>
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-6 text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
              {META_PROJECT.disclaimer}
            </p>
          </motion.div>
        </section>

        <Separator />

        {/* ── MORE PROJECTS (full detail) ── */}
        <section className="space-y-6">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">More projects</p>

          {/* BiocharLife */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <Card className="rounded-2xl shadow-sm hover:shadow-md transition">
              <CardHeader>
                <Image src="/logos/biocharlife.png" alt="BiocharLife" width={80} height={26} className="h-7 w-auto object-contain mb-2" />
                <CardTitle>AI-assisted MRV for carbon verification</CardTitle>
                <p className="text-sm text-slate-500">BiocharLife · Technical Program Manager</p>
                <p className="text-xs text-slate-400">Dec 2023 – Mar 2025</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {["OpenAI/CLIP", "MRV", "Field ops", "Carbon sequestration"].map(t => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">{t}</span>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-slate-700">
                <div>
                  <p className="font-medium text-slate-800 mb-1">Problem</p>
                  <p className="text-slate-500">Carbon credit issuance requires verified evidence (trench, feedstock, GPS/date, photos). Across four countries the data was inconsistent, connectivity was patchy, and rules kept changing — slowing reviews and delaying payouts.</p>
                </div>
                <div>
                  <p className="font-medium text-slate-800 mb-1">Approach</p>
                  <ul className="space-y-1.5">
                    {[
                      "Set success criteria and KPIs: first-cycle approval and 3-day median time to decision; added end-to-end metrics from submission to auditor package.",
                      "Field capture operations: issued SOPs and checklists; built app with prompts and quality nudges; ensured consent and reliable upload/retry.",
                      "Validation and routing: standardized the data model; added automated quality gates (location, time sanity, image clarity); auto-pass vs. review queues.",
                      "Reviewer workflow: provided a review console with reason codes, standard outcomes, and override policy with rationale for traceability.",
                      "Governance and change control: maintained a thresholds registry and decision log; used simulate → pilot (one region) → full release with rollback.",
                    ].map((a, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />{a}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-slate-800 mb-1">Outcomes</p>
                  <ul className="space-y-1">
                    {["10,000+ carbon credits verified", "Median review time ~10 → 3 days (~70% faster)", "Verification errors down ~15%"].map((m, i) => (
                      <li key={i} className="flex gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />{m}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* How it works explainer */}
                <div className="rounded-lg bg-slate-50 p-3">
                  <p className="text-xs font-medium text-slate-800 mb-1">How it works <span className="text-slate-500">(From evidence to issuance)</span></p>
                  <ul className="list-disc pl-5 text-xs text-slate-600 space-y-0.5">
                    <li>Capture: field team submits photos, GPS/date, and trench/feedstock details via an offline-friendly app.</li>
                    <li>Auto validation: normalize the record and run quality gates; auto-pass clean items, route others to review.</li>
                    <li>Review: verifiers decide with reason codes and required notes for any overrides.</li>
                    <li>Auditor package: assemble a signed report with the full decision trail and deliver to the registry.</li>
                  </ul>
                </div>

                {/* Images */}
                <div>
                  <p className="text-[11px] text-slate-500 mb-2">Swipe to see more →</p>
                  <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 [&::-webkit-scrollbar]:hidden">
                    {[
                      { src: "/biocharlife/fieldcapture.png",    caption: "Field app capture" },
                      { src: "/biocharlife/reviewer_console.png", caption: "Reviewer console" },
                      { src: "/biocharlife/dashboard.png",        caption: "Dashboard" },
                      { src: "/biocharlife/flow.png",             caption: "System flow: capture → validate → review → auditor" },
                    ].map((img, i) => (
                      <div key={i} className="snap-start min-w-[260px] md:min-w-[320px]">
                        <ImgCard src={img.src} caption={img.caption} />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-2 rounded-md border border-amber-200 bg-amber-50 p-2 text-xs text-amber-900">
                  <span className="font-medium">Note:</span>
                  <span>Sample/mock visuals for illustration. No proprietary or personal data; identifiers are redacted or synthetic.</span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {["AWS", "Python", "Power BI", "Airtable", "OpenAI (LLM assists)"].map(t => (
                    <Badge key={t} variant="outline" className="rounded-full text-[11px]">{t}</Badge>
                  ))}
                </div>

                <details className="rounded bg-slate-50 p-2 text-xs text-slate-700">
                  <summary className="cursor-pointer font-medium text-slate-800">Acronyms explained</summary>
                  <ul className="mt-1 space-y-1">
                    <li><span className="font-semibold">MRV:</span> Measurement, Reporting, and Verification — the evidence process required before carbon credits are issued.</li>
                    <li><span className="font-semibold">Carbon credit:</span> A tradable certificate representing one metric ton of CO₂-equivalent avoided or removed.</li>
                    <li><span className="font-semibold">Biochar:</span> Charcoal made from biomass that stores carbon in soil for long periods.</li>
                    <li><span className="font-semibold">Issuance:</span> The registry creates credits after the project&apos;s evidence is verified and approved.</li>
                  </ul>
                </details>
              </CardContent>
            </Card>
          </motion.div>

          {/* ElevarSalud */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <Card className="rounded-2xl shadow-sm hover:shadow-md transition">
              <CardHeader>
                <Image src="/logos/elevarsalud.png" alt="ElevarSalud" width={80} height={26} className="h-7 w-auto object-contain mb-2" />
                <CardTitle>WhatsApp triage + clinician portal</CardTitle>
                <p className="text-sm text-slate-500">ElevarSalud · Co-founder · Product/Program Lead</p>
                <p className="text-xs text-slate-400">Dec 2022 – Nov 2023</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {["WhatsApp", "Clinician portal", "Low literacy"].map(t => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">{t}</span>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-slate-700">
                <div>
                  <p className="font-medium text-slate-800 mb-1">Problem</p>
                  <p className="text-slate-500">Telemedicine options were fragmented; many clinics lacked EMR/EHR; expats needed English-speaking clinicians; follow-ups were untracked.</p>
                </div>
                <div>
                  <p className="font-medium text-slate-800 mb-1">Approach</p>
                  <ul className="space-y-1.5">
                    {[
                      "Prioritized triage, reminders, and follow-ups; shipped WhatsApp flows with bilingual copy.",
                      "Built clinician portal for bot→human handoff, templates, tagged reasons; set response-time SLAs.",
                      "Instrumented funnels and drop-offs; weekly releases to tune copy and paths.",
                    ].map((a, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />{a}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-slate-800 mb-1">Outcomes</p>
                  <ul className="space-y-1">
                    {["5,000+ users served", "+20% adoption after iterations", "Delivery cycles ~25% faster", "90%+ service uptime"].map((m, i) => (
                      <li key={i} className="flex gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />{m}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-lg bg-slate-50 p-3">
                  <p className="text-xs font-medium text-slate-800 mb-1">What this does <span className="text-slate-500">(Triage in WhatsApp with seamless clinician handoff)</span></p>
                  <ul className="list-disc pl-5 text-xs text-slate-600 space-y-0.5">
                    <li>Users start in WhatsApp for symptom triage, reminders, and navigation in simple language.</li>
                    <li>When needed, the chat hands off to a clinician in a web portal; the clinician sees context and templates.</li>
                    <li>Encounters and consent are logged to create an audit-ready record of care and follow-ups.</li>
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <ImgCard src="/elevar/whatsapp_flow.png" caption="WhatsApp triage" />
                  <ImgCard src="/elevar/portal_mock.png" caption="Clinician portal handoff view" />
                </div>

                <div className="flex items-start gap-2 rounded-md border border-amber-200 bg-amber-50 p-2 text-xs text-amber-900">
                  <span className="font-medium">Note:</span>
                  <span>Sample/mock visuals for illustration. No proprietary, patient, or personal data; identifiers are redacted or synthetic.</span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {["Twilio", "PostgreSQL", "React", "OpenAI (FAQ assists)"].map(t => (
                    <Badge key={t} variant="outline" className="rounded-full text-[11px]">{t}</Badge>
                  ))}
                </div>

                <details className="rounded bg-slate-50 p-2 text-xs text-slate-700">
                  <summary className="cursor-pointer font-medium text-slate-800">Acronyms explained</summary>
                  <ul className="mt-1 space-y-1">
                    <li><span className="font-semibold">EMR / EHR:</span> Electronic medical/health record. Many clinics lacked one — WhatsApp + portal created a minimal audit-ready trail.</li>
                    <li><span className="font-semibold">Bot → Human handoff:</span> A conversation escalates from automation to a clinician with full context and templates.</li>
                    <li><span className="font-semibold">SLA:</span> Service-level agreement. Target response times for triage and clinician follow-ups.</li>
                  </ul>
                </details>
              </CardContent>
            </Card>
          </motion.div>

          {/* JPMorgan + UBS side by side */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                id: "jpm", org: "JPMorgan", logo: "/logos/jpmorgan.png",
                title: "Regulatory risk data systems", role: "Business Analyst", timeframe: "Jun 2014 – May 2018",
                tags: ["Risk & Compliance", "ETL/DWH", "Tableau"],
                problem: "Regulatory reporting required consistent data lineage, reconciled feeds, and clear metrics across multiple business units.",
                approach: [
                  "Authored FRDs and lineage maps; partnered with ETL teams on transformations to the central DWH.",
                  "Built Tableau dashboards for exposure, capital, and stress-testing; aligned stakeholders on definitions.",
                  "Automated PL/SQL reconciliations to reduce manual effort and improve audit traceability.",
                ],
                metrics: ["Basel III and CCAR reporting delivered across 3 business units", "Reduced manual reconciliation effort", "Improved auditability via documented lineage"],
                tools: ["Oracle / PL/SQL", "ETL/DWH", "Tableau", "Jira", "Confluence"],
                glossary: [
                  { term: "Basel III", text: "Global banking rules for capital and liquidity; requires consistent, traceable risk data." },
                  { term: "CCAR", text: "U.S. Federal Reserve stress test; demands standardized metrics and clear lineage." },
                ],
              },
              {
                id: "ubs", org: "UBS", logo: "/logos/ubs.jpg",
                title: "Market-risk QA automation", role: "QA Engineer", timeframe: "Feb 2012 – Jun 2014",
                tags: ["QA", "ETL", "OLAP", "Automation"],
                problem: "Daily regression and data validation for VaR/exposure pipelines were manual and error-prone.",
                approach: [
                  "Led QA for market-risk pipelines and OLAP reporting; validated source→target mappings.",
                  "Automated repeatable checks with Shell/VBA; standardized cases and defect triage.",
                  "Partnered with data engineering to stabilize feeds and reduce late-cycle risk.",
                ],
                metrics: ["Reduced manual regression effort and cycle time", "Stabilized daily runs with automated checks", "Improved release confidence for risk reporting"],
                tools: ["Oracle", "OLAP", "Shell", "VBA", "HP Quality Center"],
                glossary: [{ term: "VaR", text: "Value-at-Risk; a statistic estimating potential portfolio loss over a period." }],
              },
            ].map((p, i) => (
              <motion.div key={p.id} variants={fadeUp} initial="hidden" whileInView="show"
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Card className="rounded-2xl shadow-sm h-full hover:shadow-md transition">
                  <CardHeader>
                    <Image src={p.logo} alt={p.org} width={72} height={24} className="h-6 w-auto object-contain mb-2" />
                    <CardTitle className="text-lg">{p.title}</CardTitle>
                    <p className="text-sm text-slate-500">{p.org} · {p.role}</p>
                    <p className="text-xs text-slate-400">{p.timeframe}</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {p.tags.map(t => <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">{t}</span>)}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-slate-700">
                    <p className="text-slate-500">{p.problem}</p>
                    <div>
                      <p className="font-medium text-slate-800 mb-1">Approach</p>
                      <ul className="space-y-1">
                        {p.approach.map((a, j) => (
                          <li key={j} className="flex gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />{a}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-slate-800 mb-1">Outcomes</p>
                      <ul className="space-y-1">
                        {p.metrics.map((m, j) => (
                          <li key={j} className="flex gap-2">
                            <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />{m}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tools.map(t => <Badge key={t} variant="outline" className="rounded-full text-[11px]">{t}</Badge>)}
                    </div>
                    <details className="rounded bg-slate-50 p-2 text-xs text-slate-700">
                      <summary className="cursor-pointer font-medium text-slate-800">Acronyms explained</summary>
                      <ul className="mt-1 space-y-1">
                        {p.glossary.map((g, j) => (
                          <li key={j}><span className="font-semibold">{g.term}:</span> {g.text}</li>
                        ))}
                      </ul>
                    </details>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <Separator />

        {/* ── SKILLS ── */}
        <section className="space-y-6">
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">Skills & certifications</p>
            <p className="text-sm text-slate-500">Certified PMP® · CSPO® — spanning program delivery, data, and technical depth</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">

            {/* Pillar 1 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 ring-1 ring-emerald-200">
                  <ClipboardList className="h-4 w-4 text-emerald-700" />
                </span>
                <p className="font-semibold text-slate-900">Program & Delivery</p>
              </div>
              <p className="text-xs text-slate-500">Core TPM competencies across planning, execution, and stakeholder management</p>
              <div className="flex flex-wrap gap-2">
                {["OKR Planning", "Roadmap Execution", "Risk & Blocker Mgmt", "WBR & Reporting", "XFN Partnerships", "Tradeoff Facilitation", "Milestone Tracking", "Agile / Scrum"].map(s => (
                  <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 font-medium border border-emerald-100">{s}</span>
                ))}
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-50 ring-1 ring-sky-200">
                  <BarChart className="h-4 w-4 text-sky-700" />
                </span>
                <p className="font-semibold text-slate-900">Data & Analytics</p>
              </div>
              <p className="text-xs text-slate-500">Hands-on data work across pipelines, reporting, and business intelligence</p>
              <div className="flex flex-wrap gap-2">
                {["ETL / DWH", "Python", "SQL / PL/SQL", "Tableau", "Power BI", "OLAP cubes", "Airtable", "PostgreSQL", "Oracle"].map(s => (
                  <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-sky-50 text-sky-800 font-medium border border-sky-100">{s}</span>
                ))}
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-violet-50 ring-1 ring-violet-200">
                  <Zap className="h-4 w-4 text-violet-700" />
                </span>
                <p className="font-semibold text-slate-900">Tools & Platforms</p>
              </div>
              <p className="text-xs text-slate-500">Tooling used across cloud infra, product development, and delivery</p>
              <div className="flex flex-wrap gap-2">
                {["AWS (EC2, S3, Lambda)", "React", "Figma", "Jira", "Confluence", "Notion", "Asana", "ServiceNow", "Shell / VBA"].map(s => (
                  <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-violet-50 text-violet-800 font-medium border border-violet-100">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Separator />

        {/* ── HOW I WORK ── */}
        <section className="space-y-6">
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">How I work</p>
            <p className="text-sm text-slate-500">Four things I bring to every program, regardless of domain</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                icon: Search,
                title: "Discover & align first",
                body: "I start by understanding the real problem — not the stated one. I map stakeholders, surface conflicting priorities, set shared KPIs, and get explicit alignment before a single milestone is written.",
                traits: ["Structured thinking", "Stakeholder trust"],
              },
              {
                icon: ClipboardList,
                title: "Build structure in ambiguity",
                body: "I create operating cadence from scratch: OKRs, WBRs, milestone tracking, risk logs, roadmap refreshes, and tradeoff forums. Teams know what's being decided, by whom, and when.",
                traits: ["Prioritization under pressure", "Calm leadership"],
              },
              {
                icon: Hammer,
                title: "Drive delivery, unblock fast",
                body: "I stay close to the work — tracking blockers daily, escalating with context, facilitating tradeoff discussions, and keeping engineering and product moving without micromanaging.",
                traits: ["Technical fluency", "Builder mindset"],
              },
              {
                icon: LineChart,
                title: "Connect delivery to impact",
                body: "I instrument what matters — customer success metrics, reliability, adoption, revenue signals — and use data to close the loop between what shipped and whether it moved the needle.",
                traits: ["Analytical rigor", "Cross-functional partnership"],
              },
            ].map((pillar, i) => (
              <motion.div key={pillar.title} variants={fadeUp} initial="hidden"
                whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <div className="rounded-2xl border border-slate-200 bg-white p-6 h-full space-y-3 hover:shadow-md transition">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 ring-1 ring-emerald-200 shrink-0">
                      <pillar.icon className="h-4.5 w-4.5 text-emerald-700 h-5 w-5" />
                    </span>
                    <h3 className="font-semibold text-slate-900">{pillar.title}</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{pillar.body}</p>
                  <div className="flex gap-2 pt-1">
                    {pillar.traits.map(t => (
                      <span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <Separator />

        {/* ── CONTACT ── */}
        <section>
          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6 flex flex-col md:flex-row items-start md:items-center gap-6">
              <Image src="/profile.png" alt="Mona Singh" width={72} height={72}
                className="h-16 w-16 rounded-full object-cover ring-2 ring-emerald-100 shadow-sm shrink-0" />
              <div className="flex-1 space-y-1">
                <p className="font-semibold text-slate-900 text-lg">{CONTACT.name}</p>
                <p className="text-sm text-slate-500">{CONTACT.title} · {CONTACT.location}</p>
                <p className="text-xs text-slate-400 max-w-lg pt-1">
                  Creating structure in ambiguous technical environments — aligning engineering, product, and platform teams to connect delivery to business impact.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <Button asChild size="sm" className="bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl">
                  <a href={`mailto:${CONTACT.email}`}><Mail className="mr-2 h-4 w-4" />Email</a>
                </Button>
                <Button asChild size="sm" variant="outline" className="rounded-xl border-slate-300">
                  <a href={CONTACT.linkedin} target="_blank" rel="noreferrer"><Linkedin className="mr-2 h-4 w-4" />LinkedIn</a>
                </Button>
                <Button asChild size="sm" variant="outline" className="rounded-xl border-slate-300">
                  <a href={CONTACT.resume} target="_blank" rel="noreferrer"><Download className="mr-2 h-4 w-4" />Resume</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="border-t border-slate-100 py-8 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Mona Singh · Built with care and clarity
      </footer>
    </div>
  );
}
