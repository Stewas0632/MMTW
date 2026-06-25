"use client";

const items = [
  "Money Moves The World",
  "Ambition",
  "Purpose",
  "Hustle",
  "No Permission Required",
  "Built Different",
  "SS26 Collection",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <section className="overflow-hidden border-y border-white/5 bg-mmtw-dark py-5">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((text, i) => (
          <span
            key={`${text}-${i}`}
            className="mx-8 flex items-center gap-8 font-display text-2xl uppercase tracking-widest text-mmtw-light/80 md:text-3xl"
          >
            {text}
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-mmtw-flame" />
          </span>
        ))}
      </div>
    </section>
  );
}
