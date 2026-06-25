import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import Logo from "@/components/ui/Logo";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind MMTW. — Money Moves The World. Premium streetwear for the ambitious.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-mmtw-black pt-24 md:pt-28">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-20 lg:px-16">
        <FadeIn>
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:gap-12">
            <Logo size="lg" link={false} />
            <div>
              <span className="font-sans text-xs uppercase tracking-ultra text-mmtw-accent">
                Our Story
              </span>
              <h1 className="mt-4 max-w-4xl font-display text-5xl uppercase leading-none tracking-wide text-mmtw-light md:text-8xl">
                Born From Ambition
              </h1>
            </div>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-16 lg:grid-cols-2">
          <FadeIn delay={0.1}>
            <p className="font-sans text-lg leading-relaxed text-mmtw-muted md:text-xl">
              MMTW. started with a simple belief: the clothes you wear should
              reflect the life you&apos;re building. We&apos;re not here to follow
              trends — we&apos;re here to set the pace for a generation that
              understands money moves the world, but purpose moves the soul.
            </p>
            <p className="mt-6 font-sans text-lg leading-relaxed text-mmtw-muted md:text-xl">
              Every piece is designed in-house with obsessive attention to fit,
              fabric, and finish. Oversized silhouettes. Premium materials.
              Minimal branding. Maximum impact.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="border-l border-mmtw-accent pl-8">
              <blockquote className="font-display text-3xl uppercase leading-tight tracking-wide text-mmtw-light md:text-4xl">
                &ldquo;We don&apos;t chase dreams. We build them.&rdquo;
              </blockquote>
              <p className="mt-4 font-sans text-sm text-mmtw-muted">
                — MMTW. Founders
              </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.3} className="mt-24 grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Quality First",
              body: "280gsm+ fabrics, reinforced stitching, and premium finishes on every piece.",
            },
            {
              title: "Limited Drops",
              body: "Small-batch releases that keep our community exclusive and our standards high.",
            },
            {
              title: "Global Mindset",
              body: "Designed for builders everywhere — from studio to street to boardroom.",
            },
          ].map((item) => (
            <div key={item.title} className="border border-white/5 p-8">
              <h3 className="font-display text-2xl uppercase tracking-wide text-mmtw-light">
                {item.title}
              </h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-mmtw-muted">
                {item.body}
              </p>
            </div>
          ))}
        </FadeIn>
      </div>
    </div>
  );
}
