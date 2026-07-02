import Hero from "@/components/Hero";

export default function ResearchPage() {
  return (
    <Hero
      variant="research"
      eyebrow="ongoing research"
      title={
        <>
          dks &amp;
          <br />
          odisha&apos;s model
        </>
      }
      subtitle="a reasoning framework drawn from nyaya logic, and a gemma-based language model trained on odisha's schemes, ecology and history."
      footer={
        <div className="flex items-center gap-4 text-[11px] uppercase tracking-widest2 text-parchment/40">
          <span>nyaya · pramāṇa</span>
          <span className="h-1 w-1 rounded-full bg-moss/60" />
          <span>qlora on gemma 2b</span>
        </div>
      }
    />
  );
}
