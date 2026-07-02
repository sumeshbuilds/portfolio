"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "/", label: "index", num: "01" },
  { href: "/work", label: "work", num: "02" },
  { href: "/research", label: "research", num: "03" },
  { href: "/contact", label: "contact", num: "04" },
];

export default function FloatingNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-5 left-1/2 z-50 hidden -translate-x-1/2 sm:block"
      >
        <div className="flex items-center gap-1 rounded-full border border-moss/25 bg-ink/70 px-2 py-2 backdrop-blur-md shadow-[0_0_0_1px_rgba(143,174,99,0.05)]">
          {LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="group relative flex items-center gap-2 rounded-full px-4 py-2 text-[11px] uppercase tracking-widest2 transition-colors"
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-moss/15"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span
                  className={`relative z-10 tabular-nums ${
                    active ? "text-moss" : "text-parchment/30"
                  }`}
                >
                  {link.num}
                </span>
                <span
                  className={`relative z-10 ${
                    active
                      ? "text-parchment"
                      : "text-parchment/50 group-hover:text-parchment/90"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}
        </div>
      </motion.nav>

      <motion.button
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="fixed right-5 top-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-moss/25 bg-ink/70 backdrop-blur-md sm:hidden"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" className="text-moss">
          {open ? (
            <>
              <line x1="3" y1="3" x2="13" y2="13" stroke="currentColor" strokeWidth="1.2" />
              <line x1="13" y1="3" x2="3" y2="13" stroke="currentColor" strokeWidth="1.2" />
            </>
          ) : (
            <>
              <line x1="2" y1="4.5" x2="14" y2="4.5" stroke="currentColor" strokeWidth="1.2" />
              <line x1="2" y1="8" x2="14" y2="8" stroke="currentColor" strokeWidth="1.2" />
              <line x1="2" y1="11.5" x2="10" y2="11.5" stroke="currentColor" strokeWidth="1.2" />
            </>
          )}
        </svg>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-ink/95 backdrop-blur-sm sm:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
              }}
              className="flex h-full flex-col items-center justify-center gap-8"
            >
              {LINKS.map((link) => {
                const active = pathname === link.href;
                return (
                  <motion.li
                    key={link.href}
                    variants={{
                      hidden: { opacity: 0, y: 12 },
                      show: { opacity: 1, y: 0 },
                    }}
                  >
                    <Link href={link.href} className="flex items-baseline gap-3">
                      <span className="text-[11px] uppercase tracking-widest2 text-moss/70 tabular-nums">
                        {link.num}
                      </span>
                      <span
                        className={`font-display text-3xl italic ${
                          active ? "text-moss" : "text-parchment"
                        }`}
                      >
                        {link.label}
                      </span>
                    </Link>
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
