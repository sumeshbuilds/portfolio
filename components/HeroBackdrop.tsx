"use client";

import { motion } from "framer-motion";

type Variant = "index" | "work" | "research" | "contact";

const PATHS: Record<Variant, string[]> = {
  index: [
    "M -50 620 C 150 560, 220 420, 180 280 C 150 170, 260 120, 340 160 C 430 200, 470 90, 600 60",
    "M 180 280 C 260 330, 340 340, 400 420 C 450 490, 560 470, 620 560",
    "M 340 160 C 400 240, 500 250, 540 340",
    "M -50 780 C 120 760, 260 800, 340 720 C 410 650, 520 700, 610 640",
  ],
  work: [
    "M -40 200 L 160 200 L 160 340 L 380 340 L 380 160 L 620 160",
    "M 160 340 L 160 500 L 320 500 L 320 620",
    "M 380 340 L 480 340 L 480 480 L 640 480",
    "M -40 640 L 120 640 L 120 760 L 300 760",
  ],
  research: [
    "M -30 300 C 120 260, 140 380, 260 360 C 380 340, 380 220, 500 240 C 600 258, 620 160, 720 180",
    "M 260 360 C 300 440, 260 520, 360 560 C 440 592, 420 680, 520 700",
    "M 500 240 C 540 320, 640 320, 660 420",
    "M 140 380 C 90 460, 150 560, 90 660",
  ],
  contact: [
    "M -40 460 C 160 460, 160 300, 360 300 C 560 300, 560 460, 760 460",
    "M 360 300 C 360 200, 360 120, 360 40",
    "M 200 460 C 200 560, 260 620, 360 620 C 460 620, 520 560, 520 460",
    "M -40 700 C 140 660, 260 700, 360 660",
  ],
};

const NODES: Record<Variant, [number, number][]> = {
  index: [
    [180, 280],
    [340, 160],
    [600, 60],
    [620, 560],
  ],
  work: [
    [160, 340],
    [380, 160],
    [480, 480],
    [320, 620],
  ],
  research: [
    [260, 360],
    [500, 240],
    [660, 420],
    [520, 700],
  ],
  contact: [
    [360, 300],
    [360, 40],
    [520, 460],
    [360, 660],
  ],
};

export default function HeroBackdrop({ variant }: { variant: Variant }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.svg
        key={variant}
        viewBox="0 0 800 800"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full opacity-[0.55]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.55 }}
        transition={{ duration: 1 }}
      >
        <defs>
          <radialGradient id="fade" cx="50%" cy="42%" r="70%">
            <stop offset="0%" stopColor="#0b0f0c" stopOpacity="0" />
            <stop offset="100%" stopColor="#0b0f0c" stopOpacity="0.9" />
          </radialGradient>
        </defs>

        {PATHS[variant].map((d, i) => (
          <motion.path
            key={d}
            d={d}
            fill="none"
            stroke={i % 3 === 0 ? "#8fae63" : "#c9d9a8"}
            strokeWidth={1}
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.7 }}
            transition={{ duration: 2.2, delay: i * 0.15, ease: "easeInOut" }}
          />
        ))}

        {NODES[variant].map(([cx, cy], i) => (
          <motion.circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r={3.5}
            fill="#b96b3c"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.9 }}
            transition={{ duration: 0.6, delay: 1.2 + i * 0.12 }}
          />
        ))}

        <rect width="800" height="800" fill="url(#fade)" />
      </motion.svg>
    </div>
  );
}
