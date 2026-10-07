import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code2, Layers, Circle } from "lucide-react";

const seedData = [12, 18, 14, 22, 19, 28, 24, 31, 27, 36];

const stackFeed = [
  { label: "React · Vite · Tailwind CSS", tag: "core" },
  { label: "Supabase · PostgreSQL", tag: "backend" },
  { label: "Python · Flask · Supabase", tag: "tooling" },
];

function MiniChart({ data }) {
  const width = 420;
  const height = 112;
  const padding = 4;
  const max = 45;

  const points = data.map((value, index) => {
    const x =
      padding +
      (index / (data.length - 1)) * (width - padding * 2);

    const y =
      height -
      padding -
      (value / max) * (height - padding * 2);

    return `${x},${y}`;
  });

  const line = points.join(" ");
  const area = `${padding},${height} ${line} ${width - padding},${height}`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      className="w-full h-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="dashboard-chart-fill"
          x1="0"
          y1="0"
          x2="0"
          y2="1"
        >
          <stop offset="0%" stopColor="#2563EB" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
        </linearGradient>
      </defs>

      <polygon
        points={area}
        fill="url(#dashboard-chart-fill)"
      />

      <polyline
        points={line}
        fill="none"
        stroke="#2563EB"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export default function DashboardMock() {
  const [data, setData] = useState(seedData);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => {
        const last = prev[prev.length - 1];

        const nextValue = Math.max(
          8,
          Math.min(40, last + (Math.random() * 10 - 5))
        );

        return [...prev.slice(1), nextValue];
      });
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        ease: [0.25, 1, 0.5, 1],
        delay: 0.2,
      }}
      className="relative bg-panel border border-line w-full max-w-110 mx-auto"
    >
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-line">
        <span className="w-2.5 h-2.5 rounded-full bg-[#8e8e8e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#8e8e8e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#8e8e8e]" />
        <span className="ml-3 font-mono text-[11px] text-ink-soft">
          first-line — build
        </span>
      </div>

      <div className="p-5 space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Circle size={8} className="fill-accent text-accent" />
            <span className="font-mono text-[11px] text-ink-soft">
              available · freelance
            </span>
          </div>

          <span className="font-mono text-[11px] text-ink-soft">
            frontend focus
          </span>
        </div>

        <div className="h-28 -mx-2">
          <MiniChart data={data} />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="border border-line p-3">
            <div className="flex items-center gap-1.5 text-ink-soft mb-1">
              <Layers size={12} strokeWidth={1.5} />
              <span className="font-mono text-[10px]">
                status
              </span>
            </div>

            <span className="font-display text-lg font-semibold">
              Available
            </span>
          </div>

          <div className="border border-line p-3">
            <div className="flex items-center gap-1.5 text-ink-soft mb-1">
              <Code2 size={12} strokeWidth={1.5} />
              <span className="font-mono text-[10px]">
                role
              </span>
            </div>

            <span className="font-display text-lg font-semibold">
              Frontend Dev
            </span>
          </div>
        </div>

        <div className="space-y-2 pt-1">
          {stackFeed.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.4 + index * 0.1,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="flex items-center justify-between font-mono text-[11px]"
            >
              <span className="text-ink truncate pr-2">
                {item.label}
              </span>

              <span className="text-ink-soft shrink-0">
                {item.tag}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}