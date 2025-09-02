// src/app/tool/ops/page.tsx
"use client";

import { useMemo, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

type Crew = { id: string; name: string; role: "Coordinator" | "Crew Lead" | "Crew Member" };
type Task = { id: string; title: string; site: string; assigneeId: string; status: "New" | "In-progress" | "Done"; due: string };
type Inventory = { id: string; item: string; condition: "OK" | "Needs repair"; checkedOutBy?: string; dueBack?: string };
type Attendance = { crewId: string; shift: string; checkInTs?: string; checkOutTs?: string };

const CREW: Crew[] = [
  { id: "c1", name: "A. Patel", role: "Coordinator" },
  { id: "c2", name: "J. Rivera", role: "Crew Lead" },
  { id: "c3", name: "M. Okeke", role: "Crew Member" },
  { id: "c4", name: "S. Lin", role: "Crew Member" },
];

const INIT_TASKS: Task[] = [
  { id: "t1", title: "Trench layout — Sector B", site: "Site-07", assigneeId: "c2", status: "New", due: "2025-09-04" },
  { id: "t2", title: "Depth check — Plot 19", site: "Site-03", assigneeId: "c3", status: "In-progress", due: "2025-09-03" },
  { id: "t3", title: "Tool audit — depot", site: "Depot", assigneeId: "c4", status: "New", due: "2025-09-05" },
];

const INIT_INV: Inventory[] = [
  { id: "i1", item: "Measuring tape #2", condition: "OK" },
  { id: "i2", item: "GPS handset #1", condition: "OK", checkedOutBy: "c3", dueBack: "2025-09-03" },
  { id: "i3", item: "Shovel #4", condition: "Needs repair" },
];

const INIT_ATT: Attendance[] = CREW.map((c) => ({ crewId: c.id, shift: "AM" }));

function statusBadge(s: Task["status"]) {
  const styles = s === "Done" ? "bg-emerald-100 text-emerald-700" : s === "In-progress" ? "bg-amber-100 text-amber-700" : "bg-slate-100 text-slate-700";
  return <span className={`text-xs px-2 py-1 rounded-full ${styles}`}>{s}</span>;
}

export default function OpsToolDemo() {
  const [tasks, setTasks] = useState<Task[]>(INIT_TASKS);
  const [inv, setInv] = useState<Inventory[]>(INIT_INV);
  const [att, setAtt] = useState<Attendance[]>(INIT_ATT);

  const totals = useMemo(() => {
    const done = tasks.filter(t => t.status === "Done").length;
    return { tasks: tasks.length, done, inProg: tasks.filter(t => t.status === "In-progress").length };
  }, [tasks]);

  const name = (id?: string) => CREW.find(c => c.id === id)?.name ?? "—";

  function advanceTask(id: string) {
    setTasks(prev => prev.map(t => {
      if (t.id !== id) return t;
      return t.status === "New" ? { ...t, status: "In-progress" } :
             t.status === "In-progress" ? { ...t, status: "Done" } : t;
    }));
  }

  function checkIn(crewId: string) {
    setAtt(prev => prev.map(a => a.crewId === crewId ? { ...a, checkInTs: new Date().toISOString(), checkOutTs: undefined } : a));
  }
  function checkOut(crewId: string) {
    setAtt(prev => prev.map(a => a.crewId === crewId ? { ...a, checkOutTs: new Date().toISOString() } : a));
  }

  function toggleCheckout(itemId: string, crewId: string) {
    setInv(prev => prev.map(i => {
      if (i.id !== itemId) return i;
      if (i.checkedOutBy) return { ...i, checkedOutBy: undefined, dueBack: undefined };
      return { ...i, checkedOutBy: crewId, dueBack: new Date(Date.now() + 24*3600*1000).toISOString().slice(0,10) };
    }));
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="text-2xl font-semibold tracking-tight">Ops Tool Demo — Sample Data</h1>
      <p className="text-sm text-muted-foreground mt-1">Tasks • Attendance • Inventory • WhatsApp quick-replies</p>

      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-4">
            <p className="text-3xl font-semibold">{totals.tasks}</p>
            <p className="text-sm text-muted-foreground mt-1">Total tasks</p>
          </CardContent>
        </Card>
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-4">
            <p className="text-3xl font-semibold">{totals.inProg}</p>
            <p className="text-sm text-muted-foreground mt-1">In-progress</p>
          </CardContent>
        </Card>
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-4">
            <p className="text-3xl font-semibold">{totals.done}</p>
            <p className="text-sm text-muted-foreground mt-1">Done</p>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-8" />

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="rounded-2xl shadow-sm">
          <CardHeader><CardTitle>Tasks</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            {tasks.map(t => (
              <div key={t.id} className="flex items-center justify-between rounded-xl border p-3">
                <div>
                  <p className="font-medium">{t.title}</p>
                  <p className="text-xs text-muted-foreground">{t.site} • Due {t.due} • {name(t.assigneeId)}</p>
                </div>
                <div className="flex items-center gap-2">
                  {statusBadge(t.status)}
                  {t.status !== "Done" && (
                    <Button size="sm" variant="secondary" onClick={() => advanceTask(t.id)}>Advance</Button>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm">
          <CardHeader><CardTitle>Attendance</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            {att.map(a => {
              const crew = CREW.find(c => c.id === a.crewId)!;
              return (
                <div key={a.crewId} className="flex items-center justify-between rounded-xl border p-3">
                  <div>
                    <p className="font-medium">{crew.name} <Badge variant="secondary" className="ml-2">{crew.role}</Badge></p>
                    <p className="text-xs text-muted-foreground">Shift {a.shift} • In: {a.checkInTs?.slice(11,16) ?? "—"} • Out: {a.checkOutTs?.slice(11,16) ?? "—"}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" onClick={() => checkIn(a.crewId)}>Check-in</Button>
                    <Button size="sm" variant="secondary" onClick={() => checkOut(a.crewId)}>Check-out</Button>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm">
          <CardHeader><CardTitle>Inventory</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            {inv.map(i => (
              <div key={i.id} className="flex items-center justify-between rounded-xl border p-3">
                <div>
                  <p className="font-medium">{i.item}</p>
                  <p className="text-xs text-muted-foreground">
                    Condition: {i.condition} • Holder: {i.checkedOutBy ? name(i.checkedOutBy) : "Available"} {i.dueBack ? `• Due ${i.dueBack}` : ""}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" onClick={() => toggleCheckout(i.id, "c3")}>
                    {i.checkedOutBy ? "Return" : "Check-out to J. Rivera"}
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm">
          <CardHeader><CardTitle>WhatsApp quick-replies (preview)</CardTitle></CardHeader>
          <CardContent className="space-y-3 text-sm text-slate-700">
            <div className="rounded-xl border p-3">
              <p className="font-medium">Task update template</p>
              <p className="mt-1">“{`{assignee}`} — {`{task_title}`} at {`{site}`} is due {`{due}`}. Reply: ✅ Done • ▶️ In-progress • ❌ Blocked.”</p>
            </div>
            <div className="rounded-xl border p-3">
              <p className="font-medium">Check-in link</p>
              <p className="mt-1">“Shift {`{shift}`} roll call. Tap to check-in: https://ops.example/ci?u={`{user}`}&s={`{shift}`}`</p>
            </div>
            <div className="rounded-xl border p-3">
              <p className="font-medium">Inventory reminder</p>
              <p className="mt-1">“Reminder: return {`{item}`} by {`{due}`}. Reply ‘RETURNED’ when done.”</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

