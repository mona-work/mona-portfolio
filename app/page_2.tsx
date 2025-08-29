// app/page.tsx
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

// Demo data used by the page

const Head_CONTACT = {
  name: "Mona Singh",
  title: "Product Manager • Technical Program Manager",
  location: "New York City, NY",
  email: "mona.singh08@gmail.com",
  phone: "201-589-0640",
  linkedin: "https://www.linkedin.com/in/mona-singh-67471810",
  resume: "#" // add resume pdf link when ready
};

const CONTACT = {
  email: "mona.singh08@gmail.com",
  phone: "201-589-0640",
  location: "NYC",
  linkedin: "https://linkedin.com/in/mona-singh-67471810",
};

const HIGHLIGHTS = [
  { label: "Carbon credits verified", value: "10,000+" },
  { label: "WhatsApp health users", value: "5,000+" },
  { label: "Countries delivered", value: "4" },
  { label: "Review time cut", value: "10d → 3d" },
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

// --- Add these: projects + a simple card to render them ---
type Project = {
  id: string;
  org: string;
  title: string;
  role: string;
  timeframe: string;
  problem: string;
  metrics: string[];
};

const PROJECTS: Project[] = [
  {
    id: "biocharlife",
    org: "BiocharLife",
    title: "AI-assisted MRV for carbon verification",
    role: "Technical Program Manager",
    timeframe: "Dec 2023 – May 2025",
    problem:
      "Evolving standards, uneven field data, and strict auditor evidence across four countries; needed one reliable MRV flow.",
    metrics: [
      "10,000+ verified credits",
      "Median review time cut from ~10 days to 3",
      "≈15% fewer verification errors",
      "Auditor acceptance on first full cycle",
    ],
  },
  {
    id: "elevar",
    org: "ElevarSalud",
    title: "WhatsApp-based digital health assistant",
    role: "Co-founder, CPO",
    timeframe: "Dec 2022 – Nov 2023",
    problem:
      "Underserved communities, low bandwidth, and first-time smartphone users; needed simple guidance and follow-ups.",
    metrics: [
      "5,000+ users reached",
      "+20% adoption after iterative releases",
      "Delivery cycles reduced ≈25%",
    ],
  },
  {
    id: "jpm",
    org: "JPMorgan Chase & Co.",
    title: "Basel dashboards and data lineage",
    role: "Business Analyst, Risk & Tech",
    timeframe: "Jun 2014 – May 2018",
    problem:
      "Conflicting liquidity metric definitions near quarter end; needed a single source of truth and sign-off.",
    metrics: [
      "Cross-team sign-off in 10 business days",
      "≈60% reduction in reconciliation effort",
      "Fewer audit issues and faster closure",
    ],
  },
];

function ProjectCard({ p }: { p: Project }) {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl">{p.title}</CardTitle>
        <p className="text-sm text-muted-foreground mt-1">
          {p.org} • {p.role} • {p.timeframe}
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm font-medium">Problem</p>
          <p className="text-sm text-muted-foreground mt-1">{p.problem}</p>
        </div>
        <div>
          <p className="text-sm font-medium">Outcome</p>
          <ul className="mt-1 list-disc pl-5 text-sm text-muted-foreground space-y-1">
            {p.metrics.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
// --- end additions ---

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-6">
        <p className="mt-6 max-w-3xl text-slate-700">
          I build simple, inclusive products with measurable outcomes. Recent work includes AI
          assisted carbon verification and a WhatsApp health assistant. I care about low friction
          flows, clear UX for non technical users, and reliable delivery across different cultures
          and devices.
        </p>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        {/* Highlights */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {HIGHLIGHTS.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </section>

        <Separator className="my-10" />

        {/* --- Paste of your Case studies + Accordion block --- */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">Case studies</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {PROJECTS.slice(0, 2).map((p) => (
              <ProjectCard key={p.id} p={p} />
            ))}
          </div>

          <Accordion type="single" collapsible className="mt-4">
            <AccordionItem value="jpm">
              <AccordionTrigger className="text-left text-base">
                More work — JPMorgan dashboards and data lineage
              </AccordionTrigger>
              <AccordionContent>
                <ProjectCard p={PROJECTS[2]} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
        {/* --- end block --- */}

        <Separator className="my-10" />

        {/* About + Contact */}
        <section className="grid md:grid-cols-3 gap-6">
          <Card className="rounded-2xl shadow-sm md:col-span-2">
            <CardHeader>
              <CardTitle>About</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-slate-700">
              <p>
                My background spans computer engineering, product and data work in health tech and
                finance, and program leadership in climate tech. I take a test and learn approach,
                write clear docs, and partner closely with design and engineering.
              </p>
              <p>
                I have practiced Vipassana in the Theravada tradition with more than 1,500 hours of
                meditation and several month long retreats. That training shaped my focus, empathy,
                and calm execution under ambiguity.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-sm">
            <CardHeader>
              <CardTitle>Contact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <a
                className="flex items-center gap-2 hover:text-slate-900"
                href={`mailto:${CONTACT.email}`}
              >
                <Mail className="h-4 w-4" /> {CONTACT.email}
              </a>
              <a
                className="flex items-center gap-2 hover:text-slate-900"
                href={`tel:${CONTACT.phone}`}
              >
                <Phone className="h-4 w-4" /> {CONTACT.phone}
              </a>
              <div className="flex items-center gap-2 text-slate-700">
                <MapPin className="h-4 w-4" /> {CONTACT.location}
              </div>
              <a
                className="flex items-center gap-2 hover:text-slate-900"
                href={CONTACT.linkedin}
                target="_blank"
                rel="noreferrer"
              >
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

