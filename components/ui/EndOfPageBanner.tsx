"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

type Props = {
  email: string;
  builtWith?: string[];
  /** If you literally want it to appear on the first scroll, set true */
  revealOnFirstScroll?: boolean;
};

const DISMISS_KEY = "ms_portfolio_thanks_dismissed";

export default function EndOfPageBanner({
  email,
  builtWith = ["Next.js 15", "React", "TypeScript", "Tailwind", "shadcn/ui", "Vercel"],
  revealOnFirstScroll = false,
}: Props) {
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return sessionStorage.getItem(DISMISS_KEY) === "1";
  });

  // Option A: reveal as soon as user scrolls at all
  useEffect(() => {
    if (!revealOnFirstScroll || dismissed) return;
    const onScroll = () => {
      if (window.scrollY > 0) {
        setShow(true);
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [revealOnFirstScroll, dismissed]);

  // Option B (default): reveal when we reach the sentinel just after About/Contact
  useEffect(() => {
    if (revealOnFirstScroll || dismissed) return;
    const el = sentinelRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShow(true);
      },
      { rootMargin: "0px 0px -20% 0px" } // show a bit before true bottom
    );
    io.observe(el);
    return () => io.disconnect();
  }, [revealOnFirstScroll, dismissed]);

  const handleDismiss = () => {
    setShow(false);
    setDismissed(true);
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {}
  };

  return (
    <>
      {/* This tiny sentinel sits directly above the banner position */}
      {!revealOnFirstScroll && <div ref={sentinelRef} className="h-1 w-full" aria-hidden />}

      <AnimatePresence>
        {show && !dismissed && (
          <motion.section
            initial={{ opacity: 0, y: 12, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: 8, height: 0 }}
            transition={{ duration: 0.25 }}
            className="mt-6"
            aria-live="polite"
          >
            <div className="relative rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm">
              <button
                onClick={handleDismiss}
                className="absolute right-2 top-2 rounded-full p-1 text-slate-500 hover:bg-slate-100"
                aria-label="Dismiss"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="text-base sm:text-lg font-semibold">
                👋 Thanks for reading!
              </div>
              <p className="mt-1 text-sm text-slate-700">
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

              <div className="mt-3 flex flex-wrap gap-1.5">
                {builtWith.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] text-slate-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}

