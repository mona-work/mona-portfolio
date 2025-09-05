"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

type Props = {
  email: string;
  avatarSrc?: string;
  name?: string;
  builtWith?: string[];
  /** Show when user is within this many px of the bottom */
  appearDistance?: number; // default: 220
};

export default function FloatingThanksBubble({
  email,
  avatarSrc = "/profile.png",
  name = "Mona",
  builtWith = ["Next.js 15", "React", "TypeScript", "Tailwind", "shadcn/ui", "Vercel"],
  appearDistance = 220,
}: Props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let ticking = false;

    const check = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const viewportH = window.innerHeight;
      const docH = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      );
      const nearBottom = viewportH + scrollY >= docH - appearDistance;
      setShow(nearBottom);
      ticking = false;
    };

    const onScrollOrResize = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(check);
      }
    };

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    check(); // handle initial position

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [appearDistance]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.98 }}
          transition={{ duration: 0.22 }}
          className="fixed z-50 right-4 bottom-4 sm:right-6 sm:bottom-6 
                     pb-[env(safe-area-inset-bottom)] pr-[env(safe-area-inset-right)]"
          aria-live="polite"
        >
          <div className="flex items-end gap-3 pointer-events-auto">
            {/* Speech bubble (to the left of the avatar) */}
            <div className="relative max-w-[78vw] sm:max-w-xs rounded-2xl bg-emerald-50 text-slate-800
                            shadow-xl ring-1 ring-emerald-200/70  p-3 sm:p-4 dark:bg-emerald-900/40 dark:ring-emerald-800/40">
              {/* Tail pointing to the avatar */}
              <span
                className="absolute -right-2 bottom-5 h-4 w-4 bg-emerald-50 rotate-45 
                           shadow-[0_1px_2px_rgba(0,0,0,0.08)] ring-1 ring-emerald-200/70 dark:bg-emerald-900/40 dark:ring-emerald-800/40
             hidden md:block"
                aria-hidden
              />
              <div className="text-sm font-semibold">Thanks for reading!</div>
              <p className="mt-1 text-sm">
                I built this site with {builtWith.join(", ")}.
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
            </div>

            {/* Avatar */}
            <Image
              src={avatarSrc}
              alt={`${name} headshot`}
              width={56}
              height={56}
              className="hidden md:block h-14 w-14 rounded-full object-cover ring-2 ring-emerald-100 shadow-md"
              priority={false}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

