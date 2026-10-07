import { motion } from "framer-motion";

const STACK = [
  { name: "HTML5", desc: "Semantic, accessible markup as the foundation." },
  { name: "CSS3", desc: "Modern layout with Grid, Flexbox and custom properties." },
  { name: "JavaScript", desc: "ES6+ fundamentals behind interactive interfaces." },
  { name: "React", desc: "Building interactive, component-based interfaces." },
  { name: "Vite", desc: "Fast, modern build tooling and development." },
  { name: "Tailwind CSS", desc: "Utility-first styling for scalable interfaces." },
  { name: "Supabase", desc: "Database, authentication and backend services." },
  { name: "PostgreSQL", desc: "Relational data modeling and structured storage." },
  { name: "Git & GitHub", desc: "Version control and project collaboration." },
  { name: "Python", desc: "Automation, scripting and application development." },
  { name: "Flask", desc: "Lightweight Python web applications and APIs." },
];

export default function StackSection() {
  return (
    <section id="stack" className="py-24 md:py-32 border-t border-line">
      <div className="mx-auto max-w-350 px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          className="mb-14"
        >
          <p className="font-mono text-[13px] text-accent mb-3">02 · Stack</p>
          <h2 className="font-display text-3xl md:text-[40px] font-semibold tracking-tight text-ink">
            Tools I build with
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-line">
          {STACK.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.06, ease: [0.25, 1, 0.5, 1] }}
              className="border-b border-r border-line p-7 hover:bg-panel transition-colors duration-200"
            >
              <h3 className="font-mono text-[15px] font-medium text-ink mb-2">{item.name}</h3>
              <p className="text-[13px] leading-relaxed text-ink-soft">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
