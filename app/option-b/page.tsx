"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Linkedin, Download, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const CONTACT = {
  name: "Mona Singh",
  location: "SF Bay Area / NYC",
  email: "mona.singh08@gmail.com",
  linkedin: "https://www.linkedin.com/in/mona-singh-67471810",
  resume: "/resume/MonaSingh.pdf",
};

const STATS = [
  { value: "300+",    label: "ML models across eval, debugging & launch readiness; MTTM ↓51%", org: "Meta" },
  { value: "10,000+", label: "carbon credits verified",   org: "BiocharLife" },
  { value: "5,000+",  label: "users served",              org: "ElevarSalud" },
  { value: "100+",    label: "stakeholders aligned",      org: "JPMorgan" },
];

const META_PROJECT = {
  timeframe: "Feb 2026 – Present",
  tags: ["ML Productionization", "Ads Ranking", "O2O Debugging", "Eval Governance"],
  problem: "Ads Ranking ML models needed a reliable path from offline evaluation to online launch — but offline signals were inconsistent, offline-to-online gaps caused delayed incident detection, and cross-org ownership of eval configs was unclear.",
  approach: [
    "ML Model Launch & Production Readiness: led cross-functional programs for Ads Ranking ML systems, partnering with engineering, product, data science, and platform teams to move ranking models from offline evaluation to reliable online launch.",
    "Customer Discovery & Roadmap Prioritization: led weekly engagement with internal Ads product-group customers — Instagram, Business Messaging, and model platform teams — to understand pain points and shape H2 roadmap priorities.",
    "XFN Partnership & Roadmap Influence: translated customer pain points into prioritization docs, OKRs, and roadmap narratives that helped the team secure the highest vote count across competing investment areas.",
    "Program Management & Operating Rhythm: created operating structure across ML evaluation and debugging workstreams — milestone tracking, OKR alignment, WBR updates, dashboards, risk/blocker management, and leadership reporting.",
    "ML Launch Decision Quality: drove execution against an increased Good Decision Rate target from 70% to 75.5%, connecting offline go/no-go recommendations to post-launch ads quality and revenue.",
    "Offline Evaluation Platform Reliability: tracked half-to-date reliability improvement from 80% to 86% and created failure-category metrics to separate platform, user-side, capacity, and downstream failures.",
    "ML Debugging & Issue Mitigation: automated offline-to-online issue tracking by scanning incident tickets; partnered with engineering on white-glove support, improving MTTM from 22 days to 10.8 days.",
    "Governance & AI Tooling: drove cross-org accountability for eval config quality; built automation to reduce reporting burden; published internal AI tooling guide featured in the AI4P x TPM digest.",
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

const OTHER_PROJECTS = [
  {
    id: "biochar",
    org: "BiocharLife",
    logo: "/logos/biocharlife.png",
    title: "AI-assisted MRV for carbon verification",
    role: "Technical Program Manager",
    timeframe: "Dec 2023 – Mar 2025",
    tags: ["OpenAI/CLIP", "MRV", "Field ops"],
    problem: "Carbon credit issuance requires verified evidence across four countries — data was inconsistent, connectivity patchy, and rules kept changing.",
    metrics: ["10,000+ carbon credits verified", "Review time 10 → 3 days (~70% faster)", "Verification errors down ~15%"],
    tools: ["AWS", "Python", "Power BI", "Airtable", "OpenAI"],
  },
  {
    id: "elevar",
    org: "ElevarSalud",
    logo: "/logos/elevarsalud.png",
    title: "WhatsApp triage + clinician portal",
    role: "Co-founder · Product/Program Lead",
    timeframe: "Dec 2022 – Nov 2023",
    tags: ["WhatsApp", "Clinician portal"],
    problem: "Telemedicine options were fragmented; many clinics lacked EMR/EHR; expats needed English-speaking clinicians; follow-ups were untracked.",
    metrics: ["5,000+ users served", "+20% adoption after iterations", "90%+ service uptime"],
    tools: ["Twilio", "PostgreSQL", "React", "OpenAI"],
  },
  {
    id: "jpm",
    org: "JPMorgan",
    logo: "/logos/jpmorgan.png",
    title: "Regulatory risk data systems",
    role: "Business Analyst",
    timeframe: "Jun 2014 – May 2018",
    tags: ["Risk & Compliance", "ETL/DWH"],
    problem: "Regulatory reporting required consistent data lineage, reconciled feeds, and clear metrics across multiple business units.",
    metrics: ["Basel III and CCAR reporting across 3 business units", "Reduced manual reconciliation effort", "Improved auditability via documented lineage"],
    tools: ["Oracle / PL/SQL", "ETL/DWH", "Tableau", "Jira"],
  },
  {
    id: "ubs",
    org: "UBS",
    logo: "/logos/ubs.jpg",
    title: "Market-risk QA automation",
    role: "QA Engineer",
    timeframe: "Feb 2012 – Jun 2014",
    tags: ["QA", "ETL", "OLAP"],
    problem: "Daily regression and data validation for VaR/exposure pipelines were manual and error-prone.",
    metrics: ["Reduced manual regression effort and cycle time", "Stabilized daily runs with automated checks", "Improved release confidence"],
    tools: ["Oracle", "OLAP", "Shell", "VBA"],
  },
];

const LOGOS = [
  { src: "/logos/meta.svg",        alt: "Meta",        h: "h-8" },
  { src: "/logos/apple.svg",       alt: "Apple",       h: "h-8" },
  { src: "/logos/jpmorgan.png",    alt: "JPMorgan",    h: "h-8" },
  { src: "/logos/ubs.jpg",         alt: "UBS",         h: "h-8" },
  { src: "/logos/biocharlife.png", alt: "BiocharLife", h: "h-6" },
  { src: "/logos/elevarsalud.png", alt: "ElevarSalud", h: "h-6" },
];

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function OptionB() {
  return (
    <div className="min-h-screen bg-white text-slate-900">

      {/* ── DARK HERO ── */}
      <header className="bg-slate-950 text-white">
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <motion.div
              initial="hidden" animate="show"
              variants={{ show: { transition: { staggerChildren: 0.1 } } }}
              className="space-y-7"
            >
              <motion.div variants={fadeUp} className="space-y-3">
                <p className="text-emerald-400 text-xs font-semibold tracking-widest uppercase">
                  Technical Program Manager
                </p>
                <h1 className="text-6xl md:text-7xl font-black tracking-tight leading-none">
                  Mona<br />Singh
                </h1>
                <p className="text-slate-400 text-sm">
                  AI/ML · Data Platforms · Risk Tech · Production Reliability
                </p>
              </motion.div>

              <motion.p variants={fadeUp} className="text-slate-300 text-lg leading-relaxed max-w-lg">
                15+ years turning ambiguous technical environments into shipped, measurable product.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                <Button asChild className="bg-emerald-500 hover:bg-emerald-400 text-white rounded-xl font-semibold">
                  <a href={CONTACT.resume} target="_blank" rel="noreferrer">
                    <Download className="mr-2 h-4 w-4" /> Resume
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-xl border-slate-600 text-slate-200 hover:bg-slate-800">
                  <a href={CONTACT.linkedin} target="_blank" rel="noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                  </a>
                </Button>
                <Button asChild variant="ghost" className="rounded-xl text-slate-400 hover:text-white hover:bg-slate-800">
                  <a href={`mailto:${CONTACT.email}`}>
                    <Mail className="mr-2 h-4 w-4" /> Email
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right — photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex justify-center md:justify-end"
            >
              <div className="relative h-72 w-72 md:h-80 md:w-80">
                <Image
                  src="/profile.png"
                  alt="Mona Singh"
                  fill
                  className="rounded-full object-cover ring-4 ring-emerald-500/40 shadow-2xl"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── BIG STATS BAR ── */}
        <div className="border-t border-slate-800">
          <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((s, i) => (
              <motion.div
                key={s.org}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.08 }}
              >
                <p className="text-4xl font-black text-emerald-400">{s.value}</p>
                <p className="text-slate-300 text-sm mt-1">{s.label}</p>
                <p className="text-slate-600 text-xs mt-0.5">{s.org}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── LOGOS (dark) ── */}
        <div className="border-t border-slate-800">
          <div className="max-w-6xl mx-auto px-6 py-6">
            <p className="text-xs uppercase tracking-widest text-slate-600 mb-4">Experience includes</p>
            <div className="flex flex-wrap items-center gap-8">
              {LOGOS.map((l) => (
                <Image
                  key={l.alt} src={l.src} alt={l.alt}
                  width={100} height={32}
                  className={`${l.h} w-auto brightness-0 invert opacity-35 hover:opacity-80 transition duration-200`}
                />
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* ── META SPOTLIGHT ── */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeUp} initial="hidden"
            whileInView="show" viewport={{ once: true }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Image src="/logos/meta.svg" alt="Meta" width={88} height={30} className="h-9 w-auto brightness-0 invert" />
              <Badge className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full text-xs">
                Current Role · {META_PROJECT.timeframe}
              </Badge>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
              Ads Ranking ML Productionization
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-2xl">
              {META_PROJECT.problem}
            </p>

            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <p className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-4">Approach</p>
                <ul className="space-y-3">
                  {META_PROJECT.approach.map((a, i) => (
                    <li key={i} className="text-slate-300 text-sm flex gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-4">Outcomes</p>
                <ul className="space-y-3">
                  {META_PROJECT.metrics.map((m, i) => (
                    <li key={i} className="text-slate-300 text-sm flex gap-3">
                      <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      {m}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-5">
                  {META_PROJECT.tools.map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-slate-700 text-slate-300">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            <p className="mt-8 text-xs text-slate-500">{META_PROJECT.disclaimer}</p>
          </motion.div>
        </div>
      </section>

      {/* ── OTHER PROJECTS ── */}
      <main className="max-w-6xl mx-auto px-6 py-20 space-y-10">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">More projects</p>
        <div className="grid md:grid-cols-2 gap-6">
          {OTHER_PROJECTS.map((p, i) => (
            <motion.div
              key={p.id}
              variants={fadeUp} initial="hidden"
              whileInView="show" viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Card className="rounded-2xl shadow-sm h-full hover:shadow-md transition">
                <CardHeader className="pb-2">
                  {p.logo && (
                    <Image src={p.logo} alt={p.org} width={72} height={24} className="h-6 w-auto object-contain mb-2" />
                  )}
                  <CardTitle className="text-lg">{p.title}</CardTitle>
                  <p className="text-sm text-slate-500">{p.org} · {p.role}</p>
                  {p.timeframe && <p className="text-xs text-slate-400">{p.timeframe}</p>}
                  <div className="flex flex-wrap gap-1 mt-1">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">{t}</span>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p className="text-slate-500">{p.problem}</p>
                  <ul className="space-y-1.5">
                    {p.metrics.map((m, j) => (
                      <li key={j} className="text-slate-600 flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                        {m}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {p.tools.map((t) => (
                      <Badge key={t} variant="outline" className="rounded-full text-[11px]">{t}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </main>

      <footer className="border-t border-slate-100 py-8 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Mona Singh · Built with care and clarity
      </footer>
    </div>
  );
}
