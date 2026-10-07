import { motion } from "framer-motion";

const TIMELINE = [
  { label: "Started Learning" },
  { label: "First Projects" },
  { label: "Freelance" },
  { label: "Today" },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-line">
      <div className="mx-auto max-w-350 px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            className="md:col-span-4"
          >
            <p className="font-mono text-[13px] text-accent mb-3">03 · About</p>
            <h2 className="font-display text-3xl md:text-[40px] font-semibold tracking-tight text-ink leading-[1.1]">
              Self-taught. Detail-obsessed.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
            className="md:col-span-8"
          >
            <div className="space-y-5 text-[15px] leading-relaxed text-ink-soft max-w-160">
              <p>
                I'm a self-taught frontend developer focused on React, Vite, Tailwind CSS
                and modern web applications. I learn by building complete projects and
                solving the problems that come with them.
              </p>

              <p>
                My current focus is building clean, production-ready interfaces with
                practical backend integrations when the project requires them. I work
                independently across the stack, from application structure and data
                modeling to the final interface.
              </p>
            </div>

            {/* timeline */}
            <div className="mt-14 flex flex-col md:flex-row md:items-center gap-6 md:gap-0">
              {TIMELINE.map((step, i) => (
                <div key={step.label} className="flex md:flex-1 items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.4, delay: i * 0.1, ease: [0.25, 1, 0.5, 1] }}
                    className="flex items-center gap-3 md:flex-col md:items-start md:gap-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                    <span className="font-mono text-[12px] text-ink whitespace-nowrap">
                      {step.label}
                    </span>
                  </motion.div>
                  {i < TIMELINE.length - 1 && (
                    <div className="hidden md:block flex-1 h-px bg-line mx-4" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
