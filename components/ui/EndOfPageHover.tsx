"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

type Props = {
  email: string;
  builtWith?: string[];
};

export default function EndOfPageHover({
  email,
  builtWith = ["Next.js 15", "React", "TypeScript", "Tailwind", "shadcn/ui", "Vercel"],
}: Props) {
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [atEnd, setAtEnd] = useState(false);
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  // Reveal when the sentinel (placed near the end of the page) is visible
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        setAtEnd(entry.isIntersecting && !dismissed);
      },
      { rootMargin: "0px 0px -15% 0px" } // trip a bit before *absolute* bottom
    );
    io.observe(el);
    return () => io.disconnect();
  }, [dismissed]);

  return (
    <>
      {/* This tiny div sits near the end of your page and triggers the UI */}
      <div ref={sentinelRef} className="h-1 w-full" aria-hidden />

      <AnimatePresence>
        {atEnd && !dismissed && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-4 right-4 z-50"
          >
            <div
              className="group relative"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <button
                onClick={() => setOpen(v => !v)} // tap on mobile
                className="flex items-center gap-2 rounded-full bg-slate-900 text-white text-xs px-3 py-2 shadow-lg ring-1 ring-black/10"
                aria-expanded={open}
                aria-label="Thanks for reading"
              >
                <span>👋 Thanks for reading</span>
              </button>

              <AnimatePresence>
                {open && (
                  <motion.div
                    initial={{ opacity: 0, y: 4, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    className="absolute bottom-10 right-0 w-80 rounded-xl bg-white text-slate-800 shadow-xl ring-1 ring-black/10 p-3"
                    role="dialog"
                    aria-label="Built with details"
                  >
                    <button
                      onClick={() => {
                        setDismissed(true);
                        setOpen(false);
                      }}
                      className="absolute top-2 right-2 rounded-full p-1 text-slate-500 hover:bg-slate-100"
                      aria-label="Dismiss"
                    >
                      <X className="h-4 w-4" />
                    </button>

                    <div className="text-sm font-medium">Built with care and clarity</div>
                    <p className="mt-1 text-sm">
                      This portfolio was built with {builtWith.join(", ")}.
                    </p>
                    <p className="mt-2 text-xs text-slate-600">
                      Code available on GitHub upon request —{" "}
                      <a
                        className="underline"
                        href={`mailto:${email}?subject=Request%20for%20portfolio%20code`}
                      >
                        email me
                      </a>.
                    </p>

                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {builtWith.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

