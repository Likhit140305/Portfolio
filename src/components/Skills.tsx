"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    label: "Backend",
    icon: "⚙️",
    accent: "#6366f1",
    accentRgb: "99,102,241",
    skills: [
      { name: "Go (Golang)", note: "learning" },
      { name: "REST API Design", note: "proficient" },
      { name: "PostgreSQL / SQL", note: "proficient" },
      { name: "System Design", note: "intermediate" },
      { name: "Microservices Concepts", note: "familiar" },
      { name: "Redis", note: "conceptual" },
    ],
  },
  {
    label: "Frontend",
    icon: "🎨",
    accent: "#8b5cf6",
    accentRgb: "139,92,246",
    skills: [
      { name: "React.js", note: "proficient" },
      { name: "Next.js", note: "proficient" },
      { name: "TypeScript", note: "proficient" },
      { name: "Tailwind CSS", note: "proficient" },
      { name: "Framer Motion", note: "proficient" },
    ],
  },
  {
    label: "DevOps & Tools",
    icon: "🚢",
    accent: "#a78bfa",
    accentRgb: "167,139,250",
    skills: [
      { name: "Docker", note: "intermediate" },
      { name: "Git & GitHub", note: "proficient" },
      { name: "GitHub Actions CI/CD", note: "intermediate" },
      { name: "Cloud Basics (AWS/GCP)", note: "familiar" },
    ],
  },
  {
    label: "Other",
    icon: "🧠",
    accent: "#6366f1",
    accentRgb: "99,102,241",
    skills: [
      { name: "Python", note: "proficient" },
      { name: "Agile Methodology", note: "familiar" },
      { name: "Testing Basics", note: "familiar" },
      { name: "SimPy / RTOS", note: "proficient" },
      { name: "TensorFlow / RL", note: "intermediate" },
    ],
  },
];

const noteColors: Record<string, string> = {
  proficient: "#6ee7b7",
  intermediate: "#93c5fd",
  learning: "#fbbf24",
  conceptual: "#c4b5fd",
  familiar: "#94a3b8",
};

function SkillCategory({
  category,
  index,
}: {
  category: (typeof skillCategories)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card p-6 md:p-7 flex flex-col gap-6"
    >
      {/* Category header */}
      <div className="flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center text-base"
          style={{ background: `rgba(${category.accentRgb},0.12)` }}
        >
          {category.icon}
        </div>
        <h3 className="text-sm font-semibold text-white/80 tracking-wide">{category.label}</h3>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, si) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 + si * 0.04, duration: 0.4 }}
            whileHover={{ scale: 1.04, y: -1 }}
            className="group flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium cursor-default transition-all duration-200"
            style={{
              background: `rgba(${category.accentRgb},0.06)`,
              border: `1px solid rgba(${category.accentRgb},0.15)`,
              color: "rgba(255,255,255,0.65)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = `rgba(${category.accentRgb},0.4)`;
              (e.currentTarget as HTMLElement).style.background = `rgba(${category.accentRgb},0.1)`;
              (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.9)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = `rgba(${category.accentRgb},0.15)`;
              (e.currentTarget as HTMLElement).style.background = `rgba(${category.accentRgb},0.06)`;
              (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.65)";
            }}
          >
            {skill.name}
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0 opacity-70"
              style={{ background: noteColors[skill.note] ?? "#94a3b8" }}
              title={skill.note}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-[100px] md:py-[140px] px-6 md:px-16 lg:px-24 relative">
      {/* Subtle background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 50% 100%, rgba(99,102,241,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="accent-line" />
          <span className="text-xs tracking-[0.25em] text-indigo-400 uppercase font-medium">
            Skills
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight"
        >
          Tools of the trade.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.14 }}
          className="text-white/60 text-[15px] leading-[1.7] mb-8 max-w-xl"
        >
          Technologies I work with, learning, or have strong conceptual mastery of.
        </motion.p>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.22 }}
          className="flex flex-wrap items-center gap-4 mb-12"
        >
          {Object.entries(noteColors).map(([label, color]) => (
            <div key={label} className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full" style={{ background: color }} />
              <span className="text-xs text-white/30 capitalize">{label}</span>
            </div>
          ))}
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {skillCategories.map((cat, i) => (
            <SkillCategory key={cat.label} category={cat} index={i} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 glass-card p-5 flex items-center gap-4"
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: "rgba(99,102,241,0.1)" }}
          >
            <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <p className="text-[15px] text-white/60 leading-relaxed">
            Currently deepening expertise in{" "}
            <span className="text-indigo-300">Go backend systems</span>,{" "}
            <span className="text-violet-300">PostgreSQL optimization</span>, and{" "}
            <span className="text-purple-300">distributed systems design</span> —
            to align with full-stack and backend engineering roles.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
