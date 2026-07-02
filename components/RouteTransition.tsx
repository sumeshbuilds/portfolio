"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function RouteTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, filter: "blur(6px)", scale: 1.01 }}
        animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
        exit={{ opacity: 0, filter: "blur(6px)", scale: 0.99 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="h-dvh w-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
