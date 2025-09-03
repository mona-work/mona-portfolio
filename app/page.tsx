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
  { value: "4 countries",    label: "MRV rollout led (TPM, BiocharLife)" },
  { value: "Basel III & CCAR", label: "Reg reporting delivered (JPMorgan)" },
  { value: "5,000+ users",   label: "WhatsApp triage + clinician portal launched (ElevarSalud)" },
  { value: "30–40% faster",  label: "Automated QA reconciliation (UBS)" },
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

const PROJECTS = [
  {
    id: "biocharlife",
    org: "BiocharLife",
    title: "AI assisted MRV for carbon verification",
    role: "Technical Program Manager",
    timeframe: "Dec 2023 - May 2025",
    tags: ["AI", "Carbon", "MRV", "Field ops", "Low connectivity"],
    problem:
      "Carbon credits are issued only when removals are measured, reported, and verified. In smallholder biochar, tCO₂e relies on consistent capture of trench dimensions, feedstock mass and moisture, method, GPS, and date. Across four countries our data was uneven, standards kept changing, connectivity was weak, and auditors required reproducible evidence with a clear decision trail. Without this, issuance is delayed and payouts stall.",
approach: [
  "Align KPIs with auditors, field, data, and eng; set 3-day SLA and first-cycle pass.",
  "Map the flow and rules: canonical schema, thresholds, routing; publish decision/owner log.",
  "Pilot one region (offline-ready); fix UX friction from field ride-alongs; capture consent/device IDs.",
  "Instrument end-to-end: events and dashboards; test rules on history; adjust before scale.",
  "Enable reviewers: simple console, reason codes, re-capture loop; SOPs and quick training.",
  "Roll out and run: simulate → pilot → country release with version tags; weekly KPIs → 2–3 actions.",
],

    metrics: [
      "100+ MRV users across 4 countries; first-cycle auditor acceptance",
      "10,000+ verified credits",
      "Median review time cut from about 10 days to 3",
      "Verification errors down roughly 15 percent",
      "First cycle auditor acceptance",
    ],
    tools: ["Power BI", "Airtable", "OpenAI", "Python", "AWS", "React"],
    links: [
      { label: "Demo Deck", url: "/biocharlife/biocharlife-demo.pdf" },
      { label: "Read case study", url: "/case/biocharlife" },
    ],
  },
  {
    id: "elevar",
    org: "ElevarSalud",
    title: "WhatsApp based digital health assistant",
    role: "Co founder • Chief Product Officer",
    timeframe: "Dec 2022 - Nov 2023",
    tags: ["Health", "WhatsApp", "Low literacy", "Product"],
    problem:
      "In Mexico, access to primary care and telemedicine was fragmented. Many neighborhood clinics did not use an EMR or EHR, so patient history, vitals, and recommendations lived in paper files or scattered WhatsApp chats. Expats and travelers struggled to find English speaking clinicians on short notice, and pricing and availability were inconsistent. Connectivity was uneven, which made scheduling, reminders, and follow-ups unreliable. Clinicians were already overloaded, so outreach and documentation slipped, and there was no audit-ready trail of advice or next steps.",
     approach: [
    "Aligned scope with clinicians/CHWs; prioritized triage, reminders, follow-ups, booking.",
    "MVP on WhatsApp with quick-replies, bilingual copy, low-typing flows; images/voice notes.",
    "Clinician portal for bot→human handoff, context, templates, tagged reasons; response-time SLAs.",
    "Instrumented funnel/drop-offs; weekly releases to tune copy and paths.",
    "Twilio + PostgreSQL; consent + audit logging; targeted 90%+ uptime."
  ],
    metrics: [
         "5,000+ unique users",
    "+20% adoption after iterations",
    "Delivery cycles ~25% faster",
    "Standardized clinician handoff with audit-ready records"
    ],
    tools: ["Twilio", "PostgreSQL", "Figma", "Asna", "React"],
    links: [
      { label: "Flow map", url: "#" },
      { label: "Demo video", url: "#" },
      { label: "Read case study", url: "/case/biocharlife"}
    ],
  },
  {
    id: "ops_tooling",
    org: "Community Ops (anonymized)",
    title: "No-code coordination tools for field crews",
    role: "Product/Program Lead",
    timeframe: "2019 – 2022",
    tags: ["Finance", "Data", "Compliance"],
    problem:
      "Temporary field operations had scattered WhatsApp threads, paper checklists, and no single source of truth. Low connectivity and rotating crews made task handoffs, inventory control, and attendance unreliable, which created delays and lost tools.",
    approach: [
      "Mapped workflows and roles; created SOPs and checklists for shift handoffs",
      "Built WhatsApp quick-reply flows for tasking and status updates",
      "Designed Airtable bases for tasks, inventory, and attendance with offline-friendly forms",
      "Added simple QR/ID tagging for faster check-in and tool issuance",
      "Ran weekly retros with KPIs and iterated on runbooks"
    ],
    metrics: [
      "Onboarding time reduced ~30 percent",
      "Coordinated 50+ volunteers across shifts",
      "100 percent on-time delivery for scheduled ops windows",
      "Improved clarity and offline reliability (WhatsApp + Airtable)"
    ],
    tools: ["Airtable", "WhatsApp", "Google Apps Script", "Notion", "Figma"],
    links: [
      { label: "Live Demo", url: "/tool/ops" },
    ],
  },
];

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardContent className="p-4">
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
          Technical Program Manager with end-to-end SDLC experience. I simplify complex systems, drive metrics and risk management, and lead cross-functional programs. I align teams, design simple workflows, and deliver reliably across countries, from <Brand>Apple</Brand>,  <Brand>JPMorgan</Brand> and <Brand>UBS</Brand> to AI assisted MRV and a full telemedicine stack spanning WhatsApp triage, a clinician web portal, and live doctor consultations.
        </p>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {HIGHLIGHTS.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </section>

        <Separator className="my-10" />

<section className="space-y-4">
  <h2 className="text-2xl font-semibold tracking-tight">Roles across the SDLC</h2>
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
        
{/* How I work (stepper) */}
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

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">Case studies</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {PROJECTS.slice(0, 2).map((p) => (
              <ProjectCard key={p.id} p={p} />
            ))}
          </div>

          <Accordion type="single" collapsible className="mt-4">
            <AccordionItem value="jpm">
              <AccordionTrigger className="text-left text-base">More work - Community ops tools (WhatsApp + Airtable)</AccordionTrigger>
              <AccordionContent>
                <ProjectCard p={PROJECTS[2]} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <Separator className="my-10" />

        <section className="grid md:grid-cols-3 gap-6 items-stretch">
          <Card className="h-fullrounded-2xl shadow-sm md:col-span-2">
            <CardHeader className="pb-3">
              <CardTitle>About</CardTitle>
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
     <div className="bg-slate-50">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-8">
        <CompanyLogos />
       </section>
       </div>
      <footer className="max-w-6xl mx-auto px-4 sm:px-6 pb-10 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Mona Singh. Built with care and clarity.</p>
      </footer>
    </div>
  );
}

