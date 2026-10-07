import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import DashboardMock from "./DashboardMock";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 1, 0.5, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-paper opacity-40 pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
              className="font-mono text-[13px] text-accent mb-4"
            >
              Frontend Developer
            </motion.p>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="font-display text-[44px] md:text-[64px] leading-[1.05] font-semibold tracking-tight text-ink"
            >
              Exequiel Calix
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="mt-6 text-[17px] md:text-[19px] leading-[1.6] text-ink-soft max-w-[520px]"
            >
              Building performant interfaces, modern web applications
              and scalable user experiences.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-ink text-white px-5 py-3 text-[14px] font-medium hover:bg-accent transition-colors duration-200"
              >
                View Projects
                <ArrowRight size={15} strokeWidth={1.5} />
              </a>
              <a
                href="/cv-exequiel-calix.pdf"
                download
                className="inline-flex items-center gap-2 border border-line px-5 py-3 text-[14px] font-medium text-ink hover:border-ink transition-colors duration-200"
              >
                <Download size={15} strokeWidth={1.5} />
                Download CV
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
            className="md:col-span-5"
          >
            <DashboardMock />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
