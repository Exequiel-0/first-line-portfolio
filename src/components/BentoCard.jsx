import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SkeletonImage from "./SkeletonImage";

// Bento sizing map -> tailwind col/row spans on the 12-col grid.
const SIZE_MAP = {
  large: "md:col-span-8 md:row-span-2",
  wide: "md:col-span-6 md:row-span-1",
  tall: "md:col-span-4 md:row-span-2",
  medium: "md:col-span-6 md:row-span-1",
};

export default function BentoCard({ project, index }) {
  const spanClass = SIZE_MAP[project.size] || "md:col-span-6 md:row-span-1";
  const isTallOrLarge = project.size === "tall" || project.size === "large";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.07, ease: [0.25, 1, 0.5, 1] }}
      className={`col-span-1 ${spanClass}`}
    >
      <Link
        to={`/projects/${project.slug}`}
        className="group relative flex flex-col h-full min-h-55 bg-panel border border-line overflow-hidden"
      >
        {/* project preview */}
<div
  className={`relative overflow-hidden ${
    isTallOrLarge ? "flex-1" : "h-35"
  }`}
>
  {project.image ? (
    <SkeletonImage
      src={project.image}
      alt={`${project.name} project preview`}
      className="w-full h-full transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.02]"
    />
  ) : (
    <>
      <div className="absolute inset-0 grid-paper opacity-50" />

      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${project.color}22, transparent 60%)`,
        }}
      />

      <div
        className="absolute bottom-4 right-4 font-display font-semibold opacity-10 select-none"
        style={{
          fontSize: isTallOrLarge ? "96px" : "56px",
          color: project.color,
        }}
      >
        {project.name.charAt(0)}
      </div>
    </>
  )}

  <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-panel/90 backdrop-blur-sm border border-line px-2.5 py-1">
    <span
      className="w-1.5 h-1.5 rounded-full"
      style={{
        backgroundColor:
          project.status === "Production" ? "#16A34A" : "#5A5A5A",
      }}
    />
    <span className="font-mono text-[10px] text-ink-soft">
      {project.status}
    </span>
  </div>
</div>

        {/* meta */}
        <div className="p-5 border-t border-line">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-display text-[17px] font-semibold text-ink">{project.name}</h3>
              <p className="mt-1 text-[13px] text-ink-soft leading-snug">{project.tagline}</p>
            </div>
            <span className="font-mono text-[11px] text-ink-soft shrink-0 mt-1">{project.year}</span>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex flex-wrap gap-1.5">
              {project.stack.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10px] text-ink-soft border border-line px-2 py-0.5"
                >
                  {t}
                </span>
              ))}
            </div>
            <span className="inline-flex items-center gap-1 text-[12px] font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              View Case Study
              <ArrowUpRight size={13} strokeWidth={1.5} />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
