"use client";

import { motion } from "framer-motion";
import HeroBackdrop from "@/components/HeroBackdrop";

type Variant = "index" | "work" | "research" | "contact";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero({
  variant,
  eyebrow,
  title,
  subtitle,
  footer,
  leading,
  children,
}: {
  variant: Variant;
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  footer?: React.ReactNode;
  leading?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative flex h-dvh w-screen flex-col items-center justify-center px-6">
      <HeroBackdrop variant={variant} />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex max-w-3xl flex-col items-center text-center"
      >
        {leading && (
          <motion.div variants={item} className="mb-5">
            {leading}
          </motion.div>
        )}

        <motion.p
          variants={item}
          className="mb-5 text-[11px] uppercase tracking-widest2 text-moss"
        >
          {eyebrow}
        </motion.p>

        <motion.h1
          variants={item}
          className="text-balance font-display text-[13vw] italic leading-[0.95] text-parchment sm:text-[7vw]"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-balance text-[13px] leading-relaxed text-parchment/55 sm:text-sm"
          >
            {subtitle}
          </motion.p>
        )}

        {children && (
          <motion.div variants={item} className="mt-10 w-full">
            {children}
          </motion.div>
        )}
      </motion.div>

      {footer && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="absolute bottom-8 left-0 right-0 z-10 flex justify-center px-6"
        >
          {footer}
        </motion.div>
      )}
    </section>
  );
}
