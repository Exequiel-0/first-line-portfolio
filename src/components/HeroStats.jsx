import { motion } from "framer-motion";

const STATS = [
  { value: "2", label: "Projects in Production" },
  { value: "1", label: "Project in Development" },
  { value: "11", label: "Technologies" },
  { value: "100%", label: "Independent Workflow" },
];

export default function HeroStats() {
  return (
    <section className="border-y border-line bg-panel">
      <div className="mx-auto max-w-350 px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.4,
                delay: i * 0.06,
                ease: [0.25, 1, 0.5, 1],
              }}
              className={`py-10 px-6 ${
                i !== 0 ? "border-l border-line" : ""
              } ${
                i < 2 ? "border-b md:border-b-0 border-line" : ""
              }`}
            >
              <div className="font-display text-3xl md:text-4xl font-semibold text-ink">
                {s.value}
              </div>

              <div className="mt-2 font-mono text-[12px] text-ink-soft uppercase tracking-wide">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}