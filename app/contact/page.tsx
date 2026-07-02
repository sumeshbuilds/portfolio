import Hero from "@/components/Hero";

export default function ContactPage() {
  return (
    <Hero
      variant="contact"
      eyebrow="say hello"
      title="let's talk"
      subtitle="open to freelance web work and collaborations at the biology × ai edge. i reply fastest over email."
    >
      <div className="flex flex-col items-center gap-3 text-sm">
        <a
          href="mailto:hello@sumeshbuilds.me"
          className="border-b border-moss/40 pb-0.5 text-parchment transition-colors hover:text-moss"
        >
          hello@sumeshbuilds.me
        </a>
        <div className="flex gap-6 text-[11px] uppercase tracking-widest2 text-parchment/50">
          <a
            href="https://x.com/Sumeshpradhan5"
            target="_blank"
            rel="noreferrer"
            className="hover:text-moss"
          >
            x / twitter
          </a>
          <a
            href="https://sumeshbuilds.me"
            target="_blank"
            rel="noreferrer"
            className="hover:text-moss"
          >
            sumeshbuilds.me
          </a>
        </div>
      </div>
    </Hero>
  );
}
