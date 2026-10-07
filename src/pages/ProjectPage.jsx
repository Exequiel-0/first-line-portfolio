import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { getProjectBySlug, projects } from "../data/projects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SkeletonImage from "../components/SkeletonImage";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: [0.25, 1, 0.5, 1] },
  }),
};

const SECTIONS = [
  { key: "problem", label: "Problem" },
  { key: "research", label: "Research" },
  { key: "process", label: "Process" },
  { key: "designNotes", label: "Design" },
  { key: "result", label: "Result" },
  { key: "learnings", label: "Learnings" },
];

export default function ProjectPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) return <Navigate to="/" replace />;

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="min-h-screen bg-bg text-ink">
      <Navbar />

      {/* case study hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 grid-paper opacity-30 pointer-events-none" />
        <div className="relative mx-auto max-w-[1000px] px-6 md:px-10 pt-16 pb-14">
          <motion.div initial="hidden" animate="show" custom={0} variants={fadeUp}>
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-[13px] text-ink-soft hover:text-ink transition-colors duration-200 mb-8"
            >
              <ArrowLeft size={14} strokeWidth={1.5} />
              All projects
            </Link>
          </motion.div>

          <motion.div initial="hidden" animate="show" custom={1} variants={fadeUp} className="flex items-center gap-3 mb-4">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: project.status === "Production" ? "#16A34A" : "#5A5A5A" }}
            />
            <span className="font-mono text-[12px] text-ink-soft">
              {project.status} · {project.year}
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            custom={2}
            variants={fadeUp}
            className="font-display text-4xl md:text-[52px] font-semibold tracking-tight text-ink leading-[1.05]"
          >
            {project.name}
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            custom={3}
            variants={fadeUp}
            className="mt-5 text-[17px] text-ink-soft max-w-[560px] leading-relaxed"
          >
            {project.tagline}
          </motion.p>

          <motion.div initial="hidden" animate="show" custom={4} variants={fadeUp} className="mt-8 flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <span key={t} className="font-mono text-[11px] text-ink-soft border border-line px-2.5 py-1">
                {t}
              </span>
            ))}
          </motion.div>
        </div>

        {/* project preview */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="relative h-[320px] md:h-[440px] mx-6 md:mx-10 mb-10 border border-line overflow-hidden"
>
  {project.image ? (
    <SkeletonImage
      src={project.image}
      alt={`${project.name} project preview`}
      className="w-full h-full"
    />
  ) : (
    <>
      <div className="absolute inset-0 grid-paper opacity-50" />

      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 30% 20%, ${project.color}22, transparent 60%)`,
        }}
      />

      <div
        className="absolute bottom-6 right-8 font-display font-semibold opacity-10 select-none"
        style={{
          fontSize: "180px",
          color: project.color,
        }}
      >
        {project.name.charAt(0)}
      </div>
    </>
  )}
</motion.div>
      </section>

      {/* content */}
      <section className="mx-auto max-w-[1000px] px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-8 space-y-14">
            {SECTIONS.map((s, i) => (
              <motion.div
                key={s.key}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.05, ease: [0.25, 1, 0.5, 1] }}
              >
                <h2 className="font-mono text-[12px] text-accent uppercase tracking-wide mb-3">{s.label}</h2>
                <p className="text-[16px] leading-relaxed text-ink-soft max-w-[600px]">{project[s.key]}</p>
              </motion.div>
            ))}
          </div>

          <aside className="md:col-span-4">
            <div className="sticky top-24 space-y-8">
              <div>
                <h3 className="font-mono text-[12px] text-ink-soft uppercase tracking-wide mb-4">Technologies</h3>
                <div className="space-y-4">
                  {project.technologies.map((t) => (
                    <div key={t.name} className="border-l-2 border-line pl-4">
                      <div className="font-mono text-[13px] text-ink">{t.name}</div>
                      <div className="text-[12px] text-ink-soft mt-0.5">{t.note}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-4 border-t border-line">
                {project.demo && (
                  <a
                    href={project.demo}
                    className="inline-flex items-center gap-2 text-[13px] font-medium text-ink hover:text-accent transition-colors duration-200"
                  >
                    <ExternalLink size={14} strokeWidth={1.5} />
                    Live Demo
                  </a>
                )}
                {project.code && (
                  <a
                    href={project.code}
                    className="inline-flex items-center gap-2 text-[13px] font-medium text-ink hover:text-accent transition-colors duration-200"
                  >
                    <Github size={14} strokeWidth={1.5} />
                    View Code
                  </a>
                )}
                {!project.demo && !project.code && (
                  <span className="text-[12px] text-ink-soft">Private repository.</span>
                )}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* next project */}
      <section className="border-t border-line">
        <Link
          to={`/projects/${next.slug}`}
          className="group flex items-center justify-between mx-auto max-w-[1000px] px-6 md:px-10 py-10"
        >
          <div>
            <span className="font-mono text-[11px] text-ink-soft uppercase tracking-wide">Next project</span>
            <h3 className="font-display text-2xl font-semibold text-ink mt-1 group-hover:text-accent transition-colors duration-200">
              {next.name}
            </h3>
          </div>
          <ArrowLeft size={20} strokeWidth={1.5} className="rotate-180 text-ink-soft group-hover:text-accent group-hover:translate-x-1 transition-all duration-200" />
        </Link>
      </section>

      <Footer />
    </div>
  );
}
