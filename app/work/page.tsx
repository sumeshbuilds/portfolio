import Hero from "@/components/Hero";

const PROJECTS = [
  { name: "SpamPilot", tag: "deliverability" },
  { name: "PhytoAI", tag: "botany + vision" },
  { name: "Clamss", tag: "esports marketing" },
];

export default function WorkPage() {
  return (
    <Hero
      variant="work"
      eyebrow="selected builds"
      title="work"
      subtitle="products shipped solo, end to end — design, code, deploy."
    >
      <ul className="mx-auto flex w-full max-w-md flex-col divide-y divide-moss/15 border-y border-moss/15">
        {PROJECTS.map((p) => (
          <li
            key={p.name}
            className="group flex items-center justify-between py-4 text-left transition-colors hover:bg-moss/5"
          >
            <span className="font-display text-xl italic text-parchment group-hover:text-moss">
              {p.name}
            </span>
            <span className="text-[10px] uppercase tracking-widest2 text-parchment/40">
              {p.tag}
            </span>
          </li>
        ))}
      </ul>
    </Hero>
  );
}
