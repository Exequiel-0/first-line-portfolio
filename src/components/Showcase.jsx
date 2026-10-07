import { motion } from "framer-motion";
import { projects } from "../data/projects";
import BentoCard from "./BentoCard";

export default function Showcase() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="mx-auto max-w-350 px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          className="mb-14 flex items-end justify-between flex-wrap gap-4"
        >
          <div>
            <p className="font-mono text-[13px] text-accent mb-3">01 · Work</p>
            <h2 className="font-display text-3xl md:text-[40px] font-semibold tracking-tight text-ink">
              Selected Projects
            </h2>
          </div>
          <p className="text-[14px] text-ink-soft max-w-[320px]">
            Selected builds and tools, documented as focused case studies —
            from production projects to work currently in development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-55 gap-5">
          {projects.map((project, i) => (
            <BentoCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
