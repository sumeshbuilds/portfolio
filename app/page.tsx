import Hero from "@/components/Hero";
import Portrait from "@/components/Portrait";

export default function HomePage() {
  return (
    <Hero
      variant="index"
      leading={<Portrait size={84} />}
      eyebrow="sumesh pradhan — bhawanipatna, odisha"
      title={
        <>
          biology.
          <br />
          intelligence.
          <br />
          the web.
        </>
      }
      subtitle="final-year cs student building at the seam of the three — an odia-language ai model, indie saas, and freelance web craft."
      footer={
        <div className="flex items-center gap-4 text-[11px] uppercase tracking-widest2 text-parchment/40">
          <span>est. bhawanipatna</span>
          <span className="h-1 w-1 rounded-full bg-moss/60" />
          <span>sumeshbuilds</span>
          <span className="h-1 w-1 rounded-full bg-moss/60" />
          <span>devance</span>
        </div>
      }
    />
  );
}
