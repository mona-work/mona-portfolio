// app/page.tsx
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, ExternalLink, Download, CheckCircle, Sparkles } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import CompanyLogos from "@/components/ui/CompanyLogos";
import SdlcWheel from "@/components/ui/SdlcWheel";
import Pill from "@/components/ui/Pill";
import { Check } from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import { Search, Users, Target, ClipboardList, Hammer, ShieldCheck, Rocket, LineChart } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Image from "next/image";
import {
  Gauge,    // prioritization under pressure
  Braces,   // technical fluency
  BarChart, // analytical rigor
  Handshake,// stakeholder trust
  Globe2,   // cross-cultural
  Shield,   // calm/steady leadership
  Zap       // builder/automation
} from "lucide-react";

// Mona Singh - Product Portfolio
// Note: Replace link placeholders with your actual resume, LinkedIn, and case study assets.

const Brand = ({ children }: { children: React.ReactNode }) => (
  <span className="text-emerald-700 dark:text-emerald-400 font-medium">
    {children}
  </span>
);

const CERTS = ["PMP®", "CSPO®"];

const SKILLS = {
  cloudInfra: [
    "AWS (EC2, S3, Lambda)",
    "Unix/Linux",
    "Infrastructure automation",
    "CI/CD concepts"
  ],
  dataAnalytics: [
    "ETL/DWH",
    "Python data pipelines",
    "Tableau",
    "Power BI",
    "Airtable",
    "OLAP cubes",
  ],
  databases: ["PostgreSQL", "Oracle"],
  languages: ["Python", "SQL", "PL/SQL", "Shell", "VBA/Macros"],
  frontend: ["React", "Figma", "Balsamiq"],
  delivery: ["Jira", "Confluence", "Asana", "ServiceNow", "Notion"],
};

const CONTACT = {
  name: "Mona Singh",
  title: "Technical Program Manager • Project/Product Manager",
  location: "New York City, NY",
  email: "mona.singh08@gmail.com",
  phone: "201-589-0640",
  linkedin: "https://www.linkedin.com/in/mona-singh-67471810",
  resume: "https://drive.google.com/file/d/1MRXeFRmIf3oHCZfr1nnFcB_BzYWwcW8K/view?usp=drive_link" // add resume pdf link when ready
};

const HIGHLIGHTS = [
  { tag: "JPMorgan",    value: "100+ stakeholders", label: "Aligned risk, data, and engineering for Basel III & CCAR delivery" },
  { tag: "BiocharLife", value: "4 countries",       label: "Led MRV rollout and operating cadence (TPM)" },
  { tag: "ElevarSalud", value: "5,000+ users",      label: "Launched WhatsApp triage + clinician portal" },
  { tag: "UBS",         value: "~35% faster QA",    label: "Automated reconciliation across Oracle / OLAP pipelines" },
];

const HOW_STEPS = [
  { title: "Understand", icon: Search,       blurb: "Clarify problem, users, constraints" },
  { title: "Align",      icon: Users,        blurb: "Stakeholders, KPIs, risks, owner map" },
  { title: "Plan",       icon: ClipboardList,blurb: "Roadmap, milestones, decision log" },
  { title: "Build",      icon: Hammer,       blurb: "MVP first, unblock fast, clear gates" },
  { title: "Validate",   icon: ShieldCheck,  blurb: "Data rules, QA, pilots in 1 region" },
  { title: "Launch",     icon: Rocket,       blurb: "Measured rollout with kill switch" },
  { title: "Operate",    icon: LineChart,    blurb: "Dashboards, SLAs/SLOs, on-call" },
  { title: "Improve",    icon: Target,       blurb: "Weekly metrics → actions → iterate" },
];

const QUALITIES = [
  "Synthesis & clarity", "Prioritization under pressure",
  "Technical fluency", "Analytical rigor",
  "Stakeholder trust", "Cross-cultural collaboration",
  "Calm leadership", "Builder mindset"
];


type Project = {
  id: string;
  org: string;
  title: string;
  role: string;
  timeframe: string;
  tags: string[];
  problem: string;
  approach: string[];
  metrics: string[];
  tools: string[];
  // NEW (optional):
  explainer?: { title: string; subtitle?: string; bullets: string[] };
  images?: { src: string; caption: string; width?: number; height?: number }[];
  glossary?: { term: string; text: string }[];
  disclaimer?: string;
  links?: { label: string; url: string }[]; 
};

const PROJECTS: Project[] = [
  {
    id: "biochar",
    org: "BiocharLife",
    title: "AI-assisted MRV for carbon verification",
    role: "Technical Program Manager",
    timeframe: "Dec 2023 – May 2025",
    tags: ["AI/ML", "MRV", "Field ops", "Low connectivity"],
    problem:
      "Carbon credit issuance requires verified evidence (trench, feedstock, GPS/date, photos tied to project IDs). Across four countries the data was inconsistent, connectivity was patchy, and rules kept changing—slowing reviews and delaying payouts.",
    approach: [
         "Set success criteria and KPIs: first-cycle approval and 3-day median time to decision. Added end-to-end metrics from submission to auditor package to expose bottlenecks and guide improvements.",
"Field capture operations: issued SOPs and checklists for the required evidence set; made the app offline-first with prompts and quality nudges; ensured consent and reliable upload/retry.",
"Validation and routing: standardized the data model; added automated quality gates (location inside allowed area, time sanity, image clarity); auto-pass vs. review queues based on rules.",
"Reviewer workflow: provided a review console with reason codes, standard outcomes (approve / reject / recapture), and override policy with rationale for traceability.",
"Governance and change control: maintained a thresholds registry and decision log; used simulate → pilot (one region) → full release with version tags and rollback"
    ],
    metrics: [
      "10,000+ credits verified",
      "Median review time ~10 → 3 days (~70% faster)",
      "Verification errors down ~15%",
      "Fewer rework"
    ],
    tools: ["AWS", "Python", "Power BI", "Airtable", "OpenAI (LLM assists)"],
    explainer: {
     title: "How it works", subtitle: "From evidence to issuance", bullets: [ "Capture: field team submits photos, GPS/date, and trench/feedstock details via an offline-friendly app.", "Auto validation: normalize the record and run quality gates; auto-pass clean items, route others to review.", "Review: verifiers decide with reason codes and required notes for any overrides.", "Auditor package: assemble a signed report with the full decision trail and deliver to the registry and auditor." ] 
    },
    images: [
      {
        src: "/biocharlife/fieldcapture.png",
        caption: "Field app capture (sample / illustrative)",
        width: 640,
        height: 360
      },
      {
        src: "/biocharlife/reviewer_console.png",
        caption: "Reviewr Console (sample / illustrative)",
        width: 640,
        height: 360 
      },
       {
        src: "/biocharlife/dashboard.png",
        caption: "Dashboard (sample / illustrative)",
        width: 640,
        height: 360
      },
      
      {
        src: "/biocharlife/flow.png",
        caption: "System flow: capture → validate → review → auditor",
        width: 640,
        height: 360
      }
    ],
disclaimer:
  "Sample/mock visuals for illustration. No proprietary,personal data; identifiers are redacted or synthetic.",
  glossary: [
  { term: "MRV", text: "Measurement, Reporting, and Verification. The evidence process required before carbon credits are issued." },
  { term: "Carbon credit", text: "A tradable certificate that represents one metric ton of CO₂-equivalent avoided or removed." },
  { term: "Biochar", text: "Charcoal made from biomass. When put in soil it stores carbon for long periods and can generate credits." },
  { term: "Issuance", text: "The registry creates credits after the project’s evidence is verified and approved." },
  { term: "Verifier / Auditor", text: "Independent reviewers who confirm that evidence and decisions meet the program’s rules before issuance." },
]
  },
  {
    id: "elevar",
    org: "ElevarSalud",
    title: "WhatsApp triage + clinician portal",
    role: "Co-founder • Product/Program Lead",
    timeframe: "Dec 2022 – Nov 2023",
    tags: ["WhatsApp", "Clinician portal", "Low literacy"],
    problem:
      "Telemedicine options were fragmented; many clinics lacked EMR/EHR; expats needed English-speaking clinicians; follow-ups were untracked.",
    approach: [
      "Prioritized triage, reminders, and follow-ups; shipped WhatsApp flows with bilingual copy.",
      "Built clinician portal for bot→human handoff, templates, tagged reasons; set response-time SLAs.",
      "Instrumented funnels and drop-offs; weekly releases to tune copy and paths."
    ],
    metrics: [
      "5,000+ users served",
      "+20% adoption after iterations",
      "Delivery cycles ~25% faster",
      "90%+ service uptime"
    ],
    tools: ["Twilio", "PostgreSQL", "React", "OpenAI (FAQ assists)"],
    explainer: {
  title: "What this does",
  subtitle: "Triage in WhatsApp with seamless clinician handoff",
  bullets: [
    "Users start in WhatsApp for symptom triage, reminders, and navigation in simple language.",
    "When needed, the chat hands off to a clinician in a web portal; the clinician sees context and templates.",
    "Encounters and consent are logged to create an audit-ready record of care and follow-ups."
  ]
  },
images: [
    { src: "/elevar/whatsapp_flow.png", caption: "WhatsApp triage (sample / illustrative)", width: 640, height: 360 },
    { src: "/elevar/portal_mock.png",   caption: "Clinician portal handoff view (sample / illustrative)", width: 640, height: 360 }
  ],
disclaimer:
  "Sample/mock visuals for illustration. No proprietary, patient, or personal data; identifiers are redacted or synthetic.",
glossary: [
  { term: "EMR / EHR", text: "Electronic medical/health record. Many clinics lacked a digital record, so WhatsApp + portal created a minimal audit-ready trail." },
  { term: "Bot → Human handoff", text: "A conversation escalates from automation to a clinician with full context and templates." },
  { term: "SLA", text: "Service-level agreement. Target response times for triage and clinician follow-ups." }
]

  },
  {
    id: "jpm",
    org: "JPMorgan",
    title: "Regulatory risk data systems",
    role: "Business Analyst",
    timeframe: "Jun 2014 – May 2018",
    tags: ["Risk & Compliance", "ETL/DWH", "Tableau"],
    problem:
      "Regulatory reporting required consistent data lineage, reconciled feeds, and clear metrics across multiple business units.",
    approach: [
      "Authored FRDs and lineage maps; partnered with ETL teams on transformations to the central DWH.",
      "Built Tableau dashboards for exposure, capital, and stress-testing; aligned stakeholders on definitions.",
      "Automated PL/SQL reconciliations to reduce manual effort and improve audit traceability."
    ],
    metrics: [
      "Basel III and CCAR reporting delivered across 3 business units",
      "Reduced manual reconciliation effort and accelerated reporting cycles",
      "Improved auditability via documented lineage and standardized metrics"
    ],
    tools: ["Oracle / PL/SQL", "ETL/DWH", "Tableau", "Jira", "Confluence"],
    glossary: [
      {
        term: "Basel III",
        text: "Global banking rules for capital and liquidity; requires consistent, traceable risk data."
      },
      {
        term: "CCAR",
        text: "U.S. Federal Reserve stress test; demands standardized metrics and clear lineage."
      }
    ]
  },
  {
    id: "ubs",
    org: "UBS",
    title: "Market-risk QA automation",
    role: "QA Engineer",
    timeframe: "Feb 2012 – Jun 2014",
    tags: ["QA", "ETL", "OLAP", "Automation"],
    problem:
      "Daily regression and data validation for VaR/exposure pipelines were manual and error-prone.",
    approach: [
      "Led QA for market-risk pipelines and OLAP reporting; validated source→target mappings.",
      "Automated repeatable checks with Shell/VBA; standardized cases and defect triage.",
      "Partnered with data engineering to stabilize feeds and reduce late-cycle risk."
    ],
    metrics: [
      "Reduced manual regression effort and cycle time",
      "Stabilized daily runs with automated checks",
      "Improved release confidence for risk reporting"
    ],
    tools: ["Oracle", "OLAP", "Shell", "VBA", "HP Quality Center"],
    glossary: [
      {
        term: "VaR",
        text: "Value-at-Risk; a statistic estimating potential portfolio loss over a period."
      }
    ]
  }
];

// Uniform image card with fixed height
// mode = "scroll" shows full image with vertical scroll inside a fixed-height frame
// mode = "crop" crops to fill the frame (optional)
function ImgCard({
  src,
  caption,
  mode = "scroll",
}: {
  src: string;
  caption: string;
  mode?: "scroll" | "crop";
}) {
  const frameBase =
    "relative w-full rounded overflow-hidden bg-white"; // scroll frame wrapper
  const frameScroll = "max-h-48 md:max-h-56 overflow-y-auto"; // vertical scroll
  const frameCrop   = "h-40 md:h-48"; // fixed height (no vertical scroll)

  return (
    <figure className="relative rounded-lg border bg-white p-2">
      {/* Badge sits over the image; z-10 so it isn't hidden */}
      <span className="absolute right-2 top-2 z-10 rounded bg-black/60 px-1.5 py-0.5 text-[10px] font-medium text-white pointer-events-none">
        SAMPLE
      </span>

      {/* Image frame */}
      <div className={`${frameBase} ${mode === "scroll" ? frameScroll : frameCrop}`}>
        {mode === "scroll" ? (
          // FULL image; vertical scroll if taller than frame
          <Image
            src={src}
            alt={`${caption} — sample / illustrative, no real data`}
            width={1600}          // large intrinsic to keep quality
            height={1000}
            className="w-full h-auto block"
            priority={false}
          />
        ) : (
          // CROPPED thumbnail
          <Image
            src={src}
            alt={`${caption} — sample / illustrative, no real data`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
          />
        )}
      </div>

      <figcaption className="mt-1 text-[11px] text-slate-600">
        {caption} (illustrative; data redacted/synthetic)
      </figcaption>
    </figure>
  );
}


function Stat({ tag, label, value }: {tag: string; label: string; value: string }) {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardContent className="p-4">
        <div className="mb-2 text-[11px] font-medium text-slate-600">
          <span className="rounded-full bg-slate-100 px-2 py-0.5">{tag}</span>
        </div>
        <p className="text-2xl font-semibold tracking-tight">{value}</p>
        <p className="text-sm text-muted-foreground mt-1">{label}</p>
      </CardContent>
    </Card>
  );
}

function ProjectCard({ p }: { p: typeof PROJECTS[number] }) {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between gap-4">
          <div>
            <CardTitle className="text-xl">{p.title}</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              {p.org} • {p.role} • {p.timeframe}
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <Badge key={t} variant="secondary" className="rounded-full">{t}</Badge>
              ))}
            </div>
          </div>
          <Sparkles className="h-6 w-6 text-primary" />
        </div>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          <p className="text-sm font-medium">Problem</p>
          <p className="text-sm text-muted-foreground mt-1">{p.problem}</p>
        </div>
        <div>
          <p className="text-sm font-medium">Approach</p>
          <ul className="mt-1 text-sm text-muted-foreground list-disc pl-5 space-y-1">
            {p.approach.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-medium">Outcome</p>
          <ul className="mt-1 text-sm text-muted-foreground list-disc pl-5 space-y-1">
            {p.metrics.map((m) => (
              <li key={m} className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-green-600" />
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {p.tools.map((tool) => (
            <Badge key={tool} variant="outline" className="rounded-full">{tool}</Badge>
          ))}
        </div>
        {p.links?.length ? (
          <div className="flex flex-wrap gap-3 pt-1">
            {p.links.map((l) => (
              <Button key={l.label} variant="secondary" size="sm" asChild>
                <a href={l.url} target="_blank" rel="noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> {l.label}
                </a>
              </Button>
            ))}
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <header className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-6">
        <div className="space-y-4">
          {/* ONE LINE: Name | Roles .................. Location */}
          <div className="flex items-baseline gap-3 flex-nowrap whitespace-nowrap overflow-x-auto">
           <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{CONTACT.name}</h1>
           <span className="text-slate-400">|</span>
           <span className="text-base md:text-lg text-muted-foreground">
            {CONTACT.title}
           </span>
           <span className="ml-auto inline-flex items-center gap-1 text-sm md:text-base text-muted-foreground">
            <MapPin className="h-4 w-4" /> {CONTACT.location}
           </span>
          </div>
          {/* Row 2: contact + buttons */}
          <div className="flex flex-wrap items-center gap-3">
           <a className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-slate-900" href={`mailto:${CONTACT.email}`}>
            <Mail className="h-4 w-4" /> {CONTACT.email}
           </a>
           <a className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-slate-900" href={`tel:${CONTACT.phone}`}>
            <Phone className="h-4 w-4" /> {CONTACT.phone}
           </a>
           <a className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-slate-900" href={CONTACT.linkedin} target="_blank" rel="noreferrer">
           <Linkedin className="h-4 w-4" /> LinkedIn
           </a>

           <div className="ml-auto flex gap-2">
            <Button asChild size="sm" className="rounded-2xl bg-emerald-800 hover:bg-emerald-700 text-white border-0 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-600">
             <a href={CONTACT.resume} target="_blank" rel="noreferrer">
              <Download className="mr-2 h-4 w-4" /> Resume
             </a>
           </Button>
           <Button variant="secondary" asChild size="sm" className="rounded-2xl bg-[#0A66C2] hover:bg-[#004182] text-white border-0 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0A66C2]">
            <a href={CONTACT.linkedin} target="_blank" rel="noreferrer">
             <Linkedin className="mr-2 h-4 w-4" /> Connect
            </a>
           </Button>
         </div>
        </div>
       </div>
        <p className="mt-6 max-w-3xl text-slate-700">
          Technical Program Manager with 15+ years across the SDLC. I align cross functional teams, set clear KPIs and risks, and ship reliable systems across enterprise and startup environments.
        </p>
  <CompanyLogos />

      </header>


      <main className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
<Separator className="my-10" />

<section className="space-y-3">
  <h2 className="text-2xl font-semibold tracking-tight">Cross-project impact</h2>
  <p className="text-sm text-muted-foreground">Selected outcomes across roles and orgs</p>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {HIGHLIGHTS.map((s) => <Stat key={s.tag + s.label} {...s} />)}
  </div>
</section>

        <Separator className="my-10" />

<section className="space-y-4">
  <h2 className="text-2xl font-semibold tracking-tight">Roles across the SDLC</h2>
   <p className="text-sm text-muted-foreground">Hands-on across the SDLC: BA → PM/TPM → QA → Prod Ops
   </p>
  {/* Use defaults: */}
  <div className="pt-2 md:pt-4">
  <SdlcWheel />

  {/* Or pass a custom list: */}
  {/* 
  <SdlcWheel phases={[
    { phase: "Plan / Requirements", role: "Business Analyst", company: "JPMorgan", when: "2014–2018", color: "bg-indigo-600" },
    { phase: "Design",              role: "PM / Co-founder",  company: "ElevarSalud", when: "2022–2023", color: "bg-emerald-600" },
    { phase: "Build",               role: "TPM",              company: "BiocharLife", when: "2023–2025", color: "bg-sky-600" },
    { phase: "Test",                role: "QA Engineer",      company: "UBS",         when: "2012–2014", color: "bg-amber-600" },
    { phase: "Release",             role: "Production Support", company: "Apple",     when: "2008–2012", color: "bg-rose-600" },
    { phase: "Operate / Iterate",   role: "TPM",              company: "BiocharLife", when: "2023–2025", color: "bg-purple-600" },
  ]} />
  */}
 </div>
</section>
        
        <Separator className="my-10" />
<section className="space-y-6">
  <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
  <div className="grid gap-6 md:grid-cols-2">
    {PROJECTS.map((p) => (
      <Card key={p.id} className="rounded-2xl shadow-sm">
        <CardHeader>
          <CardTitle>{p.title}</CardTitle>
          <div className="text-sm text-muted-foreground">
            {p.org} • {p.role} • {p.timeframe}
          </div>
          <div className="mt-2 flex flex-wrap gap-1">
            {p.tags.map((t) => (
              <span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                {t}
              </span>
            ))}
          </div>
        </CardHeader>
        <CardContent className="space-y-3 text-slate-700">
          <div>
            <div className="text-sm font-medium">Problem</div>
            <p className="text-sm">{p.problem}</p>
          </div>
          <div>
            <div className="text-sm font-medium">Approach</div>
            <ul className="mt-1 space-y-1">
              {p.approach.map((a, i) => (
                <li key={i} className="text-sm flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-sm font-medium">Outcomes</div>
            <ul className="mt-1 space-y-1">
              {p.metrics.map((m, i) => (
                <li key={i} className="text-sm flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
{p.explainer && (
  <div className="rounded-lg bg-slate-50 p-3">
    <div className="text-xs font-medium text-slate-800">
      {p.explainer.title}{" "}
      {p.explainer.subtitle && (
        <span className="text-slate-500">({p.explainer.subtitle})</span>
      )}
    </div>
    <ul className="mt-1 list-disc pl-5 text-xs text-slate-700 space-y-0.5">
      {p.explainer.bullets.map((b, i) => <li key={i}>{b}</li>)}
    </ul>
  </div>
)}
{p.disclaimer && (
  <div className="flex items-start gap-2 rounded-md border border-amber-200 bg-amber-50 p-2 text-xs text-amber-900">
    {/* optional icon: import { Shield } from "lucide-react" and use <Shield className="h-4 w-4 mt-0.5" /> */}
    <span className="font-medium">Note:</span>
    <span>{p.disclaimer}</span>
  </div>
)}

{p.images && p.images.length > 0 && (
  p.images.length > 2 ? (
    // 3+ images → horizontal snap scroll with fixed-height cards
    <div className="relative">
      <div className="mb-2 text-[11px] text-slate-500">Swipe to see more →</div>
      <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2
                      [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        {p.images.map((img, i) => (
          <div key={i} className="snap-start min-w-[260px] md:min-w-[320px]">
            <ImgCard src={img.src} caption={img.caption} />
          </div>
        ))}
      </div>
    </div>
  ) : (
    // 1–2 images → grid with fixed-height cards
    <div className={`grid gap-3 ${p.images.length === 1 ? "grid-cols-1" : "grid-cols-2"}`}>
      {p.images.map((img, i) => (
        <ImgCard key={i} src={img.src} caption={img.caption} />
      ))}
    </div>
  )
)}

   <div className="flex flex-wrap items-center gap-2">
          {p.tools.map((tool) => (
            <Badge key={tool} variant="outline" className="rounded-full">{tool}</Badge>
          ))}
        </div>


{p.glossary && p.glossary.length > 0 && (
  <details className="rounded bg-slate-50 p-2 text-xs text-slate-700">
    <summary className="cursor-pointer font-medium text-slate-800">
      Acronyms explained
    </summary>
    <ul className="mt-1 space-y-1">
      {p.glossary.map((g, i) => (
        <li key={i}>
          <span className="font-semibold">{g.term}:</span> {g.text}
        </li>
      ))}
    </ul>
  </details>
)}
          {/* Optional tiny links row (kept on same page) */}
          {/* <div className="pt-2 text-xs">
            <a className="underline" href="/biocharlife/biocharlife-demo.pdf" target="_blank" rel="noreferrer">Download 1-pager</a>
          </div> */}
        </CardContent>
      </Card>
    ))}
  </div>
</section>

<Separator className="my-10" />

<section className="space-y-4">
  <h2 className="text-2xl font-semibold tracking-tight">Technical skills & certifications</h2>
  <div className="grid md:grid-cols-3 gap-4">
    <Card className="rounded-2xl shadow-sm">
      <CardHeader><CardTitle className="text-base">Certifications</CardTitle></CardHeader>
      <CardContent className="flex flex-wrap gap-2">
       {CERTS.map((c) => (<Pill key={c} accent="sky">{c}</Pill>))}
      </CardContent>
    </Card>

    <Card className="rounded-2xl shadow-sm">
      <CardHeader><CardTitle className="text-base">Cloud & infrastructure</CardTitle></CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {SKILLS.cloudInfra.map((s) => <Pill key={s}>{s}</Pill>)}
      </CardContent>
    </Card>

    <Card className="rounded-2xl shadow-sm">
      <CardHeader><CardTitle className="text-base">Data & analytics</CardTitle></CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {SKILLS.dataAnalytics.map((s) => <Pill key={s}>{s}</Pill>)}
      </CardContent>
    </Card>

    <Card className="rounded-2xl shadow-sm">
      <CardHeader><CardTitle className="text-base">Databases</CardTitle></CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {SKILLS.databases.map((s) => <Pill key={s}>{s}</Pill>)}
      </CardContent>
    </Card>

    <Card className="rounded-2xl shadow-sm">
      <CardHeader><CardTitle className="text-base">Languages & scripting</CardTitle></CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {SKILLS.languages.map((s) => <Pill key={s}>{s}</Pill>)}
      </CardContent>
    </Card>

    <Card className="rounded-2xl shadow-sm">
      <CardHeader><CardTitle className="text-base">Frontend & collaboration</CardTitle></CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {[...SKILLS.frontend, ...SKILLS.delivery].map((s) => <Pill key={s}>{s}</Pill>)}
      </CardContent>
    </Card>
  </div>
</section>



        <Separator className="my-10" />
<div className="bg-slate-50">
<section className="grid md:grid-cols-3 gap-6">
  <Card className="rounded-2xl shadow-sm md:col-span-3">
    <CardHeader><CardTitle>How I work</CardTitle></CardHeader>
    <CardContent className="space-y-3 text-slate-700">
<ul className="grid grid-cols-2 md:grid-cols-4 gap-3">
  {HOW_STEPS.map((s) => (
    <li key={s.title} className="flex items-start gap-2">
      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200 shrink-0">
        <s.icon className="h-3.5 w-3.5" />
      </span>
      <div className="text-sm">
        <div className="font-medium text-slate-900">{s.title}</div>
        <div className="text-slate-700 text-xs">{s.blurb}</div>
      </div>
    </li> 
  ))}     
</ul>    
    </CardContent>
  </Card>
</section>
</div>
<Separator className="my-10" />
        <section className="grid md:grid-cols-3 gap-6 items-stretch">
          <Card className="h-fullrounded-2xl shadow-sm md:col-span-2">
            <CardHeader className="pb-3">
              <CardTitle>About me</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-slate-700">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-base leading-7">
  <li className="flex items-start gap-2">
    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center shrink-0">
      <Sparkles className="h-4 w-4 text-emerald-600" />
    </span>
    <span>Structured thinking</span>
  </li>
  <li className="flex items-start gap-2">
    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center shrink-0">
      <Gauge className="h-4 w-4 text-emerald-600" />
    </span>
    <span>Prioritization under pressure</span>
  </li>
  <li className="flex items-start gap-2">
    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center shrink-0">
      <Braces className="h-4 w-4 text-emerald-600" />
    </span>
    <span>Technical fluency</span>
  </li>
  <li className="flex items-start gap-2">
    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center shrink-0">
      <BarChart className="h-4 w-4 text-emerald-600" />
    </span>
    <span>Analytical rigor</span>
  </li>
  <li className="flex items-start gap-2">
    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center shrink-0">
      <Handshake className="h-4 w-4 text-emerald-600" />
    </span>
    <span>Trusted cross-function partner</span>
  </li>
  <li className="flex items-start gap-2">
    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center shrink-0">
      <Globe2 className="h-4 w-4 text-emerald-600" />
    </span>
    <span>Cross-cultural collaboration</span>
  </li>
  <li className="flex items-start gap-2">
    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center shrink-0">
      <Shield className="h-4 w-4 text-emerald-600" />
    </span>
    <span>Calm leadership</span>
  </li>
  <li className="flex items-start gap-2">
    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center shrink-0">
      <Zap className="h-4 w-4 text-emerald-600" />
    </span>
    <span>Builder mindset</span>
  </li>
</ul>

            </CardContent>
          </Card>

          <Card className="h-full rounded-2xl shadow-sm md:col-span-1">
            <CardHeader className="pb-3">
              <CardTitle>Contact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
               <div className="flex items-center gap-3">
    <Image
      src="/profile.png"
      alt="Mona Singh headshot"
      width={56}
      height={56}
      className="h-14 w-14 rounded-full object-cover ring-2 ring-emerald-100 shadow-sm"
      priority={false}
    />
    <div className="leading-tight">
      <div className="font-medium text-slate-900">{CONTACT.name}</div>
      <div className="text-xs text-muted-foreground">{CONTACT.title}</div>
    </div>
  </div>
            <div className="space-y-1.5 text-sm text-slate-700">
              <a className="flex items-center gap-2 hover:text-slate-900" href={`mailto:${CONTACT.email}`}>
                <Mail className="h-4 w-4" /> {CONTACT.email}
              </a>
              <a className="flex items-center gap-2 hover:text-slate-900" href={`tel:${CONTACT.phone}`}>
                <Phone className="h-4  w-4" /> {CONTACT.phone}
              </a>
              <div className="flex items-center gap-2 text-slate-700">
                <MapPin className="h-4 w-4" /> {CONTACT.location}
              </div>
              <a className="flex items-center gap-2 hover:text-slate-900" href={CONTACT.linkedin} target="_blank" rel="noreferrer">
                <Linkedin className="h-4 w-4" /> LinkedIn profile
              </a>
             </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Separator className="my-12" />
<footer className="border-t border-slate-200/70">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 text-xs text-slate-600 leading-tight">
    {/* Line 1 */}
    <p>
      © {new Date().getFullYear()} Mona Singh ·{" "}
      <span className="whitespace-nowrap">Built with care and clarity using:</span>
    </p>

    {/* Line 2 */}
    <div className="mt-1 flex flex-wrap items-center gap-2">
      <Pill accent="slateDark" className="text-[11px]">Next.js 15</Pill>
      <Pill accent="slateDark" className="text-[11px]">React</Pill>
      <Pill accent="slateDark" className="text-[11px]">TypeScript</Pill>
      <Pill accent="slateDark" className="text-[11px]">Tailwind</Pill>
      <Pill accent="slateDark" className="text-[11px]">shadcn/ui</Pill>
      <Pill accent="slateDark" className="text-[11px]">Vercel</Pill>

      <span className="ml-2">
        Code available on GitHub upon request —{" "}
        <a
          className="underline"
          href="mailto:mona.singh08@gmail.com?subject=Request%20for%20portfolio%20code"
        >
          email me
        </a>.
      </span>
    </div>
  </div>
</footer>


</div>
  );
}

