"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Linkedin, Download, MapPin, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

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

const OTHER_PROJECTS = [
  {
    id: "biochar",
    org: "BiocharLife",
    logo: "/logos/biocharlife.png",
    title: "AI-assisted MRV for carbon verification",
    role: "Technical Program Manager",
    timeframe: "Dec 2023 – Mar 2025",
    tags: ["OpenAI/CLIP", "MRV", "Field ops"],
    problem: "Carbon credit issuance requires verified evidence across four countries — data was inconsistent, connectivity patchy, and rules kept changing, slowing reviews and delaying payouts.",
    metrics: ["10,000+ carbon credits verified", "Median review time ~10 → 3 days (~70% faster)", "Verification errors down ~15%"],
    tools: ["AWS", "Python", "Power BI", "Airtable", "OpenAI"],
  },
  {
    id: "elevar",
    org: "ElevarSalud",
    logo: "/logos/elevarsalud.png",
    title: "WhatsApp triage + clinician portal",
    role: "Co-founder · Product/Program Lead",
    timeframe: "Dec 2022 – Nov 2023",
    tags: ["WhatsApp", "Clinician portal", "Low literacy"],
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
    tags: ["Risk & Compliance", "ETL/DWH", "Tableau"],
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
    tags: ["QA", "ETL", "OLAP", "Automation"],
    problem: "Daily regression and data validation for VaR/exposure pipelines were manual and error-prone.",
    metrics: ["Reduced manual regression effort and cycle time", "Stabilized daily runs with automated checks", "Improved release confidence for risk reporting"],
    tools: ["Oracle", "OLAP", "Shell", "VBA", "HP Quality Center"],
  },
];

const LOGOS = [
  { src: "/logos/meta.svg",        alt: "Meta",        h: "h-9" },
  { src: "/logos/apple.svg",       alt: "Apple",       h: "h-9" },
  { src: "/logos/jpmorgan.png",    alt: "JPMorgan",    h: "h-9" },
  { src: "/logos/ubs.jpg",         alt: "UBS",         h: "h-9" },
  { src: "/logos/biocharlife.png", alt: "BiocharLife", h: "h-7" },
  { src: "/logos/elevarsalud.png", alt: "ElevarSalud", h: "h-7" },
];

const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

export default function OptionA() {
  return (
    <div className="min-h-screen bg-white text-slate-900">

      {/* ── HERO ── */}
      <header className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <motion.div
            initial="hidden" animate="show"
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            className="space-y-6"
          >
            <motion.div variants={fadeUp} className="space-y-2">
              <p className="text-sm font-semibold text-emerald-600 tracking-widest uppercase">
                Technical Program Manager
              </p>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
                Mona Singh
              </h1>
              <p className="text-slate-500 flex items-center gap-1.5 text-sm">
                <MapPin className="h-4 w-4" /> {CONTACT.location}
              </p>
            </motion.div>

            <motion.p variants={fadeUp} className="text-lg text-slate-600 leading-relaxed max-w-xl">
              15+ years building programs that turn ambiguous technical environments into shipped, measurable product — across AI/ML systems, data platforms, risk technology, and production reliability.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <Button asChild className="bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl">
                <a href={CONTACT.resume} target="_blank" rel="noreferrer">
                  <Download className="mr-2 h-4 w-4" /> Resume
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-xl border-slate-300">
                <a href={CONTACT.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </a>
              </Button>
              <Button asChild variant="ghost" className="rounded-xl text-slate-500">
                <a href={`mailto:${CONTACT.email}`}>
                  <Mail className="mr-2 h-4 w-4" /> Email
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right — photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative h-64 w-64 md:h-80 md:w-80">
              <Image
                src="/profile.png"
                alt="Mona Singh"
                fill
                className="rounded-full object-cover ring-4 ring-emerald-100 shadow-lg"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Logos */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <p className="text-xs uppercase tracking-widest text-slate-400 mb-4">Experience includes</p>
          <div className="flex flex-wrap items-center gap-8">
            {LOGOS.map((l) => (
              <Image
                key={l.alt} src={l.src} alt={l.alt}
                width={120} height={40}
                className={`${l.h} w-auto grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition duration-200`}
              />
            ))}
          </div>
        </motion.div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-24 space-y-16">
        <Separator />

        {/* ── IMPACT STATS ── */}
        <section>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-8">Cross-project impact</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {HIGHLIGHTS.map((h, i) => (
              <motion.div
                key={h.tag}
                variants={fadeUp} initial="hidden"
                whileInView="show" viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="space-y-2"
              >
                <Image src={h.logo} alt={h.tag} width={64} height={22} className="h-5 w-auto object-contain opacity-70" />
                <p className="text-3xl font-bold tracking-tight">{h.value}</p>
                <p className="text-sm text-slate-500 leading-snug">{h.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <Separator />

        {/* ── FEATURED: META ── */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Featured work</p>
            <Badge className="bg-emerald-100 text-emerald-700 border-0 rounded-full text-[11px]">Current role</Badge>
          </div>

          <motion.div
            variants={fadeUp} initial="hidden"
            whileInView="show" viewport={{ once: true }}
            className="rounded-2xl border-2 border-emerald-200 bg-gradient-to-br from-emerald-50/60 to-white p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div className="space-y-2">
                <Image src="/logos/meta.svg" alt="Meta" width={88} height={30} className="h-9 w-auto" />
                <h2 className="text-2xl font-bold tracking-tight">Ads Ranking ML Productionization</h2>
                <p className="text-slate-500 text-sm">Technical Program Manager · {META_PROJECT.timeframe}</p>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {META_PROJECT.tags.map((t) => (
                    <span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Approach</p>
                <ul className="space-y-2.5">
                  {META_PROJECT.approach.map((a, i) => (
                    <li key={i} className="text-sm text-slate-600 flex gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Outcomes</p>
                <ul className="space-y-2.5">
                  {META_PROJECT.metrics.map((m, i) => (
                    <li key={i} className="text-sm text-slate-600 flex gap-2.5">
                      <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      {m}
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

        {/* ── OTHER PROJECTS ── */}
        <section>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">More projects</p>
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
                  <CardContent className="space-y-3 text-slate-600 text-sm">
                    <p className="text-slate-500">{p.problem}</p>
                    <ul className="space-y-1.5">
                      {p.metrics.map((m, j) => (
                        <li key={j} className="flex gap-2">
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
        </section>
      </main>

      <footer className="border-t border-slate-100 py-8 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Mona Singh · Built with care and clarity
      </footer>
    </div>
  );
}
