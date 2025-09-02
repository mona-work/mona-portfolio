// app/page.tsx
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, ExternalLink, Download, CheckCircle, Sparkles } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

// Mona Singh - Product Portfolio
// Note: Replace link placeholders with your actual resume, LinkedIn, and case study assets.

const CONTACT = {
  name: "Mona Singh",
  title: "Product Manager • Technical Program Manager",
  location: "New York City, NY",
  email: "mona.singh08@gmail.com",
  phone: "201-589-0640",
  linkedin: "https://www.linkedin.com/in/mona-singh-67471810",
  resume: "#" // add resume pdf link when ready
};

const HIGHLIGHTS = [
  { label: "Carbon credits verified", value: "10,000+" },
  { label: "WhatsApp health users", value: "5,000+" },
  { label: "Countries delivered", value: "4" },
  { label: "Review time cut", value: "10d → 3d" },
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
      "Standards were evolving, data quality was uneven, and auditors needed strong evidence. The team needed one simple, reliable MRV flow across four countries.",
    approach: [
      "Defined success - auditor acceptance, farmer usability, 3 day review target",
      "Structured data schema with human checklists and model assisted checks",
      "Offline friendly capture with image quality gates and GPS prompts",
      "Duplicate image detection and trench boundary hints via OpenAI APIs",
      "Weekly metrics and decision log to drive iterations",
    ],
    metrics: [
      "10,000+ verified credits",
      "Median review time cut from about 10 days to 3",
      "Verification errors down roughly 15 percent",
      "First cycle auditor acceptance",
      "$500k investor interest influenced at Carbon Unbound",
    ],
    tools: ["Power BI", "Airtable", "OpenAI", "Python", "AWS", "Jira"],
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
      "Underserved communities needed simple guidance and follow ups on basic health topics, with low bandwidth and first time smartphone users.",
    approach: [
      "Scoped MVP flows that worked with patchy networks",
      "Iterated with community health workers and added quick reply patterns",
      "Clear copy and inclusive onboarding for non technical users",
      "Twilio and PostgreSQL integration, 90 percent uptime",
    ],
    metrics: [
      "5,000+ users reached",
      "+20 percent adoption after iterative releases",
      "Delivery cycles down about 25 percent",
    ],
    tools: ["Twilio", "PostgreSQL", "Figma", "Jira", "Monday"],
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
      "Volunteer crews in low-connectivity environments needed clearer tasking, inventory, and attendance tracking.",
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
            <Button asChild size="sm" className="rounded-2xl bg-green-600 hover:bg-green-700 text-white border-0 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-600">
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
          I build simple, inclusive products with measurable outcomes. Recent work includes AI assisted carbon verification and a WhatsApp health assistant. I care about low friction flows, clear UX for non technical users, and reliable delivery across different cultures and devices.
        </p>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {HIGHLIGHTS.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </section>

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

        <section className="grid md:grid-cols-3 gap-6">
          <Card className="rounded-2xl shadow-sm md:col-span-2">
            <CardHeader>
              <CardTitle>About</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-slate-700">
              <p>
                My background spans computer engineering, product and data work in health tech and finance, and program leadership in climate tech. I take a test and learn approach, write clear docs, and partner closely with design and engineering.
              </p>
              <p>
                I have practiced Vipassana in the Theravada tradition with more than 1,500 hours of meditation and several month long retreats. That training shaped my focus, empathy, and calm execution under ambiguity.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-sm">
            <CardHeader>
              <CardTitle>Contact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <a className="flex items-center gap-2 hover:text-slate-900" href={`mailto:${CONTACT.email}`}>
                <Mail className="h-4 w-4" /> {CONTACT.email}
              </a>
              <a className="flex items-center gap-2 hover:text-slate-900" href={`tel:${CONTACT.phone}`}>
                <Phone className="h-4 w-4" /> {CONTACT.phone}
              </a>
              <div className="flex items-center gap-2 text-slate-700">
                <MapPin className="h-4 w-4" /> {CONTACT.location}
              </div>
              <a className="flex items-center gap-2 hover:text-slate-900" href={CONTACT.linkedin} target="_blank" rel="noreferrer">
                <Linkedin className="h-4 w-4" /> LinkedIn profile
              </a>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="max-w-6xl mx-auto px-4 sm:px-6 pb-10 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Mona Singh. Built with care and clarity.</p>
      </footer>
    </div>
  );
}

